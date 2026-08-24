import React from 'react';
import { Article } from '../../types';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { localizeArticle } from '../../utils/localization';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  layout?: 'grid' | 'list' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article: rawArticle,
  onClick,
  layout = 'grid'
}) => {
  const { language, t } = useLanguage();
  const article = localizeArticle(rawArticle, language);

  if (layout === 'compact') {
    return (
      <div
        onClick={onClick}
        className="group p-3 rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] hover:border-[#8B0000] dark:hover:border-[#ef4444] cursor-pointer transition-colors flex items-center justify-between gap-3 shadow-xs"
      >
        <div className="min-w-0 space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-serif font-bold text-[#1a1a1a] dark:text-white group-hover:text-[#8B0000] dark:group-hover:text-[#ef4444] transition-colors truncate">
              {article.title}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#71717a] font-sans">
            <span className="font-mono text-[#8B0000] dark:text-[#ef4444] font-medium">{article.subcategory}</span>
            <span>•</span>
            <span>{article.readingTime} {t.readingTimeMin}</span>
          </div>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-[#8B0000] dark:group-hover:text-[#ef4444] group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>
    );
  }

  if (layout === 'list') {
    return (
      <article
        onClick={onClick}
        className="group p-5 rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] hover:border-[#8B0000] dark:hover:border-[#ef4444] cursor-pointer transition-colors space-y-2.5 shadow-xs"
      >
        <div className="flex items-center justify-between gap-2 text-xs font-sans text-[#71717a]">
          <span className="font-mono uppercase font-bold text-[#8B0000] dark:text-[#ef4444]">
            {article.subcategory}
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <MapPin className="w-3 h-3 text-[#8B0000] dark:text-[#ef4444]" />
            <span className="truncate">{article.location}</span>
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1a1a1a] dark:text-white group-hover:text-[#8B0000] dark:group-hover:text-[#ef4444] transition-colors leading-snug">
            {article.title}
          </h3>
          {article.originalName && (
            <p className="text-xs text-[#71717a] font-serif italic mt-0.5">
              {article.originalName}
            </p>
          )}
        </div>

        <p className="text-xs sm:text-sm text-[#3f3f46] dark:text-[#d4d4d8] line-clamp-2 leading-relaxed font-serif">
          {article.description}
        </p>

        <div className="flex items-center justify-between text-xs font-mono text-[#71717a] pt-2 border-t border-[#f4f4f5] dark:border-[#27272a]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
            {article.readingTime} {t.readingTimeMin}
          </span>
          <span className="text-[#8B0000] dark:text-[#ef4444] font-semibold text-xs flex items-center gap-1 group-hover:underline">
            {t.readMore}
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </article>
    );
  }

  // Default Grid Layout (Clean Encyclopedic Card)
  return (
    <article
      onClick={onClick}
      className="group flex flex-col justify-between rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] hover:border-[#8B0000] dark:hover:border-[#ef4444] cursor-pointer transition-colors p-5 space-y-3.5 shadow-xs"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs uppercase font-bold text-[#8B0000] dark:text-[#ef4444]">
            {article.subcategory}
          </span>
          <span className="text-[11px] font-mono text-[#71717a]">
            {article.date.split('–')[0]}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold text-[#1a1a1a] dark:text-white group-hover:text-[#8B0000] dark:group-hover:text-[#ef4444] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>
          {article.originalName && (
            <p className="text-xs text-[#71717a] font-serif italic mt-0.5 truncate">
              {article.originalName}
            </p>
          )}
        </div>

        <p className="text-xs sm:text-sm text-[#3f3f46] dark:text-[#d4d4d8] line-clamp-3 leading-relaxed font-serif">
          {article.description}
        </p>

        <div className="flex items-center gap-1.5 text-xs text-[#71717a] font-mono pt-1">
          <MapPin className="w-3 h-3 text-[#8B0000] dark:text-[#ef4444] shrink-0" />
          <span className="truncate">{article.location}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-[#f4f4f5] dark:border-[#27272a] flex items-center justify-between text-xs font-mono text-[#71717a]">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
          {article.readingTime} {t.readingTimeMin}
        </span>
        <span className="text-[#8B0000] dark:text-[#ef4444] font-semibold text-xs flex items-center gap-1 group-hover:underline">
          {t.readMore}
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </article>
  );
};
