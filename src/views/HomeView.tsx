import React from 'react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from '../data/categories';
import { SearchBar } from '../components/search/SearchBar';
import { ArticleCard } from '../components/articles/ArticleCard';
import { RealAdBanner } from '../components/common/RealAdBanner';
import { 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Clock, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { localizeCategory, localizeArticle } from '../utils/localization';

interface HomeViewProps {
  onNavigate: (view: string, payload?: any) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const { articles } = useArticles();
  const { language, t } = useLanguage();

  const featuredArticleRaw = articles.find(a => a.isFeatured) || articles[0];
  const featuredArticle = featuredArticleRaw ? localizeArticle(featuredArticleRaw, language) : null;
  const mostReadArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 6);
  const latestArticles = [...articles].slice(0, 6);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10 font-sans">
      {/* 1. DARKPEDIA Official Emblem & Header */}
      <section className="text-center space-y-4 pt-2 flex flex-col items-center">
        {/* Main Emblem / Hero Image */}
        <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-2 bg-radial from-[#8B0000]/25 via-transparent to-transparent blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-[#8B0000]/50 dark:border-[#ef4444]/60 shadow-2xl bg-[#0a0a0c] transition-transform duration-300 group-hover:scale-[1.02]">
            <img 
              src="/logo.jpg" 
              alt="DARKPEDIA — Qaranlıq Bilgilər Ensiklopediyası" 
              className="w-full h-full object-cover select-none block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/10 dark:bg-[#ef4444]/15 border border-[#8B0000]/20 dark:border-[#ef4444]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] dark:bg-[#ef4444] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8B0000] dark:text-[#ef4444] font-semibold">
              {language === 'AZ' && 'Qaranlıq Bilgilər Ensiklopediyası'}
              {language === 'TR' && 'Karanlık Bilgiler Ansiklopedisi'}
              {language === 'EN' && 'Encyclopedia of Dark Phenomena'}
              {language === 'RU' && 'Энциклопедия Темных Знаний'}
            </span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] dark:text-white">
            DARK<span className="text-[#8B0000] dark:text-[#ef4444]">PEDIA</span>
          </h1>

          <p className="font-serif text-sm sm:text-base text-[#52525b] dark:text-[#a1a1aa] mx-auto italic leading-relaxed">
            {t.tagline}
          </p>
        </div>
      </section>

      {/* 2. Search Bar */}
      <section className="max-w-2xl mx-auto">
        <SearchBar
          onSelectArticle={(slug) => onNavigate('article', slug)}
          onSelectCategory={(catId) => onNavigate('category', catId)}
          isModal={false}
        />
      </section>

      {/* 3. Featured Article */}
      {featuredArticle && (
        <section className="space-y-3">
          <div className="flex items-center gap-2 border-b border-[#e2e8f0] dark:border-[#27272a] pb-2">
            <Sparkles className="w-4 h-4 text-[#8B0000] dark:text-[#ef4444]" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] dark:text-white">
              {t.featuredTitle}
            </h2>
          </div>

          <div className="bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] rounded p-5 sm:p-6 shadow-2xs space-y-3.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-[11px] uppercase font-bold text-[#8B0000] dark:text-[#ef4444]">
                {featuredArticle.subcategory}
              </span>
              <span className="text-xs text-[#71717a] font-mono">
                • {featuredArticle.location} • {featuredArticle.date}
              </span>
            </div>

            <h3
              onClick={() => onNavigate('article', featuredArticle.slug)}
              className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1a] dark:text-white hover:text-[#8B0000] dark:hover:text-[#ef4444] cursor-pointer transition-colors leading-snug"
            >
              {featuredArticle.title}
            </h3>

            {featuredArticle.originalName && (
              <p className="text-xs text-[#71717a] font-serif italic">
                {featuredArticle.originalName}
              </p>
            )}

            <p className="text-xs sm:text-sm text-[#3f3f46] dark:text-[#d4d4d8] font-serif leading-relaxed line-clamp-3">
              {featuredArticle.description}
            </p>

            <div className="pt-2.5 flex items-center justify-between border-t border-[#f4f4f5] dark:border-[#27272a]">
              <button
                onClick={() => onNavigate('article', featuredArticle.slug)}
                className="px-3.5 py-1.5 bg-[#8B0000] hover:bg-[#700000] text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.readArticle}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <span className="text-xs text-[#71717a] font-mono">
                {featuredArticle.readingTime} {t.readingTimeMin}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Position 1: Top/Mid Real Ad Banner */}
      <RealAdBanner id="home-ad-mid" />

      {/* 4. Categories */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#e2e8f0] dark:border-[#27272a] pb-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#8B0000] dark:text-[#ef4444]" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] dark:text-white">
              {t.categoriesTitle}
            </h2>
          </div>
          <span className="text-xs text-[#71717a] font-mono">
            {CATEGORIES.length} {language === 'AZ' ? 'bölmə' : language === 'TR' ? 'bölüm' : language === 'RU' ? 'разделов' : 'sections'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CATEGORIES.map((cat) => {
            const locCat = localizeCategory(cat.id, language);
            const count = articles.filter(a => a.category === cat.id).length;
            return (
              <div
                key={cat.id}
                onClick={() => onNavigate('category', cat.id)}
                className="p-3.5 rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] hover:border-[#8B0000] dark:hover:border-[#ef4444] cursor-pointer transition-colors space-y-1.5 group shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f4f4f5] dark:bg-[#27272a] text-[#71717a] dark:text-[#a1a1aa] border border-[#e4e4e7] dark:border-[#3f3f46]">
                    {count} {language === 'AZ' ? 'məqalə' : language === 'TR' ? 'makale' : language === 'RU' ? 'статей' : 'articles'}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-sm font-bold text-[#1a1a1a] dark:text-white group-hover:text-[#8B0000] dark:group-hover:text-[#ef4444] transition-colors">
                    {locCat.name}
                  </h3>
                  <p className="text-xs text-[#52525b] dark:text-[#a1a1aa] line-clamp-2 mt-0.5 leading-relaxed">
                    {locCat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1 border-t border-[#f4f4f5] dark:border-[#27272a]">
                  {locCat.subcategories.slice(0, 3).map((sub, i) => (
                    <span key={i} className="text-[10px] px-1 py-0.2 rounded bg-[#f4f4f5] dark:bg-[#27272a] text-[#71717a] dark:text-[#a1a1aa] font-mono">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Most-Read Articles */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#e2e8f0] dark:border-[#27272a] pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#8B0000] dark:text-[#ef4444]" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] dark:text-white">
              {t.mostReadTitle}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('category', 'all')}
            className="text-xs text-[#8B0000] dark:text-[#ef4444] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>
              {language === 'AZ' && 'Bütün arxiv'}
              {language === 'TR' && 'Tüm arşiv'}
              {language === 'EN' && 'Complete archive'}
              {language === 'RU' && 'Весь архив'}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mostReadArticles.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              onClick={() => onNavigate('article', art.slug)}
            />
          ))}
        </div>
      </section>

      {/* 6. Latest Articles */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#e2e8f0] dark:border-[#27272a] pb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8B0000] dark:text-[#ef4444]" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] dark:text-white">
              {t.latestArticlesTitle}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('category', 'all')}
            className="text-xs text-[#8B0000] dark:text-[#ef4444] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>
              {language === 'AZ' && 'Hamısına bax'}
              {language === 'TR' && 'Tümüne bak'}
              {language === 'EN' && 'View all'}
              {language === 'RU' && 'Смотреть все'}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {latestArticles.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              layout="list"
              onClick={() => onNavigate('article', art.slug)}
            />
          ))}
        </div>
      </section>

      {/* Position 2: Bottom Real Ad Banner */}
      <RealAdBanner id="home-ad-bottom" />
    </div>
  );
};
