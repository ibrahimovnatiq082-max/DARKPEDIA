import { Article } from '../../types';

export const unsolvedAndForensicsArticles: Article[] = [
  {
    id: 'art-041',
    title: 'Jack the Ripper (Qarın Yaran Cek) — 1888-ci il Uaytçepel Qətlləri',
    originalName: 'Jack the Ripper / Whitechapel Murders',
    slug: 'jack-the-ripper-uaytcepel-qetlleri',
    description: '1888-ci ilin payızında Londonun şərqindəki Uaytçepel rayonunda ən azı 5 qadını dəhşətli cərrahi dəqiqliklə qətlə yetirən və kimliyi heç vaxt müəyyənləşdirilməyən tarixin ən məşhur seriyalı qatili.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Seriyalı qatillər',
    tags: ['Jack the Ripper', 'Uaytçepel', '1888', 'London', 'Skotland Yard', 'Seriyalı qatil', 'Forensika'],
    date: '31 Avqust – 9 Noyabr 1888',
    location: 'Uaytçepel, London, Böyük Britaniya',
    coordinates: '51°31′05″N 0°04′20″W',
    status: 'Rəsmi olaraq həll olunmamış cinayət işi (Skotland Yard Arxivləri)',
    theoriesCount: '6 əsas şübhəli nəzəriyyəsi',
    readingTime: 18,
    views: 48900,
    trendingScore: 92,
    factStatus: 'verified_fact',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Tarixi Kriminologiya Departamenti',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Hadisənin İctimai Əhəmiyyəti' },
      { id: 'tarixi-zemin', title: '2. Viktoriya Dövrü Londonu və Uaytçepelin Şəraiti' },
      { id: 'kanonik-qurbanlar', title: '3. Kanonik Beşlik (The Canonical Five) Qurbanları' },
      { id: 'istintaq-ve-deliller', title: '4. Skotland Yard İstintaqı və Maddi Dəlillər' },
      { id: 'mektublar', title: '5. Məşhur Ripper Məktubları: Fakt və Saxtakarlıq' },
      { id: 'esas-subheliler', title: '6. Əsas Şübhəlilər və Müasir Kriminoloji Qiymətləndirmə' },
      { id: 'forensik-analiz', title: '7. Müasir DNT və Profilaktik Analizlər' },
      { id: 'bu-gun-melum-olanlar', title: '8. Bu Gün Nə Təsdiqlənib, Nə Naməlum Qalır?' },
      { id: 'menbeler', title: '9. Rəsmi Mənbələr və Biblioqrafiya' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Hadisənin İctimai Əhəmiyyəti',
        content: `1888-ci ilin avqustundan noyabrına qədər Londonun Uaytçepel rayonunda baş verən silsilə qətllər dünya kriminologiya tarixində dönüş nöqtəsi oldu. "Qarın Yaran Cek" (Jack the Ripper) təxəllüsü ilə tanınan naməlum qatil, törətdiyi qəddarlıq və cəsədlər üzərində apardığı anatomik kəsiklərlə bütün Britaniya İmperiyasını və dünya mətbuatını dəhşətə gətirdi.

Bu cinayətlər təkcə bir seriyalı qatilin fəaliyyəti deyil, həm də Viktoriya dövrünün kəskin sosial təbəqələşməsini, polisin texnoloji zəifliyini və müasir kütləvi informasiya vasitələrinin sensasiyaçılıq gücünü açıq şəkildə nümayiş etdirdi. Skotland Yard arxivlərində qovluq rəsmi olaraq 1892-ci ildə bağlansa da, hadisə bu gün də hüquqşünaslar, patoloqlar və tarixçilər tərəfindən araşdırılır.`,
        badge: 'fact',
        badgeText: 'Tarixi Sənədli İrs'
      },
      {
        id: 'tarixi-zemin',
        title: '2. Viktoriya Dövrü Londonu və Uaytçepelin Şəraiti',
        content: `XIX əsrin sonlarında Londonun İsti-End (East End) adlanan şərq hissəsi, xüsusən də Uaytçepel rayonu, dərin yoxsulluq, həddindən artıq əhali sıxlığı, alkoqolizm və sanitar fəlakət mərkəzi idi. Rayonda minlərlə evsiz insan gecəlik sığınacaqlarda (doss-houses) 4 pens ödəyərək gecələyirdi.

Həmin dövrdə Uaytçepeldə 1200-dən çox qadın ən ağır şəraitdə küçə fahişəliyi ilə gündəlik çörək pulunu qazanmağa məcbur idi. Küçələrdə işıqlandırmanın son dərəcə zəif olması, dar dalanlar və duman (London Smog) qatilin heç kim tərəfindən görünmədən hərəkət etməsinə və hadisə yerindən dərhal qaçmasına ideal şərait yaradırdı.`,
        badge: 'fact',
        badgeText: 'Sosio-Tarixi Kontekst'
      },
      {
        id: 'kanonik-qurbanlar',
        title: '3. Kanonik Beşlik (The Canonical Five) Qurbanları',
        content: `Skotland Yardın baş müstəntiqləri Melville Macnaghten və Dr. Thomas Bond tərəfindən tərtib edilmiş yekun rəyə görə, eyni dəst-xətlə qətlə yetirilmiş beş əsas ("Kanonik") qurban müəyyən edilmişdir:

1. Mary Ann Nichols (Polli) — 31 Avqust 1888: Bak-Rou küçəsində boğazı iki dərin kəsiklə kəsilmiş və qarın nahiyəsindən cırılmış vəziyyətdə tapıldı.
2. Annie Chapman (Tünd Enni) — 8 Sentyabr 1888: Hanburi küçəsi 29 nömrəli evin arxa həyətində boğazı kəsilmiş və uşaqlığı kəsilib götürülmüş vəziyyətdə tapıldı.
3. Elizabeth Stride (Uzun Liz) — 30 Sentyabr 1888 ("İkiqat Hadisə"): Berners küçəsində boğazı kəsilmiş tapıldı; qatilin arabaçı tərəfindən hürkdüyü və bədənə başqa zədə yetirməyə vaxt tapmadığı güman edilir.
4. Catherine Eddowes — 30 Sentyabr 1888 ("İkiqat Hadisə"): Mitre meydanında, Stride-ın cəsədindən cəmi 45 dəqiqə sonra tapıldı. Qulağı və burnu kəsilmiş, sol böyrəyi və uşaqlığı bədənindən çıxarılmışdı.
5. Mary Jane Kelly — 9 Noyabr 1888: Miller-Kort 13 nömrəli otaqda tapılan ən dəhşətli qurban. Qapalı məkanda saatlarla qalan qatil bədənin bütün daxili orqanlarını çıxarmış, əzələ toxumalarını sümüklərə qədər doğramış və ürəyini otaqdan aparmışdı.`,
        badge: 'fact',
        badgeText: 'Məhkəmə Patologiya Aktı',
        table: {
          headers: ['Qurbanın Adı', 'Yaşı', 'Tarix və Saat', 'Hadisə Yeri', 'Çıxarılmış Daxili Orqanlar'],
          rows: [
            ['Mary Ann Nichols', '43', '31 Avqust 1888, 03:40', 'Buck\'s Row', 'Yoxdur (Qarın cırılıb)'],
            ['Annie Chapman', '47', '08 Sentyabr 1888, 06:00', '29 Hanbury Street', 'Uşaqlıq (Uterus)'],
            ['Elizabeth Stride', '45', '30 Sentyabr 1888, 01:00', 'Dutfield\'s Yard', 'Yoxdur (Yarıda kəsilib)'],
            ['Catherine Eddowes', '46', '30 Sentyabr 1888, 01:45', 'Mitre Square', 'Sol böyrək və uşaqlıq'],
            ['Mary Jane Kelly', '25', '09 Noyabr 1888, 10:45', '13 Miller\'s Court', 'Ürək və bütün qarın orqanları']
          ]
        }
      },
      {
        id: 'istintaq-ve-deliller',
        title: '4. Skotland Yard İstintaqı və Maddi Dəlillər',
        content: `İstintaqa rəhbərlik edən Ser Çarlz Uorren (Ser Charles Warren) və Müfəttiş Frederik Abberlayn (Frederick Abberline) minlərlə şübhəlini dindirdi, 80-dən çox şəxsi həbs etdi, lakin qatilin izini tapa bilmədi.

Əsas maddi sübutlar:
- Cərrahi Bıçaq Kəsikləri: Dr. Corc Baqster Fillips və Dr. Tomas Bond cəsədləri müayinə edərək bildirdilər ki, qatil anatomiya və cərrahiyyə üzrə yüksək biliyə malik olmalıdır; o, qaranlıqda tək bir toxuma zədələmədən böyrəyi və uşaqlığı dəqiq anatomik bağlardan ayırmağı bacarırdı.
- Qanlı Önlük Parçası (Goulston Street Graffito): Catherine Eddowes-un qətlinin ardından Qoulston küçəsində qatilin əllərini sildiyi qanlı önlük parçası və divarda tabaşirlə yazılmış naməlum cümlə tapıldı: "The Juwes are the men that will not be blamed for nothing". Ser Çarlz Uorren antisemit iğtişaşların qarşısını almaq üçün bu yazını dərhal sildirdi və vacib xəttatlıq sübutu məhv edildi.`,
        badge: 'fact',
        badgeText: 'Polis Arxiv Qeydi'
      },
      {
        id: 'mektublar',
        title: '5. Məşhur Ripper Məktubları: Fakt və Saxtakarlıq',
        content: `Polisə və Mərkəzi Xəbər Agentliyinə qatilin adından 300-dən çox məktub göndərildi. Müasir kriminoloqlar bu məktubların 95%-nin sensasiya xatirinə jurnalistlər (xüsusilə Tom Bulling) tərəfindən uydurulduğunu sübut etmişdir.

Lakin üç məktub xüsusi diqqət çəkir:
1. "Dear Boss" Məktubu (27 Sentyabr 1888): "Jack the Ripper" imzasının ilk dəfə istifadə olunduğu və növbəti qurbanın qulağının kəsiləcəyinin qabaqcadan xəbər verildiyi məktub.
2. "Saucy Jacky" Poçt Kartı (1 Oktyabr 1888): İkiqat qətli (Stride və Eddowes) hadisədən bir neçə saat sonra dəqiqliklə təsvir edirdi.
3. "From Hell" Məktubu (15 Oktyabr 1888): Corc Lusk-a göndərilən kiçik qutuda şərabda saxlanılmış yarımçıq insan böyrəyi var idi. Patoloqlar böyrəyin Catherine Eddowes-un çıxarılmış sol böyrəyinə və onun Brayt xəstəliyinə tam uyğun gəldiyini təsdiq etdilər.`,
        badge: 'theory',
        badgeText: 'Ekspertiza Analizi'
      },
      {
        id: 'esas-subheliler',
        title: '6. Əsas Şübhəlilər və Müasir Kriminoloji Qiymətləndirmə',
        content: `Tarixçilər və kriminoloqlar onlarla şübhəli irəli sürmüşlər. Ən ciddi və sənədləşdirilmiş namizədlər:

- Aaron Kosminski: Polşalı yəhudi bərbər. Ağır psixi pozuntudan əziyyət çəkirdi və qadınlara qarşı patoloji nifrəti var idi. Baş müstəntiq Macnaghten onu 1 nömrəli şübhəli sayırdı.
- Montague John Druitt: Vəkil və müəllim. Kelly qətlindən dərhal sonra Temza çayında intihar etmişdir. Ailəsi onun "ağlını itirdiyini" bildirmişdi.
- Michael Ostrog: Rusiya əsilli cərrah və fırıldaqçı. Çoxsaylı cinayət qeydləri və tibbi biliyi var idi.
- Dr. Francis Tumblety: Amerikalı qeyri-qanuni həkim və qadın orqanları kolleksiyası toplayan manyak. 1888-ci ildə Londonda həbs olunmuş, zaminə çıxaraq ABŞ-a qaçmışdır.
- Walter Sickert: Məşhur rəssam. Yazıçı Patrisiya Kornvell onun rəsmlərindəki detalların cinayət yerlərinə uyğun olduğunu iddia etsə də, bu fərziyyə sənətşünaslar tərəfindən rədd edilmişdir.`,
        badge: 'theory',
        badgeText: 'Şübhəlilər Reyestri'
      },
      {
        id: 'forensik-analiz',
        title: '7. Müasir DNT və Profilaktik Analizlər',
        content: `2014 və 2019-cu illərdə Dr. Jari Louhelainen Catherine Eddowes-a aid olduğu iddia edilən ipək şal üzərində mitoxondrial DNT (mtDNA) analizləri apardı və qan ləkələrinin Eddowes-un nəslinə, sperma ləkələrinin isə Aaron Kosminskinin bacısının nəslinə uyğun gəldiyini bəyan etdi.

Lakin məhkəmə genetikləri bu nəticələri tənqid etdilər: Şalın 130 il ərzində yüzlərlə insan tərəfindən əlcəksiz toxunulduğu və DNT-nin çirkləndiyi (cross-contamination) qeyd olundu. Buna görə də iş elmi və hüquqi baxımdan hələ də tam sübut olunmamış qalır.`,
        badge: 'theory',
        badgeText: 'Genetik Forensika Diskussiyası'
      },
      {
        id: 'bu-gun-melum-olanlar',
        title: '8. Bu Gün Nə Təsdiqlənib, Nə Naməlum Qalır?',
        content: `Bu gün rəsmi olaraq təsdiqlənmiş faktlar:
- 1888-ci ilin payızında eyni dəst-xətlə ən azı 5 qadın vəhşicəsinə qətlə yetirilmişdir.
- Qatil insan anatomiyasını və kəsici alətlərlə işləməyi çox yaxşı bilirdi.
- Qətllər gecə saat 00:00 ilə 06:00 arasında, ictimai yerlərdə, heç bir səs-küy çıxarmadan 5-10 dəqiqə ərzində törədilmişdir.

Hələ də naməlum qalan məsələlər:
- Qatilin dəqiq rəsmi şəxsiyyəti və adı.
- Digər Uaytçepel qətllərinin (Martha Tabram, Alice McKenzie) Ripperə aid olub-olmaması.
- Qatilin 9 noyabrdan sonra niyə qəflətən dayandığı (Ölüm? Həbsxana? Psixiatriya xəstəxanası? Yoxsa ölkədən qaçış?).`,
        badge: 'unknown',
        badgeText: 'Açıq Qalan Tapmacalar'
      }
    ],
    keyFacts: [
      { label: 'Kanonik qurban sayı', value: '5 qadın', status: 'verified_fact' },
      { label: 'Fəaliyyət dövrü', value: 'Avqust – Noyabr 1888', status: 'verified_fact' },
      { label: 'Əsas lokasiya', value: 'Uaytçepel və Spitalfilds, London', status: 'verified_fact' },
      { label: 'İstintaq statusu', value: 'Açılmamış tarixi soyuq iş (Cold Case)', status: 'verified_fact' }
    ],
    timelineTable: [
      { date: '31 Avqust 1888', event: 'Mary Ann Nichols Bak-Rou küçəsində qətlə yetirildi.', source: 'The Times arxivi', status: 'fact' },
      { date: '08 Sentyabr 1888', event: 'Annie Chapman Hanburi küçəsində qətlə yetirildi; uşaqlığı kəsilib aparıldı.', source: 'Polis raportu', status: 'fact' },
      { date: '27 Sentyabr 1888', event: '"Dear Boss" məktubu Mərkəzi Xəbər Agentliyinə daxil oldu.', source: 'Skotland Yard', status: 'fact' },
      { date: '30 Sentyabr 1888', event: 'İkiqat qətl: Elizabeth Stride və Catherine Eddowes 45 dəqiqə fərqlə öldürüldü.', source: 'Məhkəmə dindirməsi', status: 'fact' },
      { date: '15 Oktyabr 1888', event: '"From Hell" məktubu və yarımçıq böyrək Corc Lusk-a göndərildi.', source: 'London Hospital', status: 'fact' },
      { date: '09 Noyabr 1888', event: 'Mary Jane Kelly öz otağında vəhşicəsinə parçalanmış vəziyyətdə tapıldı.', source: 'Patoloji akt', status: 'fact' }
    ],
    peopleTable: [
      { name: 'Frederick Abberline', role: 'Skotland Yard Baş Müfəttişi', significance: 'Uaytçepel qətllərinin əsas sahə tədqiqatçısı.' },
      { name: 'Dr. Thomas Bond', role: 'Polis Cərrahı və Patoloq', significance: 'Qurbanların yaralarını təhlil edən və ilk kriminoloji profili hazırlayan mütəxəssis.' },
      { name: 'Aaron Kosminski', role: 'Əsas Şübhəli', fateOrStatus: '1919-cu ildə psixiatriya xəstəxanasında vəfat edib.' },
      { name: 'Sir Charles Warren', role: 'Metropolitan Polis Komissarı', significance: 'Goulston Street yazısını sildirməsi ilə məşhurlaşan rəhbər.' }
    ],
    locationsTable: [
      { name: 'Buck\'s Row', significance: 'Mary Ann Nichols-un cəsədinin tapıldığı yer (hazırda Durward Street).' },
      { name: 'Mitre Square', significance: 'Catherine Eddowes-un qətl yeri və London Şəhər Polisi yurisdiksiyası.' },
      { name: '13 Miller\'s Court', significance: 'Mary Jane Kelly-nin kirayə qaldığı və qətlə yetirildiyi otaq.' }
    ],
    evidenceTable: [
      { item: 'Cərrahi kəsiklər', category: 'Patologiya', forensicStatus: 'Mütəxəssis dərəcəsində kəsici alət ustalığı', verificationBadge: 'fact' },
      { item: 'Goulston Street önlük parçası', category: 'Əşyayi-dəlil', forensicStatus: 'Eddowes-un önlüyü ilə 100% uyğunlaşdı', verificationBadge: 'fact' },
      { item: '"From Hell" Böyrəyi', category: 'Bioloji nümunə', forensicStatus: 'Brayt xəstəliyi daşıyan qadın sol böyrəyi', verificationBadge: 'fact' }
    ],
    theories: [
      {
        name: 'Aaron Kosminski Hipotezi',
        likelihood: 'Yüksək',
        description: 'Polşa mənşəli bərbər Kosminskinin Uaytçepeldə yaşaması, qadınlara nifrəti və polisin gizli şahid tərəfindən tanınması iddiası.',
        scientificConsensus: 'Bir çox müasir kriminoloq tərəfindən ən möhkəm şübhəli sayılır.'
      },
      {
        name: 'Kral Zadəganlığı və Qoruyucu Qəsd Nəzəriyyəsi',
        likelihood: 'Təkzib edilmiş',
        description: 'Şahzadə Albert Viktor və Kral həkimi Ser Uilyam Qallın gizli nigahı ört-basdır etmək üçün qətllər törətdiyi iddiası.',
        scientificConsensus: 'Tarixçilər tərəfindən heç bir sənədli əsası olmayan uydurma kimi tamamilə rədd edilmişdir.'
      }
    ],
    sources: [
      { title: 'The Complete Jack the Ripper', author: 'Donald Rumbelow', publisher: 'Penguin Books', year: '2004', type: 'book' },
      { title: 'The Jack the Ripper A-Z', author: 'Paul Begg, Martin Fido, Keith Skinner', publisher: 'Headline', year: '1996', type: 'book' },
      { title: 'The Cases That Haunt Us', author: 'John Douglas & Mark Olshaker', publisher: 'Scribner', year: '2000', type: 'book' },
      { title: 'Metropolitan Police Archives: MEPO 3/140-143', publisher: 'The National Archives (Kew)', year: '1888', type: 'archive' }
    ],
    relatedArticleSlugs: ['zodiac-qatili-sifreleri', 'qara-georgin-cinayeti', 'elisa-lam-cecil-hotel']
  },
  {
    id: 'art-042',
    title: 'Zodiac Killer (Zodiak Qatili) — Kriptoqramlar və Şimali Kaliforniya Dəhşəti',
    originalName: 'The Zodiac Killer',
    slug: 'zodiac-qatili-sifreleri',
    description: '1968-1969-cu illərdə Şimali Kaliforniyada gəncləri hədəf alan, qəzetlərə qəribə şifrəli məktublar (Z408, Z340) göndərən və kimliyi tapılmayan seriyalı qatil.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Seriyalı qatillər',
    tags: ['Zodiac', 'Kaliforniya', 'Kriptoqrafiya', 'Z340', 'San-Fransisko', 'Seriyalı qatil', 'FTB'],
    date: 'Dekabr 1968 – Oktyabr 1969',
    location: 'Şimali Kaliforniya (Vallexo, San-Fransisko, Napa), ABŞ',
    coordinates: '38°06′N 122°15′W',
    status: 'FTB və San-Fransisko Polis Departamenti tərəfindən açıq soyuq iş',
    theoriesCount: '4 əsas şübhəli və Z340 şifrəsinin kompüter həlli',
    readingTime: 20,
    views: 52400,
    trendingScore: 94,
    factStatus: 'verified_fact',
    lastUpdated: '20 Avqust 2026',
    author: 'DARKPEDIA Kriptoqrafik Forensika',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Hadisənin Kriminoloji Anatomiyası' },
      { id: 'hucumlar', title: '2. Təsdiqlənmiş Qətllər və Sağ Qalan Şahidlər' },
      { id: 'kriptoqramlar', title: '3. Zodiak Kriptoqramları: Z408 və Z340-ın 51 İllik Sirri' },
      { id: 'polis-ve-ftb', title: '4. San-Fransisko Polisi və FTB İstintaqı' },
      { id: 'subheliler', title: '5. Əsas Şübhəlilər: Artur Ley Allen və Digərləri' },
      { id: 'muasir-netice', title: '6. Müasir Nəticələr və Açıq Qalan Suallar' },
      { id: 'menbeler', title: '7. Rəsmi Mənbələr və Sənədlər' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Hadisənin Kriminoloji Anatomiyası',
        content: `1960-cı illərin sonunda ABŞ-ın Şimali Kaliforniya ştatında fəaliyyət göstərən "Zodiak" təxəllüslü seriyalı qatil, media manipulyasiyası və şifrəli yazışmaları ilə dünya kriminologiyasında unikal bir iz buraxdı. O, qəzet redaksiyalarına məktublar göndərərək şifrələrinin qəzetlərin birinci səhifəsində dərc olunmasını tələb edir, əks halda məktəb avtobuslarını partlatmaqla və günahsız insanları öldürməklə hədələyirdi.

Zodiak rəsmi olaraq 5 nəfəri qətlə yetirmiş, 2 nəfəri ağır yaralamışdır, lakin məktublarında 37 qurbanının olduğunu iddia edirdi.`,
        badge: 'fact',
        badgeText: 'Kriminoloji Reyestr'
      },
      {
        id: 'hucumlar',
        title: '2. Təsdiqlənmiş Qətllər və Sağ Qalan Şahidlər',
        content: `Rəsmi polis qeydləri ilə təsdiqlənmiş dörd əsas hücum:

1. Lake Herman Road (20 Dekabr 1968): 17 yaşlı David Faraday və 16 yaşlı Betty Lou Jensen avtomobildə güllələnərək öldürüldü.
2. Blue Rock Springs (4 İyul 1969): 22 yaşlı Darlene Ferrin öldürüldü, 19 yaşlı Michael Mageau isə ağır güllə yaraları ilə möcüzəvi şəkildə sağ qaldı və qatilin profilini verdi.
3. Lake Berryessa (27 Sentyabr 1969): Zodiak qara cəllad başlıqlı və sinəsində ağ köndələn dairə simvolu olan xüsusi kostyumda Bryan Hartnell və Cecelia Shepard-ı bıçaqladı. Shepard vəfat etdi, Hartnell sağ qaldı.
4. Presidio Heights, San-Fransisko (11 Oktyabr 1969): Taksı sürücüsü Paul Stine başından güllələndi. Zodiak Stine-ın qanlı köynəyinin bir parçasını kəsib götürərək sonradan məktubla redaksiyaya sübut kimi göndərdi.`,
        badge: 'fact',
        badgeText: 'Məhkəmə və Ballistika Dəlilləri'
      },
      {
        id: 'kriptoqramlar',
        title: '3. Zodiak Kriptoqramları: Z408 və Z340-ın 51 İllik Sirri',
        content: `Zodiak dörd mürəkkəb şifrə göndərmişdir:
- Z408 Şifrəsi: 1969-cu ilin avqustunda yerli müəllim Donald Harden və həyat yoldaşı tərəfindən cəmi bir neçə günə sadə əvəzləmə şifri ilə açıldı: "Mən insanları öldürməyi sevirəm, çünki bu meşədə vəhşi heyvan ovlamaqdan daha əyləncəlidir..."
- Z340 Şifrəsi: 51 il boyunca FTB-nin ən yaxşı kriptoqrafları tərəfindən açıla bilmədi. Yalnız 2020-ci ilin dekabrında beynəlxalq proqramçı komandası (David Oranchak, Jarl Van Eycke və Sam Blake) superkompüter analizi ilə Z340-ı açdı: "Ümid edirəm ki, məni tutmağa çalışarkən çox əylənirsiniz... Mən qaz kamerasından qorxmuram, çünki o məni daha tez cənnətə göndərəcək..."`,
        badge: 'fact',
        badgeText: 'Kriptoqrafik Təsdiq (FTB 2020)'
      },
      {
        id: 'subheliler',
        title: '5. Əsas Şübhəlilər: Artur Ley Allen və Digərləri',
        content: `İstintaqın ən böyük şübhəlisi Artur Ley Allen (Arthur Leigh Allen) idi. O, Zodiak qətllərinin baş verdiyi ərazilərdə yaşamış, Zodiak markalı qol saatı taxmış və dostlarına "insanları ovlamaq və qadınları öldürmək" haqqında danışmışdı. Sağ qalan şahid Michael Mageau 1991-ci ildə Allen-ın fotosunu tanımışdı.

Lakin məhkəmə-tibbi ekspertiza Allen-ın əl xəttinin Zodiak məktublarına tam uyğun gəlmədiyini və 2002-ci ildə Zodiak zərflərindən əldə edilən zəif DNT profilinin Allen ilə üst-üstə düşmədiyini göstərdi. Allen 1992-ci ildə rəsmi ittiham irəli sürülmədən infarktdan vəfat etdi.`,
        badge: 'theory',
        badgeText: 'Kriminalist Profilaktikası'
      }
    ],
    keyFacts: [
      { label: 'Təsdiqlənmiş qurban sayı', value: '5 ölü, 2 sağ qalan', status: 'verified_fact' },
      { label: 'Açılmış şifrələr', value: 'Z408 (1969) və Z340 (2020)', status: 'verified_fact' },
      { label: 'Əsas lokasiya', value: 'San-Fransisko Bay Area, Kaliforniya', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Artur Ley Allen Şübhəsi',
        likelihood: 'Orta',
        description: 'Dolayı sübutların çoxluğu, lakin DNT və xəttatlıq uyğunsuzluğu.',
        scientificConsensus: 'Polis tərəfindən ən çox araşdırılmış, lakin qəti sübutu olmayan şəxs.'
      }
    ],
    sources: [
      { title: 'Zodiac', author: 'Robert Graysmith', publisher: 'St. Martin\'s Press', year: '1986', type: 'book' },
      { title: 'FBI Zodiac Killer Vault Files', publisher: 'Federal Bureau of Investigation', year: '2020', type: 'government' }
    ],
    relatedArticleSlugs: ['jack-the-ripper-uaytcepel-qetlleri', 'qara-georgin-cinayeti', 'hinterkaifeck-qətliami']
  },
  {
    id: 'art-043',
    title: 'Qara Georgin (Black Dahlia) — Elizabet Şortun Müəmmalı Qətli',
    originalName: 'The Black Dahlia (Elizabeth Short)',
    slug: 'qara-georgin-cinayeti',
    description: '1947-ci ildə Los-Ancelesdə 22 yaşlı Elizabet Şortun bədəninin bel hissəsindən iki yerə kəsilərək qansızlaşdırılmış vəziyyətdə tapılması ilə başlayan Hollivudun ən qaranlıq cinayəti.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Açılmamış qətllər',
    tags: ['Black Dahlia', 'Elizabeth Short', '1947', 'Los Angeles', 'LAPD', 'Hollivud', 'Cərrahi qətl'],
    date: '15 Yanvar 1947',
    location: 'Leimert Park, Los-Anceles, Kaliforniya, ABŞ',
    coordinates: '34°00′58″N 118°19′55″W',
    status: 'LAPD arxivlərində açılmamış tarixi cinayət',
    theoriesCount: '3 əsas cərrah şübhəlisi',
    readingTime: 16,
    views: 41200,
    trendingScore: 88,
    factStatus: 'verified_fact',
    lastUpdated: '15 Avqust 2026',
    author: 'DARKPEDIA Məhkəmə Patologiyası',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Hadisə Yeri' },
      { id: 'patoloji-akt', title: '2. Məhkəmə-Tibbi Patoloji Akt və Hemiseksiya' },
      { id: 'istintaq', title: '3. LAPD İstintaqı və Dr. Corc Hodel Şübhəsi' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Hadisə Yeri',
        content: `15 yanvar 1947-ci il səhəri Los-Ancelesin Leymert Park rayonunda boş torpaq sahəsində yerli sakin Betti Bersinger tərəfindən 22 yaşlı aktrisa namizədi Elizabet Şortun cəsədi aşkar edildi. İlkin baxışda cəsəd maneken təəssüratı yaradırdı, çünki qatil bədəni tamamilə yuyub qansızlaşdırmış və səliqəli şəkildə düzmüşdü.`,
        badge: 'fact',
        badgeText: 'LAPD İlkin Hesabatı'
      },
      {
        id: 'patoloji-akt',
        title: '2. Məhkəmə-Tibbi Patoloji Akt və Hemiseksiya',
        content: `Los-Anceles qraflığı baş patoloqu Dr. Frederik Nyubar tərəfindən aparılan yarılma göstərdi ki:
- Bədən 2-ci və 3-cü bel fəqərələri arasından (hemicorporectomy) professional cərrahi üsulla ikiyə kəsilmişdir.
- Üzün hər iki tərəfində dodaq künclərindən qulaqlara qədər 7.5 sm dərin kəsiklər açılmışdır (Qlazqo təbəssümü).
- Ölüm səbəbi kəllə-beyin travması və qanaxma olmuş, bədənin ikiyə bölünməsi isə ölümdən sonra həyata keçirilmişdir.`,
        badge: 'fact',
        badgeText: 'Məhkəmə Ekspertiza Rəyi'
      },
      {
        id: 'istintaq',
        title: '3. LAPD İstintaqı və Dr. Corc Hodel Şübhəsi',
        content: `LAPD yüzlərlə şübhəlini dindirdi. Ən ciddi şübhəli məşhur cərrah Dr. Corc Hodel (George Hodel) idi. 1950-ci ildə polisin Hodel-in evinə qoyduğu gizli dinləmə cihazları onun bu sözlərini qeydə almışdı: "Fərz edək ki, Qara Georgini mən öldürmüşəm. Onlar indi bunu sübut edə bilməzlər. Onlar mənim katibimlə danışa bilməzlər, çünki o ölüb..." Buna baxmayaraq, yüksək səviyyəli korrupsiya və sübut çatışmazlığı səbəbindən Hodel həbs olunmadı və Filippinə köçdü.`,
        badge: 'theory',
        badgeText: 'LAPD Gizli Dinləmə Qeydləri'
      }
    ],
    keyFacts: [
      { label: 'Qurban', value: 'Elizabeth Short (22 yaş)', status: 'verified_fact' },
      { label: 'Tarix', value: '15 Yanvar 1947', status: 'verified_fact' },
      { label: 'Xarakterik əlamət', value: 'Cərrahi hemiseksiya və Qlazqo təbəssümü', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Dr. George Hodel Nəzəriyyəsi',
        likelihood: 'Yüksək',
        description: 'Cərrahi bilik, gizli polis dinləmələri və fotoların uyğunluğu.',
        scientificConsensus: 'Keçmiş LAPD detektivi Steve Hodel-in araşdırmaları ilə geniş dəstəklənir.'
      }
    ],
    sources: [
      { title: 'Black Dahlia Avenger', author: 'Steve Hodel', publisher: 'Arcade Publishing', year: '2003', type: 'book' },
      { title: 'Severed: The True Story of the Black Dahlia Murder', author: 'John Gilmore', publisher: 'Amok Books', year: '1994', type: 'book' }
    ],
    relatedArticleSlugs: ['jack-the-ripper-uaytcepel-qetlleri', 'zodiac-qatili-sifreleri', 'elisa-lam-cecil-hotel']
  },
  {
    id: 'art-044',
    title: 'Hinterkaifeck Ferması Qətliamı (1922)',
    originalName: 'Hinterkaifeck murders',
    slug: 'hinterkaifeck-qətliami',
    description: '1922-ci ildə Almaniyanın Bavariya kəndində Qruber ailəsinin 6 üzvünün dəhrə ilə qətlə yetirilməsi və qatilin günlərlə cəsədlərlə eyni evdə yaşayaraq heyvanları yemləməsi.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Açılmamış qətllər',
    tags: ['Hinterkaifeck', 'Almaniya', '1922', 'Bavariya', 'Münxen Polisi', 'Açılmamış cinayət'],
    date: '31 Mart 1922',
    location: 'Qroben yaxınlığı, Bavariya, Almaniya',
    coordinates: '48°35′38″N 11°19′24″E',
    status: 'Almaniya kriminalistika tarixinin ən böyük açılmamış sirri',
    theoriesCount: '4 ailə və qisas nəzəriyyəsi',
    readingTime: 15,
    views: 38700,
    trendingScore: 86,
    factStatus: 'verified_fact',
    lastUpdated: '12 Avqust 2026',
    author: 'DARKPEDIA Tarixi Forensika',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Hadisədən Əvvəlki Qəribə Əlamətlər' },
      { id: 'qətliam', title: '2. Qətliam Gecəsi və Hadisə Yerinin Təsviri' },
      { id: 'qəribə-detallar', title: '3. Qatilin Evdə Qalması və Heyvanlara Qulluq' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Hadisədən Əvvəlki Qəribə Əlamətlər',
        content: `1922-ci ilin martında Münxendən 70 km şimalda yerləşən təcrid olunmuş Hinterkaifeck fermasının sahibi Andreas Qruber qonşularına qardan evə doğru gələn, lakin geri qayıtmayan yad ayaq izləri gördüyünü, çardaqdan addım səsləri eşitdiyini və ev açarlarının yoxa çıxdığını bildirmişdi. Hadisədən 6 ay əvvəl köhnə qulluqçu evin lənətləndiyini deyərək işdən çıxmışdı.`,
        badge: 'fact',
        badgeText: 'Şahid İfadələri'
      },
      {
        id: 'qətliam',
        title: '2. Qətliam Gecəsi və Hadisə Yerinin Təsviri',
        content: `31 mart 1922-ci il axşamı qatil ailə üzvlərini (Andreas, həyat yoldaşı Sesiliya, qızı Viktoriya və 7 yaşlı nəvəsi Sesiliyanı) bir-bir tövləyə çağıraraq dəhrə (mattock) ilə öldürmüş, daha sonra evə daxil olaraq 2 yaşlı körpə Jozefi və həmin gün işə başlayan yeni qulluqçu Mariyanı yataqlarında qətlə yetirmişdir.`,
        badge: 'fact',
        badgeText: 'Münxen Kriminal Polisi Protokolu'
      },
      {
        id: 'qəribə-detallar',
        title: '3. Qatilin Evdə Qalması və Heyvanlara Qulluq',
        content: `Hadisə cəmi 4 gün sonra, 4 apreldə aşkar edildi. İstintaq sübut etdi ki, qatil qətliamdan sonra evi tərk etməmiş, bir neçə gün evdə yaşamış, mətbəxdə yemək bişirmiş, 6 inəyi və itləri mütəmadi yemləmiş və ocağı yandırmışdır. Evdəki böyük məbləğdə qızıl və pula toxunulmamışdı, bu da cinayətin soyğunçuluq deyil, şəxsi nifrət və ya qisas zəminində törədildiyini göstərirdi.`,
        badge: 'fact',
        badgeText: 'İstintaq Maddi Dəlili'
      }
    ],
    keyFacts: [
      { label: 'Qurban sayı', value: '6 nəfər (Qruber ailəsi və qulluqçu)', status: 'verified_fact' },
      { label: 'Cinayət silahı', value: 'Dəhrə (Mattock)', status: 'verified_fact' },
      { label: 'İstintaq', value: 'Münxen Kriminal Polisi (1922–1955)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Lorenz Schlittenbauer Qisas Nəzəriyyəsi',
        likelihood: 'Yüksək',
        description: 'Qonşu Şlittenbauerin uşağın atalığı və aliment məsələsi üstündə ailə ilə kəskin münaqişəsi.',
        scientificConsensus: 'Ən çox şübhələnilən şəxs, lakin 2007-ci il polis akademiyası təhlili sübut çatışmazlığını təsdiqlədi.'
      }
    ],
    sources: [
      { title: 'Hinterkaifeck: Deutschlands geheimnisvollster Mordfall', author: 'Peter Leuschner', publisher: 'Apollon-Verlag', year: '1997', type: 'book' }
    ],
    relatedArticleSlugs: ['jack-the-ripper-uaytcepel-qetlleri', 'zodiac-qatili-sifreleri']
  },
  {
    id: 'art-045',
    title: 'Voynich Manuscript (Voyniç Əlyazması) — Kriptoqrafiyanın Ən Böyük Tapmacası',
    originalName: 'Voynich manuscript',
    slug: 'voynich-elyazmasi-sirri',
    description: 'XV əsrə aid, heç bir məlum dilə bənzəməyən naməlum əlifba və qəribə botanik-astronomik illüstrasiyalarla dolu, 600 ildir oxuna bilməyən sirli əlyazma.',
    category: 'sirli-hadiseler',
    subcategory: 'Qədim şifrələr',
    tags: ['Voynich', 'Kriptoqrafiya', 'Yel Universiteti', 'Əlyazma', 'Karbon 14', 'Botanika', 'Naməlum dil'],
    date: '1404 – 1438 (C-14 radiokarbon təyini)',
    location: 'Beinecke Nadir Kitablar Kitabxanası, Yel Universiteti, ABŞ',
    coordinates: '41°18′42″N 72°55′38″W',
    status: 'Yel Universiteti MS 408 qeydiyyat nömrəli real tarixi artefakt',
    theoriesCount: '5 dilçilik və kriptoqrafiya nəzəriyyəsi',
    readingTime: 17,
    views: 45600,
    trendingScore: 90,
    factStatus: 'verified_fact',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Paleoqrafiya və Kriptoanaliz',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Əlyazmanın Kəşfi' },
      { id: 'fiziki-xususiyyetler', title: '2. Fiziki Xüsusiyyətlər və Radiokarbon Analizi' },
      { id: 'struktur-ve-bolmeler', title: '3. Əlyazmanın 6 Tematik Bölməsi' },
      { id: 'dilcilik-ve-kriptoqrafiya', title: '4. Dilçilik Xüsusiyyətləri: Zipf Qanunu və Entropiya' },
      { id: 'esas-nezeriyyeler', title: '5. Əsas Dekodlaşdırma Nəzəriyyələri' },
      { id: 'menbeler', title: '6. Mənbələr' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Əlyazmanın Kəşfi',
        content: `1912-ci ildə polyak əsilli antikvar Vilfrid Voyniç İtaliyanın Fraskati şəhərindəki Yezuit monastırından qədim əlyazmalar toplusu satın aldı. Bu kolleksiyanın içərisində heç bir məlum dünya dilində yazılmamış, 240 səhifəlik unikal bir kitab var idi. Kitab hal-hazırda Yel Universitetinin Baynekki Nadir Kitablar Kitabxanasında "MS 408" şifri altında qorunur.`,
        badge: 'fact',
        badgeText: 'Yel Universiteti Arxivi'
      },
      {
        id: 'fiziki-xususiyyetler',
        title: '2. Fiziki Xüsusiyyətlər və Radiokarbon Analizi',
        content: `2009-cu ildə Arizona Universitetinin laboratoriyasında əlyazmanın dörd müxtəlif vərəqindən götürülmüş nümunələr üzərində aparılan radiokarbon (C-14) testləri sübut etdi ki, perqament 1404–1438-ci illər arasında (Erkən İntibah) dana dərisindən hazırlanmışdır. Mürəkkəbin mikroskopik analizi də onun XV əsr tərkibinə tam uyğun olduğunu göstərdi; bu da əlyazmanın müasir saxtakarlıq olması ehtimalını tamamilə aradan qaldırdı.`,
        badge: 'fact',
        badgeText: 'C-14 Radiokarbon Təsdiqi'
      },
      {
        id: 'dilcilik-ve-kriptoqrafiya',
        title: '4. Dilçilik Xüsusiyyətləri: Zipf Qanunu və Entropiya',
        content: `Mətn təxminən 20-30 fərqli qrafemdən ibarət xüsusi əlifba ilə yazılmışdır. Statistik analizlər göstərir ki:
- Mətn təbii dillərə xas "Zipf qanunu"na (ən çox işlənən sözün tezliyinin sıraya tərs mütənasibliyi) tam tabedir.
- Sözlərin informasiya entropiyası ingilis və ya latın dillərindən daha aşağı, lakin semit və ya şərqi Asiya dillərinə yaxındır.
- Yazıda heç bir düzəliş, qaralama və ya xətt xətası yoxdur; müəllif mətni nə yazdığını çox yaxşı bilən axıcı bir xətlə qələmə almışdır.`,
        badge: 'fact',
        badgeText: 'Riyazi Statistik Analiz'
      }
    ],
    keyFacts: [
      { label: 'Perqament Yaşı', value: '1404 – 1438 (C-14 analizi)', status: 'verified_fact' },
      { label: 'Səhifə sayı', value: '240 səhifə (bəzi vərəqlər itib)', status: 'verified_fact' },
      { label: 'Saxlanma yeri', value: 'Yel Universiteti, Beinecke Library (MS 408)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Süni Əvəzləmə Şifrəsi Nəzəriyyəsi',
        likelihood: 'Yüksək',
        description: 'Mətnin Avropa dilində yazıldığı, lakin xüsusi polialfavit və ya Kardan şəbəkəsi ilə şifrələndiyi hipotezi.',
        scientificConsensus: 'Kriptoanalitiklər arasında ən geniş qəbul edilən ehtimal.'
      },
      {
        name: 'İtirilmiş Təbii Dil Hipotezi',
        likelihood: 'Orta',
        description: 'Mətnin proto-roman və ya naxışlı fonetik transkripsiyaya malik naməlum dialekt olması.',
        scientificConsensus: 'Dilçilər tərəfindən hələlik tam leksik bazası tapılmayıb.'
      }
    ],
    sources: [
      { title: 'The Voynich Manuscript: The Mysterious Code That Has Defied Interpretation', author: 'Gerry Kennedy & Rob Churchill', publisher: 'Orion', year: '2004', type: 'book' },
      { title: 'The Voynich Manuscript', publisher: 'Yale University Press', year: '2016', type: 'academic' }
    ],
    relatedArticleSlugs: ['antikitera-mexanizmi-qədim-komputer', 'wow-siqnali', 'roswell-ufo-hadisesi']
  },
  {
    id: 'art-046',
    title: 'Mary Celeste (Meri Selest) — Atlantikdə Tapılan Kabus Gəmi (1872)',
    originalName: 'Mary Celeste',
    slug: 'mary-celeste-kabus-gemi',
    description: '1872-ci ildə Azor adaları yaxınlığında dənizdə tamamilə saz vəziyyətdə, lakin kapitanı, ailəsi və 7 nəfərlik heyəti izsiz yoxa çıxmış şəkildə tapılan ticarət briqantinası.',
    category: 'sirli-hadiseler',
    subcategory: 'Yoxa çıxmış gəmilər',
    tags: ['Mary Celeste', '1872', 'Atlantik', 'Kabus gəmi', 'Dənizçilik', 'Spirt buxarlanması', 'Gibraltar'],
    date: '4 Dekabr 1872',
    location: 'Atlantik Okeanı (Azor adalarından 740 km şərqdə)',
    coordinates: '38°20′N 17°15′W',
    status: 'Dənizçilik tarixinin ən məşhur həll olunmamış yoxa çıxması',
    theoriesCount: '3 əsas fiziki və psixoloji nəzəriyyə',
    readingTime: 14,
    views: 39800,
    trendingScore: 85,
    factStatus: 'verified_fact',
    lastUpdated: '11 Avqust 2026',
    author: 'DARKPEDIA Dənizçilik Arxivləri',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Gəminin Tapılması' },
      { id: 'faktiki-veziyyet', title: '2. Gəmidəki Faktiki Vəziyyət və Maddi Dəlillər' },
      { id: 'spirt-partlayisi', title: '3. Elmi İzah: Spirt Qazının Partlayış İllüziyası' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Gəminin Tapılması',
        content: `4 dekabr 1872-ci ildə Britaniya gəmisi "Dei Gratia" Portuqaliya sahillərindən təxminən 740 km aralıda yelkənləri qismən açılmış, dənizdə hədəfsiz dreyf edən "Mary Celeste" briqantinasını gördü. Kapitan David Morxaus gəmiyə daxil olmaq üçün heyət göndərdi. Gəminin göyərtəsində tək bir canlı insan belə yox idi.`,
        badge: 'fact',
        badgeText: 'Cəbəllütariq Dəniz Məhkəməsi Protokolu'
      },
      {
        id: 'faktiki-veziyyet',
        title: '2. Gəmidəki Faktiki Vəziyyət və Maddi Dəlillər',
        content: `Məhkəmə baxışı zamanı qeydə alınmış faktlar:
- Gəmi su keçirmirdi və üzməyə tam yararlı idi.
- 6 aylıq ərzaq və şirin su ehtiyatı toxunulmaz qalmışdı.
- Heyətin bütün şəxsi əşyaları, pulları və geyimləri kayutlarda idi.
- Yeganə xilasedici qayıq yerində deyildi, naviqasiya kompassı və sekstant götürülmüşdü.
- Yük yerindəki 1701 çəllək sənaye spirtindən 9-u boş idi.`,
        badge: 'fact',
        badgeText: 'Maddi Sübutlar Siyahısı'
      },
      {
        id: 'spirt-partlayisi',
        title: '3. Elmi İzah: Spirt Qazının Partlayış İllüziyası',
        content: `2006-cı ildə Oksford Universitetinin professoru Andrea Sella tərəfindən aparılan laboratoriya eksperimenti ən məntiqli elmi izahı təqdim etdi: Palıd çəlləklərdən sızan sənaye spirti buxarlanaraq tüstüsüz və qığılcımsız alov partlayışı (vapor explosion) yaratmışdır. Kapitan Benjamin Briggs gəminin hər an havaya uça biləcəyini düşünərək ailəsini və heyəti qayığa mindirmiş, kəndirlə gəminin arxasına bağlamış, lakin qəfil qopan fırtına kəndiri qıraraq qayığı okeanın dərinliklərinə aparmışdır.`,
        badge: 'theory',
        badgeText: 'Oksford Universiteti Elmi Təcrübəsi'
      }
    ],
    keyFacts: [
      { label: 'Gəmi', value: 'Mary Celeste (Briqantina)', status: 'verified_fact' },
      { label: 'Yoxa çıxanlar', value: '10 nəfər (Kapitan, xanımı, 2 yaşlı qızı, 7 dənizçi)', status: 'verified_fact' },
      { label: 'Yük', value: '1701 çəllək sənaye spirti', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Spirt buxarı və panik təxliyə hipotezi',
        likelihood: 'Yüksək',
        description: 'Çəlləklərdən sızan buxarın partlayış qorxusu yaratması və qayıq kəndirinin fırtınada qırılması.',
        scientificConsensus: 'Müasir dənizçilik tarixçiləri tərəfindən ən çox qəbul edilən izah.'
      }
    ],
    sources: [
      { title: 'The Mystery of the Mary Celeste', author: 'Harold T. Wilkins', publisher: 'Heath Cranton', year: '1942', type: 'book' },
      { title: 'Court of Admiralty Records: Gibraltar Proceedings', publisher: 'British Admiralty', year: '1873', type: 'archive' }
    ],
    relatedArticleSlugs: ['bermud-ucbucagi-sirri', 'flannan-mayaki-yoxa-cixan-uc-keşikçi']
  },
  {
    id: 'art-047',
    title: 'Antikythera Mexanizmi — Qədim Dünyanın İlk Analoq Kompüteri',
    originalName: 'Antikythera mechanism',
    slug: 'antikitera-mexanizmi-qədim-komputer',
    description: 'E.ə. II əsrdə qədim yunanlar tərəfindən düzəldilmiş, Günəş, Ay və 5 məlum planetin hərəkətini və tutulmalarını dəqiqliklə hesablayan 30 bürünc dişli çarxdan ibarət mexaniki möcüzə.',
    category: 'sirli-hadiseler',
    subcategory: 'Arxeoloji anomaliyalar',
    tags: ['Antikythera', 'Yunanıstan', 'Arxeologiya', 'Analoq kompüter', 'E.ə. II əsr', 'Rentgen tomoqrafiyası'],
    date: 'E.ə. 150 – 100-cü illər (Batma tarixi: E.ə. 60)',
    location: 'Antikitera adası sahilləri, Yunanıstan',
    coordinates: '35°53′23″N 23°18′28″E',
    status: 'Afina Milli Arxeologiya Muzeyində qorunan təsdiqlənmiş unikal artefakt',
    theoriesCount: 'Bərpa olunmuş mexaniki model',
    readingTime: 16,
    views: 42300,
    trendingScore: 87,
    factStatus: 'verified_fact',
    lastUpdated: '17 Avqust 2026',
    author: 'DARKPEDIA Arxeoastronomiya',
    tableOfContents: [
      { id: 'giris', title: '1. Giriş və Gəmi Qəzasının Tapılması (1900)' },
      { id: 'rentgen-ve-ct', title: '2. 3D Rentgen Mikro-Tomoqrafiyası və Dişli Çarxlar' },
      { id: 'astronomik-hesablamalar', title: '3. Planetlərin Hərəkəti və Saros Tutulma Tsiklləri' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'giris',
        title: '1. Giriş və Gəmi Qəzasının Tapılması (1900)',
        content: `1900-cü ildə yunan süngər ovçuları Antikitera adası sahillərində 45 metr dərinlikdə qədim Roma gəmisinin qalıqlarını aşkar etdilər. Tapılan heykəllər və qızıllar arasında korroziyaya uğramış tunc bir parça var idi. 1902-ci ildə arxeoloq Valerios Stais bu parçanın içində miniatür dişli çarxların olduğunu gördü. Bu tapıntı qədim texnologiya haqqında bütün təsəvvürləri alt-üst etdi.`,
        badge: 'fact',
        badgeText: 'Afina Arxeologiya Arxivləri'
      },
      {
        id: 'rentgen-ve-ct',
        title: '2. 3D Rentgen Mikro-Tomoqrafiyası və Dişli Çarxlar',
        content: `2005-ci ildə beynəlxalq "Antikythera Mechanism Research Project" çərçivəsində Britaniya və ABŞ alimləri xüsusi 8 tonluq 3D rentgen tomoqrafı (CT) vasitəsilə artefaktın daxilini skan etdilər. Nəticələr heyrətamiz idi:
- Cihaz ən azı 30 dəqiq hesablanmış tunc dişli çarxdan ibarət idi.
- Dişlilərin qalınlığı cəmi 1.5 mm, dişlərinin bucağı isə 60 dərəcə idi.
- Qutunun içindəki metal lövhələrdə 3500-dən çox yunan hərfindən ibarət istifadə təlimatı aşkar edildi.`,
        badge: 'fact',
        badgeText: '3D Tomoqrafiya Nəticələri (Nature, 2006)'
      },
      {
        id: 'astronomik-hesablamalar',
        title: '3. Planetlərin Hərəkəti və Saros Tutulma Tsiklləri',
        content: `Mexanizm yan tərəfdəki dəstəyi fırlatmaqla işləyirdi. O, aşağıdakı astronomik parametrləri hesablayırdı:
- Meton tsikli (19 illik Ay-Günəş təqvimi) və Saros tsikli (223 aylıq Günəş və Ay tutulması proqnozu).
- Ayın elliptik orbitindəki qeyri-bərabər sürətini diferensial dişli vasitəsilə simulyasiya edirdi.
- Qədim Olimpiya oyunlarının və digər Panellin yarışlarının 4 illik dəqiq vaxtını göstərirdi.
Bu mürəkkəblikdə mexaniki saatlar Avropada yalnız 1500 il sonra — XIV əsr İntibah dövründə yenidən peyda oldu.`,
        badge: 'fact',
        badgeText: 'Astronomik Riyaziyyat Modeli'
      }
    ],
    keyFacts: [
      { label: 'Dövr', value: 'E.ə. II əsr (təxm. E.ə. 150–100)', status: 'verified_fact' },
      { label: 'Material', value: 'Bürünc və ağac çərçivə', status: 'verified_fact' },
      { label: 'Dişli çarx sayı', value: '30+ bürünc dişli', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Decoding the Antikythera Mechanism: Investigation of an Ancient Astronomical Computer', author: 'Freeth, T. et al.', publisher: 'Nature Journal', year: '2006', type: 'academic' },
      { title: 'Gears from the Greeks: The Antikythera Mechanism', author: 'Derek de Solla Price', publisher: 'American Philosophical Society', year: '1974', type: 'academic' }
    ],
    relatedArticleSlugs: ['voynich-elyazmasi-sirri', 'tunguska-partlayisi', 'wow-siqnali']
  }
];
