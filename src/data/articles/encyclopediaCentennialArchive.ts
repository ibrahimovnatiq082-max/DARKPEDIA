import { Article } from '../../types';

export const encyclopediaCentennialArticles: Article[] = [
  // --- HISTORICAL AND COLD WAR MYSTERIES ---
  {
    id: 'cent-001',
    title: 'Philadelphia Eksperimenti (1943) — USS Eldridge Hərbi Gəmisinin Teleportasiya İddiası',
    originalName: 'The Philadelphia Experiment (Project Rainbow)',
    slug: 'philadelphia-eksperimenti-1943',
    description: '1943-cü ilin oktyabrında Filadelfiya hərbi tərsanəsində elektromaqnit sahələri ilə USS Eldridge esminesinin radarlardan və insan gözündən gizlədildiyi, Norfolk limanına teleportasiya olunduğu və dənizçilərin dəmir gövdə ilə birləşdiyi iddia olunan məşhur konspiroloji əfsanə.',
    category: 'ufo-namelum',
    subcategory: 'Hərbi gizli layihələr',
    tags: ['Philadelphia Experiment', 'USS Eldridge', 'Teleportasiya', 'ABŞ HDQ', '1943', 'Morris Jessup'],
    date: '28 Oktyabr 1943',
    location: 'Filadelfiya Hərbi Dəniz Tərsanəsi, Pensilvaniya, ABŞ',
    coordinates: '39°53′30″N 75°10′30″W',
    status: 'Rəsmi Təkzib Olunmuş Tarixi Şəhər Əfsanəsi',
    theoriesCount: '2 Nəzəriyyə',
    readingTime: 7,
    views: 46200,
    trendingScore: 88,
    factStatus: 'unverified_claim',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Hərbi Miflər və Konspirologiya',
    tableOfContents: [
      { id: 'carl-allen-mektublari', title: '1. Carl Allende və Morris Jessup Məktubları' },
      { id: 'deqausizasiya-heqiqeti', title: '2. Maqnit Degaussing Texnologiyası və Gəminin Əsl Marşrutu' }
    ],
    sections: [
      {
        id: 'carl-allen-mektublari',
        title: '1. Carl Allende və Morris Jessup Məktubları',
        content: `1955-ci ildə astronom Morris Cessapa Karl Allen adlı dənizçidən məktublar gəlməyə başladı. Allen iddia edirdi ki, 1943-cü ilin oktyabrında Albert Eynşteynin vahid sahə nəzəriyyəsi əsasında USS Eldridge gəmisi görünməz edilmiş və yüzlərlə kilometr uzaqlıqdakı Norfolk limanında peyda olaraq geri qayıtmışdır. Guya dənizçilər dəli olmuş, bəziləri isə gəminin polad arakəsmələrinə qarışmışdı.`,
        badge: 'claim',
        badgeText: 'Karl Allenin İddiası'
      },
      {
        id: 'deqausizasiya-heqiqeti',
        title: '2. Maqnit Degaussing Texnologiyası və Gəminin Əsl Marşrutu',
        content: `ABŞ Hərbi Dəniz Tarixi Mərkəzinin arxivləri sübut etdi ki, USS Eldridge heç vaxt həmin tarixlərdə Filadelfiyada olmamış, Nyu-York və Bermud adalarında sınaqda idi. Əfsanənin kökü isə İkinci Dünya Müharibəsində gəmiləri maqnit minalarından qorumaq üçün kabel sarğıları ilə aparılan "deqaussizasiya" (degaussing — maqnit sahəsinin sıfırlanması) gizli mühəndislik işlərinə söykənirdi.`,
        badge: 'fact',
        badgeText: 'ABŞ Hərbi Dəniz Arxivi Rəsmi Hesabatı'
      }
    ],
    keyFacts: [
      { label: 'Gəmi', value: 'USS Eldridge (DE-173)', status: 'verified_fact' },
      { label: 'İlk məktub', value: '1955 (Carl M. Allen)', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Gizli Degaussing Əməliyyatının Mifologiyalaşması', likelihood: 'Təsdiqlənmiş', description: 'Gəminin maqnit minalardan qorunması texnologiyasının xalq tərəfindən görünməzlik kimi qəbul edilməsi.' }
    ],
    sources: [{ title: 'The Philadelphia Experiment: Project Invisibility', author: 'William L. Moore, Charles Berlitz', publisher: 'Grosset & Dunlap', year: '1979', type: 'book' }],
    relatedArticleSlugs: ['flight-19-bermud-ucbucagi', 'mary-celeste-sirri', 'uss-nimitz-tic-tac-uap-hadisesi']
  },
  {
    id: 'cent-002',
    title: 'Hessdalen İşıqları — Norveç Vadisində 40 İldir Səmanı Yandıran İzaholunmaz Plazma Kürələri',
    originalName: 'The Hessdalen Lights',
    slug: 'hessdalen-isiqlari-norvec',
    description: 'Norveçin kimsəsiz Hessdalen vadisində 1981-ci ildən bəri müntəzəm olaraq peyda olan, bəzən saatlarla havada asılı qalan, avtomobil boyda olan və alimlərin daimi müşahidə stansiyası qurduğu real optik-fiziki anomaliya.',
    category: 'sirli-hadiseler',
    subcategory: 'Zaman anomaliyaları',
    tags: ['Hessdalen', 'Norveç', 'Plazma', 'Optika', 'Geofizika', 'Anomaliya', 'Elmi Fakt'],
    date: '1981 – Günümüz',
    location: 'Hessdalen Vadisi, Trøndelag, Norveç',
    coordinates: '62°50′00″N 11°12′00″E',
    status: 'Təsdiqlənmiş Daimi Elmi Tədqiqat Sahəsi',
    theoriesCount: '3 Elmi Geofiziki Hipotez',
    readingTime: 7,
    views: 33800,
    trendingScore: 84,
    factStatus: 'verified_fact',
    lastUpdated: '17 Avqust 2026',
    author: 'DARKPEDIA Atmosferik Fizika və Geofizika',
    tableOfContents: [
      { id: 'musahide-stansiyasi', title: '1. 1983-cü İl "Project Hessdalen" və Avtomatlaşdırılmış Stansiya' },
      { id: 'torpaq-batareyasi-hipotezi', title: '2. Təbii Yeraltı Batareya Hipotezi: Sink, Dəmir və Kükürd' }
    ],
    sections: [
      {
        id: 'musahide-stansiyasi',
        title: '1. 1983-cü İl "Project Hessdalen" və Avtomatlaşdırılmış Stansiya',
        content: `1981-1984-cü illərdə Hessdalen vadisində həftədə 15-20 dəfə parlaq sarı, ağ və qırmızı işıq kürələri görünməyə başladı. Norveç Ostfold Universiteti və İtaliya Milli Tədqiqat Şurası vadidə spektrometr, radar və kameralarla təchiz olunmuş daimi avtomatlaşdırılmış elmi rəsədxana qurdular. Spektroqrafik analiz işıqların soyuq plazma tərkibli olduğunu və yanma məhsulu buraxmadığını göstərdi.`,
        badge: 'fact',
        badgeText: 'Project Hessdalen Elmi Hesabatı'
      },
      {
        id: 'torpaq-batareyasi-hipotezi',
        title: '2. Təbii Yeraltı Batareya Hipotezi: Sink, Dəmir və Kükürd',
        content: `2014-cü ildə aparılan geoloji analizlər göstərdi ki, vadinin bir tərəfindəki qayalar sink və dəmirlə, digər tərəfindəki qayalar isə mislə zəngindir. Ortadan axan Hesja çayı və kükürdlü su mənbələri bu dağları nəhəng bir təbii "akkumulyator batareyası"na çevirir. Radon qazı ionlaşdıqda havada görünən plazma qığılcımları parıldayır.`,
        badge: 'theory',
        badgeText: 'Geofiziki Tədqiqat'
      }
    ],
    keyFacts: [
      { label: 'Başlanğıc', value: '1981', status: 'verified_fact' },
      { label: 'İşıqların ölçüsü', value: 'Futbol topundan avtomobil ölçüsünə qədər', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Təbii Batareya və Tozlu Plazma Hadisəsi', likelihood: 'Yüksək', description: 'Yeraltı mineralların və radon qazının yaratdığı elektrokimyəvi plazma.' }
    ],
    sources: [{ title: 'Optical and Radar Analysis of the Hessdalen Phenomena', author: 'Erling Strand', publisher: 'Journal of Scientific Exploration', year: '2014', type: 'peer_reviewed' }],
    relatedArticleSlugs: ['phoenix-isiqlari-hadisesi', 'tunguska-partlayisi-1908', 'wow-siqnali']
  },
  {
    id: 'cent-003',
    title: 'Axeman of New Orleans (1918-1919) — Jazz Musiqisi Çalmayan Evləri Doğrayan Serial Balta Qatili',
    originalName: 'The Axeman of New Orleans',
    slug: 'axeman-of-new-orleans',
    description: '1918-1919-cu illərdə Yeni Orleanda 12 insanı öz baltaları ilə doğrayan, qəzetlərə "Jazz musiqisi çalınmayan evlərə girib hamını öldürəcəm" deyə məktub yazan və bütün şəhərə gecə boyunca jazz çaldıran açılmamış qatil.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Serial cinayət hadisələri',
    tags: ['Axeman', 'New Orleans', 'Jazz', '1919', 'Balta Qatili', 'Açılmamış', 'Serial Qatil'],
    date: '1918 – 1919',
    location: 'Yeni Orlean, Luiziana, ABŞ',
    coordinates: '29°57′17″N 90°04′30″W',
    status: 'Tarixi Açılmamış Serial Qətl İşi',
    theoriesCount: '2 Nəzəriyyə',
    readingTime: 8,
    views: 41200,
    trendingScore: 87,
    factStatus: 'unresolved_unknown',
    lastUpdated: '15 Avqust 2026',
    author: 'DARKPEDIA Tarixi Kriminalistika',
    tableOfContents: [
      { id: 'baltaci-pusqusu', title: '1. İtalyan Baqqalların Qapılarını Kəsən Qatil' },
      { id: 'jazz-gecesi-19-mart', title: '2. 19 Mart 1919 Jazz Gecəsi və Qatilin Yox Oluşu' }
    ],
    sections: [
      {
        id: 'baltaci-pusqusu',
        title: '1. İtalyan Baqqalların Qapılarını Kəsən Qatil',
        content: `1918-ci ilin mayından etibarən qatil gecələr italyan əsilli baqqalların evlərinin arxa qapı panellərini kəsib içəri daxil olur, ev sahiblərinin öz baltasını götürərək onları yataqlarında yatarkən amansızlıqla qətlə yetirirdi. Evdəki pul və qızıllara heç toxunulmurdu.`,
        badge: 'fact',
        badgeText: 'Yeni Orlean Polis Departamenti (NOPD)'
      },
      {
        id: 'jazz-gecesi-19-mart',
        title: '2. 19 Mart 1919 Jazz Gecəsi və Qatilin Yox Oluşu',
        content: `13 mart 1919-cu ildə qəzetlərə qatildən məktub gəldi: "Gələn çərşənbə axşamı gecə saat 00:15-də Yeni Orleanın üzərindən keçəcəyəm. Evində jazz musiqisi guruldayan heç kimə toxunmayacağam." 19 mart gecəsi şəhərin bütün evlərində, klublarında və küçələrində səhərə qədər caz çalındı və həmin gecə heç bir ölüm olmadı. Oktyabr ayında sonuncu hücumdan sonra qatil izsiz yox oldu.`,
        badge: 'fact',
        badgeText: 'The Times-Picayune Qəzeti (1919)'
      }
    ],
    keyFacts: [
      { label: 'Qurbanlar', value: '12 nəfər (6 ölü, 6 yaralı)', status: 'verified_fact' },
      { label: 'İmzası', value: 'Qurbanın öz baltasından istifadə', status: 'verified_fact' }
    ],
    theories: [
      { title: 'İtalyan Mafiyası (Black Hand) Şantajı', likelihood: 'Orta', description: 'Xərac verməyən tacirlərin cəzalandırılması üçün muzdlu qatil.' },
      { title: 'Psixotik Serial Qatil (Joseph Mumfre)', likelihood: 'Yüksək', description: 'Sadist meylli ruhi xəstə fərd.' }
    ],
    sources: [{ title: 'The Axeman of New Orleans: The True Story', author: 'Gary Krist', publisher: 'Crown', year: '2014', type: 'book' }],
    relatedArticleSlugs: ['villisca-balta-qetliami', 'hinterkaifeck-fermasi-qetliami', 'jack-the-ripper-london']
  },
  {
    id: 'cent-004',
    title: 'Aokigahara (İntihar Meşəsi) — Fuji Dağının Ətəyindəki Zülmət Və Sakitlik',
    originalName: 'Aokigahara Forest (Sea of Trees)',
    slug: 'aokigahara-intihar-mesesi',
    description: 'Fuji dağının şimal-qərbində 30 kvadrat kilometrlik vulkanik bazalt qayaları üzərində salınmış, kompasların maqnit süxurlara görə çaşdığı, mütləq səssizliyin hökm sürdüyü və hər il onlarla insanın həyatına son qoyduğu qaranlıq meşə.',
    category: 'psixologiya',
    subcategory: 'Qorxunun psixologiyası',
    tags: ['Aokigahara', 'Yaponiya', 'Fuji', 'Meşə', 'Psixologiya', 'Ubasute', 'Folklor'],
    date: 'Tarixi – Günümüz',
    location: 'Yamanashi Prefekturası, Yaponiya',
    coordinates: '35°28′12″N 138°37′11″W',
    status: 'Yaponiya Hökuməti Tərəfindən Xüsusi Nəzarətdə Olan Ərazi',
    theoriesCount: 'Mədəni və Psixoloji Tədqiqatlar',
    readingTime: 7,
    views: 53100,
    trendingScore: 94,
    factStatus: 'verified_fact',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Sosial Psixologiya və Mədəniyyət',
    tableOfContents: [
      { id: 'geoloji-qurulus', title: '1. Vulkanik Bazalt və Kompasların Susması' },
      { id: 'ubasute-adeti', title: '2. "Ubasute" Ənənəsi və Müasir Xilasetmə Qrupları' }
    ],
    sections: [
      {
        id: 'geoloji-qurulus',
        title: '1. Vulkanik Bazalt və Kompasların Susması',
        content: `Aokiqahara meşəsi b.e. 864-cü ildə Fuji dağının püskürməsi nəticəsində yaranmış qalın lav qatı üzərində bitmişdir. Torpağın dəmir və maqnetitlə zəngin olması adi maqnit kompaslarının iynəsini xaotik hərəkət etdirir. Meşə örtüyü o qədər sıxdır və lav qayaları səsi o qədər udur ki, meşə daxilində tam qulaqbatırıcı sükut hökm sürür və cığırı itirən insanların yolu tapması qeyri-mümkündür.`,
        badge: 'fact',
        badgeText: 'Yaponiya Geologiya İnstitutu'
      },
      {
        id: 'ubasute-adeti',
        title: '2. "Ubasute" Ənənəsi və Müasir Xilasetmə Qrupları',
        content: `XIX əsrdə aclıq dövrlərində yoxsul ailələr yaşlı və xəstə qohumlarını bu meşəyə gətirib tərk edərdilər ("Ubasute"). Müasir dövrdə isə prefektura polisi və könüllülər meşənin hər yerinə təsəlliverici lövhələr və qaynar xətt nömrələri quraşdırıb hər ay axtarış reydləri keçirirlər.`,
        badge: 'fact',
        badgeText: 'Yamanashi Prefekturası Polisi Hesabatı'
      }
    ],
    keyFacts: [
      { label: 'Ərazi', value: '30 kvadrat kilometr', status: 'verified_fact' },
      { label: 'Geoloji baza', value: '864-cü il lav axını (Jōgan püskürməsi)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [{ title: 'Suicide in Japan: Culture, Prevention, and Mental Health', author: 'Tadashi Takeshima', publisher: 'Routledge', year: '2015', type: 'academic' }],
    relatedArticleSlugs: ['dyatlov-asirimi-hadisesi', 'yuba-county-five', 'cotard-deluziyasi-gezen-cesed-sindromu']
  },
  {
    id: 'cent-005',
    title: 'Havana Sindromu (2016) — Diplomatların Beynini Zədələyən Sirli Mikrodalğalı Silah',
    originalName: 'Havana Syndrome (Anomalous Health Incidents)',
    slug: 'havana-sindromu-diplomatlar',
    description: '2016-cı ildə Kubada ABŞ və Kanada diplomatlarının qulaqlarında kəskin cırıltı səsi eşidərək kəllə-beyin travması, yaddaş itkisi və daxili qulaq zədələnməsi yaşaması ilə başlayan qlobal kəşfiyyat qalmaqalı.',
    category: 'psixologiya',
    subcategory: 'İnsan beyninin qəribə halları',
    tags: ['Havana Syndrome', 'Kuba', 'CIA', 'Mikrodalğa Silahı', 'Diplomatlar', 'Beyin zədəsi'],
    date: '2016 – Günümüz',
    location: 'Havana (Kuba), Vyana, Quançjou, Vaşinqton',
    status: 'ABŞ Dövlət Departamenti və CIA Təhqiqat Mövzusu',
    theoriesCount: '2 Elmi və Kəşfiyyat Nəzəriyyəsi',
    readingTime: 8,
    views: 44100,
    trendingScore: 89,
    factStatus: 'verified_fact',
    lastUpdated: '17 Avqust 2026',
    author: 'DARKPEDIA Beynəlxalq Təhlükəsizlik və Neyrologiya',
    tableOfContents: [
      { id: 'ilk-simptomlar', title: '1. 2016-cı İl Havana Səfirliyi və Kəskin Akustik Zərbə' },
      { id: 'milli-elmler-akademiyasi', title: '2. ABŞ Milli Elmlər Akademiyasının İstiqamətləndirilmiş Enerji Hesabatı' }
    ],
    sections: [
      {
        id: 'ilk-simptomlar',
        title: '1. 2016-cı İl Havana Səfirliyi və Kəskin Akustik Zərbə',
        content: `2016-cı ilin sonlarında Havanadakı ABŞ səfirliyinin diplomatları və CIA əməkdaşları evlərində və mehmanxanalarda olarkən qəfil yüksək səsli təzyiq dalğası hiss etdilər. Bunun ardınca başgicəllənmə, görmə pozğunluğu, şiddətli baş ağrıları və daimi koqnitiv pozuntu yarandı. Pensilvaniya Universiteti nevroloqları xəstələrin beyinlərində kəllə sınığı olmadan silkələnməyə bənzər ağ maddə zədələnmələri aşkar etdilər.`,
        badge: 'fact',
        badgeText: 'JAMA Tibb Jurnalı Tədqiqatı (2018)'
      },
      {
        id: 'milli-elmler-akademiyasi',
        title: '2. ABŞ Milli Elmlər Akademiyasının İstiqamətləndirilmiş Enerji Hesabatı',
        content: `2020-ci ildə ABŞ Milli Elmlər Akademiyası 19 alimin hazırladığı yekun hesabatı dərc etdi. Hesabatda bu sindromun ən ehtimal olunan səbəbinin "istiqamətləndirilmiş impulsiv radio-tezlik enerjisi" (mikrodalğa şüalanması) olduğu bildirildi. 2024-cü ildə "60 Minutes" və "Der Spiegel" jurnalist təhqiqatı bu hücumların arxasında Rusiya QRU-nun 29155 nömrəli xüsusi hərbi hissəsinin dayandığını iddia edən sənədlər yaydı.`,
        badge: 'fact',
        badgeText: 'ABŞ Milli Elmlər Akademiyası Hesabatı (2020)'
      }
    ],
    keyFacts: [
      { label: 'Qurbanlar', value: '200-dən çox diplomat və kəşfiyyat zabiti', status: 'verified_fact' },
      { label: 'Əsas elmi nəzəriyyə', value: 'İmpulsiv mikrodalğalı şüalanma (Frey effekti)', status: 'verified_fact' }
    ],
    theories: [
      { title: 'İstiqamətləndirilmiş Radio-Tezlik / Mikrodalğa Silahı', likelihood: 'Yüksək', description: 'Xüsusi xidmət orqanlarının məxfi radio-elektron müharibə cihazı.' },
      { title: 'Kütləvi Psixogen Xəstəlik (Stress İzahı)', likelihood: 'Aşağı', description: 'Fiziki beyin toxuması zədələnməsi ilə təkzib olunmuş psixoloji nəzəriyyə.' }
    ],
    sources: [{ title: 'An Assessment of Illness in U.S. Government Employees and Their Families at Overseas Embassies', publisher: 'National Academies of Sciences, Engineering, and Medicine', year: '2020', type: 'peer_reviewed' }],
    relatedArticleSlugs: ['mkultra-cia-agil-nezareti', 'lead-masks-qurgusun-maskalar-isi', 'cotard-deluziyasi-gezen-cesed-sindromu']
  }
];
