import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Search, 
  Shuffle, 
  Globe, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useArticles } from '../../context/ArticleContext';
import { CATEGORIES } from '../../data/categories';
import { SupportedLanguage } from '../../types';
import { localizeCategory } from '../../utils/localization';

interface HeaderProps {
  onNavigate: (view: string, payload?: any) => void;
  activeView: string;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  activeView,
  onOpenSearch
}) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { articles } = useArticles();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleRandomArticle = () => {
    if (articles.length === 0) return;
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArt = articles[randomIndex];
    onNavigate('article', randomArt.slug);
    setMobileMenuOpen(false);
  };

  const languages: { code: SupportedLanguage; label: string; flag: string }[] = [
    { code: 'AZ', label: 'Azərbaycanca', flag: '🇦🇿' },
    { code: 'TR', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'RU', label: 'Русский', flag: '🇷🇺' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#151518]/95 backdrop-blur-xs border-b border-[#e2e8f0] dark:border-[#27272a] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* 1. DARKPEDIA Brand */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#8B0000]/40 dark:border-[#ef4444]/40 shadow-xs group-hover:scale-105 transition-transform bg-[#101012] shrink-0">
            <img 
              src="/logo.jpg" 
              alt="DARKPEDIA Emblem" 
              className="w-full h-full object-cover block"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-[#1a1a1a] dark:text-white">
            DARK<span className="text-[#8B0000] dark:text-[#ef4444]">PEDIA</span>
          </span>
        </div>

        {/* 2. Main Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#52525b] dark:text-[#d4d4d8]">
          {/* Ana səhifə */}
          <button
            onClick={() => onNavigate('home')}
            className={`py-1.5 transition-colors cursor-pointer relative ${
              activeView === 'home'
                ? 'text-[#8B0000] dark:text-[#ef4444] font-semibold'
                : 'hover:text-[#1a1a1a] dark:hover:text-white'
            }`}
          >
            <span>{t.navHome}</span>
            {activeView === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B0000] dark:bg-[#ef4444] rounded-full" />
            )}
          </button>

          {/* Kateqoriyalar Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              onBlur={() => setTimeout(() => setCategoryDropdownOpen(false), 200)}
              className={`py-1.5 transition-colors flex items-center gap-1 cursor-pointer relative ${
                activeView === 'category'
                  ? 'text-[#8B0000] dark:text-[#ef4444] font-semibold'
                  : 'hover:text-[#1a1a1a] dark:hover:text-white'
              }`}
            >
              <span>{t.navCategories}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              {activeView === 'category' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B0000] dark:bg-[#ef4444] rounded-full" />
              )}
            </button>

            {categoryDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] rounded-lg shadow-xl py-1.5 z-50 animate-fadeIn">
                <button
                  onClick={() => {
                    onNavigate('category', 'all');
                    setCategoryDropdownOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#8B0000] dark:text-[#ef4444] hover:bg-[#f8fafc] dark:hover:bg-[#27272a] border-b border-[#e2e8f0] dark:border-[#27272a] flex items-center justify-between"
                >
                  <span>{t.allCategories}</span>
                  <span className="font-mono text-[11px] bg-[#8B0000]/10 px-1.5 py-0.5 rounded text-[#8B0000] dark:text-[#ef4444]">
                    {articles.length}
                  </span>
                </button>
                <div className="max-h-64 overflow-y-auto py-1">
                  {CATEGORIES.map((cat) => {
                    const locCat = localizeCategory(cat.id, language);
                    const count = articles.filter(a => a.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onNavigate('category', cat.id);
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between text-[#1a1a1a] dark:text-[#e4e4e7] hover:bg-[#f8fafc] dark:hover:bg-[#27272a] hover:text-[#8B0000] dark:hover:text-[#ef4444] transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span>{cat.icon}</span>
                          <span className="font-medium">{locCat.name}</span>
                        </span>
                        <span className="text-[11px] text-[#71717a] font-mono">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Təsadüfi məqalə (Random Article) */}
          <button
            onClick={handleRandomArticle}
            className="py-1.5 hover:text-[#8B0000] dark:hover:text-[#ef4444] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
            <span>{t.navRandom}</span>
          </button>
        </nav>

        {/* 3. Search & Header Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Axtarış button/trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#e2e8f0] dark:border-[#27272a] bg-[#f8fafc] dark:bg-[#18181b] text-xs text-[#52525b] dark:text-[#a1a1aa] hover:border-[#8B0000] dark:hover:border-[#ef4444] hover:text-[#1a1a1a] dark:hover:text-white transition-colors cursor-pointer shadow-2xs"
          >
            <Search className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444] shrink-0" />
            <span className="hidden sm:inline">{t.searchBtn}...</span>
            <kbd className="hidden md:inline-block px-1 py-0.2 bg-white dark:bg-[#27272a] text-[10px] font-mono rounded border border-[#d4d4d8] dark:border-[#3f3f46] text-[#71717a]">
              /
            </kbd>
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
              className="px-2.5 py-1.5 text-xs text-[#52525b] dark:text-[#a1a1aa] hover:text-[#1a1a1a] dark:hover:text-white border border-[#e2e8f0] dark:border-[#27272a] bg-white dark:bg-[#18181b] rounded flex items-center gap-1 cursor-pointer shadow-2xs transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
              <span className="font-mono font-semibold">{language}</span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] rounded-lg shadow-xl py-1 z-50 animate-fadeIn">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#f8fafc] dark:hover:bg-[#27272a] ${
                      language === l.code ? 'font-bold text-[#8B0000] dark:text-[#ef4444] bg-red-50/40 dark:bg-red-950/20' : 'text-[#1a1a1a] dark:text-[#e4e4e7]'
                    }`}
                  >
                    <span>{l.flag} {l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-[#52525b] dark:text-[#a1a1aa] hover:text-[#1a1a1a] dark:hover:text-white border border-[#e2e8f0] dark:border-[#27272a] bg-white dark:bg-[#18181b] rounded cursor-pointer shadow-2xs transition-colors"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#52525b] dark:text-[#a1a1aa] border border-[#e2e8f0] dark:border-[#27272a] bg-white dark:bg-[#18181b] rounded cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#18181b] border-b border-[#e2e8f0] dark:border-[#27272a] px-4 py-3 space-y-3 animate-fadeIn">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-[#1a1a1a] dark:text-white hover:bg-[#f8fafc] dark:hover:bg-[#27272a] rounded"
            >
              {t.navHome}
            </button>

            <button
              onClick={() => {
                handleRandomArticle();
              }}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-[#1a1a1a] dark:text-white hover:bg-[#f8fafc] dark:hover:bg-[#27272a] rounded flex items-center gap-2"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
              <span>{t.navRandom}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-[#e2e8f0] dark:border-[#27272a] space-y-1.5">
            <div className="text-[11px] font-bold text-[#71717a] uppercase px-3">
              {t.navCategories}
            </div>
            <div className="space-y-0.5 max-h-52 overflow-y-auto">
              <button
                onClick={() => {
                  onNavigate('category', 'all');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-1.5 text-xs text-[#8B0000] dark:text-[#ef4444] font-bold"
              >
                {t.allCategories} ({articles.length})
              </button>
              {CATEGORIES.map((cat) => {
                const locCat = localizeCategory(cat.id, language);
                const count = articles.filter(a => a.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onNavigate('category', cat.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-[#52525b] dark:text-[#d4d4d8] hover:bg-[#f8fafc] dark:hover:bg-[#27272a] rounded flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span>{locCat.name}</span>
                    </span>
                    <span className="text-[11px] text-[#71717a] font-mono">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
