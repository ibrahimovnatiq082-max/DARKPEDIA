import { RabbitHoleChain } from '../types';

export const RABBIT_HOLE_CHAINS: RabbitHoleChain[] = [
  {
    id: 'ocean-mysteries',
    title: 'Okeanların Qaranlıq Dərinlikləri',
    description: 'Tərk edilmiş kabus gəmidən başlayaraq Sakit okeanın ən dərin və qaranlıq akustik sirlərinə doğru səyahət.',
    steps: [
      {
        level: 1,
        articleSlug: 'mary-celeste-gemisi',
        title: 'Mary Celeste — Tərk edilmiş yelkənli gəmi',
        category: 'sirli-hadiseler',
        hookText: '1872-ci ildə Atlantik okeanında 10 nəfərlik heyət nahar süfrəsini və bütün yükləri qoyaraq niyə xilasedici qayığa mindi?',
        quote: '"Gəmi tam saz idi, lakin sükan arxasında və göyərtədə heç kim yox idi."',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Tarixdə itkin düşən digər dənizçilər və qəribə naviqasiya fəlakətləri haqqında öyrənmək üçün...'
      },
      {
        level: 2,
        articleSlug: 'bermuda-ucbucagi',
        title: 'Bermuda Üçbucağı və Uçuş 19 itkisi',
        category: 'sirli-hadiseler',
        hookText: 'Floridadan havaya qalxan 5 bombardmançı təyyarə kompasların pozulması nəticəsində okeanın hansı nöqtəsində batdı?',
        quote: '"Okean heç vaxt görmədiyimiz qədər qəribə görünür, hər iki kompas işləmir..."',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Okeanın dərinliklərinə enərək qədim dəniz əfsanələrinin bioloji reallığını kəşf etmək üçün...'
      },
      {
        level: 3,
        articleSlug: 'neheng-deniz-qulyabanisi',
        title: 'Architeuthis Dux — Krakenin Bioloji Gerçəkliyi',
        category: 'qeribe-canlilar',
        hookText: 'Dənizçilərin gəmiləri batırdığını iddia etdiyi 13 metrlik bədheybət əslində qaranlıq sularda kaşalotlarla necə vuruşur?',
        quote: '"27 santimetrlik nəhəng gözlər zülmət dərinlikdə hər bir hərəkəti izləyir."',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        nextClue: '5000 km uzaqdan eşidilən və illərlə canlı varlıq sanılan dəhşətli səsə enmək üçün...'
      },
      {
        level: 4,
        articleSlug: 'bloop-namelum-ses',
        title: 'Bloop — Sakit Okeanın Dərinliklərindən Gələn Səs',
        category: 'sirli-hadiseler',
        hookText: '1997-ci ildə hidrofonların qeydə aldığı ifrat güclü səs canlı bədheybət idimi, yoxsa buzun seysmik silkələnməsi?',
        quote: '"Səs mavi balinanın səsindən qat-qat güclü idi və minlərlə kilometr yayıldı."',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Yerin ən dərin və qorxunc 11.000 metrlik dib nöqtəsinə çatmaq üçün...'
      },
      {
        level: 5,
        articleSlug: 'mariana-cökekliyi-derin-deniz',
        title: 'Mariana Çökəkliyi — 11.000 Metr Dərinlikdəki Zülmət',
        category: 'qeribe-canlilar',
        hookText: 'Heç vaxt günəş işığı görməyən və 1000 atmosfer təzyiq altında olan Çallencer dərinliyində nə yaşayır?',
        quote: '"Bura kosmos qədər təcrid olunmuş və ölümcül bir dünyadır."',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Təbriklər! Siz Okeanın Qaranlıq Dovşan Dəliyinin ən dib nöqtəsinə çatdınız.'
      }
    ]
  },
  {
    id: 'mind-mysteries',
    title: 'Şüurun Qaranlıq Labirintləri',
    description: 'Yuxu iflicindən başlayaraq insanın özünün öldüyünə inandığı nadir psixiatrik delüziyalara doğru səyahət.',
    steps: [
      {
        level: 1,
        articleSlug: 'yuxu-iflici-nevrologiyasi',
        title: 'Yuxu İflici və Qarabasma',
        category: 'psixologiya',
        hookText: 'Niyə min illərdir insanlar gecə oyanarkən sinələrində qara kölgənin oturduğunu görürlər?',
        quote: '"Gözlərim açıq idi, amma bircə barmağımı belə tərpədə bilmirdim."',
        image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Ailə üzvlərinin robot və ya saxta dublyor olduğuna inanma delüziyasına keçmək üçün...'
      },
      {
        level: 2,
        articleSlug: 'capgras-deluziyasi',
        title: 'Capgras Delüziyası — Saxta İkizlər',
        category: 'psixologiya',
        hookText: 'İnsan niyə öz doğma anasını görüb "o mənim anam deyil, dəqiq kopyasıdır" deyə qışqırır?',
        quote: '"Görünüşü tam eynidir, amma onun içində anamın ruhu yoxdur."',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Şüurun daha dərin pozuntusuna — insanın özünün cəsəd olduğuna inanmasına keçmək üçün...'
      },
      {
        level: 3,
        articleSlug: 'cotard-sindromu-gezen-cesed',
        title: 'Cotard Sindromu — Gəzən Cəsəd Delüziyası',
        category: 'psixologiya',
        hookText: 'Xəstə necə olur ki, öz ürəyinin döyünmədiyini və daxili orqanlarının çürüdüyünü iddia edir?',
        quote: '"Mənə yemək verməyin, ölü adamlar yemək yemir."',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Kollektiv psixozun bütün bir şəhərə necə sirayət etdiyini görmək üçün...'
      },
      {
        level: 4,
        articleSlug: '1518-reqs-taunu-kollektiv-histeriya',
        title: '1518 Rəqs Taunu — Kollektiv Histeriya',
        category: 'psixologiya',
        hookText: '400 insan niyə ayaqları qanayana və ürəkləri dayanana qədər gecə-gündüz fasiləsiz rəqs etdi?',
        quote: '"Şəhər vahimə içində idi, musiqiçilər çaldıqca insanlar yerə yıxılıb can verirdi."',
        image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Parazitlərin beyni necə zəbt edib canlıları manipulyasiya etdiyini öyrənmək üçün...'
      },
      {
        level: 5,
        articleSlug: 'cordyceps-zombi-gobelek',
        title: 'Cordyceps — Zombi Parazit Mikologiyası',
        category: 'qeribe-canlilar',
        hookText: 'Mikroskopik göbələk canlı həşəratın əzələlərini ələ keçirərək onu öz intiharına necə istiqamətləndirir?',
        quote: '"Qarışqa artıq özünə aid deyildi, o yalnız göbələyin spor maşını idi."',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        nextClue: 'Təbriklər! Siz Şüurun Qaranlıq Labirintinin ən son səviyyəsini tamamladınız.'
      }
    ]
  }
];
