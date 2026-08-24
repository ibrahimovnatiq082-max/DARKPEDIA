import React, { createContext, useContext, useState } from 'react';
import { SupportedLanguage } from '../types';

interface Translations {
  siteName: string;
  tagline: string;
  subTagline: string;
  navHome: string;
  navCategories: string;
  navRandom: string;
  navMostRead: string;
  navLatest: string;
  navAbout: string;
  navAdmin: string;
  navRabbitHole: string;
  navDailyMystery: string;
  searchPlaceholder: string;
  searchBtn: string;
  quickSearches: string;
  featuredTitle: string;
  readArticle: string;
  darkFactTitle: string;
  readMore: string;
  categoriesTitle: string;
  allCategories: string;
  mostReadTitle: string;
  trendingTitle: string;
  latestArticlesTitle: string;
  randomArticleBtn: string;
  scareMeBtn: string;
  rabbitHoleTitle: string;
  rabbitHoleDesc: string;
  diveDeeper: string;
  dailyMysteryTitle: string;
  comeBackTomorrow: string;
  recommendedTitle: string;
  verifiedFact: string;
  theory: string;
  unverifiedClaim: string;
  contentWarningTitle: string;
  contentWarningDesc: string;
  tableOfContents: string;
  infoBoxTitle: string;
  readingTimeMin: string;
  lastUpdated: string;
  sourcesTitle: string;
  commentsTitle: string;
  leaveComment: string;
  submitComment: string;
  footerAbout: string;
  footerContact: string;
  footerPrivacy: string;
  footerTerms: string;
  footerSources: string;
  footerContentPolicy: string;
  footerDisclaimer: string;
}

