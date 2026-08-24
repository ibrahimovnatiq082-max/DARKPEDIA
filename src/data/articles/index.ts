import { Article, CategoryId } from '../../types';
import { paranormalAndMysteriesArticles } from './paranormalAndMysteries';
import { placesAndCrimeArticles } from './placesAndCrime';
import { psychologyAndCosmosArticles } from './psychologyAndCosmos';
import { creaturesAndFolkloreArticles } from './creaturesAndFolklore';
import { expandedMysteriesArticles } from './expandedMysteries';
import { historicalAnomaliesArticles } from './historicalAnomalies';
import { unsolvedAndForensicsArticles } from './unsolvedAndForensics';
import { automatedLongFormArticlesPart1 } from './automatedLongFormArticles1';
import { automatedLongFormArticlesPart2 } from './automatedLongFormArticles2';
import { automatedLongFormArticlesPart3 } from './automatedLongFormArticles3';
import { encyclopediaBatch1Articles } from './encyclopediaBatch1';
import { encyclopediaBatch2Articles } from './encyclopediaBatch2';
import { encyclopediaBatch3Articles } from './encyclopediaBatch3';
import { encyclopediaBatch4Articles } from './encyclopediaBatch4';
import { encyclopediaBatch5Articles } from './encyclopediaBatch5';
import { encyclopediaMegaCollectionArticles } from './encyclopediaMegaCollection';
import { encyclopediaGrandArchiveArticles } from './encyclopediaGrandArchive';
import { encyclopediaDeepCatalogArticles } from './encyclopediaDeepCatalog';
import { encyclopediaCentennialArticles } from './encyclopediaCentennialArchive';
import { encyclopediaGrandCompendiumArticles } from './encyclopediaGrandCompendium';
import { encyclopediaOmnibusPart1Articles } from './encyclopediaOmnibusPart1';
import { encyclopediaOmnibusPart2Articles } from './encyclopediaOmnibusPart2';

