import { CategoryId, SupportedLanguage, Article, DarkFact, DailyMystery, RabbitHoleChain } from '../types';
import { CATEGORIES } from '../data/categories';

// ==================== CATEGORIES TRANSLATION ====================
export interface LocalizedCategory {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  subcategories: string[];
}

export const CATEGORY_TRANSLATIONS: Record<SupportedLanguage, Record<CategoryId, { name: string; description: string; subcategories: string[] }>> = {
  AZ: {
    'paranormal': {
      name: 'Paranormal',
      description: 'Ruhlar, poltergeistlər, qeyri-adi görünməyən varlıqlar və izah olunmamış müşahidələr.',
      subcategories: ['Ruhlar', 'Kabuslar', 'Poltergeist hadisələri', 'Görünməyən varlıqlar', 'Paranormal araşdırmalar', 'Qəribə səslər']
    },
    'sirli-hadiseler': {
      name: 'Sirli hadisələr',
      description: 'Tarixin ən böyük açılmamış sirrləri, itkin düşən ekspedisiyalar və naməlum şəxslər.',
      subcategories: ['Açılmamış hadisələr', 'İtkin düşmələr', 'Sirli ölümlər', 'İzah olunmamış hadisələr', 'Naməlum şəxslər', 'Naməlum siqnallar']
    },
    'qorxulu-yerler': {
      name: 'Qorxulu yerlər',
      description: 'Tərk edilmiş xəstəxanalar, ruhlu qəsrlər, lənətlənmiş meşələr və sirli yeraltı şəhərlər.',
      subcategories: ['Tərk edilmiş xəstəxanalar', 'Tərk edilmiş evlər', 'Tərk edilmiş şəhərlər', 'Meşələr', 'Mağaralar', 'Qəsrlər', 'Həbsxanalar']
    },
    'cinayet-hadiseleri': {
      name: 'Cinayət və real hadisələr',
      description: 'Təsdiqlənmiş tarixi məhkəmə işləri, məşhur açılmamış soyuq cinayətlər və sirli işlər.',
      subcategories: ['Məşhur açılmamış cinayətlər', 'Serial cinayət hadisələri', 'İtkin şəxslər', 'Tarixi cinayətlər', 'Sirli cinayətlər']
    },
    'psixologiya': {
      name: 'Psixologiya',
      description: 'Yuxu iflici, nadir nevroloji delüziyalar, kollektiv panika və insan şüurunun qaranlıq qatları.',
      subcategories: ['Yuxu iflici', 'Qorxu', 'Hallüsinasiyalar', 'Déjà vu', 'İnsan beyninin qəribə halları', 'Kollektiv panika']
    },
    'ufo-namelum': {
      name: 'UFO və naməlum hadisələr',
      description: 'Rəsmi hərbi UAP müşahidələri, dərin kosmos radio siqnalları və qeyri-adi astronomik anomalilər.',
      subcategories: ['UFO müşahidələri', 'UAP hadisələri', 'Naməlum siqnallar', 'Kosmosdan gələn qəribə siqnallar', 'Astronomik anomalilər']
    },
    'efsaneler-mifler': {
      name: 'Əfsanələr və miflər',
      description: 'Əsrlər boyu danışılan şəhər əfsanələri, qədim folklor canavarları və qaranlıq regional dastanlar.',
      subcategories: ['Şəhər əfsanələri', 'Folklor', 'Qədim miflər', 'Canavar əfsanələri', 'Ruh hekayələri']
    },
    'kosmosun-qaranliq-terefi': {
      name: 'Kosmosun qaranlıq tərəfi',
      description: 'Qara dəliklər, qaranlıq maddə, kainatın termodinamik ölümü və ölümcül kosmik radiasiya sahələri.',
      subcategories: ['Qara dəliklər', 'Supernovalar', 'Kainatın ölümü', 'Qaranlıq maddə', 'Qaranlıq enerji', 'Kosmik radiasiya']
    },
    'qeribe-canlilar': {
      name: 'Qəribə canlılar',
      description: 'Okeanın 11 km dərinliyindəki canavarlar, zombi parazitlər və qeyri-adi təbii mutasiyalar.',
      subcategories: ['Dərin dəniz canlıları', 'Qeyri-adi heyvanlar', 'Parazitlər', 'Ekstremal canlılar', 'Nadir biologiya hadisələri']
    }
  },
  TR: {
    'paranormal': {
      name: 'Paranormal',
      description: 'Ruhlar, poltergeist olayları, olağandışı görünmeyen varlıklar ve açıklanamayan gözlemler.',
      subcategories: ['Ruhlar', 'Kabuslar', 'Poltergeist olayları', 'Görünmeyen varlıklar', 'Paranormal araştırmalar', 'Garip sesler']
    },
    'sirli-hadiseler': {
      name: 'Gizemli Olaylar',
      description: 'Tarihin en büyük çözülememiş sırları, kaybolan keşif ekipleri ve kimliği belirsiz kişiler.',
      subcategories: ['Çözülmemiş olaylar', 'Kayıplar', 'Gizemli ölümler', 'Açıklanamayan olaylar', 'Bilinmeyen kişiler', 'Bilinmeyen sinyaller']
    },
    'qorxulu-yerler': {
      name: 'Korkutucu Yerler',
      description: 'Terk edilmiş hastaneler, perili kaleler, lanetli ormanlar ve gizemli yeraltı şehirleri.',
      subcategories: ['Terk edilmiş hastaneler', 'Terk edilmiş evler', 'Terk edilmiş şehirler', 'Ormanlar', 'Mağaralar', 'Kaleler', 'Hapishaneler']
    },
    'cinayet-hadiseleri': {
      name: 'Suç ve Gerçek Olaylar',
      description: 'Onaylanmış tarihi mahkeme kayıtları, ünlü çözülememiş soğuk cinayetler ve gizemli vakalar.',
      subcategories: ['Ünlü çözülmemiş cinayetler', 'Seri cinayet olayları', 'Kayıp kişiler', 'Tarihi cinayetler', 'Gizemli vakalar']
    },
    'psixologiya': {
      name: 'Psikoloji',
      description: 'Uyku felci, nadir nörolojik delüzyonlar, toplu panik ve insan bilincinin karanlık katmanları.',
      subcategories: ['Uyku felci', 'Korku', 'Halüsinasyonlar', 'Déjà vu', 'İnsan beyninin garip halleri', 'Toplu histeri']
    },
    'ufo-namelum': {
      name: 'UFO ve Bilinmeyen Olaylar',
      description: 'Resmi askeri UAP gözlemleri, derin uzay radyo sinyalleri ve olağandışı astronomik anomaliler.',
      subcategories: ['UFO gözlemleri', 'UAP olayları', 'Bilinmeyen sinyaller', 'Uzaydan gelen garip sinyaller', 'Astronomik anomaliler']
    },
    'efsaneler-mifler': {
      name: 'Efsaneler ve Mitler',
      description: 'Yüzyıllardır anlatılan şehir efsaneleri, antik folklor canavarları ve karanlık bölgesel destanlar.',
      subcategories: ['Şehir efsaneleri', 'Folklor', 'Antik mitler', 'Canavar efsaneleri', 'Ruh hikayeleri']
    },
    'kosmosun-qaranliq-terefi': {
      name: 'Uzayın Karanlık Yüzü',
      description: 'Kara delikler, karanlık madde, evrenin termodinamik ölümü ve ölümcül kozmik radyasyon alanları.',
      subcategories: ['Kara delikler', 'Süpernovalar', 'Evrenin ölümü', 'Karanlık madde', 'Karanlık enerji', 'Kozmik radyasyon']
    },
    'qeribe-canlilar': {
      name: 'Garip Canlılar',
      description: 'Okyanusun 11 km derinliğindeki canavarlar, zombi parazitler ve olağandışı biyolojik mutasyonlar.',
      subcategories: ['Derin deniz canlıları', 'Sıradışı hayvanlar', 'Parazitler', 'Ekstrem canlılar', 'Nadir biyolojik olaylar']
    }
  },
  EN: {
    'paranormal': {
      name: 'Paranormal',
      description: 'Spirits, poltergeists, anomalous entities, and unexplained documented sightings.',
      subcategories: ['Spirits', 'Nightmares', 'Poltergeist Events', 'Unseen Entities', 'Paranormal Investigations', 'Strange Sounds']
    },
    'sirli-hadiseler': {
      name: 'Mysterious Events',
      description: 'History\'s greatest unsolved enigmas, lost expeditions, and unidentified individuals.',
      subcategories: ['Unsolved Events', 'Disappearances', 'Mysterious Deaths', 'Unexplained Incidents', 'Unknown Persons', 'Unknown Signals']
    },
    'qorxulu-yerler': {
      name: 'Haunted & Terrifying Places',
      description: 'Abandoned asylums, ghost fortresses, cursed forests, and mysterious subterranean cities.',
      subcategories: ['Abandoned Hospitals', 'Ghost Towns', 'Forbidden Forests', 'Deep Caves', 'Ancient Castles', 'Prisons']
    },
    'cinayet-hadiseleri': {
      name: 'True Crime & Cold Cases',
      description: 'Verified judicial case files, legendary unsolved cold crimes, and forensic mysteries.',
      subcategories: ['Unsolved Homicides', 'Serial Killer Chronicles', 'Missing Persons', 'Historical Cases', 'Forensic Enigmas']
    },
    'psixologiya': {
      name: 'Dark Psychology',
      description: 'Sleep paralysis, rare neurological delusions, mass hysteria, and the dark recesses of human consciousness.',
      subcategories: ['Sleep Paralysis', 'Fear & Phobias', 'Hallucinations', 'Déjà vu', 'Anomalous Brain States', 'Mass Hysteria']
    },
    'ufo-namelum': {
      name: 'UFO & Unknown Phenomena',
      description: 'Official military UAP encounters, deep-space radio bursts, and anomalous astronomical events.',
      subcategories: ['UFO Sightings', 'UAP Incidents', 'Unknown Signals', 'Cosmic Transmissions', 'Astronomical Anomalies']
    },
    'efsaneler-mifler': {
      name: 'Legends & Cryptids',
      description: 'Century-old urban legends, ancient folklore monsters, and regional dark mythologies.',
      subcategories: ['Urban Legends', 'Ancient Folklore', 'Mythical Beasts', 'Cryptid Lore', 'Ghost Legends']
    },
    'kosmosun-qaranliq-terefi': {
      name: 'The Dark Side of Space',
      description: 'Black holes, dark matter, the thermal heat death of the universe, and lethal cosmic radiation.',
      subcategories: ['Black Holes', 'Supernovae', 'Universal Heat Death', 'Dark Matter', 'Dark Energy', 'Cosmic Radiation']
    },
    'qeribe-canlilar': {
      name: 'Bizarre Organisms',
      description: 'Beasts 11 km beneath the ocean abyss, mind-controlling zombie parasites, and rare mutations.',
      subcategories: ['Abyssal Deep Creatures', 'Bizarre Fauna', 'Parasites', 'Extremophiles', 'Anomalous Biology']
    }
  },
  RU: {
    'paranormal': {
      name: 'Паранормальное',
      description: 'Призраки, полтергейсты, аномальные сущности и необъяснимые документальные наблюдения.',
      subcategories: ['Призраки', 'Кошмары', 'Полтергейст', 'Невидимые сущности', 'Паранормальные исследования', 'Странные звуки']
    },
    'sirli-hadiseler': {
      name: 'Загадочные события',
      description: 'Величайшие неразгаданные тайны истории, пропавшие экспедиции и неизвестные личности.',
      subcategories: ['Нераскрытые дела', 'Исчезновения', 'Загадочные смерти', 'Необъяснимые происшествия', 'Неизвестные сигналы']
    },
    'qorxulu-yerler': {
      name: 'Пугающие места',
      description: 'Заброшенные больницы, замки с привидениями, проклятые леса и подземные города.',
      subcategories: ['Заброшенные больницы', 'Города-призраки', 'Таинственные леса', 'Пещеры', 'Замки', 'Тюрьмы']
    },
    'cinayet-hadiseleri': {
      name: 'Преступления и реальные события',
      description: 'Документальные судебные хроники, знаменитые «висяки» и криминалистические тайны.',
      subcategories: ['Нераскрытые убийства', 'Серийные дела', 'Пропавшие без вести', 'Исторические преступления']
    },
    'psixologiya': {
      name: 'Темная психология',
      description: 'Сонный паралич, редкие неврологические иллюзии, массовый психоз и тайны сознания.',
      subcategories: ['Сонный паралич', 'Страх и фобии', 'Галлюцинации', 'Дежавю', 'Аномалии мозга', 'Массовая истерия']
    },
    'ufo-namelum': {
      name: 'НЛО и непознанное',
      description: 'Официальные военные фиксации UAP, радиосигналы из дальнего космоса и аномалии.',
      subcategories: ['Наблюдения НЛО', 'Инциденты UAP', 'Неизвестные сигналы', 'Космические аномалии']
    },
    'efsaneler-mifler': {
      name: 'Легенды и мифы',
      description: 'Городские легенды, древние фольклорные монстры и зловещие народные сказания.',
      subcategories: ['Городские легенды', 'Фольклор', 'Древние мифы', 'Монстры', 'Истории о духах']
    },
    'kosmosun-qaranliq-terefi': {
      name: 'Темная сторона космоса',
      description: 'Черные дыры, темная материя, тепловая смерть Вселенной и космическая радиация.',
      subcategories: ['Черные дыры', 'Сверхновые', 'Гибель Вселенной', 'Темная материя', 'Темная энергия']
    },
    'qeribe-canlilar': {
      name: 'Странные существа',
      description: 'Обитатели глубин на 11 км, зомби-паразиты и невероятные биологические аномалии.',
      subcategories: ['Глубоководные обитатели', 'Необычные животные', 'Паразиты', 'Экстремофилы']
    }
  }
};

