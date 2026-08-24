import React, { useState, useMemo } from 'react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from '../components/articles/ArticleCard';
import { RealAdBanner } from '../components/common/RealAdBanner';
import { localizeCategory } from '../utils/localization';
import { 
  Layers, 
  Search,
  ArrowUpDown
} from 'lucide-react';

interface CategoryViewProps {
  categoryId: string;
  onNavigate: (view: string, payload?: any) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ categoryId, onNavigate }) => {
  const { articles } = useArticles();
  const { language, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<string>(categoryId || 'all');
  const [sortBy, setSortBy] = useState<'popular' | 'latest'>('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const localizedCategories = useMemo(() => {
    return CATEGORIES.map(cat => localizeCategory(cat.id, language));
  }, [language]);

  const currentCategoryData = useMemo(() => {
    return localizedCategories.find(c => c.id === activeCategory);
  }, [localizedCategories, activeCategory]);

  const filteredArticles = useMemo(() => {
    return articles.filter(art => {
      // Category filter
      if (activeCategory !== 'all' && art.category !== activeCategory) {
        return false;
      }
      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          art.title.toLowerCase().includes(q) ||
          art.description.toLowerCase().includes(q) ||
          (art.originalName && art.originalName.toLowerCase().includes(q)) ||
          art.subcategory.toLowerCase().includes(q) ||
          art.location.toLowerCase().includes(q) ||
          art.tags.some(tag => tag.toLowerCase().includes(q))
        );
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.views - a.views;
      return 0;
    });
  }, [articles, activeCategory, sortBy, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-sans">
      {/* Category Header */}
      <div className="space-y-4 border-b border-[#e2e8f0] dark:border-[#27272a] pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#8B0000] dark:text-[#ef4444] font-bold">
              <Layers className="w-4 h-4" />
              <span>
                {language === 'AZ' && 'Ensiklopedik Arxiv'}
                {language === 'TR' && 'Ansiklopedik Arşiv'}
                {language === 'EN' && 'Encyclopedic Archive'}
                {language === 'RU' && 'Энциклопедический архив'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1a1a1a] dark:text-white flex items-center gap-3">
              {currentCategoryData ? (
                <>
                  <span>{currentCategoryData.icon}</span>
                  <span>{currentCategoryData.name}</span>
                </>
              ) : (
                <span>{t.allCategories}</span>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-[#52525b] dark:text-[#a1a1aa] font-serif max-w-2xl leading-relaxed">
              {currentCategoryData
                ? currentCategoryData.description
                : language === 'AZ'
                ? 'DARKPEDIA ensiklopediyasının bütün sənədləşdirilmiş hadisələri və arxivləri.'
                : language === 'TR'
                ? 'DARKPEDIA ansiklopedisinin tüm belgelenmiş olayları ve arşivleri.'
                : language === 'RU'
                ? 'Все задокументированные происшествия и архивы энциклопедии DARKPEDIA.'
                : 'All documented events and archives of the DARKPEDIA encyclopedia.'}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#71717a] dark:text-[#a1a1aa] bg-white dark:bg-[#18181b] px-4 py-2 rounded border border-[#e2e8f0] dark:border-[#27272a] self-start md:self-auto">
            <span>
              {language === 'AZ' ? 'Məqalə sayı:' : language === 'TR' ? 'Makale sayısı:' : language === 'RU' ? 'Статей:' : 'Articles:'}
            </span>
            <strong className="text-[#1a1a1a] dark:text-white text-sm">{filteredArticles.length}</strong>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors border cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#8B0000] text-white border-[#8B0000]'
                : 'bg-white dark:bg-[#18181b] text-[#52525b] dark:text-[#a1a1aa] border-[#e2e8f0] dark:border-[#27272a] hover:text-[#1a1a1a] dark:hover:text-white'
            }`}
          >
            {t.allCategories}
          </button>
          {localizedCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#8B0000] text-white border-[#8B0000]'
                  : 'bg-white dark:bg-[#18181b] text-[#52525b] dark:text-[#a1a1aa] border-[#e2e8f0] dark:border-[#27272a] hover:text-[#1a1a1a] dark:hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] text-xs shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#71717a] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={
              language === 'AZ' ? 'Bu kateqoriya daxilində axtar...' :
              language === 'TR' ? 'Bu kategori içinde ara...' :
              language === 'RU' ? 'Искать в этой категории...' :
              'Search in this category...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded bg-[#f8fafc] dark:bg-[#121214] border border-[#e2e8f0] dark:border-[#27272a] text-[#1a1a1a] dark:text-white placeholder-[#71717a] text-xs focus:outline-none focus:border-[#8B0000] dark:focus:border-[#ef4444]"
          />
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#71717a]" />
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="px-2 py-1.5 rounded bg-[#f8fafc] dark:bg-[#121214] border border-[#e2e8f0] dark:border-[#27272a] text-[#1a1a1a] dark:text-white focus:outline-none cursor-pointer text-xs"
          >
            <option value="popular">
              {language === 'AZ' ? 'Ən çox oxunan' : language === 'TR' ? 'En çok okunan' : language === 'RU' ? 'Популярные' : 'Most Read'}
            </option>
            <option value="latest">
              {language === 'AZ' ? 'Ən yeni' : language === 'TR' ? 'En yeni' : language === 'RU' ? 'Новые' : 'Latest'}
            </option>
          </select>
        </div>
      </div>

      {/* Position 5: Category Archive Real Ad Banner */}
      <RealAdBanner id="category-ad-archive" />

      {/* Articles Listing */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              onClick={() => onNavigate('article', art.slug)}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded bg-white dark:bg-[#18181b] border border-dashed border-[#e2e8f0] dark:border-[#27272a] space-y-3">
          <p className="font-serif text-lg text-[#1a1a1a] dark:text-white">
            {language === 'AZ' && 'Seçilmiş axtarış üzrə heç bir məqalə tapılmadı.'}
            {language === 'TR' && 'Seçilen aramayla uygun makale bulunamadı.'}
            {language === 'EN' && 'No articles found matching the search criteria.'}
            {language === 'RU' && 'По выбранным критериям статей не найдено.'}
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#8B0000] text-white text-xs font-semibold rounded cursor-pointer hover:bg-[#700000]"
          >
            {language === 'AZ' ? 'Bütün Filtrləri Sıfırla' : language === 'TR' ? 'Tüm Filtreleri Sıfırla' : language === 'RU' ? 'Сбросить фильтры' : 'Reset Filters'}
          </button>
        </div>
      )}
    </div>
  );
};