// Additional authentic articles to provide comprehensive encyclopedic entries
const additionalEncyclopedicArticles: Article[] = [
  {
    id: 'art-034',
    title: 'Sedlec Ossuary — Sümük Kilsəsi',
    originalName: 'Sedlec Ossuary (Kostnice v Sedlci)',
    slug: 'sedlec-ossuary',
    description: 'Çexiyanın Kutna Hora şəhərində 40.000 ilə 70.000 arasında insanın skelet və kəllə sümükləri ilə bəzədilmiş, Memento Mori fəlsəfəsinin ən heyrətamiz qotik şapeli.',
    category: 'qorxulu-yerler',
    subcategory: 'Qəsrlər və Nekropollar',
    tags: ['Çexiya', 'Sedlec', 'Sümük kilsəsi', 'Qara ölüm', 'Memento Mori', 'Qotika', 'Kutna Hora'],
    date: '1278 – 1870',
    location: 'Kutná Hora, Çexiya',
    coordinates: '49°57′43″N 15°17′18″E',
    status: 'UNESCO Ümumdünya Mədəni İrsi və fəaliyyət göstərən Roma-Katolik şapeli',
    theoriesCount: 'Tarixi sənədləşdirilmiş fakt',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Sedlec şapelində insan sümüklərindən hazırlanmış nəhəng mərkəzi lüstr və piramidalar.',
    readingTime: 9,
    views: 31300,
    trendingScore: 78,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Tarixi İrs Şöbəsi',
    tableOfContents: [
      { id: 'qolqota-torpagi', title: '1. Qolqota Torpağı və Müqəddəs Məzarlıq' },
      { id: 'qara-olum-ve-quslar', title: '2. Qara Ölüm Vəbası və Qus Müharibələri' },
      { id: 'frantisek-rint-seneti', title: '3. František Rint və İnsan Sümüklərindən Memarlıq' },
      { id: 'memento-mori', title: '4. Fəlsəfi Mahiyyət: Memento Mori' },
      { id: 'menbeler', title: '5. Tarixi Arxivlər və Mənbələr' }
    ],
    sections: [
      {
        id: 'qolqota-torpagi',
        title: 'Qolqota Torpağı və Müqəddəs Məzarlıq',
        content: `1278-ci ildə Bohemiya kralı II Otakar Sedlec Sisterian monastırının abbatı Henrixi diplomatik missiya ilə Qüdsə (Yerusəlim) göndərdi. Abbat geri qayıdarkən İsa Məsihin çarmıxa çəkildiyi Qolqota təpəsindən bir ovuc müqəddəs torpaq gətirərək yerli monastır qəbiristanlığının üzərinə səpdi.

Bu xəbər sürətlə bütün Mərkəzi Avropaya yayıldı. Sedlec qəbiristanlığı dərhal Bohemiya, Polşa, Bavariya və Avstriyanın ən müqəddəs və arzulanan dəfn yerinə çevrildi. Hər bir zadəgan və dindar insan ölümündən sonra məhz bu müqəddəs torpaqda basdırılmağı vəsiyyət edirdi.`,
        badge: 'fact',
        badgeText: 'Orta Əsr Salnaməsi'
      },
      {
        id: 'qara-olum-ve-quslar',
        title: 'Qara Ölüm Vəbası və Qus Müharibələri',
        content: `14-cü əsrin ortalarında Avropanı bürüyən dağıdıcı "Qara Ölüm" (taun pandemiyası) zamanı yalnız 1348-ci ildə Sedlecdə 30.000-dən çox vəba qurbanı dəfn edildi. Bundan bir qədər sonra, 15-ci əsrin əvvəllərində baş verən qanlı Qus Müharibələri zamanı daha 10.000-dən çox həlak olmuş döyüşçü bura gətirildi.

Məzarlıq həddindən artıq dolduğundan, 1400-cü ildə qəbiristanlığın mərkəzində ucaldılmış qotik kilsənin zirzəmisində xüsusi ossuari (sümük anbarı) tikildi. Qəbirlər boşaldıldıqca köhnə skeletlər çıxarılaraq zirzəmiyə yığıldı. Rəvayətə görə, 1511-ci ildə yarı-kor bir sisterian rahibi bu nəhəng sümük yığınlarını altı böyük piramida şəklində səliqəyə salmışdı.`,
        badge: 'fact',
        badgeText: 'Tarixi Demoqrafiya'
      },
      {
        id: 'frantisek-rint-seneti',
        title: 'František Rint və İnsan Sümüklərindən Memarlıq',
        content: `1784-cü ildə Müqəddəs Roma İmperatoru II İosif monastırı bağladı və mülk zadəgan Şvartsenberq (Schwarzenberg) ailəsi tərəfindən satın alındı. 1870-ci ildə knyaz ailəsi yerli ağac oymaçısı və rəssam František Rinti zirzəmidəki sümükləri bədii qaydada nizamlamaq üçün işə götürdü.

Rint sümükləri xlorlu əhəng məhlulunda dezinfeksiya edərək ağartdı və təxminən 40.000 insanın qalıqlarından heyrətamiz sənət əsərləri yaratdı:
• İnsan orqanizmindəki hər bir tək sümük növünün ən azı bir dəfə istifadə edildiyi nəhəng mərkəzi çılçıraq (lüstr).
• Şvartsenberq sülaləsinin sümüklərdən və kəllələrdən toxunmuş təfsilatlı ailə gerbi (burada hətta bir osmanlı əsgərinin kəlləsini dimdikləyən qarğa fiquru sümüklərlə dəqiq canlandırılıb).
• Sümükdən zənglər, qotik tağlar və girişdə rəssamın öz sümüklərlə yazdığı imzası.`,
        badge: 'fact',
        badgeText: 'Memarlıq Şahəsəri'
      },
      {
        id: 'memento-mori',
        title: 'Fəlsəfi Mahiyyət: Memento Mori',
        content: `Müasir turistlər üçün dəhşətli və qorxulu görünsə də, Sedlec Ossuaryası orta əsr xristian ilahiyyatının "Memento Mori" ("Öləcəyini unutma") və bərabərlik fəlsəfəsini təcəssüm etdirir. Burada kral ilə kəndlinin, sərkərdə ilə əsgərin kəlləsi yan-yana duraraq ölüm qarşısında bütün bəşəriyyətin bərabər olduğunu nümayiş etdirir. Hər il bu məkanı 450.000-dən çox ziyarətçi ziyarət edir.`,
        badge: 'fact',
        badgeText: 'Fəlsəfi və Mədəni İrs'
      }
    ],
    keyFacts: [
      { label: 'Sümük sayı', value: '40.000 – 70.000 insan skeleti', status: 'verified_fact' },
      { label: 'Usta memar', value: 'František Rint (1870)', status: 'verified_fact' },
      { label: 'İlk qeydiyyat', value: '1278-ci il (Qolqota torpağı)', status: 'verified_fact' },
      { label: 'Status', value: 'UNESCO Ümumdünya Mədəni İrsi', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Sedlec Ossuary: The Story of the Church of Bones', author: 'Jan Kolar', publisher: 'Prague Historical Press', year: '2018', type: 'book' },
      { title: 'Memento Mori: The Bone Churches of Europe', author: 'Paul Koudounaris', publisher: 'Thames & Hudson', year: '2011', type: 'book' }
    ],
    relatedArticleSlugs: ['paris-katakombalari', 'poveglia-adasi', 'derinkuyu-yeralti-seheri']
  },
  {
    id: 'art-035',
    title: 'Hashima adası (Gunkanjima) — Tərk Edilmiş Beton Qala',
    originalName: 'Hashima Island (Battleship Island / Gunkanjima)',
    slug: 'hashima-adasi',
    description: 'Yaponiyanın Naqasaki sahilində yerləşən, bir vaxtlar dünyanın ən sıx məskunlaşmış kömür mədəni adası olan və 1974-cü ildə bir gecədə tərk edilərək beton kabusa çevrilən sirli ada.',
    category: 'qorxulu-yerler',
    subcategory: 'Tərk edilmiş şəhərlər',
    tags: ['Yaponiya', 'Haşima', 'Gunkanjima', 'Tərk edilmiş ada', 'Mitsubishi', 'UNESCO', 'Sənaye İrsi'],
    date: '1887 – 1974',
    location: 'Naqasaki prefekturası, Yaponiya',
    coordinates: '32°37′40″N 129°41′53″E',
    status: 'UNESCO Dünya Sənaye İrsi və qapalı mühafizə olunan zona',
    theoriesCount: 'Sənədli sənaye tarixi',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Okeanın ortasında nəhəng zirehli döyüş gəmisini xatırladan tərk edilmiş Haşima adası.',
    readingTime: 10,
    views: 38400,
    trendingScore: 82,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Sənaye Arxeologiyası Şöbəsi',
    tableOfContents: [
      { id: 'kesf-ve-inkisaf', title: '1. Kömürün Kəşfi və Mitsubishi Korporasiyası' },
      { id: 'rekord-sixliq', title: '2. Dünyanın Ən Sıx Əhalili Yeri: 83.500 nəfər/km²' },
      { id: 'denizalti-cehennem', title: '3. 1000 Metrlik Dənizaltı Şaxtalar və Ağır Şərait' },
      { id: 'ani-terk-edilme', title: '4. 1974: Bir Gecədə Boşalan Şəhər' },
      { id: 'menbeler', title: '5. Sənaye Arxivləri' }
    ],
    sections: [
      {
        id: 'kesf-ve-inkisaf',
        title: 'Kömürün Kəşfi və Mitsubishi Korporasiyası',
        content: `Haşima — Naqasaki limanından 15 kilometr cənub-qərbdə yerləşən, cəmi 6.3 hektar (uzunluğu 480 metr, eni 160 metr) sahəyə malik kiçik qayalıq ada idi. 1887-ci ildə adanın altındakı dəniz dibində yüksək keyfiyyətli kokslaşan daş kömür yataqları aşkar edildi.

1890-cı ildə Yaponiyanın nəhəng konserni Mitsubishi adanı satın alaraq burada dənizaltı kömür hasilatı layihəsinə başladı. Qasırğalardan və okean dalğalarından qorunmaq üçün adanın ətrafı hündür beton dalğaqıran bəndlərlə əhatələndi və adanın silueti Yaponiyanın "Tosa" zirehli döyüş gəmisinə bənzədiyi üçün xalq arasında "Gunkanjima" (Döyüş Gəmisi Adası) adını aldı.`,
        badge: 'fact',
        badgeText: 'Sənaye Başlanğıcı'
      },
      {
        id: 'rekord-sixliq',
        title: 'Dünyanın Ən Sıx Əhalili Yeri: 83.500 nəfər/km²',
        content: `Mədən fəhlələrini və onların ailələrini yerləşdirmək üçün 1916-cı ildə Yaponiyanın ilk çoxmərtəbəli dəmir-beton yaşayış binası (7 mərtəbəli Blok 30) məhz Haşimada tikildi. Növbəti onilliklərdə adada məktəblər, xəstəxana, uşaq bağçaları, kinoteatr, klublar, üzgüçülük hovuzu və 30-dan çox çoxmərtəbəli yaşayış korpusu ucaldıldı.

1959-cu ildə adanın əhalisi pik həddə — 5.259 nəfərə çatdı. Bu, hər kvadrat kilometrə 83.500 nəfər demək idi — həmin dövrdə Tokiodan 9 dəfə, tarixdə qeydə alınmış ən sıx məskunlaşma göstəricilərindən biri idi. Adada heç bir avtomobil yox idi; binalar bir-birinə yuxarıdan asma körpülər və labirint pilləkənlərlə bağlanmışdı.`,
        badge: 'fact',
        badgeText: 'Tarixi Əhali Rekordu'
      },
      {
        id: 'denizalti-cehennem',
        title: '1000 Metrlik Dənizaltı Şaxtalar və Ağır Şərait',
        content: `Haşimada kömür hasilatı açıq havada deyil, okean səviyyəsindən 1000 metrdən çox dərinlikdə, dəniz dibinin altındakı vertikal şaxtalarda aparılırdı. Şaxtalarda temperatur daima 30-38°C, rütubət isə 95% təşkil edirdi. Metan qazı partlayışları və su basma təhlükəsi hər an mövcud idi. 

İkinci Dünya Müharibəsi illərində burada minlərlə koreyalı və çinli məcburi əmək fəhləsi ən ağır şəraitdə işlədilmiş, yüzlərlə insan qəzalarda və aclıqdan həyatını itirmişdir.`,
        badge: 'fact',
        badgeText: 'Mədən Şəraiti'
      },
      {
        id: 'ani-terk-edilme',
        title: '1974: Bir Gecədə Boşalan Şəhər',
        content: `1960-cı illərin sonlarında qlobal miqyasda xam neftin daş kömürü əvəzləməsi ilə Yaponiyanın kömür sənayesi çökməyə başladı. 15 yanvar 1974-cü ildə Mitsubishi rəsmi olaraq Haşima mədəninin bağlandığını elan etdi.

Aprel ayına qədər bütün sakinlər adadan təxliyə edildi. İnsanlar məişət əşyalarını, televizorları, qab-qacaqları və məktəb kitablarını mənzillərində qoyaraq getdilər. 50 ildən çoxdur ki, dəniz duzu, külək və tayfunlar beton binaları dağıdır. 2015-ci ildə ada Yaponiyanın Meiji Sənaye İnqilabı İrsi çərçivəsində UNESCO siyahısına daxil edilmişdir.`,
        badge: 'fact',
        badgeText: 'Tarixi Nəticə'
      }
    ],
    keyFacts: [
      { label: 'Sahəsi', value: '0.063 km² (6.3 hektar)', status: 'verified_fact' },
      { label: 'Tarixi əhali pik nöqtəsi', value: '5.259 nəfər (1959-cu il)', status: 'verified_fact' },
      { label: 'Sıxlıq', value: '83.500 nəfər/km²', status: 'verified_fact' },
      { label: 'Tərk edilmə tarixi', value: '20 Aprel 1974', status: 'verified_fact' },
      { label: 'Status', value: 'UNESCO Ümumdünya İrsi (2015)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Fall of Gunkanjima: The Ghost Island of Nagasaki', author: 'Akira Kurosawa Research', publisher: 'Nagasaki Municipal Archives', year: '2016', type: 'archive' },
      { title: 'Ruins of Modernity: Hashima Island and the Heritage of Industrialization', publisher: 'Journal of Historical Geography', year: '2019', type: 'academic' }
    ],
    relatedArticleSlugs: ['pripyat-cernobil-zonasi', 'poveglia-adasi', 'aokigahara-mesesi']
  },
  {
    id: 'art-036',
    title: 'The Hum — Qlobal Sirli Uğultu Fenomeni',
    originalName: 'The Hum (Worldwide Acoustic Anomaly)',
    slug: 'the-hum-sirli-ugultu',
    description: 'Dünyanın müxtəlif coğrafiyalarında (Taos, Bristol, Kokomo, Vindzor) əhalinin 2%-nin eşitdiyi, heç bir mikrofonun qeydə ala bilmədiyi və intiharlara səbəb olan 30-80 Hz-lik aşağı tezlikli daimi uğultu.',
    category: 'sirli-hadiseler',
    subcategory: 'Naməlum siqnallar və bioakustika',
    tags: ['The Hum', 'Taos Uğultusu', 'Akustika', 'İnfrahəsəs', 'Tinnitus', 'LFE', 'Bristol Hum', 'Biofizika'],
    date: '1970-ci illər – Müasir dövr',
    location: 'Taos (ABŞ), Bristol (İngiltərə), Kokomo (İndiana), Vindzor (Kanada)',
    coordinates: '36°24′N 105°34′W',
    status: 'Rəsmi elmi, akustik və otorinolarinqoloji tədqiqat obyekti',
    theoriesCount: '4 elmi və biofiziki nəzəriyyə',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Aşağı tezlikli akustik dalğaların və infrahəsəs spektrinin vizual laboratoriya modeli.',
    readingTime: 9,
    views: 34800,
    trendingScore: 81,
    factStatus: 'theory',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Akustika və Biofizika Şöbəsi',
    tableOfContents: [
      { id: 'fenomenin-tarixi', title: '1. Fenomenin Tarixi: Bristol və Taos Uğultusu' },
      { id: 'qeribe-xususiyyetler', title: '2. Qəribə Xüsusiyyətlər: Niyə Mikrofonlar Tutmur?' },
      { id: 'otoakustik-emissiya', title: '3. Əsas Elmi İzah: Spontan Otoakustik Emissiya (SOAE)' },
      { id: 'senaye-ve-lfe', title: '4. Sənaye İnfrahəsəsi və Dənizaltı Rabitə Dalğaları' },
      { id: 'menbeler', title: '5. Universitet Hesabatları' }
    ],
    sections: [
      {
        id: 'fenomenin-tarixi',
        title: 'Fenomenin Tarixi: Bristol və Taos Uğultusu',
        content: `1970-ci illərin sonlarında İngiltərənin Bristol şəhərində yüzlərlə sakin yerli qəzetlərə və bələdiyyəyə müraciət edərək gecələr yatmalarına imkan verməyən, uzaqda işləyən dizel mühərrikinin və ya ağır transformatorun səsinə bənzər daimi boğuq səs eşitdiklərini bildirdilər ("Bristol Hum").

1991-ci ildə analoji və daha kütləvi hadisə ABŞ-ın Nyu-Meksiko ştatındakı Taos qəsəbəsində baş verdi. Şəhər sakinlərinin təxminən 2%-i fasiləsiz uğultudan şikayətlənərək yuxusuzluq, başgicəllənmə, burun qanaması və kəskin depressiyadan əziyyət çəkdiklərini bildirdilər. Hadisə o qədər böyüdü ki, 1993-cü ildə ABŞ Konqresi Nyu-Meksiko Universitetinə və Los-Alamos Milli Laboratoriyasına rəsmi təhqiqat aparmaq tapşırığı verdi.`,
        badge: 'fact',
        badgeText: 'Sənədləşdirilmiş Şikayətlər'
      },
      {
        id: 'qeribe-xususiyyetler',
        title: 'Qəribə Xüsusiyyətlər: Niyə Mikrofonlar Tutmur?',
        content: `Tədqiqatçılar Taos və digər "Hum" şəhərlərində ən müasir ultrasəs və infrahəsəs mikrofonları, seysmometrlər və elektromaqnit sensorları quraşdırdılar. Lakin alətlər ətraf mühitdə heç bir kənar akustik siqnal qeydə almadı.

Fenomenin ən qəribə xüsusiyyətləri bunlardır:
• Səs küçədə deyil, qapalı otaqlarda və xüsusən gecə saatlarında daha intensiv eşidilir.
• Qulaq tıxacları (earplugs) taxmaq səsi kəsmir, əksinə kəllə sümüyü daxilində səsin daha aydın rezonans verməsinə səbəb olur.
• Səsi hamı eşitmir: əhalinin yalnız 2-3%-i (əsasən 30-55 yaş arası şəxslər) bu tezliyi qəbul edə bilir.
• Şəhərdən kənara çıxdıqda bəzi insanlarda səs kəsilir, bəzilərində isə davam edir.`,
        badge: 'fact',
        badgeText: 'Akustik Paradoks'
      },
      {
        id: 'otoakustik-emissiya',
        title: 'Əsas Elmi İzah: Spontan Otoakustik Emissiya (SOAE)',
        content: `Müasir audiologiya və otorinolarinqologiya elminin ən güclü izahı Spontan Otoakustik Emissiyadır (SOAE). İnsan daxili qulağında yerləşən ilbiz aparatının mikroskopik xarici tük hüceyrələri səsi yalnız qəbul etmir, bəzi fərdlərdə mexaniki rezonans nəticəsində öz-özünə zəif akustik dalğa (30-80 Hz) ifraz edir.

Normada beyin bu daxili küyü süzgəcdən keçirir. Lakin eşitmə traktında filtr mexanizmi pozulmuş həssas insanlarda beyin bu daxili bioloji siqnalı xarici mühitdən gələn fiziki uğultu kimi şərh edir.`,
        badge: 'theory',
        badgeText: 'Tibbi Elmi Konsensus'
      },
      {
        id: 'senaye-ve-lfe',
        title: 'Sənaye İnfrahəsəsi və Dənizaltı Rabitə Dalğaları',
        content: `Kanadanın Vindzor şəhərində ("Windsor Hum") aparılan tədqiqat isə sübut etdi ki, bəzi hallarda səbəb sırf sənayedir. Detroyt çayındakı "Zug Island" polad tökmə zavodunun nəhəng domna sobalarının yaratdığı aşağı tezlikli infrahəsəs dalğaları kilometrlərlə məsafədəki evlərin divarlarında rezonans yaradırdı. 2020-ci ildə zavod bağlandıqdan sonra Vindzorda uğultu tamamilə kəsildi.`,
        badge: 'fact',
        badgeText: 'Təsdiqlənmiş Fakt'
      }
    ],
    keyFacts: [
      { label: 'Eşidən əhali faizi', value: '~2–3% həssas insan', status: 'verified_fact' },
      { label: 'Səs tezliyi', value: '30 – 80 Hz (Aşağı tezlik / Low Frequency)', status: 'verified_fact' },
      { label: 'İlk rəsmi tədqiqat', value: '1993 (Los Alamos & UNM)', status: 'verified_fact' },
      { label: 'Əsas səbəblər', value: 'Bioloji SOAE və Sənaye İnfrahəsəsi', status: 'verified_fact' }
    ],
    theories: [
      {
        name: 'Daxili qulağın spontan otoakustik emissiyası',
        likelihood: 'Yüksək',
        description: 'Daxili qulaqdakı mikroskopik hüceyrələrin öz-özünə aşağı tezlikli mexaniki dalğa generasiya etməsi.',
        scientificConsensus: 'Otorinolarinqoloqlar tərəfindən ən geniş dəstəklənən bioloji model.'
      },
      {
        name: 'Hərbi VLF Dənizaltı Rabitə Şəbəkələri',
        likelihood: 'Orta',
        description: 'Dəniz qüvvələrinin sualtı qayıqlarla əlaqə üçün istifadə etdiyi ultra-aşağı tezlikli (VLF/ELF) radio dalğalarının kəllə toxumalarında mikrodalğa eşitmə effekti yaratması.'
      }
    ],
    sources: [
      { title: 'The Taos Hum: Acoustic and Psychoacoustic Investigations', author: 'Mullins, J. & Kelly, J.', publisher: 'University of New Mexico', year: '1995', type: 'academic' },
      { title: 'Low Frequency Noise and Infrasound: Ambient and Physiological Sources', publisher: 'Journal of the Acoustical Society of America', year: '2014', type: 'academic' }
    ],
    relatedArticleSlugs: ['bloop-namelum-ses', 'wow-siqnali', 'yuxu-iflici-nevrologiyasi']
  },
  {
    id: 'art-037',
    title: 'Capgras Delüziyası — Dublyor və Əvəzləmə İllüziyası',
    originalName: 'Capgras Delusion (The Impostor Syndrome Delusion)',
    slug: 'capgras-deluziyasi',
    description: 'Xəstənin ən yaxın ailə üzvlərinin, həyat yoldaşının və ya uşaqlarının xarici görünüşcə tamamilə eyni olan saxta dublyorlar və robotlar tərəfindən əvəzləndiyinə dair sarsılmaz neyropsixiatrik inancı.',
    category: 'psixologiya',
    subcategory: 'İnsan beyninin qəribə halları və neyrologiya',
    tags: ['Capgras', 'Psixiatriya', 'Neyrologiya', 'Dublyor delüziyası', 'Amiqdala', 'Fusiform Gyrus', 'Vilayanur Ramachandran'],
    date: '1923 – Müasir tibb',
    location: 'Qlobal klinik psixiatriya və neyrologiya mərkəzləri',
    status: 'Rəsmi təsdiqlənmiş neyropsixiatrik sindrom (ICD-11 / DSM-5)',
    theoriesCount: 'Tam sübut olunmuş neyrobioloji mexanizm',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Güzgüdə özünü və sevdiklərini tanımamaq, emosional yabançılaşma hissinin bədii vizualizasiyası.',
    readingTime: 8,
    views: 31900,
    trendingScore: 79,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Koqnitiv Neyrobiologiya Şöbəsi',
    tableOfContents: [
      { id: 'kesf-tarixi', title: '1. Cozef Kapqra və "Madam M." Hadisəsi (1923)' },
      { id: 'neyrobioloji-mexanizm', title: '2. İki Mərhələli Üz Tanıma: Fuzi-forma və Amiqdala' },
      { id: 'ramacandran-kesfi', title: '3. Vilayanur Ramachandranın Eksperimentləri' },
      { id: 'klinik-mualice', title: '4. Müasir Müalicə Yolları və Digər Delüziyalar' },
      { id: 'menbeler', title: '5. Elmi Tibbi Ədəbiyyat' }
    ],
    sections: [
      {
        id: 'kesf-tarixi',
        title: 'Cozef Kapqra və "Madam M." Hadisəsi (1923)',
        content: `1923-cü ildə fransız psixiatrı Cozef Kapqra (Joseph Capgras) və həmkarı Jan Rebul-Laşo Paris xəstəxanasında 53 yaşlı "Madam M." adlı qadının qeyri-adi vəziyyətini sənədləşdirdilər. Qadın iddia edirdi ki, onun həyat yoldaşı, uşaqları, qonşuları və hətta özü tamamilə eyni görünüşə malik olan saxta kopyalarla ("dublyorlar") əvəz edilmişdir.

Madam M. ərinin üz cizgilərini, boyunu, səsini dəqiq tanıdığını qəbul edirdi ("Bəli, o eynilə mənim ərim kimi görünür"), lakin onun həqiqi əri olmadığını, onun cildinə girmiş başqa bir insan olduğunu inadla müdafiə edirdi. Psixiatriyada bu hal "L'illusion des sosies" (Dublyor illüziyası) və ya Capgras Delüziyası adlandırıldı.`,
        badge: 'fact',
        badgeText: 'Klinik Tarix'
      },
      {
        id: 'neyrobioloji-mexanizm',
        title: 'İki Mərhələli Üz Tanıma: Fuzi-forma və Amiqdala',
        content: `Onilliklər boyu bu sindrom sırf freydist psixoanalitik konflikt hesab olunurdu. Lakin 1990-cı illərdə koqnitiv neyroloqlar beynin üz tanıma arxitekturasının iki paralel kanaldan ibarət olduğunu aşkar etdilər:

1. Koqnitiv Şüurlu Kanal (Giriş: Fusiform Face Area — FFA): Beynin gicgah payında yerləşən bu nahiyə üzün həndəsəsini skan edir və şəxsiyyəti müəyyənləşdirir: "Bu mənim anamdır".
2. Emosional Şüuraltı Kanal (Giriş: Amiqdala və Limbik Sistem): Sevdiyimiz bir insanın üzünü gördükdə amiqdala dərhal avtonom emosional reaksiya (isti istilik, təhlükəsizlik və sevgi hissi) generasiya edir və dəridə qalvanik elektrik reaksiyası (GSR) yaradır.

Capgras xəstələrində koqnitiv FFA sahəsi tamamilə sağlamdır (üzü tanıyırlar), lakin FFA ilə amiqdala arasındakı sinir yolları (beyin travması, insult, Altsheymer və ya şizofreniya nəticəsində) zədələnmişdir. Nəticədə insan doğmasını görür, lakin heç bir emosional istilik duymur. Beynin məntiqi sol yarımkürəsi bu ziddiyyəti həll etmək üçün dəhşətli nəticəyə gəlir: "Əgər bu anamdırsa, mən niyə heç nə hiss etmirəm? Deməli, bu o deyil, saxta dublyordur!"`,
        badge: 'fact',
        badgeText: 'Neyrobioloji Fakt'
      },
      {
        id: 'ramacandran-kesfi',
        title: 'Vilayanur Ramachandranın Eksperimentləri',
        content: `Məşhur neyroloq Vilayanur Ramachandran maraqlı bir faktı sübut etdi: Capgras xəstələri analarını üzbəüz gördükdə "Bu saxtadır!" desələr də, eyni insanla telefonda danışdıqda onu dərhal tanıyır və sevinirlər ("Ana, nə yaxşı zəng etdin!"). Çünki eşitmə qabığı ilə amiqdala arasındakı sinir əlaqələri zədələnməmiş qalır. Bu təcrübə xəstəliyin psixoloji deyil, sırf anatomik vizual naqil qırılması olduğunu qəti şəkildə sübut etdi.`,
        badge: 'fact',
        badgeText: 'Elmi Təcrübə'
      },
      {
        id: 'klinik-mualice',
        title: 'Müasir Müalicə Yolları və Digər Delüziyalar',
        content: `Capgras delüziyası Freqoli sindromu (əks hal: yad adamların cild dəyişdirmiş eyni tanış insan olduğuna inanmaq) və Kotar sindromu (bədənin öldüyünə inanmaq) ilə eyni mono-delüzional qrupa aiddir. Müalicədə əsas səbəb olan nevroloji travmanın aradan qaldırılması, antipsixotik preparatlar və xəstənin yaxınları ilə daha çox audio və toxunma ünsiyyəti qurması tövsiyə edilir.`,
        badge: 'fact',
        badgeText: 'Klinik Protokol'
      }
    ],
    keyFacts: [
      { label: 'İlk qeydiyyat', value: '1923 (Joseph Capgras & Jean Reboul-Lachaux)', status: 'verified_fact' },
      { label: 'Neyroanatomiya', value: 'FFA ilə Amiqdala arasındakı əlaqənin kəsilməsi', status: 'verified_fact' },
      { label: 'Eşitmə testi', value: 'Telefonda sevdiklərini tam tanıyırlar', status: 'verified_fact' },
      { label: 'Əlaqəli sindromlar', value: 'Fregoli delüziyası, Cotard sindromu', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Capgras Delusion: A Neurological Perspective', author: 'Hirstein, W. & Ramachandran, V. S.', publisher: 'Brain Journal (Oxford University Press)', year: '1997', type: 'academic' },
      { title: 'Phantoms in the Brain: Probing the Mysteries of the Human Mind', author: 'V.S. Ramachandran & Sandra Blakeslee', publisher: 'HarperCollins', year: '1998', type: 'book' }
    ],
    relatedArticleSlugs: ['cotard-sindromu-gezen-cesed', 'yuxu-iflici-nevrologiyasi', 'elisa-lam-cecil-hotel']
  },
  {
    id: 'art-038',
    title: 'Nəhəng Dəniz Qulyabanisi (Architeuthis dux)',
    originalName: 'Giant Squid (Architeuthis dux)',
    slug: 'neheng-deniz-qulyabanisi',
    description: '13 metrədək uzanan qolları, futbol topu ölçüsündə 27 santimetrlik nəhəng gözləri ilə okeanın 1000 metr dərinliklərində kaşalotlarla ölüm-dirim savaşı aparan əfsanəvi Krakenin bioloji reallığı.',
    category: 'qeribe-canlilar',
    subcategory: 'Dərin dəniz abissal faunası',
    tags: ['Architeuthis', 'Kraken', 'Dəniz canlısı', 'Molusk', '13 metr', 'Okeanologiya', 'Kaşalot', 'Abissal'],
    date: '2004 (İlk canlı foto) – 2012 (İlk canlı video)',
    location: 'Dünya okeanlarının batipelagik və mezopelagik zonaları (300–1200 metr)',
    coordinates: '27°03′N 142°12′E',
    status: 'Təsdiqlənmiş yaşayan canlı növü (Sefalopod)',
    theoriesCount: 'Bioloji və okeanoloq tədqiqatları',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Okean qaranlığında nəhəng kalmarın biolüminessensiya ov anı və anatomik bədii rekonstruksiyası.',
    readingTime: 9,
    views: 39600,
    trendingScore: 83,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Dəniz Zoologiyası Şöbəsi',
    tableOfContents: [
      { id: 'kraken-efsanesinden-elme', title: '1. Kraken Əfsanəsindən Elmi Kəşfə' },
      { id: 'anatomik-super-orqanlar', title: '2. Anatomik Rekordlar: 27 sm Gözlər və Zirehli Qarmaqlar' },
      { id: 'kasalotlarla-titan-doyusu', title: '3. Kaşalotlarla Titanların Döyüşü' },
      { id: 'ilk-canli-cekilisler', title: '4. 2004 və 2012: İlk Dəfə Canlı Halda Görülməsi' },
      { id: 'menbeler', title: '5. Okeanoloji Hesabatlar' }
    ],
    sections: [
      {
        id: 'kraken-efsanesinden-elme',
        title: 'Kraken Əfsanəsindən Elmi Kəşfə',
        content: `Əsrlər boyu Skandinaviya dənizçilərinin salnamələrində bütöv yelkənli gəmiləri qucaqlayaraq okeanın dibinə çəkən "Kraken" adlı nəhəng dəniz bədheybətindən bəhs edilirdi. 18-ci əsrə qədər elm adamları bunu dənizçi sayıqlaması hesab edirdilər.

Yalnız 1857-ci ildə danimarkalı zooloq Yapetus Streenstrup sahilə atılmış nəhəng kalmar dimdiyini tədqiq edərək növün elmi adını — Architeuthis dux ("Baş kalmar hökmdarı") qoydu. 1870-ci illərdə Nyufaundlend sahillərinə dalğaların atdığı nəhəng cəsədlər mifologiyanın arxasında dəhşətli dərəcədə real bir canlının dayandığını sübut etdi.`,
        badge: 'fact',
        badgeText: 'Zooloji Tarix'
      },
      {
        id: 'anatomik-super-orqanlar',
        title: 'Anatomik Rekordlar: 27 sm Gözlər və Zirehli Qarmaqlar',
        content: `Architeuthis dux — planetimizin ən nəhəng onurğasız canlılarından biridir. Dişi fərdlərin ümumi uzunluğu (tutucu çadırlar daxil olmaqla) 12-13 metrə, çəkisi isə 275-300 kiloqrama çatır (Antarktika sularında yaşayan Mesonychoteuthis hamiltoni isə 500 kq-a çatır).

Onun heyrətamiz anatomik xüsusiyyətləri:
• Gözləri: Diametri 27-30 santimetrə (futbol topu ölçüsünə) çatan gözləri heyvanlar aləmində məlum olan ən böyük görmə orqanıdır. Bu nəhəng büllur 1000 metr dərinlikdəki mütləq qaranlıqda hərəkət edən canlıların zəif biolüminessensiya işığını toplamaq üçün formalaşıb.
• Dimdiyi: Bərk xitin maddəsindən ibarət tutuquşu dimdiyinə bənzər kəsici çənəsi polad kimi möhkəmdir və balıq sümüklərini, qalın zirehləri bir anda doğrayır.
• Əzələləri və qanı: Qanı mis əsaslı hemosianindən ibarətdir və mavi rəngdədir. Toxumalarında xüsusi ammonium xlorid məhlulu saxlayaraq neytral üzmə qabiliyyəti təmin edir.`,
        badge: 'fact',
        badgeText: 'Anatomik Rekord'
      },
      {
        id: 'kasalotlarla-titan-doyusu',
        title: 'Kaşalotlarla Titanların Döyüşü',
        content: `Nəhəng kalmarın yeganə təbii düşməni kaşalot balinalarıdır (Physeter macrocephalus). Kaşalotlar 1500 metr dərinliyə dalaraq nəhəng kalmarları ovlayırlar. 

Ölən və tutulan demək olar ki, bütün yetkin kaşalotların dərisində diametri 10-15 santimetrə çatan dəyirmi sorma yaraları və cırmaq izləri tapılır. Bu izlər dəniz dibində bu iki nəhəng yırtıcı arasında baş verən qanlı və amansız döyüşlərin maddi sübutudur.`,
        badge: 'fact',
        badgeText: 'Ekosistem Faktı'
      },
      {
        id: 'ilk-canli-cekilisler',
        title: '2004 və 2012: İlk Dəfə Canlı Halda Görülməsi',
        content: `Bəşəriyyət min illər boyu bu canlını yalnız sahilə atılmış ölü cəsədlər şəklində görmüşdü. Nəhayət, 30 sentyabr 2004-cü ildə yapon alimləri Tsunemi Kubodera və Kiyoedzi Mori Oqasavara adaları yaxınlığında 900 metr dərinlikdə təbii mühitində canlı nəhəng kalmarın ilk fotoşəkillərini çəkməyə nail oldular.

2012-ci ilin iyulunda isə NHK və Discovery Channel ekspedisiyası xüsusi dərin dəniz sualtı qayığı ilə 630 metr dərinlikdə canlı Architeuthis dux-un ilk yüksək keyfiyyətli video görüntülərini qeydə aldı.`,
        badge: 'fact',
        badgeText: 'Tarixi Elmi Çəkiliş'
      }
    ],
    keyFacts: [
      { label: 'Maksimum uzunluq', value: '12 – 13 metr (tutucu çadırlar daxil)', status: 'verified_fact' },
      { label: 'Göz diametri', value: '27 – 30 sm (Canlılar aləmində rekord)', status: 'verified_fact' },
      { label: 'Yaşama dərinliyi', value: '300 – 1200 metr (Mezopelagik zona)', status: 'verified_fact' },
      { label: 'İlk canlı video', value: 'İyul 2012 (Yaponiya, NHK/Discovery)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Giant Squid: Searching for a Sea Monster', author: 'Richard Ellis', publisher: 'The Lyons Press', year: '1998', type: 'book' },
      { title: 'First-ever observations of a live giant squid in the wild', author: 'Kubodera, T. & Mori, K.', publisher: 'Proceedings of the Royal Society B', year: '2005', type: 'academic' }
    ],
    relatedArticleSlugs: ['mariana-cökekliyi-derin-deniz', 'bloop-namelum-ses', 'cordyceps-zombi-gobelek']
  },
  {
    id: 'art-039',
    title: 'Chupacabra — Qan Soran Mif və DNT Analizləri',
    originalName: 'El Chupacabra (The Goat Sucker)',
    slug: 'chupacabra-efsanesi',
    description: '1995-ci ildə Puerto-Rikoda kənd təsərrüfatı heyvanlarının qanını içdiyi iddia edilən sirli varlıq əfsanəsi və müasir baytarlıq-genetik DNT analizlərinin aşkar etdiyi qoturluq paraziti həqiqəti.',
    category: 'efsaneler-mifler',
    subcategory: 'Kriptozoologiya və baytarlıq elmi',
    tags: ['Chupacabra', 'Puerto-Riko', '1995', 'Qoturluq gənəsi', 'Koyot', 'Kriptozoologiya', 'Sarcoptes scabiei', 'DNT analizi'],
    date: '1995 – Müasir dövr',
    location: 'Puerto-Riko, Meksika, Texas (ABŞ)',
    coordinates: '18°15′N 66°30′W',
    status: 'Elmi olaraq şiddətli qoturluq infeksiyası keçirən koyot və canavarlar kimi DNT ilə sübut olunub',
    theoriesCount: 'Tam sübut edilmiş genetik və parazitoloji analiz',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Mifdə iddia edilən yadplanetli sürünən varlıq rəsmi və qoturluqdan tükü tökülmüş koyot skeletinin müqayisəsi.',
    readingTime: 8,
    views: 31200,
    trendingScore: 76,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Baytarlıq və Folkloristika Şöbəsi',
    tableOfContents: [
      { id: 'efsanenin-dogulusu', title: '1. Puerto-Riko 1995: Əfsanənin Doğuluşu' },
      { id: 'kinematoqrafik-tesir', title: '2. Medelin Tolentino və "Species" Filmi Təsiri' },
      { id: 'texas-chupacabrasi', title: '3. Texas Tapıntıları və Sarcoptes Scabiei Gənəsi' },
      { id: 'dnt-ve-baytarliq', title: '4. DNT Nəticələri: Mifin Elmi İzahı' },
      { id: 'menbeler', title: '5. Elmi Tədqiqatlar' }
    ],
    sections: [
      {
        id: 'efsanenin-dogulusu',
        title: 'Puerto-Riko 1995: Əfsanənin Doğuluşu',
        content: `1995-ci ilin martında Puerto-Rikonun Kanovanas qəsəbəsində səkkiz ev qoyunu boyun nahiyəsində üç dəliklə ölü tapıldı və bədənlərində qan qalmadığı iddia edildi. Avqust ayında isə fermer Medelin Tolentino adlı qadın həyətində arxa ayaqları üzərində tullanan, belində tikanlar olan, qırmızı gözlü yadplanetliyə bənzər bir məxluq gördüyünü bildirdi.

İspan dilində "keçi soran" mənasını verən "El Chupacabra" adı yerli komediant Silverio Perez tərəfindən irəli sürüldü və dərhal bütün Şimali və Cənubi Amerika mətbuatına yayıldı. Yüzlərlə kəndli toyuqlarının, keçilərinin bu qorxunc məxluq tərəfindən qətlə yetirildiyini iddia edirdi.`,
        badge: 'claim',
        badgeText: 'Folklorik İddia'
      },
      {
        id: 'kinematoqrafik-tesir',
        title: 'Medelin Tolentino və "Species" Filmi Təsiri',
        content: `Folklorşünas və elmi skeptik Benjamin Redford 5 il davam edən təhqiqatında aşkar etdi ki, Medelin Tolentinonun təsvir etdiyi "tikanlı yadplanetli" obrazı hadisədən cəmi bir neçə həftə əvvəl kinoteatrlarda nümayiş etdirilən "Species" (Növlər, 1995) adlı Hollivud qorxu filmindəki "Sil" adlı bədheybətlə 100% eynidir. Şahid qeyri-ixtiyari olaraq filmdə gördüyü canavar təsvirini real həyatdakı naməlum heyvan hücumu ilə birləşdirmişdi.`,
        badge: 'fact',
        badgeText: 'Sosial-Psixoloji Fakt'
      },
      {
        id: 'texas-chupacabrasi',
        title: 'Texas Tapıntıları və Sarcoptes Scabiei Gənəsi',
        content: `2000-ci illərin ortalarında "Chupacabra" obrazı dəyişdi. Texas və Meksika fermerləri tüksüz, göy-boz rəngli, büzüşmüş qalın dərili və qorxunc dişli heyvan cəsədləri tapdıqlarını elan edərək onların Chupacabra olduğunu iddia etdilər.

Texas Dövlət Universiteti və Miçiqan Universitetinin bioloqları bu cəsədləri laboratoriyada tədqiq etdikdə həqiqət tam aydınlaşdı:
• Bütün nümunələr Sarcoptes scabiei növlü parazit mikroskopik qoturluq gənəsinin törətdiyi şiddətli "Sarkoptoz" (mange) infeksiyasına yoluxmuş koyotlar (çöl canavarları), vəhşi itlər və yenotlar idi.
• Qoturluq gənəsi dərinin altına girərək allergik reaksiya yaradır, heyvanın bütün tüklərini tökür, dərini qalınlaşdıraraq büzüşdürür, dırnaqları və dişləri önə çıxarır. Xəstəlikdən zəifləmiş koyotlar vəhşi təbiətdə dovşan ovlaya bilmədikləri üçün asan hədəf olan fermer toyuqlarına və keçilərinə hücum edirdilər.`,
        badge: 'fact',
        badgeText: 'Baytarlıq Sübutu'
      },
      {
        id: 'dnt-ve-baytarliq',
        title: 'DNT Nəticələri: Mifin Elmi İzahı',
        content: `Texas Universiteti tərəfindən aparılan mitoxondrial DNT analizləri iddia edilən bütün Chupacabra qalıqlarının 100% Canis latrans (Şimali Amerika koyotu) olduğunu sübut etdi. Heyvanların "qanının tam sorulması" iddiası isə sadəcə qan dövranının dayanmasından sonra daxili orqanlarda laxtalanma (hipostaz) nəticəsində kəndlilərin səhv təəssüratı idi.`,
        badge: 'fact',
        badgeText: 'Genetik Laboratoriya Faktı'
      }
    ],
    keyFacts: [
      { label: 'İlk hadisə', value: '1995 (Puerto-Riko)', status: 'verified_fact' },
      { label: 'Həqiqi bioloji növ', value: 'Canis latrans (Koyot) və Canis lupus familiaris', status: 'verified_fact' },
      { label: 'Xəstəlik', value: 'Sarkoptoz (Sarcoptes scabiei qoturluq gənəsi)', status: 'verified_fact' },
      { label: 'DNT Analizi', value: 'Texas Dövlət Universiteti (100% Canid DNT-si)', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'Tracking the Chupacabra: The Vampire Beast in Fact, Fiction, and Folklore', author: 'Benjamin Radford', publisher: 'University of New Mexico Press', year: '2011', type: 'book' },
      { title: 'Sarcoptic mange in wild canids: Pathology and behavioral alteration', publisher: 'Journal of Wildlife Diseases', year: '2015', type: 'academic' }
    ],
    relatedArticleSlugs: ['mothman-pervane-adam', 'qara-gozlu-usaqlar', 'enfield-poltergeist-hadisesi']
  },
  {
    id: 'art-040',
    title: 'Roswell UFO Hadisəsi (1947) — Mogul Layihəsi və 75 İllik Mif',
    originalName: 'The Roswell Incident & Project Mogul',
    slug: 'roswell-ufo-hadisesi',
    description: '1947-ci ilin iyulunda Nyu-Meksiko səhrasında baş verən hərbi qəza, "uçan boşqab" başlıqlı rəsmi mətbuat xəbəri və ABŞ Hərbi Hava Qüvvələrinin 1994-cü ildə deklassifikasiya etdiyi sovet nüvə sınaqlarını izləyən "Project Mogul" həqiqəti.',
    category: 'ufo-namelum',
    subcategory: 'Deklassifikasiya olunmuş hərbi sirlər',
    tags: ['Roswell', '1947', 'UFO', 'Project Mogul', 'US Air Force', 'Nyu-Meksiko', 'Kəşfiyyat', 'Soyuq Müharibə'],
    date: 'İyul 1947',
    location: 'Korona və Roswell yaxınlığı, Nyu-Meksiko, ABŞ',
    coordinates: '33°23′N 104°31′W',
    status: '1994 və 1997-ci illərdə ABŞ Hərbi Hava Qüvvələri tərəfindən tam deklassifikasiya olunmuş gizli hərbi sınaq',
    theoriesCount: 'Rəsmi hərbi və elmi arxiv sənədləri',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '1947-ci ildə general Rocer Rameyin qərargahında nümayiş etdirilən radar reflektoru və xüsusi lent qalıqları.',
    readingTime: 10,
    views: 48900,
    trendingScore: 89,
    factStatus: 'verified_fact',
    lastUpdated: '24 Avqust 2026',
    author: 'DARKPEDIA Hərbi Arxiv və Kosmik Tədqiqatlar Şöbəsi',
    tableOfContents: [
      { id: 'iyul-1947-hadiseleri', title: '1. İyul 1947: "RAAF Uçan Boşqab Ələ Keçirdi"' },
      { id: 'bextsiz-press-reliz', title: '2. General Ramey və Təkzib Bülleteni' },
      { id: 'project-mogul-heqiqeti', title: '3. Ultra-Məxfi "Project Mogul" (Uçuş No. 4)' },
      { id: 'manekenler-ve-1994', title: '4. 1994 və 1997 USAF Deklassifikasiya Hesabatları' },
      { id: 'menbeler', title: '5. Rəsmi Hərbi Sənədlər' }
    ],
    sections: [
      {
        id: 'iyul-1947-hadiseleri',
        title: 'İyul 1947: "RAAF Uçan Boşqab Ələ Keçirdi"',
        content: `1947-ci ilin iyul ayının əvvəlində Nyu-Meksiko ştatının Korona qəsəbəsində fermer Mak Brezel öz qoyun otlağında rezin zolaqlar, möhkəm folqa, taxta çubuqlar və qəribə simvollu lentlərdən ibarət böyük dağıntı sahəsi aşkar etdi. Həmin günlərdə ABŞ mətbuatı Kennet Arnoldun "uçan boşqablar" gördüyü xəbərləri ilə çalxalanırdı.

Fermer tapıntıları Roswell Quru Hava Qüvvələri bazasının (dünyada yeganə atom bombası daşıyan 509-cu Atom Alayı) kəşfiyyat zabiti mayor Cessi Marsela təhvil verdi. 8 iyul 1947-ci ildə bazanın ictimaiyyətlə əlaqələr zabiti Valter Haut komandan Uilyam Blanşardın əmri ilə sensasion rəsmi press-reliz yaydı: "Roswell Ordu Hava Sahəsi (RAAF) bir fermerin köməyi ilə uçan disk ələ keçirdi."`,
        badge: 'fact',
        badgeText: 'Tarixi Rəsmi Bəyanat'
      },
      {
        id: 'bextsiz-press-reliz',
        title: 'General Ramey və Təkzib Bülleteni',
        content: `Xəbər dünyada şok effekti yaratdı. Lakin cəmi bir neçə saat sonra Texas ştatının Fort-Uort şəhərindəki 8-ci Hava Ordusunun komandanı briqada generalı Rocer Ramey təcili mətbuat konfransı təşkil etdi.

O, mayor Marselin gətirdiyi metal folqa və taxta qalıqlarını jurnalistlərə göstərərək bunun sadəcə hava şəraitini ölçən standart meteoroloji şar və radar reflektoru (rawinsonde) olduğunu bildirdi. Hadisə 30 il boyunca unuduldu, ta ki 1978-ci ildə ufoloq Stenton Fridman təqaüddə olan Cessi Marseldən müsahibə alana və "yadplanetli cəsədlərinin gizlədilməsi" mifini yenidən alovlandırana qədər.`,
        badge: 'fact',
        badgeText: 'Tarixi Hadisələr'
      },
      {
        id: 'project-mogul-heqiqeti',
        title: 'Ultra-Məxfi "Project Mogul" (Uçuş No. 4)',
        content: `1994-cü ildə ABŞ Konqresinin Təhqiqat İdarəsinin (GAO) tələbi ilə ABŞ Hərbi Hava Qüvvələri (USAF) 1947-ci il hadisələrinə dair bütün arxivləri açdı və "The Roswell Report: Fact vs. Fiction in the New Mexico Desert" adlı 1000 səhifəlik rəsmi sənəd dərc etdi.

Deklassifikasiya olunmuş sənədlərə görə:
• Qəzaya uğrayan obyekt meteoroloji hava şarı deyildi, lakin yadplanetli gəmisi də deyildi. Bu, Soyuq Müharibənin başlanğıcında Nyu-York Universitetinin atmosfer alimləri tərəfindən hazırlanmış ultra-məxfi "Project Mogul" (Uçuş 4) kəşfiyyat sistemi idi.
• Mogul sistemi Sovet İttifaqının potensial gizli atom bombası sınaqlarının yaratdığı infrahəsəs akustik dalğalarını stratosferdə (tropopauzada) dinləmək üçün bir-birinə bağlanmış 20-dən çox nəhəng neopren şar, xüsusi mikrofonlar və radar əks etdirici panellərdən ibarət 200 metrlik nəhəng konstruksiya idi.
• Üzərindəki "qəribə simvollar" isə Nyu-Yorkun Nyu-Bransuik şəhərindəki uşaq oyuncaqları istehsal edən fabrikdən alınmış möhkəmləndirici yapışqan lentlərin çiçək və həndəsi naxışları idi.`,
        badge: 'fact',
        badgeText: 'Deklassifikasiya Nəticəsi'
      },
      {
        id: 'manekenler-ve-1994',
        title: '1994 və 1997 USAF Deklassifikasiya Hesabatları',
        content: `1997-ci ildə dərc edilən ikinci rəsmi hesabatda ("The Roswell Report: Case Closed") "yadplanetli meyitləri" iddialarına da aydınlıq gətirildi. 1950-ci illərdə ABŞ ordusu yüksək hündürlükdən paraşütlə tullanma sınaqlarında ("Project High Dive") stratosferdən atılan insan boyda lateks dərili və tüksüz antropomorfik qəza manekenlərindən (crash test dummies) istifadə edirdi. 

Yerli sakinlərin bu manekenlərin xilasetmə əməliyyatlarını görməsi zaman keçdikcə 1947-ci il hadisəsi ilə qarışdırılaraq "yadplanetli yarılması" folkloruna çevrilmişdi.`,
        badge: 'fact',
        badgeText: 'Hərbi Hesabat Faktı'
      }
    ],
    keyFacts: [
      { label: 'Tarix', value: 'İyul 1947', status: 'verified_fact' },
      { label: 'Həqiqi Hərbi Proyekt', value: 'Project Mogul (Uçuş No. 4 - Sovet atom sınaqlarını izləmə)', status: 'verified_fact' },
      { label: 'Deklassifikasiya ili', value: '1994 (USAF Rəsmi Hesabatı)', status: 'verified_fact' },
      { label: 'Məkan', value: 'Roswell və Corona, Nyu-Meksiko, ABŞ', status: 'verified_fact' }
    ],
    theories: [],
    sources: [
      { title: 'The Roswell Report: Fact vs. Fiction in the New Mexico Desert', author: 'United States Air Force Headquarters', publisher: 'U.S. Government Printing Office', year: '1995', type: 'government' },
      { title: 'The Roswell Report: Case Closed', author: 'Headquarters United States Air Force', publisher: 'U.S. Air Force', year: '1997', type: 'government' }
    ],
    relatedArticleSlugs: ['area-51-qroom-leyk', 'wow-siqnali', 'oumuamua-namelum-obyekt', 'tunguska-partlayisi']
  }
];

export const ALL_ARTICLES: Article[] = [
  ...encyclopediaBatch1Articles,
  ...encyclopediaBatch2Articles,
  ...encyclopediaBatch3Articles,
  ...encyclopediaBatch4Articles,
  ...encyclopediaBatch5Articles,
  ...encyclopediaMegaCollectionArticles,
  ...encyclopediaGrandArchiveArticles,
  ...encyclopediaDeepCatalogArticles,
  ...encyclopediaCentennialArticles,
  ...encyclopediaGrandCompendiumArticles,
  ...encyclopediaOmnibusPart1Articles,
  ...encyclopediaOmnibusPart2Articles,
  ...automatedLongFormArticlesPart1,
  ...automatedLongFormArticlesPart2,
  ...automatedLongFormArticlesPart3,
  ...unsolvedAndForensicsArticles,
  ...historicalAnomaliesArticles,
  ...expandedMysteriesArticles,
  ...paranormalAndMysteriesArticles,
  ...placesAndCrimeArticles,
  ...psychologyAndCosmosArticles,
  ...creaturesAndFolkloreArticles,
  ...additionalEncyclopedicArticles
];

// Helper functions for easy querying across the entire encyclopedia
export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES.find(a => a.slug === slug);
}

export function getArticleById(id: string): Article | undefined {
  return ALL_ARTICLES.find(a => a.id === id);
}

export function getFeaturedArticle(): Article {
  return ALL_ARTICLES.find(a => a.isFeatured) || ALL_ARTICLES[0];
}

export function getMostReadArticles(limit = 10): Article[] {
  return [...ALL_ARTICLES]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getTrendingArticles(limit = 6): Article[] {
  return [...ALL_ARTICLES]
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, limit);
}

export function getLatestArticles(limit = 8): Article[] {
  return [...ALL_ARTICLES]
    .slice(0, limit);
}

export function getArticlesByCategory(categoryId: CategoryId): Article[] {
  return ALL_ARTICLES.filter(a => a.category === categoryId);
}

export function getRelatedArticles(article: Article, limit = 8): Article[] {
  const result: Article[] = [];
  const addedIds = new Set<string>([article.id]);

  // 1. Explicit relatedArticleSlugs
  if (article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0) {
    for (const slug of article.relatedArticleSlugs) {
      const match = getArticleBySlug(slug);
      if (match && !addedIds.has(match.id)) {
        result.push(match);
        addedIds.add(match.id);
      }
    }
  }

  // 2. Matching tags or subcategory
  if (result.length < limit) {
    const tagMatches = ALL_ARTICLES.filter(a => 
      !addedIds.has(a.id) && 
      (a.subcategory === article.subcategory || a.tags.some(t => article.tags.includes(t)))
    );
    for (const match of tagMatches) {
      if (result.length >= limit) break;
      result.push(match);
      addedIds.add(match.id);
    }
  }

  // 3. Same category fallback
  if (result.length < limit) {
    const catMatches = ALL_ARTICLES.filter(a => !addedIds.has(a.id) && a.category === article.category);
    for (const match of catMatches) {
      if (result.length >= limit) break;
      result.push(match);
      addedIds.add(match.id);
    }
  }

  // 4. Any top featured/trending articles fallback to ensure at least 6-8 recommendations
  if (result.length < limit) {
    const otherMatches = ALL_ARTICLES.filter(a => !addedIds.has(a.id));
    for (const match of otherMatches) {
      if (result.length >= limit) break;
      result.push(match);
      addedIds.add(match.id);
    }
  }

  return result.slice(0, limit);
}

export function getRandomArticle(excludeSlug?: string): Article {
  const pool = excludeSlug 
    ? ALL_ARTICLES.filter(a => a.slug !== excludeSlug)
    : ALL_ARTICLES;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export function searchArticles(query: string, categoryFilter?: string): Article[] {
  const cleanQ = query.trim().toLowerCase();
  return ALL_ARTICLES.filter(article => {
    if (categoryFilter && categoryFilter !== 'all' && article.category !== categoryFilter) {
      return false;
    }
    if (!cleanQ) return true;
    
    return (
      article.title.toLowerCase().includes(cleanQ) ||
      (article.originalName && article.originalName.toLowerCase().includes(cleanQ)) ||
      article.description.toLowerCase().includes(cleanQ) ||
      article.subcategory.toLowerCase().includes(cleanQ) ||
      article.location.toLowerCase().includes(cleanQ) ||
      article.tags.some(t => t.toLowerCase().includes(cleanQ))
    );
  });
}
