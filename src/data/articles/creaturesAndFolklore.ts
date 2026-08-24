import { Article } from '../../types';

export const creaturesAndFolkloreArticles: Article[] = [
  {
    id: 'art-028',
    title: 'Mariana çökəkliyi və dərin dəniz anomaliləri',
    originalName: 'Mariana Trench and Abyssal Life Anomalies',
    slug: 'mariana-cökekliyi-derin-deniz',
    description: 'Dünya okeanının 11.000 metr dərinliyindəki zülmət qaranlıq, 1000 atmosfer təzyiq altında yaşayan qorxunc, şəffaf canlılar və hidrotermal bacaların sirli ekosistemi.',
    category: 'qeribe-canlilar',
    subcategory: 'Dərin dəniz canlıları və abissal okeanologiya',
    tags: ['Mariana', '11000 metr', 'Abissal zona', 'Çallencer dərinliyi', 'Təzyiq', 'Biolüminesensiya', 'Ekstremofil'],
    date: '1960 (Trieste) – Müasir batiskaf dalışları',
    location: 'Sakit okean, Mariana arxipelaqı yaxınlığı',
    coordinates: '11°21′N 142°12′E',
    status: 'Təsdiqlənmiş elmi okeanoqrafiya və dəniz biologiyası faktları',
    theoriesCount: 'Ekstremofil biologiya modelləri',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Okeanın afotik (işığın çatmadığı) zonasında biolüminesensiya yayan dəniz canlısı.',
    readingTime: 9,
    views: 48400,
    trendingScore: 92,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Dəniz Biologiyası və Okeanologiya Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Giriş: Planetin Ən Dərin Qaranlıq Uçurumu' },
      { id: 'ekstremal-muhit', title: '2. 1072 Atmosfer Təzyiq və Mütləq Qaranlıq Zonası' },
      { id: 'tarixi-dalislar', title: '3. Tarixi Dalışlar: Trieste (1960) və Ceyms Kemeron (2012)' },
      { id: 'anomal-canlilar', title: '4. Aşkar Edilən Ekstremofillər: Mariana İlbiz-balığı və Nəhəng Ksenofioforlar' },
      { id: 'menbeler', title: '5. Okeanoqrafik Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Giriş: Planetin Ən Dərin Qaranlıq Uçurumu',
        content: `Mariana çökəkliyi — Sakit okeanın qərbində, Mariana adalarının şərqində yerləşən və Yerin məlum olan ən dərin okean xəndəyidir. Hilal şəklində olan bu geoloji yarığın uzunluğu təxminən 2.550 kilometr, orta eni isə 69 kilometrdir.

Çökəkliyin ən dərin nöqtəsi "Challenger Deep" (Çellencer Dərinliyi) adlanır və dəqiq batimetrik ölçmələrə görə dəniz səviyyəsindən 10.994 ± 40 metr aşağıdadır. Əgər dünyanın ən hündür zirvəsi olan Everest dağını (8.848 m) bu çuxura yerləşdirsək, onun zirvəsi üzərində hələ 2 kilometrdən çox su qatı qalardı.`,
        badge: 'fact',
        badgeText: 'NOAA Okeanoqrafiya Məlumatı'
      },
      {
        id: 'ekstremal-muhit',
        title: '1072 Atmosfer Təzyiq və Mütləq Qaranlıq Zonası',
        content: `1000 metrdən sonra okeana günəş işığının hətta 1 fotonu belə çatmır (afotik və hadal zonası). Suyun temperaturu 1°C ilə 4°C arasında dəyişir.

Ən dəhşətli amil hidrostatik təzyiqdir: 11 kilometr dərinlikdə suyun təzyiqi 108.6 meqapaskala (təxminən 1072 atmosfer) çatır. Bu, hər kvadrat santimetrə 1.1 tondan çox ağırlıq deməkdir — sanki bir insanın baş barmağının üzərində böyük bir minik avtomobili dayanmışdır. Adi insan orqanizmi bu təzyiqdə dərhal əzilərək parçalanar.`,
        badge: 'fact',
        badgeText: 'Fiziki Okeanologiya Faktı'
      },
      {
        id: 'tarixi-dalislar',
        title: 'Tarixi Dalışlar: Trieste (1960) və Ceyms Kemeron (2012)',
        content: `İnsanlıq bu dərinliyə ilk dəfə 23 yanvar 1960-cı ildə İsveçrə mühəndisi Jak Pikkar və ABŞ Hərbi Dəniz Qüvvələrinin leytenantı Don Uolş ilə "Trieste" batiskafında çatmışdır.

2012-ci ildə məşhur kinorejissor Ceyms Kemeron "Deepsea Challenger" xüsusi sualtı qayığı ilə təkbaşına Çellencer Dərinliyinə enərək oradan ilk yüksək keyfiyyətli 3D video kadrlar və torpaq nümunələri gətirmişdir. 2019-cu ildə Viktor Veskovo "DSV Limiting Factor" ilə 10.928 metrə enərək rekord qırmış və təəssüf ki, çökəkliyin dibində plastik tullantı da aşkar etmişdir.`,
        badge: 'fact',
        badgeText: 'Tarixi Ekspedisiyalar'
      },
      {
        id: 'anomal-canlilar',
        title: 'Aşkar Edilən Ekstremofillər: Mariana İlbiz-balığı və Nəhəng Ksenofioforlar',
        content: `Alimlər uzun müddət bu təzyiqdə heç bir onurğalı heyvanın yaşaya bilməyəcəyini düşünürdülər. Lakin Mariana çökəkliyində inanılmaz canlılar aşkar edildi:
1. Pseudoliparis swirei (Mariana Snailfish / İlbiz-balıq): 8000 metr dərinlikdə yaşayan, sümükləri bərkiməyən, daxili orqanları xüsusi TMAO (Trimetilamin N-oksid) zülalı ilə qorunan tamamilə şəffaf balıq növü.
2. Nəhəng Ksenofioforlar (Xenophyophores): 10-20 santimetr ölçüsünə çatan, tək bir hüceyrədən ibarət nəhəng foraminifer amöbləri.
3. Kükürd əsaslı xemosintez bakteriyaları: Günəş işığı olmadan, dərinlikdəki hidrotermal mənbələrdən çıxan kükürdlə qidalanan unikal canlı aləmi.`,
        badge: 'fact',
        badgeText: 'Dəniz Biologiyası Kəşfi'
      }
    ],
    keyFacts: [
      { label: 'Maksimum Dərinlik', value: '10.994 ± 40 metr (Challenger Deep)', status: 'verified_fact' },
      { label: 'Dəniz Dibi Təzyiqi', value: '1.086 bar (1072 atmosfer)', status: 'verified_fact' },
      { label: 'İlk İnsanlı Dalış', value: '23 Yanvar 1960 (Trieste - Piccard & Walsh)', status: 'verified_fact' },
      { label: 'Dərinlikdəki Onurğalı Canlı', value: 'Pseudoliparis swirei (Mariana ilbiz-balığı, 8.178 m)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Mariana Trench: Nature’s Deepest Chasm', author: 'Jamieson, A.', publisher: 'Cambridge University Press', year: '2015', type: 'academic' },
      { title: 'Pseudoliparis swirei sp. nov.: A new species of hadal snailfish from the Mariana Trench', author: 'Gerringer, M. E. et al.', publisher: 'Zootaxa', year: '2017', type: 'academic' }
    ],
    relatedArticleSlugs: ['bloop-namelum-ses', 'cordyceps-zombi-gobelek', 'neheng-deniz-qulyabanisi']
  },
  {
    id: 'art-029',
    title: 'Bloop — Sakit okeanın naməlum səsi',
    originalName: 'The Bloop (1997 Pacific Hydrophone Acoustic Signal)',
    slug: 'bloop-namelum-ses',
    description: '1997-ci ildə Sakit okeanın cənubunda hidrofonlar tərəfindən qeydə alınan, 5000 km məsafədən eşidilən və illərlə nəhəng dəniz bədheybəti sanılan ifrat güclü ultra-aşağı tezlikli hidroakustik anomaliya.',
    category: 'sirli-hadiseler',
    subcategory: 'Naməlum hidroakustik siqnallar',
    tags: ['Bloop', '1997', 'NOAA', 'Hidrofon', 'Aysberq', 'Okeanologiya', 'SOSUS', 'Krioseysmik'],
    date: 'Yay 1997',
    location: 'Cənubi Sakit okean (Antarktida və Çili sahilləri arası)',
    coordinates: '50°S 100°W',
    status: '2012-ci ildə NOAA tərəfindən aysberq parçalanması (icequake) kimi təsdiqlənib',
    theoriesCount: 'Hidroakustik elmi təhlil',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Antarktida sahillərində okeana parçalanan nəhəng aysberqlər və buz zərbələri.',
    readingTime: 8,
    views: 39000,
    trendingScore: 84,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Hidroakustika və Okeanologiya Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Yay 1997: Sakit Okeanın Dərinliklərindən Gələn Zərbə' },
      { id: 'sosus-ve-qeydiyyat', title: '2. Soyuq Müharibənin SOSUS Şəbəkəsi və 5000 km Məsafə' },
      { id: 'biyoloji-vs-geoloji', title: '3. Nəhəng Canlı İddiaları: Göy Balinadan 10 Dəfə Güclü Səs' },
      { id: 'noaa-son-qerar', title: '4. NOAA-nın 2012-ci il Qəti Konsensusu: Antarktida Buz Zəlzələsi' },
      { id: 'menbeler', title: '5. Elmi Hesabatlar' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Yay 1997: Sakit Okeanın Dərinliklərindən Gələn Zərbə',
        content: `1997-ci ilin yayında ABŞ Milli Okean və Atmosfer Administrasiyası (NOAA) Sakit okeanın cənub hissəsində (təxminən 50°C 100°Q koordinatlarında) fövqəladə güclü, ultra-aşağı tezlikli sualtı akustik siqnal qeydə aldı.

Siqnal təxminən 1 dəqiqə ərzində tezliyini sürətlə artıraraq "bloop" səsinə bənzər kəskin yüksəliş nümayiş etdirdi. Bu səs okeanın 5.000 kilometrdən çox məsafədə yerləşən bir neçə müstəqil hidrofon sensoru tərəfindən eyni anda və aydın şəkildə qəbul edildi.`,
        badge: 'fact',
        badgeText: 'NOAA PMEL Akustik Məlumatı'
      },
      {
        id: 'sosus-ve-qeydiyyat',
        title: 'Soyuq Müharibənin SOSUS Şəbəkəsi və 5000 km Məsafə',
        content: `Səs ABŞ Hərbi Dəniz Qüvvələrinin Soyuq Müharibə dövründə Sovet sualtı qayıqlarını izləmək üçün okeanın dibinə döşədiyi "SOSUS" (Sound Surveillance System) hidrofon şəbəkəsi vasitəsilə tutulmuşdu.

Siqnalın gücü o qədər nəhəng idi ki, heç bir məlum hərbi sualtı qayıq, dənizaltı partlayış və ya məlum su canlısı belə bir akustik enerji yarada bilməzdi.`,
        badge: 'fact',
        badgeText: 'Hərbi Hidrofon Məlumatı'
      },
      {
        id: 'biyoloji-vs-geoloji',
        title: 'Nəhəng Canlı İddiaları: Göy Balinadan 10 Dəfə Güclü Səs',
        content: `İlkin spekulyasiyalar zamanı bəzi bioloqlar səsin orqanik dalğa profilinə malik olduğunu bildirdilər. Yer kürəsində ən yüksək səs çıxaran canlı olan göy balina (Balaenoptera musculus) 188 desibel gücündə səs yayır və bu səs 1000 km-ə çatır. Lakin Bloop səsinin 5000 km-dən eşidilməsi üçün canlı göy balinadan ən azı bir neçə dəfə böyük olmalı idi. Bu, kriptozoologiyada nəhəng naməlum dəniz bədheybəti (Kraken və ya Ktulxu) iddialarını alovlandırdı.`,
        badge: 'claim',
        badgeText: 'Tarixi Spekulyasiya'
      },
      {
        id: 'noaa-son-qerar',
        title: 'NOAA-nın 2012-ci il Qəti Konsensusu: Antarktida Buz Zəlzələsi',
        content: `2005-2012-ci illərdə NOAA Antarktida yaxınlığında quraşdırdığı yeni nəsil kriogen hidrofonlar vasitəsilə onlarla oxşar akustik siqnal qeydə aldı.

2012-ci ildə rəsmi olaraq elan edildi ki, "Bloop" tamamilə qeyri-bioloji mənşəlidir. Səs Antarktida qitəsindəki nəhəng aysberqlərin (məsələn, A53a aysberqi) ana buzlaqdan çatlayaraq qopması, dəniz dibində sürünməsi və daxili buz qırılmaları (icequake / buz zəlzələsi) zamanı yaranan güclü seysmik-akustik rezonansdır.`,
        badge: 'fact',
        badgeText: 'Rəsmi Elmi Nəticə'
      }
    ],
    keyFacts: [
      { label: 'Qeydiyyat Tarixi', value: 'Yay 1997 (Sakit okean)', status: 'verified_fact' },
      { label: 'Eşidilmə Radiusu', value: '5.000+ kilometr', status: 'verified_fact' },
      { label: 'Siqnal Müddəti', value: 'Təxminən 1 dəqiqə', status: 'verified_fact' },
      { label: 'Rəsmi Elmi Təsdiq', value: 'Antarktida Aysberq Parçalanması (Krioseysmik Icequake)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Acoustic monitoring of icequakes in Antarctica', publisher: 'NOAA Pacific Marine Environmental Laboratory', year: '2012', type: 'government' },
      { title: 'Sounds in the Sea: Ocean acoustics and mysterious signals', author: 'Fox, C. G. et al.', publisher: 'Oceanography', year: '2001', type: 'academic' }
    ],
    relatedArticleSlugs: ['mariana-cökekliyi-derin-deniz', 'neheng-deniz-qulyabanisi', 'wow-siqnali']
  },
  {
    id: 'art-030',
    title: 'Cordyceps göbələyi və zombi parazitlər',
    originalName: 'Ophiocordyceps unilateralis (Zombie-ant fungus)',
    slug: 'cordyceps-zombi-gobelek',
    description: 'Qarışqaların beynini və əzələlərini ələ keçirərək onları ən yüksək budağa dırmaşmağa məcbur edən dəhşətli parazit həyat tərzi.',
    category: 'qeribe-canlilar',
    subcategory: 'Parazitlər',
    tags: ['Cordyceps', 'Parazit', 'Zombi qarışqa', 'Mikologiya', 'Tropik meşələr', 'Biologiya'],
    date: 'Müasir elmi mikologiya',
    location: 'Amazon və Cənub-Şərqi Asiya tropik meşələri',
    status: 'Təsdiqlənmiş bioloji fakt',
    theoriesCount: 'Bioloji mexanizm',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Qarışqanın baş nahiyəsindən cücərən Ophiocordyceps spor meyvəsi.',
    readingTime: 6,
    views: 37400,
    trendingScore: 89,
    factStatus: 'verified_fact',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Mikologiya və Parazitologiya',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'mexanizm', title: '2. Necə idarə edir? Əzələ zəbti' },
      { id: 'insan-tehlukesi', title: '3. İnsanlara keçə bilərmi? İmmunologiya' },
      { id: 'menbeler', title: '4. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Ophiocordyceps unilateralis — tropik yağış meşələrində qarışqaları yoluxduran xüsusi parazit göbələk növüdür. Spolar qarışqanın xitin qabığına düşdükdən sonra bədən daxilində çoxalaraq onun hərəkət sistemini tam nəzarət altına alır.',
        badge: 'fact',
        badgeText: 'Kembric Universiteti Biologiya Fakültəsi'
      },
      {
        id: 'mexanizm',
        title: 'Necə idarə edir? Əzələ zəbti',
        content: 'Son tədqiqatlar göstərir ki, göbələk qarışqanın beynini dağıtmır; əksinə, beyin ətrafındakı əzələ lifləri boyunca xüsusi bioaktiv kimyəvi maddələr buraxaraq qarışqanı günəş işığı və rütubətin ən optimal olduğu 25 sm hündürlükdəki yarpağın alt damarını çənələri ilə dişləməyə məcbur edir ("Ölüm dişləməsi"). Daha sonra qarışqanın başından göbələk gövdəsi çıxaraq yeni sporlar səpir.',
        badge: 'fact',
        badgeText: 'PNAS Mikrobiologiya Tədqiqatı'
      },
      {
        id: 'insan-tehlukesi',
        title: 'İnsanlara keçə bilərmi? İmmunologiya',
        content: 'Göbələk soyuqqanlı həşəratların bədən temperaturuna (20-25°C) uyğunlaşmışdır. İnsan bədəninin 37°C temperaturu və inkişaf etmiş immun sistemi göbələyin sporlarının insan toxumalarında inkişafının qarşısını tamamilə alır.',
        badge: 'fact',
        badgeText: 'Tibb və İmmunologiya Faktı'
      }
    ],
    keyFacts: [
      { label: 'Qurbanlar', value: 'Camponotus leonardi ağac qarışqaları', status: 'verified_fact' },
      { label: 'Ölüm hündürlüyü', value: 'Yerdən dəqiq 25 sm yuxarıda', status: 'verified_fact' },
      { label: 'İnsan üçün təhlükə', value: 'Sıfır (Bədən temperaturu baryeri)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Behavioral mechanisms of the zombie-ant fungus', author: 'Hughes, D. P. et al.', publisher: 'BMC Ecology', year: '2011', type: 'academic' }
    ],
    relatedArticleSlugs: ['mariana-cökekliyi-derin-deniz', 'neheng-deniz-qulyabanisi', 'yuxu-iflici-nevrologiyasi']
  },
  {
    id: 'art-031',
    title: 'Mothman — Pərvanə-adam əfsanəsi',
    originalName: 'The Mothman of Point Pleasant (1966–1967)',
    slug: 'mothman-pervane-adam',
    description: '1966-1967-ci illərdə Qərbi Virciniyanın Point Pleasant şəhərində 100-dən çox şahidin gördüyü qırmızı gözlü, 2 metr qanadlı varlıq və Silver Bridge körpüsünün çökməsi faciəsi.',
    category: 'efsaneler-mifler',
    subcategory: 'Kriptozoologiya və şəhər əfsanələri',
    tags: ['Mothman', '1966', 'Point Pleasant', 'Silver Bridge', 'Qərbi Virciniya', 'Kriptozoologiya', 'John Keel'],
    date: '1966 – 1967',
    location: 'Point Pleasant, Qərbi Virciniya, ABŞ',
    coordinates: '38°50′N 82°08′W',
    status: 'Regional folklor və sənədləşdirilmiş mühəndislik qəzası',
    theoriesCount: '3 əsas izah və nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Point Pleasant şəhərində ucaldılmış Mothman tunc heykəli.',
    readingTime: 8,
    views: 36100,
    trendingScore: 83,
    factStatus: 'unverified_claim',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Folklor və Kriptozoologiya Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. 15 Noyabr 1966: TNT Sahəsində İlk Qarşılaşma' },
      { id: 'musahideler-ve-panika', title: '2. 100-dən Çox Şahid və Qırmızı Parıldayan Gözlər' },
      { id: 'silver-bridge-felaketi', title: '3. 15 Dekabr 1967: Silver Bridge Fəlakəti və 46 Ölüm' },
      { id: 'elmi-izah-durna', title: '4. Elmi İzah: Kanada Durnası (Sandhill Crane) və Kütləvi İllüziya' },
      { id: 'menbeler', title: '5. Mənbələr və Hesabatlar' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: '15 Noyabr 1966: TNT Sahəsində İlk Qarşılaşma',
        content: `15 noyabr 1966-cı il tarixində Qərbi Virciniya ştatının Point Pleasant şəhərində iki gənc cütlük (Rocer və Linda Skarberri, Stiv və Meri Mallett) İkinci Dünya Müharibəsindən qalmış tərk edilmiş hərbi sursat fabriki (TNT Sahəsi) yaxınlığında avtomobillə hərəkət edərkən yol kənarında təxminən 2 metr hündürlüyündə, arxasında böyük qanadları olan və gözləri qırmızı işıq saçan boz bir məxluq gördüklərini bildirdilər.

Gənclərin sözlərinə görə, onlar qorxaraq maşını saatda 160 km sürətlə sürsələr də, məxluq qanadlarını çırpmadan avtomobilin üzərində asanlıqla uçaraq onları şəhər kənarına qədər təqib etmişdir.`,
        badge: 'claim',
        badgeText: 'Polis Protokol Qeydi'
      },
      {
        id: 'musahideler-ve-panika',
        title: '100-dən Çox Şahid və Qırmızı Parıldayan Gözlər',
        content: `Növbəti 13 ay ərzində Point Pleasant və ətraf qəsəbələrdə 100-dən çox yerli sakin oxşar varlığı gördüyünü iddia etdi. Şahidlərin təsvirləri heyrətamiz dərəcədə oxşar idi: başı birbaşa çiyinlərinə birləşmiş, heç bir boynu olmayan, sinəsində iki böyük qırmızı parıldayan göz olan və şaquli şəkildə havaya qalxa bilən qanadlı humanoid.

Hadisə yerli mətbuat tərəfindən "Mothman" (Pərvanə-adam) adlandırıldı və şəhərdə kütləvi həyəcan və silahlı könüllü patrolların yaranmasına səbəb oldu.`,
        badge: 'claim',
        badgeText: 'Dövri Mətbuat Arxivi'
      },
      {
        id: 'silver-bridge-felaketi',
        title: '15 Dekabr 1967: Silver Bridge Fəlakəti və 46 Ölüm',
        content: `15 dekabr 1967-ci ildə axşam saat 17:00 radələrində Point Pleasant ilə Ohayo ştatını birləşdirən "Silver Bridge" asma körpüsü pik saatda tıxac zamanı qəflətən Ohayo çayına çökdü. Nəticədə 31 avtomobil buzlu suya qərq oldu və 46 nəfər həlak oldu.

Şəhər əfsanəsinə görə, körpünün çökməsindən əvvəl Mothman körpünün qüllələrində görünmüşdü və o, fəlakət xəbərçisi idi. Bu faciədən dərhal sonra Mothman müşahidələri tamamilə dayandı.

Lakin ABŞ Nəqliyyat Təhlükəsizliyi Şurasının (NTSB) apardığı rəsmi mühəndislik araşdırması sübut etdi ki, 1928-ci ildə tikilmiş körpü müasir ağır yük avtomobillərinin ağırlığına tab gətirə bilməmiş və asma zəncirin tək bir həlqəsindəki 2.5 mm-lik dərin korroziya mikroçatı səbəbindən metal yorğunluğundan qırılmışdır.`,
        badge: 'fact',
        badgeText: 'NTSB Rəsmi İstintaq Hesabatı'
      },
      {
        id: 'elmi-izah-durna',
        title: 'Elmi İzah: Kanada Durnası (Sandhill Crane) və Kütləvi İllüziya',
        content: `Qərbi Virciniya Universitetinin biologiya professoru Robert Smit və ornitoloqlar qeyd edirlər ki, təsvir edilən məxluq miqrasiya zamanı bölgəyə gələn böyük Kanada durnası (Sandhill Crane / Grus canadensis) ola bilər. Bu quşun hündürlüyü 1.2 metrə, qanad açılışı 2 metrə çatır və gözlərinin ətrafında parlaq qırmızı ətli halqa var. Avtomobil faralarının işığı bu qırmızı dəriyə düşdükdə güclü parıltı effekti yaradır. Qaranlıq və qorxu şahidlərin təxəyyülündə adi quşu dəhşətli bədheybətə çevirmişdir.`,
        badge: 'theory',
        badgeText: 'Elmi Ornitoloji İzah'
      }
    ],
    keyFacts: [
      { label: 'Hadisə İlləri', value: '15 Noyabr 1966 – 15 Dekabr 1967', status: 'verified_fact' },
      { label: 'Körpü Fəlakəti', value: 'Silver Bridge çökməsi (46 nəfər həlak oldu)', status: 'verified_fact' },
      { label: 'Rəsmi Mühəndislik Səbəbi', value: 'Asma polad zəncirində metal korroziyası və yorğunluğu', status: 'verified_fact' },
      { label: 'Ən Ehtimal Olunan Bioloji İzah', value: 'Kanada Durnası (Sandhill crane) və gecə illüziyası', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Kanada Durnası və Kollektiv Panika',
        likelihood: 'Yüksək',
        description: '2 metrlik qanad açılışı və qırmızı göz halqaları olan durnanın avtomobil faralarında optik illüziyası.',
        scientificConsensus: 'Ornitoloqlar və skeptiklər tərəfindən qəbul edilən əsas elmi izah.'
      }
    ],
    sources: [
      { title: 'The Mothman Prophecies', author: 'John Keel', publisher: 'Saturday Review Press', year: '1975', type: 'book' },
      { title: 'Collapse of US 35 Highway Bridge: Official Report', publisher: 'National Transportation Safety Board (NTSB)', year: '1971', type: 'government' }
    ],
    relatedArticleSlugs: ['qara-gozlu-usaqlar', 'enfield-poltergeist-hadisesi', 'chupacabra-efsanesi']
  },
  {
    id: 'art-032',
    title: 'Göbəklitəpə — 12.000 illik sivilizasiya sirri',
    originalName: 'Göbekli Tepe (The Oldest Megalithic Sanctuary)',
    slug: 'gobeklitepe-itkin-sivilizasiyalar',
    description: 'İnsanlığın ilk məlum monumental məbəd kompleksi: ovçu-yığıcıların kənd təsərrüfatından və yazıdan min illər əvvəl qurduğu 16 tonluq T şəkilli daş sütunlar və sivilizasiya inqilabı.',
    category: 'sirli-hadiseler',
    subcategory: 'Qədim itkin sivilizasiyalar və meqalitik arxeologiya',
    tags: ['Göbəklitəpə', 'Şanlıurfa', 'E.ə. 9600', 'Arxeologiya', 'Klaus Schmidt', 'UNESCO', 'Meqalit', 'Neolit'],
    date: 'E.ə. 9600 – E.ə. 8000',
    location: 'Örencik kəndi, Şanlıurfa, Cənub-Şərqi Anadolu, Türkiyə',
    coordinates: '37°13′23″N 38°55′21″E',
    status: 'UNESCO Ümumdünya İrsi (Tarix dərsliklərini dəyişdirən arxeoloji kompleks)',
    theoriesCount: '3 əsas arxeoloji və antropologiya modeli',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Göbəklitəpədəki relyefli heyvan təsvirli və antropomorf T şəkilli monolit daşlar.',
    readingTime: 10,
    views: 44100,
    trendingScore: 90,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Arxeologiya və Qədim Tarix Şöbəsi',
    tableOfContents: [
      { id: 'haqqinda', title: '1. E.ə. 9600: Tarixin Yenidən Yazıldığı Gün' },
      { id: 'monolit-t-sutunlar', title: '2. 16 Tonluq T-Sütunlar və Heyvan Qabartmaları' },
      { id: 'tarixi-inqilab', title: '3. Tarixi İnqilab: Əvvəlcə Əkinçilik, yoxsa Din?' },
      { id: 'qesden-basdirilma', title: '4. Göbəklitəpənin Ən Böyük Sirri: Niyə Qəsdən Torpağa Basdırıldı?' },
      { id: 'menbeler', title: '5. Elmi Ədəbiyyat və UNESCO Arxivləri' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'E.ə. 9600: Tarixin Yenidən Yazıldığı Gün',
        content: `Şanlıurfa şəhərindən 18 kilometr şimal-şərqdə yerləşən Göbəklitəpə (Göbekli Tepe) — radiokarbon analizlərinə görə e.ə. 9600-cü illərə (təxminən 11.600 il əvvələ) aid olan, bəşəriyyətin inşa etdiyi ən qədim monumental ibadət kompleksidir.

Bu nəhəng arxeoloji möcüzə İngiltərədəki Stounhencdən (Stonehenge) 6.000 il, Misir Giza piramidalarından isə 7.000 il daha qədimdir. Göbəklitəpə kəşf olunana qədər tarixçilər hesab edirdilər ki, o dövrün insanları yalnız vəhşi heyvan ovlayan, gil qablar və ya metallar hazırlamağı bacarmayan primitiv köçəri ovçu-yığıcılar olublar.`,
        badge: 'fact',
        badgeText: 'Almaniya Arxeologiya İnstitutu (DAI)'
      },
      {
        id: 'monolit-t-sutunlar',
        title: '16 Tonluq T-Sütunlar və Heyvan Qabartmaları',
        content: `Kompleks diametri 20-30 metr olan dairəvi daş hasarlardan və onların mərkəzində ucaldılmış T şəkilli monolit əhəngdaşı sütunlardan ibarətdir. Sütunların hündürlüyü 5.5 metrə, çəkisi isə 10 ilə 16 tona çatır.

Bu sütunlar yaxınlıqdakı qaya karxanalarından yalnız daş və çaxmaqdaşı alətlərlə kəsilərək təpəyə daşınmışdır. Sütunların üzərində inanılmaz dərəcədə zərif 3D relyeflər həkk olunub: tülkülər, vəhşi qabanlar, şirlər, öküzlər, qutanlar, əqrəblər, ilanlar və başsız insan fiqurları. T sütununun özü isə boyunsuz və başsız insan bədənini (qollar və kəmər relyefləri ilə) təmsil edir.`,
        badge: 'fact',
        badgeText: 'Arxeoloji Struktur Tədqiqatı'
      },
      {
        id: 'tarixi-inqilab',
        title: 'Tarixi İnqilab: Əvvəlcə Əkinçilik, yoxsa Din?',
        content: `Klassik arxeologiya nəzəriyyəsi iddia edirdi ki: insanlar əvvəlcə buğdanı əhlilləşdirdilər, kənd təsərrüfatı ilə oturaq həyata keçdilər, şəhərlər qurdular və yalnız artıq ərzaq və işçi qüvvəsi yarandıqdan sonra məbədlər tikməyə başladılar.

Göbəklitəpəni 1995-ci ildən qazmağa başlayan alman arxeoloqu Prof. Klaus Şmidt (Klaus Schmidt) sübut etdi ki, bu ardıcıllıq tərsinə olub: insanları yüzlərlə kilometr uzaqlıqdan bir araya gətirən, əməkdaşlıq etməyə və nəticədə oturaq həyata keçməyə məcbur edən məhz ortaq dini inanclar və müqəddəs məbəd tikmək arzusu olmuşdur. Göbəklitəpə ətrafında tapılan buğda DNT-si bütün müasir əhlil buğdanın ana vətəninin məhz bu bölgə olduğunu göstərdi.`,
        badge: 'fact',
        badgeText: 'Arxeoloji Elmi Konsensus'
      },
      {
        id: 'qesden-basdirilma',
        title: 'Göbəklitəpənin Ən Böyük Sirri: Niyə Qəsdən Torpağa Basdırıldı?',
        content: `Göbəklitəpə e.ə. 8000-ci illərdə təbii fəlakət və ya müharibə ilə dağıdılmamışdır. Kompleksi inşa edən insanlar təxminən 1500 il istifadə etdikdən sonra hər bir dairəvi məbədi yüzlərlə ton xırda əhəngdaşı qırıntıları, torpaq və heyvan sümükləri ilə qəsdən və səliqə ilə basdırmışlar. Bu süni konservasiya sayəsində abidə 10.000 il boyu heç bir eroziyaya uğramadan günümüzə qədər toxunulmaz çatmışdır. Niyə basdırıldığı isə hələ də arxeologiyanın ən böyük sirridir.`,
        badge: 'fact',
        badgeText: 'Stratifiki Geoloji Fakt'
      }
    ],
    keyFacts: [
      { label: 'Yaşı', value: 'E.ə. 9600 – 8000 (~11.600 il əvvəl)', status: 'verified_fact' },
      { label: 'Kəşf Tarixi', value: '1995 (Prof. Klaus Schmidt rəhbərliyi ilə)', status: 'verified_fact' },
      { label: 'Sütun Çəkisi', value: '10–16 ton, 5.5 metr hündürlük', status: 'verified_fact' },
      { label: 'UNESCO Statusu', value: '2018-ci ildə Ümumdünya İrsi siyahısına daxil edilib', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'İlk Astronomik Rəsədxana və Sirius Ulduzu İbadəti',
        likelihood: 'Orta',
        description: 'T sütunlarının bəzi ulduzların (Sirius və ya Qütb ulduzu) pretsessiyasına yönəldildiyi hipotezi.',
        scientificConsensus: 'Arxeoastronomlar tərəfindən müzakirə edilir, lakin birmənalı qəbul edilməyib.'
      }
    ],
    sources: [
      { title: 'Sie bauten die ersten Tempel: Das rätselhafte Heiligtum der Steinzeitjäger', author: 'Klaus Schmidt', publisher: 'C.H. Beck', year: '2006', type: 'book' },
      { title: 'Göbekli Tepe: A Stone Age Sanctuary in South-Eastern Anatolia', author: 'Schmidt, K.', publisher: 'Documenta Praehistorica', year: '2010', type: 'academic' },
      { title: 'UNESCO World Heritage List: Göbekli Tepe', publisher: 'UNESCO', year: '2018', type: 'archive' }
    ],
    relatedArticleSlugs: ['nazca-xetleri', 'derinkuyu-yeralti-seheri', 'voynich-elyazmasi']
  },
  {
    id: 'art-033',
    title: 'İtkin Uçuş MH370 — 21-ci əsrin ən böyük aviasiya tapmacası',
    originalName: 'Malaysia Airlines Flight 370',
    slug: 'itkin-ucus-mh370',
    description: '2014-cü ildə 239 nəfərlə Kuala-Lumpurdan Pekinə uçarkən transponderləri sönərək Cənubi Hind okeanında izsiz yoxa çıxan Boeing 777.',
    category: 'sirli-hadiseler',
    subcategory: 'İtkin düşmələr',
    tags: ['MH370', '2014', 'Boeing 777', 'Hind okeanı', 'Zaharie Ahmad Shah', 'Aviasiya'],
    date: '8 mart 2014',
    location: 'Cənubi Hind okeanı (Təxmini son qövs)',
    status: 'Tarixin ən böyük və bahalı dənizaltı axtarış əməliyyatı',
    theoriesCount: '4 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Boeing 777 tipli mülki sərnişin təyyarəsinin illüstrasiyası.',
    readingTime: 8,
    views: 48300,
    trendingScore: 97,
    isMostRead: true,
    isTrending: true,
    factStatus: 'verified_fact',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Aviasiya və Peyk Analitikası',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'son-elaqe', title: '2. "Good night Malaysian three seven zero" və kəskin dönüş' },
      { id: 'inmarsat', title: '3. Inmarsat peyk pingləri və 7-ci Qövs' },
      { id: 'tapilan-hisseler', title: '4. Tapılan flaperon qalıqları və nəzəriyyələr' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '8 mart 2014-cü ildə Malaysia Airlines aviaşirkətinin Boeing 777-200ER təyyarəsi 227 sərnişin və 12 heyət üzvü ilə Kuala-Lumpurdan Pekinə uçarkən Malayziya və Vyetnam hava məkanları arasındakı keçid nöqtəsində bütün rabitə vasitələrini söndürərək qeyb oldu.',
        badge: 'fact',
        badgeText: 'Malayziya Mülki Aviasiya İdarəsi'
      },
      {
        id: 'inmarsat',
        title: 'Inmarsat peyk pingləri və 7-ci Qövs',
        content: 'Təyyarə radardan itsə də, mühərriklərindəki peyk rabitə terminalı hər saat başı Britaniyanın Inmarsat-3F1 peykinə avtomatik "handshake" (ping) siqnalları göndərmişdir. Doppler effekti analizi təyyarənin cənuba dönərək yanacağı bitənə qədər daha 6 saat uçduğunu və Cənubi Hind okeanının dərinliklərinə düşdüyünü sübut etdi.',
        badge: 'fact',
        badgeText: 'Inmarsat Peyk Riyazi Analizi'
      },
      {
        id: 'tapilan-hisseler',
        title: 'Tapılan flaperon qalıqları',
        content: '2015–2017-ci illərdə Reyunyon adasında və Şərqi Afrika sahillərində MH370 təyyarəsinə aid seriya nömrələri təsdiqlənmiş 33 qanad və quyruq fraqmenti (o cümlədən sağ flaperon) aşkar edildi.',
        badge: 'fact',
        badgeText: 'Fransa Məhkəmə Aviasiya Ekspertizası'
      }
    ],
    keyFacts: [
      { label: 'İtkin sayı', value: '239 nəfər', status: 'verified_fact' },
      { label: 'Axtarış sahəsi', value: '120.000 km² dəniz dibi', status: 'verified_fact' },
      { label: 'Təsdiqlənmiş qalıqlar', value: '30-dan çox fraqment', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Kapitan tərəfindən qəsdən marşrut dəyişdirilməsi',
        likelihood: 'Orta',
        description: 'Kapitan Zaharie Ahmad Shah-ın ev simulyatorunda Hind okeanının cənubuna uçuş marşrutunun tapılması.',
        scientificConsensus: 'Rəsmi yekun hesabat bunu birmənalı təsdiq etməyib.'
      },
      {
        name: 'Kəskin kabin dekompressiyası və hipoksiya',
        likelihood: 'Orta',
        description: 'Təzyiqin qəfil düşməsi nəticəsində heyətin huşunu itirməsi və təyyarənin avtopilotla yanacağı bitənə qədər uçması ("Kabus uçuş").',
        scientificConsensus: 'Aviasiya təhlükəsizliyi mütəxəssisləri tərəfindən nəzərdən keçirilir.'
      }
    ],
    sources: [
      { title: 'MH370 Safety Investigation Report', publisher: 'Ministry of Transport Malaysia', year: '2018', type: 'government' },
      { title: 'The Search for MH370', publisher: 'Australian Transport Safety Bureau (ATSB)', year: '2017', type: 'government' }
    ],
    relatedArticleSlugs: ['db-cooper-teyyare-qacirisi', 'bermuda-ucbucagi', 'mary-celeste-gemisi', 'dyatlov-kecidi-hadisesi']
  }
];
