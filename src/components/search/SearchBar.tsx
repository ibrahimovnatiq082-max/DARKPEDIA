import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useArticles } from '../../context/ArticleContext';
import { useLanguage } from '../../context/LanguageContext';
import { CATEGORIES } from '../../data/categories';
import { localizeArticle, localizeCategory } from '../../utils/localization';

interface SearchBarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectCategory?: (categoryId: string) => void;
  isModal?: boolean;
  autoFocus?: boolean;
}

const POPULAR_SEARCHES = [
  'Dyatlov keçidi',
  'Yuxu iflici',
  'Zodyak qatili',
  'Voynich əlyazması',
  'Bermuda üçbucağı',
  'MH370',
  'Mariana çökəkliyi',
  'Qara dəliklər',
  'Cecil Hotel',
  'Tunquska hadisəsi',
  'Paris katakombaları'
];

export const SearchBar: React.FC<SearchBarProps> = ({
  isOpen = true,
  onClose,
  onSelectArticle,
  isModal = false,
  autoFocus = false
}) => {
  const { articles } = useArticles();
  const { language, t } = useLanguage();
  
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus || isModal) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [autoFocus, isModal]);

  // Escape key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Filter and localize articles
  const filteredArticles = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles
      .map(art => localizeArticle(art, language))
      .filter((art) => {
        if (selectedCategory !== 'all' && art.category !== selectedCategory) {
          return false;
        }
        if (!q) return true;
        return (
          art.title.toLowerCase().includes(q) ||
          (art.originalName && art.originalName.toLowerCase().includes(q)) ||
          art.description.toLowerCase().includes(q) ||
          art.subcategory.toLowerCase().includes(q) ||
          art.location.toLowerCase().includes(q) ||
          art.tags.some(tg => tg.toLowerCase().includes(q))
        );
      })
      .slice(0, 8);
  }, [query, selectedCategory, articles, language]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredArticles.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredArticles.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredArticles.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < filteredArticles.length) {
        onSelectArticle(filteredArticles[selectedIndex].slug);
        if (onClose) onClose();
      } else if (filteredArticles.length > 0) {
        onSelectArticle(filteredArticles[0].slug);
        if (onClose) onClose();
      }
    }
  };

  const highlightMatch = (text: string, q: string) => {
    if (!q.trim()) return text;
    try {
      const escaped = q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
      return parts.map((part, i) =>
        part.toLowerCase() === q.trim().toLowerCase() ? (
          <span key={i} className="bg-[#8B0000]/20 text-[#8B0000] dark:text-[#ef4444] font-bold">
            {part}
          </span>
        ) : (
          part
        )
      );
    } catch {
      return text;
    }
  };

  const content = (
    <div className={`w-full ${isModal ? 'max-w-3xl mx-auto bg-white dark:bg-[#18181b] rounded-lg border border-[#e2e8f0] dark:border-[#27272a] shadow-xl overflow-hidden' : ''}`}>
      {/* Input Box */}
      <div className="p-3.5 sm:p-4 border-b border-[#e2e8f0] dark:border-[#27272a] bg-white dark:bg-[#18181b] flex items-center gap-3 rounded-t-lg">
        <Search className="w-5 h-5 text-[#71717a] shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder={t.searchPlaceholder}
          className="w-full bg-transparent text-[#1a1a1a] dark:text-white placeholder-[#71717a] text-base sm:text-lg focus:outline-none font-sans"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="p-1 text-[#71717a] hover:text-[#1a1a1a] dark:hover:text-white rounded cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono bg-[#f4f4f5] dark:bg-[#27272a] border border-[#e2e8f0] dark:border-[#3f3f46] rounded text-[#71717a] hover:text-[#1a1a1a] dark:hover:text-white cursor-pointer"
          >
            ESC
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="px-3 sm:px-4 py-2 border-b border-[#e2e8f0] dark:border-[#27272a] bg-[#f8fafc] dark:bg-[#141417] flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1 rounded whitespace-nowrap transition-colors cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-[#8B0000] text-white font-medium'
              : 'bg-white dark:bg-[#18181b] text-[#52525b] dark:text-[#a1a1aa] hover:text-[#1a1a1a] dark:hover:text-white border border-[#e2e8f0] dark:border-[#27272a]'
          }`}
        >
          {t.allCategories}
        </button>
        {CATEGORIES.map((cat) => {
          const locCat = localizeCategory(cat.id, language);
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#8B0000] text-white font-medium'
                  : 'bg-white dark:bg-[#18181b] text-[#52525b] dark:text-[#a1a1aa] hover:text-[#1a1a1a] dark:hover:text-white border border-[#e2e8f0] dark:border-[#27272a]'
              }`}
            >
              <span>{locCat.icon}</span>
              <span>{locCat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Search Results / Suggestions list */}
      <div className="max-h-[55vh] overflow-y-auto divide-y divide-[#f4f4f5] dark:divide-[#27272a]">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((art, idx) => (
            <div
              key={art.id}
              onClick={() => {
                onSelectArticle(art.slug);
                if (onClose) onClose();
              }}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`p-3.5 sm:p-4 cursor-pointer transition-colors flex items-start justify-between gap-4 ${
                selectedIndex === idx
                  ? 'bg-[#8B0000]/5 dark:bg-[#8B0000]/10'
                  : 'hover:bg-[#f8fafc] dark:hover:bg-[#1f1f23]'
              }`}
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-serif font-bold text-[#1a1a1a] dark:text-white">
                    {highlightMatch(art.title, query)}
                  </span>
                  <span className="text-[10px] font-mono text-[#8B0000] dark:text-[#ef4444] uppercase font-semibold">
                    [{art.subcategory}]
                  </span>
                </div>
                <p className="text-xs text-[#52525b] dark:text-[#a1a1aa] line-clamp-1 font-sans">
                  {highlightMatch(art.description, query)}
                </p>
                <div className="flex items-center gap-2.5 text-[11px] text-[#71717a] font-mono pt-0.5">
                  <span>{art.location}</span>
                  <span>•</span>
                  <span>{art.readingTime} {t.readingTimeMin}</span>
                </div>
              </div>
              <ArrowRight className={`w-4 h-4 mt-1 shrink-0 ${selectedIndex === idx ? 'text-[#8B0000] dark:text-[#ef4444] translate-x-1' : 'text-[#a1a1aa]'} transition-transform`} />
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-[#71717a] dark:text-[#a1a1aa]">
            <p className="font-serif text-sm">
              {language === 'AZ' && <span>"<strong>{query}</strong>" sorğusu üzrə heç bir məqalə tapılmadı.</span>}
              {language === 'TR' && <span>"<strong>{query}</strong>" aramasıyla eşleşen makale bulunamadı.</span>}
              {language === 'EN' && <span>No articles found matching "<strong>{query}</strong>".</span>}
              {language === 'RU' && <span>По запросу "<strong>{query}</strong>" ничего не найдено.</span>}
            </p>
          </div>
        )}
      </div>

      {/* Footer / Popular searches footer */}
      {!query && (
        <div className="p-3 sm:p-4 bg-[#f8fafc] dark:bg-[#141417] border-t border-[#e2e8f0] dark:border-[#27272a]">
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#71717a] dark:text-[#a1a1aa] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
            <span>{t.quickSearches}:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  inputRef.current?.focus();
                }}
                className="text-xs px-2.5 py-1 rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] text-[#1a1a1a] dark:text-[#e4e4e7] hover:border-[#8B0000] dark:hover:border-[#ef4444] hover:text-[#8B0000] dark:hover:text-[#ef4444] transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if (!isModal) {
    return content;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs p-4 sm:p-6 md:p-20 flex items-start justify-center overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative z-10 w-full">
        {content}
      </div>
    </div>
  );
};
