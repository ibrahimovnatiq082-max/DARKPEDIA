export interface AboutChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  content: string;
  articlesCount?: number;
  keyPrinciples?: string[];
  subsections?: {
    subtitle: string;
    text: string;
    bulletPoints?: string[];
  }[];
}

export const ABOUT_COMPENDIUM: AboutChapter[] = [
  {
    id: 'preambula',
    chapterNumber: 1,
    title: 'Preambula və Ensiklopedik Konstitusiya',
    subtitle: 'DARKPEDIA-nın Tarixi Missiyası, Elmi Prinsipləri və Epistemoloji Zəmini',
    content: `DARKPEDIA — bəşəriyyətin yazılı tarixində qeydə alınmış, lakin ənənəvi elmi konsensus, rəsmi məhkəmə orqanları və dövlət arxivləri tərəfindən hələ də tam izah edilməmiş və ya dəhşətli, sirli, narahatedici xarakter daşıyan bütün hadisələrin, anomaliyaların, cinayətlərin və tarixi sirlərin sistemli şəkildə toplanması, sənədləşdirilməsi və tərəfsiz təhlili üçün yaradılmış qlobal rəqəmsal ensiklopedik fonddur.

İnternet məkanında qaranlıq və sirli mövzular əksər hallarda ucuz sensasiyaçılıq, klik-yemi (clickbait), uydurma qorxu hekayələri (creepypasta) və təsdiqlənməmiş şayiələrlə çirkləndirilmişdir. Bu cür qeyri-ciddi yanaşma insan idrakını çaşdırır, real faciələrin və tarixi faktların üstünü örtür, elmi şübhəçiliyi isə əsassız mistisizmlə əvəz edir. DARKPEDIA bu tendensiyanın qarşısına qətiyyətlə çıxaraq, hər bir hadisəyə akademik dürüstlük, məhkəmə tibbi ekspertizası, arxiv sənədləri və fizika, neyrobiologiya, astronomiya, kriminologiya qanunları çərçivəsində yanaşır.

Bizim ali məqsədimiz mifləri həqiqətlərdən ayırmaq, təsdiqlənmiş faktları şübhəli fərziyyələrdən süzgəcdən keçirmək və bəşər zəkasının qarşılaşdığı ən böyük tapmacaları intellektual zəmində sənədləşdirməkdir. Ensiklopediyamız heç bir mistik, okkult və ya fövqəltəbii inancı təbliğ etmir; lakin insanların tarix boyu qarşılaşdıqları anomaliyaları, qorxuları və izaholunmaz təzahürləri də ört-basdır etmir.`,
    keyPrinciples: [
      'Radikal Tərəfsizlik: Hər bir hadisəyə həm rəsmi elmi, həm də alternativ arqumentlər daxil edilir, lakin spekulyasiyalar mütləq şəkildə etiketlənir.',
      'Sübut İyerarxiyası: Məhkəmə sənədləri və fiziki dəlillər hər zaman şahid ifadələrindən və şifahi rəvayətlərdən üstün tutulur.',
      'Miflərin Dağıdılması: Şəhər əfsanələrinin arxasındakı real psixoloji, sosioloji və ya fiziki amillər ifşa edilir.',
      'Həssaslıq və Hörmət: İnsan itkiləri və real cinayət qurbanları əsla əyləncə və ya oyun xarakterli təqdim olunmur.'
    ],
    subsections: [
      {
        subtitle: '1.1. Ensiklopediyanın Yaranma Tarixçəsi və Zərurəti',
        text: 'XXI əsrin informasiya bolluğu paradoxal şəkildə tarixi sirlərin təhrif olunmasını daha da sürətləndirmişdir. Sosial şəbəkələrin alqoritmləri qorxu və heyrət hisslərini istismar edərək, minlərlə uydurma məlumatı yayır. Məsələn, Dyatlov aşırımı hadisəsi onlarla saxta UFO və qulyabani hekayəsi ilə örtülmüş, nəticədə hadisənin real geofiziki və hipotermik dinamikası unudulmuşdur. DARKPEDIA bu informasiya xaosunu aradan qaldırmaq, arxiv qovluqlarının saralmış vərəqlərini, məhkəmə aktlarını, ballistika və toksikologiya rəylərini bir araya gətirmək zərurətindən doğmuşdur.',
        bulletPoints: [
          'Arxiv qovluqlarının 100% ilkin mənbələrlə tutuşdurulması.',
          'Dövlət sirri statusu ləğv edilmiş (declassified) sənədlərin təhlili.',
          'Beynəlxalq akademik bazalar (JSTOR, PubMed, ScienceDirect) ilə daimi inteqrasiya.'
        ]
      },
      {
        subtitle: '1.2. Qaranlıq Tarixin Epistemologiyası',
        text: 'Epistemologiya (idrak nəzəriyyəsi) kontekstində DARKPEDIA "Qaranlıq hadisə" anlayışını necə təyin edir? Bir hadisənin ensiklopediyamıza daxil edilməsi üçün o, aşağıdakı epistemoloji meyarlardan ən azı ikisinə cavab verməlidir: (a) İnsan həyatı, psixikası və ya sivilizasiya üçün ciddi anomaliya və ya təhlükə təşkil etməsi; (b) Müasir elmi nəzəriyyələrin və ya istintaq orqanlarının hadisəni tam həll edə bilməməsi; (c) Kütləvi şüurda və sosiomədəniyyətdə dərin iz buraxması; (d) Hadisə yerində maddi, lakin ziddiyyətli sübutların mövcudluğu.'
      }
    ]
  },
  {
    id: 'fakt-yoxlama',
    chapterNumber: 2,
    title: 'Fakt Yoxlama Standartları və Maddi Sübutların Təsnifat İyerarxiyası',
    subtitle: 'Üç Pilləli Verifikasiya Sistemi və Mənbələrin Tənqidi Qiymətləndirilməsi',
    content: `DARKPEDIA-da yer alan hər bir məlumat, cümlə və parametr xüsusi verifikasiya süzgəcindən keçir. Biz oxucularımıza yalnız nəyin baş verdiyini deyil, bu məlumatın hansı etibarlılıq dərəcəsinə malik olduğunu aydın göstərməyi borc bilirik. Məhz buna görə də bütün məzmun ciddi şəkildə üç əsas rəng və status kateqoriyasına bölünür.

Statuslar təkcə məqalə səviyyəsində deyil, məqalənin ayrı-ayrı yarımbölmələrində də tətbiq olunur. Bu yanaşma oxucuya bir hadisə daxilində nəyin danılmaz həqiqət olduğunu, nəyin isə cəfəngiyyat və ya sadəcə fərziyyə olduğunu anında anlamağa imkan verir.`,
    keyPrinciples: [
      'Təsdiqlənmiş Fakt (Verified Fact): Rəsmi dövlət aktları, məhkəmə qərarları, DNT və ballistika testləri, resenziyalı elmi jurnallar.',
      'Elmi Nəzəriyyə (Scientific Theory): Təbiət elmləri, riyaziyyat və ya kriminologiya qanunlarına söykənən, lakin birbaşa sübutu çatışmayan hipotezlər.',
      'Təsdiqlənməmiş İddia (Unverified Claim): Şahid rəvayətləri, folklor mifləri, media uydurmaları və ya saxtakarlıq şübhəsi olan məlumatlar.'
    ],
    subsections: [
      {
        subtitle: '2.1. Maddi Sübutların Qiymətləndirilməsi Cədvəli',
        text: 'Arxivlərimizdə sübutların qəbul edilməsi 5 səviyyəli piramida üzrə aparılır: 1-ci dərəcə (Məhkəmə-tibbi və laboratoriya analizləri); 2-ci dərəcə (Rəsmi hökumət və polis hesabatları); 3-cü dərəcə (Çoxsaylı müstəqil şahidlərin üst-üstə düşən ifadələri); 4-cü dərəcə (Dövrün mətbuat xəbərləri və araşdırmaçı jurnalistika); 5-ci dərəcə (Tək şahid iddiaları və anonim xatirələr — yalnız kontekst kimi qeyd olunur).',
        bulletPoints: [
          'DNT və Barmaq İzləri: Genetik profilləşdirmə ən yüksək sübut çəkisinə malikdir.',
          'Foto və Video Təhlili: Rəqəmsal manipulyasiya, işıqlandırma qüsurları və optik illüziyalar spektroqrafik analizlərlə yoxlanılır.',
          'Toksikoloji Ekspertiza: Zəhərlənmə, radiasiya və ya bioloji agentlərin qalıqları laboratoriya protokolları ilə təsdiqlənməlidir.'
        ]
      },
      {
        subtitle: '2.2. Saxtakarlıqların (Hoax) İfşası Metodu',
        text: 'Bir çox məşhur sirr əslində diqqət cəlb etmək və ya maliyyə qazancı üçün təşkil olunmuş saxtakarlıqlardır (məsələn, Amityville hekayəsindəki kommersiya sövdələşmələri və ya Kottingli pəriləri fotoşəkilləri). DARKPEDIA bu saxtakarlıqları ifşa edərkən şəxslərin etiraflarını, foto montaj analizlərini və maliyyə maraqlarını detallı şəkildə sənədləşdirir.'
      }
    ]
  },
  {
    id: 'taksonomiya-bolmeler',
    chapterNumber: 3,
    title: '9 Əsas Tematik Bölmənin Ensiklopedik Taksonomiyası',
    subtitle: 'Struktur Təsnifatı, Tədqiqat Sahələri və Mövzu Əhatəsi',
    content: `DARKPEDIA ensiklopediyası insan idrakının və kainatın ən mürəkkəb sahələrini əhatə edən doqquz fundamental tematik kateqoriya üzrə təşkil olunmuşdur. Hər bir kateqoriya öz daxilində xüsusi metodologiya, mənbə bazası və ekspertiza prinsiplərinə malikdir.

Bu kateqoriyalar sistemi təsadüfi deyil; o, mikro səviyyədən (insan beyni və psixiatriya) makro səviyyəyə (dərin kosmos və astrofizika), tarixi keçmişdən (sirli mətnlər və arxeologiya) müasir kriminalistikaya qədər bütöv bir bilik zəncirini formalaşdırır.`,
    keyPrinciples: [
      '1. Paranormal Hadisələr: İzah olunmamış fiziki təzahürlər, poltergeyst iddiaları, anomaliyalar.',
      '2. Qorxulu Məkanlar: Katakombalar, tərk edilmiş şəhərlər, ölüm zonaları, lənətlənmiş qalalar.',
      '3. Cinayətlər və Qətllər: Açılmamış seriyalı qətllər, müəmmalı yoxa çıxmalar, məhkəmə sirləri.',
      '4. Qəribə Canlılar: Kriptozoologiya, dərin dəniz yırtıcıları, mutasiyalar, parazitlər.',
      '5. Psixologiya və Beyin: Nadir sindromlar, kütləvi histeriya, qarabasmalar, yuxu iflici.',
      '6. Kosmos və Elm: Wow siqnalı, qara dəliklər, Fermi paradoksu, göy cisimləri anomaliyaları.',
      '7. Sirli Hadisələr: Zaman anomaliaları, naməlum siqnallar, izsiz yoxa çıxan gəmilər və təyyarələr.',
      '8. Əfsanələr və Miflər: Tarixi qaranlıq miflər, folklor varlıqları, qədim ayinlər.',
      '9. UFO və Naməlum: Deklassifikasiya olunmuş hərbi qeydlər, UAP müşahidələri, radar anomaliyaları.'
    ],
    subsections: [
      {
        subtitle: '3.1. Kateqoriyalararası Əlaqələr və Çarpaz Tədqiqat',
        text: 'Bir çox mürəkkəb hadisə eyni anda bir neçə kateqoriyanın kəsişməsində yerləşir. Məsələn, "Elisa Lam" hadisəsi həm Qorxulu Məkanlar (Cecil Hotel), həm Cinayətlər, həm də Psixologiya (Bipolyar affektiv pozuntu və psixotik epizod) prizmasından araşdırılmalıdır. DARKPEDIA-nın çarpaz taksonomiyası oxucunun hadisəni tək bir tərəfdən deyil, multidissiplinar bucaqdan görməsini təmin edir.'
      }
    ]
  },
  {
    id: 'kriminalistika-protokol',
    chapterNumber: 4,
    title: 'Kriminalistika və Açılmamış Cinayət İşlərinin Arxiv Nizamnaməsi',
    subtitle: 'Məhkəmə Tibbi Ekspertizası, Soyuq Qovluqlar (Cold Cases) və Cinayətkar Profilaktikası',
    content: `Açılmamış cinayətlər və seriyalı qatillərin sənədləşdirilməsi DARKPEDIA-nın ən həssas və məsuliyyətli bölmələrindən biridir. Biz bu bölmədə yalnız qətlin təfərrüatlarını təsvir etmirik; əsas diqqəti istintaqın buraxdığı qüsurlara, dövrün kriminalistik texnologiyalarının məhdudiyyətlərinə və müasir DNT genetik genealogiyasının imkanlarına yönəldirik.

Cinayət hadisələrinin arxivləşdirilməsində əsas məqsəd cinayətkarları qəhrəmanlaşdırmaq (sensationalism) deyil, cinayətin anatomiyasını, qurbanların xatirəsini və ədalətin niyə bərqərar olmadığını obyektiv şəkildə üzə çıxarmaqdır.`,
    keyPrinciples: [
      'Qurbanların Ləyaqəti: Qurbanların şəxsi həyatı təhrif edilmir, əsassız şayiələrə yer verilmir.',
      'İstintaq Qüsurlarının Təhlili: Dəlillərin çirklənməsi, çarpaz dindirmə səhvləri, ilkin hadisə yerinin qorunmaması tənqid olunur.',
      'Genetik Genealogiya və Müasir Forensika: Onilliklər sonra açılan soyuq işlərin (məsələn, Qızıl Ştat Qatili) DNT həll yolları dərindən izah edilir.'
    ],
    subsections: [
      {
        subtitle: '4.1. Məhkəmə-Tibbi Terminologiya Standartı',
        text: 'Arxivlərimizdə istifadə edilən bütün tibbi və kriminalistik terminlər (Rigor Mortis — meyit əzələlərinin sərtləşməsi, Livor Mortis — meyit ləkələri, Algor Mortis — bədən temperaturunun enməsi, Petechiae — kapilyar qansızmaları, Laceration — cırılmış yaralar) rəsmi tibbi dərsliklərin təriflərinə uyğundur.'
      },
      {
        subtitle: '4.2. Psixoloji Profilaktika və Kriminoloji Təsnifat',
        text: 'FTB-nin Cinayət Təhlili Bölməsinin (BAU) metodologiyasına əsaslanaraq, cinayətkarlar "Mütəşəkkil" (Organized) və "Qeyri-mütəşəkkil" (Disorganized) kateqoriyalarına ayrılır, Modus Operandi (əməliyyat üsulu) və Cinayətkar İmzası (Signature) arasındakı fərqlər aydınlaşdırılır.'
      }
    ]
  },
  {
    id: 'paranormal-elmi-skeptisizm',
    chapterNumber: 5,
    title: 'Paranormal İddiaların Skeptik və Elmi Tədqiq Metodologiyası',
    subtitle: 'Okam Ülgücü, Fiziki İllüziyalar və Anomaliyaların Təbii İzahları',
    content: `Paranormal hadisələr bəşəriyyətin ən çox maraq göstərdiyi, lakin eyni zamanda ən çox aldadıldığı sahədir. DARKPEDIA bu mövzuda Karl Saqanın məşhur elmi prinsipini rəhbər tutur: "Fövqəladə iddialar fövqəladə sübutlar tələb edir" (Extraordinary claims require extraordinary evidence).

Biz heç bir anomal hadisəni birbaşa "ruh", "cin" və ya "iblis" adlandırmırıq. Əvvəlcə bütün mümkün təbii, geoloji, akustik və psixoloji amillər araşdırılır. Yalnız bütün rasional izahlar tükəndikdə, hadisə "Həll olunmamış sirr" kimi qeydə alınır.`,
    keyPrinciples: [
      'Okam Ülgücü (Occam\'s Razor): Eyni hadisə üçün bir neçə izah varsa, ən az fərziyyə tələb edən ən sadə izah həqiqətə ən yaxındır.',
      'İnfra-səs Təsiri (18.9 Hz): İnsan qulağının eşitmədiyi, lakin göz almasında titrəmə, qorxu və panika yaradan təbii və ya sənaye səs dalğaları.',
      'Karbon Monoksit (Dəm Qazı) Zəhərlənməsi: Qədim evlərdəki qaz sızmalarının səbəb olduğu vizual və eşitmə hallüsinasiyaları.',
      'Geoməkan və Elektromaqnit Sahələr: Torpaq qatlarındakı pyezoelektrik gərginliyin beyin dalğalarına təsiri.'
    ],
    subsections: [
      {
        subtitle: '5.1. Dəm Qazı və Ruh İllüziyası',
        text: '1921-ci ildə Amerika Oftalmologiya Jurnalında dərc edilmiş məşhur "H Evi" (Haunted House) tədqiqatı göstərdi ki, ailənin evdə gördüyü "kabinetdə gəzən qara kölgələr" və eşitdiyi "ayaq səsləri" əslində nasaz sobadan sızan zəif dəm qazının beyində yaratdığı hipoksiya və optik illüziyalardan qaynaqlanırdı. Sobanın təmiri ilə bütün "ruhlar" bir anda yox oldu.'
      }
    ]
  },
  {
    id: 'psixologiya-neyrobiologiya',
    chapterNumber: 6,
    title: 'Psixologiya, Neyrobiologiya və Kütləvi İllüziyaların Təhlili',
    subtitle: 'Beynin Qavrayış Xətaları, Yuxu İflinci, Pareydoliya və Sosial Psixozlar',
    content: `İnsan beyni kainatın ən mürəkkəb, lakin eyni zamanda ən asan aldadıla bilən orqanıdır. Əksər qorxulu və mistik hadisələrin kökündə beynin təkamül prosesində qazandığı qorunma mexanizmlərinin səhvləri dayanır.

DARKPEDIA-nın Neyrobiologiya və Psixiatriya korpusu qarabasmalardan tutmuş nadir delüziyalara (Cotard sindromu — insanın özünün öldüyünə inanması, Capgras sindromu — yaxınlarının dublyorla əvəz edildiyinə inanması) qədər bütün koqnitiv fenomenləri neyron şəbəkələri səviyyəsində izah edir.`,
    keyPrinciples: [
      'Pareydoliya: Beynin təsadüfi naxışlarda, divar ləkələrində və ya ağac budaqlarında insan üzü və fiqurları görməyə təkamül proqramlaşması.',
      'Yuxu İflinci (Sleep Paralysis): REM yuxusu fazasında bədənin iflic qalması, lakin şüurun oyanması nəticəsində sinəyə basqı və qara kölgə hallüsinasiyaları.',
      'Kütləvi Histeriya (Mass Psychogenic Illness): Sosial stress və qorxunun təsiri altında bir qrup insanın fiziki xəstəlik və ya hallüsinasiya yaşaması (məsələn, 1518-ci il Rəqs Vəbası, 1962-ci il Tanqanika Gülüş Epidemiyası).'
    ],
    subsections: [
      {
        subtitle: '6.1. REM Atoniyası və Qarabasma Mexanizmi',
        text: 'İnsan yuxu görərkən beynin "Pons" və "Medulla" strukturları bədən əzələlərinə gedən siqnalları bloklayır ki, insan yuxuda gördüyü hərəkətləri real həyatda təkrarlayıb özünə xəsarət yetirməsin. Yuxu iflicində bu blokada şüur oyandıqdan sonra da bir neçə dəqiqə davam edir. Beyin iflic vəziyyətini "təhlükə" kimi qəbul edərək amiqdalanı həyəcanlandırır və otaqda "düşmən varlıq" qarabasması proyeksiya edir.'
      }
    ]
  },
  {
    id: 'kosmos-astrofizika',
    chapterNumber: 7,
    title: 'Dərin Kosmos, Astrofizika və Kosmik Anomaliyaların Tədqiqat Nizamnaməsi',
    subtitle: 'Böyük Sükut, Fermi Paradoksu, Qara Dəliklər və Yadplanetli Siqnallarının Analizi',
    content: `Kosmos bəşəriyyətin qarşılaşdığı ən nəhəng qaranlıqdır. Müşahidə olunan kainatda 2 trilyondan çox qalaktika, hər qalaktikada isə yüz milyardlarla ulduz sistemi mövcuddur. Buna baxmayaraq, bəşəriyyət hələ də tək bir sübut olunmuş yadplanetli sivilizasiyası ilə əlaqə qurmamışdır. Bu ziddiyyət "Fermi Paradoksu" və ya "Böyük Sükut" adlanır.

DARKPEDIA astronomiya arxivlərində qeydə alınmış bütün anomal siqnalları (məsələn, 1977-ci il "Wow!" siqnalı, FRB — Sürətli Radio Partlayışları, Tabbı Ulduzunun qəribə işıq azalması, Oumuamua asteroidinin hiperbolik orbiti) astrofizika qanunları ilə analiz edir.`,
    keyPrinciples: [
      'Dreyk Tənliyi: Süd Yolu qalaktikasında əlaqə qura biləcək sivilizasiyaların ehtimal olunan sayının riyazi modeli.',
      'Böyük Süzgəc (The Great Filter): Həyatın yaranmasından ulduzlararası sivilizasiyaya çevrilməsinə qədər keçilməsi demək olar ki, qeyri-mümkün olan təkamül və ya texnoloji maneə.',
      'Qara Dəliklər və Hadisə Üfüqi: Zamanın və məkanın sonsuz əyildiyi, fizika qanunlarının iflasa uğradığı qravitasiya qəbirləri.'
    ],
    subsections: [
      {
        subtitle: '7.1. Wow! Siqnalının 72 Saniyəlik Radioteleskop Protokolu',
        text: '15 avqust 1977-ci ildə Ohayo Dövlət Universitetinin "Böyük Qulaq" radioteleskopu Oxatan bürcü istiqamətindən 1420.4056 MHz tezliyində (hidrogen xətti) 72 saniyəlik güclü darzolaqlı siqnal qeydə aldı. Astronom Cerri Ehman printer çıxarışında "6EQUJ5" qeydini görərək qırmızı qələmlə "Wow!" yazdı. Bu günə qədər həmin siqnalın təbii komet mənşəli və ya texnoloji siqnal olması elmi diskussiyaların mərkəzindədir.'
      }
    ]
  },
  {
    id: 'tarix-arxeologiya-anomaliyalar',
    chapterNumber: 8,
    title: 'Tarixi Anomaliyalar, Qədim Əlyazmalar və Qadağan Olunmuş Arxeologiya',
    subtitle: 'Voyniç Əlyazması, Antikitera Mexanizmi, Qədim İtirilmiş Texnologiyalar və Dilçilik Tapmacaları',
    content: `Tarix təkcə qaliblərin yazdığı salnamələr deyil; o həm də heç kimin oxuya bilmədiyi naməlum dillərdə yazılmış kitablar, dövrünü min il qabaqlamış mexaniki cihazlar və minlərlə insanın izsiz yox olduğu sirli sivilizasiyaların qalıqlarıdır.

DARKPEDIA-nın Arxeologiya və Tarix bölməsi kriptoqrafiyanın ən böyük sirri olan "Voyniç Əlyazması"ndan tutmuş, qədim yunanların planetlərin hərəkətini hesablayan ilk analoq kompüteri sayılan "Antikitera Mexanizmi"nə qədər hər bir maddi artefaktı karbon-14 analizləri və paleoqrafiya elmi əsasında araşdırır.`,
    keyPrinciples: [
      'Radiokarbon Analizi (C-14): Üzvi artefaktların yaşının fiziki izotoplarla dəqiq müəyyənləşdirilməsi.',
      'Kriptoqrafiya və Dilçilik: Qədim şifrələrin, runik yazıların və itirilmiş əlifbaların riyazi statik frekans analizi.',
      'Psevdoxronologiyanın İnkarı: Qədim yadplanetlilər və ya "itirilmiş sehrli güclər" kimi əsassız psevdoarxeoloji iddiaların təkzibi.'
    ],
    subsections: [
      {
        subtitle: '8.1. Voyniç Əlyazmasının Karbon Yaşı və Kriptoqrafik Strukturu',
        text: 'Arizona Universiteti tərəfindən aparılmış radiokarbon analizləri sübut etdi ki, Voyniç əlyazmasının perqament vərəqləri 1404–1438-ci illər arasında (Erkən İntibah dövrü) hazırlanmışdır. 240 səhifəlik kitabda mövcud olmayan bitki rəsmləri, zodiak diaqramları və qəribə çimərlik hovuzlarında qadın fiqurları təsvir olunub. Mətn heç bir məlum dil ailəsinə uyğun gəlmir, lakin təbii dillərə xas "Zipf qanunu"na (sözlərin təkrarlanma tezliyi) tam riayət edir.'
      }
    ]
  },
  {
    id: 'redaksiya-etikasi',
    chapterNumber: 9,
    title: 'Redaksiya Etikası, Məxfilik Prinsipləri və İctimaiyyətlə Əlaqə',
    subtitle: 'Hüquqi Məsuliyyət, Düzəliş Qaydaları və Oxucu Töhfələrinin Qiymətləndirilməsi',
    content: `DARKPEDIA könüllü tədqiqatçılar, tarixçilər, hüquqşünaslar və elm həvəskarları tərəfindən idarə olunan açıq və müstəqil layihədir. Bizim dürüstlüyümüz oxucularımızın etimadından asılıdır.

Əgər bir məqaləmizdə faktiki səhv, köhnəlmiş kriminalistik məlumat və ya yeni açılmış arxiv sənədlərinə zidd fikir aşkar edilərsə, Redaksiya Heyəti həmin məlumatı 48 saat ərzində yeniləməyi və düzəliş tarixçəsini şəffaf şəkildə qeyd etməyi təmin edir.`,
    keyPrinciples: [
      'Şəffaflıq: Bütün mənbələr və istinadlar hər bir məqalənin sonunda dəqiq biblioqrafik formatda təqdim edilir.',
      'Müəllif Hüquqları və Arxiv Azadlığı: Bütün mətnlər açıq tədqiqat və maarifləndirmə məqsədilə təqdim olunur.',
      'Əlaqə və Düzəliş Mexanizmi: Oxucular xüsusi forma vasitəsilə arxiv sənədlərini təqdim edərək redaksiyaya düzəliş təklif edə bilərlər.'
    ],
    subsections: [
      {
        subtitle: '9.1. Ensiklopediyanın Gələcək Hədəfləri',
        text: 'DARKPEDIA yaxın gələcəkdə Qafqazın, Xəzər hövzəsinin, Yaxın Şərqin və Mərkəzi Asiyanın az məlum olan qaranlıq arxivlərini, repressiya sənədlərini, açılmamış tarixi cinayətlərini və qədim folklor abidələrini elmi sənədləşdirmə layihəsini genişləndirəcəkdir.'
      }
    ]
  }
];
