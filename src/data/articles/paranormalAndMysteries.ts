import { Article } from '../../types';

export const paranormalAndMysteriesArticles: Article[] = [
  {
    id: 'art-001',
    title: 'Dyatlov keçidi hadisəsi',
    originalName: 'Dyatlov Pass incident',
    slug: 'dyatlov-kecidi-hadisesi',
    description: '1959-cu ildə Şimali Ural dağlarında 9 təcrübəli xizəkçinin izaholunmaz və dəhşətli şəraitdə həlak olması.',
    category: 'sirli-hadiseler',
    subcategory: 'Sirli ölümlər',
    tags: ['Ural', '1959', 'İqor Dyatlov', 'Kholat Syakhl', 'Hipotermiya', 'Radiasiya'],
    date: '1-2 fevral 1959',
    location: 'Kholat Syakhl (Ölüm Dağı), Sverdlovsk vilayəti, SSRİ',
    coordinates: '61°45′17″N 59°27′36″E',
    status: 'Tarixi araşdırma / Qismən izah edilmiş',
    theoriesCount: '8 əsas nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ural dağlarında Kholat Syakhl silsiləsinin qış mənzərəsi.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80',
        caption: '1959-cu il fevral ayında axtarış heyətinin tapdığı, içəridən kəsilmiş və qarla örtülmüş Dyatlov qrupu çadırı.',
        source: 'Sverdlovsk Dövlət Arxivi'
      },
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        caption: 'Holatçaxl yamacında cəsədlərin tapıldığı sidr ağacı və dərə zonasının topoqrafik xəritəsi.',
        source: 'Rusiya Coğrafiya Cəmiyyəti'
      }
    ],
    readingTime: 9,
    views: 48920,
    trendingScore: 98,
    isFeatured: true,
    isTrending: true,
    isMostRead: true,
    factStatus: 'theory',
    contentWarning: 'Bu məqalə travmatik bədən xəsarətləri və dondurucu şəraitdə ölüm hadisəsi haqqında faktlar ehtiva edir.',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Tarix və Kriminalistika Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'tarix', title: '2. Hadisənin tarixi' },
      { id: 'ne-bas-verdi', title: '3. Nə baş verdi?' },
      { id: 'esas-faktlar', title: '4. Əsas faktlar və anomaliyalar' },
      { id: 'nezeriyyeler', title: '5. İrəli sürülmüş nəzəriyyələr' },
      { id: 'elmi-izah', title: '6. Müasir elmi izah (Qar sürüşməsi modeli)' },
      { id: 'menbeler', title: '7. Mənbələr və arxivlər' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Dyatlov keçidi hadisəsi — 1959-cu ilin fevral ayının ilk günlərində Ural Politexnik İnstitutunun İqor Dyatlovun rəhbərlik etdiyi 9 nəfərlik təcrübəli idmançı və mühəndislərdən ibarət heyətinin Holatçaxl ("Ölüm dağı") yaxınlığında sirli şəkildə həlak olması hadisəsidir. Çadırın içəridən kəsilərək tərk edilməsi, bəzi cəsədlərin alt paltarında və ayaqqabısız tapılması, həmçinin bəzi meyitlərdə daxili ağır sınıqların və qəribə radiasiya izlərinin aşkarlanması hadisəni 60 ildən artıq dünya ictimaiyyətinin diqqət mərkəzində saxlamışdır.',
        badge: 'fact',
        badgeText: 'Rəsmi Arxiv Sənədi'
      },
      {
        id: 'tarix',
        title: 'Hadisənin tarixi',
        content: '1959-cu ilin yanvarında 10 nəfərlik qrup Otorten dağına ən çətin III dərəcəli qış yürüşünə çıxır. Qrup üzvlərindən biri — Yuri Yudin kəskin radikulit səbəbindən yolun əvvəlində geri qayıdır və sağ qalan yeganə şəxs olur. Qalan 9 nəfər fevralın 1-də axşam saatlarında çadırlarını Holatçaxl yamacında qurur. Qrupun Vizhay kəndinə fevralın 12-də teleqram vurması gözlənilsə də, heç bir xəbər çıxmadıqda fevralın 20-də axtarış-xilasetmə əməliyyatı başladıldı.',
        badge: 'fact',
        badgeText: 'Təsdiqlənmiş Hadisələr'
      },
      {
        id: 'ne-bas-verdi',
        title: 'Nə baş verdi?',
        content: 'Fevralın 26-da xilasedicilər çadırı tapdılar. Çadır yarıya qədər qarla örtülmüş, yan tərəfi isə içəridən bıçaqla kəsilmişdi. Qrup üzvləri bütün isti paltarlarını və ayaqqabılarını çadırda qoyaraq meşə zolağına doğru tələsik qaçmışdılar. İlk cəsədlər 1.5 km aralıda, nəhəng bir sidr ağacının altında, ocaq izlərinin yanında tapıldı. Bir neçə ay sonra, may ayında dərənin dərinliyində 4 metr qarın altında qalan dörd nəfərin meyiti aşkar edildi. Onların bəzilərində kəllə və qabırğa sınıqları, bəzilərində isə dil və göz toxumalarının itkisi qeydə alındı.',
        badge: 'fact',
        badgeText: 'Məhkəmə Tibbi Ekspertizası'
      },
      {
        id: 'esas-faktlar',
        title: 'Əsas faktlar və anomaliyalar',
        content: '1. Çadır içəridən kəsilmişdi — qaçış fövqəladə və dərhal olmuşdur.\n2. 9 nəfərin ayaq izləri bir-birinə paralel və nizamlı idi, panik qaçış əlaməti yox idi.\n3. Bəzi paltarlarda normadan yuxarı beta-radiasiya aşkar edilmişdi.\n4. Dubinina və Zolotaryovun bədənində heç bir xarici dəri zədəsi olmadan dəhşətli daxili qabırğa sınıqları mövcud idi.\n5. Sovet istintaqının ilkin yekun rəyi: "Təbii qarşısıalınmaz kortəbii qüvvənin təsiri."',
        badge: 'fact',
        badgeText: 'İstintaq Protokolu'
      },
      {
        id: 'nezeriyyeler',
        title: 'İrəli sürülmüş nəzəriyyələr',
        content: 'İllər ərzində 75-dən çox versiya irəli sürülmüşdür: gizli hərbi raket sınağı, yerli Mansi ovçularının hücumu, infrahəsəs külək dalğalarının yaratdığı kəskin panika, heyət daxili münaqişə və xarici casus qarşıdurması. Lakin heç bir xarici yad izin tapılmaması kriminal və ovçu hücumu versiyalarını təkzib etmişdir.',
        badge: 'theory',
        badgeText: 'Çoxsaylı Nəzəriyyələr'
      },
      {
        id: 'elmi-izah',
        title: 'Müasir elmi izah (Qar sürüşməsi modeli)',
        content: '2021-ci ildə İsveçrə Federal Texnologiya İnstitutunun (EPFL) alimləri Yohann Qaume və Aleksandr Puzrin tərəfindən dərc edilən araşdırmada kompyuter simulyasiyası ilə sübut edildi ki, çadırın qazılması nəticəsində təpənin üstündəki sıx qar təbəqəsi (qar plitəsi) saatlar sonra qoparaq çadırın üstünə düşmüşdür. Bu zərbə yatan xizəkçilərə ağır daxili sınıqlar yetirmiş, donma təhlükəsi altında onları dərhal çadırı tərk etməyə məcbur etmişdir. Sonrakı ölüm səbəbi -30°C şaxtada ağır hipotermiyadır.',
        badge: 'fact',
        badgeText: 'Resenziyalı Elmi Məqalə'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: '1-2 fevral 1959', status: 'verified_fact' },
      { label: 'Qurbanların sayı', value: '9 nəfər', status: 'verified_fact' },
      { label: 'Həlak olma səbəbi', value: 'Hipotermiya və travmalar', status: 'verified_fact' },
      { label: 'İlkin rəsmi qərar', value: 'Bilinməyən təbii qüvvə', status: 'verified_fact' },
      { label: 'Müasir konsensus', value: 'Qar plitəsi uçqunu və donma', status: 'theory' }
    ],
    theories: [
      {
        name: 'Kiçik qar plitəsi uçqunu (Slab Avalanche)',
        likelihood: 'Yüksək',
        description: 'Çadırın düzəldildiyi yerdə qarın zəifləməsi nəticəsində yuxarıdan gələn sıx qar plitəsi çadırı əzmiş və qrupu donma tələsinə salmışdır.',
        scientificConsensus: 'Nature Communications Earth & Environment (2021) tərəfindən riyazi və fiziki modellə təsdiqlənib.'
      },
      {
        name: 'Karmann burulğanı (İnfrahəsəs panikası)',
        likelihood: 'Orta',
        description: 'Dağın kəskin relyefindən keçən güclü küləyin insan qulağının eşitmədiyi, lakin dərin vahimə və boğulma hissi doğuran infrahəsəs dalğaları yaratması.',
        scientificConsensus: 'Mümkündür, lakin ağır sümük sınıqlarını tam izah etmir.'
      },
      {
        name: 'Gizli hərbi sınaq və zəhərli qazlar',
        likelihood: 'Aşağı',
        description: 'Ərazidə R-7 raketlərinin sınaqdan keçirildiyi və zəhərli yanacağın qrupu çadırdan qaçmağa məcbur etdiyi iddiası.',
        scientificConsensus: 'Rəsmi hərbi arxivlərdə həmin gecə bu koordinatlarda raket atışı qeydə alınmayıb.'
      }
    ],
    sources: [
      { title: 'Mechanisms of slab avalanche release and Dyatlov Pass incident', author: 'Gaume, J. & Puzrin, A. M.', publisher: 'Communications Earth & Environment, Nature', year: '2021', type: 'academic' },
      { title: 'Dyatlov Pass Incident: 1959 Criminal Case Archive Dossier', publisher: 'Sverdlovsk Regional State Archive', year: '1959', type: 'archive' },
      { title: 'Dead Mountain: The Untold True Story of the Dyatlov Pass Incident', author: 'Donnie Eichar', publisher: 'Chronicle Books', year: '2013', type: 'book' }
    ],
    relatedArticleSlugs: ['mary-celeste-gemisi', 'bermuda-ucbucagi', 'somerton-adami', 'hinterkaifeck-cinayeti', 'wow-siqnali']
  },
  {
    id: 'art-002',
    title: 'Mary Celeste gəmisinin sirri',
    originalName: 'Mary Celeste',
    slug: 'mary-celeste-gemisi',
    description: '1872-ci ildə Atlantik okeanında tam saz vəziyyətdə, lakin bir nəfər belə canlı insan olmadan tapılmış əfsanəvi kabus gəmi.',
    category: 'sirli-hadiseler',
    subcategory: 'İtkin düşmələr',
    tags: ['Atlantik', '1872', 'Kabus gəmi', 'Dənizçilik', 'Spirt buxarı', 'Kapitan Briggs'],
    date: '4 dekabr 1872',
    location: 'Azor adaları yaxınlığı, Atlantik okeanı',
    coordinates: '38°20′N 17°15′W',
    status: 'Tarixi dənizçilik sirri',
    theoriesCount: '6 əsas nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Okeanın ortasında tərk edilmiş tarixi yelkənli ticarət gəmisinin illüstrativ təsviri.',
    readingTime: 8,
    views: 41200,
    trendingScore: 92,
    isMostRead: true,
    factStatus: 'theory',
    lastUpdated: '12 Avqust 2026',
    author: 'DARKPEDIA Tarix Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'tarix', title: '2. Səyahət və heyət' },
      { id: 'tapilma', title: '3. Gəminin tapılması və qəribəliklər' },
      { id: 'nezeriyyeler', title: '4. İzah nəzəriyyələri' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Mary Celeste — 1872-ci il dekabrın 4-də Britaniya-Kanada birgə gəmisi "Dei Gratia" tərəfindən Portuqaliya və Azor adaları arasında aşkar edilmiş ikidirekli yelkənli ticarət gəmisidir. Gəmi suda üzmə qabiliyyətini tam saxlamışdı, anbarında 6 aylıq ərzaq və içməli su ehtiyatı, heyətin şəxsi əşyaları və 1701 çəllək sənaye spirti yükü yerində idi. Lakin gəminin kapitanı Benjamin Briqqs, onun həyat yoldaşı, 2 yaşlı qızı və 7 təcrübəli dənizçisi yoxa çıxmışdı.',
        badge: 'fact',
        badgeText: 'Dənizçilik Məhkəməsi Arxivləri'
      },
      {
        id: 'tarix',
        title: 'Səyahət və heyət',
        content: 'Gəmi 7 noyabr 1872-ci ildə Nyu-Yorkdan İtaliyanın Genuya limanına doğru yola çıxmışdı. Kapitan Benjamin Briggs dənizçilik aləmində yüksək intizamlı, spirtli içki qəbul etməyən və dindar bir şəxs kimi tanınırdı. Onun ailəsi və heyəti ilə münasibətləri qüsursuz idi.',
        badge: 'fact',
        badgeText: 'Tarixi Qeyd'
      },
      {
        id: 'tapilma',
        title: 'Gəminin tapılması və qəribəliklər',
        content: 'Gəmi tapılarkən bircə xilasedici qayığı yox idi. Gəmi jurnalı sonuncu dəfə noyabrın 25-də yazılmışdı. Sükan sərbəst hərəkət edirdi, kompas qırılmışdı, amma heç bir qiyam, hücum və ya qarət izi aşkar olunmadı. Ən maraqlısı — gəminin anbarındakı 1701 çəllək spirtin yalnız 9-u boş idi.',
        badge: 'fact',
        badgeText: 'Ekspertiza Qeydləri'
      },
      {
        id: 'nezeriyyeler',
        title: 'İzah nəzəriyyələri',
        content: 'Ən məntiqli elmi nəzəriyyəyə görə, temperaturun dəyişməsi nəticəsində spirt çəlləklərindən ayrılan qazlar anbarda kiçik partlayış və ya tüstü təsiri yaratmışdır. Kapitan gəminin havaya uçacağını düşünərək heyəti xilasedici qayıqla gəmidən təhlükəsiz məsafəyə uzaqlaşdırmaq üçün ip bağlamış, lakin qəfil qopan fırtına ipi qırmış və heyət okean sularında batmışdır.',
        badge: 'theory',
        badgeText: 'Elmi Nəzəriyyə'
      }
    ],
    keyFacts: [
      { label: 'Tapılma tarixi', value: '4 dekabr 1872', status: 'verified_fact' },
      { label: 'İtkin sayı', value: '10 nəfər (7 dənizçi, kapitan, xanımı və qızı)', status: 'verified_fact' },
      { label: 'Yük', value: '1701 çəllək denaturasiya olunmuş spirt', status: 'verified_fact' },
      { label: 'Qayıq statusu', value: 'Tək xilasedici qayıq çatışmırdı', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Spirt buxarının partlaması və təxliyə qəzası',
        likelihood: 'Yüksək',
        description: 'Anbardakı spirtin buxarlanması nəticəsində yaranan partlayış səsi kapitanı dərhal qayığa minməyə məcbur etmiş, fırtına qayığı gəmidən ayırmışdır.',
        scientificConsensus: 'Oksford Universiteti tərəfindən 2006-cı ildə aparılan təcrübələrlə alovsuz partlayış nəzəriyyəsi sınaqdan keçirilib.'
      },
      {
        name: 'Dəniz silkələnməsi (Seaquake)',
        likelihood: 'Orta',
        description: 'Azor adaları seysmik zonada yerləşir; dənizaltı zəlzələ gəmidə güclü sarsıntı yaradaraq yükün partlaması vahiməsi yaratmış ola bilər.',
        scientificConsensus: 'Geoloji baxımdan mümkündür.'
      },
      {
        name: 'Piratlar və ya qiyam',
        likelihood: 'Təkzib edilmiş',
        description: 'Piratlardan heç bir iz yoxdur, çünki bütün qiymətli əşyalar və ərzaq toxunulmaz qalmışdı.',
        scientificConsensus: 'Cəbəllütariq Dəniz Məhkəməsi tərəfindən rədd edilib.'
      }
    ],
    sources: [
      { title: 'The Mystery of the Mary Celeste: Illness, Ferocious Weather, or a Transatlantic Conspiracy?', author: 'Paul Begg', publisher: 'John Blake Publishing', year: '2007', type: 'book' },
      { title: 'Gibraltar Vice-Admiralty Court Records on Mary Celeste', publisher: 'British National Archives', year: '1873', type: 'archive' }
    ],
    relatedArticleSlugs: ['dyatlov-kecidi-hadisesi', 'bermuda-ucbucagi', 'somerton-adami', 'roanoke-koloniyasi']
  },
  {
    id: 'art-003',
    title: 'Roanoke itkin koloniyası',
    originalName: 'The Lost Colony of Roanoke',
    slug: 'roanoke-koloniyasi',
    description: '1587-ci ildə Şimali Amerikada qurulan və 115 sakini ilə birlikdə arxada yalnız "CROATOAN" sözünü qoyaraq yoxa çıxan ilk ingilis məskəni.',
    category: 'sirli-hadiseler',
    subcategory: 'İtkin düşmələr',
    tags: ['Roanoke', '1587', 'Croatoan', 'Con Uayt', 'Virginia Dare', 'Koloniya'],
    date: '1587 – 1590',
    location: 'Roanoke adası, Şimali Karolina, ABŞ',
    coordinates: '35°55′42″N 75°42′14″W',
    status: 'Tarixi tapmaca',
    theoriesCount: '4 əsas nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ağaclara həkk olunmuş sirli Croatoan yazısının tarixi rekonstruksiyası.',
    readingTime: 7,
    views: 33400,
    trendingScore: 84,
    factStatus: 'theory',
    lastUpdated: '05 Avqust 2026',
    author: 'DARKPEDIA Tarix Departamenti',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'tarix', title: '2. Koloniyanın qurulması' },
      { id: 'itkin', title: '3. Qayıdış və tapılan sirli söz' },
      { id: 'nezeriyyeler', title: '4. Müasir arxeoloji nəticələr' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '1587-ci ildə Con Uaytın rəhbərliyi ilə 115 kişi, qadın və uşaq Roanoke adasında ilk daimi ingilis koloniyasını təsis etdi. Uayt təcili ərzaq və təchizat gətirmək üçün İngiltərəyə qayıtdı, lakin İspaniya ilə müharibə səbəbindən yalnız 3 il sonra — 1590-cı ildə qayıda bildi. Qəsəbəyə çatdıqda evlərin söküldüyünü və heç bir insanın qalmadığını gördü. Fortun taxta dirəyinə yalnız "CROATOAN", yaxınlıqdakı ağaca isə "CRO" sözü yonulmuşdu.',
        badge: 'fact',
        badgeText: 'Tarixi Qeydlər'
      },
      {
        id: 'tarix',
        title: 'Koloniyanın qurulması',
        content: 'Koloniya sakinləri arasında Şimali Amerikada doğulmuş ilk ingilis uşaq — Virginia Dare də vardı. Con Uayt yola düşməzdən əvvəl kolonistlərlə razılaşmışdı ki, əgər təhlükə səbəbilə yeri tərk etməli olsalar, gedəcəkləri yerin adını ağaca yazsınlar; əgər hücuma məruz qalsalar, adın üzərinə Malta xaçı həkk etsinlər. Tapılan yazıda heç bir xaç işarəsi yox idi.',
        badge: 'fact',
        badgeText: 'Con Uaytın Şəxsi Gündəliyi'
      },
      {
        id: 'nezeriyyeler',
        title: 'Müasir arxeoloji nəticələr',
        content: 'Müasir arxeoloqlar və DNT mütəxəssisləri kolonistlərin qonşu Hatteras adasındakı yerli Kroatoan (Lumbilər və ya Karolina yerliləri) qəbiləsinə sığındığını və onlarla assimilyasiya olunduğunu bildirirlər. 2015–2020-ci illərdə Hatteras adasında 16-cı əsrə aid ingilis mis üzükləri, süfrə ləvazimatları və odlu silah qalıqları aşkar edilmişdir.',
        badge: 'fact',
        badgeText: 'Arxeoloji Təsdiq'
      }
    ],
    keyFacts: [
      { label: 'Quruluş ili', value: '1587', status: 'verified_fact' },
      { label: 'İtkin düşənlərin sayı', value: '115 nəfər', status: 'verified_fact' },
      { label: 'Qalan işarə', value: '"CROATOAN" və "CRO"', status: 'verified_fact' },
      { label: 'Ən güclü izah', value: 'Yerli qəbiləyə inteqrasiya', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Kroatoan qəbiləsinə inteqrasiya və assimilyasiya',
        likelihood: 'Yüksək',
        description: 'Aclıq və quraqlıq səbəbilə kolonistlər yerli hindu qəbiləsinə qoşulmuş və onlarla qarışmışlar.',
        scientificConsensus: 'İlk Koloniya Fondu (First Colony Foundation) arxeoloji qazıntıları ilə dəstəklənir.'
      },
      {
        name: 'İspan ordusunun hücumu',
        likelihood: 'Aşağı',
        description: 'İspaniyanın Floridadakı qüvvələri tərəfindən məhv edilməsi versiyası. Lakin İspan arxivlərində bu barədə qeyd yoxdur.',
        scientificConsensus: 'İspaniya dövlət arxivlərində sübut tapılmayıb.'
      }
    ],
    sources: [
      { title: 'A Briefe and True Report of the New Found Land of Virginia', author: 'Thomas Hariot', publisher: 'London', year: '1588', type: 'book' },
      { title: 'The Lost Colony and Hatteras Island', author: 'Scott Dawson', publisher: 'Arcadia Publishing', year: '2020', type: 'academic' }
    ],
    relatedArticleSlugs: ['mary-celeste-gemisi', 'somerton-adami', 'dyatlov-kecidi-hadisesi', 'hinterkaifeck-cinayeti']
  },
  {
    id: 'art-004',
    title: 'Bermuda üçbucağı anomaliyaları',
    originalName: 'Bermuda Triangle',
    slug: 'bermuda-ucbucagi',
    description: 'Mayami, Bermud və Puerto-Riko arasındakı dəniz zonasında baş verən itkin düşmələr, maqnit sapmaları və elmi faktlar.',
    category: 'sirli-hadiseler',
    subcategory: 'İzah olunmamış hadisələr',
    tags: ['Bermuda', 'Uçuş 19', 'Atlantik', 'Metan hidrat', 'Sərsəri dalğalar', 'Maqnit anomaliyası'],
    date: '1945 – Müasir dövr',
    location: 'Şimali Atlantika (Mayami — San Xuan — Bermud)',
    coordinates: '25°00′N 71°00′W',
    status: 'Statistik mif / Təbii dəniz təhlükəsi',
    theoriesCount: '7 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Bermuda üçbucağı akvatoriyasında tropik qasırğa və dəniz dibi çökəklikləri.',
    readingTime: 8,
    views: 52100,
    trendingScore: 90,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '10 Avqust 2026',
    author: 'DARKPEDIA Okeanoqrafiya və Coğrafiya Qrupu',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'tarix', title: '2. "Uçuş 19" və məşhur hadisələr' },
      { id: 'statistika', title: '3. Lloyd’s of London statistik reallığı' },
      { id: 'elmi-izah', title: '4. Təbii izahlar (Qolfstrim, Sərsəri dalğalar, Metan)' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Bermuda üçbucağı (Şeytan üçbucağı) — Atlantik okeanının qərbində, Floridanın cənubu, Bermud adaları və Puerto-Riko arasında yerləşən təxminən 1.3 milyon kvadrat kilometrlik sahədir. Onlarla təyyarə və gəminin burada qeyri-adi şəkildə yoxa çıxdığı iddia edilsə də, beynəlxalq dəniz sığorta şirkətləri və ABŞ Sahil Mühafizəsi bu ərazidə qəzaların statistikasının dünyanın digər intensiv gəmiçilik xətlərindən fərqlənmədiyini təsdiq edir.',
        badge: 'fact',
        badgeText: 'Rəsmi Sahil Mühafizəsi Qeydiyyatı'
      },
      {
        id: 'statistika',
        title: 'Lloyd’s of London statistik reallığı',
        content: 'Dünyanın ən böyük dəniz sığorta bazarı olan "Lloyd’s of London" 1975-ci ildən bəri rəsmi olaraq bəyan etmişdir ki, Bermuda üçbucağı ərazisində itən gəmilərin faiz nisbəti qlobal orta göstəricidən çox deyildir. Ərazi dünyanın ən sıx ticarət yollarından biri olduğu üçün ümumi hadisə sayı təbii olaraq çox görünür.',
        badge: 'fact',
        badgeText: 'Sığorta Şirkəti Məlumatı'
      },
      {
        id: 'elmi-izah',
        title: 'Təbii izahlar (Qolfstrim, Sərsəri dalğalar, Metan)',
        content: '1. Qolfstrim cərəyanı: Güclü və sürətli okean cərəyanı qəzaya uğrayan gəmi və təyyarə qalıqlarını bir neçə saat ərzində yüzlərlə kilometr uzağa daşıyır.\n2. Sərsəri dalğalar (Rogue waves): Ərazidə toqquşan fırtınalar 30 metrə çatan nəhəng, qəfil dalğalar yarada bilir.\n3. Dərin okean xəndəkləri: Puerto-Riko çökəkliyi (8376 m) dəniz qalıqlarını tapmağı demək olar ki, qeyri-mümkün edir.',
        badge: 'fact',
        badgeText: 'Okeanoqrafiya Elmi'
      }
    ],
    keyFacts: [
      { label: 'Sahəsi', value: 'Təxminən 1.300.000 km²', status: 'verified_fact' },
      { label: 'Ən məşhur hadisə', value: '1945 Uçuş 19 (5 bombardmançı)', status: 'verified_fact' },
      { label: 'Rəsmi dövlət statusu', value: 'ABŞ Coğrafi Adlar Şurası tərəfindən rəsmi tanınmır', status: 'verified_fact' },
      { label: 'Elmi konsensus', value: 'Təbii amillər və naviqasiya səhvləri', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Sərsəri dalğalar və dənizaltı metan qazı püskürmələri',
        likelihood: 'Yüksək',
        description: 'Okean dibindəki metan hidrat yataqlarının qəfil partlaması suyun sıxlığını kəskin azaldaraq gəmilərin saniyələr içində batmasına səbəb ola bilər.',
        scientificConsensus: 'Laboratoriya şəraitində sübut edilib, lakin real hadisələrin əsas səbəbi kimi nadirdir.'
      },
      {
        name: 'Maqnit qütb sapması (Agonic line)',
        likelihood: 'Orta',
        description: 'Bermuda bölgəsində maqnit şimalı ilə həqiqi coğrafi şimalın üst-üstə düşməsi təcrübəsiz pilotlarda kompas sapması yarada bilər.',
        scientificConsensus: 'Dənizçilik xəritələrində qeyd olunur.'
      }
    ],
    sources: [
      { title: 'The Bermuda Triangle Mystery: Solved', author: 'Larry Kusche', publisher: 'Prometheus Books', year: '1975', type: 'book' },
      { title: 'US Coast Guard Bermuda Triangle Factsheet', publisher: 'United States Coast Guard', year: '2020', type: 'government' }
    ],
    relatedArticleSlugs: ['mary-celeste-gemisi', 'dyatlov-kecidi-hadisesi', 'itkin-ucus-mh370', 'wow-siqnali']
  },
  {
    id: 'art-005',
    title: 'Somerton Adamı və "Tamam Shud" sirri',
    originalName: 'The Somerton Man (Taman Shud Case)',
    slug: 'somerton-adami',
    description: '1948-ci ildə Avstraliya sahilində tapılan, paltarındakı gizli cibdə farsca "Bitdi/Son" mənasına gələn cırılmış kağız parçası olan naməlum cəsəd.',
    category: 'sirli-hadiseler',
    subcategory: 'Naməlum şəxslər',
    tags: ['Avstraliya', '1948', 'Tamam Shud', 'Casusluq', 'Ömər Xəyyam', 'DNT'],
    date: '1 dekabr 1948',
    location: 'Somerton Beach, Adelaida, Cənubi Avstraliya',
    coordinates: '34°59′46″S 138°30′55″E',
    status: '2022-ci ildə DNT ilə qismən şəxsiyyəti müəyyənləşdirilib',
    theoriesCount: '3 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Somerton çimərliyi və tarixi sirli kod əlyazması.',
    readingTime: 8,
    views: 29800,
    trendingScore: 81,
    factStatus: 'verified_fact',
    lastUpdated: '01 Avqust 2026',
    author: 'DARKPEDIA Məhkəmə Kriminalistikası',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'tapilma', title: '2. Cəsədin tapılması və etiketlərin kəsilməsi' },
      { id: 'tamam-shud', title: '3. "Tamam Shud" kağızı və şifrəli kitab' },
      { id: 'dnt-2022', title: '4. 2022-ci il DNT inqilabı (Karl Uebb)' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '1 dekabr 1948-ci ildə Adelaida şəhərinin Somerton çimərliyində qum üstündə səliqəli geyinmiş naməlum kişi cəsədi tapıldı. Şəxsin bütün paltarlarındakı fabrikat və ad etiketləri səliqə ilə kəsilmişdi. Şalvarının kiçik gizli cibində Ömər Xəyyamın "Rübailər" kitabının nadir nüsxəsindən cırılmış və üzərində "Tamám Shud" (farsca: "Bitdi / Başa çatdı") yazılmış kiçik kağız parçası tapıldı.',
        badge: 'fact',
        badgeText: 'Polis Arxiv Sənədi'
      },
      {
        id: 'tamam-shud',
        title: '"Tamam Shud" kağızı və şifrəli kitab',
        content: 'Polis kağızın cırıldığı konkret kitabı yaxınlıqda tapılan bir avtomobildə aşkar etdi. Kitabın arxasında əllə yazılmış həll olunmamış 5 sətirlik hərf şifrəsi (WRGOABABD...) və gizli bir telefon nömrəsi vardı. Zəhərlənmə ehtimalı güclü olsa da, toksikologiya heç bir məlum zəhər aşkar edə bilmədi.',
        badge: 'fact',
        badgeText: 'Kriptoqrafiya İrsi'
      },
      {
        id: 'dnt-2022',
        title: '2022-ci il DNT inqilabı (Karl Uebb)',
        content: '2022-ci ilin iyul ayında Adelaida Universitetinin professoru Derek Abbott və məşhur amerikalı genetik Kolin Fitspatrik cəsədin gips maskasındakı tük köklərindən DNT analizi apararaq şəxsin 1905-ci il təvəllüdlü melburnlu elektrik mühəndisi Karl Uebb (Carl Webb) olduğunu 99.9% ehtimalla müəyyən etdilər.',
        badge: 'fact',
        badgeText: 'DNT Məhkəmə Genetikası'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: '1 dekabr 1948', status: 'verified_fact' },
      { label: 'Şəxsiyyət', value: 'Karl "Çarlz" Uebb (1905–1948)', status: 'verified_fact' },
      { label: 'Məşhur fraza', value: 'Tamám Shud (Farsca: Bitdi)', status: 'verified_fact' },
      { label: 'Ölüm səbəbi', value: 'Ürək çatışmazlığı / Təsdiqlənməmiş zəhərlənmə', status: 'theory' }
    ],
    theories: [
      {
        name: 'Soyuq Müharibə dövrü casus fəaliyyəti',
        likelihood: 'Orta',
        description: 'Gizli şifrəli qeydlər və etiketlərin məhv edilməsi onun kəşfiyyat agenti olması fərziyyəsini gücləndirmişdi.',
        scientificConsensus: 'Dövlət arxivlərində rəsmi casusluq sənədi tapılmayıb.'
      },
      {
        name: 'Şəxsi faciə və depressiya intiharı',
        likelihood: 'Yüksək',
        description: 'Ailəsindən ayrıldıqdan sonra depressiyaya düşmüş mühəndisin təbii və ya nadir zəhərlə intihar etməsi.',
        scientificConsensus: 'Ailə geneologiyası və psixoloji profil bunu dəstəkləyir.'
      }
    ],
    sources: [
      { title: 'The Unknown Man: Forensic DNA Identification of Carl Webb', author: 'Abbott, D. & Fitzpatrick, C.', publisher: 'Forensic Science International', year: '2022', type: 'academic' },
      { title: 'South Australia Police Historical Society Files', publisher: 'SAPOL Archives', year: '1948', type: 'archive' }
    ],
    relatedArticleSlugs: ['dyatlov-kecidi-hadisesi', 'voynich-elyazmasi', 'zodyak-qatili', 'mary-celeste-gemisi']
  },
  {
    id: 'art-006',
    title: 'Voynich əlyazması (Voniç)',
    originalName: 'Voynich Manuscript',
    slug: 'voynich-elyazmasi',
    description: '15-ci əsrə aid, heç bir məlum dilə bənzəməyən unikal əlifba və qəribə botanika illüstrasiyaları ilə yazılmış ən böyük sirli kitab.',
    category: 'sirli-hadiseler',
    subcategory: 'Açılmamış hadisələr',
    tags: ['Voniç', 'Əlyazma', 'Şifrə', 'Botanika', 'Yale Universiteti', 'Kriptoqrafiya'],
    date: 'Təxm. 1404 – 1438 (Radiokarbon)',
    location: 'Yale Universiteti, Beinecke Nadir Kitablar Kitabxanası, ABŞ',
    coordinates: '41°18′55″N 72°55′38″W',
    status: 'Oxunmamış tarixi kriptoqram',
    theoriesCount: '5 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Voynich əlyazmasındakı naməlum bitki rəsmləri və şifrəli sətirlər.',
    readingTime: 7,
    views: 38700,
    trendingScore: 89,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '15 Avqust 2026',
    author: 'DARKPEDIA Dilçilik və Paleoqrafiya Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'tarix', title: '2. Yaş təyini və paleoqrafiya' },
      { id: 'metn-qurulusu', title: '3. Mətnin linqvistik qanunauyğunluqları' },
      { id: 'nezeriyyeler', title: '4. Əsas nəzəriyyələr' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Voynich əlyazması — təxminən 240 səhifədən ibarət, perqament üzərində naməlum yazı sistemi və dildə yazılmış şəkilli əlyazmadır. 1912-ci ildə polşalı kitab taciri Vilfrid Voniç tərəfindən İtaliyada alınmışdır. Kitabda heç bir dünyəvi bitkiyə tam uyğun gəlməyən yüzlərlə botanika rəsmləri, astronomik xəritələr və qəribə çimərlik laboratoriyaları təsvir edilib.',
        badge: 'fact',
        badgeText: 'Yale Universiteti Arxiv MS 408'
      },
      {
        id: 'tarix',
        title: 'Yaş təyini və paleoqrafiya',
        content: '2009-cu ildə Arizona Universitetində aparılan radiokarbon (C14) analizləri perqamentin 1404 və 1438-ci illər arasında (erkən intibah dövrü) hazırlandığını 95% dəqiqliklə sübut etdi.',
        badge: 'fact',
        badgeText: 'Radiokarbon Tarixləndirməsi'
      },
      {
        id: 'metn-qurulusu',
        title: 'Mətnin linqvistik qanunauyğunluqları',
        content: 'Mətn təsadüfi hərflər yığını deyil: Zipf qanununa (təbii dillərdə sözlərin təkrarlanma tezliyi) və Entropiya qaydalarına tam uyğundur. Bu isə onun saxtakarlıq deyil, mürəkkəb təbii dil və ya yüksək səviyyəli şifrə olduğunu göstərir.',
        badge: 'fact',
        badgeText: 'Riyazi və Linqvistik Analiz'
      }
    ],
    keyFacts: [
      { label: 'Yaranma tarixi', value: '1404–1438 (C14 analizi)', status: 'verified_fact' },
      { label: 'Səhifə sayı', value: '240 səhifə', status: 'verified_fact' },
      { label: 'Saxlanma yeri', value: 'Yale Universiteti Beinecke Kitabxanası', status: 'verified_fact' },
      { label: 'Əlifba', value: 'Naməlum (20–30 unikal qlif)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'İtmiş protoroman və ya qədim regional dil',
        likelihood: 'Orta',
        description: 'Mətnin Aralıq dənizi hövzəsində itmiş dialekt və ya tibbi stenoqram olduğu irəli sürülür.',
        scientificConsensus: 'Aktiv elmi müzakirə mövzusudur.'
      },
      {
        name: 'Mürəkkəb alximiya şifrəsi',
        likelihood: 'Orta',
        description: 'Orta əsr həkim və alximiklərinin öz kəşflərini inkvizisiyadan qorumaq üçün yaratdığı xüsusi monoəlifbalı əvəzləmə şifrəsi.',
        scientificConsensus: 'Dünyanın ən məşhur kriptoanalitikləri (o cümlədən Alan Türinqin komandası) şifrəni sındıra bilməmişdir.'
      }
    ],
    sources: [
      { title: 'The Voynich Manuscript: The Mysterious Code That Has Defied Interpretation for Centuries', author: 'Gerry Kennedy, Rob Churchill', publisher: 'Orion', year: '2004', type: 'book' },
      { title: 'Beinecke Rare Book and Manuscript Library Digital Collections', publisher: 'Yale University', year: '2023', type: 'archive' }
    ],
    relatedArticleSlugs: ['somerton-adami', 'nazca-xetleri', 'wow-siqnali', 'dyatlov-kecidi-hadisesi']
  },
  {
    id: 'art-007',
    title: 'Wow! Siqnalı — Kosmik sirr',
    originalName: 'The Wow! Signal',
    slug: 'wow-siqnali',
    description: '1977-ci ildə Ohayo Universitetinin "Böyük Qulaq" radioteleskopu tərəfindən qeydə alınan və 72 saniyə davam edən ən güclü naməlum darzolaqlı radio siqnalı.',
    category: 'ufo-namelum',
    subcategory: 'Kosmosdan gələn qəribə siqnallar',
    tags: ['SETI', '1977', 'Radio Astronomiya', '6EQUJ5', 'Ohayo', 'Hidrogen Xətti'],
    date: '15 avqust 1977',
    location: 'Big Ear Radio Observatory, Ohayo, ABŞ',
    coordinates: '40°15′04″N 83°02′56″W',
    status: 'Yeganə qeydə alınmış anomal siqnal',
    theoriesCount: '4 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Jerry R. Ehman tərəfindən qırmızı qələmlə "Wow!" yazılmış rəsmi çap sənədi.',
    readingTime: 6,
    views: 36200,
    trendingScore: 88,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '08 Avqust 2026',
    author: 'DARKPEDIA Astrofizika Qrupu',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'xususiyyetler', title: '2. Siqnalın texniki parametrləri (1420 MHz)' },
      { id: 'kod-6equj5', title: '3. "6EQUJ5" kodu nə deməkdir?' },
      { id: 'nezeriyyeler', title: '4. Elmi müzakirələr və komet nəzəriyyəsi' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '15 avqust 1977-ci ildə SETI layihəsi çərçivəsində fəaliyyət göstərən Ohayo Dövlət Universitetinin "Böyük Qulaq" radioteleskopu Oxatan (Sagittarius) bürcü istiqamətindən gələn fövqəladə güclü və darzolaqlı radio siqnal qeydə aldı. Astronom Cerri Ehman çap vərəqində siqnalın intensivlik ardıcıllığını görərək qırağına heyrətlə qırmızı qələmlə "Wow!" yazdı.',
        badge: 'fact',
        badgeText: 'Astrofizika Məlumatı'
      },
      {
        id: 'xususiyyetler',
        title: 'Siqnalın texniki parametrləri (1420 MHz)',
        content: 'Siqnal məhz 1420.4556 MHz tezliyində — neytral hidrogenin emissiya xəttində (kosmik rabitə üçün beynəlxalq qadağan olunmuş qorunan tezlik) idi. Siqnal teleskopun baxış sahəsindən keçərkən tam 72 saniyə davam etmiş və antena profilinə tam riayət edərək yüksəlib sonra sönmüşdür.',
        badge: 'fact',
        badgeText: 'Spektral Ölçmə Faktı'
      },
      {
        id: 'nezeriyyeler',
        title: 'Elmi müzakirələr və komet nəzəriyyəsi',
        content: 'Sonrakı 45 il ərzində dünyanın ən güclü teleskopları həmin koordinatları minlərlə saat dinləsə də, siqnal bir daha təkrarlanmadı. 2017-ci ildə Antonio Paris 266P/Christensen kometinin hidrogen buludunun bu siqnala səbəb olduğunu irəli sürsə də, bu fərziyyə SETI cəmiyyəti tərəfindən siqnalın darzolaqlılığına görə tənqid edilmişdir.',
        badge: 'theory',
        badgeText: 'Astronomik Nəzəriyyələr'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: '15 avqust 1977', status: 'verified_fact' },
      { label: 'Müddət', value: '72 saniyə', status: 'verified_fact' },
      { label: 'Tezlik', value: '1420.456 MHz (Hidrogen xətti)', status: 'verified_fact' },
      { label: 'Mənbə bürcü', value: 'Oxatan (Sagittarius)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Yadplanetli sivilizasiya mayakı (SETI)',
        likelihood: 'Orta',
        description: 'Təbii kosmik mənbələrdə nadir rast gəlinən 10 kHz-dən az darzolaqlı və hidrogen tezliyində olan qəsdən göndərilmiş rabitə siqnalı.',
        scientificConsensus: 'Təkrarı qeydə alınmadığı üçün təsdiqlənməmiş qalır.'
      },
      {
        name: 'Yer mənşəli hərbi və ya peyk əks-sədası',
        likelihood: 'Aşağı',
        description: 'Məxfi hərbi ötürücünün və ya kosmik tullantının yaratdığı radio əks olunması.',
        scientificConsensus: 'Teleskopun iki buynuzlu qəbuledicisindən yalnız birində görünməsi bunu şübhə altına qoyur.'
      }
    ],
    sources: [
      { title: 'The Big Ear Wow! Signal 30th Anniversary Report', author: 'Jerry R. Ehman', publisher: 'Ohio State University Radio Observatory', year: '2007', type: 'academic' },
      { title: 'Cosmic Search Vol. 1, No. 1', publisher: 'North American AstroPhysical Observatory', year: '1979', type: 'academic' }
    ],
    relatedArticleSlugs: ['oumuamua-namelum-obyekt', 'tabby-ulduzu', 'qara-delikler-hadise-ufuqu', 'voynich-elyazmasi']
  },
  {
    id: 'art-008',
    title: 'Nazca xətləri və geoliqləri',
    originalName: 'Nazca Lines',
    slug: 'nazca-xetleri',
    description: 'Peru səhrasında 2000 ildən çox yaşı olan, yalnız quş baxışı hündürlükdən bütöv görünən nəhəng heyvan və həndəsi rəsmlər.',
    category: 'sirli-hadiseler',
    subcategory: 'Açılmamış hadisələr',
    tags: ['Peru', 'Nazca', 'Geoliq', 'Arxeologiya', 'Astronomiya', 'Qədim Mədəniyyət'],
    date: 'E.ə. 500 – E. 500',
    location: 'Nazca səhrası, İka bölgəsi, Peru',
    coordinates: '14°43′00″S 75°08′00″W',
    status: 'UNESCO Ümumdünya İrsi',
    theoriesCount: '4 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Nazca platosunda Kolibri quşu geoliqinin hava çəkilişi.',
    readingTime: 6,
    views: 28400,
    trendingScore: 78,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '02 Avqust 2026',
    author: 'DARKPEDIA Arxeologiya Departamenti',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'yaradilma', title: '2. Necə çəkilmişdir?' },
      { id: 'meqsed', title: '3. Geoliqlərin məqsədi və rituallar' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Nazca xətləri — Perunun cənubundakı quraq yaylada dəmir oksidi ilə örtülmüş qırmızı-qonur çınqılların kənara çəkilərək altındakı açıq rəngli gilli qatın açılması yolu ilə yaradılmış minlərlə xətt, həndəsi fiqur və 70-dən çox stilizə edilmiş heyvan (meymun, hörümçək, kolibri, kondor) təsvirləridir.',
        badge: 'fact',
        badgeText: 'UNESCO Sertifikatı'
      },
      {
        id: 'yaradilma',
        title: 'Necə çəkilmişdir?',
        content: 'Arxeoloji tədqiqatlar göstərir ki, Nazca mədəniyyəti sadə kəndir və taxta dirəklərdən istifadə edərək miqyaslı tor (koordinat böyütmə) üsulu ilə bu xətləri böyük dəqiqliklə yerüstü üsullarla çəkmişdir. Havanın son dərəcə quraq, küləksiz və sabit olması rəsmləri minilliklər boyu qorumuşdur.',
        badge: 'fact',
        badgeText: 'Müasir Arxeoloji Tədqiqat'
      },
      {
        id: 'meqsed',
        title: 'Geoliqlərin məqsədi və rituallar',
        content: 'Ən güclü elmi konsensusa görə, bu xətlər quraqlıqdan əziyyət çəkən qədim xalqın tanrılardan su və məhsuldarlıq istəmək üçün keçirdiyi müqəddəs yürüş yolları və astronomik su mənbəyi xəritələri olmuşdur.',
        badge: 'theory',
        badgeText: 'Elmi Konsensus'
      }
    ],
    keyFacts: [
      { label: 'Dövr', value: 'E.ə. 500 – E. 500', status: 'verified_fact' },
      { label: 'Ərazi', value: 'Təxminən 500 km²', status: 'verified_fact' },
      { label: 'Ən böyük fiqur', value: '370 metr (Pelikan)', status: 'verified_fact' },
      { label: 'Status', value: 'UNESCO Ümumdünya İrsi (1994)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Su kultu və dini mərasim yürüş yolları',
        likelihood: 'Yüksək',
        description: 'Xətlər insanların üzərində gəzərək yağış və yeraltı suların bərəkətini dilədiyi ritual labirintlər idi.',
        scientificConsensus: 'Milli Coğrafiya Cəmiyyəti və müasir arxeoloqlar tərəfindən geniş qəbul edilir.'
      },
      {
        name: 'Qədim astronomik təqvim',
        likelihood: 'Orta',
        description: 'Mariya Rayxenin irəli sürdüyü nəzəriyyəyə görə xətlər günəş duruşu və ulduzların çıxış istiqamətlərini göstərir.',
        scientificConsensus: 'Bəzi xətlər uyğun gəlir, lakin hamısını izah etmir.'
      }
    ],
    sources: [
      { title: 'The Mystery of the Nazca Lines', author: 'Maria Reiche', publisher: 'Editorial Universitaria', year: '1968', type: 'book' },
      { title: 'Lines to the Mountain Gods: Nazca and the Mysteries of Peru', author: 'Evan Hadingham', publisher: 'Random House', year: '1987', type: 'book' }
    ],
    relatedArticleSlugs: ['voynich-elyazmasi', 'gobeklitepe-itkin-sivilizasiyalar', 'tunguska-partlayisi', 'wow-siqnali']
  },
  {
    id: 'art-009',
    title: 'Enfield Poltergeist hadisəsi',
    originalName: 'The Enfield Poltergeist',
    slug: 'enfield-poltergeist-hadisesi',
    description: '1977-1979-cu illərdə Londonda yaşayış evində mebellərin havada uçması və qəribə səslərlə bağlı ən çox sənədləşdirilmiş paranormal iddia.',
    category: 'paranormal',
    subcategory: 'Poltergeist hadisələri',
    tags: ['London', '1977', 'Poltergeist', 'Hodgson ailəsi', 'Ed və Lorraine Warren', 'SPR'],
    date: 'Avqust 1977 – 1979',
    location: '284 Green Street, Enfield, London, Böyük Britaniya',
    coordinates: '51°39′04″N 0°04′48″W',
    status: 'Mübahisəli paranormal iddia / Şübhəli fırıldaqçılıq',
    theoriesCount: '3 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Enfield Green Street küçəsindəki evin tarixi arxivi.',
    readingTime: 7,
    views: 31500,
    trendingScore: 79,
    factStatus: 'unverified_claim',
    contentWarning: 'Məqalə ruhi narahatlıq və sənədləşdirilmiş uşaq hiylələri haqqında məlumat ehtiva edir.',
    lastUpdated: '11 Avqust 2026',
    author: 'DARKPEDIA Paranormal Tədqiqatlar Bölməsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'hadiseler', title: '2. Baş verən hadisələr və polis ifadəsi' },
      { id: 'arasdirma', title: '3. Psixi Araşdırmalar Cəmiyyətinin (SPR) hesabatı' },
      { id: 'etiraf', title: '4. Skeptik baxış və uşaqların sonrakı etirafları' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '1977-ci ilin avqustunda tənha ana Peggi Hodgson Londonun şimalındakı Enfield qəsəbəsindəki evində dörd uşağı ilə yaşayarkən mebellərin öz-özünə sürüşdüyünü, divarlardan qəribə tıqqıltı səsləri gəldiyini və 11 yaşlı qızı Janetin havaya qalxdığını (levitasiya) iddia etdi.',
        badge: 'claim',
        badgeText: 'Şahid İddiası'
      },
      {
        id: 'hadiseler',
        title: 'Baş verən hadisələr və polis ifadəsi',
        content: 'Hadisə yerinə gələn qadın polis zabiti Karolin Hips rəsmi raportunda kreslonun heç kim toxunmadan döşəmə boyu təxminən 1.5 metr sürüşdüyünü gördüyünü qeyd etmişdir.',
        badge: 'fact',
        badgeText: 'Rəsmi Polis Raportu'
      },
      {
        id: 'etiraf',
        title: 'Skeptik baxış və uşaqların sonrakı etirafları',
        content: 'Sehrbazlar və skeptiklər (o cümlədən Anita Qreqori) gizli kameralarla uşaqların qonaqları qorxutmaq üçün qaşıqları əydiklərini və səs tonlarını dəyişərək hiylə etdiklərini qeydə almışlar. İllər sonra Janet Hodgson bəzi hadisələrin (təxminən 2%-nin) həqiqətən də tədqiqatçıları yoxlamaq üçün uşaq zarafatı olduğunu etiraf etmişdir.',
        badge: 'fact',
        badgeText: 'Təsdiqlənmiş Etiraf'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: '1977–1979', status: 'verified_fact' },
      { label: 'Məkan', value: 'Enfield, London', status: 'verified_fact' },
      { label: 'Əsas iştirakçı', value: 'Janet Hodgson (11 yaş)', status: 'verified_fact' },
      { label: 'Elmi rəy', value: 'Uşaq hiylələri və kollektiv təlqin', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Uşaq hiyləsi, ventriloqizm və diqqət axtarışı',
        likelihood: 'Yüksək',
        description: 'Parçalanmış ailədə diqqət çatışmazlığı yaşayan uşaqların fiziki hiylələr və səs dəyişməsi ilə medianın diqqətini cəlb etməsi.',
        scientificConsensus: 'Skeptik və psixoloji dairələr tərəfindən yekdilliklə qəbul edilir.'
      },
      {
        name: 'Həqiqi Poltergeist / Paranormal enerji',
        likelihood: 'Təkzib edilmiş',
        description: 'Evin keçmiş sakini Bill Uilkinsin ruhunun evi narahat etməsi iddiası.',
        scientificConsensus: 'Heç bir elmi və fiziki sübutu yoxdur.'
      }
    ],
    sources: [
      { title: 'This House Is Haunted: The True Story of the Enfield Poltergeist', author: 'Guy Lyon Playfair', publisher: 'Stein and Day', year: '1980', type: 'book' },
      { title: 'Society for Psychical Research Investigation Files', publisher: 'SPR London', year: '1979', type: 'archive' }
    ],
    relatedArticleSlugs: ['yuxu-iflici-nevrologiyasi', 'qara-gozlu-usaqlar', 'dyatlov-kecidi-hadisesi', 'hinterkaifeck-cinayeti']
  },
  {
    id: 'art-010',
    title: 'Qara gözlü uşaqlar (Black-Eyed Children)',
    originalName: 'Black-Eyed Children',
    slug: 'qara-gozlu-usaqlar',
    description: '1990-cı illərin sonundan internetdə yayılan, gecə qapıları döyərək içəri girmək istəyən tamamilə qara bəbəkli uşaqlar haqqında müasir şəhər əfsanəsi.',
    category: 'efsaneler-mifler',
    subcategory: 'Şəhər əfsanələri',
    tags: ['Şəhər əfsanəsi', 'Kripipasta', 'Brian Bethel', '1996', 'Göz anomalisi'],
    date: '1996 – Müasir dövr',
    location: 'Qlobal internet folkloru / Texas, ABŞ',
    status: 'Müasir şəhər əfsanəsi (Folklore)',
    theoriesCount: '2 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Müasir rəqəmsal şəhər folklorunun bədii illüstrasiyası.',
    readingTime: 5,
    views: 27100,
    trendingScore: 76,
    factStatus: 'unverified_claim',
    lastUpdated: '14 Avqust 2026',
    author: 'DARKPEDIA Folklor və Müasir Mifologiya',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'mense', title: '2. Əfsanənin mənşəyi (Brian Bethel)' },
      { id: 'psixoloji-tesir', title: '3. Niyə qorxudur? Psixoloji arxetip' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Qara gözlü uşaqlar (BEK - Black-Eyed Kids) — yaşları 6 ilə 16 arasında olan, solğun dərili, monoxrom geyimli və gözlərində heç bir ağlıq (sklera) olmayan, tamamilə qapqara bəbəkləri olan varlıqlar haqqında şəhər əfsanəsidir. Hekayələrə görə, onlar gecə vaxtı tənha insanların qapısını və ya avtomobil şüşəsini döyərək sakit səslə içəri buraxılmalarını xahiş edirlər.',
        badge: 'claim',
        badgeText: 'Şəhər Əfsanəsi İddiası'
      },
      {
        id: 'mense',
        title: 'Əfsanənin mənşəyi (Brian Bethel)',
        content: 'Hekayə ilk dəfə 1996-cı ildə Texas ştatının Abilin şəhərindən olan jurnalist Brayan Betel tərəfindən elektron poçt siyahısında şəxsi təcrübə kimi dərc edilmişdir. Sonradan Betel bunun bədii və qorxu hissi yaradan folklor üslubunda yazıldığını bildirmişdir.',
        badge: 'fact',
        badgeText: 'Folklor Tarixi Faktı'
      },
      {
        id: 'psixoloji-tesir',
        title: 'Niyə qorxudur? Psixoloji arxetip',
        content: 'Psixoloqlar bu mifin uğurunu "Uncanny Valley" (Qeyri-təbii dərə) effekti və uşaq məsumluğu ilə gözün sklerasının olmamasının yaratdığı dərin bioloji qorxu refleksi ilə izah edirlər. Ağ göz sklerası insana qarşısındakının baxış istiqamətini və niyyətini oxumağa imkan verir; onun olmaması instinktiv təhlükə siqnalı verir.',
        badge: 'fact',
        badgeText: 'Psixoloji Təhlil'
      }
    ],
    keyFacts: [
      { label: 'İlk qeyd ili', value: '1996 (Brian Bethel)', status: 'verified_fact' },
      { label: 'Kateqoriya', value: 'Kripipasta / Şəhər əfsanəsi', status: 'verified_fact' },
      { label: 'Fiziki sübut', value: 'Sıfır (Heç bir qeydiyyat yoxdur)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'İnternet dövrünün kütləvi kripipastası',
        likelihood: 'Yüksək',
        description: 'Klassik vampir və yadplanetli hekayələrinin 90-cı illərin internet forumlarında yeni şəhər folkloru kimi formalaşması.',
        scientificConsensus: 'Folklorşünaslar tərəfindən tam sübut edilib.'
      }
    ],
    sources: [
      { title: 'The Black Eyed Children', author: 'David Weatherly', publisher: 'Eerie Lights Publishing', year: '2012', type: 'book' },
      { title: 'Contemporary Legend: The Journal of the International Society for Contemporary Legend Research', publisher: 'ISCLR', year: '2015', type: 'academic' }
    ],
    relatedArticleSlugs: ['enfield-poltergeist-hadisesi', 'yuxu-iflici-nevrologiyasi', 'chupacabra-efsanesi', 'mothman-pervane-adam']
  }
];