const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  AZ: {
    siteName: 'DARKPEDIA',
    tagline: 'Dünyanın ən qaranlıq məlumat ensiklopediyası.',
    subTagline: 'Bilmək istəmədiyin şeylər haqqında hər şey.',
    navHome: 'Ana səhifə',
    navCategories: 'Kateqoriyalar',
    navRandom: 'Təsadüfi məqalə',
    navMostRead: 'Ən çox oxunan',
    navLatest: 'Yeni məqalələr',
    navAbout: 'Haqqımızda',
    navAdmin: 'İdarəetmə',
    navRabbitHole: 'Dovşan Dəliyi',
    navDailyMystery: 'Bugünkü Sirr',
    searchPlaceholder: 'Qorxulu bir şey axtar...',
    searchBtn: 'Axtar',
    quickSearches: 'Sürətli axtarışlar',
    featuredTitle: 'Bu günün seçilmiş məqaləsi',
    readArticle: 'Məqaləni oxu',
    darkFactTitle: 'Günün qaranlıq faktı',
    readMore: 'Ətraflı oxu →',
    categoriesTitle: 'Ensiklopedik Bölmələr',
    allCategories: 'Bütün kateqoriyalar',
    mostReadTitle: 'Ən çox oxunan məqalələr',
    trendingTitle: 'Bu həftə trenddə',
    latestArticlesTitle: 'Son əlavə olunan məqalələr',
    randomArticleBtn: '🎲 TƏSADÜFİ MƏQALƏ',
    scareMeBtn: 'Məni qorxut',
    rabbitHoleTitle: 'Qaranlıq Dovşan Dəliyi',
    rabbitHoleDesc: 'Sirli hadisələrin ən dərin qatlarına doğru addım-addım eniş.',
    diveDeeper: 'Daha dərinə get →',
    dailyMysteryTitle: 'BUGÜNKÜ SİRR',
    comeBackTomorrow: 'Sabah yeni sirr üçün yenidən gəl',
    recommendedTitle: 'Bunlar da maraqlı ola bilər',
    verifiedFact: 'Təsdiqlənmiş fakt',
    theory: 'Nəzəriyyə',
    unverifiedClaim: 'Təsdiqlənməmiş iddia',
    contentWarningTitle: 'Məzmun xəbərdarlığı',
    contentWarningDesc: 'Bu məqalə ölüm, cinayət və ya narahatedici hadisələr haqqında sənədli məlumat ehtiva edir.',
    tableOfContents: 'Mündəricat',
    infoBoxTitle: 'Qısa məlumat',
    readingTimeMin: 'dəqiqə oxuma',
    lastUpdated: 'Son yenilənmə',
    sourcesTitle: 'Mənbələr və Arxivlər',
    commentsTitle: 'Oxucuların müzakirəsi',
    leaveComment: 'Fikrinizi bölüşün...',
    submitComment: 'Şərh yaz',
    footerAbout: 'Haqqımızda',
    footerContact: 'Əlaqə',
    footerPrivacy: 'Məxfilik siyasəti',
    footerTerms: 'İstifadə şərtləri',
    footerSources: 'Mənbələr və Metodologiya',
    footerContentPolicy: 'Məzmun siyasəti',
    footerDisclaimer: 'DARKPEDIA ciddi akademik və sənədli mənbələrə əsaslanan qaranlıq hadisələr ensiklopediyasıdır. Qərəzli şayiələri və dezinformasiyanı fakt kimi təqdim etmir.'
  },
  TR: {
    siteName: 'DARKPEDIA',
    tagline: 'Dünyanın en karanlık bilgi ansiklopedisi.',
    subTagline: 'Bilmek istemediğiniz şeyler hakkında her şey.',
    navHome: 'Ana Sayfa',
    navCategories: 'Kategoriler',
    navRandom: 'Rastgele Makale',
    navMostRead: 'En Çok Okunanlar',
    navLatest: 'Yeni Makaleler',
    navAbout: 'Hakkımızda',
    navAdmin: 'Yönetim',
    navRabbitHole: 'Tavşan Deliği',
    navDailyMystery: 'Günün Gizemi',
    searchPlaceholder: 'Korkutucu bir şey ara...',
    searchBtn: 'Ara',
    quickSearches: 'Hızlı aramalar',
    featuredTitle: 'Günün Seçilmiş Makalesi',
    readArticle: 'Makaleyi Oku',
    darkFactTitle: 'Günün Karanlık Gerçeği',
    readMore: 'Devamını oku →',
    categoriesTitle: 'Ansiklopedik Kategoriler',
    allCategories: 'Tüm kategoriler',
    mostReadTitle: 'En Çok Okunan Makaleler',
    trendingTitle: 'Bu Hafta Trendde',
    latestArticlesTitle: 'Son Eklenen Makaleler',
    randomArticleBtn: '🎲 RASTGELE MAKALE',
    scareMeBtn: 'Beni Korkut',
    rabbitHoleTitle: 'Karanlık Tavşan Deliği',
    rabbitHoleDesc: 'Gizemlerin en derin katmanlarına doğru adım adım iniş.',
    diveDeeper: 'Daha derine in →',
    dailyMysteryTitle: 'GÜNÜN GİZEMİ',
    comeBackTomorrow: 'Yarın yeni gizem için tekrar gel',
    recommendedTitle: 'Bunlar da ilginizi çekebilir',
    verifiedFact: 'Doğrulanmış gerçek',
    theory: 'Teori',
    unverifiedClaim: 'Doğrulanmamış iddia',
    contentWarningTitle: 'İçerik Uyarısı',
    contentWarningDesc: 'Bu makale ölüm, suç veya rahatsız edici olaylar hakkında belgesel bilgi içerir.',
    tableOfContents: 'İçindekiler',
    infoBoxTitle: 'Hızlı Bilgi',
    readingTimeMin: 'dakika okuma',
    lastUpdated: 'Son güncelleme',
    sourcesTitle: 'Kaynaklar ve Arşivler',
    commentsTitle: 'Okuyucu Tartışması',
    leaveComment: 'Fikrinizi paylaşın...',
    submitComment: 'Yorum Yap',
    footerAbout: 'Hakkımızda',
    footerContact: 'İletişim',
    footerPrivacy: 'Gizlilik Politikası',
    footerTerms: 'Kullanım Şartları',
    footerSources: 'Kaynaklar ve Metodoloji',
    footerContentPolicy: 'İçerik Politikası',
    footerDisclaimer: 'DARKPEDIA ciddi akademik ve belgesel kaynaklara dayanan karanlık olaylar ansiklopedisidir.'
  },
  EN: {
    siteName: 'DARKPEDIA',
    tagline: 'The world\'s darkest information encyclopedia.',
    subTagline: 'Everything about the things you didn\'t want to know.',
    navHome: 'Home',
    navCategories: 'Categories',
    navRandom: 'Random Article',
    navMostRead: 'Most Read',
    navLatest: 'Latest Articles',
    navAbout: 'About',
    navAdmin: 'Admin Panel',
    navRabbitHole: 'Rabbit Hole',
    navDailyMystery: 'Daily Mystery',
    searchPlaceholder: 'Search something terrifying...',
    searchBtn: 'Search',
    quickSearches: 'Quick searches',
    featuredTitle: 'Featured Article of the Day',
    readArticle: 'Read Article',
    darkFactTitle: 'Dark Fact of the Day',
    readMore: 'Read more →',
    categoriesTitle: 'Encyclopedia Categories',
    allCategories: 'All categories',
    mostReadTitle: 'Most Read Articles',
    trendingTitle: 'Trending This Week',
    latestArticlesTitle: 'Latest Published Articles',
    randomArticleBtn: '🎲 RANDOM ARTICLE',
    scareMeBtn: 'Scare Me',
    rabbitHoleTitle: 'Dark Rabbit Hole',
    rabbitHoleDesc: 'A deep plunge into interconnected layers of reality and mystery.',
    diveDeeper: 'Go Deeper →',
    dailyMysteryTitle: 'DAILY MYSTERY',
    comeBackTomorrow: 'Come back tomorrow for the next mystery',
    recommendedTitle: 'You might also find interesting',
    verifiedFact: 'Verified Fact',
    theory: 'Theory',
    unverifiedClaim: 'Unverified Claim',
    contentWarningTitle: 'Content Warning',
    contentWarningDesc: 'This article contains documentary details about death, crime, or disturbing historical events.',
    tableOfContents: 'Contents',
    infoBoxTitle: 'Quick Summary',
    readingTimeMin: 'min read',
    lastUpdated: 'Last updated',
    sourcesTitle: 'Sources and Archives',
    commentsTitle: 'Reader Discussion',
    leaveComment: 'Share your perspective...',
    submitComment: 'Post Comment',
    footerAbout: 'About Us',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerSources: 'Sources & Methodology',
    footerContentPolicy: 'Content Guidelines',
    footerDisclaimer: 'DARKPEDIA is a serious documentary encyclopedia of dark phenomena grounded in verified records and scientific consensus.'
  },
  RU: {
    siteName: 'DARKPEDIA',
    tagline: 'Самая темная энциклопедия информации в мире.',
    subTagline: 'Всё о том, чего вы предпочли бы не знать.',
    navHome: 'Главная',
    navCategories: 'Категории',
    navRandom: 'Случайная статья',
    navMostRead: 'Популярное',
    navLatest: 'Новые статьи',
    navAbout: 'О проекте',
    navAdmin: 'Панель управления',
    navRabbitHole: 'Кроличья нора',
    navDailyMystery: 'Тайна дня',
    searchPlaceholder: 'Искать что-то пугающее...',
    searchBtn: 'Поиск',
    quickSearches: 'Быстрый поиск',
    featuredTitle: 'Избранная статья дня',
    readArticle: 'Читать статью',
    darkFactTitle: 'Темный факт дня',
    readMore: 'Подробнее →',
    categoriesTitle: 'Разделы энциклопедии',
    allCategories: 'Все категории',
    mostReadTitle: 'Самые читаемые статьи',
    trendingTitle: 'В тренде на этой неделе',
    latestArticlesTitle: 'Последние публикации',
    randomArticleBtn: '🎲 СЛУЧАЙНАЯ СТАТЬЯ',
    scareMeBtn: 'Напугай меня',
    rabbitHoleTitle: 'Темная Кроличья Нора',
    rabbitHoleDesc: 'Погружение в самые глубокие слои неразгаданных тайн.',
    diveDeeper: 'Погрузиться глубже →',
    dailyMysteryTitle: 'ТАЙНА СЕГОДНЯШНЕГО ДНЯ',
    comeBackTomorrow: 'Возвращайтесь завтра за новой тайной',
    recommendedTitle: 'Смотрите также',
    verifiedFact: 'Подтвержденный факт',
    theory: 'Теория',
    unverifiedClaim: 'Неподтвержденное утверждение',
    contentWarningTitle: 'Предупреждение о содержании',
    contentWarningDesc: 'Эта статья содержит документальные сведения о смертях, преступлениях или тревожных событиях.',
    tableOfContents: 'Содержание',
    infoBoxTitle: 'Краткие сведения',
    readingTimeMin: 'мин. чтения',
    lastUpdated: 'Обновлено',
    sourcesTitle: 'Источники и архивы',
    commentsTitle: 'Обсуждение читателей',
    leaveComment: 'Оставьте ваш комментарий...',
    submitComment: 'Отправить',
    footerAbout: 'О проекте',
    footerContact: 'Контакты',
    footerPrivacy: 'Конфиденциальность',
    footerTerms: 'Условия использования',
    footerSources: 'Источники и методология',
    footerContentPolicy: 'Редакционная политика',
    footerDisclaimer: 'DARKPEDIA — академическая и документальная энциклопедия темных и необъяснимых явлений.'
  }
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('darkpedia_lang') as SupportedLanguage;
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch {
      // ignore
    }
    return 'AZ';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('darkpedia_lang', lang);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: TRANSLATIONS[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
