import { Article } from '../../types';

export const encyclopediaBatch2Articles: Article[] = [
  {
    id: 'enc-009',
    title: 'Flannan Mayakı İtkin Gözətçiləri (1900) — Qayalıqdan Yox Olan Üç Mayakçı',
    originalName: 'Flannan Isles Lighthouse Disappearance',
    slug: 'flannan-isles-mayak-itkinleri',
    description: '15 dekabr 1900-cü ildə Şotlandiyanın kimsəsiz Flannan adasında fırtınasız gecədə süfrədə yeməkləri və divarda saatları donmuş vəziyyətdə qalan üç təcrübəli mayakçının sirli şəkildə yox olması.',
    category: 'sirli-hadiseler',
    subcategory: 'İtkin düşmələr',
    tags: ['Flannan Isles', 'Mayak', 'Şotlandiya', 'Eilean Mor', '1900', 'Sirli İtkin', 'Okean'],
    date: '15 Dekabr 1900',
    location: 'Eilean Mòr, Flannan Adaları, Şotlandiya',
    coordinates: '58°17′17″N 7°35′24″W',
    status: 'Rəsmi Açılmamış Dəniz İnsidenti',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 9,
    views: 41200,
    trendingScore: 92,
    factStatus: 'unresolved_unknown',
    lastUpdated: '14 Avqust 2026',
    author: 'DARKPEDIA Dəniz Tədqiqatları Arxivi',
    tableOfContents: [
      { id: 'kesf-ani', title: '1. Hesperus Gəmisinin Gəlişi və Tapılan Qəribəliklər' },
      { id: 'mayak-jurnali', title: '2. Tomas Marşallın Dəhşətli Jurnal Qeydləri' },
      { id: 'ser-robert-hesabati', title: '3. Şimal Mayakları İdarəsinin Rəsmi Tədqiqatı' }
    ],
    sections: [
      {
        id: 'kesf-ani',
        title: '1. Hesperus Gəmisinin Gəlişi və Tapılan Qəribəliklər',
        content: `26 dekabr 1900-cü ildə Şotlandiyanın Eilean Mòr adasına çatan "Hesperus" gəmisinin heyəti mayakda heç bir bayrağın qaldırılmadığını, qutuların boş olduğunu və heç kimin onları qarşılamadığını gördü. Mayaka daxil olan Cozef Mur mətbəxdə süfrənin açıldığını, qabların toxunulmaz qaldığını, bir stulun aşdığını və divardakı kəfkirli saatın dayandığını gördü. Üç təcrübəli gözətçi — Ceyms Dukat, Tomas Marşall və Donald Makartur izsiz yoxa çıxmışdılar.`,
        badge: 'fact',
        badgeText: 'Şimal Mayak Şurası Protokolu (1900)'
      },
      {
        id: 'mayak-jurnali',
        title: '2. Tomas Marşallın Dəhşətli Jurnal Qeydləri',
        content: `Mayakın rəsmi gündəliyində 12-14 dekabr tarixlərində qorxunc fırtınanın baş verdiyi, təcrübəli kişilərin qorxudan ağladıqları və dua etdikləri yazılmışdı. Halbuki sahil qeydləri həmin günlərdə bölgədə havanın tam sakit olduğunu təsdiq edirdi. Son qeyd 15 dekabr saat 09:00-da yazılmışdı: "Fırtına bitdi. Dəniz sakitdir. Tanrı hər şeyin üzərindədir." Həmin gecə mayakın işığı artıq yanmırdı.`,
        badge: 'claim',
        badgeText: 'Jurnal Qeydi və Meteoroloji Uyğunsuzluq'
      },
      {
        id: 'ser-robert-hesabati',
        title: '3. Şimal Mayakları İdarəsinin Rəsmi Tədqiqatı',
        content: `Rəsmi təhqiqatın rəhbəri Robert Muirhead qərb körpüsündə dəmir məhəccərlərin büküldüyünü və bir tonluq qayanın yerindən oynadığını aşkar etdi. Rəsmi nəticəyə görə, gözətçilər avadanlıqları bərkitmək üçün qayanın kənarına enərkən qəfil gələn nəhəng dalğa ("Rogue wave") tərəfindən dənizə süpürülmüşdülər. Lakin iki nəfərin yağmurluğunun yerində olması və Makarturun yağmurluqsuz çıxması hələ də sirr olaraq qalır.`,
        badge: 'theory',
        badgeText: 'Rəsmi Nəzəriyyə'
      }
    ],
    keyFacts: [
      { label: 'İtkin sayı', value: '3 nəfər', status: 'verified_fact' },
      { label: 'Tarix', value: '15 Dekabr 1900', status: 'verified_fact' },
      { label: 'Məkan', value: 'Flannan Adaları, Şotlandiya', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Qatil Dalğa (Rogue Wave)', likelihood: 'Yüksək', description: 'Gözlənilmədən gələn 30 metrlik dalğanın kişiləri uçurumdan aparması.' },
      { title: 'Dəlilik və Qətliam', likelihood: 'Aşağı', description: 'Gözətçilərdən birinin psixi tutma keçirərək digərlərini öldürməsi və özünü atması.' }
    ],
    sources: [
      { title: 'Report on the Loss of the Keepers of the Flannan Islands Lighthouse', author: 'Robert Muirhead', publisher: 'Northern Lighthouse Board', year: '1901', type: 'official_report' }
    ],
    relatedArticleSlugs: ['mary-celeste-sirri', 'dyatlov-asirimi-hadisesi', 'yuba-county-five']
  },
  {
    id: 'enc-010',
    title: 'Yuba County Five (1978) — Amerikanın "Dyatlov Aşırımı" Sirri',
    originalName: 'The Yuba County Five',
    slug: 'yuba-county-five',
    description: '1978-ci ilin fevralında Kaliforniyanın Yuba qraflığından olan 5 gəncin basketbol matçından sonra dondurucu qarlı dağlara doğru 110 km uzaqlaşaraq meşədə itkin düşməsi və ərzaq dolu treylerdə acından ölməsi hadisəsi.',
    category: 'sirli-hadiseler',
    subcategory: 'Açılmamış hadisələr',
    tags: ['Yuba County', 'Kaliforniya', 'Dyatlov', '1978', 'Qarlı Dağlar', 'Açılmamış Ölüm'],
    date: '24 Fevral 1978',
    location: 'Plumas National Forest, Kaliforniya, ABŞ',
    coordinates: '39°45′00″N 121°15′00″W',
    status: 'Həll Edilməmiş Kriminal / Fövqəladə Hadisə',
    theoriesCount: '4 Nəzəriyyə',
    readingTime: 10,
    views: 37800,
    trendingScore: 88,
    factStatus: 'unresolved_unknown',
    lastUpdated: '16 Avqust 2026',
    author: 'DARKPEDIA Kriminal və Məhkəmə Ekspertizası',
    tableOfContents: [
      { id: 'itkin-dusme', title: '1. Chico Basketbol Oyunundan Sonra Yoxa Çıxma' },
      { id: 'masinin-tapilmasi', title: '2. Mercury Montego Avtomobili və Qarlı Dağ Yolu' },
      { id: 'treylerdeki-dehset', title: '3. Qorxunc Kəşf: Ted Veyherin Cəsədi və Ərzaq Ehtiyatları' },
      { id: 'hiss-edilmeyen-sirr', title: '4. Qari Matias Haradadır?' }
    ],
    sections: [
      {
        id: 'itkin-dusme',
        title: '1. Chico Basketbol Oyunundan Sonra Yoxa Çıxma',
        content: `24 fevral 1978-ci ildə Yuba qraflığından olan beş dost — Ted Weiher, Jack Madruga, Jackie Huett, Bill Sterling və Gary Mathias — Chico Dövlət Universitetində basketbol matçına baxdıqdan sonra evlərinə qayıtmalı idilər. Səhəri gün onların iştirak etməli olduqları xüsusi olimpiada oyunu var idi. Lakin onlar evlərinə çatmadılar.`,
        badge: 'fact',
        badgeText: 'Polis Qeydiyyatı'
      },
      {
        id: 'masinin-tapilmasi',
        title: '2. Mercury Montego Avtomobili və Qarlı Dağ Yolu',
        content: `Bir neçə gün sonra Cek Madruqanın 1969-cu il istehsalı Mercury Montego maşını evlərindən 110 kilometr əks istiqamətdə, Plumas Milli Meşəsinin qarlı dağ yolunda tapıldı. Maşının təkərləri qarda bir qədər batmışdı, lakin 5 güclü gənc onu asanlıqla itələyə bilərdi. Açar üstündə idi, benzin çənində kifayət qədər yanacaq var idi və avtomobil tam işlək vəziyyətdə idi.`,
        badge: 'fact',
        badgeText: 'Hadisə Yeri Təhqiqatı'
      },
      {
        id: 'treylerdeki-dehset',
        title: '3. Qorxunc Kəşf: Ted Veyherin Cəsədi və Ərzaq Ehtiyatları',
        content: `İyun ayında qarlar əriyəndə meşə idarəsinin tərk edilmiş treylerində Ted Veyherin cəsədi tapıldı. O, 8 qat adyala bürünmüş və donaraq ölmüşdü. Onun ayaqları qanqrena olmuş və çəkisi 90 kq-dan 45 kq-a düşmüşdü (təxminən 8-13 həftə sağ qalmışdı). Treylerdə bir il bəs edəcək hərbi ərzaq konservləri və qaz qızdırıcısı var idi; lakin konservlərin çoxu açılmamış, qızdırıcı isə yandırılmamışdı. Cəmi bir neçə addımlıqda olan kibritlərdən istifadə edilməmişdi.`,
        badge: 'fact',
        badgeText: 'Məhkəmə Tibbi Ekspertizası'
      },
      {
        id: 'hiss-edilmeyen-sirr',
        title: '4. Qari Matias Haradadır?',
        content: `Madruqa və Sterlinqin cəsədləri treylerdən kilometrlərlə aralıda tapıldı. Qari Matiasın isə yalnız ayaqqabıları aşkar edildi; onun cəsədi heç vaxt tapılmadı. Gəncləri 110 km qarlı dağlara nəyin apardığı və niyə qızdırıcını yandırmadan dondurucu soyuqda öldükləri hələ də Amerika tarixinin ən böyük sirrlərindəndir.`,
        badge: 'unknown',
        badgeText: 'Naməlum Motiv'
      }
    ],
    keyFacts: [
      { label: 'Qurbanlar', value: '5 nəfər (4 ölü, 1 itkin)', status: 'verified_fact' },
      { label: 'Tarix', value: 'Fevral 1978', status: 'verified_fact' },
      { label: 'Yer', value: 'Plumas National Forest, Kaliforniya', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Təqib və Qorxu Təşvişi', likelihood: 'Yüksək', description: 'Gənclərin yolda təhlükəli yad şəxslərdən qorxaraq dağlara qaçması.' },
      { title: 'Kollektiv Qərar Qəbulu Xətası', likelihood: 'Orta', description: 'Psixiatrik xəstəliyi olan Matiasın rəhbərliyi altında çaşqınlıq.' }
    ],
    sources: [
      { title: 'Yuba County Sheriffs Office Case File #78-0888', publisher: 'California Department of Justice', year: '1978', type: 'official_report' }
    ],
    relatedArticleSlugs: ['dyatlov-asirimi-hadisesi', 'flannan-isles-mayak-itkinleri', 'somerton-adami-sirri']
  },
  {
    id: 'enc-011',
    title: 'Lead Masks İşi (1966) — Morro do Vintém Təpəsində Qurğuşun Maskalı İki Meyit',
    originalName: 'Lead Masks Case (Morro do Vintém)',
    slug: 'lead-masks-qurgusun-maskalar-isi',
    description: '1966-cı ildə Braziliyanın Rio-de-Janeyro şəhərində təpədə kostyumlu, sukeçirməz plaşlı, gözlərində qurğuşun radiasiya maskası və yanlarında "Kapsulu ud, siqnalı gözlə" yazılmış qeyd dəftəri ilə tapılan iki elektronika mühəndisinin sirri.',
    category: 'sirli-hadiseler',
    subcategory: 'Sirli ölümlər',
    tags: ['Lead Masks', 'Braziliya', 'Rio de Janeiro', '1966', 'Qurğuşun Maska', 'UFO', 'Açılmamış'],
    date: '20 Avqust 1966',
    location: 'Morro do Vintém, Niterói, Rio de Janeyro, Braziliya',
    coordinates: '22°54′15″S 43°06′35″W',
    status: 'Rəsmi Açılmamış Ölüm İşi',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 8,
    views: 34500,
    trendingScore: 84,
    factStatus: 'unresolved_unknown',
    lastUpdated: '11 Avqust 2026',
    author: 'DARKPEDIA Məhkəmə Kriminalistikası',
    tableOfContents: [
      { id: 'cesedlerin-tapilmasi', title: '1. Çərpələng Uçuran Uşağın Kəşfi' },
      { id: 'qeribe-qeyd-defteri', title: '2. Qəribə Qeyd Dəftəri və Təlimatlar' },
      { id: 'otopsi-ve-toksikologiya', title: '3. Autopsiya və Qeyri-mümkün Zəhər Tədqiqatı' }
    ],
    sections: [
      {
        id: 'cesedlerin-tapilmasi',
        title: '1. Çərpələng Uçuran Uşağın Kəşfi',
        content: `20 avqust 1966-cı ildə 18 yaşlı Jorje da Silva Vintém təpəsində çərpələng uçurarkən otların arasında iki cəsəd tapdı. Ölənlər Manoel Pereira da Cruz və Miguel José Viana adlı radioelektronika mütəxəssisləri idi. Onların hər ikisinin əynində bahalı kostyum və yağmurluq, gözlərində isə əllə kəsilmiş qurğuşun göz maskaları var idi. Bədənlərində heç bir zorakılıq və ya boğuşma izi yox idi.`,
        badge: 'fact',
        badgeText: 'Polis Qeydiyyatı'
      },
      {
        id: 'qeribe-qeyd-defteri',
        title: '2. Qəribə Qeyd Dəftəri və Təlimatlar',
        content: `Cəsədlərin yanında tapılan qeyd dəftərində portuqalca yazılmış qısa təlimat var idi:
"16:30 təyin olunmuş yerdə olmaq. 18:30 kapsulları udmaq. Qoruyucu effekt baş verdikdən sonra siqnalı gözləmək və maskaları taxmaq."
Yanlarında həmçinin iki boş su şüşəsi və içərisində metal kəsici alətlər olan çanta tapıldı.`,
        badge: 'fact',
        badgeText: 'Maddi Sübut No. 4'
      },
      {
        id: 'otopsi-ve-toksikologiya',
        title: '3. Autopsiya və Qeyri-mümkün Zəhər Tədqiqatı',
        content: `Tibbi ekspertiza daxili orqanlarda heç bir radioaktiv çirklənmə və ya mexaniki xəsarət tapmadı. Lakin orqanların tez çürüməsi səbəbindən toksikoloji analiz qeyri-mümkün oldu. Qohumları hər iki şəxsin spiritizm və yadplanetlilərlə əlaqə qurmaq cəhdləri ilə maraqlandığını bildirdilər.`,
        badge: 'unknown',
        badgeText: 'Həll Olunmamış Toksikologiya'
      }
    ],
    keyFacts: [
      { label: 'Qurbanlar', value: 'Manoel Pereira & Miguel José Viana', status: 'verified_fact' },
      { label: 'Tarix', value: 'Avqust 1966', status: 'verified_fact' },
      { label: 'Əşyalar', value: 'Qurğuşun maskalar, şifrəli qeyd', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Spiritist Eksperiment və Psixoaktiv Zəhər', likelihood: 'Yüksək', description: 'Trans halına keçmək üçün içilən toksik bitki ekstraktı dozası.' },
      { title: 'Qeyri-qanuni Elmi Sınaq və Şantaj', likelihood: 'Orta', description: 'Elektronika tədqiqatçılarına qarşı qurulmuş sui-qəsd.' }
    ],
    sources: [
      { title: 'The Mystery of the Lead Masks of Vintem Hill', publisher: 'Rio de Janeiro Police Department Archives', year: '1967', type: 'archive' }
    ],
    relatedArticleSlugs: ['somerton-adami-sirri', 'dyatlov-asirimi-hadisesi', 'wow-siqnali']
  },
  {
    id: 'enc-012',
    title: 'Hinterkaifeck Ferması Qətliamı (1922) — Tavanda 6 Gün Gizlənən Qatilin Sirri',
    originalName: 'Hinterkaifeck Murders',
    slug: 'hinterkaifeck-fermasi-qetliami',
    description: '1922-ci ilin martında Münhendən 70 km şimalda Gruber ailəsinin və yeni xidmətçisinin qonşu tərəfindən qətlə yetirildiyi, qatilin isə cinayətdən sonra günlərlə fermada yaşayıb mal-qaranı yemlədiyi Almaniya tarixinin ən qorxunc cinayəti.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Tarixi cinayətlər',
    tags: ['Hinterkaifeck', 'Almaniya', 'Bavariya', '1922', 'Qətl', 'Mattock', 'Açılmamış'],
    date: '31 Mart 1922',
    location: 'Waidhofen, Bavariya, Almaniya',
    coordinates: '48°35′39″N 11°19′20″E',
    status: 'Rəsmi Açılmamış Tarixi Cinayət',
    theoriesCount: '4 Nəzəriyyə',
    readingTime: 9,
    views: 45600,
    trendingScore: 94,
    factStatus: 'unresolved_unknown',
    lastUpdated: '15 Avqust 2026',
    author: 'DARKPEDIA Tarixi Kriminalistika',
    tableOfContents: [
      { id: 'qetl-oncesi-isareler', title: '1. Qətldən Əvvəlki Əlamətlər və Qardakı İzlər' },
      { id: 'qetliam-ve-balta', title: '2. Tövlədəki Tələ və Kənd Təsərrüfatı Baltası' },
      { id: 'qonag-qatil', title: '3. Qatilin Evdə Keçirdiyi 6 Gün' }
    ],
    sections: [
      {
        id: 'qetl-oncesi-isareler',
        title: '1. Qətldən Əvvəlki Əlamətlər və Qardakı İzlər',
        content: `Hadisədən bir neçə gün əvvəl ata Andreas Gruber qonşularına meşədən birbaşa fermasına gələn, lakin geri qayıtmayan yad ayaq izləri tapdığını bildirdi. Evin açarlarından biri itmişdi və damda addım səsləri eşidilirdi. Əvvəlki qulluqçu evdə ruhların olduğunu iddia edərək cəmi 6 ay əvvəl işdən çıxmışdı. Yeni qulluqçu Maria Baumgartner isə fermaya gəldiyi ilk gün qətlə yetirildi.`,
        badge: 'fact',
        badgeText: 'Münhen Polisi İfadələri'
      },
      {
        id: 'qetliam-ve-balta',
        title: '2. Tövlədəki Tələ və Kənd Təsərrüfatı Baltası',
        content: `31 mart gecəsi qatil ailə üzvlərini — Andreas, həyat yoldaşı Cäzilia, qızı Viktoria və 7 yaşlı nəvəsi Cäzilianı bir-bir tövləyə çağıraraq "mattock" adlanan ucu sivri kənd təsərrüfatı küləngi ilə öldürdü. Sonra evə daxil olaraq beşikdəki 2 yaşlı Josef və qulluqçunu qətlə yetirdi. 7 yaşlı Cäzilia saatlarla sağ qalmış və qorxudan öz saçlarını kökündən yolmuşdu.`,
        badge: 'fact',
        badgeText: 'Autopsiya Hesabatı (1922)'
      },
      {
        id: 'qonag-qatil',
        title: '3. Qatilin Evdə Keçirdiyi 6 Gün',
        content: `Qətllərdən sonra qatil hadisə yerini tərk etmədi. O, günlərlə fermada qaldı, mətbəxdə yemək bişirdi, ocağı yandırdı və hətta tövlədəki inəkləri və iti müntəzəm yemlədi. Qonşular kamin tüstüsünü gördükləri üçün ailənin sağ olduğunu düşünmüşdülər. Evdəki külli miqdarda qızıl və pul toxunulmaz qalmışdı.`,
        badge: 'fact',
        badgeText: 'Münhen Ədliyyə Arxivi'
      }
    ],
    keyFacts: [
      { label: 'Qurban sayı', value: '6 nəfər', status: 'verified_fact' },
      { label: 'Silah', value: 'Mattock (Kənd küləngi)', status: 'verified_fact' },
      { label: 'Dindirilən şübhəlilər', value: '100-dən çox', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Lorenz Schlittenbauer Qisas Nəzəriyyəsi', likelihood: 'Yüksək', description: 'Aliment münaqişəsi olan yerli bələdiyyə rəhbərinin qisası.' },
      { title: 'Birinci Dünya Müharibəsi Qaçaq Əsgərləri', likelihood: 'Orta', description: 'Psixoloji travma almış sığınacaq axtaran cinayətkarlar.' }
    ],
    sources: [
      { title: 'Hinterkaifeck: Deutschlands geheimnisvollster Mordfall', author: 'Peter Leuschner', publisher: 'Apus-Verlag', year: '2007', type: 'book' }
    ],
    relatedArticleSlugs: ['villisca-balta-qetliami', 'jack-the-ripper-london', 'black-dahlia-elizabeth-short']
  },
  {
    id: 'enc-013',
    title: 'Villisca Balta Qətliamı (1912) — Ayova Ştatında Bütün Ailənin Yuxuda Doğranması',
    originalName: 'Villisca Axe Murders',
    slug: 'villisca-balta-qetliami',
    description: '1912-ci ilin iyununda ABŞ-ın Ayova ştatının Villiska qəsəbəsində Mur ailəsinin 6 üzvünün və 2 qonaq uşağın başlarının balta ilə parçalandığı, qatilin güzgüləri parçalarla örtdüyü açılmamış qətliam.',
    category: 'cinayet-hadiseleri',
    subcategory: 'Tarixi cinayətlər',
    tags: ['Villisca', 'Iowa', 'Balta Qətliamı', '1912', 'Açılmamış', 'Josiah Moore'],
    date: '10 İyun 1912',
    location: 'Villisca, Ayova, ABŞ',
    coordinates: '40°55′49″N 94°58′41″W',
    status: 'Tarixi Açılmamış Qətl İşi',
    theoriesCount: '3 Nəzəriyyə',
    readingTime: 9,
    views: 33900,
    trendingScore: 83,
    factStatus: 'unresolved_unknown',
    lastUpdated: '13 Avqust 2026',
    author: 'DARKPEDIA Tarixi Ədliyyə',
    tableOfContents: [
      { id: 'kilseden-qayidis', title: '1. Kilsə Tədbirindən Qayıdış və Gecə Qətliamı' },
      { id: 'qeribe-hadise-yeri', title: '2. Qatilin Qəribə Ritualları və Örtülmüş Güzgülər' },
      { id: 'subheliler-ve-istintaq', title: '3. Əsas Şübhəlilər: Rahib Kelli və Qatardan Gələn Qatil' }
    ],
    sections: [
      {
        id: 'kilseden-qayidis',
        title: 'Kilsə Tədbirindən Qayıdış və Gecə Qətliamı',
        content: `10 iyun 1912-ci il gecəsi Cozaya Mur, həyat yoldaşı Sara, onların 4 azyaşlı övladı (Herman, Meri Ketrin, Boyd və Pol) və qonşu Stillinqer ailəsinin 2 balaca qızı (İna və Lena) Uşaqlar Günü münasibətilə keçirilən kilsə tədbirindən evə qayıtdılar. Gecə saat 00:00 ilə 02:00 arasında, ailə dərin yuxuda olarkən evin çardağında saatlarla pusquda durmuş naməlum qatil aşağı enərək Cozayanın özünə məxsus küt kənd təsərrüfatı baltası ilə 8 nəfərin hamısının kəllə sümüklərini parçalayaraq yerindəcə qətlə yetirdi.`,
        badge: 'fact',
        badgeText: 'Ştat Təhqiqat Bürosu Hesabatı'
      },
      {
        id: 'qeribe-hadise-yeri',
        title: 'Qatilin Qəribə Ritualları və Örtülmüş Güzgülər',
        content: `Qətllərdən sonra qatil bütün qurbanların üzünü və bədənlərini yataq örtükləri və köynəklərlə örtmüşdü. Evdəki bütün güzgülər, şüşəli şkaflar və pəncərələr qara parçalar və paltarlarla örtülmüşdü. Mətbəxdə qanın yuyulduğu bir ləyən su, boşqabda kəsilmiş iki funtluq donuz piyi parçası və qapının arxasında qana bulaşmış balta tapıldı. Qatil hadisə yerində heç bir pula və qiymətli əşyaya toxunmamışdı.`,
        badge: 'fact',
        badgeText: 'Hadisə Yeri Protokolu (1912)'
      },
      {
        id: 'subheliler-ve-istintaq',
        title: 'Əsas Şübhəlilər: Rahib Kelli və Qatardan Gələn Qatil',
        content: `İstintaq zamanı psixi cəhətdən qeyri-sabit olan gəzərgi keşiş Corc Kelli dindirildi və hətta kilsədə "Tanrı mənə onları öldürməyi əmr etdi" deyə etiraf etdi, lakin məhkəmədə dəlillər yetərsiz olduğu üçün bəraət aldı. Müasir kriminoloq Bill Ceyms isə bu cinayətin 1898-1912-ci illər arasında dəmir yolları boyunca oxşar balta qətlləri törədən gəzərgi alman qatili Paul Müller tərəfindən törədildiyini irəli sürür.`,
        badge: 'theory',
        badgeText: 'Müasir Kriminalistika Təhlili'
      }
    ],
    keyFacts: [
      { label: 'Qurban sayı', value: '8 nəfər (6 uşaq, 2 yetkin)', status: 'verified_fact' },
      { label: 'Silah', value: 'Josiah Moore-un Baltası', status: 'verified_fact' },
      { label: 'İl', value: '1912', status: 'verified_fact' }
    ],
    theories: [
      { title: 'Gəzərgi Serial Qatil (Rev. George Kelly və ya Paul Mueller)', likelihood: 'Yüksək', description: 'Qatarlar vasitəsilə ştatlararası hərəkət edən psixopat balta qatili.' },
      { title: 'Senator Frank Jones Siyasi Ədavəti', likelihood: 'Aşağı', description: 'Biznes rəqabəti səbəbindən muzdlu qatil tutulması iddiası.' }
    ],
    sources: [
      { title: 'The Man from the Train', author: 'Bill James', publisher: 'Scribner', year: '2017', type: 'book' }
    ],
    relatedArticleSlugs: ['hinterkaifeck-fermasi-qetliami', 'axeman-of-new-orleans', 'jack-the-ripper-london']
  }
];