// ==================== ARTICLE TRANSLATIONS DICTIONARY ====================
// Map common article slugs to rich translations in TR, EN, RU
const ARTICLE_TRANSLATIONS: Record<string, Partial<Record<SupportedLanguage, {
  title?: string;
  description?: string;
  status?: string;
  location?: string;
  warning?: string;
  sections?: { id: string; title: string; content: string; badgeText?: string }[];
  keyFacts?: { label: string; value: string }[];
  theories?: { name: string; likelihood?: 'Yüksək' | 'Orta' | 'Aşağı' | 'Təkzib edilmiş'; description: string; scientificConsensus?: string }[];
}>>> = {
  'dyatlov-kecidi-hadisesi': {
    TR: {
      title: 'Dyatlov Geçidi Olayı',
      description: '1959 yılında Kuzey Ural Dağları\'nda 9 deneyimli dağcının açıklanamayan ve dehşet verici koşullarda hayatını kaybetmesi.',
      status: 'Tarihi araştırma / Kısmen bilimsel olarak açıklanmış',
      location: 'Kholat Syakhl (Ölüm Dağı), Sverdlovsk Oblastı, SSCB',
      warning: 'Bu makale travmatik yaralanmalar ve dondurucu koşullarda ölüm vakaları hakkında belgesel bilgiler içerir.'
    },
    EN: {
      title: 'Dyatlov Pass Incident',
      description: 'The terrifying and inexplicable demise of 9 experienced ski hikers in the Northern Ural Mountains in February 1959.',
      status: 'Historical investigation / Slab avalanche consensus',
      location: 'Kholat Syakhl (Dead Mountain), Sverdlovsk Oblast, USSR',
      warning: 'This article contains graphic documentary details regarding severe physical trauma and hypothermic deaths.'
    },
    RU: {
      title: 'Трагедия на перевале Дятлова',
      description: 'Гибель группы из 9 опытных лыжников под руководством Игоря Дятлова на Северном Урале в феврале 1959 года.',
      status: 'Историческое расследование / Научный консенсус',
      location: 'Гора Холатчахль, Свердловская область, СССР',
      warning: 'Статья содержит документальные сведения о тяжелых травмах и гибели людей в экстремальных условиях.'
    }
  },
  'tunguska-partlayisi': {
    TR: {
      title: 'Tunguska Patlaması — 1908 Sibirya Felaketi',
      description: '1908 yılında Sibirya üzerinde 80 milyon ağacı yerle bir eden krater bırakmayan 15 megatonluk kozmik hava patlaması.',
      status: 'Doğrulanmış kozmik göktaşı hava patlaması (Airburst)',
      location: 'Podkamennaya Tunguska, Sibirya, Rusya'
    },
    EN: {
      title: 'Tunguska Event — 1908 Siberian Super-Airburst',
      description: 'The 15-megaton cosmic airburst in 1908 that flattened 80 million trees across 2,150 km² without leaving an impact crater.',
      status: 'Confirmed Stony Asteroid Airburst',
      location: 'Podkamennaya Tunguska, Siberia, Russia'
    },
    RU: {
      title: 'Тунгусский метеорит — Катастрофа 1908 года',
      description: 'Мощнейший воздушный взрыв космического тела над сибирской тайгой, поваливший 80 миллионов деревьев на площади 2150 км².',
      status: 'Подтвержденный высотный взрыв астероида',
      location: 'Подкаменная Тунгуска, Сибирь, Россия'
    }
  },
  'mary-celeste-gemisi': {
    TR: {
      title: 'Mary Celeste — Terk Edilmiş Hayalet Gemi',
      description: '1872 yılında Atlantik Okyanusu\'nda sapasağlam yüzen ancak mürettebatı tamamen ortadan kaybolmuş yelkenli gemi.',
      status: 'Çözülememiş denizcilik gizemi',
      location: 'Azor Adaları açıkları, Atlantik Okyanusu'
    },
    EN: {
      title: 'Mary Celeste — The Abandoned Ghost Brigantine',
      description: 'Found seaworthy and under partial sail in the Atlantic Ocean in 1872, with all cargo intact and its entire crew mysteriously gone.',
      status: 'Unsolved Maritime Enigma',
      location: 'Off Azores Islands, Atlantic Ocean'
    },
    RU: {
      title: '«Мария Целеста» — Корабль-призрак',
      description: 'Бригантина, обнаруженная в 1872 году в Атлантике в мореходном состоянии, но без единого члена экипажа на борту.',
      status: 'Неразгаданная морская тайна',
      location: 'Азорские острова, Атлантический океан'
    }
  },
  'voynich-elyazmasi': {
    TR: {
      title: 'Voynich El Yazması — Dünyanın En Gizemli Kitabı',
      description: '15. yüzyıldan kalma, bilinmeyen bir yazı sistemi ve dil ile yazılmış, şifresi 600 yıldır kırılamayan botanik ve astroloji el yazması.',
      status: 'Gerçek 15. yüzyıl vellum parşömeni / Şifrelenmiş metin',
      location: 'Yale Üniversitesi Beinecke Nadir Kitaplar Kütüphanesi'
    },
    EN: {
      title: 'Voynich Manuscript — The Unbreakable 15th-Century Cipher',
      description: 'An illustrated 15th-century codex written in an unknown script and language that has baffled the world\'s best cryptographers for centuries.',
      status: 'Verified Carbon-dated Parchment / Undeciphered Cipher',
      location: 'Beinecke Rare Book & Manuscript Library, Yale University'
    },
    RU: {
      title: 'Рукопись Войнича — Нерасшифрованный манускрипт',
      description: 'Иллюстрированный кодекс XV века, написанный на неизвестном языке неизвестным алфавитом, не поддающийся расшифровке сотни лет.',
      status: 'Подлинный пергамент XV века / Нерасшифрованный шифр',
      location: 'Библиотека редких книг Бейнеке, Йельский университет'
    }
  },
  'bermuda-ucbucagi': {
    TR: {
      title: 'Bermuda Şeytan Üçgeni ve Uçuş 19 Kaybı',
      description: 'Miami, Bermuda ve Porto Riko arasındaki bölgede kaybolan gemiler, uçaklar ve manyetik anomali teorileri.',
      status: 'İstatistiksel okyanus rotası ve tropikal fırtına dinamikleri',
      location: 'Kuzeybatı Atlantik Okyanusu'
    },
    EN: {
      title: 'The Bermuda Triangle & The Mystery of Flight 19',
      description: 'The infamous oceanic expanse between Miami, Bermuda, and Puerto Rico associated with disappearing vessels and vanishing flights.',
      status: 'Statistical Maritime Route / Severe Gulf Stream Weather',
      location: 'Northwestern Atlantic Ocean'
    },
    RU: {
      title: 'Бермудский треугольник и рейс 19',
      description: 'Район в Атлантическом океане между Флоридой, Бермудами и Пуэрто-Рико, с которым связывают загадочные исчезновения судов и самолетов.',
      status: 'Статистически стандартный маршрут / Океанические штормы',
      location: 'Северо-западная Атлантика'
    }
  },
  'mariana-cökekliyi-derin-deniz': {
    TR: {
      title: 'Mariana Çukuru — 11.000 Metrelik Okyanus Uçurumu',
      description: 'Dünya okyanuslarının en derin noktası, 1000 atmosferlik ezici basınç ve güneşsiz karanlıkta yaşayan tuhaf canlılar.',
      status: 'Oşinografik ve biyolojik araştırma alanı',
      location: 'Mariana Adaları açıkları, Pasifik Okyanusu'
    },
    EN: {
      title: 'Mariana Trench — Challenger Deep & Abyssal Organisms',
      description: 'The deepest point on Earth at nearly 11,000 meters beneath the Pacific Ocean, where crushing pressures host alien-like biology.',
      status: 'Documented Oceanographic & Abyssal Zone',
      location: 'Western Pacific Ocean near Mariana Islands'
    },
    RU: {
      title: 'Марианская впадина — 11 000 метров бездны',
      description: 'Глубочайшая точка планеты в Тихом океане с колоссальным давлением более 1000 атмосфер и уникальными формами жизни.',
      status: 'Океанографический объект / Глубоководная зона',
      location: 'Западная часть Тихого океана'
    }
  },
  'zodyak-qatili': {
    TR: {
      title: 'Zodyak Katili ve Çözülen Kriptogramlar',
      description: '1960\'ların sonunda Kaliforniya\'da dehşet saçan, basına ve polise şifreli mektuplar gönderen seri katil vakası.',
      status: 'Kısmen çözülmüş kriptogramlar / Açık soğuk cinayet dosyası',
      location: 'Kuzey Kaliforniya, San Francisco Körfezi, ABD'
    },
    EN: {
      title: 'The Zodiac Killer & The Deciphered Ciphers',
      description: 'The unidentified serial killer who terrorized Northern California in the late 1960s, taunting police with cryptic ciphered letters.',
      status: 'Forensic Cold Case / Z340 Cipher Decrypted in 2020',
      location: 'Northern California, San Francisco Bay Area, USA'
    },
    RU: {
      title: 'Убийца Зодиак и расшифрованные шифровки',
      description: 'Неопознанный серийный убийца, действовавший в Северной Калифорнии в конце 1960-х годов и отправлявший в газеты криптограммы.',
      status: 'Нераскрытое дело / Шифр Z340 расшифрован в 2020 году',
      location: 'Северная Калифорния, район залива Сан-Франциско, США'
    }
  },
  'yuxu-iflici-nevrologiyasi': {
    TR: {
      title: 'Uyku Felci (Karabasan) ve REM Atonisi Nörolojisi',
      description: 'Uyanıklık ile REM uykusu arasındaki geçişte bilincin açılmasına rağmen kasların kilitli kalması ve karabasan halüsinasyonları.',
      status: 'Kanıtlanmış nörolojik durum (REM atoni disosiyasyonu)',
      location: 'Klinik Nöroloji ve Uyku Tıbbı'
    },
    EN: {
      title: 'Sleep Paralysis — Neurology of REM Atonia & Shadow Figures',
      description: 'The phenomenon where conscious awareness wakes up before the brain disables REM motor atonia, often accompanied by hypnagogic visions.',
      status: 'Documented Neurological Parasomnia',
      location: 'Global Clinical Sleep Medicine'
    },
    RU: {
      title: 'Сонный паралич — Неврология атонии фазы REM',
      description: 'Состояние, при котором сознание уже бодрствует, но моторная блокировка мышц еще активна, вызывая чувство удушья и видения.',
      status: 'Документированная неврологическая парасомния',
      location: 'Клиническая медицина сна'
    }
  }
};

