import { Article } from '../../types';

export const expandedMysteriesArticles: Article[] = [
  {
    id: 'exp-001',
    title: 'Spontaneous Human Combustion — Öz-özünə Yanan İnsanlar',
    originalName: 'Spontaneous Human Combustion (SHC)',
    slug: 'spontaneous-human-combustion',
    description: 'Ətrafdakı mebellər və toxumalar toxunulmaz qaldığı halda, insan bədəninin daxildən 1500°C temperaturla külə dönməsi və "Fitil Effekti" (Wick Effect) elmi sübutu.',
    category: 'sirli-hadiseler',
    subcategory: 'İzah olunmamış yanğınlar',
    tags: ['SHC', 'Öz-özünə yanma', 'Wick Effect', 'Fitil effekti', 'Mary Reeser', 'Məhkəmə tibbi ekspertizası'],
    date: '1725 – Müasir dövr',
    location: 'Qlobal (İngiltərə, ABŞ, Fransa)',
    coordinates: '51°30′N 0°07′W',
    status: 'Məhkəmə tibbi və yanğın fizikası tərəfindən elmi olaraq sübut edilmişdir',
    theoriesCount: '3 elmi nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Alov və termal yanma reaksiyalarının laboratoriya tədqiqat təsviri.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        caption: '1951-ci ildə Florida ştatında Mary Reeser hadisəsində yalnız bir ayağı toxunulmaz qalan kreslonun FTB kriminal laboratoriya sənədləri.',
        source: 'FBI Forensic Case Archives'
      },
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        caption: 'Britaniya patoloqları tərəfindən laboratoriyada heyvan toxuması üzərində sübut edilmiş "Wick Effect" (Şam fitili yanma modeli).',
        source: 'British Forensic Science Society'
      }
    ],
    readingTime: 7,
    views: 34100,
    trendingScore: 84,
    isFeatured: false,
    isTrending: true,
    isMostRead: false,
    factStatus: 'verified_fact',
    contentWarning: 'Bu məqalə ağır termal yanıqlar və məhkəmə tibbi fotoşəkilləri təsvirini ehtiva edir.',
    lastUpdated: '14 Avqust 2026',
    author: 'DARKPEDIA Məhkəmə Tibbi Ekspertizası',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Fenomenin Xüsusiyyətləri və Tarixi' },
      { id: 'mary-reeser', title: '2. Mary Reeser və John Bentley Hadisələri' },
      { id: 'wick-effect', title: '3. Elmi İzah: "Wick Effect" (Fitil Modeli)' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Fenomenin Xüsusiyyətləri və Tarixi',
        content: 'Tarix boyu təxminən 200-dən çox sənədləşdirilmiş hadisədə insan bədəni qapalı otaqda demək olar ki, tamamilə külə dönmüş, lakin ətrafdakı taxta döşəmə, qəzetlər və ya yataq dəsti yanmamışdır. Tipik olaraq baş və gövdə tam kül olur, lakin corablı və ya ayaqqabılı ayaqlar heç bir zədə almadan salamat qalır.',
        badge: 'fact',
        badgeText: 'Məhkəmə Tibbi Qeydləri'
      },
      {
        id: 'mary-reeser',
        title: 'Mary Reeser və John Bentley Hadisələri',
        content: '1951-ci il iyulun 2-də Floridada 67 yaşlı Meri Riserin mənzilində qapı tutacağı isti idi. Ev sahibi içəri girdikdə Merinin oturduğu kreslonun külə döndüyünü, lakin yaxınlıqdakı qəzet yığınının yanmadığını gördü. Cəsəddən yalnız bir ayaq və qeyri-adi dərəcədə kiçilmiş kəllə sümüyü qalmışdı. FTB-nin fizika üzrə mütəxəssisi professor Krogman bədənin belə yanması üçün 1370-1650°C temperatur lazım olduğunu bildirdi.',
        badge: 'fact',
        badgeText: 'FTB İstintaq Hesabatı'
      },
      {
        id: 'wick-effect',
        title: 'Elmi İzah: "Wick Effect" (Fitil Modeli)',
        content: 'Müasir məhkəmə elmi və kriminalistlər sübut etmişdir ki, heç bir daxili paranormal partlayış yoxdur. Proses "Şam fitili effekti" (Wick Effect) adlanır: yuxulayan və ya huşunu itirən şəxsin paltarına düşən siqaret közü geyimi alovlandırır. Dəri yarıldıqda dərialtı piy əriyərək pambıq parçaya hopur və şam kimi saatlarla yavaş-yavaş, tüstüsüz və yüksək lokal temperaturla yanır. Ətraflarda piy az olduğu üçün onlar yanmır.',
        badge: 'fact',
        badgeText: 'Kriminalistik Elmi Konsensus'
      }
    ],
    keyFacts: [
      { label: 'Elmi Ad', value: 'Wick Effect (Şam fitili yanıq modeli)', status: 'verified_fact' },
      { label: 'İlkin Mənbə', value: 'Xarici qığılcım (Siqaret, soba, köz)', status: 'verified_fact' },
      { label: 'Yanma Xarakteri', value: 'Yavaş, az alovlu və lokal yüksək daxili temperatur', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Spontaneous Human Combustion: A Forensic Assessment', author: 'Dr. John Heymer', publisher: 'Forensic Science International', year: '1996', type: 'academic' },
      { title: 'The Physics of the Wick Effect', publisher: 'BBC Horizon Science Investigation', year: '1998', type: 'documentary' }
    ],
    relatedArticleSlugs: ['cotard-sindromu-gezen-cesed', 'yuxu-iflici-nevrologiyasi', 'dyatlov-kecidi-hadisesi']
  },
  {
    id: 'exp-002',
    title: 'Skinwalker Ranch — Yuta Paranormal Poliqonu',
    originalName: 'Skinwalker Ranch (Sherman Ranch)',
    slug: 'skinwalker-ranch-yuta',
    description: 'Yuta ştatında 512 akrlıq ərazidə baş verən UAP müşahidələri, mal-qaranın cərrahi kəsiklərlə tələfatı, 1.6 GHz radio anomaliyaları və Pentaqonun AATIP/AAWSAP proqramı çərçivəsində aparılan elmi tədqiqatlar.',
    category: 'paranormal',
    subcategory: 'Paranormal zonalar və UAP tədqiqatları',
    tags: ['Skinwalker', 'Yuta', 'UFO', 'AATIP', 'Robert Bigelow', 'Kriptid', 'Uinta Hövzəsi', 'AAWSAP'],
    date: '1994 – Müasir dövr',
    location: 'Uintah County, Yuta, ABŞ',
    coordinates: '40°15′31″N 109°53′16″W',
    status: 'Özəl elmi və hərbi monitorinq poliqonu (Brandon Fugal mülkiyyəti)',
    theoriesCount: '5 əsas elmi və hərbi nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Yuta ştatının qırmızı qayalıqları və gecə səmasında naməlum işıq izləri.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        caption: 'Uinta hövzəsinin qədim Navajo və Ute xalqlarına aid petroqlifləri və heyvan-şaman formaları.',
        source: 'Utah Historical Society'
      },
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        caption: 'NIDS tərəfindən rançoda quraşdırılmış 24 saatlıq spektral müşahidə qüllələri.',
        source: 'Bigelow Aerospace Archives'
      }
    ],
    readingTime: 11,
    views: 49200,
    trendingScore: 92,
    isFeatured: false,
    isTrending: true,
    isMostRead: true,
    factStatus: 'theory',
    contentWarning: 'Məqalə heyvan kəsikləri, radiasiya yanıqları və anomal hərbi tədqiqatlar barədə qeydləri ehtiva edir.',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Paranormal və Hərbi Tədqiqatlar Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Rançonun Tarixi və Sherman Ailəsinin Hadisələri' },
      { id: 'bigelow-nids', title: '2. Robert Bigelow və NIDS Elmi Ekspedisiyaları (1996–2004)' },
      { id: 'pentagon-aatip', title: '3. Pentaqonun 22 Milyon Dollarlıq AAWSAP Proqramı' },
      { id: 'anomal-olcmeler', title: '4. 1.6 GHz Radio Siqnalı və Qəfil Batareya Boşalmaları' },
      { id: 'elmi-nezeriyyeler', title: '5. Elmi İzahlar: Piezoelektrik Plazma və ya Hərbi Sınaqlar?' },
      { id: 'menbeler', title: '6. Rəsmi Sənədlər və Ədəbiyyat' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Rançonun Tarixi və Sherman Ailəsinin Hadisələri',
        content: `Yuta ştatının şimal-şərqində, Uinta dağ silsiləsi ətəklərində yerləşən 512 akrlıq (təxminən 2 km²) ərazi yerli Navajo və Ute yerli xalqlarının folklorunda əsrlər boyu lənətlənmiş torpaq sayılmışdır. Navajo əfsanələrinə görə, bura cildini dəyişdirə bilən şər ruhların — "Skinwalker"lərin məskənidir.

1994-cü ildə Terri və Qven Şerman ailəsi rançonu satın alaraq orada cins mal-qara təsərrüfatı qurdular. Lakin ailə dərhal dəhşətli hadisələrlə qarşılaşdı: bir neçə dəfə güllə ilə vurulmasına baxmayaraq heç bir zədə almayan nəhəng canavarabənzər məxluqlar, mal-qaranın heç bir qan ləkəsi olmadan və dəqiq cərrahi kəsiklərlə orqanlarının çıxarılması, gecə səmasında peyda olan parıldayan narıncı və mavi plazma kürələri. 1996-cı ildə Şerman ailəsi tükənərək rançonu təcili satışa çıxardı.`,
        badge: 'claim',
        badgeText: 'Şahid İfadələri Sənədi'
      },
      {
        id: 'bigelow-nids',
        title: 'Robert Bigelow və NIDS Elmi Ekspedisiyaları (1996–2004)',
        content: `1996-cı ildə Las-Veqaslı aerokosmik maqnat və milyarder Robert Bigelow rançonu 200.000 dollara satın aldı və ərazidə Milli Kəşf Elmi İnstitutunu (NIDS - National Institute for Discovery Science) qurdu. Komandaya nüvə fizikləri, biokimyaçılar, astrofiziklər və keçmiş FTB tədqiqatçıları cəlb edildi.

NIDS rançonu 24 saatlıq infraqırmızı kameralar, seysmometrlər, radiasiya detektorları və maqnitometrlərlə əhatəyə aldı. Alimlər onlarla qeyri-adi hadisəni — sensorların qəfil dondurulmasını, havada görünməz kütlələrin yaratdığı təzyiq dalğalarını və mal-qaranın gözlərinin və cinsiyyət orqanlarının 45 dəqiqə ərzində heç bir səs çıxarılmadan lazer dəqiqliyi ilə kəsilməsini sənədləşdirdilər.`,
        badge: 'fact',
        badgeText: 'NIDS Laboratoriya Hesabatı'
      },
      {
        id: 'pentagon-aatip',
        title: 'Pentaqonun 22 Milyon Dollarlıq AAWSAP Proqramı',
        content: `2007-ci ildə ABŞ Senatının çoxluq lideri Harri Ridin təşəbbüsü ilə ABŞ Müdafiə Kəşfiyyat Agentliyi (DIA) 22 milyon dollarlıq büdcə ilə "Qabaqcıl Aerokosmik Silah Sistemi Tətbiqləri Proqramı"nı (AAWSAP) yaratdı. Proqramın əsas elmi-tədqiqat bazası məhz Skinwalker Ranch oldu.

Pentaqonun 2021-ci ildə deklassifikasiya olunmuş sənədlərinə görə, rançoya göndərilən hərbi kəşfiyyatçılar və alimlər kəskin neyroloji pozuntular, mikrodalğalı şüalanma yanıqları və müvəqqəti koqnitiv iflic halları yaşamışlar.`,
        badge: 'fact',
        badgeText: 'Pentaqon Deklassifikasiya Sənədləri'
      },
      {
        id: 'anomal-olcmeler',
        title: '1.6 GHz Radio Siqnalı və Qəfil Batareya Boşalmaları',
        content: `2016-cı ildə rançonu alan daşınmaz əmlak maqnatı Brandon Fugal və baş tədqiqatçı astrofizik Dr. Erik Bard ərazidə aparılan müasir ölçmələrdə təkrarolunan unikal anomaliya qeydə aldılar:
• Ərazidə naməlum işıqlar və ya UAP hadisəsi baş verən anda 1.600 ilə 1.605 GHz diapazonunda (peyk və kosmik rabitə üçün ayrılmış qorunan tezlik) kəskin pik radio şüalanması yaranır.
• Təzə doldurulmuş peşəkar litium-ion kamera batareyaları rançonun mərkəzindəki "Üçbucaq" (The Triangle) zonasına daxil olan kimi saniyələr içində 100%-dən 0%-ə düşür.
• Lidar və rentgen skanerləri torpağın 9 metr dərinliyində qeyri-adi sıxlıqlı və rentgen şüalarını əks etdirən naməlum qaya/metal strukturu aşkar etmişdir.`,
        badge: 'fact',
        badgeText: 'Astrofiziki Spektrometriya'
      },
      {
        id: 'elmi-nezeriyyeler',
        title: 'Elmi İzahlar: Piezoelektrik Plazma və ya Hərbi Sınaqlar?',
        content: `Hadisənin arxasında duran elmi hipotezlər bunlardır:
1. Tektonik Piezoelektrik Plazma Hipotezi: Uinta hövzəsi dərin geoloji tektonik gərginlik altındadır. Yeraltı kvars qatlarının sıxılması böyük elektrik gərginliyi yaradaraq yer səthində parıldayan işıq kürələri (plazmoidlər) və güclü yerli elektromaqnit sahələri törədir.
2. Gizli Hərbi Elektron Mübarizə Sınaqları: Yaxınlıqda yerləşən Dugway Poliqonu və Hill Hava Qüvvələri bazasının məxfi mikrodalğalı yönəldilmiş enerji və psixotronik sensor sınaqları aparması.
3. Kütləvi Təlqin və Halüsinasiya: Qədim yerli əfsanələrin yaratdığı güclü psixoloji təsir və təcrid olunmuş səhra mühiti.`,
        badge: 'theory',
        badgeText: 'Elmi Konsensus Müzakirəsi'
      }
    ],
    keyFacts: [
      { label: 'Ərazi', value: '512 akr (2.07 km²), Uintah County, Yuta', status: 'verified_fact' },
      { label: 'Dövlət Proqramı', value: 'ABŞ Müdafiə Nazirliyinin AAWSAP/AATIP proqramı ($22M)', status: 'verified_fact' },
      { label: 'Ölçülən Anomaliya', value: '1.6 GHz pik radio şüalanması və batareya boşalması', status: 'verified_fact' },
      { label: 'Hazırkı Sahibi', value: 'Brandon Fugal (2016-cı ildən)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Təbii Yeraltı Geomaqnit və Piezoelektrik Plazma',
        likelihood: 'Yüksək',
        description: 'Uinta tektonik qırılma xətlərindəki kvars süxurlarının təzyiq altında işıq saçan plazmoidlər və elektromaqnit dalğaları yaratması.',
        scientificConsensus: 'Geofiziklər tərəfindən araşdırılan ən güclü təbii model.'
      },
      {
        name: 'Məxfi Hərbi Elektron Silah Sınaqları',
        likelihood: 'Orta',
        description: 'Dugway Hərbi Poliqonuna yaxın ərazidə mikrodalğalı və yönəldilmiş enerji sensorlarının gizli sınaqları.'
      }
    ],
    sources: [
      { title: 'Hunt for the Skinwalker: Science Confronts the Unexplained at a Remote Ranch in Utah', author: 'Colm A. Kelleher & George Knapp', publisher: 'Paraview Pocket Books', year: '2005', type: 'book' },
      { title: 'Skinwalkers at the Pentagon: An Insiders’ Account of the Secret Government UFO Program', author: 'Lacatski, J., Kelleher, C., Knapp, G.', publisher: 'RTMA LLC', year: '2021', type: 'book' }
    ],
    relatedArticleSlugs: ['roswell-ufo-hadisesi', 'wow-siqnali', 'the-hum-sirli-ugultu']
  },
  {
    id: 'exp-003',
    title: 'Flight 19 — Bermudda İtkin Dəniz Qüvvələri Eskadrilyası',
    originalName: 'Flight 19 - The Lost Patrol (1945)',
    slug: 'flight-19-itkin-eskadrilya',
    description: '1945-ci il dekabrın 5-də Floridadan naviqasiya təliminə qalxan 5 ədəd TBM Avenger bombardmançısı və onları axtarmağa göndərilən 13 nəfərlik xilasedici təyyarənin Bermud üçbucağında izsiz yoxa çıxması haqqında dəniz donanması istintaqı.',
    category: 'sirli-hadiseler',
    subcategory: 'Aviasiya qəzaları və dəniz anomaliyaları',
    tags: ['Flight 19', 'Bermud', '1945', 'TBM Avenger', 'ABŞ Dəniz Qüvvələri', 'Kompas anomaliyası', 'Charles Taylor'],
    date: '5 Dekabr 1945',
    location: 'Bermud üçbucağı, Atlantik Okeanı',
    coordinates: '26°04′N 80°09′W',
    status: 'Rəsmi ABŞ Dəniz Qüvvələri istintaqı tərəfindən bağlanmış tarixi itki',
    theoriesCount: '4 əsas aviasiya nəzəriyyəsi',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Okean üzərində uçan tarixi hərbi təyyarələrin arxiv sənədləri.',
    readingTime: 10,
    views: 41200,
    trendingScore: 84,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Hərbi Aviasiya Arxivi Şöbəsi',
    tableOfContents: [
      { id: 'telim-plani', title: '1. 5 Dekabr 1945: Təlim Naviqasiya Uçuşu 19' },
      { id: 'kompas-anomaliyasi', title: '2. Kompasların Sıradan Çıxması və Son Danışıqlar' },
      { id: 'mariner-partlayisi', title: '3. Axtarış Əməliyyatı və PBM Mariner Fəlakəti' },
      { id: 'donanma-istintaqi', title: '4. ABŞ Dəniz Qüvvələrinin Rəsmi İstintaq Nəticəsi' },
      { id: 'menbeler', title: '5. Rəsmi Hərbi Hesabatlar' }
    ],
    sections: [
      {
        id: 'telim-plani',
        title: '5 Dekabr 1945: Təlim Naviqasiya Uçuşu 19',
        content: `1945-ci il dekabrın 5-də saat 14:10-da Florida ştatındakı Fort-Loderdeyl Dəniz Hava Bazasından 5 ədəd Grumman TBM Avenger tipli torpeda bombardmançısı havaya qalxdı. Uçuşa 2500 saatdan çox uçuş təcrübəsi olan leytenant Çarlz Kerroll Teylor rəhbərlik edirdi. Eskadrilyada ümumilikdə 14 hərbi dənizçi pilot var idi.

Missiyanın məqsədi ("Navigasiya Problemi 1"): Şərqə — Hen and Chickens qayalıqlarına doğru 90 kilometr uçaraq praktiki bombalama həyata keçirmək, sonra şimal istiqamətində Böyük Bahama adasına dönmək və qərbə bazaya qayıtmaq idi. Təyyarələrin hər birində 5 saat yarımlıq tam yanacaq ehtiyatı var idi.`,
        badge: 'fact',
        badgeText: 'ABŞ Donanması Arxivi'
      },
      {
        id: 'kompas-anomaliyasi',
        title: 'Kompasların Sıradan Çıxması və Son Danışıqlar',
        content: `Saat 15:40-da bombalama təlimi başa çatdıqdan sonra bazadakı radio-qüllə leytenant Teylor ilə digər pilot Edvard Pauers arasındakı təşvişli danışığı qeydə aldı. Teylor bildirdi: "Mən harada olduğumuzu bilmirəm. Sonuncu döngədən sonra istiqaməti itirmişik... Hər iki kompasım sıradan çıxıb."

Baza təlimatçıları Teylora günəşi qərbdə saxlayaraq materikə doğru uçmağı məsləhət gördülər. Lakin Teylor Floridaya doğru deyil, təsadüfən Meksika körfəzində olduğunu zənn etdi və eskadrilyanı şimal-şərqə — açıq Atlantik okeanının ucsuz-bucaqsız fırtınalı sularına doğru apardı.

Saat 18:20-də Teylorun son radio mesajı eşidildi: "Bütün təyyarələr bir-birinə yaxınlaşsın... Yanacağımız 10 qallondan aşağı düşəndə hamımız birlikdə suya məcburi eniş edəcəyik." Bundan sonra təyyarələrlə rabitə həmişəlik kəsildi.`,
        badge: 'fact',
        badgeText: 'Rəsmi Radio Transkripti'
      },
      {
        id: 'mariner-partlayisi',
        title: 'Axtarış Əməliyyatı və PBM Mariner Fəlakəti',
        content: `Saat 19:27-də itkin düşən 5 təyyarəni xilas etmək üçün bazadan iki ədəd Martin PBM Mariner tipli nəhəng amfibiya xilasedici uçan qayıq havaya qaldırıldı. Lakin havaya qalxdıqdan cəmi 20 dəqiqə sonra 13 heyət üzvü olan PBM-5 (Buno 59225) radarlardan itdi.

Yaxınlıqda üzən "SS Gaines Mills" neft tankeri saat 19:50-də havada nəhəng alov partlayışı gördüyünü və dəniz səthində yanacaq ləkələri tapdığını bildirdi. PBM Mariner təyyarələri aviasiyada "uçan qaz bombası" kimi tanınırdı; təyyarənin daxilində toplanan benzin buxarlarının elektrik qığılcımından partladığı təsdiqləndi. Beləliklə, bir gündə itkinlərin sayı 6 təyyarəyə və 27 nəfərə çatdı.`,
        badge: 'fact',
        badgeText: 'Faciəvi Fakt'
      },
      {
        id: 'donanma-istintaqi',
        title: 'ABŞ Dəniz Qüvvələrinin Rəsmi İstintaq Nəticəsi',
        content: `ABŞ Dəniz Qüvvələri yüzlərlə gəmi və təyyarə ilə tarixin ən böyük axtarış əməliyyatlarından birini həyata keçirdi, lakin nə bir parça metal, nə də xilasedici jilet tapıldı.

500 səhifəlik rəsmi dəniz istintaq hesabatında leytenant Teylorun Floridanın şərq sahilindəki adaları Florida Keys arxipelaqı ilə səhv saldığı, nəticədə fırtınalı qaranlıq gecədə yanacaqları bitərək okeanın 2000 metr dərinliklərinə batdıqları qənaətinə gəlindi. Sonradan ailəsinin müraciəti ilə rəsmi səbəb "səbəbi naməlum qəza" olaraq dəyişdirildi.`,
        badge: 'fact',
        badgeText: 'Rəsmi Dəniz İstintaqı'
      }
    ],
    keyFacts: [
      { label: 'İtkin Təyyarələr', value: '5 ədəd TBM Avenger + 1 PBM-5 Mariner', status: 'verified_fact' },
      { label: 'İtkin İnsan Sayı', value: '27 dənizçi hərbçi', status: 'verified_fact' },
      { label: 'Tarix', value: '5 Dekabr 1945', status: 'verified_fact' },
      { label: 'Axtarış Nəticəsi', value: 'Heç bir qalıq və ya cəsəd tapılmadı', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Məkan Dezinformasiyası və Yanacaq Tükənməsi',
        likelihood: 'Yüksək',
        description: 'Teylorun kompas xətası səbəbindən Baham adalarını Florida Keys zənn edərək Atlantikin dərinliyinə doğru uçması və 3 metrlik dalğalarda batması.',
        scientificConsensus: 'ABŞ Dəniz Qüvvələrinin rəsmi istintaqının əsas gəldiyi nəticə.'
      }
    ],
    sources: [
      { title: 'Board of Investigation into the Loss of Flight 19', author: 'US Naval Court of Inquiry', publisher: 'US Navy Declassified Archive', year: '1946', type: 'government' },
      { title: 'They Flew into Oblivion: The Mystery of Flight 19', author: 'Gian J. Quasar', publisher: 'Bermuda Triangle Historical Institute', year: '2003', type: 'book' }
    ],
    relatedArticleSlugs: ['bermuda-ucbucagi', 'itkin-ucus-mh370', 'mary-celeste-gemisi']
  },
  {
    id: 'exp-004',
    title: 'Babushka Lady — Kennedi Sui-qəsdinin İtkin Şahidi',
    originalName: 'The Babushka Lady (JFK Assassination Witness)',
    slug: 'babushka-lady-jfk',
    description: '22 noyabr 1963-cü ildə Dallasda Prezident Con Kennediyə atəş açılarkən hadisəni ən yaxın məsafədən videoya çəkən, lakin FTB tərəfindən 60 ildir şəxsiyyəti və lentləri tapılmayan sirli qadın.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Açılmamış tarixi cinayətlər və sui-qəsdlər',
    tags: ['JFK', 'Babushka Lady', 'Dallas', '1963', 'Sui-qəsd', 'Zapruder', 'FTB', 'Dealey Plaza', 'Grassy Knoll'],
    date: '22 Noyabr 1963',
    location: 'Dealey Plaza, Dallas, Texas, ABŞ',
    coordinates: '32°46′44″N 96°48′31″W',
    status: 'Şəxsiyyəti və film lenti müəyyənləşdirilməmiş tarixi şahid',
    theoriesCount: '3 əsas tarixi nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '1963-cü il Dealey Plaza qətliam anı və arxiv fotolarında arxası görünən yaylıqlı qadın.',
    readingTime: 8,
    views: 38400,
    trendingScore: 82,
    factStatus: 'theory',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Kriminalistika və Tarix Şöbəsi',
    tableOfContents: [
      { id: 'sui-qesd-ani', title: '1. 22 Noyabr 1963: Güllə Yağışı Altında Sakit Qadın' },
      { id: 'kadr-bucaqlari', title: '2. Fotoşəkillərdəki İzlər: Zapruder, Muchmore və Nix Filmləri' },
      { id: 'ftb-axtarislari', title: '3. FTB və Warren Komissiyasının Axtarışları' },
      { id: 'beverly-oliver-iddiasi', title: '4. Beverli Oliver İddiası: Həqiqət, yoxsa Fırıldaq?' },
      { id: 'menbeler', title: '5. Rəsmi Tarixi Hesabatlar' }
    ],
    sections: [
      {
        id: 'sui-qesd-ani',
        title: '22 Noyabr 1963: Güllə Yağışı Altında Sakit Qadın',
        content: `1963-cü il noyabrın 22-də saat 12:30-da Dallasın Dealey Plaza meydanında ABŞ Prezidenti Con Kennedinin açıq limuzini Elm küçəsi ilə hərəkət edərkən atəş açıldı. Güllələr prezidentə dəyən an ətrafdakı yüzlərlə şahid və fotoqraf qorxu içində qışqıraraq yerə uzandı və ya uşaqlarını qorumaq üçün qaçdı.

Lakin hadisə yerində çəkilmiş foto və video kadrlarında qəribə bir mənzərə aşkar edildi: Elm küçəsi ilə əsas "Otlu Təpə" (Grassy Knoll) arasındakı otluqda dayanmış, başında rus qadınlarının bağladığı yaylığa bənzər qəhvəyi yaylıq ("babuşka") və uzun plaş olan orta yaşlı bir qadın tamamilə hərəkətsiz dayanaraq əlindəki kinokamera ilə limuzinin dəqiq qətliam anını lentə alırdı.`,
        badge: 'fact',
        badgeText: 'Fotoqrafik Sübut'
      },
      {
        id: 'kadr-bucaqlari',
        title: 'Fotoşəkillərdəki İzlər: Zapruder, Muchmore və Nix Filmləri',
        content: `Məşhur Avraam Zapruder filmi, Orvill Nix filmi və Meri Maçmorun kinoxronikalarında "Babuşka Qadın" aydın görünür. O, prezident limuzininə ən yaxın bucaqda dururdu və onun kamerası sui-qəsdin ən həlledici elementlərini — məşhur Kitab Anbarının pəncərəsini və eyni zamanda arxasında yerləşən "Otlu Təpə"dəki taxta hasarı birbaşa kadra alırdı.

Atışma bitdikdən sonra qadın kamerasını aşağı salmış, izdihamın arasından keçərək Elm küçəsi boyunca şərqə doğru sakitcə uzaqlaşmışdır.`,
        badge: 'fact',
        badgeText: 'Kinolent Analizi'
      },
      {
        id: 'ftb-axtarislari',
        title: 'FTB və Warren Komissiyasının Axtarışları',
        content: `Sui-qəsdin istintaqını aparan FTB və Warren Komissiyası meydandakı bütün fotoqrafları müəyyənləşdirsə də, bu qadının şəxsiyyətini tapa bilmədi. Dallasın bütün foto-laboratoriyalarına və kinolent aşkarlama mərkəzlərinə xüsusi xəbərdarlıq göndərildi ki, əgər kimsə həmin günə aid 8mm və ya 16mm lent gətirsə dərhal xəbər versin. Lakin heç kim müraciət etmədi.

Əgər bu lent mövcuddursa, o, prezidentə açılan atəşlərin həqiqətən Li Harvi Osvald tərəfindən, yoxsa Otlu Təpədəki ikinci bir snayper tərəfindən açıldığını 100% sübut edə biləcək yeganə maddi sübutdur.`,
        badge: 'fact',
        badgeText: 'İstintaq Qeydiyyatı'
      },
      {
        id: 'beverly-oliver-iddiasi',
        title: 'Beverli Oliver İddiası: Həqiqət, yoxsa Fırıldaq?',
        content: `1970-ci ildə Beverli Oliver adlı qadın özünün həmin "Babuşka Qadın" olduğunu iddia etdi. O bildirdi ki, hadisə günü 17 yaşı olub və qətliamı "Yashica 8mm" kamerası ilə çəkib, lakin hadisədən bir neçə gün sonra özlərini FTB agenti kimi təqdim edən iki nəfər (Regis Kennedi adlı agent) lenti ondan müsadirə edib və geri qaytarmayıb.

Lakin tədqiqatçılar Oliverin ifadəsində ciddi ziddiyyətlər tapdılar: onun qeyd etdiyi "Yashica" kamera modeli 1963-cü ildə hələ istehsal olunmamışdı və arxiv kadrlarındakı qadın 17 yaşlı qızdan xeyli yaşlı görünürdü. Nəticədə Babuşka Qadının həqiqi kimliyi və lentin taleyi sirr olaraq qalır.`,
        badge: 'theory',
        badgeText: 'Mübahisəli İddia'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: '22 Noyabr 1963, 12:30 (Dallas, Texas)', status: 'verified_fact' },
      { label: 'Kamera', value: '8mm və ya 16mm kinokamera', status: 'verified_fact' },
      { label: 'Status', value: 'Şəxsiyyəti və lent 60 ildir tapılmayıb', status: 'verified_fact' },
      { label: 'Baxış bucağı', value: 'Prezident limuzini və Grassy Knoll tam görünüşü', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Müstəqil və Qorxmuş Şahid',
        likelihood: 'Yüksək',
        description: 'Sadə bir yerli sakinin qorxudan və ya istintaqa cəlb olunmaq istəməməsindən lenti məhv etməsi və ya gizlətməsi.'
      },
      {
        name: 'Dövlət Kəşfiyyatının Lenti Gizlətməsi',
        likelihood: 'Orta',
        description: 'FTB və ya gizli xidmət tərəfindən rəsmi versiyanı təkzib edən sübutların arxivlərdə gizlədilməsi.'
      }
    ],
    sources: [
      { title: 'Warren Commission Report on the Assassination of President Kennedy', author: 'President’s Commission on the Assassination of President Kennedy', publisher: 'U.S. Government Printing Office', year: '1964', type: 'government' },
      { title: 'Pictures of the Pain: Photography and the Assassination of President John F. Kennedy', author: 'Richard B. Trask', publisher: 'Yeoman Press', year: '1994', type: 'book' }
    ],
    relatedArticleSlugs: ['zodyak-qatili', 'db-cooper-teyyare-qacirisi', 'somerton-adami']
  },
  {
    id: 'exp-005',
    title: 'Taos Uğultusu — Nyu-Meksiko Akustik Tapmacası',
    originalName: 'The Taos Hum (Acoustic Mystery of New Mexico)',
    slug: 'taos-hum-akustik-anomaliya',
    description: 'ABŞ-ın Nyu-Meksiko ştatındakı Taos vadisində sakinlərin 2%-nin eşitdiyi, kəskin baş ağrısı və yuxusuzluq yaradan, Konqres səviyyəsində Los-Alamos laboratoriyası tərəfindən araşdırılmış 30-80 Hz aşağı tezlikli səs.',
    category: 'sirli-hadiseler',
    subcategory: 'Akustik anomaliyalar və biofizika',
    tags: ['Taos Hum', 'Nyu-Meksiko', 'İnfrasəs', 'Akustika', 'Tinnitus', 'Otoakustik emissiya', 'Los Alamos'],
    date: '1991 – Müasir dövr',
    location: 'Taos, Nyu-Meksiko, ABŞ',
    coordinates: '36°24′N 105°34′W',
    status: 'Akustik, geofiziki və neyrobioloji tədqiqat obyekti',
    theoriesCount: '4 əsas elmi nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Taos vadisinin səhra landşaftı və geoloji relyefi.',
    readingTime: 9,
    views: 32800,
    trendingScore: 79,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Fizika və Neyrobiologiya Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. 1991: Taos Şəhərindəki Kütləvi Şikayətlər' },
      { id: 'los-alamos-tedqiqati', title: '2. Los-Alamos və Nyu-Meksiko Universitetinin 1993-cü il Tədqiqatı' },
      { id: 'akustik-paradoks', title: '3. Niyə Mikrofonlar Tutmur? Akustik Paradoks' },
      { id: 'otoakustik-ve-tektonika', title: '4. İzahlar: Spontan Otoakustik Emissiya və Tektonik Rezonans' },
      { id: 'menbeler', title: '5. Elmi Hesabatlar' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: '1991: Taos Şəhərindəki Kütləvi Şikayətlər',
        content: `1991-ci ilin yazında Nyu-Meksiko ştatının tarixi Taos qəsəbəsində yaşayan onlarla sakin yerli səhiyyə idarəsinə və bələdiyyəyə müraciət edərək gecələr yuxuya getməyə imkan verməyən boğuq, monoton, uzaqda işləyən dizel mühərrikini xatırladan səs eşitdiklərini bildirdilər.

Şikayətçilər baş ağrısı, qulaqlarda təzyiq, ürəkbulanma, burun qanaması və kəskin əsəbilikdən əziyyət çəkirdilər. Maraqlısı odur ki, qəsəbənin bütün əhalisi deyil, təxminən hər 50 nəfərdən biri (əhalinin 2%-i) bu səsi daimi olaraq eşidirdi.`,
        badge: 'fact',
        badgeText: 'Sənədləşdirilmiş Şikayətlər'
      },
      {
        id: 'los-alamos-tedqiqati',
        title: 'Los-Alamos və Nyu-Meksiko Universitetinin 1993-cü il Tədqiqatı',
        content: `1993-cü ildə Nyu-Meksiko senatorları Pete Domenici və Jeff Bingamanın tələbi ilə ABŞ Konqresi rəsmi elmi araşdırma maliyyələşdirdi. Tədqiqat qrupuna Los-Alamos Milli Laboratoriyası, Sandia Milli Laboratoriyası və Nyu-Meksiko Universitetinin mühəndis və akustik alimləri daxil edildi (rəhbər: professor Co Mallins).

Alimlər Taos qəsəbəsində və ətraf səhrada ən həssas seysmik sensorlar, 0.1 Hz-dən 20.000 Hz-ə qədər həssas mikrofonlar və elektromaqnit qəbulediciləri quraşdırdılar. Lakin cihazlar ətraf mühitdə heç bir kənar anomal səs aşkar edə bilmədi.`,
        badge: 'fact',
        badgeText: 'Konqres və Laboratoriya Hesabatı'
      },
      {
        id: 'akustik-paradoks',
        title: 'Niyə Mikrofonlar Tutmur? Akustik Paradoks',
        content: `Laboratoriya testləri zamanı səsi eşidən "həssas dinləyicilər" xüsusi səs keçirməyən akustik izolyasiya otaqlarına yerləşdirildi. Təəccüblü şəkildə, otaq xarici səslərdən 100% təcrid olunduğu halda, iştirakçılar uğultunun daha da gücləndiyini bildirdilər. 

Səsin qulaqlıq taxdıqda kəsilməməsi sübut etdi ki, bu fenomen ənənəvi hava dalğaları vasitəsilə deyil, birbaşa kəllə sümüyü və daxili qulaq reseptorları səviyyəsində yaranır.`,
        badge: 'fact',
        badgeText: 'Eksperimental Nəticə'
      },
      {
        id: 'otoakustik-ve-tektonika',
        title: 'İzahlar: Spontan Otoakustik Emissiya və Tektonik Rezonans',
        content: `Müasir tibb və geofizika iki əsas elmi model irəli sürür:
1. Spontan Otoakustik Emissiya (SOAE): Bəzi fərdlərin daxili qulağındakı mikroskopik mexaniki hüceyrələrin öz-özünə zəif vibrasiya generasiya etməsi və beynin bu daxili küyü xarici mühit səsi kimi şərh etməsi.
2. Rio-Qrande Rifti Tektonik Titrəyişləri: Taos şəhəri Rio-Qrande tektonik çatının üzərində yerləşir. Dərin süxurların hərəkətinin yaratdığı aşağı tezlikli infrahəsəs vibrasiyaları həssas insanlarda kəllə rezonansı yarada bilər.`,
        badge: 'theory',
        badgeText: 'Elmi Modellər'
      }
    ],
    keyFacts: [
      { label: 'Eşidənlər Nisbəti', value: 'Taos əhalisinin ~2%-i', status: 'verified_fact' },
      { label: 'Tədqiqat ili', value: '1993 (Los Alamos & Sandia & UNM)', status: 'verified_fact' },
      { label: 'Ölçülən Tezlik', value: '30 – 80 Hz diapazonu', status: 'verified_fact' },
      { label: 'Əsas Elmi İzah', value: 'Daxili qulaq SOAE və ya Geotektonik mikro-vibrasiya', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Taos Hum: Acoustic and Psychoacoustic Investigations', author: 'Mullins, J., Kelly, J., et al.', publisher: 'University of New Mexico & Los Alamos National Lab', year: '1995', type: 'academic' },
      { title: 'Infrasound and Low Frequency Noise: Physiological Mechanisms', publisher: 'Acoustics Today', year: '2016', type: 'academic' }
    ],
    relatedArticleSlugs: ['the-hum-sirli-ugultu', 'bloop-namelum-ses', 'skinwalker-ranch-yuta']
  },
  {
    id: 'exp-006',
    title: 'Bélmez Üzləri — Əndəlüs Evindəki Sirli Şəkillər',
    originalName: 'The Faces of Bélmez (Caras de Bélmez)',
    slug: 'belmez-uzleri-andalusia-sirri',
    description: '1971-ci ildə İspaniyanın Belmez kəndindəki evin beton döşəməsində öz-özünə peyda olan, silindikdə və beton yeniləndikdə yenidən formalaşan kədərli insan üzləri, kimyəvi analizlər və orta əsr qəbiristanlığı kəşfi.',
    category: 'paranormal',
    subcategory: 'Paranormal vizual anomaliyalar',
    tags: ['Belmez', 'İspaniya', '1971', 'Beton üzlər', 'Paredoliya', 'Maria Gomez', 'Xaen', 'Gümüş Nitrat'],
    date: '1971 – 2004',
    location: 'Bélmez de la Moraleda, Xaen, Əndəlüs, İspaniya',
    coordinates: '37°43′N 3°22′W',
    status: 'Parapsixoloji iddia, kimyəvi analiz və tarixi qazıntı obyekti',
    theoriesCount: '3 əsas elmi və parapsixoloji nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Beton və daş səthlərdə yaranan qədim vizual formalar və kədərli üz siluetləri.',
    readingTime: 8,
    views: 34100,
    trendingScore: 79,
    factStatus: 'unverified_claim',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Paranormal Tədqiqatlar Şöbəsi',
    tableOfContents: [
      { id: 'ilk-peyda-olma', title: '1. 1971: Maria Qomez və Mətbəx Döşəməsindəki Üz' },
      { id: 'qazintilar-ve-qebiristanliq', title: '2. Evin Altında 13-cü Əsr Qəbiristanlığının Aşkar Edilməsi' },
      { id: 'kimyevi-tedqiqatlar', title: '3. Kimyəvi Tədqiqatlar: Gümüş Nitrat və ya Yağ Turşuları?' },
      { id: 'paredoliya-ve-skeptisizm', title: '4. Skeptik Baxış və İnsan Beyninin Paredoliyası' },
      { id: 'menbeler', title: '5. Arxiv Sənədləri' }
    ],
    sections: [
      {
        id: 'ilk-peyda-olma',
        title: '1971: Maria Qomez və Mətbəx Döşəməsindəki Üz',
        content: `1971-ci ilin avqustunda İspaniyanın cənubundakı kiçik Belmez de la Moraleda kəndində (Xaen əyaləti) Maria Qomez Kamara adlı qadın mətbəxinin sement döşəməsində qəribə bir ləkə gördü. Günlər keçdikcə bu ləkə kədərli və əzab çəkən bir kişinin aydın üz cizgilərinə çevrildi.

Qorxuya düşən həyat yoldaşı Xuan Pereyra və oğlu baltadan istifadə edərək sementi darmadağın etdilər və döşəməyə yeni beton qatı tökdülər. Lakin bir həftə sonra eyni yerdə yeni bir üz ("La Picarona") və ardınca daha bir neçə qadın, kişi və uşaq üzü peyda oldu. Üzlərin ifadəsi gün ərzində işıqdan və rütubətdən asılı olaraq dəyişirdi.`,
        badge: 'claim',
        badgeText: 'Şahid Qeydləri'
      },
      {
        id: 'qazintilar-ve-qebiristanliq',
        title: 'Evin Altında 13-cü Əsr Qəbiristanlığının Aşkar Edilməsi',
        content: `Hadisə bütün İspaniya mediasını ayağa qaldırdı. Yerli bələdiyyənin qərarı ilə evin mətbəx döşəməsi 3 metr dərinliyə qədər qazıldı.

Qazıntılar zamanı mətbəxin düz altında 13-cü əsrə — Rekonkista və orta əsr İspaniyasına aid kütləvi qəbiristanlıq aşkar edildi. Torpaqdan kəllə sümükləri və skeletlər çıxarılaraq yerli qəbiristanlıqda yenidən dəfn edildi və mətbəx döşəməsi yenidən sementləndi. Lakin bir neçə aydan sonra yeni üzlər ("El Pelao", "El Fraile") yenidən sementin üzərində görünməyə başladı.`,
        badge: 'fact',
        badgeText: 'Arxeoloji Qazıntı Faktı'
      },
      {
        id: 'kimyevi-tedqiqatlar',
        title: 'Kimyəvi Tədqiqatlar: Gümüş Nitrat və ya Yağ Turşuları?',
        content: `İspaniyanın Sement və Tikinti İnstitutunun (ICET) mütəxəssisləri döşəmədən nümunələr götürərək spektroqrafik və kimyəvi analizlər apardılar.

Analizlər göstərdi ki, bəzi ləkələrdə gümüş nitrat (işıq düşdükdə qaralan fotoqrafik kimyəvi maddə) və sirkə turşusu izləri vardır. Bəzi kimyaçılar iddia etdilər ki, üzlər kimyəvi maddələrin döşəməyə sürtülməsi ilə süni yaradılıb. Digər müstəqil parapsixoloqlar (Xerman de Arqumosa) isə iddia edirdilər ki, üzlər sementin daxili kristallaşma strukturu ilə bütövdür və xarici boya izi daşımır.`,
        badge: 'fact',
        badgeText: 'Laboratoriya Analizi'
      },
      {
        id: 'paredoliya-ve-skeptisizm',
        title: 'Skeptik Baxış və İnsan Beyninin Paredoliyası',
        content: `Neyropsixoloqlar qeyd edirlər ki, insan beyninin Fuzi-forma sahəsi (FFA) təsadüfi qeyri-bərabər ləkələrdə (qayalar, buludlar, divarlar) dərhal insan üzü axtarmağa proqramlaşdırılıb (Paredoliya effekti). 

Maria Qomez 2004-cü ildə 85 yaşında vəfat etdikdən sonra evin turizm kommersiyasına çevrilməsi və yeni üzlərin daha zəif formalaşması hadisənin qismən saxtakarlıq və turizm gəliri məqsədilə şişirdildiyi şübhələrini gücləndirdi.`,
        badge: 'theory',
        badgeText: 'Koqnitiv Elmi Baxış'
      }
    ],
    keyFacts: [
      { label: 'İlk hadisə', value: 'Avqust 1971 (Maria Gómez Cámara)', status: 'verified_fact' },
      { label: 'Məkan', value: 'Bélmez de la Moraleda, Xaen, İspaniya', status: 'verified_fact' },
      { label: 'Arxeologiya', value: 'Evin altında 13-cü əsr orta əsr qəbirləri tapılıb', status: 'verified_fact' },
      { label: 'Əsas Elmi İzah', value: 'Kimyəvi oksidləşmə (gümüş nitrat) və Paredoliya', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Las Caras de Bélmez: Análisis Científico e Histórico', author: 'Argumosa, G. & Ramos, J.', publisher: 'Sociedad Española de Parapsicología', year: '1974', type: 'book' },
      { title: 'The Bélmez Faces: Chemical and Psychoacoustic Analysis', publisher: 'Journal of the Society for Psychical Research', year: '1993', type: 'academic' }
    ],
    relatedArticleSlugs: ['enfield-poltergeist-hadisesi', 'poveglia-adasi', 'sedlec-ossuary']
  },
  {
    id: 'exp-007',
    title: 'Area 51 və S-4 — Qroom Leyk Məxfi Hərbi Aviasiya Arxivi',
    originalName: 'Area 51 & Groom Lake Test Facility (Nevada)',
    slug: 'area-51-ve-s-4-bazasi',
    description: 'Nevada səhrasındakı ultra-məxfi hərbi bazanın U-2, SR-71 Blackbird, A-12 Oxcart və F-117 Nighthawk gizli stels aviasiya sınaqları, Bob Lazar iddiaları və 2013-cü ildə MKİ tərəfindən rəsmi deklassifikasiya edilməsi.',
    category: 'sirli-hadiseler',
    subcategory: 'Məxfi hərbi bazalar və deklassifikasiya olunmuş sirlər',
    tags: ['Area 51', 'Nevada', 'Groom Lake', 'MKİ', 'Bob Lazar', 'Stealth', 'Deklassifikasiya', 'SR-71', 'F-117', 'U-2'],
    date: '1955 – Müasir dövr',
    location: 'Groom Lake, Nevada, ABŞ',
    coordinates: '37°14′06″N 115°48′40″W',
    status: 'ABŞ Hərbi Hava Qüvvələrinin aktiv yüksək təhlükəsizlikli sınaq poliqonu (NTTR)',
    theoriesCount: '4 əsas hərbi və texnoloji nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Nevada səhrasında yerləşən yüksək mühafizəli məhdud zona və Qroom Leyk duzlu gölü.',
    readingTime: 11,
    views: 58600,
    trendingScore: 96,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Hərbi Kəşfiyyat Arxivi Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. 1955: "Cənnət Rançosu" və U-2 Casus Təyyarəsi' },
      { id: 'stels-texnologiyasi', title: '2. Qara Layihələr: SR-71 Blackbird və F-117 Nighthawk' },
      { id: 'bob-lazar-iddialari', title: '3. Bob Lazar, S-4 Bazası və Element 115 Əfsanəsi' },
      { id: 'mki-2013-deklassifikasiyasi', title: '4. 2013-cü il MKİ Rəsmi Deklassifikasiyası' },
      { id: 'menbeler', title: '5. Rəsmi Hərbi Sənədlər' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: '1955: "Cənnət Rançosu" və U-2 Casus Təyyarəsi',
        content: `1955-ci ilin aprelində Mərkəzi Kəşfiyyat İdarəsi (MKİ), ABŞ Hərbi Hava Qüvvələri və Lockheed şirkətinin əfsanəvi mühəndisi Kelli Conson Nevada səhrasında, Las-Veqasdan 130 km şimal-qərbdə yerləşən Qroom Leyk duzlu quru göl yatağını kəşfiyyat təyyarələrinin sınağı üçün ideal məkan seçdilər.

Əraziyə hərbi xəritələrdə "Area 51" (Zona 51) və layihə işçilərini cəlb etmək üçün "Paradise Ranch" (Cənnət Rançosu) adı verildi. İlk məqsəd Sovet İttifaqının üzərindən 21.000 metr yüksəklikdə uçaraq sovet radar və zenit raketlərindən yayına bilən ultra-yüksəklikli U-2 casus təyyarəsini gizli şəkildə sınaqdan keçirmək idi. Onilliklər boyu ABŞ hökuməti bazanın mövcudluğunu rəsmi olaraq təkzib etdi.`,
        badge: 'fact',
        badgeText: 'MKİ Tarixi Arxivi'
      },
      {
        id: 'stels-texnologiyasi',
        title: 'Qara Layihələr: SR-71 Blackbird və F-117 Nighthawk',
        content: `Area 51 Soyuq Müharibənin ən qabaqcıl "Qara Layihələri"nin (Black Projects) doğulduğu mərkəz idi:
• A-12 Oxcart və SR-71 Blackbird: Səsdən 3.3 dəfə sürətli (Mach 3.3 / 3500 km/saat) uçan, titan korpuslu əfsanəvi kəşfiyyat təyyarəsi 1962-ci ildə ilk uçuşunu burada etmişdir.
• "Have Blue" və F-117 Nighthawk: Dünyanın ilk radara görünməz (stels) üçbucaqlı qırıcı-bombardmançısı 1977-ci ildən etibarən yalnız gecə saatlarında Area 51 üzərində sınaqdan çıxarılmışdır.
• Sovet MiQ Qırıcıları ("Constant Peg"): Ərəb-İsrail müharibələrində ələ keçirilmiş sovet MiQ-17, MiQ-21 və MiQ-23 təyyarələri bazada gizli saxlanılır və amerikalı pilotlar onlarla hava döyüşü təlimləri keçirdilər.`,
        badge: 'fact',
        badgeText: 'Deklassifikasiya Olunmuş Hərbi Sirlər'
      },
      {
        id: 'bob-lazar-iddialari',
        title: 'Bob Lazar, S-4 Bazası və Element 115 Əfsanəsi',
        content: `1989-cu ilin noyabrında fizik olduğunu iddia edən Bob Lazar Las-Veqas televiziyasında çıxış edərək Area 51-dən 20 km cənubda yerləşən "S-4" adlı yeraltı bazada qəzaya uğramış 9 ədəd yadplanetli diskinin tərs mühəndisliyi (reverse engineering) üzərində işlədiyini bəyan etdi.

Lazar iddia edirdi ki, bu gəmilər "Element 115" (Moskovium) maddəsindən istifadə edərək qravitasiya dalğalarını bükürdü. Hərçənd ki, 2003-cü ildə rus alimləri Element 115-i (Moskovium) sintez etsələr də, maddə saniyənin mində biri qədər yaşayır və heç bir stabil qravitasiya xassəsinə malik deyil. Lazarın təhsil və iş qeydlərinin təsdiqlənməməsi onun iddialarını ufoloji folklor səviyyəsində saxlayır.`,
        badge: 'claim',
        badgeText: 'Mübahisəli İctimai İddia'
      },
      {
        id: 'mki-2013-deklassifikasiyasi',
        title: '2013-cü il MKİ Rəsmi Deklassifikasiyası',
        content: `2013-cü ilin avqustunda Corc Vaşinqton Universitetinin Milli Təhlükəsizlik Arxivi tərəfindən Məlumat Azadlığı Aktı (FOIA) çərçivəsində qaldırılan sorğu nəticəsində MKİ 400 səhifəlik "The Secret History of the U-2 and Area 51" adlı sənədi rəsmi şəkildə ictimaiyyətə açıqladı.

Hesabatda ilk dəfə rəsmi olaraq "Area 51" adı və xəritəsi təsdiqləndi. MKİ izah etdi ki, 1950-1980-ci illərdə Nevada səhrasında qeydə alınan "UFO və uçan boşqab" müşahidələrinin yarıdan çoxu məhz 20.000 metr hündürlükdə günəş şüalarını əks etdirən gümüşü U-2 və qara titan SR-71 təyyarələrinin məxfi uçuşları idi. Günümüzdə baza B-21 Raider və pilotsuz 6-cı nəsil hərbi aparatların sınaq mərkəzi kimi fəaliyyətini davam etdirir.`,
        badge: 'fact',
        badgeText: 'CIA Rəsmi Deklassifikasiya Sənədi'
      }
    ],
    keyFacts: [
      { label: 'Rəsmi Ad', value: 'Nevada Test and Training Range (NTTR) / Detachment 3', status: 'verified_fact' },
      { label: 'Quruluş İli', value: 'Aprel 1955 (MKİ & Lockheed)', status: 'verified_fact' },
      { label: 'Həqiqi Layihələr', value: 'U-2, A-12 Oxcart, SR-71 Blackbird, F-117 Stealth, B-2', status: 'verified_fact' },
      { label: 'Rəsmi Deklassifikasiya', value: 'Avqust 2013 (MKİ rəsmi hesabatı)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Secret History of the U-2 and Area 51', author: 'Pedlow, G. & Welzenbach, D.', publisher: 'Central Intelligence Agency (CIA Historical Review Program)', year: '2013', type: 'government' },
      { title: 'Area 51: An Uncensored History of America’s Top Secret Military Base', author: 'Annie Jacobsen', publisher: 'Little, Brown and Company', year: '2011', type: 'book' }
    ],
    relatedArticleSlugs: ['roswell-ufo-hadisesi', 'wow-siqnali', 'oumuamua-namelum-obyekt']
  }
];
