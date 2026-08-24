import React from 'react';
import { Article } from '../../types';
import { MapPin, Calendar, Compass, Layers, FileQuestion } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface InfoBoxProps {
  article: Article;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ article }) => {
  const { language } = useLanguage();

  return (
    <aside className="w-full bg-[#f8fafc] dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] rounded p-4 sm:p-5 shadow-xs space-y-4 font-sans text-xs">
      {/* Title / Original Name Header */}
      <div className="border-b border-[#e2e8f0] dark:border-[#27272a] pb-3 text-center space-y-1">
        <h4 className="font-serif text-base font-bold text-[#1a1a1a] dark:text-white leading-tight">
          {article.title}
        </h4>
        {article.originalName && (
          <p className="text-[#71717a] italic font-serif text-xs">
            {article.originalName}
          </p>
        )}
      </div>

      {/* Structured Key Facts Table */}
      <div className="divide-y divide-[#e2e8f0] dark:divide-[#27272a]">
        <div className="py-2 grid grid-cols-2 gap-2">
          <span className="text-[#71717a] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
            {language === 'AZ' ? 'Tarix:' : language === 'TR' ? 'Tarih:' : language === 'RU' ? 'Дата:' : 'Date:'}
          </span>
          <span className="text-[#1a1a1a] dark:text-white font-medium text-right">
            {article.date}
          </span>
        </div>

        <div className="py-2 grid grid-cols-2 gap-2">
          <span className="text-[#71717a] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
            {language === 'AZ' ? 'Məkan:' : language === 'TR' ? 'Konum:' : language === 'RU' ? 'Место:' : 'Location:'}
          </span>
          <span className="text-[#8B0000] dark:text-[#ef4444] font-medium text-right">
            {article.location}
          </span>
        </div>

        {article.coordinates && (
          <div className="py-2 grid grid-cols-2 gap-2">
            <span className="text-[#71717a] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
              {language === 'AZ' ? 'Koordinat:' : language === 'TR' ? 'Koordinat:' : language === 'RU' ? 'Координаты:' : 'Coordinates:'}
            </span>
            <span className="text-[#1a1a1a] dark:text-white font-mono text-[11px] text-right">
              {article.coordinates}
            </span>
          </div>
        )}

        <div className="py-2 grid grid-cols-2 gap-2">
          <span className="text-[#71717a] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
            {language === 'AZ' ? 'Alt kateqoriya:' : language === 'TR' ? 'Alt kategori:' : language === 'RU' ? 'Подкатегория:' : 'Subcategory:'}
          </span>
          <span className="text-[#1a1a1a] dark:text-white font-medium text-right">
            {article.subcategory}
          </span>
        </div>

        {article.theoriesCount && (
          <div className="py-2 grid grid-cols-2 gap-2">
            <span className="text-[#71717a] flex items-center gap-1.5">
              <FileQuestion className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
              {language === 'AZ' ? 'Nəzəriyyələr:' : language === 'TR' ? 'Teoriler:' : language === 'RU' ? 'Теории:' : 'Theories:'}
            </span>
            <span className="text-[#1a1a1a] dark:text-white font-medium text-right">
              {article.theoriesCount}
            </span>
          </div>
        )}

        {/* Custom Article Key Facts */}
        {article.keyFacts && article.keyFacts.map((fact, i) => (
          <div key={i} className="py-2 grid grid-cols-2 gap-2">
            <span className="text-[#71717a] text-[11px]">
              {fact.label}:
            </span>
            <span className="text-[#1a1a1a] dark:text-white font-medium text-right">
              {fact.value}
            </span>
          </div>
        ))}
      </div>

      {/* Official Archive Authority note */}
      <div className="pt-2 text-[10px] text-[#71717a] text-center border-t border-[#e2e8f0] dark:border-[#27272a] font-mono">
        {article.author || 'DARKPEDIA Ensiklopedik Arxivi'}
      </div>
    </aside>
  );
};