// ==================== HELPER TRANSLATORS ====================

export function localizeCategory(catId: CategoryId, lang: SupportedLanguage): LocalizedCategory {
  const mapping = CATEGORY_TRANSLATIONS[lang]?.[catId] || CATEGORY_TRANSLATIONS.AZ[catId];
  const orig = CATEGORIES.find(c => c.id === catId);
  return {
    id: catId,
    name: mapping?.name || catId,
    description: mapping?.description || '',
    icon: orig?.icon || '📁',
    subcategories: mapping?.subcategories || []
  };
}

export function localizeArticle(article: Article, lang: SupportedLanguage): Article {
  if (lang === 'AZ') return article;

  const translation = ARTICLE_TRANSLATIONS[article.slug]?.[lang];
  const catTrans = CATEGORY_TRANSLATIONS[lang]?.[article.category];

  // Base translated article
  const localized: Article = {
    ...article,
    title: translation?.title || article.title,
    description: translation?.description || article.description,
    status: translation?.status || article.status,
    location: translation?.location || article.location,
    contentWarning: translation?.warning || article.contentWarning,
    subcategory: catTrans?.subcategories?.[0] || article.subcategory
  };

  // Localize fact badges and statuses
  if (translation?.sections) {
    localized.sections = translation.sections.map(s => ({
      ...s,
      badge: s.badgeText?.toLowerCase().includes('fact') ? 'fact' : 'theory'
    }));
  }

  return localized;
}

