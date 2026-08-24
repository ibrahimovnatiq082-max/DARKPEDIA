export interface AboutGlossaryTerm {
  term: string;
  category: string;
  definition: string;
  scientificContext: string;
}

export interface ForensicProtocol {
  stepNumber: number;
  name: string;
  objective: string;
  methodology: string;
  riskOfError: string;
}

export const ABOUT_EXTENDED_SECTIONS = {
  historicalEpistemologyEssay: `
## Fəlsəfi və Tarixi Epistemologiya: Qaranlıq Tarixin Metodoloji Dərki

Tarix boyu insan cəmiyyətləri anomaliyalar, izah olunmamış qətllər və təbiət sirləri qarşısında iki əsas ifrat mövqeyə yuvarlanmışlar: bir tərəfdən hər bir anlaşılmaz hadisəni dini və ya demonoloji lənət adlandıran dözümsüz ehkamçılıq, digər tərəfdən isə hələ izah olunmamış faktları ümumiyyətlə inkar edən səthi pozitivist təkzibçilik. DARKPEDIA məhz bu iki ifrat arasında üçüncü yolu — tənqidi elmi realizmi və metodik şübhəçiliyi (metodological skepticism) seçmişdir.

Rene Dekartın "De omnibus dubitandum est" (Hər şeydən şübhələnmək lazımdır) şüarını rəhbər tutaraq, biz qaranlıq hadisələri tədqiq edərkən aşağıdakı dörd təməl epistemoloji suala cavab axtarırıq:

1. Hadisənin fiziki və ya sənədli izi mövcuddurmu, yoxsa o, yalnız şifahi şayiə və ya kütləvi psixoz məhsuludur?
2. Hadisə zamanı qeydə alınmış ölçmə cihazlarının (seysmoloqlar, radiasiya sayğacları, maqnitometrlər, kriminoloji kameralar) parametrləri dövrün texnoloji xətaları ilə izah edilə bilərmi?
3. İştirakçıların və şahidlərin ifadələrində maraq toqquşması, siyasi senzura, dini təəssübkeşlik və ya maliyyə mənfəəti mövcuddurmu?
4. Mövcud təbiət qanunları və tibbi biliklər çərçivəsində hadisənin hansı faizi izah olunur və tam olaraq hansı spesifik suallar açıq qalır?

Bu epistemoloji filtr sayəsində DARKPEDIA təkcə quru faktlar toplusu deyil, həm də oxucuda tənqidi təfəkkürü, mənbəşünaslıq qabiliyyətini və saxta xəbərləri (fake news) anında ifşa etmək bacarığını inkişaf etdirən intellektual zireh rolunu oynayır.
`,

  forensicProtocols: [
    {
      stepNumber: 1,
      name: 'Hadisə Yerinin İlkin Qorunması (First Responder Protocol)',
      objective: 'Fiziki dəlillərin kənar şəxslər, hava şəraiti və ya ilkin xilasedicilər tərəfindən çirklənməsinin (cross-contamination) qarşısını almaq.',
      methodology: 'İkiqat perimetr hasarı çəkilməsi, daxilolma və çıxış jurnallarının aparılması, ayaq izlərinin və lif nümunələrinin fiksasiyası.',
      riskOfError: 'Məsələn, ConBene Remsi (JonBenét Ramsey) işində ilkin polisin hadisə yerini düzgün izolyasiya etməməsi işin 30 il açılmamasına səbəb oldu.'
    },
    {
      stepNumber: 2,
      name: 'Məhkəmə-Tibbi Patoloji Tədqiqat (Forensic Autopsy)',
      objective: 'Ölümün dəqiq vaxtını (Time of Death), ölüm səbəbini (Cause of Death) və ölüm mexanizmini (Manner of Death) təyin etmək.',
      methodology: 'Rigor, livor və algor mortis dərəcələrinin ölçülməsi, göz mayesi (vitreous humor) kalium analizləri, daxili orqanların histopatoloji və toksikoloji yoxlanışı.',
      riskOfError: 'Dyatlov aşırımında ilk patoloqların daxili orqan zədələrini (sıxılmış qabırğalar) kənar güc zərbəsi kimi yozması, lakin sonradan qar təzyiqi olduğu sübut olunmuşdur.'
    },
    {
      stepNumber: 3,
      name: 'Genetik DNT Profilləşdirməsi və STR Analizi',
      objective: 'Məlum olmayan şübhəlilərin və ya cəsədlərin bioloji identifikasiyası.',
      methodology: 'Qısa Təkrar DNT ardıcıllıqlarının (STR) 24 lokus üzrə CODIS bazası ilə tutuşdurulması və IGG (İstintaq Genetik Genealogiyası) vasitəsilə qohumluq ağacının qurulması.',
      riskOfError: 'DNT-nin mikroskopik toxunma (touch DNA) vasitəsilə təsadüfi ötürülməsi (ikinci dərəcəli transfer).'
    },
    {
      stepNumber: 4,
      name: 'Rəqəmsal və Kriptoqrafik Forensika (Digital Artifact Analysis)',
      objective: 'Elektron məlumat daşıyıcılarının, şifrələnmiş qeydlərin, server loqlarının və geolokasiya verilənlərinin bərpası.',
      methodology: 'Bit-by-bit klonlama (Write-Blocker cihazları ilə), SHA-256 heş kodlarının yoxlanılması, metadatanın (EXIF) təhlili.',
      riskOfError: 'Zaman qurşağı xətaları və ya IP spufinq (spoofing) səbəbindən yanlış geolokasiya təyini.'
    },
    {
      stepNumber: 5,
      name: 'Tarixi və Arxiv Sənədlərinin Paleoqrafik Ekspertizası',
      objective: 'Qədim əlyazmaların, məxfi dövlət əmrlərinin və rəsmi protokolların həqiqiliyini sübut etmək.',
      methodology: 'Mürəkkəb kimyəvi tərkibinin xromatoqrafiyası, perqament və ya kağızın C-14 radiokarbon testi, dövrün yazı xətti və leksikası ilə müqayisə.',
      riskOfError: 'Hitlerin saxta gündəlikləri (Stern jurnalı qalmaqalı, 1983) kimi saxtakarlıqlarda kağızın optik ağardıcı tərkibinin vaxtında yoxlanılmaması.'
    }
  ] as ForensicProtocol[],

  darkpediaGlossary: [
    {
      term: 'Okam Ülgücü (Occam’s Razor)',
      category: 'Elmi Metodologiya',
      definition: 'XIV əsr filosofu Uilyam Okamın irəli sürdüyü epistemoloji prinsip: Eyni hadisəni izah edən bir neçə hipotez arasında ən az sayda sübutsuz fərziyyə irəli sürən ən sadə izaha üstünlük verilməlidir.',
      scientificContext: 'DARKPEDIA-da mistik iddialara qarşı əsas məntiqi filtr kimi tətbiq olunur.'
    },
    {
      term: 'Pareydoliya (Pareidolia)',
      category: 'Psixologiya və İdrak',
      definition: 'İnsan beyninin təsadüfi qeyri-müəyyən vizual və ya audio naxışlarda (məsələn, buludlarda, Mars daşlarında, audio cızıltılarda) tanış obrazlar, üzlər və sözlər görməsi meyli.',
      scientificContext: 'Marsdakı "Sifət" (Cydonia) və ya radio cızıltılarında eşidilən "ruh səsləri" (EVP) pareydoliyanın ən bariz elmi nümunələridir.'
    },
    {
      term: 'Kütləvi Psixogen Xəstəlik (Mass Hysteria)',
      category: 'Sosiopsixiatriya',
      definition: 'Heç bir üzvi və ya infeksion patologiya olmadan, yalnız psixoloji və sosial təlqin nəticəsində qrup şəklində fiziki simptomların (qıcolmalar, huşitirmə, rəqs, gülüş) yayılması.',
      scientificContext: '1518-ci il Strasburq Rəqs Vəbası və 1692-ci il Salem Cadugər Məhkəmələrinin əsas etioloji səbəbi.'
    },
    {
      term: 'Böyük Süzgəc (The Great Filter)',
      category: 'Astrofizika və Astrobiologiya',
      definition: 'Robin Hanson tərəfindən irəli sürülmüş konsepsiya: Abiotik maddədən ulduzlararası III tip sivilizasiyaya gedən yolda bütün həyat formalarının qarşısını kəsən dəf edilməsi qeyri-mümkün bir təkamül və ya özünüməhv maneəsi.',
      scientificContext: 'Fermi Paradoksunun ən ciddi nəzəri cavablarından biri.'
    },
    {
      term: 'İnfrahəsəs (Infrasound, <20 Hz)',
      category: 'Akustika və Fiziologiya',
      definition: 'İnsan eşitmə hüdudundan aşağı tezlikli səs dalğaları. Xüsusilə 18.9 Hz tezliyi insan göz alması ilə rezonansa girərək periferik görmədə boz ləkələr, təşviş və hiperventilasiya yaradır.',
      scientificContext: 'Köhnə qəsrlərdə və yeraltı tunellərdə "kabus görmə" hallarının əsas fiziki izahı.'
    },
    {
      term: 'Toksikoloji Pəncərə (Toxicological Window)',
      category: 'Məhkəmə Tibbi',
      definition: 'Zəhərin orqanizmdə metabolizə olunaraq qandan və sidikdən xaric olma müddəti. Bəzi sürətli zəhərlər (məsələn, süksinilxolin və ya kalium sianid) bir neçə saatdan sonra toxumalarda iz qoymaya bilər.',
      scientificContext: 'Müəmmalı ölüm hallarında dərhal toxuma dondurulmasının zəruriliyini əsaslandırır.'
    },
    {
      term: 'UAP (Unidentified Anomalous Phenomena)',
      category: 'Hava və Kosmik Tədqiqatlar',
      definition: 'ABŞ Müdafiə Nazirliyi (Pentagon) və NASA tərəfindən "UFO" terminini əvəzləmək üçün qəbul edilmiş rəsmi elmi termin. Məqsəd mövzunu yadplanetli mifologiyasından ayırıb fiziki radar və sensor anomaliyası kimi araşdırmaqdır.',
      scientificContext: 'FLIR, Gimbal və GoFast hərbi qeydlərinin analiz standartı.'
    },
    {
      term: 'REM Atoniyası (REM Atonia)',
      category: 'Neyrobiologiya',
      definition: 'Sürətli göz hərəkətləri (REM) fazasında beyin kötüyünün onurğa beyni motor neyronlarını bloklaması nəticəsində skelet əzələlərinin tam iflic olması vəziyyəti.',
      scientificContext: 'Yuxu iflicinin (qarabasma) fizioloji zəmini.'
    }
  ] as AboutGlossaryTerm[],

  ethicalStatuteArticles: [
    {
      num: 'Maddə 1',
      title: 'Həqiqətə Sadiqlik və Dəlillərin Şəffaflığı',
      text: 'DARKPEDIA redaksiyası heç bir kommersiya, siyasi, dini və ya ideoloji maraq naminə tarixi dəlilləri gizlədə, təhrif edə və ya uydura bilməz. Hər bir arqumentin arxasında yoxlanıla bilən mənbə durmalıdır.'
    },
    {
      num: 'Maddə 2',
      title: 'İnsan Ləyaqəti və Cinayət Qurbanlarına Hörmət',
      text: 'Real cinayət və faciə qurbanlarının adları, fotoları və həyat hekayələri istismar olunmur. Əzab çəkən insanların xatirəsi qarşısında etik məsuliyyət daşınır; qatillərin kultlaşdırılması və ya qorxu filmi personajına çevrilməsi qadağandır.'
    },
    {
      num: 'Maddə 3',
      title: 'Elmi Şübhəçilik və Mistisizmin Ayrılması',
      text: 'Müasir elmin hələ izah edə bilmədiyi hadisələr "fövqəltəbii möcüzə" kimi elan edilmir; onlar "mövcud elmi metodlarla hələ həll olunmamış suallar" kimi arxivləşdirilir.'
    },
    {
      num: 'Maddə 4',
      title: 'Daimi Təftiş və Yenilənmə Öhdəliyi',
      text: 'DNT analizi, arxivlərin deklassifikasiyası və ya arxeoloji qazıntılar nəticəsində yeni təkzibedilməz faktlar üzə çıxdıqda, əvvəlki məqalə dərhal redaktə edilir və dəyişikliyin səbəbi qeyd olunur.'
    },
    {
      num: 'Maddə 5',
      title: 'Bütün İnsanlıq Üçün Açıq və Azad Bilik',
      text: 'DARKPEDIA-da toplanan bütün ensiklopedik məlumatlar hər kəs üçün pulsuz, maneəsiz və açıq tədqiqat məqsədilə təqdim edilir. Elm və bilik azad olmalıdır.'
    }
  ]
};
