import { DailyMystery } from '../types';

export const DAILY_MYSTERIES: DailyMystery[] = [
  {
    id: 'mystery-dyatlov',
    date: '2026-08-24',
    title: 'Dyatlov Keçidində Çadırdan Dondurucu Meşəyə Qaçış',
    articleSlug: 'dyatlov-kecidi-hadisesi',
    subtitle: '1959-cu il Ural ekspedisiyasında 9 təcrübəli alpinistin çadırı kəsərək çıxması',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    location: 'Kholat Syakhl, Şimali Ural, Rusiya',
    year: '1959',
    whatHappened: '9 nəfər gənc və təcrübəli xizəkçi -30°C şaxtada çadırlarının kətanını içəridən kəsərək, isti paltarlarını və ayaqqabılarını qoyub 1.5 km məsafədəki dərəyə qaçmış və orada həlak olmuşlar.',
    knownFacts: [
      'Çadırın kəsilməsi daxildən fövqəladə sürətlə baş vermişdir.',
      'Ayaq izləri nizamlı addımlarla meşəyə doğru gedirdi (panik qaçış əlaməti yox idi).',
      'Cəsədlərdən dördündə dəhşətli daxili qabırğa və kəllə sınıqları vardı, lakin xarici dəri tam zədəsiz idi.',
      'Bəzi geyimlərdə radioaktiv beta-şüalanma aşkarlanmışdı.'
    ],
    unresolvedTheories: [
      'Gecə vaxtı baş verən kiçik qar plitəsi uçqunu (EPFL 2021 modeli)',
      'Dağın formasının yaratdığı infrahəsəs külək dalğalarının qəfil dəhşət hissi doğurması',
      'Məxfi sovet raket yanacağı zəhərlənməsi və hərbi sınaq'
    ],
    whatRemainsUnexplained: 'Bəzi xizəkçilərin paltarlarında olan qeyri-adi radiasiya izləri və cəsədlərin dərisindəki qəribə narıncı-qonur rəng dəyişməsi bu günədək tam sənədləşdirilməmişdir.',
    officialVerdict: 'Rəsmi 1959-cu il sovet istintaqı: "Təbii qarşısıalınmaz qüvvə". 2021-ci il elmi konsensusu: Qar plitəsi uçqunu və hipotermiya.',
    sourcesCount: 14
  },
  {
    id: 'mystery-tunguska',
    date: '2026-08-25',
    title: 'Tunguska: Krater Qoymayan 15 Meqatonluq Partlayış',
    articleSlug: 'tunguska-partlayisi',
    subtitle: '1908-ci ildə Sibirdə 80 milyon ağacı yerə sərən, lakin yerə toxunmayan kosmik cism',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    location: 'Podkamennaya Tunguska, Sibir, Rusiya',
    year: '1908',
    whatHappened: 'Səhər saatlarında Sibir tayqası üzərində nəhəng alov şarı peyda oldu və 5-10 km yüksəklikdə partlayaraq 2150 km² ərazidəki meşəni kökündən qopardı. Seysmik dalğalar bütün Yer kürəsini iki dəfə dövr etdi.',
    knownFacts: [
      'Partlayışın episentrindəki ağaclar şaquli dayanıb budaqlarını itirmiş, ətrafa doğru isə kəpənək formasında yıxılmışdır.',
      'Heç bir böyük meteorit parçası və ya zərbə krateri aşkar edilməmişdir.',
      'Londonda 3 gecə boyunca küçələrdə süni işıqsız qəzet oxumaq mümkün olmuşdur.'
    ],
    unresolvedTheories: [
      '50-60 metrlik daş asteroidin hava partlayışı (Airburst)',
      'Encke kometinin buzlu quyruq fraqmenti',
      'Yeraltı metan qazı püskürməsi və alışması'
    ],
    whatRemainsUnexplained: 'Buzlu komet fraqmentinin atmosferdə tam sublimasiyası və ya asteroidin hansı bucaq altında daxil olduğu dəqiq bilinmir.',
    officialVerdict: 'Yüksək atmosferdə baş vermiş kosmik hava partlayışı (Airburst).',
    sourcesCount: 11
  },
  {
    id: 'mystery-voynich',
    date: '2026-08-26',
    title: 'Voynich Kodeksi: 600 İllik Sındırılmayan Şifrə',
    articleSlug: 'voynich-elyazmasi',
    subtitle: 'Dünyanın ən dahi kriptoqraflarının və süni intellektin oxuya bilmədiyi qədim kitab',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    location: 'Yale Universiteti Beinecke Kitabxanası, ABŞ',
    year: '1404–1438',
    whatHappened: '15-ci əsrin əvvəllərində heyvan dərisi üzərində heç bir məlum əlifbaya bənzəməyən 240 səhifəlik kodeks yazılmışdır. Kitabda mövcud olmayan 113 bitki növü və kosmik zodiak çarxları təsvir olunub.',
    knownFacts: [
      'Radiokarbon C14 analizi perqamentin 1404-1438-ci illərə aid olduğunu sübut edib.',
      'Mətndəki sözlərin tezliyi insan dillərinə xas Zipf riyazi qanununa tabedir.',
      'Mətndə bir dənə də olsun düzəliş və ya pozulmuş hərf yoxdur.'
    ],
    unresolvedTheories: [
      'İntibah dövrü tibbi və əlkimyəvi gizli şifrə dili',
      'İtmiş qədim Avropa və ya Qafqaz dialekti',
      'II Rudolf üçün hazırlanmış dahi səviyyəli saxtakarlıq'
    ],
    whatRemainsUnexplained: 'Kitabdakı fantastik bitkilərin hansı floraya aid olduğu və şifrənin açar əlifbası hələ də açılmayıb.',
    officialVerdict: 'Oxunmamış tarixi qorunan əlyazma (MS 408).',
    sourcesCount: 12
  },
  {
    id: 'mystery-mary-celeste',
    date: '2026-08-27',
    title: 'Mary Celeste: Atlantikdə Toxunulmaz Xəyalət Gəmisi',
    articleSlug: 'mary-celeste-xeyalet-gemisi',
    subtitle: 'Süfrədə yeməklər, anbarda spirt və sandıqda pullar qaldığı halda buxarlanan heyət',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    location: 'Azor adaları yaxınlığı, Atlantik Okeanı',
    year: '1872',
    whatHappened: 'Dei Gratia gəmisi 1872-ci ildə Atlantikdə tənha üzən Mary Celeste brikantinini tapdı. Gəmi tam saz vəziyyətdə idi, 6 aylıq yemək və su vardı, lakin kapitan, xanımı, körpəsi və 7 dənizçi izsiz yoxa çıxmışdı.',
    knownFacts: [
      'Gəmidə heç bir döyüş, qarət və ya qan izi yox idi.',
      'Yeganə xilasedici qayıq və naviqasiya xronometri götürülmüşdü.',
      '1701 çəllək xam spirtdən 9-u boş idi və lyuklar açıq idi.'
    ],
    unresolvedTheories: [
      'Spirt buxarlarının partlayış qorxusu yaradaraq heyətin qayığa qaçması',
      'Dəniz burulğanı və qəfil dalğa nəticəsində təxliyə qərarı',
      'Dəniz zəhərlənməsi və kütləvi psixoz'
    ],
    whatRemainsUnexplained: 'Təcrübəli kapitan Bencamin Briqqsin tam saz gəmini niyə tərk etməsi və qayığın hansı koordinatda batdığı məlum deyil.',
    officialVerdict: 'Qayıqla təxliyə zamanı fırtınada dənizdə itki (UCL elmi spirt buxarı modeli).',
    sourcesCount: 8
  },
  {
    id: 'mystery-somerton',
    date: '2026-08-28',
    title: 'Adelaida Sahilindəki Şifrəli "Tamam Shud" Cəsədi',
    articleSlug: 'somerton-adami',
    subtitle: '1948-ci ildə bütün etiketləri kəsilmiş və gizli cibində farsca kağız parçası olan kişi',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    location: 'Somerton Beach, Adelaida, Avstraliya',
    year: '1948',
    whatHappened: 'Səhər saatlarında sahildə qumun üzərində tapılan yaxşı geyimli kişinin şəxsiyyəti 74 il naməlum qaldı. Şalvarının kiçik gizli cibində Ömər Xəyyamın Rübailər kitabından cırılmış "Tamám Shud" yazısı tapıldı.',
    knownFacts: [
      'Bütün geyimlərin fabrikat etiketləri ustalıqla kəsilmişdi.',
      'Cəsədin daxili orqanlarında qanaxma olsa da, heç bir məlum zəhər izi aşkar edilmədi.',
      '2022-ci ildə tük köklərindən DNT analizi ilə onun Karl Uebb adlı elektrik mühəndisi olduğu ehtimal edildi.'
    ],
    unresolvedTheories: [
      'Soyuq Müharibə dövrünün ikili kəşfiyyat agenti',
      'Ailə dramından sonra nadir zəhərlə intihar'
    ],
    whatRemainsUnexplained: 'Kitabın arxasındakı 5 sətirlik kriptoqramın (WRGOABABD...) nəyi ifadə etdiyi və onun həmin gecə Adelaidaya necə və niyə gəldiyi hələ də dəqiq bilinmir.',
    officialVerdict: '2022-ci il DNT genetik identifikasiyası.',
    sourcesCount: 9
  }
];

export function getTodayMystery(): DailyMystery {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = Math.abs(dayOfYear) % DAILY_MYSTERIES.length;
  return DAILY_MYSTERIES[index];
}