export function localizeFact(fact: DarkFact, lang: SupportedLanguage): DarkFact {
  const catTrans = CATEGORY_TRANSLATIONS[lang]?.[fact.category];
  const artTrans = ARTICLE_TRANSLATIONS[fact.articleSlug]?.[lang];

  return {
    ...fact,
    categoryName: catTrans?.name || fact.categoryName,
    articleTitle: artTrans?.title || fact.articleTitle
  };
}

export function localizeDailyMystery(mystery: DailyMystery, lang: SupportedLanguage): DailyMystery {
  const artTrans = ARTICLE_TRANSLATIONS[mystery.articleSlug]?.[lang];
  if (lang === 'AZ') return mystery;

  if (lang === 'EN') {
    return {
      ...mystery,
      title: artTrans?.title || mystery.title,
      subtitle: mystery.subtitle
    };
  }

  if (lang === 'TR') {
    return {
      ...mystery,
      title: artTrans?.title || mystery.title,
      subtitle: mystery.subtitle
    };
  }

  if (lang === 'RU') {
    return {
      ...mystery,
      title: artTrans?.title || mystery.title,
      subtitle: mystery.subtitle
    };
  }

  return mystery;
}

export function localizeRabbitHole(chain: RabbitHoleChain, lang: SupportedLanguage): RabbitHoleChain {
  if (lang === 'AZ') return chain;

  const localizedSteps = chain.steps.map(step => {
    const artTrans = ARTICLE_TRANSLATIONS[step.articleSlug]?.[lang];
    return {
      ...step,
      title: artTrans?.title || step.title
    };
  });

  return {
    ...chain,
    steps: localizedSteps
  };
}
