import { Article } from '../../types';

export const placesAndCrimeArticles: Article[] = [
  {
    id: 'art-011',
    title: 'Hinterkaifeck ferması cinayəti',
    originalName: 'Hinterkaifeck murders',
    slug: 'hinterkaifeck-cinayeti',
    description: '1922-ci ildə Bavariyada 6 nəfərlik ailənin fermada balta/qazma ilə amansızcasına qətlə yetirildiyi və qatilin günlərlə evdə yaşadığı açılmamış cinayət.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Məşhur açılmamış cinayətlər',
    tags: ['Bavariya', '1922', 'Gruber ailəsi', 'Açılmamış cinayət', 'Soyuq iş', 'Mattock'],
    date: '31 mart 1922',
    location: 'Hinterkaifeck ferması, Qrobbern yaxınlığı, Bavariya, Almaniya',
    coordinates: '48°35′40″N 11°19′20″E',
    status: 'Tarixin ən qorxunc açılmamış cinayət işi',
    theoriesCount: '4 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Tarixi Bavariya ferması və təcrid olunmuş kənd qış mənzərəsi.',
    readingTime: 8,
    views: 44100,
    trendingScore: 94,
    isMostRead: true,
    factStatus: 'verified_fact',
    contentWarning: 'Bu məqalə amansız kütləvi qətl və kriminal zorakılıq faktları ehtiva edir.',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Tarixi Kriminalistika',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'cinayetden-evvel', title: '2. Cinayətdən əvvəlki qəribə hadisələr' },
      { id: 'hadise', title: '3. Qətl gecəsi və tapılan cəsədlər' },
      { id: 'qatilin-davranisi', title: '4. Qatilin qəribə hərəkətləri' },
      { id: 'istintaq', title: '5. İstintaq və müasir analizlər' },
      { id: 'menbeler', title: '6. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '31 mart 1922-ci ildə Münxenin təxminən 70 km şimalındakı Hinterkaifeck fermasında Andreas Gruber (63), həyat yoldaşı Cäzilia (72), dul qızları Viktoria (35), nəvələri Cäzilia (7) və Josef (2), həmçinin işə həmin gün başlamış xadimə Maria Baumgartner (44) bir kənd təsərrüfatı aləti ilə qətlə yetirildi.',
        badge: 'fact',
        badgeText: 'Münxen Polisi Cinayət İşi'
      },
      {
        id: 'cinayetden-evvel',
        title: 'Cinayətdən əvvəlki qəribə hadisələr',
        content: 'Hadisədən bir neçə gün əvvəl ata Andreas qonşularına meşədən evə doğru gələn, lakin geri qayıtmayan tək tərəfli ayaq izləri tapdığını, çardaqdan addım səsləri eşitdiyini və ev açarlarının itdiyini demişdi. Əvvəlki xadimə isə evin lənətli olduğunu deyərək 6 ay əvvəl işdən çıxmışdı.',
        badge: 'fact',
        badgeText: 'Şahid İfadələri'
      },
      {
        id: 'qatilin-davranisi',
        title: 'Qatilin qəribə hərəkətləri',
        content: 'Məhkəmə ekspertizası sübut etdi ki, qətllərdən sonra qatil bir neçə gün fermada qalmış, mətbəxdə yemək bişirmiş, mal-qaranı yemləmiş və bacadan tüstü buraxmışdır. Evdəki külli miqdarda qızıl və nağd pul toxunulmaz qalmışdı, bu da cinayətin soyğunçuluq deyil, şəxsi qisas xarakteri daşıdığını göstərirdi.',
        badge: 'fact',
        badgeText: 'Məhkəmə Tibbi Ekspertizası'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: '31 mart 1922', status: 'verified_fact' },
      { label: 'Qurbanlar', value: '6 nəfər (bütün ailə və xadimə)', status: 'verified_fact' },
      { label: 'Cinayət silahı', value: 'Qazma (Pickaxe / Reuthaue)', status: 'verified_fact' },
      { label: 'Motiv', value: 'Məlum deyil (Pul oğurlanmayıb)', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Lorenz Schlittenbauer (Qonşu və keçmiş sevgili)',
        likelihood: 'Orta',
        description: 'Viktoriya ilə mübahisəli aliment davası olan qonşunun qisas alması şübhəsi.',
        scientificConsensus: 'Birbaşa sübut tapılmayıb; böhtan məhkəməsində bəraət almışdır.'
      },
      {
        name: 'Müharibədən qayıdan keçmiş əri Karl Qabriel',
        likelihood: 'Aşağı',
        description: 'Birinci Dünya müharibəsində öldüyü bildirilən ərin qisas almaq üçün gizlicə qayıtması.',
        scientificConsensus: 'Fransada döyüşdə öldüyü rəsmi qeydiyyatdadır.'
      }
    ],
    sources: [
      { title: 'Hinterkaifeck: Spuren eines mysteriösen Verbrechens', author: 'Peter Leuschner', publisher: 'Apollon-Verlag', year: '1997', type: 'book' },
      { title: 'Bavarian Police Academy Cold Case Analysis', publisher: 'Polizei Fürstenfeldbruck', year: '2007', type: 'government' }
    ],
    relatedArticleSlugs: ['zodyak-qatili', 'jack-the-ripper', 'dyatlov-kecidi-hadisesi', 'somerton-adami']
  },
  {
    id: 'art-012',
    title: 'Jack the Ripper (Qarıncayan Cek)',
    originalName: 'Jack the Ripper',
    slug: 'jack-the-ripper',
    description: '1888-ci ildə Londonun Uaytçapel rayonunda fahişələri qətlə yetirən və məktublar göndərən tarixin ən məşhur naməlum seriyalı qatili.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Serial cinayət hadisələri',
    tags: ['London', '1888', 'Whitechapel', 'Seriyalı qatil', 'Scotland Yard', 'Viktoriya dövrü'],
    date: 'Avqust – Noyabr 1888',
    location: 'Whitechapel və Spitalfields, Şərqi London, Böyük Britaniya',
    status: 'Klassik açılmamış tarixi cinayət',
    theoriesCount: '6 əsas şübhəli',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '19-cu əsr Londonunun dumanlı gecə küçələri.',
    readingTime: 9,
    views: 49500,
    trendingScore: 95,
    isMostRead: true,
    factStatus: 'verified_fact',
    contentWarning: 'Məqalə qəddar qətllər və cərrahi anatomik təsvirlər ehtiva edir.',
    lastUpdated: '19 Avqust 2026',
    author: 'DARKPEDIA Tarixi Kriminalistika',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'kanonik-qurbanlar', title: '2. "Kanonik beşlik" qurbanları' },
      { id: 'modus-operandi', title: '3. Qatilin anatomik dəqiqliyi' },
      { id: 'mektublar', title: '4. "From Hell" məktubu və böyrək parçası' },
      { id: 'subheliler', title: '5. Əsas şübhəlilər və DNT cəhdləri' },
      { id: 'menbeler', title: '6. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Jack the Ripper — 1888-ci ilin payızında Londonun yoxsul Uaytçapel məhəlləsində ən azı 5 qadını boğazlarını kəsərək və daxili orqanlarını çıxararaq qətlə yetirmiş naməlum seriyalı qatilin şərti adıdır. Qatilin cərrahi və ya qəssablıq biliyinə malik olması, qaranlıqda heç bir səs salmadan törətməsi və Skotland Yard-ın bütün cəhdlərinə baxmayaraq heç vaxt tutulmaması cinayət tarixinə ən böyük sirr kimi keçmişdir.',
        badge: 'fact',
        badgeText: 'Scotland Yard Məlumatı'
      },
      {
        id: 'kanonik-qurbanlar',
        title: '"Kanonik beşlik" qurbanları',
        content: 'İstintaq tərəfindən qəbul edilən 5 əsas qurban:\n1. Mary Ann Nichols (31 avqust 1888)\n2. Annie Chapman (8 sentyabr 1888)\n3. Elizabeth Stride (30 sentyabr 1888)\n4. Catherine Eddowes (30 sentyabr 1888)\n5. Mary Jane Kelly (9 noyabr 1888).',
        badge: 'fact',
        badgeText: 'Kanonik Siyahı'
      },
      {
        id: 'mektublar',
        title: '"From Hell" məktubu və böyrək parçası',
        content: '1888-ci ilin oktyabrında Corc Lusk-a göndərilən "From Hell" (Cəhənnəmdən) başlıqlı məktubla birlikdə şərabda saxlanılmış insan böyrəyinin yarısı göndərilmişdi. Həkimlər böyrəyin öldürülən Catherine Eddowes-in xəstəliyinə uyğun olduğunu təsdiqləmişdilər.',
        badge: 'fact',
        badgeText: 'Tarixi Maddi Sübut'
      }
    ],
    keyFacts: [
      { label: 'Aktiv dövr', value: 'Avqust – Noyabr 1888', status: 'verified_fact' },
      { label: 'Qurban sayı', value: '5 kanonik (və ya 11 şübhəli)', status: 'verified_fact' },
      { label: 'Şəxsiyyət', value: 'Rəsmi olaraq müəyyən edilməyib', status: 'verified_fact' },
      { label: 'Məşhur məktub', value: '"From Hell" və "Dear Boss"', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Aaron Kosminski (Polşalı bərbər)',
        likelihood: 'Orta',
        description: 'Dövrün polis rəhbərlərinin əsas şübhəlisi; 2019-cu ildə şaldan çıxarılan mitoxondrial DNT iddiaları mübahisəlidir.',
        scientificConsensus: 'DNT nümunəsinin çirklənmə ehtimalı yüksəkdir.'
      },
      {
        name: 'Montague John Druitt (Vəkil və müəllim)',
        likelihood: 'Aşağı',
        description: 'Sonuncu qətldən dərhal sonra Temza çayında intihar etmiş şəxs.',
        scientificConsensus: 'Birbaşa maddi sübut yoxdur.'
      }
    ],
    sources: [
      { title: 'The Complete History of Jack the Ripper', author: 'Philip Sugden', publisher: 'Carroll & Graf', year: '2002', type: 'book' },
      { title: 'The National Archives of UK: MEPO 3/140 Whitechapel Murders', publisher: 'UK Public Record Office', year: '1888', type: 'archive' }
    ],
    relatedArticleSlugs: ['zodyak-qatili', 'hinterkaifeck-cinayeti', 'somerton-adami', 'elisa-lam-cecil-hotel']
  },
  {
    id: 'art-013',
    title: 'Zodyak qatili və sındırılmış şifrələr',
    originalName: 'Zodiac Killer',
    slug: 'zodyak-qatili',
    description: '1960-cı illərin sonunda Şimali Kaliforniyada cinayətlər törədən, qəzetlərə kriptoqramlar göndərən məşhur maskalı seriyalı qatil.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Serial cinayət hadisələri',
    tags: ['Zodiac', 'Kaliforniya', '1969', 'Kriptoqram', 'Z340', 'San Francisco Chronicle'],
    date: '1968 – 1969 (Məktublar 1974-ə qədər)',
    location: 'San-Fransisko körfəz sahəsi, Kaliforniya, ABŞ',
    coordinates: '38°06′N 122°14′W',
    status: 'Şəxsiyyəti açılmamış / 2020-ci ildə Z340 şifrəsi sındırılıb',
    theoriesCount: '5 şübhəli',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Zodyak qatilinin göndərdiyi simvollar və şifrə strukturu.',
    readingTime: 8,
    views: 42300,
    trendingScore: 91,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '17 Avqust 2026',
    author: 'DARKPEDIA Kriminalistika və Kriptoqrafiya',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'qetller', title: '2. Təsdiqlənmiş qətllər və sağ qalan şahidlər' },
      { id: 'sifrələr', title: '3. Şifrələr: Z408 və 2020-ci il Z340 zəfəri' },
      { id: 'subheliler', title: '4. Artur Li Allen və digər şübhəlilər' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: 'Zodyak qatili — 1968-1969-cu illərdə Şimali Kaliforniyada ən azı 5 nəfəri qətlə yetirən və 2 nəfəri ağır yaralayan seriyalı qatildir. O, öz məktublarında 37 nəfəri öldürdüyünü iddia edirdi. Qatil qəzetlərə göndərdiyi məktublarda özünü dairə içərisində xaç simvolu ilə təqdim edir və polisləri ələ salırdı.',
        badge: 'fact',
        badgeText: 'FTB İşi Qeydiyyatı'
      },
      {
        id: 'sifrələr',
        title: 'Şifrələr: Z408 və 2020-ci il Z340 zəfəri',
        content: 'Qatilin 1969-cu ildə göndərdiyi 340 simvolluq məşhur "Z340" şifrəsi tam 51 il oxunmamış qaldı. 2020-ci ilin dekabrında amerikalı proqramçı Devid Orançak, avstraliyalı riyaziyyatçı Sem Bleyk və belçikalı Yaarl Van Eyk tərəfindən xüsusi kompyuter alqoritmi ilə sındırıldı. Şifrədə qatil yazırdı: "Ümid edirəm məni tutmağa çalışarkən çox əylənirsiniz... Mən qaz kamerasından qorxmuram, çünki o məni tezliklə cənnətə göndərəcək..."',
        badge: 'fact',
        badgeText: 'FTB tərəfindən Təsdiqlənmiş Kriptoanaliz'
      }
    ],
    keyFacts: [
      { label: 'Qurban sayı', value: '5 təsdiqlənmiş ölüm, 2 yaralı', status: 'verified_fact' },
      { label: 'Z340 şifrəsinin həlli', value: 'Dekabr 2020 (FTB tərəfindən təsdiqlənib)', status: 'verified_fact' },
      { label: 'Əsas şübhəli', value: 'Arthur Leigh Allen (Sübut yetərsiz qaldı)', status: 'theory' }
    ],
    theories: [
      {
        name: 'Arthur Leigh Allen',
        likelihood: 'Orta',
        description: 'Polis tərəfindən ən çox araşdırılan şəxs; Zodyak saatı taxırdı, lakin barmaq izləri və DNT tam uyğun gəlmədi.',
        scientificConsensus: 'Məhkəmə qarşısında ittiham irəli sürülməmiş vəfat edib.'
      }
    ],
    sources: [
      { title: 'Zodiac: The Shocking True Story of the Hunt for the Nation’s Most Elusive Serial Killer', author: 'Robert Graysmith', publisher: 'St. Martin’s Press', year: '1986', type: 'book' },
      { title: 'FBI Statement on Zodiac Killer Cipher Z340 Resolution', publisher: 'Federal Bureau of Investigation', year: '2020', type: 'government' }
    ],
    relatedArticleSlugs: ['jack-the-ripper', 'hinterkaifeck-cinayeti', 'somerton-adami', 'db-cooper-teyyare-qacirisi']
  },
  {
    id: 'art-014',
    title: 'Elisa Lam və Cecil Hotel hadisəsi',
    originalName: 'Death of Elisa Lam',
    slug: 'elisa-lam-cecil-hotel',
    description: '2013-cü ildə Los-Ancelesin "Cecil" otelinin damındakı su çənində aşkar edilən kanadalı tələbənin lift videosu və psixiatrik reallıq.',
    category: 'psixologiya',
    subcategory: 'İnsan beyninin qəribə halları',
    tags: ['Elisa Lam', 'Cecil Hotel', '2013', 'Bipolyar pozuntu', 'Los Angeles', 'Toksikologiya'],
    date: 'Yanvar – Fevral 2013',
    location: 'Cecil Hotel (Stay on Main), Los-Anceles, Kaliforniya, ABŞ',
    coordinates: '34°02′42″N 118°14′49″W',
    status: 'Rəsmi tibbi nəticə: Bədbəxt hadisə (Boğulma)',
    theoriesCount: '3 nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Los-Anceles şəhər mərkəzindəki tarixi Cecil Hotel binası.',
    readingTime: 7,
    views: 39600,
    trendingScore: 87,
    factStatus: 'verified_fact',
    contentWarning: 'Məqalə ruhi sağlamlıq böhranı və faciəvi ölüm haqqında məlumat ehtiva edir.',
    lastUpdated: '13 Avqust 2026',
    author: 'DARKPEDIA Məhkəmə Psixiatriyası',
    tableOfContents: [
      { id: 'haqqinda', title: '1. Haqqında' },
      { id: 'lift-videosu', title: '2. Məşhur lift müşahidə videosu' },
      { id: 'tapilma', title: '3. Tapılma və otel qonaqlarının şikayətləri' },
      { id: 'tibbi-hesabat', title: '4. Koroner və toksikologiya hesabatı' },
      { id: 'menbeler', title: '5. Mənbələr' }
    ],
    sections: [
      {
        id: 'haqqinda',
        title: 'Haqqında',
        content: '21 yaşlı kanadalı tələbə Elisa Lam 2013-cü ilin yanvarında Kaliforniyaya səyahət edərkən Los-Ancelesin "Cecil" otelində qaldı və yanvarın 31-də yoxa çıxdı. Fevralın 19-da otel sakinləri suyun təzyiqinin aşağı düşməsindən və dadından şikayət etdikdən sonra binanın damındakı qapalı su çənində onun meyiti tapıldı.',
        badge: 'fact',
        badgeText: 'LAPD İstintaq Qovluğu'
      },
      {
        id: 'lift-videosu',
        title: 'Məşhur lift müşahidə videosu',
        content: 'Polis tərəfindən yayımlanan liftdəki son görüntülərdə Elisanın düymələri qarmaqarışıq basdığı, qapıdan gizləndiyi, görünməyən biri ilə danışırmış kimi əl hərəkətləri etdiyi görünürdü. Bu video internetdə saysız-hesabsız paranormal nəzəriyyələrin yaranmasına səbəb oldu.',
        badge: 'fact',
        badgeText: 'Video Qeydiyyat'
      },
      {
        id: 'tibbi-hesabat',
        title: 'Koroner və toksikologiya hesabatı',
        content: 'Los-Anceles Məhkəmə Tibbi Ekspertizası heç bir zorakılıq, zədə və ya narkotik izinə rast gəlmədi. Lamın kəskin Bipolyar I pozuntusundan əziyyət çəkdiyi və çantasındakı dərman analizlərindən onun son günlər təyin olunmuş antipsixotik preparatları qəbul etmədiyi aşkarlandı. Nəticə: Psixotik epizod zamanı təsadüfi boğulma.',
        badge: 'fact',
        badgeText: 'Məhkəmə Tibbi Nəticəsi'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: 'Fevral 2013', status: 'verified_fact' },
      { label: 'Rəsmi ölüm səbəbi', value: 'Təsadüfi boğulma (Accidental drowning)', status: 'verified_fact' },
      { label: 'Təsir edən amil', value: 'Bipolyar pozuntu və psixoz', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Kəskin psixotik tutma və paranoid təqib qorxusu',
        likelihood: 'Yüksək',
        description: 'Dərmanları buraxan xəstənin təqib edildiyini zənn edərək gizlənmək üçün çənə girməsi və çıxa bilməməsi.',
        scientificConsensus: 'Məhkəmə psixiatrları və koroner tərəfindən təsdiq edilib.'
      }
    ],
    sources: [
      { title: 'County of Los Angeles Department of Medical Examiner-Coroner Case Report 2013-01364', publisher: 'Los Angeles Coroner', year: '2013', type: 'government' },
      { title: 'Crime Scene: The Vanishing at the Cecil Hotel', publisher: 'Netflix / RadicalMedia', year: '2021', type: 'documentary' }
    ],
    relatedArticleSlugs: ['yuxu-iflici-nevrologiyasi', 'dyatlov-kecidi-hadisesi', 'zodyak-qatili', 'somerton-adami']
  },
  {
    id: 'art-015',
    title: 'Poveglia — Venesiya Laqununun Karantin Vəba Adası və Qadağan Olunmuş Psixiatriya Zirzəmiləri',
    originalName: 'Poveglia Island (Isola di Poveglia)',
    slug: 'poveglia-adasi',
    description: 'Venesiya laqununda yerləşən, 1348-ci il Qara Ölüm və sonrakı vəba dalğalarında 100.000-dən çox insanın cəsədinin yandırıldığı, torpağının yarısının insan külündən ibarət olduğu və 1922-ci il lobotomiya psixiatriya xəstəxanasının yerləşdiyi qadağan olunmuş ada.',
    category: 'qorxulu-yerler',
    subcategory: 'Tərk edilmiş xəstəxanalar',
    tags: ['İtaliya', 'Venesiya', 'Vəba', 'Ruhi xəstəxana', 'Tərk edilmiş ada', 'Karantin', 'Lazaretto'],
    date: '1348 (Qara Ölüm) – 1968 (Qapadılma)',
    location: 'Venesiya laqunu, Venesiya və Lido arası, Şimali İtaliya',
    coordinates: '45°22′55″N 12°19′50″E',
    status: 'İtaliya Dövlət Əmlak Agentliyi Tərəfindən Girişi Qəti Qadağan Edilmiş Ərazi',
    theoriesCount: 'Tarixi Arxiv və Məhkəmə Tibbi Sənədləri',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Poveglia adasında tərk edilmiş tarixi zəng qülləsi və xəstəxana binaları.',
    readingTime: 8,
    views: 38900,
    trendingScore: 84,
    factStatus: 'verified_fact',
    lastUpdated: '21 Avqust 2026',
    author: 'DARKPEDIA Tarixi Tibb və Coğrafi Arxivlər',
    tableOfContents: [
      { id: 'veba-karantini-lazaretto', title: '1. 1348-1777: "Quarantina" Vəba Ocağı və Kütləvi Yandırma Xəndəkləri' },
      { id: '1922-psixiatriya-ve-doktor-mifi', title: '2. 1922-1968: Qapalı Psixiatriya İnzibati Binası və Zəng Qülləsi İntiharı' },
      { id: 'muasir-huquqi-veziyyet', title: '3. Müasir Arxeoloji Tədqiqatlar və Qadağan Olunmuş Zona Statusu' }
    ],
    sections: [
      {
        id: 'veba-karantini-lazaretto',
        title: '1. 1348-1777: "Quarantina" Vəba Ocağı və Kütləvi Yandırma Xəndəkləri',
        content: `1348-ci ildə Venesiya Respublikasını bürüyən Qara Vəba zamanı şəhər senatı xəstəliyin yayılmasının qarşısını almaq üçün Poveglia adasını təcrid məntəqəsi kimi təyin etdi. Ən kiçik vəba simptomu göstərən hər bir vətəndaş ailəsi ilə birlikdə məcburi şəkildə qayıqlarla adaya gətirilir və kütləvi xəndəklərə atılırdı. 1777-ci ildə Venesiya Magistrato alla Sanità (Səhiyyə Magistraturası) adanı rəsmi dəniz karantin yoxlama stansiyasına (Lazaretto) çevirdi; şəhərə gələn hər bir ticarət gəmisi 40 gün ('quaranta giorni' — karantin sözünün etimologiyası) burada lövbər salmağa məcbur idi. Arxeoloqlar adanın torpağının təxminən 50%-nin insan külü və kömürləşmiş sümük hissəciklərindən ibarət olduğunu təsdiqləmişlər.`,
        badge: 'fact',
        badgeText: 'Archivio di Stato di Venezia'
      },
      {
        id: '1922-psixiatriya-ve-doktor-mifi',
        title: '2. 1922-1968: Qapalı Psixiatriya İnzibati Binası və Zəng Qülləsi İntiharı',
        content: `1922-ci ildə adanın mövcud tikililərində ruhi xəstələr üçün dövlət sığınacağı və reabilitasiya klinikası açıldı. 20-ci əsrin əvvəllərindəki tibbi sənədlərə görə, burada xəstələr üzərində qeyri-etik cərrahi sınaqlar və primitiv lobotomiya əməliyyatları aparılmışdı. Əfsanəyə görə, baş həkim xəstələrin kabuslarından və vicdan əzabından dəli olaraq 14-cü əsrə aid zəng qülləsindən özünü ataraq intihar etmişdir. Xəstəxana 1968-ci ildə rəsmən bağlandı və ada tamamilə boşaldıldı.`,
        badge: 'fact',
        badgeText: 'Veneto Regional Medical Archives'
      },
      {
        id: 'muasir-huquqi-veziyyet',
        title: '3. Müasir Arxeoloji Tədqiqatlar və Qadağan Olunmuş Zona Statusu',
        content: `2014-cü ildə İtaliya hökuməti ada üçün 99 illik icarə auksionu elan etsə də, təklif olunan layihələr ləğv edildi. Hazırda adaya turistlərin və mülki qayıqların yaxınlaşması qanunla qadağandır; yalnız xüsusi elmi arxeologiya icazəsi olan ekspedisiyalar sahilə çıxa bilər. Adadakı 12-ci əsr San Vitale kilsəsinin zəng qülləsi və 1922-ci il xəstəxana palataları tamamilə kolluqlar və çürümə ilə örtülmüşdür.`,
        badge: 'fact',
        badgeText: 'İtaliya Mədəniyyət Nazirliyi Sərəncamı'
      }
    ],
    keyFacts: [
      { label: 'Məkan', value: 'Venesiya laqunu, Şimali İtaliya (7.25 hektar)', status: 'verified_fact' },
      { label: 'Tarixi funksiyası', value: '1348 Taun karantini və 1922-1968 Psixiatriya xəstəxanası', status: 'verified_fact' },
      { label: 'Təxmini qurban sayı', value: '100.000 – 160.000 vəba qurbanı', status: 'verified_fact' },
      { label: 'Giriş rejimi', value: 'Qanunla qorunan qapalı dövlət zonası', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Venice and the Plague: History of Quarantine and Lazarettos', author: 'Jane Stevens Crawshaw', publisher: 'Cambridge University Press', year: '2012', type: 'academic' },
      { title: 'Isola di Poveglia: Indagine Storico-Archeologica', publisher: 'Soprintendenza Archeologia del Veneto', year: '2018', type: 'archive' }
    ],
    relatedArticleSlugs: ['sedlec-ossuary', 'paris-katakombalari', 'pripyat-cernobil-zonasi', 'hashima-adasi']
  },
  {
    id: 'art-016',
    title: 'Pripyat və Çernobıl Təcrid Zonası — Nüvə Fəlakətinin 40 İllik Əbədi Donmuş Şəhəri',
    originalName: 'Pripyat and Chernobyl Nuclear Exclusion Zone',
    slug: 'pripyat-cernobil-zonasi',
    description: '26 aprel 1986-cı ildə 4-cü reaktorda baş verən partlayışdan sonra bir gündə 50 min sakini tərəfindən tərk edilən, atmosferə 400 Xirosima gücündə radioaktiv maddə buraxan və təbiətin betonu udduğu dünyanın ən böyük texnogen təcrid zonası.',
    category: 'qorxulu-yerler',
    subcategory: 'Tərk edilmiş şəhərlər',
    tags: ['Pripyat', 'Çernobıl', '1986', 'Radiasiya', 'Qırmızı Meşə', 'Kabus şəhər', 'RBMK-1000'],
    date: '26 aprel 1986 – Müasir dövr',
    location: 'Pripyat, Kiyev vilayəti, Ukrayna',
    coordinates: '51°24′20″N 30°03′25″E',
    status: 'Xüsusi Mühafizə Olunan 30 km Radiasiya Təcrid Zonası',
    theoriesCount: 'MAQATE və İNSAG-7 Nüvə Qəzası Hesabatları',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Pripyatın məşhur tərk edilmiş şəhər mərkəzindəki fırlanan çarxı və Energetik Mədəniyyət Sarayı.',
    readingTime: 9,
    views: 52400,
    trendingScore: 94,
    isMostRead: true,
    factStatus: 'verified_fact',
    lastUpdated: '22 Avqust 2026',
    author: 'DARKPEDIA Nüvə Energetikası və Radiasiya Təhlükəsizliyi',
    tableOfContents: [
      { id: '26-aprel-gecesi', title: '1. 26 Aprel 1986 Saat 01:23:45: 4-cü Blokun Partlayışı və RBMK Qüsuru' },
      { id: 'pripyat-ani-texliye', title: '2. 27 Aprel Saat 14:00: 1.200 Avtobus və 49.360 Nəfərin Əbədi Getməsi' },
      { id: 'qirmizi-mese-ve-ekologiya', title: '3. Qırmızı Meşə, Sarkofaq (NSC) və Təbiətin Radioaktiv Bərpası' }
    ],
    sections: [
      {
        id: '26-aprel-gecesi',
        title: '1. 26 Aprel 1986 Saat 01:23:45: 4-cü Blokun Partlayışı və RBMK Qüsuru',
        content: `1970-ci ildə Çernobıl AES işçiləri üçün salınmış Pripyat Sovet İttifaqının ən zəngin və müasir şəhərlərindən biri idi. 26 aprel 1986-cı il gecəsi 4-cü enerji blokunda planlaşdırılan təhlükəsizlik sınağı zamanı reaktorun qrafıt ucluqlu idarəetmə çubuqlarının konstruktiv qüsuru (müsbət boşluq əmsalı reaktivliyi) və operator səhvləri nəticəsində güc bir neçə saniyədə 30.000 MVt-a çatdı. Nəhəng buxar və hidrogen partlayışı 1000 tonluq reaktor qapağını göyə uçurdu və 50 milyon küri radioaktiv izotop (Sezium-137, Stronium-90, Yod-131, Plutonium-239) atmosferə səpələndi.`,
        badge: 'fact',
        badgeText: 'MAQATE INSAG-7 Hesabatı'
      },
      {
        id: 'pripyat-ani-texliye',
        title: '2. 27 Aprel Saat 14:00: 1.200 Avtobus və 49.360 Nəfərin Əbədi Getməsi',
        content: `Qəzadan 36 saat sonra şəhərdə radiasiya fonu minlərlə dəfə artsa da, əhaliyə xəbər verilməmişdi. 27 aprel saat 14:00-da radio vasitəsilə elan edildi ki, "müvəqqəti təxliyə" aparılır və hər kəs yalnız 3 günlük sənəd və ərzaq götürməlidir. Kiyevdən göndərilmiş 1.200 avtobusluq karvan 49.360 sakini 3 saat ərzində şəhərdən çıxardı. Heç kim bir daha geri qayıda bilmədi. Məktəblərdə dərsliklər, mənzillərdə mebellər, xəstəxanalarda yeni doğulmuş körpələrin qeydiyyat kitabları açıq qaldı.`,
        badge: 'fact',
        badgeText: 'Kiyev Vilayət İcraiyyə Komitəsi Protokolu'
      },
      {
        id: 'qirmizi-mese-ve-ekologiya',
        title: '3. Qırmızı Meşə, Sarkofaq (NSC) və Təbiətin Radioaktiv Bərpası',
        content: `Stansiyanın bilavasitə yaxınlığındakı 10 kvadrat kilometrlik şam meşəsi yüksək radiasiya dozasından dərhal sonra qırmızı-narıncı rəngə boyanaraq məhv oldu və "Qırmızı Meşə" adını aldı. 2016-cı ildə partlamış blokun üzərinə 36.000 tonluq nəhəng polad qübbə (New Safe Confinement - NSC) çəkildi. İnsanların olmaması səbəbindən son onilliklərdə zona Avropanın ən böyük vəhşi fauna sığınacağına çevrildi: nəsli kəsilməkdə olan Prjevalski atları, qonur ayılar, vaşaqlar və yüzlərlə qurd dəstəsi Pripyatın tərk edilmiş prospektlərində sərbəst məskunlaşmışdır. Plutonium elementlərinin parçalanma dövrünə görə ərazinin insan məskunlaşması üçün tam təhlükəsiz olması üçün ən azı 20.000 il vaxt lazımdır.`,
        badge: 'fact',
        badgeText: 'UNSCEAR & Chernobyl Bio-Monitoring Study'
      }
    ],
    keyFacts: [
      { label: 'Qəza anı', value: '26 Aprel 1986, 01:23:45 UTC+3', status: 'verified_fact' },
      { label: 'Təxliyə edilən əhali', value: 'Pripyatdan 49.360 nəfər, zonadan ümumilikdə 116.000 nəfər', status: 'verified_fact' },
      { label: 'Təcrid zonası sahəsi', value: '2.600 km² (Ukrayna və Belarus daxilində)', status: 'verified_fact' },
      { label: 'Yeni Sarkofaqın ömrü', value: '100 il (New Safe Confinement, 2016)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Chernobyl: The History of a Nuclear Catastrophe', author: 'Serhii Plokhy', publisher: 'Basic Books', year: '2018', type: 'book' },
      { title: 'INSAG-7: The Chernobyl Accident: Updating of INSAG-1', publisher: 'International Atomic Energy Agency (IAEA)', year: '1992', type: 'government' }
    ],
    relatedArticleSlugs: ['hashima-adasi', 'centralia-yeralti-yanan-seher', 'poveglia-adasi', 'aokigahara-mesesi']
  },
  {
    id: 'art-017',
    title: 'Aokigahara (Ağaclar Dənizi / Jukai) — Fuci Dağının Bazalt Qatında Səssiz Labirint və Maqnit Anomaliyaları',
    originalName: 'Aokigahara Forest (Jukai Sea of Trees)',
    slug: 'aokigahara-mesesi',
    description: 'Fuci dağının şimal-qərb ətəyində yerləşən, 864-cü il püskürməsinin bazalt lavaları üzərində bitən, yüksək dəmir tərkibi səbəbilə maqnit kompaslarını sapan və mütləq akustik səssizliyi ilə tanınan 30 km² sahəyə malik sıx meşə.',
    category: 'qorxulu-yerler',
    subcategory: 'Meşələr',
    tags: ['Yaponiya', 'Fuji dağı', 'Meşə', 'Vulkanik lava', 'Ubasute', 'Maqnit', 'Jukai'],
    date: '864-cü il (Jōgan püskürməsi) – Müasir dövr',
    location: 'Yamanashi prefekturası, Fuci-Hakone-İzu Milli Parkı, Yaponiya',
    coordinates: '35°28′12″N 138°37′11″E',
    status: 'Xüsusi Mühafizə Olunan Milli Təbiət Abidəsi',
    theoriesCount: 'Geoloji Maqnetizm və Mədəni Antropologiya Faktları',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Aokigahara meşəsinin sıx mamırlı vulkanik kök labirintləri.',
    readingTime: 8,
    views: 45600,
    trendingScore: 89,
    factStatus: 'verified_fact',
    contentWarning: 'Məqalə ruhi sağlamlıq və Yaponiyanın tarixi adətləri haqqında məlumat ehtiva edir.',
    lastUpdated: '23 Avqust 2026',
    author: 'DARKPEDIA Mədəni Antropologiya və Vulkanologiya',
    tableOfContents: [
      { id: 'jogan-puskurmesi-ve-torpaq', title: '1. 864-cü İl Coqan Vulkan Püskürməsi və Məsaməli Bazalt Zəmin' },
      { id: 'maqnit-anomaliyasi-ve-akustika', title: '2. Maqnetit Süxurları, Kompas Sapmaları və Əks-Sədasız Akustika' },
      { id: 'ubasute-mifi-ve-muasir-muhafize', title: '3. Qədim "Ubasute" Folkloru və Müasir Qabaqlayıcı Patrul Şəbəkəsi' }
    ],
    sections: [
      {
        id: 'jogan-puskurmesi-ve-torpaq',
        title: '1. 864-cü İl Coqan Vulkan Püskürməsi və Məsaməli Bazalt Zəmin',
        content: `Eramızın 864-cü ilində Fuci dağının böyük "Coqan" (Jōgan) püskürməsi baş verdi. 12 gün davam edən lava axını gölləri qurutdu və 30 kvadrat kilometrlik nəhəng bərkimiş porlu bazalt lava platosu yaratdı. Son min il ərzində bu sərt daşın üzərində yapon ağ şamı, küknar və fıstıq ağaclarından ibarət qeyri-adi meşə bitdi. Ağacların kökləri bərk lava qatını dəlib keçə bilmədiyi üçün yerin üzərində nəhəng ilan qıvrımları kimi bir-birinə dolaşmışdır.`,
        badge: 'fact',
        badgeText: 'Yaponiya Geologiya İnstitutu'
      },
      {
        id: 'maqnit-anomaliyasi-ve-akustika',
        title: '2. Maqnetit Süxurları, Kompas Sapmaları və Əks-Sədasız Akustika',
        content: `Bazalt lavasının tərkibində yüksək miqdarda maqnetit (dəmir filizi) olduğuna görə kompasın metal əqrəbi yerə yaxınlaşdırıldıqda güclü yerli maqnit sahəsinin təsiri ilə bir neçə dərəcə istiqamətdən kənara meyil edir. Həmçinin bərkimiş ləvanın içi minlərlə mikroskopik hava məsamələri ilə doludur. Bu məsamələr və qalın mamır qatı bütün səs dalğalarını tamamilə udur; meşənin içərisində heç bir əks-səda (exo) yaranmır və 10 metr aralıda qışqıran insanın səsi belə eşidilmir. Ağacların vizual olaraq tam eyni görünməsi və cığırların olmaması insanları dərhal istiqamət hissini itirməyə məcbur edir.`,
        badge: 'fact',
        badgeText: 'Akustika və Geofizika Araşdırması'
      },
      {
        id: 'ubasute-mifi-ve-muasir-muhafize',
        title: '3. Qədim "Ubasute" Folkloru və Müasir Qabaqlayıcı Patrul Şəbəkəsi',
        content: `Yapon folklorunda 19-cu əsrin aclıq illərində ailələrin yaşlı qohumlarını meşənin dərinliklərinə apararaq tərk etdikləri ("Ubasute" ənənəsi) iddia edilsə də, tarixçilər bunun kütləvi olmadığını vurğulayırlar. 1960-cı ildə Seyço Matsumoto tərəfindən yazılmış 'Kuroi Jukai' romanından sonra meşə populyar mədəniyyətdə təcrid simvoluna çevrildi. Hazırda Yamanaşi prefekturası meşənin bütün girişlərinə təhlükəsizlik kameraları, xilasedici telefon nömrələri olan lövhələr quraşdırmış və könüllü patrul dəstələri yaratmışdır. Meşəyə daxil olan turistlərin yalnız rəsmi taxta cığırlardan istifadəsinə icazə verilir.`,
        badge: 'fact',
        badgeText: 'Yamanaşi Prefekturası İctimai Təhlükəsizlik Qeydiyyatı'
      }
    ],
    keyFacts: [
      { label: 'Sahəsi', value: '30 km² (Fuci dağının şimal-qərb ətəyi)', status: 'verified_fact' },
      { label: 'Geoloji əsası', value: '864-cü il Jōgan püskürməsinin bazalt lavası', status: 'verified_fact' },
      { label: 'Təbii xüsusiyyətləri', value: 'Akustik səs udulması, maqnetit kompas sapması', status: 'verified_fact' },
      { label: 'Müasir statusu', value: 'Fuji-Hakone-Izu Milli Parkı xüsusi təbiət abidəsi', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Aokigahara: The Forest and its Geology', author: 'Takashi Ogawa', publisher: 'University of Tokyo Press', year: '2015', type: 'academic' },
      { title: 'Yamanashi Environmental Conservation Department Annual Report', publisher: 'Prefecture of Yamanashi', year: '2022', type: 'government' }
    ],
    relatedArticleSlugs: ['pripyat-cernobil-zonasi', 'poveglia-adasi', 'paris-katakombalari', 'hashima-adasi']
  },
  {
    id: 'art-018',
    title: 'Paris Katakombaları — Paytaxtın Altında 300 Kilometrlik Yeraltı Əhəngdaşı Labirinti və 6 Milyon İnsanın Sümük Nekropolu',
    originalName: 'The Catacombs of Paris (l’Ossuaire Municipal)',
    slug: 'paris-katakombalari',
    description: 'Fransanın paytaxtı altında 300 kilometrdən çox uzanan, 18-ci əsrdə şəhər sanitar böhranı səbəbilə Müqəddəs Məsumlar qəbiristanlığından köçürülmüş 6 milyondan çox insanın sümüklərindən memarlıq divarları ucaldılmış yeraltı mədən şəbəkəsi.',
    category: 'qorxulu-yerler',
    subcategory: 'Mağaralar',
    tags: ['Paris', 'Katakombalar', '1786', 'Sümük', 'Yeraltı labirint', 'Ossuariy', 'Cataphiles'],
    date: '1786 (Kütləvi köçürülmə) – Müasir dövr',
    location: '14-cü rayon, Place Denfert-Rochereau altı, Paris, Fransa',
    coordinates: '48°50′02″N 2°19′56″E',
    status: 'Rəsmi Bələdiyyə Muzeyi (1.5 km) və Qadağan Olunmuş 300 km Yeraltı Labirint',
    theoriesCount: 'Tarixi Şəhərsalma və Mədənçilik Sənədləri',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Paris katakombalarında sümüklərin nizamla düzüldüyü daxili qalereyalar.',
    readingTime: 8,
    views: 48900,
    trendingScore: 91,
    factStatus: 'verified_fact',
    lastUpdated: '22 Avqust 2026',
    author: 'DARKPEDIA Yeraltı Şəhərsalma və Tarixi İrs',
    tableOfContents: [
      { id: 'lyutesiya-das-medenleri', title: '1. Roma Dövrü Lutesiya Daş Karxanaları və Şəhərin Altının Oyulması' },
      { id: '1786-mesumlar-qebiristanligi', title: '2. 1780 "Les Innocents" Fəlakəti: Zirzəmilərə Daşan Skeletlər və Gecə Köçü' },
      { id: 'erikart-de-kuri-ve-katafillar', title: '3. Héricart de Thury Memarlığı və Qadağan Olunmuş 300 Kilometrlik "Katafillər"' }
    ],
    sections: [
      {
        id: 'lyutesiya-das-medenleri',
        title: '1. Roma Dövrü Lutesiya Daş Karxanaları və Şəhərin Altının Oyulması',
        content: `Paris Katakombalarının əsası qədim Roma dövrünə (Lutesiya) gedib çıxır. Notr-Dam kilsəsi, Luvr sarayı və Parisin digər möhtəşəm binalarını tikmək üçün şəhərin cənubunda yeraltı lyutet əhəngdaşı mədənləri qazılmışdı. Əsrlər boyu nəzarətsiz qazılan bu tunellər 18-ci əsrdə şəhərin altında 300 kilometrdən çox uzanan, xəritəsi olmayan təhlükəsizlik boşluqlarına və küçələrin qəfil uçmasına səbəb olan bir labirintə çevrildi.`,
        badge: 'fact',
        badgeText: 'Inspection Générale des Carrières (IGC)'
      },
      {
        id: '1786-mesumlar-qebiristanligi',
        title: '2. 1780 "Les Innocents" Fəlakəti: Zirzəmilərə Daşan Skeletlər və Gecə Köçü',
        content: `10-cu əsrdən fəaliyyət göstərən 'Müqəddəs Məsumlar' (Cimetière des Innocents) qəbiristanlığında 2 milyondan çox cəsəd basdırılmışdı. Torpağın səviyyəsi ətraf küçələrdən 2-3 metr yuxarı qalxmış, çürümə qazları ətraf sakinləri zəhərləyirdi. 1780-ci ilin mayında fasiləsiz yağışlardan sonra qəbiristanlığın divarı uçdu və minlərlə yarımçürümüş cəsəd qonşu evlərin zirzəmisinə töküldü. 1785-ci ildə Kral XVI Lüdovik qəbiristanlıqları bağlatdırdı. 1786-cı ildən 1788-ci ilə qədər hər gecə keşişlərin müşayiəti ilə qara örtüklü arabalar milyonlarla insanın sümüklərini keçmiş Tombe-İssoire əhəngdaşı mədənlərinə daşıdı. Fransız İnqilabı zamanı Robespyer, Danton və Maratın cəsədləri də bu sümük yığınına qatıldı.`,
        badge: 'fact',
        badgeText: 'Paris Bələdiyyə Tarix Arxivləri'
      },
      {
        id: 'erikart-de-kuri-ve-katafillar',
        title: '3. Héricart de Thury Memarlığı və Qadağan Olunmuş 300 Kilometrlik "Katafillər"',
        content: `1810-cu ildə Mədənlər Müfəttişliyinin rəhbəri Lui-Etyen Erikart de Türi sümükləri bədii kompozisiyalara düzərək muzeyə çevirdi: bud və qol sümüklərindən divarlar hörülmüş, kəllə sümükləri isə xaç və naxış şəklində mozaikaya düzülmüşdür. Girişdə məşhur yazı həkk olunub: 'Arrête! C'est ici l'empire de la Mort' (Dayan! Bura Ölümün İmperiyasıdır). Hazırda yalnız 1.5 kilometrlik marşrut turistlərə açıqdır. Qalan 300 kilometrlik qaranlıq tunellərə giriş 1955-ci ildən qadağandır; buna baxmayaraq 'Katafillər' (Cataphiles) adlanan minlərlə gizli araşdırmaçı kanalizasiya lyuklarından düşərək bu labirintdə gizli zallar və kinoteatrlar qururlar.`,
        badge: 'fact',
        badgeText: 'Paris Muzeylər İdarəsi və Fransa Polisi'
      }
    ],
    keyFacts: [
      { label: 'Dəfn olunmuş insan sayı', value: '6 milyondan çox insanın skeleti', status: 'verified_fact' },
      { label: 'Tunellərin ümumi uzunluğu', value: '300+ kilometr (Paris küçələrinin altı)', status: 'verified_fact' },
      { label: 'Dərinlik', value: '20 metr (Paris metrosundan və kanalizasiyasından aşağıda)', status: 'verified_fact' },
      { label: 'Açılış tarixi', value: '1786 (Kütləvi sümük köçürülməsi)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Catacombs of Paris: Underground Chamber of Bones', author: 'Caroline Holmes', publisher: 'Scala Arts Publishers', year: '2019', type: 'book' },
      { title: 'Atlas du Paris souterrain: La doublure sombre de la ville lumière', author: 'Alain Clément & Gilles Thomas', publisher: 'Parigramme', year: '2016', type: 'book' }
    ],
    relatedArticleSlugs: ['sedlec-ossuary', 'poveglia-adasi', 'derinkuyu-yeralti-seheri', 'pripyat-cernobil-zonasi']
  },
  {
    id: 'art-019',
    title: 'D.B. Cooper (Dan Cooper) — 1971 Boeing 727 Qaçırışı və FTB Tarixinin Yeganə Açılmamış Aviasiya Quldurluğu',
    originalName: 'D.B. Cooper Hijacking (NORJAK Case)',
    slug: 'db-cooper-teyyare-qacirisi',
    description: '24 noyabr 1971-ci ildə ABŞ-da Boeing 727 təyyarəsini ələ keçirərək 200.000 dollar fidyə alan, 36 sərnişini azad etdikdən sonra gecə fırtınasında 3.000 metr hündürlükdən paraşütlə tullanan və 45 illik axtarışlara baxmayaraq heç vaxt tapılmayan naməlum quldur.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Məşhur açılmamış cinayətlər',
    tags: ['DB Cooper', '1971', 'Boeing 727', 'Paraşüt', 'FTB', 'Norjak', 'Portland'],
    date: '24 noyabr 1971 – 2016 (İstintaqın dayandırılması)',
    location: 'Portlend — Sietl — Reno marşrutu, Vaşinqton ştatı, ABŞ',
    coordinates: '45°52′N 122°39′W (Təxmini Tullanış Sahəsi)',
    status: 'FTB Tarixində Yeganə Açılmamış Kommersiya Aviasiya Qaçırışı İşi',
    theoriesCount: 'Tullanışda Həlak Olma və Saxta Şəxsiyyət Nəzəriyyələri',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'FTB tərəfindən çəkilmiş D.B. Cooper-in məşhur fotorobot təsviri.',
    readingTime: 8,
    views: 41200,
    trendingScore: 88,
    factStatus: 'verified_fact',
    lastUpdated: '20 Avqust 2026',
    author: 'DARKPEDIA Aviasiya Təhlükəsizliyi və Kriminalistika',
    tableOfContents: [
      { id: '24-noyabr-1971-qaciris', title: '1. 24 Noyabr 1971: 305 Saylı Reys və Portfeldəki Qırmızı Çubuqlar' },
      { id: 'aerodinamik-tullanis', title: '2. 3.000 Metrdən Qaranlığa Tullanış: Aft Staircase və -57°C Külək' },
      { id: 'norjak-ve-1980-tena-bar', title: '3. 45 İllik "NORJAK" İstintaqı və 1980 Tina Bar Çürümüş Əskinasları' }
    ],
    sections: [
      {
        id: '24-noyabr-1971-qaciris',
        title: '1. 24 Noyabr 1971: 305 Saylı Reys və Portfeldəki Qırmızı Çubuqlar',
        content: `24 noyabr 1971-ci ildə Şükranlıq günü ərəfəsində Northwest Orient Hava Yollarının Portlenddən Sietlə uçan 305 saylı reysinə 'Dan Cooper' adına bilet almış qara kostyumlu, tünd eynəkli bir şəxs mindi. Uçuş zamanı o, stüardessa Florens Şaffnerə kağız verdi: "Çantamda bomba var. Yanıma oturun." Çantasını açıb 8 ədəd qırmızı silindr və batareya naqillərini göstərdi. Sietldə eniş edən kimi o, 36 sərnişinin azad edilməsi müqabilində 200.000 dollar nağd 20 dollarlıq əskinas və 4 ədəd xüsusi hərbi paraşüt aldı. Təyyarə yanacaq doldurub Meksikaya doğru istiqamət aldı.`,
        badge: 'fact',
        badgeText: 'FTB Qovluğu HQ 29-84743'
      },
      {
        id: 'aerodinamik-tullanis',
        title: '2. 3.000 Metrdən Qaranlığa Tullanış: Aft Staircase və -57°C Külək',
        content: `Cooper pilotlara təyyarəni 3.000 metr hündürlükdə, şassiləri və flapları açıq şəkildə minimum sürətlə (150 düyün) uçurmağı əmr etdi. Saat 20:13 radələrində Vaşinqton ştatının Ariel meşəlikləri üzərində, dondurucu yağış və güclü fırtınada Boeing 727-nin unikal arxa quyruq pilləkənini (aft airstair) endirərək 10 kq ağırlığında fidyə çantası ilə qaranlığa tullandı. Arxadan izləyən iki F-106 qırıcı təyyarəsi zülmət gecədə onun tullanışını görə bilmədi.`,
        badge: 'fact',
        badgeText: 'FAA & USAF Uçuş Qeydiyyatı'
      },
      {
        id: 'norjak-ve-1980-tena-bar',
        title: '3. 45 İllik "NORJAK" İstintaqı və 1980 Tina Bar Çürümüş Əskinasları',
        content: `FTB tarixin ən genişmiqyaslı 'NORJAK' (Northwest Hijacking) kod adlı əməliyyatına başladı; 1000-dən çox şübhəli yoxlandı, meşələr ələk-vələk edildi, lakin heç bir iz tapılmadı. Təyyarənin arxasında buraxdığı qalstukdan alınan DNT nümunələri heç bir baza ilə uyğunlaşmadı. 1980-ci ilin fevralında Kolumbiya çayı sahilində (Tina Bar) ailəsi ilə piknik edən 8 yaşlı Brayan İnqram qumun altından Kuperə verilən seriya nömrəli əskinaslardan ibarət 5.800 dollarlıq çürümüş bağlama tapdı. 12 iyul 2016-cı ildə FTB 45 illik axtarışdan sonra aktiv istintaqı rəsmən dayandırdığını elan etdi. Bu hadisədən sonra dünyadakı bütün Boeing 727 təyyarələrinə uçuş zamanı quyruq qapısının açılmasını əngəlləyən mexanizm — "Cooper Vane" quraşdırıldı.`,
        badge: 'fact',
        badgeText: 'FTB Rəsmi Press-Relizi (12 İyul 2016)'
      }
    ],
    keyFacts: [
      { label: 'Hadisə tarixi', value: '24 Noyabr 1971', status: 'verified_fact' },
      { label: 'Fidyə məbləği', value: '200.000 ABŞ dolları (Hamısı 20 dollarlıq əskinaslar)', status: 'verified_fact' },
      { label: 'Təyyarə modeli', value: 'Boeing 727-100 (Arxa trap sistemi ilə)', status: 'verified_fact' },
      { label: 'Texniki irsi', value: 'Təyyarələrdə "Cooper Vane" aerodinamik kilidinin tətbiqi', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Tullanış zamanı meşədə həlak olma',
        likelihood: 'Yüksək',
        description: '-20°C temperaturda idarəolunmayan idman paraşütü ilə sıx meşəyə tullanan şəxsin yerə çırpılaraq ölməsi və qalıqlarının heyvanlar tərəfindən dağıdılması.',
        scientificConsensus: 'FTB istintaqçıları tərəfindən ən real ssenari hesab olunur.'
      }
    ],
    sources: [
      { title: 'D.B. Cooper: The Real Story of the Missing Hijacker', author: 'Max Gunther', publisher: 'Contemporary Books', year: '1985', type: 'book' },
      { title: 'FBI Vault: NORJAK (D.B. Cooper) Declassified Case Archive', publisher: 'Federal Bureau of Investigation', year: '2016', type: 'government' }
    ],
    relatedArticleSlugs: ['zodyak-qatili', 'somerton-adami', 'itkin-ucus-mh370', 'flight-19-itkin-eskadrilya']
  },
  {
    id: 'art-020',
    title: 'Derinkuyu — Kapadokyada 85 Metr Dərinlikdə 20.000 İnsanın Gizləndiyi 18 Mərtəbəli Qədim Yeraltı Meqapolis',
    originalName: 'Derinkuyu Underground City (Kapadokya)',
    slug: 'derinkuyu-yeralti-seheri',
    description: 'Türkiyənin Nevşehir vilayətində yerləşən, eramızdan əvvəl VIII əsrdə yumşaq vulkanik tuf qatlarında qazılmış, 20.000 insanın ərzaqları, mal-qarası və kilsələri ilə aylarla yer altında mühasirədə yaşaya bildiyi 18 mərtəbəli nəhəng yeraltı sığınacaq şəhəri.',
    category: 'qorxulu-yerler',
    subcategory: 'Mağaralar',
    tags: ['Türkiyə', 'Kapadokya', 'Derinkuyu', 'Yeraltı şəhər', 'Arxeologiya', 'Sığınacaq', 'Frigiyalılar'],
    date: 'E.ə. VIII əsr – 1963 (Yenidən kəşf)',
    location: 'Derinkuyu rayonu, Nevşehir, Kapadokya, Mərkəzi Anadolu, Türkiyə',
    coordinates: '38°22′25″N 34°44′06″E',
    status: 'UNESCO Ümumdünya İrsi və Açıq Hava Arxeologiya Muzeyi',
    theoriesCount: 'Frigiya, Het və Erkən Xristianlıq Memarlıq Faktları',
    image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Derinkuyunun dərin yeraltı daş dəhlizləri, təhlükəsizlik təkərləri və ventilyasiya şaxtaları.',
    readingTime: 8,
    views: 39100,
    trendingScore: 85,
    factStatus: 'verified_fact',
    lastUpdated: '21 Avqust 2026',
    author: 'DARKPEDIA Qədim Memarlıq və Arxeologiya Şöbəsi',
    tableOfContents: [
      { id: '1963-tesadufi-kesf', title: '1. 1963-cü İl Təsadüfi Zirzəmi Təmiri: Divarın Arxasındakı Gizli Dünya' },
      { id: 'muhendislik-mohkemliyi-ve-hava', title: '2. 18 Mərtəbəli Yeraltı Mühəndislik: 15.000 Ventilyasiya Şaxtası və Dəyirman Daşı Qapıları' },
      { id: 'tarixi-mudafie-ve-kemeler', title: '3. Ərəb-Bizans Müharibələri Sığınacağı və Kaymaklı Tunel Şəbəkəsi' }
    ],
    sections: [
      {
        id: '1963-tesadufi-kesf',
        title: '1. 1963-cü İl Təsadüfi Zirzəmi Təmiri: Divarın Arxasındakı Gizli Dünya',
        content: `1963-cü ildə Nevşehirin Derinkuyu qəsəbəsində bir sakin evinin zirzəmisində təmir işləri apararkən arxasında toyuqlarının yoxa çıxdığı daş divarı sökdü. Divarın arxasında qaranlıq bir tunel açıldı. İçəri daxil olan arxeoloqlar insan əli ilə vulkanik tuf qatlarında qazılmış, mərtəbə-mərtəbə yerin 85 metr dərinliyinə enən bütöv bir şəhər aşkar etdilər. 1965-ci ildə şəhər rəsmən ictimaiyyətə açıldı.`,
        badge: 'fact',
        badgeText: 'Türkiyə Mədəniyyət və Turizm Nazirliyi'
      },
      {
        id: 'muhendislik-mohkemliyi-ve-hava',
        title: '2. 18 Mərtəbəli Yeraltı Mühəndislik: 15.000 Ventilyasiya Şaxtası və Dəyirman Daşı Qapıları',
        content: `Derinkuyu şəhəri 85 metr dərinliyə çatan 18 mərtəbədən ibarətdir. Yuxarı mərtəbələrdə mal-qara üçün tövlələr və yem anbarları, orta mərtəbələrdə yaşayış otaqları, mətbəxlər, şərabçılıq və zeytun yağı sıxma sexləri, ən aşağı mərtəbələrdə isə xaçvari planlı kilsə, dini məktəb və silah anbarları yerləşir. Şəhərin ən dahiyanə hissəsi 55 metr dərinlikdəki mərkəzi ventilyasiya şaxtalarıdır; 15.000-dən çox hava borusu sayəsində 85 metr dərində belə hava tamamilə təmiz və sərin qalır. Hər mərtəbənin girişində yalnız içəridən linglə hərəkət etdirilə bilən 500 kq-lıq dəyirman daşı formasında yumru qapılar ('tirse') quraşdırılmışdı; kənardan hücum edən düşmən bu qapıları sındıra və ya aça bilməzdi.`,
        badge: 'fact',
        badgeText: 'Arxeoloji Mühəndislik Təhlili'
      },
      {
        id: 'tarixi-mudafie-ve-kemeler',
        title: '3. Ərəb-Bizans Müharibələri Sığınacağı və Kaymaklı Tunel Şəbəkəsi',
        content: `Şəhərin ilk mərtəbələrinin e.ə. VIII-VII əsrlərdə Frigiyalılar tərəfindən qazıldığı, Roma və Bizans dövrlərində isə xristianlar tərəfindən genişləndirildiyi güman edilir. VII-IX əsrlərdəki Ərəb-Bizans müharibələri zamanı 20.000 xristian sakin mal-qarası və ərzaq ehtiyatları ilə birlikdə aylarla bu yeraltı qalada gizlənmişdir. Tədqiqatlar göstərir ki, Derinkuyu 8-9 kilometrlik gizli yeraltı tunellə qonşu Kaymaklı yeraltı şəhərinə də bağlanmışdı.`,
        badge: 'fact',
        badgeText: 'UNESCO World Heritage Centre Dossier'
      }
    ],
    keyFacts: [
      { label: 'Maksimum dərinlik', value: '85 metr (18 mərtəbə səviyyəsi)', status: 'verified_fact' },
      { label: 'Tutum qabiliyyəti', value: '20.000 nəfər (Mal-qara və ərzaq ehtiyatı daxil)', status: 'verified_fact' },
      { label: 'Ventilyasiya sistemi', value: '55 metr dərinliyində 15.000 hava şaxtası', status: 'verified_fact' },
      { label: 'Müdafiə sistemi', value: 'Yalnız içəridən bağlanan 500 kq-lıq monolit daş çarxlar', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Underground Cities of Cappadocia', author: 'Omer Demir', publisher: 'Ege Yayinlari', year: '1997', type: 'book' },
      { title: 'Göreme National Park and the Rock Sites of Cappadocia', publisher: 'UNESCO World Heritage Centre', year: '1985', type: 'government' }
    ],
    relatedArticleSlugs: ['paris-katakombalari', 'sedlec-ossuary', 'gobeklitepe-itkin-sivilizasiyalar', 'mohenco-daro-sirri']
  }
];
