import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CATEGORIES } from '../../data/categories';
import { localizeCategory } from '../../utils/localization';

interface FooterProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-[#f8fafc] dark:bg-[#151518] border-t border-[#e2e8f0] dark:border-[#27272a] mt-16 text-sm font-sans transition-colors">
      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5 cursor-pointer select-none" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#8B0000]/40 dark:border-[#ef4444]/40 shadow-xs bg-[#101012] shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="DARKPEDIA Emblem" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#1a1a1a] dark:text-white">
                DARK<span className="text-[#8B0000] dark:text-[#ef4444]">PEDIA</span>
              </span>
            </div>
            <p className="text-xs text-[#52525b] dark:text-[#a1a1aa] leading-relaxed font-serif max-w-md">
              {language === 'AZ' && 'Dünyanın ən qaranlıq, sirli, izah olunmamış və tarixi hadisələrinin sənədli və ensiklopedik prinsiplərlə sistemləşdirildiyi müstəqil informasiya arxivi.'}
              {language === 'TR' && 'Dünyanın en karanlık, gizemli, açıklanamayan ve tarihi olaylarının belgesel ve ansiklopedik ilkelerle derlendiği bağımsız bilgi arşivi.'}
              {language === 'EN' && 'An independent encyclopedia documenting the world’s darkest, most mysterious, unexplained, and historical events with scholarly rigor.'}
              {language === 'RU' && 'Независимая энциклопедия, документирующая самые темные, загадочные и необъяснимые исторические события.'}
            </p>
            <p className="font-mono text-[11px] text-[#71717a] pt-2">
              © 2026 DARKPEDIA. {language === 'AZ' ? 'Bütün hüquqlar qorunur.' : language === 'TR' ? 'Tüm hakları saklıdır.' : language === 'RU' ? 'Все права защищены.' : 'All rights reserved.'}
            </p>
          </div>

          {/* Quick Category Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] dark:text-white border-b border-[#e2e8f0] dark:border-[#27272a] pb-1">
              {language === 'AZ' ? 'Bölmələr' : language === 'TR' ? 'Bölümler' : language === 'RU' ? 'Разделы' : 'Categories'}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#52525b] dark:text-[#a1a1aa]">
              {CATEGORIES.slice(0, 5).map(cat => {
                const locCat = localizeCategory(cat.id, language);
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => onNavigate('category', cat.id)}
                      className="hover:text-[#8B0000] dark:hover:text-[#ef4444] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{locCat.icon}</span>
                      <span>{locCat.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* More Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] dark:text-white border-b border-[#e2e8f0] dark:border-[#27272a] pb-1">
              {language === 'AZ' ? 'Digər Bölmələr' : language === 'TR' ? 'Diğer Bölümler' : language === 'RU' ? 'Другие разделы' : 'More Categories'}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#52525b] dark:text-[#a1a1aa]">
              {CATEGORIES.slice(5).map(cat => {
                const locCat = localizeCategory(cat.id, language);
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => onNavigate('category', cat.id)}
                      className="hover:text-[#8B0000] dark:hover:text-[#ef4444] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{locCat.icon}</span>
                      <span>{locCat.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-[#e2e8f0] dark:border-[#27272a] py-4 px-4 text-center text-[11px] text-[#71717a]">
        <p>
          {language === 'AZ' && 'DARKPEDIA məqalələri tarixi arxivlər, sənədləşdirilmiş faktlar və rəsmi araşdırmalar əsasında hazırlanmışdır.'}
          {language === 'TR' && 'DARKPEDIA makaleleri tarihi arşivler, belgelenmiş gerçekler ve resmi araştırmalar temelinde hazırlanmıştır.'}
          {language === 'EN' && 'DARKPEDIA articles are compiled based on historical archives, documented facts, and official research.'}
          {language === 'RU' && 'Статьи DARKPEDIA подготовлены на основе исторических архивов, проверенных фактов и официальных исследований.'}
        </p>
      </div>
    </footer>
  );
};
