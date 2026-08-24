import { Article } from '../../types';

export const encyclopediaBatch1Articles: Article[] = [
  {
    id: 'enc-001',
    title: 'Enfield Poltergeysti — 20-ci Əsrin Ən Çox Sənədləşdirilmiş Paranormal İşi',
    originalName: 'Enfield Poltergeist',
    slug: 'enfield-poltergeysti',
    description: '1977-1979-cu illərdə Londonun Enfild qəsəbəsində Hodgson ailəsinin evində baş vermiş, mebellərin havada uçması, divarlardan gələn zərbələr və 11 yaşlı Canetin trans halında danışdığı qeydə alınmış məşhur poltergeist hadisəsi.',
    category: 'paranormal',
    subcategory: 'Poltergeist hadisələri',
    tags: ['Enfield', 'London', 'Poltergeist', 'Maurice Grosse', 'Warren', 'Trans', '1977'],
    date: 'Avqust 1977 – 1979',
    location: 'Enfield, Şimali London, Böyük Britaniya',
    coordinates: '51°39′04″N 0°04′48″W',
    status: 'Sənədləşdirilmiş Paranormal Araşdırma (Müzakirəli)',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 9,
    views: 38200,
    trendingScore: 89,
    factStatus: 'theory',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Paranormal Tədqiqatlar Qrupu',
    tableOfContents: [
      { id: 'hadisenin-baslangici', title: '1. 284 Green Street Hadisələri' },
      { id: 'moris-qros-tedqiqati', title: '2. Maurice Grosse və SPR Araşdırması' },
      { id: 'billi-uolkins-sesi', title: '3. Trans Səsi və Bill Uilkins Şəxsiyyəti' },
      { id: 'elmi-skeptisizm', title: '4. Skeptik Təhlil və Nəticə' }
    ],
    sections: [
      {
        id: 'hadisenin-baslangici',
        title: '1. 284 Green Street Hadisələri',
        content: `1977-ci ilin avqust ayında Londonun Enfild bölgəsində yaşayan subay ana Peqqi Hodgson yerli polisə zəng edərək evindəki mebellərin öz-özünə hərəkət etdiyini bildirdi. Hadisə yerinə gələn polis zabiti Karolin Hips rəsmi protokolunda kreslonun heç bir kənar təsir olmadan yerdən 1 santimetr qalxaraq təxminən 1.5 metr sürüşdüyünü öz gözləri ilə gördüyünü təsdiqlədi.

Növbəti 18 ay ərzində evdə qəribə tappıltılar, LEGO fiqurlarının və mərmər kürəciklərinin havada istilənərək uçması, yataqların titrəməsi və divarlarda yanğın ocaqlarının peyda olması qeydə alındı. Hadisələrin əsas mərkəzində 11 yaşlı Janet və 13 yaşlı Margaret Hodgson bacıları dayanırdı.`,
        badge: 'fact',
        badgeText: 'Rəsmi Polis Protokolu (1977)'
      },
      {
        id: 'moris-qros-tedqiqati',
        title: '2. Maurice Grosse və SPR Araşdırması',
        content: `Böyük Britaniya Psixi Araşdırmalar Cəmiyyətinin (Society for Psychical Research - SPR) aparıcı üzvləri Maurice Grosse və Guy Lyon Playfair evdə aylarla gecələyərək minlərlə saatlıq audio və foto qeydiyyat apardılar. Janet Hodgson-un havaya qalxaraq yataqdan atıldığı anlar fotoaparatların avtomatik tətiklənməsi ilə sənədləşdirildi.`,
        badge: 'claim',
        badgeText: 'SPR Arxivləri'
      },
      {
        id: 'billi-uolkins-sesi',
        title: '3. Trans Səsi və Bill Uilkins Şəxsiyyəti',
        content: `Janet trans halına düşdüyü zaman onun səs tellərindən deyil, qırtlağın saxta səs büküşlərindən istifadə edilərək xırıltılı, qoca kişi səsi ilə danışırdı. Səs özünü həmin evdə illər əvvəl kresloda oturarkən beyin qansızmasından vəfat etmiş Bill Wilkins kimi təqdim edirdi. Sonradan Bill Wilkinsin oğlu tapılaraq atasının ölüm detallarının qızın dedikləri ilə 100% üst-üstə düşdüyü təsdiqləndi.`,
        badge: 'fact',
        badgeText: 'Audio Qeydlər və Şəxsiyyət Təsdiqi'
      },
      {
        id: 'elmi-skeptisizm',
        title: '4. Skeptik Təhlil və Nəticə',
        content: `Magicians Association üzvləri və skeptik tədqiqatçılar (məsələn, Ray Hyman) qızların bəzi hallarda diqqət çəkmək üçün hiylələrə əl atdıqlarını etiraf etdiklərini xatırladırlar. Lakin Maurice Grosse iddia edirdi ki, qeydə alınan fenomenlərin ən azı 70%-i uşaqların fiziki imkanları xaricində idi.`,
        badge: 'theory',
        badgeText: 'Psixosomatik & Poltergeist Debatı'
      }
    ],
    keyFacts: [
      { label: 'Başlama tarixi', value: '31 Avqust 1977', status: 'verified_fact' },
      { label: 'Tədqiqatçı', value: 'Maurice Grosse (SPR)', status: 'verified_fact' },
      { label: 'Əsas subyekt', value: 'Janet Hodgson (11 yaş)', status: 'verified_fact' },
      { label: 'Polis şahidi', value: 'Zabit Carolyn Heeps', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Təbii Psixokinez və Yeniyetmə Stressi', likelihood: 'Yüksək', description: 'Gənc qızın daxili emosional travmasının qeyri-ixtiyari fiziki təzahürü.' },
      { title: 'Kollektiv Aldatma və İllüziya', likelihood: 'Orta', description: 'Qızların ventriloqizm və gizli elastik iplərdən istifadə etməsi.' }
    ],
    sources: [
      { title: 'This House Is Haunted', author: 'Guy Lyon Playfair', publisher: 'Stein and Day', year: '1980', type: 'book' },
      { title: 'Enfield Poltergeist Investigation Files', publisher: 'Society for Psychical Research (SPR)', year: '1979', type: 'archive' }
    ],
    relatedArticleSlugs: ['amityville-dehseti', 'bell-ifritesi-leneti', 'waverly-hills-sanatoriyasi']
  },
  {
    id: 'enc-002',
    title: 'Amityville Dəhşəti — 112 Ocean Avenue Evinin Qaranlıq Tarixi',
    originalName: 'The Amityville Horror',
    slug: 'amityville-dehseti',
    description: '1974-cü ildə Ronald DeFeo Jr.-ın bütün ailəsini qətlə yetirməsindən sonra evi alan Lutz ailəsinin cəmi 28 gün sonra qaçdığı, soyuq nöqtələr, yaşıl maye axıntıları və şeytani varlıq iddiaları ilə dolu dünya şöhrətli hadisə.',
    category: 'paranormal',
    subcategory: 'Kabuslar',
    tags: ['Amityville', 'DeFeo', 'Lutz', 'Long Island', 'Paranormal', 'Cinayət', '1974'],
    date: '13 Noyabr 1974 – 1976',
    location: 'Amityville, Long Island, Nyu-York, ABŞ',
    coordinates: '40°40′00″N 73°24′53″W',
    status: 'Tarixi Qətl & Paranormal Mübahisə',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 8,
    views: 44100,
    trendingScore: 91,
    factStatus: 'verified_fact',
    lastUpdated: '12 Avqust 2026',
    author: 'DARKPEDIA Arxiv Araşdırmaları',
    tableOfContents: [
      { id: 'defeo-qetlleri', title: '1. Ronald DeFeo Jr. Qətlləri (1974)' },
      { id: 'lutz-ailesi', title: '2. Corc və Keti Lutzun 28 Günlük Qorxusu' },
      { id: 'muhakime-ve-sonluq', title: '3. Kommersiya Fırıldağı, yoxsa Real Hadisə?' }
    ],
    sections: [
      {
        id: 'defeo-qetlleri',
        title: '1. Ronald DeFeo Jr. Qətlləri (1974)',
        content: `13 noyabr 1974-cü il gecəsi 23 yaşlı Ronald "Butch" DeFeo Jr. Marlin .35 kalibrli tüfənglə valideynlərini və 4 bacı-qardaşını yataqlarında güllələyərək öldürdü. Məhkəmədə DeFeo evdəki qaranlıq səslərin ona ailəsini öldürməyi əmr etdiyini bildirdi. Maraqlıdır ki, 6 qurbanın heç birində boğuşma izi yox idi və qonşulardan heç kim səsboğucusuz tüfəngin 8 atəş səsini eşitməmişdi.`,
        badge: 'fact',
        badgeText: 'Məhkəmə İşi No. 74-2391'
      },
      {
        id: 'lutz-ailesi',
        title: '2. Corc və Keti Lutzun 28 Günlük Qorxusu',
        content: `1975-ci ilin dekabrında Corc və Keti Lutz evi cəlbedici endirimlə aldılar. Lakin 28 gün sonra bütün şəxsi əşyalarını qoyaraq evi həmişəlik tərk etdilər. Onlar hər gecə saat 03:15-də (qətllərin törədildiyi saat) qəfil oyanma, divarlardan qara jeleyəbənzər maddə axması, nəhəng milçək sürüləri və pəncərədə qırmızı parıldayan gözlər gördüklərini bəyan etdilər.`,
        badge: 'claim',
        badgeText: 'Lutz İfadələri'
      },
      {
        id: 'muhakime-ve-sonluq',
        title: '3. Kommersiya Fırıldağı, yoxsa Real Hadisə?',
        content: `DeFeonun vəkili Uilyam Veber sonradan Corc Lutz ilə birlikdə bu hekayəni kitab və film satışlarından gəlir əldə etmək üçün qismən şişirtdiklərini bildirdi. Buna baxmayaraq, Corc və Keti yalan detektorundan (poliqraf) keçərək həqiqətən dəhşət yaşadıqlarını sübut etmişdilər.`,
        badge: 'fact',
        badgeText: 'Poliqraf Testləri'
      }
    ],
    keyFacts: [
      { label: 'Qurbanların sayı', value: '6 ailə üzvü', status: 'verified_fact' },
      { label: 'Qatil', value: 'Ronald DeFeo Jr. (1951–2021)', status: 'verified_fact' },
      { label: 'Lutz ailəsinin qalma müddəti', value: 'Cəmi 28 gün', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Kütləvi Kommersiya Saxtakarlığı', likelihood: 'Yüksək', description: 'İpoteka borcunu ödəmək üçün vəkillə birlikdə qurulmuş ssenari.' },
      { title: 'Şəxsi Psixoz və Qisas Travması', likelihood: 'Orta', description: 'Evdə baş verən real dəhşətli cinayətin yeni sakinlərdə yaratdığı ağır eyforik stress.' }
    ],
    sources: [
      { title: 'The Amityville Horror: A True Story', author: 'Jay Anson', publisher: 'Prentice Hall', year: '1977', type: 'book' },
      { title: 'People of the State of New York v. Ronald DeFeo Jr.', publisher: 'Suffolk County Supreme Court', year: '1975', type: 'official_report' }
    ],
    relatedArticleSlugs: ['enfield-poltergeysti', 'sallie-house', 'stanley-oteli-217']
  },
  {
    id: 'enc-003',
    title: 'Bell İfritəsi — ABŞ Tarixində İnsanı Öldürdüyü İddia Edilən Yeganə Ruh',
    originalName: 'The Bell Witch Haunting',
    slug: 'bell-ifritesi-leneti',
    description: '1817-1821-ci illərdə Tennessi ştatında Con Bellin fermasını hədəf alan, fiziki hücumlar edən, gələcəyi xəbər verən və hətta gələcək prezident Endrü Ceksonu geri çəkilməyə məcbur edən tarixi poltergeist hadisəsi.',
    category: 'paranormal',
    subcategory: 'Görünməyən varlıqlar',
    tags: ['Bell Witch', 'Tennessee', 'John Bell', 'Andrew Jackson', '1817', 'Tarixi Qeydlər'],
    date: '1817 – 1821',
    location: 'Adams, Robertson County, Tennessee, ABŞ',
    coordinates: '36°35′31″N 87°03′47″W',
    status: 'Tarixi Əfsanə & Qeydə Alınmış Fenomen',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 7,
    views: 31200,
    trendingScore: 82,
    factStatus: 'unverified_claim',
    lastUpdated: '08 Avqust 2026',
    author: 'DARKPEDIA Tarixi Əfsanələr Departamenti',
    tableOfContents: [
      { id: 'fermadaki-hadiseler', title: '1. John Bellin Fermasındakı Hücumlar' },
      { id: 'endru-cekson-viziti', title: '2. General Andrew Jacksonun Ziyarəti' },
      { id: 'con-bellin-olumu', title: '3. Zəhər Şüşəsi və Con Bellin Ölümü' }
    ],
    sections: [
      {
        id: 'fermadaki-hadiseler',
        title: '1. John Bellin Fermasındakı Hücumlar',
        content: `1817-ci ildə fermer Con Bell qarğıdalı tarlasında bədəni it, başı isə dovşana bənzəyən qəribə bir heyvan gördü və ona atəş açdı. Heyvan dərhal yoxa çıxdı. Həmin gecədən etibarən Bell ailəsinin taxta evinin divarları kənardan döyülməyə, döşəmədən zəncir səsləri gəlməyə başladı. Qeyri-maddi varlıq Conun qızı Betsi Bellə fiziki hücumlar edir, onun saçlarını yolur və bədənində göyərmələr yaradırdı.`,
        badge: 'claim',
        badgeText: 'Tarixi Salnamə (1894)'
      },
      {
        id: 'endru-cekson-viziti',
        title: '2. General Andrew Jacksonun Ziyarəti',
        content: `Hadisənin şöhrəti o qədər yayıldı ki, 1819-cu ildə 1812-ci il müharibəsinin qəhrəmanı və ABŞ-ın gələcək prezidenti general Endrü Cekson şəxsən adamları ilə fermaya gəldi. Rəvayətə görə, onların at arabası fermanın girişində görünməz bir qüvvə tərəfindən dayandırıldı və görünməyən səs Ceksonun əsgərlərinin adlarını bir-bir çəkərək onları təhqir etdi. Ceksonun "Mən bütün Britaniya ordusu ilə vuruşdum, amma bu varlıqla qarşılaşmaqdansa geri çəkilməyi üstün tuturam" dediyi qeyd olunur.`,
        badge: 'claim',
        badgeText: 'Şifahi Əfsanə'
      },
      {
        id: 'con-bellin-olumu',
        title: '3. Zəhər Şüşəsi və Con Bellin Ölümü',
        content: `20 dekabr 1820-ci ildə Con Bell komaya düşdü. Onun yatağının yanında naməlum zəhərli maye şüşəsi tapıldı. Otaqda qəfildən qəhqəhə çəkən görünməz səs dedi: "Mən Coniyə o şərbəti içirdim və o bir daha oyanmayacaq!" Bu, ABŞ tarixində bir varlığın rəsmi olaraq adam öldürməkdə günahlandırıldığı yeganə hadisə kimi tarixə düşdü.`,
        badge: 'fact',
        badgeText: 'Robertson County Tarixi Qeydləri'
      }
    ],
    keyFacts: [
      { label: 'Məkan', value: 'Adams, Tennessee', status: 'verified_fact' },
      { label: 'Başlama ili', value: '1817', status: 'verified_fact' },
      { label: 'Qurban', value: 'John Bell Sr.', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Qonşu Torpaq Münaqişəsi və Zəhərləmə', likelihood: 'Yüksək', description: 'Kate Batts adlı qonşu tərəfindən gizli zəhərlənmə və ventriloq köməyi.' },
      { title: 'Poltergeist və Psixokinez', likelihood: 'Aşağı', description: 'Betsi Bellin nevroloji travmasının təzahürü.' }
    ],
    sources: [
      { title: 'An Authenticated History of the Bell Witch', author: 'Martin Van Buren Ingram', publisher: 'Adams, Tennessee', year: '1894', type: 'book' }
    ],
    relatedArticleSlugs: ['enfield-poltergeysti', 'salem-caduger-mehkemesi', 'skinwalker-ransosu']
  },
  {
    id: 'enc-004',
    title: 'Waverly Hills Sanatoriyası — 63.000 İnsanın Can Verdiyi Vərəm Xəstəxanası',
    originalName: 'Waverly Hills Sanatorium',
    slug: 'waverly-hills-sanatoriyasi',
    description: '1910-cu ildə Luisvilldə "Ağ Ölüm" (vərəm) epidemiyası üçün açılmış, pasiyentlərin cəsədlərini gizli daşımaq üçün 150 metrlik "Ölüm Tuneli" olan dünyanın ən qaranlıq sanatoriyası.',
    category: 'qorxulu-yerler',
    subcategory: 'Tərk edilmiş xəstəxanalar',
    tags: ['Waverly Hills', 'Louisville', 'Vərəm', 'Ölüm Tuneli', 'Tərk Edilmiş', 'Paranormal'],
    date: '1910 – 1961 (bağlanış)',
    location: 'Louisville, Kentucky, ABŞ',
    coordinates: '38°07′48″N 85°50′30″W',
    status: 'Tarixi Abidə və Paranormal Araşdırma Mərkəzi',
    theoriesCount: 'Tarixi Faktlar',
    readingTime: 8,
    views: 35900,
    trendingScore: 85,
    factStatus: 'verified_fact',
    lastUpdated: '14 Avqust 2026',
    author: 'DARKPEDIA Tibbi Tarix Departamenti',
    tableOfContents: [
      { id: 'ag-olum-epidemiyasi', title: '1. "Ağ Ölüm" və Sanatoriyanın Açılışı' },
      { id: 'olum-tuneli', title: '2. 150 Metrlik "Ölüm Tuneli" (Body Chute)' },
      { id: 'otaq-502', title: '3. 502 Nömrəli Otaq və Tibb Bacılarının İntiharı' }
    ],
    sections: [
      {
        id: 'ag-olum-epidemiyasi',
        title: '1. "Ağ Ölüm" və Sanatoriyanın Açılışı',
        content: `XX əsrin əvvəllərində antibiotiklər (streptomisin) kəşf olunmamışdan qabaq vərəm xəstəliyi bütün Kentukkini məhv edirdi. 1926-cı ildə 400 çarpayılıq nəhəng qotik bina inşa edildi. O dövrün müalicə metodları olduqca qəddar idi: xəstələr hətta qışın şaxtasında eyvanlarda dondurulur, ciyərlərinə hava şarları yeridilir və ya qabırğaları kəsilərək ciyərləri çökdürülürdü.`,
        badge: 'fact',
        badgeText: 'Kentukki Tibb Tarixi'
      },
      {
        id: 'olum-tuneli',
        title: '2. 150 Metrlik "Ölüm Tuneli" (Body Chute)',
        content: `Epidemiyanın ən pik dövründə gündə onlarla xəstə vəfat edirdi. Digər xəstələrin mənəviyyatını sarsıtmamaq üçün həkimlər binanın altından təpənin ətəyindəki dəmir yolu xəttinə qədər uzanan 150 metrlik qaranlıq yeraltı tunel ("Body Chute") inşa etdilər. Cəsədlər xüsusi arabalarla gecələr bu tuneldən çıxarılaraq qatarlara yüklənirdi.`,
        badge: 'fact',
        badgeText: 'Memarlıq Planı'
      },
      {
        id: 'otaq-502',
        title: '3. 502 Nömrəli Otaq və Tibb Bacılarının İntiharı',
        content: `Sanatoriyanın ən məşhur otağı 502-ci otaqdır. 1928-ci ildə 29 yaşlı baş tibb bacısı Mary Hill bu otaqda asılmış vəziyyətdə tapıldı. 1932-ci ildə başqa bir tibb bacısı həmin otağın pəncərəsindən özünü ataraq intihar etdi. Bu gün həmin otaq paranormal tədqiqatçıların ən çox səs anomaliyaları qeydə aldığı nöqtədir.`,
        badge: 'fact',
        badgeText: 'Şəhər Arxivləri'
      }
    ],
    keyFacts: [
      { label: 'İnşa ili', value: '1910 (genişləndirilmə 1926)', status: 'verified_fact' },
      { label: 'Bağlanış tarixi', value: '1961', status: 'verified_fact' },
      { label: 'Ölüm tuneli uzunluğu', value: '152 metr', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Waverly Hills: A History of the Sanatorium', publisher: 'Louisville Historical Society', year: '2005', type: 'archive' }
    ],
    relatedArticleSlugs: ['poveglia-adasi', 'paris-katakombalari', 'eastern-state-hebsxanasi']
  },
  {
    id: 'enc-005',
    title: 'Eastern State Həbsxanası — Dünyanın İlk Təkadamlıq Dəhşət Zindanı',
    originalName: 'Eastern State Penitentiary',
    slug: 'eastern-state-hebsxanasi',
    description: '1829-cu ildə Filadelfiyada açılan, məhbusları tam sükut və təklikdə saxlayaraq dəli edən, Al Kaponenin belə xəyallardan qorxduğu təkərvarı həbsxana.',
    category: 'qorxulu-yerler',
    subcategory: 'Həbsxanalar',
    tags: ['Eastern State', 'Philadelphia', 'Al Capone', 'Təkadamlıq kamera', 'Həbsxana', '1829'],
    date: '1829 – 1971',
    location: 'Filadelfiya, Pensilvaniya, ABŞ',
    coordinates: '39°58′05″N 75°10′22″W',
    status: 'Tarixi Milli Abidə',
    theoriesCount: 'Tarixi Faktlar',
    readingTime: 7,
    views: 29400,
    trendingScore: 78,
    factStatus: 'verified_fact',
    lastUpdated: '10 Avqust 2026',
    author: 'DARKPEDIA Tarixi Ədliyyə Arxivi',
    tableOfContents: [
      { id: 'pensilvaniya-sistemi', title: '1. "Pensilvaniya Sistemi" və Mütləq Sükut' },
      { id: 'al-kapone-kamerasi', title: '2. Al Kapone və Ceyms Klarkın Xəyalı' },
      { id: 'qorxunc-cezalar', title: '3. Dəmir Yüyən və Qaranlıq Hücrə Cəzaları' }
    ],
    sections: [
      {
        id: 'pensilvaniya-sistemi',
        title: '1. "Pensilvaniya Sistemi" və Mütləq Sükut',
        content: `Kvakyerlər tərəfindən cinayətkarları peşman etmək ("penitentiary" sözü tövbə etmək mənasını verir) məqsədilə yaradılmış bu həbsxanada məhbuslar illərlə təkadamlıq kamerada saxlanılırdı. Onların danışması, oxuması və ya digər məhbusu görməsi qadağan idi. Kamera xaricinə çıxarılanda başlarına qara torba keçirilirdi. Bu dəhşətli sükut yüzlərlə məhbusun ağır ruhi xəstəliklərə tutulmasına səbəb oldu.`,
        badge: 'fact',
        badgeText: 'Həbsxana Nizamnaməsi (1829)'
      },
      {
        id: 'al-kapone-kamerasi',
        title: '2. Al Kapone və Ceyms Klarkın Xəyalı',
        content: `1929-cu ildə qanunsuz silah gəzdirdiyinə görə 8 ay burada yatan məşhur qanqster Al Kapone xüsusi xalça və bahalı mebellərlə təchiz edilmiş kamerada qalırdı. Lakin gecələr Kapone qışqıraraq Müqəddəs Valentin Qətliamında öldürtdüyü Ceyms Klarkın ruhunun onu boğduğunu deyərək mühafizəçiləri köməyə çağırırdı.`,
        badge: 'fact',
        badgeText: 'Mühafizəçi Qeydləri (1929)'
      },
      {
        id: 'qorxunc-cezalar',
        title: '3. Dəmir Yüyən və Qaranlıq Hücrə Cəzaları',
        content: `Qaydanı pozan məhbuslar üçün "Dəmir Yüyən" (məhbusun dili dəmir zəncirlə arxadan əllərinə bağlanırdı, hərəkət etdikdə dili cırılırdı) və "Dəli Stulu" kimi işgəncə metodları tətbiq olunurdu.`,
        badge: 'fact',
        badgeText: 'Təftiş Komissiyası Hesabatı'
      }
    ],
    keyFacts: [
      { label: 'Açılış tarixi', value: '25 Oktyabr 1829', status: 'verified_fact' },
      { label: 'Bağlanış', value: '1971', status: 'verified_fact' },
      { label: 'Memar', value: 'John Haviland', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Eastern State Penitentiary: Crucible of Good Intentions', author: 'Norman Johnston', publisher: 'Temple University Press', year: '2000', type: 'book' }
    ],
    relatedArticleSlugs: ['alcatraz-qaçışı-sirri', 'waverly-hills-sanatoriyasi', 'poveglia-adasi']
  },
  {
    id: 'enc-006',
    title: 'Winchester Sirli Malikanəsi — Silah Qurbanlarının Ruhları Üçün Tikilən Labirint',
    originalName: 'Winchester Mystery House',
    slug: 'winchester-sirli-malikanesi',
    description: 'Sara Vinçesterin 38 il fasiləsiz tikdirdiyi, heç bir yerə açılmayan qapıları, tavana dirənən pilləkənləri və 160 otağı olan dünyanın ən qəribə memarlıq labirinti.',
    category: 'qorxulu-yerler',
    subcategory: 'Qəsrlər',
    tags: ['Winchester', 'Sarah Winchester', 'San Jose', 'Tarixi Malikanə', 'Labirint', '1884'],
    date: '1884 – 1922',
    location: 'San Jose, Kaliforniya, ABŞ',
    coordinates: '37°19′06″N 121°57′03″W',
    status: 'Tarixi Abidə',
    theoriesCount: 'Memarlıq Faktı',
    readingTime: 6,
    views: 27800,
    trendingScore: 76,
    factStatus: 'verified_fact',
    lastUpdated: '11 Avqust 2026',
    author: 'DARKPEDIA Memarlıq Tarixi',
    tableOfContents: [
      { id: 'lenet-ve-fasiləsiz-tikinti', title: '1. Vinçester Silah Lənəti' },
      { id: 'memarliq-anomaliyalari', title: '2. 13 Rəqəmi və Labirint Otaqlar' }
    ],
    sections: [
      {
        id: 'lenet-ve-fasiləsiz-tikinti',
        title: '1. Vinçester Silah Lənəti',
        content: `Winchester tüfəng imperiyasının varisi Uilyam Vinçester vəfat etdikdən sonra dul qadın Sara Vinçester bir mediumla görüşdü. Medium ona bildirdi ki, Vinçester silahları ilə öldürülən minlərlə insanın (yerli hindilər və əsgərlər) ruhları ailəni lənətləyib. Ruhların onu öldürməməsi üçün o, fasiləsiz ev tikməli idi: tikinti çəkicləri dayandığı an Sara öləcəkdi. 1884-cü ildən 1922-ci ilə qədər (Saranın yuxuda vəfat etdiyi günə qədər) 24 saat, 7 gün tikinti davam etdi.`,
        badge: 'fact',
        badgeText: 'Tarixi Bioqrafiya'
      },
      {
        id: 'memarliq-anomaliyalari',
        title: '2. 13 Rəqəmi və Labirint Otaqlar',
        content: `Evdə 160 otaq, 2000 qapı, 10.000 pəncərə və 47 kamin var. Qapıların bəziləri açıldıqda iki mərtəbə hündürlükdən birbaşa həyətə açılır, bəzi pilləkənlər birbaşa tavana dirənir. Pəncərələrin əksəriyyətində 13 şüşə, çilçıraqlarda 13 şamdan və pilləkənlərdə 13 pillə var idi. Bütün bunlar ruhların yolunu çaşdırmaq üçün layihələndirilmişdi.`,
        badge: 'fact',
        badgeText: 'Memarlıq İnventarı'
      }
    ],
    keyFacts: [
      { label: 'Tikinti müddəti', value: '38 il (1884–1922)', status: 'verified_fact' },
      { label: 'Otaq sayı', value: '160 otaq', status: 'verified_fact' },
      { label: 'Sahibi', value: 'Sarah Winchester', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Captive of the Labyrinth: Sarah L. Winchester', author: 'Mary Jo Ignoffo', publisher: 'University of Missouri Press', year: '2010', type: 'book' }
    ],
    relatedArticleSlugs: ['sedlec-ossuary', 'paris-katakombalari', 'stanley-oteli-217']
  },
  {
    id: 'enc-007',
    title: 'Stanley Oteli 217 Nömrəli Otaq — "The Shining" Əsərinə İlham Verən Ruhlu Otel',
    originalName: 'The Stanley Hotel Room 217',
    slug: 'stanley-oteli-217',
    description: '1909-cu ildə Koloradonun Qayalı Dağlarında tikilmiş, Stiven Kinqin bir gecə qaldıqdan sonra "Parıltı" şah əsərini yazdığı tarixi otel və onun qeydə alınmış anomal hadisələri.',
    category: 'qorxulu-yerler',
    subcategory: 'Otellər',
    tags: ['Stanley Hotel', 'Stephen King', 'The Shining', 'Room 217', 'Colorado', 'Paranormal'],
    date: '1909 – Günümüz',
    location: 'Estes Park, Kolorado, ABŞ',
    coordinates: '40°22′36″N 105°31′08″W',
    status: 'Fəaliyyət Göstərən Tarixi Otel',
    theoriesCount: 'Sənədləşdirilmiş Hadisələr',
    readingTime: 6,
    views: 33200,
    trendingScore: 81,
    factStatus: 'verified_fact',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Mədəni İrs və Miflər',
    tableOfContents: [
      { id: 'stiven-kinq-ve-217', title: '1. Stiven Kinqin 1974-cü il Ziyarəti' },
      { id: 'elizabet-uilson-hadisesi', title: '2. Qulluqçu Elizabeth Wilson Hadisəsi (1911)' }
    ],
    sections: [
      {
        id: 'stiven-kinq-ve-217',
        title: '1. Stiven Kinqin 1974-cü il Ziyarəti',
        content: `1974-cü ilin oktyabrında yazıçı Stiven Kinq və həyat yoldaşı Tabişa otel qış mövsümünə bağlanmazdan bir gün əvvəl Estes Parka gəldilər. Onlar kimsəsiz nəhəng oteldə yeganə qonaqlar idilər. 217 nömrəli otaqda gecələyərkən Kinq dəhlizlərdə qaçan uşaqların qəhqəhələrini eşitdi və həmin gecə 3 yaşlı oğlunun yanğın şlanqı ilə boğulduğu dəhşətli bir kabus gördü. Yuxudan tər içində oyanan Kinq pəncərədən dağlara baxaraq məşhur "The Shining" romanının bütün karkasını qələmə aldı.`,
        badge: 'fact',
        badgeText: 'Yazıçının Xatirələri'
      },
      {
        id: 'elizabet-uilson-hadisesi',
        title: '2. Qulluqçu Elizabeth Wilson Hadisəsi (1911)',
        content: `1911-ci ildə baş vermiş qaz partlayışı zamanı baş qulluqçu Elizabet Uilson 217 nömrəli otaqdan döşəmənin çökməsi nəticəsində aşağı mərtəbəyə düşmüş və ağır xəsarət almışdı. O sağ qaldı və 1950-ci illərə qədər oteldə işlədi. İddialara görə, onun ruhu hələ də 217 nömrəli otaqda qonaqların çamadanlarını səliqəyə salır və paltarları qatlayır.`,
        badge: 'claim',
        badgeText: 'Otel Qonaqlarının İfadələri'
      }
    ],
    keyFacts: [
      { label: 'Tikilmə ili', value: '1909', status: 'verified_fact' },
      { label: 'Təsisçi', value: 'Freelan Oscar Stanley', status: 'verified_fact' },
      { label: 'Ən məşhur otaq', value: 'Room 217', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Stanley Hotel: Rocky Mountain Majesty', publisher: 'Estes Park Historic Society', year: '2015', type: 'book' }
    ],
    relatedArticleSlugs: ['amityville-dehseti', 'winchester-sirli-malikanesi', 'waverly-hills-sanatoriyasi']
  },
  {
    id: 'enc-008',
    title: 'Isla de las Muñecas — Mexiko Kanallarında Asılmış Minlərlə Qorxunc Kukla Adası',
    originalName: 'Island of the Dolls (Isla de las Muñecas)',
    slug: 'isla-de-las-munecas-kuklalar-adasi',
    description: 'Xochimilco kanallarında boğulmuş gənc qızın ruhunu sakitləşdirmək üçün Don Xulian Santana tərəfindən 50 il ərzində ağaclardan asılmış qopuq gözlü, çürüyən yüzlərlə kukla adası.',
    category: 'qorxulu-yerler',
    subcategory: 'Meşələr',
    tags: ['Isla de las Muñecas', 'Xochimilco', 'Mexiko', 'Kuklalar', 'Julian Santana', 'Ada'],
    date: '1950-lər – Günümüz',
    location: 'Xochimilco, Mexiko Şəhəri, Meksika',
    coordinates: '19°16′22″N 99°05′47″W',
    status: 'Mədəni Antropoloji Məkan',
    theoriesCount: 'Tarixi Fakt',
    readingTime: 6,
    views: 29800,
    trendingScore: 77,
    factStatus: 'verified_fact',
    lastUpdated: '07 Avqust 2026',
    author: 'DARKPEDIA Folklor və Regional Tədqiqatlar',
    tableOfContents: [
      { id: 'don-xulian-hekayesi', title: '1. Don Xulian Santana Barrera və Boğulmuş Qız' },
      { id: 'eyni-noqtede-olum', title: '2. 2001-ci İl: Eyni Nöqtədə Təkrarlanan Ölüm' }
    ],
    sections: [
      {
        id: 'don-xulian-hekayesi',
        title: '1. Don Xulian Santana Barrera və Boğulmuş Qız',
        content: `1950-ci illərdə Don Xulian Santana adlı yerli kəndli ailəsini tərk edərək Xochimilco kanallarındakı tənha adada yaşamağa başladı. Rəvayətə görə, o, kanalın sahilində boğulmuş bir qız uşağının cəsədini tapmışdı. Qızın ruhunun onu narahat etməsindən qorxan Xulian, sudan çıxardığı və zibilliklərdən yığdığı qopuq qollu, kor gözlü kuklaları ağaclara asmağa başladı. 50 il ərzində bütün ada minlərlə çürüyən kukla ilə örtüldü.`,
        badge: 'fact',
        badgeText: 'Xochimilco Yerli İrsləri'
      },
      {
        id: 'eyni-noqtede-olum',
        title: '2. 2001-ci İl: Eyni Nöqtədə Təkrarlanan Ölüm',
        content: `2001-ci ilin aprelində Don Xulian 80 yaşında vəfat etdi. Onun cəsədi 50 il əvvəl boğulmuş qız uşağını tapdığını iddia etdiyi eyni su kanalında boğulmuş vəziyyətdə tapıldı. Bu gün ada dünyanın ən qorxulu turizm məkanlarından biri hesab olunur.`,
        badge: 'fact',
        badgeText: 'Polis Qeydiyyatı (2001)'
      }
    ],
    keyFacts: [
      { label: 'Yaradan şəxs', value: 'Don Julián Santana Barrera', status: 'verified_fact' },
      { label: 'Ölüm ili', value: '2001', status: 'verified_fact' },
      { label: 'Məkan', value: 'Xochimilco Kanalları, Meksika', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Dark Legends of Xochimilco', publisher: 'National Institute of Anthropology and History (INAH)', year: '2012', type: 'official_report' }
    ],
    relatedArticleSlugs: ['sedlec-ossuary', 'poveglia-adasi', 'aokigahara-intihar-mesesi']
  }
];
