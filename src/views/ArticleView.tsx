import React, { useEffect } from 'react';
import { useArticles } from '../context/ArticleContext';
import { useLanguage } from '../context/LanguageContext';
import { InfoBox } from '../components/articles/InfoBox';
import { TableOfContents } from '../components/articles/TableOfContents';
import { ArticleCard } from '../components/articles/ArticleCard';
import { RealAdBanner } from '../components/common/RealAdBanner';
import { getRelatedArticles } from '../data/articles';
import { localizeArticle, localizeCategory } from '../utils/localization';
import { 
  BookOpen, 
  ChevronRight,
  ArrowLeft,
  Users,
  MapPin,
  Calendar,
  Layers,
  Clock
} from 'lucide-react';

interface ArticleViewProps {
  slug: string;
  onNavigate: (view: string, payload?: any) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ slug, onNavigate }) => {
  const { getArticleBySlug, recordView } = useArticles();
  const { language, t } = useLanguage();

  const rawArticle = getArticleBySlug(slug);
  const article = rawArticle ? localizeArticle(rawArticle, language) : null;

  useEffect(() => {
    if (slug) {
      recordView(slug);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [slug]);

  if (!article || !rawArticle) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4 font-sans">
        <h2 className="text-2xl font-serif font-bold text-[#1a1a1a] dark:text-white">
          {language === 'AZ' && 'Məqalə tapılmadı'}
          {language === 'TR' && 'Makale bulunamadı'}
          {language === 'EN' && 'Article not found'}
          {language === 'RU' && 'Статья не найдена'}
        </h2>
        <p className="text-sm text-[#52525b] dark:text-[#a1a1aa]">
          {language === 'AZ' && 'Axtardığınız məqalə arxivi mövcud deyil və ya ünvan dəyişdirilib.'}
          {language === 'TR' && 'Aradığınız makale arşivi mevcut değil veya adresi değiştirilmiş.'}
          {language === 'EN' && 'The requested article archive does not exist or the link was changed.'}
          {language === 'RU' && 'Запрошенный архив статьи не существует или ссылка была изменена.'}
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="px-4 py-2 bg-[#8B0000] text-white rounded text-xs font-semibold cursor-pointer hover:bg-[#700000]"
        >
          {t.navHome}
        </button>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(rawArticle, 6);
  const localizedCategoryName = localizeCategory(rawArticle.category, language).name;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-[#71717a] border-b border-[#e2e8f0] dark:border-[#27272a] pb-3">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#8B0000] dark:hover:text-[#ef4444] flex items-center gap-1 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.navHome}</span>
        </button>
        <ChevronRight className="w-3 h-3 text-[#a1a1aa]" />
        <button
          onClick={() => onNavigate('category', rawArticle.category)}
          className="hover:text-[#8B0000] dark:hover:text-[#ef4444] font-medium transition-colors cursor-pointer"
        >
          {localizedCategoryName}
        </button>
        <ChevronRight className="w-3 h-3 text-[#a1a1aa]" />
        <span className="text-[#1a1a1a] dark:text-white truncate max-w-xs font-medium">
          {article.title}
        </span>
      </nav>

      {/* Main Grid Layout: Left is Main Content, Right is Classical Infobox */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Article Content (2 Cols) */}
        <main className="lg:col-span-2 space-y-6">
          
          {/* 1. Article Title Header */}
          <header className="space-y-3 border-b border-[#e2e8f0] dark:border-[#27272a] pb-4">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-[#8B0000]/10 text-[#8B0000] dark:text-[#ef4444] font-bold border border-[#8B0000]/20">
              {article.subcategory}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] dark:text-white leading-tight">
              {article.title}
            </h1>

            {article.originalName && (
              <p className="text-sm text-[#71717a] font-serif italic">
                {article.originalName}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#71717a] pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
                {article.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#ef4444]" />
                {article.readingTime} {t.readingTimeMin}
              </span>
            </div>
          </header>

          {/* 2. Short Introduction */}
          <div className="p-4 sm:p-5 bg-[#f8fafc] dark:bg-[#18181b] border-l-4 border-l-[#8B0000] dark:border-l-[#ef4444] border-y border-r border-[#e2e8f0] dark:border-[#27272a] rounded-r text-base sm:text-lg text-[#27272a] dark:text-[#e4e4e7] font-serif italic leading-relaxed">
            {article.description}
          </div>

          {/* Mobile Infobox */}
          <div className="lg:hidden">
            <InfoBox article={article} />
          </div>

          {/* 3. Table of Contents */}
          <TableOfContents items={article.tableOfContents} />

          {/* 4. Long Detailed Article */}
          <article className="space-y-8 font-serif text-[#27272a] dark:text-[#d4d4d8] text-base sm:text-lg leading-relaxed">
            {article.sections.map((sec, idx) => (
              <React.Fragment key={sec.id}>
                <section id={sec.id} className="space-y-4 scroll-mt-20 pt-3">
                  <div className="border-b border-[#e2e8f0] dark:border-[#27272a] pb-2 flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1a] dark:text-white flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#8B0000] dark:text-[#ef4444]">
                        {idx + 1}.
                      </span>
                      <span>{sec.title}</span>
                    </h2>
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4">
                    {sec.content.split('\n\n').map((paragraph, pIdx) => {
                      if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('•') || paragraph.startsWith('-')) {
                        return (
                          <div key={pIdx} className="my-3 p-4 rounded bg-[#f8fafc] dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] space-y-2 font-sans text-sm">
                            {paragraph.split('\n').map((line, lIdx) => (
                              <p key={lIdx} className="leading-relaxed pl-2 border-l-2 border-[#8B0000] dark:border-[#ef4444]">
                                {line}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return (
                        <p key={pIdx} className="leading-relaxed text-justify sm:text-left">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Section Table if present */}
                  {sec.table && (
                    <div className="my-4 overflow-x-auto rounded border border-[#e2e8f0] dark:border-[#27272a]">
                      <table className="w-full text-left font-sans text-xs sm:text-sm">
                        <thead className="bg-[#f1f5f9] dark:bg-[#27272a] border-b border-[#e2e8f0] dark:border-[#27272a] text-[#475569] dark:text-[#cbd5e1] font-mono uppercase">
                          <tr>
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 font-semibold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#27272a]">
                          {sec.table.rows.map((r, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#f8fafc] dark:hover:bg-[#18181b]">
                              {r.map((c, cIdx) => (
                                <td key={cIdx} className="p-3 text-[#1e293b] dark:text-[#e2e8f0]">{c}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>

                {/* Position 3: In-Content Real Ad Banner after the 2nd section (or 1st section if only 2) */}
                {((article.sections.length > 2 && idx === 1) || (article.sections.length <= 2 && idx === 0)) && (
                  <RealAdBanner id="article-ad-mid" className="my-8" />
                )}
              </React.Fragment>
            ))}
          </article>

          {/* Timeline Table (If available in data) */}
          {rawArticle.timelineTable && rawArticle.timelineTable.length > 0 && (
            <section id="timeline-table-section" className="space-y-3 pt-6 border-t border-[#e2e8f0] dark:border-[#27272a]">
              <h3 className="text-xl font-serif font-bold text-[#1a1a1a] dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#8B0000] dark:text-[#ef4444]" />
                <span>
                  {language === 'AZ' && 'Xronologiya və Hadisələr Cədvəli'}
                  {language === 'TR' && 'Kronoloji ve Olaylar Tablosu'}
                  {language === 'EN' && 'Chronology and Event Timeline'}
                  {language === 'RU' && 'Хронология и таблица событий'}
                </span>
              </h3>
              <div className="overflow-x-auto rounded border border-[#e2e8f0] dark:border-[#27272a] bg-white dark:bg-[#18181b]">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead className="bg-[#f1f5f9] dark:bg-[#27272a] border-b border-[#e2e8f0] dark:border-[#27272a] text-[#475569] dark:text-[#cbd5e1] font-mono uppercase">
                    <tr>
                      <th className="p-3">{language === 'AZ' ? 'Tarix / Vaxt' : language === 'TR' ? 'Tarih / Zaman' : language === 'RU' ? 'Дата / Время' : 'Date / Time'}</th>
                      <th className="p-3">{language === 'AZ' ? 'Hadisə' : language === 'TR' ? 'Olay' : language === 'RU' ? 'Событие' : 'Event'}</th>
                      <th className="p-3">{language === 'AZ' ? 'Mənbə' : language === 'TR' ? 'Kaynak' : language === 'RU' ? 'Источник' : 'Source'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#27272a]">
                    {rawArticle.timelineTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#f8fafc] dark:hover:bg-[#18181b]">
                        <td className="p-3 font-mono font-semibold text-[#8B0000] dark:text-[#ef4444] whitespace-nowrap align-top">
                          {item.date}
                        </td>
                        <td className="p-3 text-[#1e293b] dark:text-[#e2e8f0] leading-relaxed">
                          {item.event}
                        </td>
                        <td className="p-3 text-xs text-[#64748b] dark:text-[#94a3b8] align-top whitespace-nowrap">
                          {item.source || 'Arxiv'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* People Table */}
          {rawArticle.peopleTable && rawArticle.peopleTable.length > 0 && (
            <section className="space-y-3 pt-6 border-t border-[#e2e8f0] dark:border-[#27272a]">
              <h3 className="text-xl font-serif font-bold text-[#1a1a1a] dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8B0000] dark:text-[#ef4444]" />
                <span>
                  {language === 'AZ' && 'Əsas Şəxslər'}
                  {language === 'TR' && 'Önemli Kişiler'}
                  {language === 'EN' && 'Key Figures'}
                  {language === 'RU' && 'Ключевые фигуры'}
                </span>
              </h3>
              <div className="overflow-x-auto rounded border border-[#e2e8f0] dark:border-[#27272a] bg-white dark:bg-[#18181b]">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead className="bg-[#f1f5f9] dark:bg-[#27272a] border-b border-[#e2e8f0] dark:border-[#27272a] text-[#475569] dark:text-[#cbd5e1] font-mono uppercase">
                    <tr>
                      <th className="p-3">{language === 'AZ' ? 'Ad' : language === 'TR' ? 'İsim' : language === 'RU' ? 'Имя' : 'Name'}</th>
                      <th className="p-3">{language === 'AZ' ? 'Rol və Status' : language === 'TR' ? 'Rol ve Durum' : language === 'RU' ? 'Роль и статус' : 'Role and Status'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#27272a]">
                    {rawArticle.peopleTable.map((p, pIdx) => (
                      <tr key={pIdx} className="hover:bg-[#f8fafc] dark:hover:bg-[#18181b]">
                        <td className="p-3 font-semibold text-[#1e293b] dark:text-white align-top">{p.name}</td>
                        <td className="p-3 text-[#475569] dark:text-[#cbd5e1]">{p.role} {p.fateOrStatus && `— ${p.fateOrStatus}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Position 4: Bottom Article Real Ad Banner */}
          <RealAdBanner id="article-ad-bottom" />

          {/* 5. Sources */}
          <section id="sources" className="space-y-3 pt-6 border-t border-[#e2e8f0] dark:border-[#27272a] font-sans">
            <h3 className="text-xl font-serif font-bold text-[#1a1a1a] dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8B0000] dark:text-[#ef4444]" />
              <span>{t.sourcesTitle}</span>
            </h3>

            <div className="p-4 sm:p-5 rounded bg-white dark:bg-[#18181b] border border-[#e2e8f0] dark:border-[#27272a] space-y-2 text-xs sm:text-sm">
              {article.sources && article.sources.length > 0 ? (
                <ol className="list-decimal list-inside space-y-2 text-[#334155] dark:text-[#cbd5e1]">
                  {article.sources.map((src, sIdx) => (
                    <li key={sIdx} className="leading-relaxed">
                      <span className="font-semibold italic font-serif">"{src.title}"</span>
                      {src.author && <span> — {src.author}</span>}
                      {src.publisher && <span className="text-[#64748b] dark:text-[#94a3b8]"> ({src.publisher}, {src.year})</span>}
                      {src.type && (
                        <span className="ml-2 px-1.5 py-0.5 text-[10px] font-mono uppercase bg-[#f1f5f9] dark:bg-[#27272a] border border-[#e2e8f0] dark:border-[#3f3f46] rounded text-[#64748b] dark:text-[#94a3b8]">
                          {src.type}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-[#64748b] dark:text-[#94a3b8]">
                  {language === 'AZ' && 'Bu məqalə DARKPEDIA Rəsmi Ensiklopediya Arxivlərinə əsaslanır.'}
                  {language === 'TR' && 'Bu makale DARKPEDIA Resmi Ansiklopedi Arşivlerine dayanmaktadır.'}
                  {language === 'EN' && 'This article is based on DARKPEDIA Official Encyclopedia Archives.'}
                  {language === 'RU' && 'Эта статья основана на официальных архивах энциклопедии DARKPEDIA.'}
                </p>
              )}
            </div>
          </section>
        </main>

        {/* 6. Desktop Right-Hand Information Box */}
        <div className="hidden lg:block lg:col-span-1 space-y-6">
          <div className="sticky top-20 space-y-6">
            <InfoBox article={article} />
          </div>
        </div>
      </div>

      {/* 7. Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="pt-8 border-t border-[#e2e8f0] dark:border-[#27272a] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#8B0000] dark:text-[#ef4444]" />
              <span>{language === 'AZ' ? 'Əlaqəli Məqalələr' : language === 'TR' ? 'İlgili Makaleler' : language === 'RU' ? 'Связанные статьи' : 'Related Articles'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArticles.map((relArt) => (
              <ArticleCard
                key={relArt.id}
                article={relArt}
                onClick={() => onNavigate('article', relArt.slug)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
