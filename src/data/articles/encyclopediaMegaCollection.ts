import { Article } from '../../types';

export const encyclopediaMegaCollectionArticles: Article[] = [
  // --- PARANORMAL & HAUNTED LOCATIONS ---
  {
    id: 'mega-001',
    title: 'Sallie House — Atchison Şəhərində Həkimin Əməliyyat Masasında Can Verən Qızın İntiqamı',
    originalName: 'The Sallie House (Atchison, Kansas Poltergeist Investigation)',
    slug: 'sallie-house',
    description: 'Kanzas ştatının Atçison şəhərində Dr. Çarlz Finney tərəfindən anesteziyasız kor bağırsaq əməliyyatı zamanı vəfat edən 6 yaşlı Sallinin ruhunun ev sahiblərinə fiziki cızıqlar, alovlanma və hücumlar etdiyi iddia olunan tarixi poltergeyst evi.',
    category: 'paranormal',
    subcategory: 'Poltergeyst və kabus araşdırmaları',
    tags: ['Sallie House', 'Kansas', 'Paranormal', 'Atchison', 'Poltergeist', 'Tony Pickman', 'Demonologiya'],
    date: '1906 – 1990-lar',
    location: 'Atchison, Kanzas, ABŞ',
    coordinates: '39°33′45″N 95°07′12″W',
    status: 'Sənədləşdirilmiş Paranormal Tədqiqat Mərkəzi',
    theoriesCount: '3 Nəzəriyyə və Laboratoriya Analizi',
    readingTime: 9,
    views: 36100,
    trendingScore: 82,
    factStatus: 'unverified_claim',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Paranormal və Kriminal Tarix Arxivi',
    tableOfContents: [
      { id: 'cerrah-ve-qiz', title: '1. Dr. Charles Finney və 1906-cı İl Faciəsi' },
      { id: 'pikmen-ailesi', title: '2. 1992–1994: Tony və Debra Pickman Ailəsinin Qorxusu' },
      { id: 'fiziki-hucumlar', title: '3. TV Çəkilişi Zamanı Canlı Yaranan Qanlı Cızıqlar' },
      { id: 'demonologiya-skeptisizm', title: '4. Ruh, yoxsa Şeytani Tələ? Skeptik Baxış' },
      { id: 'menbeler', title: '5. Sənədlər və Ədəbiyyat' }
    ],
    sections: [
      {
        id: 'cerrah-ve-qiz',
        title: 'Dr. Charles Finney və 1906-cı İl Faciəsi',
        content: `XX əsrin əvvəllərində Kanzas ştatının Atçison şəhərində yerləşən bu iki mərtəbəli kərpic evdə yerli cərrah Dr. Çarlz Finney yaşayırdı və evin birinci mərtəbəsini klinika kimi istifadə edirdi.

1906-cı ildə anası tərəfindən kəskin qarion ağrıları ilə gətirilən 6 yaşlı Sallie adlı balaca qızın kor bağırsağının (apendisit) partlamaq üzrə olduğu müəyyən edildi. Xəstəxanaya çatdırmağa vaxt olmadığı üçün həkim xloroform anesteziyasının tam təsir etməsini gözləmədən təcili cərrahi kəsik etdi. Qız kəskin ağrı şokundan və qanaxmadan əməliyyat masasında vəfat etdi. Onun son anlarında yaşadığı dəhşətli qorxunun evin divarlarına həkk olunduğu iddia edilir.`,
        badge: 'fact',
        badgeText: 'Şəhər Tibb Tarixi Arxivi'
      },
      {
        id: 'pikmen-ailesi',
        title: '1992–1994: Tony və Debra Pickman Ailəsinin Qorxusu',
        content: `1992-ci ildə gənc cütlük Toni və Debra Pikman körpələri ilə birlikdə bu evi kirayələdilər. Qısa müddət sonra evdə anormal hadisələr başladı: oyuncaqlar öz-özünə hərəkət edir, elektrik cihazları sönüb-yanır və körpənin beşiyinin yanında soyuq hava kütlələri formalaşırdı.

Lakin ən dəhşətli hücumlar birbaşa evin atası Toni Pikmana yönəldi. Ruh kişilərə qarşı kəskin nifrət bəsləyirdi — bu, Sallienin onu kəsən kişi həkimə olan qisas hissi ilə izah edilirdi.`,
        badge: 'claim',
        badgeText: 'Şahid Qeydləri'
      },
      {
        id: 'fiziki-hucumlar',
        title: 'TV Çəkilişi Zamanı Canlı Yaranan Qanlı Cızıqlar',
        content: `Hadisə bütün Amerikanın diqqətini çəkdi və məşhur "Sightings" televiziya proqramı evi araşdırmağa gəldi. Canlı çəkiliş zamanı, heç kimin yaxınlaşmadığı bir anda Toni Pikmanın belində və köynəyinin altında dərhal 4 paralel dırnaq cızığı qanamağa başladı.

Dermatoloqlar və məhkəmə ekspertləri cızıqların dərinin daxilindən kənara doğru qabardığını və kimyəvi yanıq reaksiyası verdiyini qeyd etdilər. 1994-cü ildə ailə dözməyərək evi tərk etdi.`,
        badge: 'claim',
        badgeText: 'TV və Məhkəmə Foto Sənədləri'
      },
      {
        id: 'demonologiya-skeptisizm',
        title: 'Ruh, yoxsa Şeytani Tələ? Skeptik Baxış',
        content: `Paranormal tədqiqatçılar və demonoloqlar qeyd edirlər ki, evdəki varlıq əslində günahsız bir uşaq ruhu deyil, özünü uşaq cildinə salaraq insanların rəğbətini qazanan və sonra kişilərə fiziki xəsarət yetirən neqativ şeytani (demonic) poltergeyst enerjisidir.

Skeptiklər isə dermatoqrafizm (dərinin mexaniki qıcıqlanmaya həssaslığı) və psixosomatik stress amillərini vurğulayırlar.`,
        badge: 'theory',
        badgeText: 'Demonoloji və Skeptik Hipotez'
      }
    ],
    keyFacts: [
      { label: 'Ünvan', value: '508 N 2nd St, Atchison, Kansas, ABŞ', status: 'verified_fact' },
      { label: 'Hadisə Tarixi', value: '1906 (Dr. Finney) – 1992–1994 (Pickman ailəsi)', status: 'verified_fact' },
      { label: 'Sənədləşdirilmiş İncidentlər', value: '100-dən çox fiziki cızıq, telekinez və alovlanma', status: 'verified_fact' },
      { label: 'Hazırkı Status', value: 'Tədqiqatçılar üçün açıq muzey-tədqiqat evi', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Travmatik Uşaq Ruhu Qisası',
        likelihood: 'Orta',
        description: 'Anesteziyasız vəfat edən 6 yaşlı Sallienin kişi fiqurlarına qarşı intiqam hücumları.',
        scientificConsensus: 'Paranormal folklor nəzəriyyəsi.'
      },
      {
        name: 'Dermatoqrafizm və Stress',
        likelihood: 'Yüksək',
        description: 'Fiziki cızıqların kəskin psixoloji gərginlik və həssas dəri reaksiyasından qaynaqlanması.',
        scientificConsensus: 'Nevroloq və dermatoloqların əsas izahı.'
      }
    ],
    sources: [
      { title: 'The Sallie House Haunting: A True Story', author: 'Debra Pickman', publisher: 'Llewellyn Publications', year: '2010', type: 'book' },
      { title: 'Haunted Heartland', author: 'Beth Scott & Michael Norman', publisher: 'Dorset Press', year: '1985', type: 'book' }
    ],
    relatedArticleSlugs: ['enfield-poltergeysti', 'amityville-dehseti', 'bell-ifritesi-leneti']
  },
  {
    id: 'mega-002',
    title: 'Queen Mary Ghost Ship — Long Beach Sahilindəki Əbədi Ruhlu Layner',
    originalName: 'RMS Queen Mary (The Grey Ghost Ocean Liner)',
    slug: 'queen-mary-kabus-gemisi',
    description: 'İkinci Dünya Müharibəsində "Boz Ruh" kimi 10.000-lərlə əsgər daşımış, HMS Curacoa kreyserini ikiyə bölərək 338 dənizçinin boğulmasına səbəb olmuş və bu gün 50-dən çox aktiv ruhun görüldüyü lüks tarixi okean layneri.',
    category: 'paranormal',
    subcategory: 'Dəniz kabusları və tarixi laynerlər',
    tags: ['Queen Mary', 'Long Beach', 'Gəmi', 'Kabus', 'B-Deck', 'HMS Curacoa', 'Boz Ruh'],
    date: '1936 – Günümüz',
    location: 'Long Beach, Kaliforniya, ABŞ',
    coordinates: '33°45′11″N 118°11′28″W',
    status: 'Tarixi Muzey, Mehmanxana və Milli Qeydiyyat Abidəsi',
    theoriesCount: 'Sənədləşdirilmiş Tarixi Faciələr',
    readingTime: 9,
    views: 41500,
    trendingScore: 86,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Dəniz və Hərb Tarixi Şöbəsi',
    tableOfContents: [
      { id: 'tarix-ve-xidmet', title: '1. 1936-cı İl: Atlantikanın Ən Sürətli Nəhəngi və "Boz Ruh"' },
      { id: 'curacoa-faciəsi', title: '2. 2 Oktyabr 1942: HMS Curacoa Faciəsi və 338 Ölüm' },
      { id: 'qapali-kayuta-b340', title: '3. Ən Məşhur Anomaliyalar: B340 Kayutası və Su Hovuzundakı Qadın' },
      { id: 'qazanxana-ve-qapi-13', title: '4. 13 Nömrəli Su Keçirməz Qapı və Əzilmiş Matrosun Xəyalı' },
      { id: 'menbeler', title: '5. Dənizçilik Arxivləri' }
    ],
    sections: [
      {
        id: 'tarix-ve-xidmet',
        title: '1936-cı İl: Atlantikanın Ən Sürətli Nəhəngi və "Boz Ruh"',
        content: `1936-cı ildə istismara verilən Britaniyanın RMS Queen Mary layneri dövrünün ən lüks və sürətli gəmisi idi. 81.000 tonluq nəhəng gəmi Atlantika okeanını rekord sürətlə keçərək "Mavi Lent" (Blue Riband) mükafatını qazanmışdı.

İkinci Dünya Müharibəsi başlayanda gəmi boz rəngə boyandı, silahlandırıldı və eyni anda 15.000-dən çox əsgər daşıya bilən hərbi nəqliyyat gəmisinə çevrildi. O qədər sürətli idi ki (saatda 55 km/s), heç bir alman U-boot sualtı qayığı ona çata bilmirdi. Adolf Hitler gəmini batıran kapitana 250.000 dollar mükafat və Dəmir Xaç vəd etmişdi.`,
        badge: 'fact',
        badgeText: 'Britaniya Dənizçilik Arxivi'
      },
      {
        id: 'curacoa-faciəsi',
        title: '2 Oktyabr 1942: HMS Curacoa Faciəsi və 338 Ölüm',
        content: `2 oktyabr 1942-ci ildə Şotlandiya sahillərində 10.000 amerikalı əsgəri daşıyan Queen Mary ona eskortluq edən Britaniya HMS Curacoa yüngül kreyseri ilə ziqzaq manevri zamanı fəlakətli şəkildə toqquşdu. 81.000 tonluq nəhəng Queen Mary 4.200 tonluq kreyseri bir göz qırpımında tən ortadan ikiyə böldü.

Alman sualtı qayıqlarının yaxınlıqda olması ehtimalına görə hərbi əmrə əsasən Queen Mary dayana və dənizçiləri xilas edə bilməzdi. Nəticədə 338 britaniyalı dənizçi buzlu suda boğularaq həlak oldu. Bu dəhşətli faciənin qurbanlarının fəryadlarının hələ də gəminin burun hissəsində əks-səda verdiyi deyilir.`,
        badge: 'fact',
        badgeText: 'Kral Hərbi Dəniz Qüvvələri Hesabatı'
      },
      {
        id: 'qapali-kayuta-b340',
        title: 'Ən Məşhur Anomaliyalar: B340 Kayutası və Su Hovuzundakı Qadın',
        content: `1967-ci ildə təqaüdə çıxaraq Kaliforniyanın Long Beach limanında daimi lövbər salan Queen Mary bu gün otel və muzey kimi fəaliyyət göstərir.

B340 nömrəli kayuta paranormal hadisələrin ifrat dərəcədə intensivliyi səbəbindən illərlə qonaqlara bağlanmışdı: çarpayı örtüklərinin dartılması, kranların öz-özünə qaynayan su axıtması və qaranlıq kölgələrin peyda olması. Birinci sinif qapalı su hovuzunda isə 1930-cu illərin dəbində ağ ziyafət paltarı geyinmiş qadın xəyalı və göyərtədə yaş uşaq ayaq izləri minlərlə qonaq və mühafizəçi tərəfindən qeydə alınmışdır.`,
        badge: 'claim',
        badgeText: 'Muzey İdarə Heyəti Qeydiyyatı'
      },
      {
        id: 'qazanxana-ve-qapi-13',
        title: '13 Nömrəli Su Keçirməz Qapı və Əzilmiş Matrosun Xəyalı',
        content: `Gəminin maşın şöbəsində, 13 nömrəli su keçirməz qapının bağlanma təlimi zamanı 18 yaşlı Con Pedder adlı gənc matros qapının arasında qalaraq faciəvi şəkildə əzilib ölmüşdü. Həmin ərazidə mavi kombinezon geyinmiş və saqqallı gənc dənizçi xəyalının gəzdiyi, qapıların metal səthində qəfil soyuq nöqtələrin yarandığı dəfələrlə termal kameralarla çəkilmişdir.`,
        badge: 'fact',
        badgeText: 'Dənizçilik Qəza Protokolu'
      }
    ],
    keyFacts: [
      { label: 'Suya Buraxılma', value: '26 Sentyabr 1934 (Con Brown & Co.)', status: 'verified_fact' },
      { label: 'Müharibə Faciəsi', value: 'HMS Curacoa toqquşması (338 dənizçi həlak oldu)', status: 'verified_fact' },
      { label: 'Qeydə Alınan Kabus Nöqtələri', value: 'B340 kayutası, 1-ci sinif hovuzu, 13-cü qapı', status: 'verified_fact' },
      { label: 'Mövcud Yeri', value: 'Long Beach Limanı, Kaliforniya, ABŞ', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'RMS Queen Mary: A History in Photographs', author: 'David Ellery', publisher: 'The History Press', year: '2012', type: 'book' },
      { title: 'Ghosts of the Queen Mary', author: 'Brian Clune', publisher: 'History Press', year: '2014', type: 'book' }
    ],
    relatedArticleSlugs: ['mary-celeste-sirri', 'flannan-isles-mayak-itkinleri', 'stanley-oteli-217']
  },
  {
    id: 'mega-003',
    title: 'London Qülləsinin Ruhları — Anne Boleyn və Qüllədəki Şahzadələrin Qətli',
    originalName: 'Ghosts of the Tower of London (Royal Executions and Tragedy)',
    slug: 'london-qullesi-ve-sahzadeler',
    description: '1483-cü ildə III Riçard tərəfindən Qanlı Qüllədə boğdurulduğu güman edilən iki gənc şahzadə və VIII Henrinin boynunu vurdurduğu Anna Boleynin başsız gəzən ruhu haqqında 900 illik rəsmi kral qala tarixi.',
    category: 'paranormal',
    subcategory: 'Tarixi qalalar və monarxiya faciələri',
    tags: ['Tower of London', 'Anne Boleyn', 'Princes in the Tower', 'İngiltərə', 'Monarxiya', 'Tarix', 'Kraliyyət'],
    date: '1066 – Günümüz',
    location: 'London, Böyük Britaniya',
    coordinates: '51°30′30″N 0°04′34″W',
    status: 'UNESCO Ümumdünya İrsi və Rəsmi Kraliyyət Sarayı',
    theoriesCount: 'Sənədləşdirilmiş Tarixi Edamlar və Şahidlər',
    readingTime: 10,
    views: 43700,
    trendingScore: 88,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Britaniya Monarxiya Tarixi Şöbəsi',
    tableOfContents: [
      { id: 'qalanin-qanli-tarixi', title: '1. 1078: Fateh Uilyam və İngiltərənin Ən Qorxunc Zindanı' },
      { id: 'sahzadelerin-qetli', title: '2. 1483: Qanlı Qüllədə Yoxa Çıxan İki Şahzadə (V Edvard və Riçard)' },
      { id: '1674-skeletler', title: '3. 1674: Pilləkən Altında Tapılan Uşaq Skeletləri' },
      { id: 'anna-boleyn', title: '4. Kraliçanın Başsız Xəyalı və Beefeater Keşikçilərinin Şahidliyi' },
      { id: 'menbeler', title: '5. Kraliyyət Arxivləri və Ədəbiyyat' }
    ],
    sections: [
      {
        id: 'qalanin-qanli-tarixi',
        title: '1078: Fateh Uilyam və İngiltərənin Ən Qorxunc Zindanı',
        content: `London Qülləsi (Her Majesty's Royal Palace and Fortress of the Tower of London) — 1078-ci ildə Fateh Uilyam tərəfindən Temza çayı sahilində ucaldılmış və 900 il boyu həm kral sarayı, həm dövlət xəzinəsi, həm də ən yüksək rütbəli xəyanətkarların işgəncə və edam məkanı olmuşdur.

Qala divarları arasında onlarla kraliça, lord, yepiskop və dövlət xadimi işgəncələrə məruz qalmış və başları baltayla kəsilmişdir. Bu səbəbdən London Qülləsi dünyanın ən sıx paranormal müşahidələri olan tarixi abidələrindən biri hesab olunur.`,
        badge: 'fact',
        badgeText: 'Tarixi Qala Arxivi'
      },
      {
        id: 'sahzadelerin-qetli',
        title: '1483: Qanlı Qüllədə Yoxa Çıxan İki Şahzadə (V Edvard və Riçard)',
        content: `İngiltərə tarixinin ən qaranlıq cinayətlərindən biri 1483-cü ilin yayında baş verdi. Kral IV Edvardın ölümündən sonra onun 12 yaşlı oğlu V Edvard və 9 yaşlı qardaşı York hersoqu Riçard qanuni taxt-tac varisi idilər.

Lakin onların qəyyumu və əmiləri Qloster hersoqu (sonradan Kral III Riçard) uşaqları tacqoyma bəhanəsi ilə Qülləyə (Garden Tower, indiki Bloody Tower / Qanlı Qüllə) yerləşdirdi. 1483-cü ilin avqustundan sonra uşaqlar bir daha canlı görülmədilər. Tarixçilər onların yataqda yastıqla boğularaq cəsədlərinin gizlədildiyini qeyd edirlər.`,
        badge: 'fact',
        badgeText: 'Britaniya Monarxiya Sənədləri'
      },
      {
        id: '1674-skeletler',
        title: '1674: Pilləkən Altında Tapılan Uşaq Skeletləri',
        content: `Təxminən 200 il sonra, 1674-cü ildə Ağ Qüllənin (White Tower) pilləkənlərinin təmiri və sökülməsi zamanı fəhlələr 3 metr dərinlikdə taxta qutuda iki gənc uşağın skeletini aşkar etdilər.

Dövrün kralı II Çarlz onların öldürülən şahzadələr olduğuna qərar verdi və qalıqları mərmər sarkofaqda Vestminster Abbatlığının Kral Məqbərəsinə köçürtdü. Qalada növbə çəkən keşikçilər dəfələrlə gecələr Qanlı Qüllənin pilləkənlərində ağ gecəliklərdə əl-ələ tutub ağlayan iki uşaq fiqurunun peyda olduğunu və divara toxunduqda yox olduğunu bildirmişlər.`,
        badge: 'fact',
        badgeText: 'Vestminster Abbatlığı Qeydiyyatı'
      },
      {
        id: 'anna-boleyn',
        title: 'Kraliçanın Başsız Xəyalı və Beefeater Keşikçilərinin Şahidliyi',
        content: `London Qülləsinin ən məşhur ruhu Kral VIII Henrinin ikinci arvadı və Kraliça I Elizabetin anası Anna Boleyn-dir (Anne Boleyn). 19 may 1536-cı ildə xəyanət və cadugərlik kimi saxta ittihamlarla Tower Green meydançasında xüsusi çağırılmış fransız qılınc cəlladı tərəfindən boynu vurulmuşdur.

Yüzlərlə kral qvardiyaçısı ("Beefeater") və qala bələdçisi Anna Boleynin kəsilmiş başını qoltuğunun altında tutaraq Müqəddəs Pyotr kapellasına (St Peter ad Vincula) doğru getdiyini, bəzən isə qala həyətində zərif ipək paltarda süzüldüyünü protokollarda sənədləşdirmişlər.`,
        badge: 'claim',
        badgeText: 'Kral Qarovulçuları Şahidlik Arxivi'
      }
    ],
    keyFacts: [
      { label: 'Qalanın İnşası', value: '1078 (Fateh Uilyam tərəfindən)', status: 'verified_fact' },
      { label: 'Məşhur Qurbanlar', value: 'Anna Boleyn, Şahzadə V Edvard, Ledi Ceyn Qrey', status: 'verified_fact' },
      { label: 'Skeletlərin Tapılma Tarixi', value: '1674 (Ağ Qüllənin pilləkənləri altından)', status: 'verified_fact' },
      { label: 'Status', value: 'UNESCO Ümumdünya İrsi və Rəsmi Kral Sarayı', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Princes in the Tower', author: 'Alison Weir', publisher: 'Ballantine Books', year: '1992', type: 'book' },
      { title: 'The Life and Death of Anne Boleyn', author: 'Eric Ives', publisher: 'Blackwell Publishing', year: '2004', type: 'book' },
      { title: 'Tower of London: 900 Years of English History', author: 'Peter Hammond', publisher: 'Historic Royal Palaces', year: '1999', type: 'book' }
    ],
    relatedArticleSlugs: ['sedlec-ossuary', 'eastern-state-hebsxanasi', 'winchester-sirli-malikanesi']
  },

  // --- UNSOLVED DISAPPEARANCES & MYSTERIES ---
  {
    id: 'mega-004',
    title: 'Flight 19 — Bermud Üçbucağında İtkin Düşən 5 Avenger Təyyarəsi və Xilasedici Heyət',
    originalName: 'Flight 19 (Lost Patrol)',
    slug: 'flight-19-bermud-ucbucagi',
    description: '5 dekabr 1945-ci ildə Florida sahillərindən havaya qalxan 5 ədəd TBM Avenger bombardmançı təyyarəsinin kompaslarının pozularaq 14 pilotla birlikdə Bermud üçbucağında yoxa çıxması və onları axtarmağa gedən PBM Mariner təyyarəsinin də göyə sovrulması.',
    category: 'sirli-hadiseler',
    subcategory: 'İtkin düşmələr',
    tags: ['Flight 19', 'Bermud Üçbucağı', 'ABŞ HDQ', 'Charles Taylor', '1945', 'İtkin Təyyarə'],
    date: '5 Dekabr 1945',
    location: 'Atlantik Okeanı, Bermud Üçbucağı',
    coordinates: '26°04′12″N 80°09′10″W',
    status: 'Rəsmi ABŞ Hərbi Dəniz Qüvvələri Açılmamış İnsidenti',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 8,
    views: 49800,
    trendingScore: 93,
    factStatus: 'unresolved_unknown',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Hərbi Aviasiya Arxivi',
    tableOfContents: [
      { id: 'ucus-ve-kompas', title: '1. Leytenant Taylorun Radio Danışıqları' },
      { id: 'mariner-partlayisi', title: '2. PBM Mariner Xilasetmə Təyyarəsinin Qəzası' }
    ],
    sections: [
      {
        id: 'ucus-ve-kompas',
        title: '1. Leytenant Taylorun Radio Danışıqları',
        content: `5 dekabr 1945-ci il saat 14:10-da Fort Lauderdale bazasından təlim uçuşu üçün havaya qalxan 5 təyyarənin komandiri leytenant Çarlz Teylor saat 15:40-da bazaya radio ilə müraciət etdi: "Hər iki kompasım sıradan çıxıb. Harada olduğumuzu bilmirik. Okean heç vaxt görmədiyimiz qəribə ağ bir rəng alıb." Qrup günbatan vaxtı yanacaqları bitənə qədər çaşqınlıq içində okean üzərində uçdu və nəhəng dalğalara eniş etməyə məcbur oldu. Təyyarələrdən və 14 ekipaj üzvündən heç bir iz tapılmadı.`,
        badge: 'fact',
        badgeText: 'ABŞ HDQ Təhqiqat Şurası Hesabatı (1946)'
      },
      {
        id: 'mariner-partlayisi',
        title: '2. PBM Mariner Xilasetmə Təyyarəsinin Qəzası',
        content: `Uçuş 19-u axtarmaq üçün göndərilən 13 nəfərlik PBM Mariner uçan qayığı havaya qalxdıqdan cəmi 20 dəqiqə sonra radardan itdi. Yaxınlıqdakı SS Gaines Mills ticarət gəmisinin kapitanı havada nəhəng alov şarı və partlayış gördüyünü bildirdi. Təyyarənin qalıqları heç vaxt aşkar olunmadı.`,
        badge: 'fact',
        badgeText: 'Gəmi Jurnalı Qeydiyyatı'
      }
    ],
    keyFacts: [
      { label: 'İtkin təyyarələr', value: '5 TBM Avenger + 1 PBM Mariner', status: 'verified_fact' },
      { label: 'İtkin canlı qüvvə', value: '27 dənizçi və pilot', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Yanacaq Bitməsi və Şərq İstiqamətində İtkin', likelihood: 'Yüksək', description: 'Teylorun Baham adalarını Florida Keys zənn edərək okeanın dərinliklərinə doğru getməsi.' },
      { title: 'Metan Qazı Püskürməsi və Maqnit Anomaliyası', likelihood: 'Orta', description: 'Okean dibindən qalxan metan qabarcıqlarının gəmi və təyyarə sıxlığını pozması.' }
    ],
    sources: [{ title: 'Board of Investigation Inquiry into the Disappearance of Flight 19', publisher: 'U.S. Navy', year: '1946', type: 'government' }],
    relatedArticleSlugs: ['mary-celeste-sirri', 'flannan-isles-mayak-itkinleri', 'tunguska-partlayisi-1908']
  },
  {
    id: 'mega-005',
    title: 'Roanoke İtkin Koloniyası (1590) — Ağaca Qazınmış "CROATOAN" Şifrəsi',
    originalName: 'The Lost Colony of Roanoke',
    slug: 'roanoke-itkin-koloniyasi',
    description: '1587-ci ildə Şimali Karolinada qurulan ilk ingilis məskəninin qubernator Con Uayt 3 il sonra qayıtdıqda tamamilə boş tapılması və ağaca oyulmuş sirli "CROATOAN" sözündən başqa heç bir döyüş və ya məzar izinin olmaması.',
    category: 'sirli-hadiseler',
    subcategory: 'İtkin düşmələr',
    tags: ['Roanoke', 'Croatoan', 'John White', 'Virginia Dare', '1590', 'İtkin Koloniya'],
    date: '1587 – 1590',
    location: 'Roanoke Adası, Şimali Karolina, ABŞ',
    coordinates: '35°55′42″N 75°42′15″W',
    status: 'Tarixi Açılmamış Koloniya Sirri',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 7,
    views: 37200,
    trendingScore: 83,
    factStatus: 'unresolved_unknown',
    lastUpdated: '11 Avqust 2026',
    author: 'DARKPEDIA Erkən Amerika Arxivi',
    tableOfContents: [
      { id: 'uc-il-sonra-qayidis', title: '1. Qubernator Con Uaytın Qayıdışı və Boş Kənd' },
      { id: 'kroatoan-sozu', title: '2. "CROATOAN" Şifrəsi və Yerli Tayfalarla İnteqrasiya' }
    ],
    sections: [
      {
        id: 'uc-il-sonra-qayidis',
        title: '1. Qubernator Con Uaytın Qayıdışı və Boş Kənd',
        content: `1587-ci ildə Con Uayt 115 kolonisti (o cümlədən Amerikada doğulan ilk ingilis uşağı olan nəvəsi Virginia Dare-i) Roanoke adasında qoyaraq təchizat üçün İngiltərəyə qayıtdı. İspan Armadası ilə müharibə səbəbindən Uayt yalnız 1590-cı ildə geri qayıda bildi. Qalaya çatanda o, bütün evlərin söküldüyünü, heç bir insan cəsədi və ya qan izinin olmadığını gördü.`,
        badge: 'fact',
        badgeText: 'Con Uaytın Gündəliyi (1590)'
      },
      {
        id: 'kroatoan-sozu',
        title: '2. "CROATOAN" Şifrəsi və Yerli Tayfalarla İnteqrasiya',
        content: `Giriş dirəyinə böyük hərflərlə "CROATOAN", yaxınlıqdakı ağaca isə "CRO" sözləri qazınmışdı. Əvvəlcədən razılaşmaya görə, əgər sakinlər təhlükə ilə üzləşsəydilər, sözün yanına Malta xaçı qoymalı idilər; lakin heç bir xaç işarəsi yox idi. Fırtına səbəbindən Uayt 80 km cənubda yerləşən Kroatoan (müasir Hatteras) adasına gedə bilmədi və İngiltərəyə qayıtmağa məcbur oldu. Müasir arxeoloqlar kolonistlərin yerli hindu tayfalarına qarışdığını ehtimal edirlər.`,
        badge: 'theory',
        badgeText: 'Arxeoloji DNT Hipotezi'
      }
    ],
    keyFacts: [
      { label: 'İtkin sayı', value: '115 nəfər', status: 'verified_fact' },
      { label: 'İlk ingilis körpəsi', value: 'Virginia Dare', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Kroatoan Tayfasına Qarışma (Assimilyasiya)', likelihood: 'Yüksək', description: 'Aclıqdan xilas olmaq üçün yerli hindu qəbiləsi ilə dinc birləşmə.' },
      { title: 'İspan Basqını və ya Xəstəlik', likelihood: 'Aşağı', description: 'İspan eskadronları tərəfindən dənizdən məhv edilmə.' }
    ],
    sources: [{ title: 'Roanoke: The Abandoned Colony', author: 'Karen Ordahl Kupperman', publisher: 'Rowman & Littlefield', year: '1984', type: 'book' }],
    relatedArticleSlugs: ['flannan-isles-mayak-itkinleri', 'mary-celeste-sirri', 'dyatlov-asirimi-hadisesi']
  },
  {
    id: 'mega-006',
    title: 'Dancing Plague of 1518 — Strasburqda İnsanların Ölənə Qədər Rəqs Etdiyi Kütləvi Dəlilik',
    originalName: 'Dancing Plague of 1518',
    slug: 'strasburq-reqs-epidemiyasi-1518',
    description: '1518-ci ilin iyulunda Strasburqda Frau Troffea adlı qadının küçədə dayanmadan rəqs etməyə başlaması ilə 400 nəfərə yayılan, qurbanların ürək tutması və yorğunluqdan ölənə qədər həftələrlə rəqs etdiyi tarixi kollektiv psixogen anomaliya.',
    category: 'psixologiya',
    subcategory: 'Kollektiv panika',
    tags: ['Dancing Plague', 'Strasbourg', '1518', 'Ergotism', 'Kollektiv Psixoz', 'Tarix'],
    date: 'İyul – Sentyabr 1518',
    location: 'Strasburq, Elzas (Müqəddəs Roma İmperiyası)',
    coordinates: '48°35′00″N 7°45′00″E',
    status: 'Tarixi Sənədləşdirilmiş Tibbi Hadisə',
    theoriesCount: '2 Elmi Nəzəriyyə',
    readingTime: 7,
    views: 38900,
    trendingScore: 87,
    factStatus: 'verified_fact',
    lastUpdated: '13 Avqust 2026',
    author: 'DARKPEDIA Orta Əsr Tibb Tarixi',
    tableOfContents: [
      { id: 'frao-troffea', title: '1. Frau Troffea və Rəqsin Yayılması' },
      { id: 'seher-rehberliyi', title: '2. Şəhər Rəhbərliyinin Ölümcül Səhvi: Səhnələr və Musiqiçilər' },
      { id: 'erqotizm-yoxsa-histeriya', title: '3. Erqotizm Zəhərlənməsi və Müqəddəs Vit Lənəti' }
    ],
    sections: [
      {
        id: 'frao-troffea',
        title: '1. Frau Troffea və Rəqsin Yayılması',
        content: `1518-ci ilin iyul ayında Strasburq küçələrinə çıxan Frau Troffea heç bir musiqi olmadan dəlicəsinə rəqs etməyə başladı. 4 gün ərzində ayaqları qanayana qədər rəqs etdi. Bir həftə ərzində ona 34 nəfər, bir ay içində isə əksəriyyəti qadın olmaqla 400 nəfər qoşuldu.`,
        badge: 'fact',
        badgeText: 'Strasburq Bələdiyyə Salnamələri'
      },
      {
        id: 'seher-rehberliyi',
        title: '2. Şəhər Rəhbərliyinin Ölümcül Səhvi: Səhnələr və Musiqiçilər',
        content: `Həkimlər bu vəziyyəti "qızmar qan xəstəliyi" adlandırdılar və müalicə kimi xəstələrin rəqsi davam etdirərək tər tökməsini məsləhət gördülər. Bələdiyyə taxıl bazarında xüsusi taxta səhnələr qurdu və rəqs edənlər üçün musiqiçilər tutdu. Bu fəlakətli qərar nəticəsində gündə 15 nəfər ürək tutması və dehidratasiyadan vəfat etməyə başladı.`,
        badge: 'fact',
        badgeText: 'Həkim Protokolu (1518)'
      },
      {
        id: 'erqotizm-yoxsa-histeriya',
        title: '3. Erqotizm Zəhərlənməsi və Müqəddəs Vit Lənəti',
        content: `Tarixçi John Waller sübut edir ki, hadisənin əsas səbəbi həmin il bölgədə hökm sürən dəhşətli aclıq, çiçək xəstəliyi və Müqəddəs Vitin lənətinə olan dərin dini inancın yaratdığı kütləvi stress histeriyası ("Mass Psychogenic Illness") idi. Çovdar göbələyindən zəhərlənmə (erqotizm) isə damarları daraltdığı üçün günlərlə rəqs etməyə fiziki imkan verməzdi.`,
        badge: 'fact',
        badgeText: 'Tarixi Neyropsixiatriya'
      }
    ],
    keyFacts: [
      { label: 'Yoluxanların sayı', value: '~400 nəfər', status: 'verified_fact' },
      { label: 'Gündəlik ölüm', value: '15 nəfərə qədər', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Kütləvi Psixogen Histeriya (Stress Psixozu)', likelihood: 'Yüksək', description: 'Dözülməz aclıq və dini xurafatın doğurduğu trans rəqsi.' },
      { title: 'Erqot Zəhərlənməsi (LSD sələfi)', likelihood: 'Aşağı', description: 'Kiflənmiş çovdar çörəyinin törətdiyi halüsinasiya tutması.' }
    ],
    sources: [{ title: 'A Time to Dance, a Time to Die: The Extraordinary Story of the Dancing Plague of 1518', author: 'John Waller', publisher: 'Icon Books', year: '2008', type: 'book' }],
    relatedArticleSlugs: ['cotard-deluziyasi-gezen-cesed-sindromu', 'mkultra-cia-agil-nezareti', 'stanford-hebsxana-eksperimenti']
  },

  // --- TRUE CRIME CASES ---
  {
    id: 'mega-007',
    title: 'Black Dahlia (1947) — Elizabeth Short-un İkiyə Bölünmüş Cəsədi və Los-Ancelesin Ən Qaranlıq Cinayəti',
    originalName: 'The Black Dahlia Murder (Elizabeth Short)',
    slug: 'black-dahlia-elizabeth-short',
    description: '15 yanvar 1947-ci ildə Los-Ancelesin Leimert Park məhəlləsində 22 yaşlı Elizabet Şortun beli tam yarıdan ikiyə bölünmüş, daxili orqanları yuyulmuş və ağzı qulaqlarına qədər "Glazqo təbəssümü" ilə kəsilmiş vəziyyətdə tapılan dünya şöhrətli açılmamış cinayət işi.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Məşhur açılmamış cinayətlər',
    tags: ['Black Dahlia', 'Elizabeth Short', 'Los Angeles', '1947', 'LAPD', 'Açılmamış Cinayət', 'George Hodel'],
    date: '15 Yanvar 1947',
    location: 'Leimert Park, Los-Anceles, Kaliforniya, ABŞ',
    coordinates: '34°00′58″N 118°19′55″W',
    status: 'Rəsmi Açılmamış LAPD Soyuq İşi',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 9,
    views: 56700,
    trendingScore: 95,
    factStatus: 'unresolved_unknown',
    lastUpdated: '17 Avqust 2026',
    author: 'DARKPEDIA Kriminalistika və Məhkəmə Təbabəti',
    tableOfContents: [
      { id: 'dehsetli-kesf', title: '1. Leimert Parkda Qazon Üzərindəki Manikensayağı Cəsəd' },
      { id: 'cerrahi-deqiqlik', title: '2. Tibbi Cərrahiyyə Dəqiqliyi və Qatilin Məktubları' },
      { id: 'dr-corc-hodel', title: '3. Baş Şübhəli: Dr. George Hodel və Gizli Qeydlər' }
    ],
    sections: [
      {
        id: 'dehsetli-kesf',
        title: '1. Leimert Parkda Qazon Üzərindəki Manikensayağı Cəsəd',
        content: `15 yanvar 1947-ci il səhəri yerli sakin Betti Bersinqer 3 yaşlı qızı ilə küçədə gedərkən otların arasında ağ parça gördü və bunun sınmış maneken olduğunu zənn etdi. Yaxınlaşdıqda bunun 22 yaşlı Elizabet Şortun çılpaq, tam ortadan iki yerə mişarlanmış və heç bir damla qanı qalmayan cəsədi olduğunu dəhşətlə anladı.`,
        badge: 'fact',
        badgeText: 'LAPD Hadisə Yeri Protokolu'
      },
      {
        id: 'cerrahi-deqiqlik',
        title: '2. Tibbi Cərrahiyyə Dəqiqliyi və Qatilin Məktubları',
        content: `Autopsiya göstərdi ki, cəsəd 2-ci və 3-cü bel fəqərələri arasındakı qığırdaq boşluğundan ("hemicorporectomy") peşəkar cərrahi dəqiqliklə kəsilib. Qatilin qurbanı günlərlə sağ saxlayaraq işgəncə verdiyi, öldürdükdən sonra vannada yuduğu və səliqə ilə qazonun kənarına qoyduğu müəyyən edildi. Qatil qəzetlərə Elizabetin əl çantasını və şəxsiyyət vəsiqəsini benzinlə silərək göndərdi.`,
        badge: 'fact',
        badgeText: 'Koroner Hesabatı (1947)'
      },
      {
        id: 'dr-corc-hodel',
        title: '3. Baş Şübhəli: Dr. George Hodel və Gizli Qeydlər',
        content: `İllər sonra LAPD detektivi Steve Hodel öz atası olan məşhur cərrah Dr. George Hodelin bu cinayəti törətdiyini sübut edən sənədlər tapdı. Polis 1950-ci ildə Hodelin evinə gizli mikrofonlar yerləşdirmiş və onun "Fərz edək ki, Qara Georgiyanı mən öldürdüm. İndi bunu heç kim sübut edə bilməz, çünki katibim ölüb" dediyini lentə almışdı. Lakin yüksək əlaqələri sayəsində o, heç vaxt həbs olunmadı.`,
        badge: 'theory',
        badgeText: 'Gizli Səs Yazısı (1950)'
      }
    ],
    keyFacts: [
      { label: 'Qurban', value: 'Elizabeth Short (22 yaş)', status: 'verified_fact' },
      { label: 'Tarix', value: '15 Yanvar 1947', status: 'verified_fact' },
      { label: 'Kəsilmə üsulu', value: 'Hemicorporectomy (cərrahi ikiyə bölmə)', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Dr. George Hodel Cərrah Hipotezi', likelihood: 'Yüksək', description: 'Tibbi biliklərə malik elit həkimin sadist sənət qətliamı.' },
      { title: 'Gəzərgi Serial Qatil (Cleveland Torso ilə Əlaqə)', likelihood: 'Orta', description: 'Ohayo ştatındakı parçalanmış cəsədlərlə eyni imza.' }
    ],
    sources: [{ title: 'Black Dahlia Avenger: A Genius for Murder', author: 'Steve Hodel', publisher: 'Arcade Publishing', year: '2003', type: 'book' }],
    relatedArticleSlugs: ['zodiac-killer-sifreleri', 'jack-the-ripper-london', 'hinterkaifeck-fermasi-qetliami']
  },
  {
    id: 'mega-008',
    title: 'Jonestown Kütləvi Zəhərlənməsi (1978) — Jim Jones və 918 Nəfərin "İnqilabi İntiharı"',
    originalName: 'Jonestown Massacre (Peoples Temple)',
    slug: 'jonestown-kutlevi-zeherlenme',
    description: '18 noyabr 1978-ci ildə Qayanada "Xalq Məbədi" təriqətinin lideri Cim Consun əmri ilə sianid qatılmış Flavor Aid içkisi içirdilərək 304-ü uşaq olmaqla 918 insanın öldürüldüyü Amerika tarixinin ən böyük kütləvi təriqət faciəsi.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Serial cinayət hadisələri',
    tags: ['Jonestown', 'Jim Jones', 'Peoples Temple', 'Qayana', '1978', 'Sianid', 'Kult'],
    date: '18 Noyabr 1978',
    location: 'Jonestown, Port Kaituma, Qayana',
    coordinates: '7°42′18″N 59°53′34″W',
    status: 'Tarixi Təsdiqlənmiş Kütləvi Cinayət',
    theoriesCount: 'Rəsmi Federal Sənədlər',
    readingTime: 9,
    views: 47200,
    trendingScore: 91,
    factStatus: 'verified_fact',
    lastUpdated: '18 Avqust 2026',
    author: 'DARKPEDIA Tarixi Ədliyyə və Təriqətlər Arxivi',
    tableOfContents: [
      { id: 'leo-rayan-viziti', title: '1. Konqresmen Leo Ryanın Təftişi və Aeroportdakı Pusqu' },
      { id: 'olum-lenti', title: '2. "Ölüm Lenti" (Death Tape Q-042) və Sianid Çəlləkləri' }
    ],
    sections: [
      {
        id: 'leo-rayan-viziti',
        title: '1. Konqresmen Leo Ryanın Təftişi və Aeroportdakı Pusqu',
        content: `Təriqət üzvlərinin qohumlarının şikayətlərindən sonra ABŞ konqresmeni Leo Ryan və jurnalistlər Qayanadakı cəngəllik kommunasına gəldilər. Bir neçə üzv gizlicə qaçmaq istədiyini bildirdi. Qrup Port Kaituma aerodromunda təyyarəyə minərkən Cim Consun silahlı mühafizəçiləri hücum edərək Konqresmen Ryanı və 4 jurnalisti qətlə yetirdi.`,
        badge: 'fact',
        badgeText: 'FBI Case File #89-4286'
      },
      {
        id: 'olum-lenti',
        title: '2. "Ölüm Lenti" (Death Tape Q-042) və Sianid Çəlləkləri',
        content: `Hücumdan dərhal sonra Cim Cons bütün kəndi toplayaraq "inqilabi intihar" elan etdi. Valideynlər şprislərlə əvvəlcə körpələrinin və uşaqlarının ağzına kalium sianid və valium qatılmış içkini yeritdilər. İmtina edənlər silah gücünə məcbur edildi. 44 dəqiqəlik dəhşətli audio qeyddə ("Death Tape") uşaqların qışqırıqları və Consun soyuqqanlı təlimatları qeyd olunub.`,
        badge: 'fact',
        badgeText: 'FBI Audio Qeydiyyatı Q-042'
      }
    ],
    keyFacts: [
      { label: 'Həlak olanlar', value: '918 nəfər (304 uşaq)', status: 'verified_fact' },
      { label: 'Tarix', value: '18 Noyabr 1978', status: 'verified_fact' },
      { label: 'Zəhər', value: 'Kalium Sianid & Sedativlər', status: 'verified_fact' }
    ],
    theories: [],
    sources: [{ title: 'Raven: The Untold Story of the Rev. Jim Jones and His People', author: 'Tim Reiterman', publisher: 'Dutton', year: '1982', type: 'book' }],
    relatedArticleSlugs: ['stanford-hebsxana-eksperimenti', 'mkultra-cia-agil-nezareti', 'hinterkaifeck-fermasi-qetliami']
  },

  // --- FOLKLORE & CRYPTIDS ---
  {
    id: 'mega-009',
    title: 'Mothman (Güvə-Adam) — Point Pleasant Körpü Qəzasının 2 Metrlik Qırmızı Gözlü Qanadlı Xəbərçisi',
    originalName: 'The Mothman Prophecies',
    slug: 'mothman-guve-adam-point-pleasant',
    description: '1966-1967-ci illərdə Qərbi Virciniyanın Point Pleasant şəhərində görülən, 3 metr qanad açılımı və sinəsində parıldayan iki qırmızı gözü olan, Silver Bridge körpüsünün 46 nəfərlə çökməsindən dərhal sonra yoxa çıxan varlıq.',
    category: 'efsaneler-mifler',
    subcategory: 'Canavar əfsanələri',
    tags: ['Mothman', 'Point Pleasant', 'Silver Bridge', '1967', 'Kriptid', 'Qırmızı Gözlər'],
    date: '1966 – 1967',
    location: 'Point Pleasant, Qərbi Virciniya, ABŞ',
    coordinates: '38°50′40″N 82°08′34″W',
    status: 'Məşhur Şəhər Əfsanəsi & Kriptozoologiya',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 7,
    views: 42300,
    trendingScore: 88,
    factStatus: 'theory',
    lastUpdated: '15 Avqust 2026',
    author: 'DARKPEDIA Folklor və Kriptozoologiya',
    tableOfContents: [
      { id: 'tnt-erazisi', title: '1. Keçmiş TNT Fabrikində İlk Qarşılaşma' },
      { id: 'silver-bridge-cokmesi', title: '2. 15 Dekabr 1967: Silver Bridge Körpüsünün Çökməsi' }
    ],
    sections: [
      {
        id: 'tnt-erazisi',
        title: '1. Keçmiş TNT Fabrikində İlk Qarşılaşma',
        content: `15 noyabr 1966-cı il gecəsi iki gənc ər-arvad — Roger və Linda Scarberry ilə Steve və Mary Mallette İkinci Dünya Müharibəsinin tərk edilmiş TNT fabrik ərazisində maşınla gedərkən 2 metr boyunda, böyük qanadları olan və başı olmayan (gözləri düz sinəsində qırmızı parıldayan) bir varlıq gördülər. Varlıq onların saatda 160 km sürətlə gedən maşınının ardınca heç qanad çalmadan səssizcə uçdu. Növbəti il ərzində 100-dən çox şahid bu məxluqu gördüyünü bildirdi.`,
        badge: 'claim',
        badgeText: 'Polis Qeydiyyatı (1966)'
      },
      {
        id: 'silver-bridge-cokmesi',
        title: '2. 15 Dekabr 1967: Silver Bridge Körpüsünün Çökməsi',
        content: `15 dekabr 1967-ci ildə Ohayo çayı üzərindəki 40 illik Silver Bridge körpüsü axşam tıxacında qəflətən çökdü və 46 insan həlak oldu. Faciədən dərhal sonra Mothman müşahidələri tamamilə kəsildi. Yerli əhali bu varlığın fəlakət xəbərçisi olduğuna inandı.`,
        badge: 'fact',
        badgeText: 'NTSB Faciə Təhqiqatı'
      }
    ],
    keyFacts: [
      { label: 'Məkan', value: 'Point Pleasant, West Virginia', status: 'verified_fact' },
      { label: 'Körpü faciəsi', value: '15 Dekabr 1967 (46 ölü)', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Nadir Qırmızı Gözlü Qum Durnası (Sandhill Crane)', likelihood: 'Yüksək', description: 'Nəhəng qanad açılımına malik quşun gecə projektor işığında böyük görünməsi.' },
      { title: 'Fövqəltəbii Kriptid / Qədim Varlıq', likelihood: 'Aşağı', description: 'Şou qəbiləsinin qədim lənət fiquru.' }
    ],
    sources: [{ title: 'The Mothman Prophecies', author: 'John A. Keel', publisher: 'Saturday Review Press', year: '1975', type: 'book' }],
    relatedArticleSlugs: ['chupacabra-sirri', 'wendigo-ruh-efsanesi', 'skinwalker-ransosu']
  },
  {
    id: 'mega-010',
    title: 'Wendigo — Şimali Amerika Meşələrində İnsan Əti Yeyənlərin Çevrildiyi Qarınqulu Şeytan',
    originalName: 'The Wendigo (Algonquian Myth)',
    slug: 'wendigo-ruh-efsanesi',
    description: 'Alqonkin hindu qəbilələrinin inanclarında dondurucu qışda aclıqdan insan əti yeyən ovçuların qəlbinin buza döndüyü, boyunun ağaclar boyda uzandığı və heç vaxt doymayan qorxunc adamyeyən meşə varlığı.',
    category: 'efsaneler-mifler',
    subcategory: 'Qədim miflər',
    tags: ['Wendigo', 'Algonquin', 'Kannibalizm', 'Folklor', 'Meşə İblisi', 'Şimali Amerika'],
    date: 'Qədim Mifologiya',
    location: 'Böyük Göllər Hövzəsi və Şimali Kanada Tayqası',
    status: 'Antropoloji və Folklor İrsi',
    theoriesCount: 'Psixiatrik və Mədəni İzah',
    readingTime: 6,
    views: 35100,
    trendingScore: 82,
    factStatus: 'theory',
    lastUpdated: '12 Avqust 2026',
    author: 'DARKPEDIA Yerli Xalqlar Folkloru',
    tableOfContents: [
      { id: 'alqonkin-mifi', title: '1. Buz Ürəkli Varlıq və Doymaq Bilməyən Aclıq' },
      { id: 'wendigo-psixozu', title: '2. "Wendigo Psixozu" — Real Psixiatrik Diaqnoz' }
    ],
    sections: [
      {
        id: 'alqonkin-mifi',
        title: '1. Buz Ürəkli Varlıq və Doymaq Bilməyən Aclıq',
        content: `Kri və Ocibve xalqlarının mifologiyasında Vendiqo hündür, skelet kimi arıq, dərisi kül rəngində sümüklərinə yapışmış, gözləri kəlləsinin dərinliyinə batmış və çürük ət iyi verən bir bədheybətdir. O, hər dəfə insan əti yedikdə boyu böyüyür və buna görə də heç vaxt doya bilmir. Bu əfsanə qəbilələri qarlı qış aylarında kannibalizmdən (adam əti yeməkdən) çəkindirmək üçün güclü mədəni tabu idi.`,
        badge: 'fact',
        badgeText: 'Antropoloji Tədqiqat'
      },
      {
        id: 'wendigo-psixozu',
        title: '2. "Wendigo Psixozu" — Real Psixiatrik Diaqnoz',
        content: `Tarixi tibb qeydlərində "Wendigo Psychosis" adlı nadir mədəniyyətə bağlı sindrom mövcuddur. Ağır qış təcridində qalan ovçular özlərinin Vendiqoya çevriləcəklərindən dəhşətli dərəcədə qorxaraq ailə üzvlərini yemək üçün qarşısıalınmaz istək duyduqlarını iddia edirdilər. 1907-ci ildə Cek Fiddler adlı şaman qəbiləsində Vendiqoya çevrilməkdə olan 14 nəfəri öldürdüyünü etiraf etmişdi.`,
        badge: 'fact',
        badgeText: 'Kanada Kral Polisi Məhkəmə Arxivi (1907)'
      }
    ],
    keyFacts: [
      { label: 'Mənşə', value: 'Algonquian qəbilələri (Kri, Ocibve)', status: 'verified_fact' },
      { label: 'Məna', value: 'Tamahkarlıq və kannibalizmə qarşı mədəni tabu', status: 'verified_fact' }
    ],
    theories: [],
    sources: [{ title: 'Windigo: Concept and Myth in Algonquin Culture', author: 'Robert Brightman', publisher: 'American Anthropologist', year: '1988', type: 'peer_reviewed' }],
    relatedArticleSlugs: ['mothman-guve-adam-point-pleasant', 'chupacabra-sirri', 'skinwalker-ransosu']
  }
];
