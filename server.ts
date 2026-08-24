import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getAi(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ 
      status: "ok", 
      time: new Date().toISOString(),
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY)
    });
  });

  // AI Mystery Investigator Chat Endpoint
  app.post("/api/ai/investigate", async (req, res) => {
    try {
      const { query, history = [], articleContext = null } = req.body;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Sual və ya mövzu daxil edilməlidir." });
      }

      const ai = getAi();
      
      const systemInstruction = `Sən DARKPEDIA Ensiklopediyasının "Qaranlıq Tədqiqatçı Yİ" (Süni İntellekt Eksperti) sistemisən.
Sənin missiyan: Tarixin ən qaranlıq, açılmamış sirli hadisələri, kriptoqrafik tapmacalar, paranormal iddialar, kosmik anomaliyalar, məşhur açılmamış cinayətlər və sirli məkanlar haqqında dərindən elmi, arxivə əsaslanan və obyektiv təhlil təqdim etməkdir.

Qaydaların:
1. Əsas dili: Əsasən Azərbaycan dilində səlis, rəsmi və qaranlıq arxiv üslubunda cavab ver (istifadəçi başqa dildə yazarsa, həmin dildə cavab ver).
2. Obyektivlik: Faktları ("Təsdiqlənmiş Fakt"), hipotezləri ("Fərziyyə/Nəzəriyyə") və şəhər əfsanələrini ("Əfsanə/Mif") bir-birindən aydın ayır.
3. Struktur: Cavabını aydın başlıqlar, bəndlər və yekun "DARKPEDIA Qeydi" ilə formalaşdır.
4. Məzmun: Oxucunu maarifləndirən arxiv detalları, tarixlər, elmi tədqiqatlar və ekspert rəylərini vurğula.`;

      let promptContent = query;
      if (articleContext) {
        promptContent = `[MƏQALƏ KONTEKSTİ]:\nBaşlıq: ${articleContext.title}\nKateqoriya: ${articleContext.category}\nStatus: ${articleContext.status}\nTəsvir: ${articleContext.description}\n\n[İSTİFADƏÇİ SUALI]:\n${query}`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: promptContent,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "Cavab hazırlana bilmədi. Zəhmət olmasa yenidən cəhd edin.";

      return res.json({ 
        success: true, 
        reply: replyText 
      });
    } catch (error: any) {
      console.error("Gemini investigate error:", error);
      return res.status(500).json({ 
        error: error?.message || "Yİ sorğusu icra edilərkən xəta baş verdi.",
        fallback: true
      });
    }
  });

  // AI Deep Article Analyzer (Theories, Debunking & Evidence assessment)
  app.post("/api/ai/analyze-article", async (req, res) => {
    try {
      const { article } = req.body;
      if (!article || !article.title) {
        return res.status(400).json({ error: "Məqalə məlumatları daxil edilməyib." });
      }

      const ai = getAi();
      const prompt = `Aşağıdakı qaranlıq ensiklopediya hadisəsini dərindən təhlil et:
Məqalə: "${article.title}" (${article.originalName || ''})
Kateqoriya: ${article.category} / ${article.subcategory}
Tarix və Məkan: ${article.date}, ${article.location}
Məzmun Xülasəsi: ${article.description}

Zəhmət olmasa JSON formatında aşağıdakı strukturu qaytar:
- "summary": 2-3 cümləlik kriminalistik/elmi xülasə
- "keyAnomalies": [hadisədəki izah olunmayan 3-4 əsas anomaliya]
- "leadingTheoryAnalysis": Ən güclü nəzəriyyənin elmi tənqidi və çatışmazlıqları
- "forensicScore": Hadisənin açılma ehtimalı (məs: "15% (Açılması qeyri-mümkün)", "85% (Faktiki həll olunub)")
- "conspiracyIndex": Konspiroloji dərəcə ("Aşağı", "Orta", "Yüksək", "Ekstremal")
- "investigatorVerdict": Yİ Baş Tədqiqatçısının yekun analitik rəyi (1 paraqraf)`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "Sən DARKPEDIA Elmi Kriminalistika və Anomaliyalar Şurasının Baş Analitiki rolundasan. Həmişə dəqiq JSON formatında cavab ver.",
          responseMimeType: "application/json",
          temperature: 0.5,
        }
      });

      let parsedData: any = {};
      try {
        parsedData = JSON.parse(response.text || "{}");
      } catch {
        parsedData = { raw: response.text };
      }

      return res.json({ success: true, analysis: parsedData });
    } catch (error: any) {
      console.error("Gemini analyze-article error:", error);
      return res.status(500).json({ error: error?.message || "Məqalə analizi uğursuz oldu." });
    }
  });

  // AI Auto-Article Generator for Admin Panel (Single stage fast mode)
  app.post("/api/ai/generate-article", async (req, res) => {
    try {
      const { topic, category } = req.body;
      if (!topic) {
        return res.status(400).json({ error: "Mövzu daxil edilməlidir." });
      }

      const ai = getAi();
      const prompt = `DARKPEDIA Ensiklopediyası üçün aşağıdakı mövzuda tam formatlı elmi-tədqiqat məqaləsi hazırla:
Mövzu: "${topic}"
Tövsiyə edilən Kateqoriya: "${category || 'sirli-hadiseler'}"

Zəhmət olmasa tam JSON formatında bu strukturu təqdim et:
{
  "title": "Azərbaycanca Dəqiq Başlıq",
  "originalName": "Orijinal / Beynəlxalq Adı (məs: İngiliscə/Latınca)",
  "slug": "kebab-case-slug",
  "description": "2-3 cümləlik dərin və cəlbedici ensiklopedik xülasə",
  "category": "${category || 'sirli-hadiseler'}",
  "subcategory": "Dəqiq alt kateqoriya",
  "date": "Hadisənin baş verdiyi il və ya dövr",
  "location": "Şəhər, Ölkə və ya Məkan",
  "factStatus": "verified_fact" və ya "theory" və ya "unverified_claim",
  "status": "İşin vəziyyəti (məs: 'Açılmamış İş / Təsdiqlənmiş Anomaliya')",
  "readingTime": 15,
  "sections": [
    {
      "id": "giris-haqqinda",
      "title": "1. Hadisənin Mahiyyəti və Tarixi Giriş",
      "content": "Ətraflı, 3-6 cümləlik dolğun paraqraflar...",
      "badge": "fact",
      "badgeText": "Təsdiqlənmiş Fakt"
    },
    {
      "id": "xronologiya",
      "title": "2. Tam Xronologiya və Hadisələr Zənciri",
      "content": "Hadisələrin addım-addım inkişafı...",
      "badge": "fact",
      "badgeText": "Xronologiya"
    },
    {
      "id": "istintaq-deliller",
      "title": "3. Maddi Sübutlar və Kriminalistik Dəlillər",
      "content": "Rəsmi sənədlər, ekspertizalar və tapıntılar...",
      "badge": "fact",
      "badgeText": "Maddi Sübutlar"
    },
    {
      "id": "nezeriyyeler",
      "title": "4. Əsas Elmi və Alternativ Nəzəriyyələr",
      "content": "İrəli sürülmüş fərziyyələrin elmi müqayisəsi...",
      "badge": "theory",
      "badgeText": "Elmi Hipotez"
    },
    {
      "id": "netice-ve-namelum",
      "title": "5. Hələ də İzahını Tapmamış Məqamlar və Yekun",
      "content": "Müasir elmin cavabsız qalan sualları və nəticə...",
      "badge": "unknown",
      "badgeText": "Açılmamış Sirlər"
    }
  ],
  "keyFacts": [
    { "label": "Kəşf / Hadisə Tarixi", "value": "Tarix" },
    { "label": "Qurbanlar / Obyektlər", "value": "Say və ya Parametr" },
    { "label": "Təsdiqlənmiş Dəlillər", "value": "Əsas sənəd" }
  ],
  "theories": [
    { "name": "Əsas Elmi Nəzəriyyə", "likelihood": "Yüksək", "description": "İzahı..." },
    { "name": "Alternativ Versiya", "likelihood": "Orta", "description": "İzahı..." }
  ],
  "sources": [
    { "title": "Rəsmi Arxiv və İstintaq Hesabatı", "publisher": "Dövlət Arxivi / Elmi Nəşriyyat", "year": "1990", "type": "academic" }
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "Sən DARKPEDIA Baş Ensiklopediya Redaktorusan. Həmişə təmiz JSON çıxışı ver.",
          responseMimeType: "application/json",
          temperature: 0.6,
        }
      });

      let generatedJson: any = {};
      try {
        generatedJson = JSON.parse(response.text || "{}");
      } catch {
        generatedJson = { title: topic, description: response.text };
      }

      return res.json({ success: true, article: generatedJson });
    } catch (error: any) {
      console.error("Gemini generate-article error:", error);
      return res.status(500).json({ error: error?.message || "Məqalə generasiyası uğursuz oldu." });
    }
  });

  // AI 8-STAGE PROGRESSIVE LONG ARTICLE GENERATOR
  app.post("/api/ai/generate-article-stage", async (req, res) => {
    try {
      const { 
        stage, 
        topic, 
        category, 
        targetWordCount = 5000, 
        sourcesHint = '', 
        contentWarning = '',
        currentArticleDraft = null 
      } = req.body;

      if (!stage || !topic) {
        return res.status(400).json({ error: "Stage və topic parametrləri tələb olunur." });
      }

      const ai = getAi();
      const stageNum = Number(stage);

      let stageInstruction = `Sən DARKPEDIA Akademik və Kriminalistik Ensiklopediyasının Baş Redaktoru və Baş Elmi Məsləhətçisisən.
Məqsəd: "${topic}" mövzusunda real, olduqca əhatəli, dərin və təkrarsız ensiklopediya məqaləsi hazırlamaqdır (Hədəf həcm: təxminən ${targetWordCount} söz).

CRITICAL QAYDALAR:
1. Əsla fakt uydurma. Əgər məlumat məhduddursa, arxivlərdə məlumatın məhdud olduğunu birbaşa qeyd et.
2. Faktları (FACT), Elmi Nəzəriyyələri (THEORY), Paranormal İddiaları (CLAIM - mütləq təsdiqlənməmiş olduğunu göstərərək) və Həll Olunmamış Məqamları (UNKNOWN) tamamilə fərqləndir.
3. Paraqraflar rahat oxunuş üçün 3-6 cümlədən ibarət dolğun bloklar olsun.
4. Çıxış formatı HƏMİŞƏ təmiz JSON olmalıdır.`;

      let stagePrompt = '';

      if (stageNum === 1) {
        // STEP 1: Generate the article outline & metadata
        stagePrompt = `MÖVZU: "${topic}"
KATEQORİYA: "${category || 'sirli-hadiseler'}"
HƏDƏF SÖZ SAYI: ${targetWordCount} söz
MƏNBƏ İPUCULAR: "${sourcesHint}"
MƏZMUN XƏBƏRDARLIĞI: "${contentWarning}"

Mərhələ 1 (STEP 1): Məqalənin Dəqiq Outline Planını və İlkin Metadata Strukturunu hazırla.
JSON formatında aşağıdakıları qaytar:
{
  "title": "Azərbaycanca Dəqiq Ensiklopedik Başlıq",
  "originalName": "Orijinal / Beynəlxalq Adı (İngiliscə və ya orijinal dildə)",
  "slug": "kebab-case-slug",
  "description": "3-4 cümləlik dolğun, ciddi və elmi-tədqiqat xarakterli giriş xülasəsi (Lead)",
  "category": "${category || 'sirli-hadiseler'}",
  "subcategory": "Dəqiq alt kateqoriya",
  "tags": ["etiket1", "etiket2", "etiket3", "etiket4", "etiket5"],
  "date": "Hadisənin baş verdiyi dəqiq tarix və ya dövr",
  "location": "Şəhər, Rayon, Ölkə və ya Məkan",
  "coordinates": "Coğrafi koordinatlar (varsa)",
  "factStatus": "verified_fact" və ya "theory" və ya "unverified_claim" və ya "unresolved_unknown",
  "status": "İşin cari rəsmi vəziyyəti (məs: 'Rəsmi Təsdiqlənmiş Elmi Anomaliya' və ya 'Açılmamış Kriminal İş')",
  "theoriesCount": "Məs: '4 əsas elmi model və 2 alternativ hipotez'",
  "contentWarning": "${contentWarning || ''}",
  "outlineSections": [
    { "id": "giris", "title": "1. Giriş və Hadisənin Mahiyyəti", "level": 2, "description": "Tədqiqat obyektinin ilkin təqdimatı" },
    { "id": "tarixi-fon", "title": "2. Tarixi və Sosial Kontekst", "level": 2, "description": "Hadisənin baş verdiyi dövrün şərtləri" },
    { "id": "xronologiya", "title": "3. Tam Xronologiya və Hadisələr Zənciri", "level": 2, "description": "Tarixi hadisələrin günbəgün ardıcıllığı" },
    { "id": "istirakcilar-ve-mekanlar", "title": "4. Əsas Şəxslər, İştirakçılar və Coğrafi Məkanlar", "level": 2, "description": "Açar fiqurlar və məkanların analizi" },
    { "id": "maddi-subutlar", "title": "5. Məlum Maddi Sübutlar və Kriminalistik Tapıntılar", "level": 2, "description": "Fiziki dəlillər və ekspertizalar" },
    { "id": "resmi-istintaq", "title": "6. Rəsmi Sənədlər və Məxfi İstintaq Materialları", "level": 2, "description": "Dövlət və hüquq-mühafizə arxivləri" },
    { "id": "elmi-nezeriyyeler", "title": "7. Əsas Elmi və Rəsmi Nəzəriyyələr", "level": 2, "description": "Akademik konsensus və fizik/bioloji izahlar" },
    { "id": "alternativ-iddialar", "title": "8. Paranormal və Alternativ İddialar (Təsdiqlənməmiş)", "level": 2, "description": "Şəhər əfsanələri və folklor iddialarının elmi təkzibi" },
    { "id": "sonraki-tedqiqatlar", "title": "9. Sonrakı İllərdə Aparılmış Tədqiqatlar və Müasir Texnologiya", "level": 2, "description": "Yeni laboratoriya və 3D analizlər" },
    { "id": "faktlar-vs-namelum", "title": "10. Bu Gün Dəqiq Məlum Olanlar vs Hələ də Naməlum Qalanlar", "level": 2, "description": "Fakt və sirlərin dəqiq ayrılması" },
    { "id": "elaqeli-hadiseler", "title": "11. Əlaqəli və Bənzər Qlobal Hadisələr", "level": 2, "description": "Tarixdə oxşar anomaliyalar" },
    { "id": "yekun-netice", "title": "12. Yekun Analitik Nəticə", "level": 2, "description": "Ensiklopediya heyətinin ümumiləşdirməsi" },
    { "id": "menbeler", "title": "13. Akademik və Arxiv Mənbələri", "level": 2, "description": "Biblioqrafiya və istinadlar" }
  ]
}`;
      } else if (stageNum === 2) {
        // STEP 2: Introduction and Historical Background
        stagePrompt = `MÖVZU: "${topic}"
Cari Məqalə Başlığı: "${currentArticleDraft?.title || topic}"
Təsvir: "${currentArticleDraft?.description || ''}"

Mərhələ 2 (STEP 2): "Giriş və Hadisənin Mahiyyəti" və "Tarixi və Sosial Kontekst" bölmələrini ÇOX ƏTRAFLI, zəngin və dərin ensiklopedik abzaslarla hazırla.
Hər bölmə ən azı 3-5 dolğun abzasdan (hər abzas 3-6 cümlə) ibarət olsun.
Tarixi dövrün geosiyasi, elmi və ictimai şəraitini dərin təhlil et.

JSON formatında qaytar:
{
  "sections": [
    {
      "id": "giris-haqqinda",
      "title": "Giriş və Hadisənin Mahiyyəti",
      "level": 2,
      "content": "Bütün detalları ilə geniş, dərin 3-5 abzaslıq giriş mətni...",
      "badge": "fact",
      "badgeText": "Təsdiqlənmiş Fakt"
    },
    {
      "id": "tarixi-fon",
      "title": "Tarixi və Sosial Kontekst",
      "level": 2,
      "content": "Hadisənin baş verdiyi tarixi dövr, ictimai şərait və zəmin haqqında 3-5 abzaslıq dərin analiz...",
      "badge": "fact",
      "badgeText": "Tarixi Kontekst"
    }
  ]
}`;
      } else if (stageNum === 3) {
        // STEP 3: Full Chronology and Timeline Table
        stagePrompt = `MÖVZU: "${topic}"
Cari Məqalə: "${currentArticleDraft?.title || topic}"

Mərhələ 3 (STEP 3): Hadisənin Tam Xronologiyasını və Tarixi Hadisələr Zəncirini hazırla.
1. Xronoloji mətn: Hadisələrin əvvəlindən sonuna qədər saatbasaat və ya günbəgün tam təfərrüatlı abzaslar.
2. Timeline cədvəli (timelineTable): Hər bir addımın tarixi, baş verən hadisə, sənədləşdirilmiş mənbə və dəqiqlik statusu (fact/theory/claim/unknown).

JSON formatında qaytar:
{
  "section": {
    "id": "tam-xronologiya",
    "title": "Tam Xronologiya və Hadisələr Zənciri",
    "level": 2,
    "content": "Hadisələrin ardıcıl və təfərrüatlı xronoloji izahı (geniş abzaslar)...",
    "badge": "fact",
    "badgeText": "Xronoloji Arxiv"
  },
  "timelineTable": [
    { "date": "Dəqiq Tarix və ya Saat", "event": "Baş verən hadisənin dəqiq təsviri", "source": "Rəsmi Protokol / Arxiv", "status": "fact" },
    { "date": "Növbəti Tarix", "event": "Sonrakı inkişaf", "source": "Şahid İfadələri", "status": "fact" }
  ]
}`;
      } else if (stageNum === 4) {
        // STEP 4: Evidence, Investigations, Forensic Documents, People & Locations
        stagePrompt = `MÖVZU: "${topic}"
Cari Məqalə: "${currentArticleDraft?.title || topic}"

Mərhələ 4 (STEP 4): Maddi Sübutlar, Kriminalistik Dəlillər, Məxfi İstintaq Sənədləri, İştirakçılar və Məkanları hazırla.
1. Bölmə 1: "Məlum Maddi Sübutlar və Kriminalistik Tapıntılar" (Geniş elmi və ekspertiza mətni)
2. Bölmə 2: "Rəsmi Sənədlər və İstintaq Materialları" (Protokollar, arxiv sənədləri)
3. evidenceTable: Maddi sübutların cədvəli (Dəlil adı, Kateqoriya, Tapıldığı yer, Kriminalistik vəziyyəti, Təsdiq dərəcəsi)
4. peopleTable: Əsas şəxslər və rolları cədvəli (Ad, Rol, Hadisədəki taleyi/statusu, Əhəmiyyəti)
5. locationsTable: Coğrafi məkanlar cədvəli (Məkan adı, Əhəmiyyəti, Koordinat)

JSON formatında qaytar:
{
  "sections": [
    {
      "id": "maddi-subutlar",
      "title": "Məlum Maddi Sübutlar və Kriminalistik Tapıntılar",
      "level": 2,
      "content": "Aşkar edilmiş fiziki izlər, laboratoriya nəticələri və ekspertizalar haqqında dərin mətn...",
      "badge": "fact",
      "badgeText": "Maddi Dəlillər"
    },
    {
      "id": "resmi-istintaq",
      "title": "Rəsmi Sənədlər və Məxfi İstintaq Materialları",
      "level": 2,
      "content": "Rəsmi istintaqın gedişi, açılmış və gizli saxlanmış arxiv qovluqları haqqında mətn...",
      "badge": "fact",
      "badgeText": "İstintaq Sənədləri"
    }
  ],
  "evidenceTable": [
    { "item": "Dəlil Adı", "category": "Fiziki / Bioloji / Kimyəvi / Sənədli", "foundLocation": "Tapıldığı dəqiq yer", "forensicStatus": "Ekspertiza nəticəsi", "verificationBadge": "fact" }
  ],
  "peopleTable": [
    { "name": "Şəxsin Adı", "role": "Müstəntiq / Zərərçəkən / Alim / Şahid", "fateOrStatus": "Taleyi və ya Statusu", "significance": "Hadisədəki əsas rolu" }
  ],
  "locationsTable": [
    { "name": "Məkan Adı", "significance": "Məkanın hadisədəki açar əhəmiyyəti", "coordinates": "Koordinatlar (varsa)" }
  ]
}`;
      } else if (stageNum === 5) {
        // STEP 5: Theories, Scientific Explanations, Paranormal Claims & Alternative Hypotheses
        stagePrompt = `MÖVZU: "${topic}"
Cari Məqalə: "${currentArticleDraft?.title || topic}"

Mərhələ 5 (STEP 5): Əsas Nəzəriyyələri, Elmi İzahları və Alternativ İddiaları hazırla.
1. Bölmə 1: "Əsas Elmi və Rəsmi Nəzəriyyələr" (Fizika, meteorologiya, geologiya, kriminalistika və ya tibbi elmi konsensus)
2. Bölmə 2: "Paranormal və Alternativ İddialar (Təsdiqlənməmiş)" — MÜTLƏQ aydın şəkildə elmi əsası olmayan iddiaları 'unverified_claim' olaraq etiketlə və tənqidi elmi baxışla izah et.
3. Bölmə 3: "Sonrakı İllərdə Aparılmış Tədqiqatlar və Müasir Modelləşdirmə" (Müasir elmi texnologiyalar, peyk və DNT analizləri)
4. theories cədvəli: Bütün əsas nəzəriyyələrin müqayisəli cədvəli (Ad, Ehtimal dərəcəsi, İzahı, Elmi konsensus, Tərəfdarlar, Əsas tənqid).

JSON formatında qaytar:
{
  "sections": [
    {
      "id": "elmi-nezeriyyeler",
      "title": "Əsas Elmi və Rəsmi Nəzəriyyələr",
      "level": 2,
      "content": "Akademik və kriminalistik elmin irəli sürdüyü ən güclü izahlar (geniş abzaslar)...",
      "badge": "theory",
      "badgeText": "Elmi Konsensus"
    },
    {
      "id": "alternativ-iddialar",
      "title": "Paranormal və Alternativ İddialar (Təsdiqlənməmiş)",
      "level": 2,
      "content": "Cəmiyyətdə və populyar mədəniyyətdə yaranmış qeyri-rəsmi iddiaların analizi və tənqidi...",
      "badge": "claim",
      "badgeText": "Təsdiqlənməmiş İddia"
    },
    {
      "id": "sonraki-tedqiqatlar",
      "title": "Sonrakı İllərdə Aparılmış Tədqiqatlar və Müasir Modelləşdirmə",
      "level": 2,
      "content": "Son illərdə aparılan müasir laboratoriya təcrübələri və simulyasiyalar...",
      "badge": "theory",
      "badgeText": "Müasir Analiz"
    }
  ],
  "theories": [
    {
      "name": "Nəzəriyyənin Adı",
      "likelihood": "Yüksək" və ya "Orta" və ya "Aşağı" və ya "Təkzib edilmiş",
      "description": "Nəzəriyyənin mahiyyəti və əsas arqumentləri",
      "scientificConsensus": "Elmi ictimaiyyətin bu nəzəriyyəyə münasibəti",
      "proponents": "Nəzəriyyəni müdafiə edən əsas alimlər və ya tədqiqatçılar",
      "critique": "Nəzəriyyənin izah edə bilmədiyi çatışmazlıqlar və ziddiyyətlər"
    }
  ]
}`;
      } else if (stageNum === 6) {
        // STEP 6: What is Confirmed vs What Remains Unknown, Related Events & Conclusion
        stagePrompt = `MÖVZU: "${topic}"
Cari Məqalə: "${currentArticleDraft?.title || topic}"

Mərhələ 6 (STEP 6): "Bu Gün Dəqiq Məlum Olanlar vs Naməlum Qalanlar", "Əlaqəli Hadisələr" və "Yekun Analitik Nəticə" bölmələrini hazırla.
1. Bölmə 1: "Bu Gün Dəqiq Təsdiqlənmiş Faktlar və Hələ də İzahını Tapmamış Məqamlar"
2. Bölmə 2: "Əlaqəli və Bənzər Qlobal Hadisələr" (Tarixdə oxşar anomaliyalar və presedentlər)
3. Bölmə 3: "Yekun Analitik Nəticə" (Dərin ensiklopedik yekun)
4. confirmedFacts: Bu gün 100% təsdiqlənmiş 4-6 əsas fakt siyahısı.
5. unresolvedQuestions: Müasir elmin hələ də cavablandıra bilmədiyi 4-6 əsas sirr və sual.

JSON formatında qaytar:
{
  "sections": [
    {
      "id": "faktlar-vs-namelum",
      "title": "Bu Gün Dəqiq Məlum Olanlar və İzahını Tapmamış Məqamlar",
      "level": 2,
      "content": "Faktlarla sirli qalan məqamların dəqiq balansı və analizi...",
      "badge": "unknown",
      "badgeText": "Həll Olunmamış Sirlər"
    },
    {
      "id": "elaqeli-hadiseler",
      "title": "Əlaqəli və Bənzər Qlobal Hadisələr",
      "level": 2,
      "content": "Dünya tarixində və digər regionlarda qeydə alınmış oxşar hadisələr...",
      "badge": "fact",
      "badgeText": "Tarixi Müqayisə"
    },
    {
      "id": "yekun-netice",
      "title": "Yekun Analitik Nəticə",
      "level": 2,
      "content": "DARKPEDIA Elmi Şurasının hadisəyə dair ümumiləşdirilmiş yekun rəyi...",
      "badge": "fact",
      "badgeText": "Yekun Nəticə"
    }
  ],
  "confirmedFacts": [
    "Təsdiqlənmiş dəqiq fakt 1",
    "Təsdiqlənmiş dəqiq fakt 2"
  ],
  "unresolvedQuestions": [
    "Cavabsız qalan fundamental sual 1",
    "Cavabsız qalan fundamental sual 2"
  ]
}`;
      } else if (stageNum === 7) {
        // STEP 7: Academic and Archival Sources
        stagePrompt = `MÖVZU: "${topic}"
Cari Məqalə: "${currentArticleDraft?.title || topic}"
Mənbə qeydləri: "${sourcesHint}"

Mərhələ 7 (STEP 7): Mövzuya dair Ən Nüfuzlu Akademik, Dövlət Arxivi, Kitab və Elmi Jurnal Mənbələrini hazırla.
Ən azı 5-8 real və ya mövzuya ən uyğun rəsmi akademik mənbə təqdim et.

JSON formatında qaytar:
{
  "sources": [
    {
      "title": "Kitab, Məqalə və ya Arxiv Qovluğunun Tam Adı",
      "author": "Müəllif və ya Tədqiqat Qrupu",
      "publisher": "Nəşriyyat, Universitet və ya Dövlət Arxivi",
      "year": "Nəşr İli",
      "type": "academic" və ya "government" və ya "book" və ya "archive" və ya "news"
    }
  ],
  "keyFacts": [
    { "label": "Tarix", "value": "${currentArticleDraft?.date || 'Dövr'}", "status": "verified_fact" },
    { "label": "Məkan", "value": "${currentArticleDraft?.location || 'Məkan'}", "status": "verified_fact" },
    { "label": "Fakt Statusu", "value": "${currentArticleDraft?.status || 'Tədqiqat obyekti'}", "status": "verified_fact" }
  ]
}`;
      } else if (stageNum === 8) {
        // STEP 8: Combine and Finalize Full Article with Quality Check
        stagePrompt = `MÖVZU: "${topic}"
Cari Qaralama Məlumatları: ${JSON.stringify(currentArticleDraft ? {
  title: currentArticleDraft.title,
  slug: currentArticleDraft.slug,
  sectionsCount: currentArticleDraft.sections?.length || 0,
  theoriesCount: currentArticleDraft.theories?.length || 0,
  sourcesCount: currentArticleDraft.sources?.length || 0
} : {})}.

Mərhələ 8 (STEP 8): Bütün mərhələləri vahid, peşəkar redaktə olunmuş ensiklopedik məqaləyə birləşdir.
Məqalənin Table of Contents strukturunu tam sırala, əlaqəli məqalə slug-larını müəyyənləşdir və keyfiyyət nəzarət checklist-ini təqdim et.

JSON formatında qaytar:
{
  "tableOfContents": [
    { "id": "giris-haqqinda", "title": "1. Giriş və Hadisənin Mahiyyəti" },
    { "id": "tarixi-fon", "title": "2. Tarixi və Sosial Kontekst" },
    { "id": "tam-xronologiya", "title": "3. Tam Xronologiya və Hadisələr Zənciri" },
    { "id": "maddi-subutlar", "title": "4. Maddi Sübutlar və Kriminalistik Tapıntılar" },
    { "id": "resmi-istintaq", "title": "5. Rəsmi Sənədlər və İstintaq Materialları" },
    { "id": "elmi-nezeriyyeler", "title": "6. Əsas Elmi və Rəsmi Nəzəriyyələr" },
    { "id": "alternativ-iddialar", "title": "7. Paranormal və Alternativ İddialar" },
    { "id": "sonraki-tedqiqatlar", "title": "8. Sonrakı İllərdə Aparılmış Tədqiqatlar" },
    { "id": "faktlar-vs-namelum", "title": "9. Dəqiq Məlum Olanlar vs Naməlum Qalanlar" },
    { "id": "elaqeli-hadiseler", "title": "10. Əlaqəli Qlobal Hadisələr" },
    { "id": "yekun-netice", "title": "11. Yekun Analitik Nəticə" },
    { "id": "menbeler", "title": "12. Mənbələr və Biblioqrafiya" }
  ],
  "relatedArticleSlugs": [
    "dyatlov-kecidi-hadisesi",
    "cernobil-fil-ayagi-corium",
    "voynich-elyazmasi",
    "zodyak-qatili",
    "tunguska-hadisesi-1908",
    "mary-celeste-arvahi"
  ],
  "qualityChecklist": {
    "hasIntroduction": true,
    "hasChronology": true,
    "hasSources": true,
    "factsSeparatedFromTheories": true,
    "noObviousRepetition": true,
    "noFabricatedStatistics": true,
    "noUnsupportedAccusations": true,
    "contentWarningChecked": true,
    "wordCountVerified": true,
    "relatedArticlesAdded": true
  }
}`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: stagePrompt,
        config: {
          systemInstruction: stageInstruction,
          responseMimeType: "application/json",
          temperature: 0.5,
        }
      });

      let stageResult: any = {};
      try {
        stageResult = JSON.parse(response.text || "{}");
      } catch (parseErr) {
        console.error("JSON parse error in stage " + stageNum, parseErr);
        stageResult = { rawText: response.text };
      }

      return res.json({
        success: true,
        stage: stageNum,
        data: stageResult
      });
    } catch (error: any) {
      console.error("Gemini generate-article-stage error:", error);
      return res.status(500).json({ error: error?.message || "Mərhələ generasiyası uğursuz oldu." });
    }
  });

  // Vite integration middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DARKPEDIA Full-Stack Server running on port ${PORT}`);
  });
}

startServer();
