import { Article } from '../../types';

export const encyclopediaGrandCompendiumArticles: Article[] = [
  // --- ANCIENT TECHNOLOGY & ARCHAEOLOGY ---
  {
    id: 'comp-001',
    title: 'Antikitera Mexanizmi (E.ə. 205) — Qədim Yunanıstanın İlk Mexaniki Analoq Kompüteri',
    originalName: 'Antikythera Mechanism',
    slug: 'antikitera-mexanizmi-qedim-komputer',
    description: '1901-ci ildə Antikitera adası sahilində qədim gəmi qəzasından çıxarılan, 30-dan çox dəqiq bürünc dişli çarxı ilə Günəşin, Ayın fazalarını və Olimpiya oyunlarının vaxtını hesablayan 2200 illik möcüzəvi texnoloji qurğu.',
    category: 'sirli-hadiseler',
    subcategory: 'İtirilmiş sivilizasiyalar',
    tags: ['Antikythera', 'Yunanıstan', 'Kompüter', 'Arxeologiya', 'Dişli Çarx', 'Astronomiya'],
    date: 'E.ə. 205 – 87',
    location: 'Afina Milli Arxeologiya Muzeyi (Orijinal: Antikitera adası)',
    coordinates: '35°53′23″N 23°18′28″E',
    status: 'Təsdiqlənmiş Tarixi Arxeoloji Eksponat',
    theoriesCount: '3D Rentgen Tomoqrafiya Tədqiqatları',
    readingTime: 8,
    views: 52100,
    trendingScore: 94,
    factStatus: 'verified_fact',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Qədim Elm və Texnologiya Tarixi',
    tableOfContents: [
      { id: 'sunger-dalgiçlari', title: '1. 1901-ci İl Süngər Dalğıclarının Kəşfi' },
      { id: '3d-rentgen-tomoqrafiya', title: '2. 3D Kompüter Tomoqrafiyası və 30 Bürünc Dişli Çarx' }
    ],
    sections: [
      {
        id: 'sunger-dalgiçlari',
        title: '1. 1901-ci İl Süngər Dalğıclarının Kəşfi',
        content: `1900-cü ildə yunan süngər dalğıcları Antikitera adası yaxınlığında 45 metr dərinlikdə e.ə. I əsrə aid batmış Roma ticarət gəmisini aşkar etdilər. Tapılan heykəllər arasında yaşıl pasla örtülmüş, ağac qutuya bənzər kalsifikasiya olmuş bir qaya parçası var idi. Bir müddət sonra qaya parçalandı və içindən mürəkkəb bürünc dişli çarxlar üzə çıxdı.`,
        badge: 'fact',
        badgeText: 'Afina Muzeyi Arxeologiya Qeydiyyatı'
      },
      {
        id: '3d-rentgen-tomoqrafiya',
        title: '2. 3D Kompüter Tomoqrafiyası və 30 Bürünc Dişli Çarx',
        content: `2005-ci ildə beynəlxalq Antikythera Mechanism Research Project (AMRP) komandası 8 tonluq mikrofocus rentgen tomoqrafı ilə mexanizmi skan etdi. Cihazın içində 30-dan çox bir-birinə keçmiş dəqiq dişli çarx, diferensial ötürmə və 2000-dən çox mikroskopik yunan hərfi oxundu. Cihaz Ayın elliptical qeyri-bərabər sürətini (Hipparx modeli) simulyasiya edə bilir və Günəş tutulmalarını dəqiq proqnozlaşdırırdı. Bu texnologiya səviyyəsinə Avropa yalnız XIV əsrdə mexaniki saatların ixtirası ilə yenidən çata bildi.`,
        badge: 'fact',
        badgeText: 'Nature (2006) Hesabatı'
      }
    ],
    keyFacts: [
      { label: 'Yaşı', value: 'E.ə. ~150–100 (~2150 il)', status: 'verified_fact' },
      { label: 'Dişli çarx sayı', value: '30+ bürünc çarx', status: 'verified_fact' },
      { label: 'Funksiya', value: 'Analoq astronomik kalkulyator', status: 'verified_fact' }
    ],
    theories: [],
    sources: [{ title: 'Decoding the ancient Greek astronomical calculator known as the Antikythera Mechanism', author: 'Freeth, T., et al.', publisher: 'Nature', year: '2006', type: 'peer_reviewed' }],
    relatedArticleSlugs: ['gobeklitepe-12000-illik-mebed', 'voynich-elyazmasi-sirri', 'mohenco-daro-sirri']
  },

  // --- CRYPTOZOOLOGY & GEOLOGICAL MYSTERIES ---
  {
    id: 'comp-002',
    title: 'Vostok Gölü (Antarktida) — 4 Kilometrlik Buz Təbəqəsi Altında 15 Milyon İldir Təcrid Olunmuş Prehistorik Su Dünyası',
    originalName: 'Lake Vostok Subglacial Mystery',
    slug: 'vostok-golu-antarktida',
    description: 'Antarktidanın 4000 metrlik donmuş buzlağının altında yerləşən, 15 milyon ildir Günəş işığı görməyən, Şimali Amerikanın Ontario gölü boyda olan və içərisində naməlum prehistorik mikroorqanizmlərin yaşadığı nəhəng subqlasial göl.',
    category: 'sirli-hadiseler',
    subcategory: 'Açılmamış hadisələr',
    tags: ['Lake Vostok', 'Antarktida', 'Buzlaq', 'Qazma', 'Ekstremofillər', 'Biologiya', 'Geologiya'],
    date: '1996 (rəsmi təsdiq) – Günümüz',
    location: 'Vostok Stansiyası, Şahzadə Elizabet Torpağı, Antarktida',
    coordinates: '77°23′30″S 104°45′00″E',
    status: 'Təsdiqlənmiş Elmi Tədqiqat Obyekti',
    theoriesCount: 'Mikrobioloji Təhlillər',
    readingTime: 7,
    views: 38700,
    trendingScore: 86,
    factStatus: 'verified_fact',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Qütb və Ekstremal Ekologiya',
    tableOfContents: [
      { id: 'subqlasial-kesf', title: '1. Seysmik Kəşf və 4000 Metrlik Buz Zindanı' },
      { id: '2012-qazmasi', title: '2. 2012-ci İl Tarixi Qazması və Naməlum Bakteriya DNT-ləri' }
    ],
    sections: [
      {
        id: 'subqlasial-kesf',
        title: '1. Seysmik Kəşf və 4000 Metrlik Buz Zindanı',
        content: `1996-cı ildə rus və ingilis alimləri peyk radarları və seysmik zondlama ilə Vostok stansiyasının altında uzunluğu 250 km, eni 50 km və dərinliyi 1000 metrə çatan nəhəng maye şirin su gölünün olduğunu təsdiqlədilər. Yerin geotermal istiliyi və üzərindəki 4 kilometrlik buzun nəhəng təzyiqi sayəsində göldəki su -3°C-də donmadan maye halında qalır.`,
        badge: 'fact',
        badgeText: 'Nature (1996) Elmi Məqaləsi'
      },
      {
        id: '2012-qazmasi',
        title: '2. 2012-ci İl Tarixi Qazması və Naməlum Bakteriya DNT-ləri',
        content: `5 fevral 2012-ci ildə rus qütbçüləri 3769 metr dərinlikdə gölün səthinə çatdılar. Çıxarılan su nümunələrində oksigenlə həddindən artıq doymuş (normal sudan 50 dəfə çox) mühitdə yaşayan və Yer üzündə məlum olan heç bir bioloji taksona uyğun gəlməyən unikal ekstremofil bakteriya DNT ardıcıllıqları aşkar edildi. Bu mühit Yupiterin peyki Avropa və Saturnun peyki Enseladın buzaltı okeanlarına tam bənzəyir.`,
        badge: 'fact',
        badgeText: 'Antarktika Tədqiqatları Elmi Komitəsi (SCAR)'
      }
    ],
    keyFacts: [
      { label: 'Buzun qalınlığı', value: '3,769 metr', status: 'verified_fact' },
      { label: 'Təcrid müddəti', value: '15 – 25 milyon il', status: 'verified_fact' },
      { label: 'Gölün sahəsi', value: '12,500 kvadrat kilometr', status: 'verified_fact' }
    ],
    theories: [],
    sources: [{ title: 'Subglacial Lake Vostok: Carbon Assessment and Biomass Estimation', author: 'Siegert, M. J., et al.', publisher: 'Antarctic Science', year: '2001', type: 'peer_reviewed' }],
    relatedArticleSlugs: ['kola-superderin-quyusu-12262m', 'the-bloop-okean-sesi', 'turritopsis-dohrnii-olumsuz-meduza']
  },

  // --- CRYPTOGRAPHY & INTERNET PHENOMENA ---
  {
    id: 'comp-003',
    title: 'Cicada 3301 — İnternet Tarixinin Ən Mürəkkəb Qlobal Kriptoqrafiya Tapmacası',
    originalName: 'Cicada 3301 Internet Mystery',
    slug: 'cicada-3301-qlobal-tapmaca',
    description: '2012, 2013 və 2014-cü illərin 4 yanvarında internetdə peyda olan, steqanoqrafiya, qədim mayya təqvimi, run əlifbası, kiber-təhlükəsizlik və dünyanın 5 ölkəsindəki telefon köşklərini birləşdirən sirli beynəlxalq intellekt seçimi.',
    category: 'sirli-hadiseler',
    subcategory: 'Açılmamış hadisələr',
    tags: ['Cicada 3301', 'Kriptoqrafiya', 'Steqanoqrafiya', 'Liber Primus', 'İnternet', 'Kiber'],
    date: '2012 – 2014',
    location: 'Qlobal İnternet Şəbəkəsi (ABŞ, Polşa, Fransa, Avstraliya)',
    status: 'Tarixi Açılmamış İnternet Tapmacası',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 8,
    views: 61400,
    trendingScore: 98,
    factStatus: 'unresolved_unknown',
    lastUpdated: '19 Avqust 2026',
    author: 'DARKPEDIA İnformasiya Təhlükəsizliyi və Kriptoqrafiya',
    tableOfContents: [
      { id: 'ilk-mesaj-4-yanvar', title: '1. 4 Yanvar 2012: 4chan Mesajı və Şəkillərdəki Gizli Kodlar' },
      { id: 'fiziki-gps-qlobal-lokasiyalar', title: '2. Dünyanın 14 Şəhərində Dirəklərə Yapışdırılmış GPS QR-Kodları' },
      { id: 'liber-primus-kitabi', title: '3. "Liber Primus" Kitabı və Açılmayan Runik Səhifələr' }
    ],
    sections: [
      {
        id: 'ilk-mesaj-4-yanvar',
        title: '1. 4 Yanvar 2012: 4chan Mesajı və Şəkillərdəki Gizli Kodlar',
        content: `4 yanvar 2012-ci ildə internetdə qara fonda ağ mətn paylaşıldı: "Salam. Biz yüksək intellektli fərdləri axtarırıq. Onları tapmaq üçün bir test hazırlamışıq. Bu şəkildə gizli bir mesaj var. Onu tapın... 3301". Şəklin kodlarını açan hakerlər PGP rəqəmsal imzası ilə qorunan onlarla steqanoqrafik qat, Sezar şifrəsi və qədim poeziya sətirləri tapdılar.`,
        badge: 'fact',
        badgeText: 'PGP Açar İmzası 7A35090F'
      },
      {
        id: 'fiziki-gps-qlobal-lokasiyalar',
        title: '2. Dünyanın 14 Şəhərində Dirəklərə Yapışdırılmış GPS QR-Kodları',
        content: `Tapmaca tezliklə internet çərçivəsindən çıxdı. İştirakçılara Paris, Varşava, Moskva, Mayami, Sidney və digər 14 qlobal şəhərdə dəqiq GPS koordinatları verildi. Həmin yerlərə gedən insanlar küçə fənərlərinin dirəklərinə yapışdırılmış Cicada cırcıraması simvollu QR-kodlar tapdılar. Bu kodlar Tor şəbəkəsində gizli saytlara aparırdı.`,
        badge: 'fact',
        badgeText: 'Qlobal GPS Sənədləri'
      },
      {
        id: 'liber-primus-kitabi',
        title: '3. "Liber Primus" Kitabı və Açılmayan Runik Səhifələr',
        content: `2014-cü ildə qrup qədim run əlifbası ilə yazılmış 73 səhifəlik "Liber Primus" (Birinci Kitab) fəlsəfi əlyazmasını yaydı. Bu günə qədər həmin kitabın yalnız 19 səhifəsi deşifrə edilib; qalan 54 səhifə hələ də dünyanın ən yaxşı riyaziyyatçıları tərəfindən oxuna bilmir. Cicada 3301-in arxasında NSA, MI6 və ya gizli kibermüdafiə cəmiyyətinin dayandığı güman edilir.`,
        badge: 'unknown',
        badgeText: 'Açılmamış Liber Primus Mətni'
      }
    ],
    keyFacts: [
      { label: 'Başlanğıc', value: '4 Yanvar 2012', status: 'verified_fact' },
      { label: 'İmzalanma', value: 'GPG Key ID: 7A35090F (heç vaxt saxtalaşdırılmayıb)', status: 'verified_fact' },
      { label: 'Status', value: 'Liber Primus hələ də qismən şifrəlidir', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Beynəlxalq Kəşfiyyat Agentliyi (NSA/GCHQ İşə Qəbulu)', likelihood: 'Yüksək', description: 'Elit kriptoqraf və hakerlərin aşkarlanması üçün gizli filtrasiya.' },
      { title: 'Anonim Qlobal Kripto-Anarxist Think-Tank', likelihood: 'Orta', description: 'Məxfiliyi və kiber-azadlığı qoruyan mütəxəssislər ittifaqı.' }
    ],
    sources: [{ title: 'The Internet Mystery That Has the World Baffled', author: 'Chris Bell', publisher: 'The Daily Telegraph', year: '2014', type: 'news' }],
    relatedArticleSlugs: ['kriptos-cia-heykeli', 'voynich-elyazmasi-sirri', 'zodiac-killer-sifreleri']
  },

  // --- OCEAN AND MARITIME GHOST LEGENDS ---
  {
    id: 'comp-004',
    title: 'Ourang Medan (1947) — Bütün Ekipajı Gözləri Açıq Və Qorxu İçində Donmuş Vəziyyətdə Tapılan Hollandiya Gəmisi',
    originalName: 'SS Ourang Medan Ghost Ship',
    slug: 'ourang-medan-sirli-gemisi',
    description: '1947-ci ilin iyununda Malakka boğazında morze əlifbası ilə "Bütün zabitlər və kapitan körpüdə ölüb... Mən də ölürəm" SOS mesajı göndərən və göyərtəyə çıxan xilasedicilərin bütün heyətin donmuş qorxulu sifətlə ölmüş olduğunu gördüyü dəhşətli insident.',
    category: 'sirli-hadiseler',
    subcategory: 'Sirli ölümlər',
    tags: ['Ourang Medan', 'Malakka', 'Gəmi', '1947', 'Sirli Ölüm', 'SOS', 'Okean'],
    date: 'İyun 1947 / Fevral 1948',
    location: 'Malakka Boğazı, İndoneziya sahilləri',
    coordinates: '2°00′00″N 102°30′00″E',
    status: 'Tarixi Dəniz Əfsanəsi və Kimyəvi Sızma Hipotezi',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 7,
    views: 46900,
    trendingScore: 89,
    factStatus: 'unresolved_unknown',
    lastUpdated: '17 Avqust 2026',
    author: 'DARKPEDIA Dəniz Təhqiqatları',
    tableOfContents: [
      { id: 'dehsetli-sos-siqnali', title: '1. Radio Operatorunun Son Sözləri: "Mən Ölürəm"' },
      { id: 'silver-star-xilasetmesi', title: '2. Silver Star Gəmisinin Baxışı və Qəfil Partlayış' }
    ],
    sections: [
      {
        id: 'dehsetli-sos-siqnali',
        title: '1. Radio Operatorunun Son Sözləri: "Mən Ölürəm"',
        content: `1947-ci ildə Sumatra sahillərində üzən bir neçə gəmi holland ticarət gəmisi SS Ourang Medan-dan dəhşətli morze SOS siqnalı aldı: "Kapitan daxil bütün zabitlər xəritə otağında və körpüdə ölüb. Yəqin ki, bütün ekipaj ölüb." Qısa fasilədən sonra sonuncu titrək teleqraf gəldi: "Mən ölürəm." və siqnal kəsildi.`,
        badge: 'claim',
        badgeText: 'ABŞ Sahil Mühafizəsi Qeydiyyatı (1952)'
      },
      {
        id: 'silver-star-xilasetmesi',
        title: '2. Silver Star Gəmisinin Baxışı və Qəfil Partlayış',
        content: `Amerika gəmisi "Silver Star" dərhal hadisə yerinə çatdı. Göyərtəyə minən xilasedicilər dəhşətli mənzərə ilə qarşılaşdılar: gəmidəki bütün dənizçilər, hətta gəmi iti də daxil olmaqla arxası üstə uzanmış, qolları qorxu ilə qabağa uzanmış, gözləri bərəlmiş və ağızları qışqırıq formasında açıq qalaraq donmuşdu. Bədənlərdə heç bir yara və ya qan izi yox idi. Xilasedicilər gəmini yedəyə almaq istəyərkən 4 nömrəli anbardan qəfil tüstü qalxdı və güclü partlayışla gəmi bir neçə dəqiqədə okeanın dibinə batdı.`,
        badge: 'claim',
        badgeText: 'Dəniz Şahidləri İfadələri'
      }
    ],
    keyFacts: [
      { label: 'Məkan', value: 'Malakka Boğazı', status: 'verified_fact' },
      { label: 'Qurbanlar', value: 'Bütün ekipaj və gəmi iti', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Qeyri-Qanuni Kimyəvi Silah Sızması (Kalium Sianid və Nitroqliserin)', likelihood: 'Yüksək', description: 'Yapon 731-ci dəstəsinin qaçaqmal kimyəvi qazının dəniz suyu ilə reaksiyası və boğucu qaz ifrazı.' },
      { title: 'Dəm Qazı (Karbon Monoksid) Zəhərlənməsi', likelihood: 'Orta', description: 'Qazanxanadakı tüstü borusu nasazlığı nəticəsində səssiz zəhərlənmə.' }
    ],
    sources: [{ title: 'Proceedings of the Merchant Marine Council', publisher: 'United States Coast Guard', year: '1952', type: 'official_report' }],
    relatedArticleSlugs: ['mary-celeste-sirri', 'flannan-isles-mayak-itkinleri', 'lead-masks-qurgusun-maskalar-isi']
  },

  // --- PARANORMAL & HAUNTED LOCATIONS ---
  {
    id: 'comp-005',
    title: 'Waverly Hills Sanatoriyası (1910) — 63.000 Vərəm Xəstəsinin Can Verdiyi "Ölüm Tuneli" Olan Klinika',
    originalName: 'Waverly Hills Sanatorium',
    slug: 'waverly-hills-sanatoriyasi-olum-tuneli',
    description: 'Kentukki ştatında "Ağ Taun" (vərəm) epidemiyası zamanı tikilən, minlərlə insanın təcrübi qabırğa kəsmə əməliyyatlarında öldüyü və cəsədlərin 150 metrlik gizli "Bədən Şutu" tuneli ilə çıxarıldığı tarixi qotik sanatoriya.',
    category: 'paranormal',
    subcategory: 'Kabuslar',
    tags: ['Waverly Hills', 'Louisville', 'Sanatoriya', 'Ölüm Tuneli', 'Vərəm', 'Paranormal', '502 Otağı'],
    date: '1910 – 1961',
    location: 'Louisville, Kentukki, ABŞ',
    coordinates: '38°07′48″N 85°50′30″W',
    status: 'Tarixi Qorunan Memarlıq Abidəsi və Paranormal Araşdırma Mərkəzi',
    theoriesCount: 'Tarixi Tibbi Faktlar',
    readingTime: 8,
    views: 45900,
    trendingScore: 90,
    factStatus: 'verified_fact',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Tibb Tarixi və Qaranlıq Memarlıq',
    tableOfContents: [
      { id: 'ag-taun-ve-eksperimentler', title: '1. "Ağ Taun" və Ağciyər Cərrahiyyəsi Eksperimentləri' },
      { id: 'olum-tuneli-body-chute', title: '2. "Ölüm Tuneli" (Body Chute) və 502 Nömrəli Otaq' }
    ],
    sections: [
      {
        id: 'ag-taun-ve-eksperimentler',
        title: '1. "Ağ Taun" və Ağciyər Cərrahiyyəsi Eksperimentləri',
        content: `XX əsrin əvvəllərində vərəm xəstəliyinə qarşı heç bir antibiotik (streptomisin) kəşf edilməmişdi. 1910-cu ildə açılan Waverly Hills sanatoriyasında xəstələrə ağır eksperimental prosedurlar tətbiq edilirdi: ağciyərləri dincəltmək üçün xəstələrin qabırğaları kəsilir (torakoplastika), sinələrinə qum kisələri qoyulur və qışın şaxtasında eyvanlarda yatırdılırdı. Təxminən 63.000 xəstə burada vəfat etdi.`,
        badge: 'fact',
        badgeText: 'Kentukki Tarixi Tibb Qeydləri'
      },
      {
        id: 'olum-tuneli-body-chute',
        title: '2. "Ölüm Tuneli" (Body Chute) və 502 Nömrəli Otaq',
        content: `Sağ qalan digər xəstələrin mənəviyyatını sarsıtmamaq üçün həkimlər xəstəxananın zirzəmisindən təpənin aşağısındakı dəmir yoluna enən 150 metrlik yeraltı beton tunel ("Body Chute") qurdular. Hər gün onlarla cəsəd vaqonetlərlə bu qaranlıq tunellə gecələr gizlicə daşınırdı. 1928 və 1932-ci illərdə 502 nömrəli otaqda iki tibb bacısının müəmmalı intiharı binanın əfsanələrini daha da artırdı.`,
        badge: 'fact',
        badgeText: 'Louisville Arxivi'
      }
    ],
    keyFacts: [
      { label: 'Açılış ili', value: '1910', status: 'verified_fact' },
      { label: 'Ölən xəstə sayı', value: 'Təxminən 50.000 – 63.000', status: 'verified_fact' },
      { label: 'Ölüm tuneli uzunluğu', value: '150 metr beton şaxta', status: 'verified_fact' }
    ],
    theories: [],
    sources: [{ title: 'Haunted Waverly Hills Sanatorium', author: 'Debra Flores', publisher: 'Arcadia Publishing', year: '2014', type: 'book' }],
    relatedArticleSlugs: ['eastern-state-hebsxanasi', 'sedlec-ossuary', 'stanley-oteli-217']
  }
];
