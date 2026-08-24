import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_COMPENDIUM } from '../data/aboutCompendium';
import { ABOUT_EXTENDED_SECTIONS } from '../data/aboutManifestoExtended';
import { 
  ShieldCheck, 
  BookOpen, 
  HelpCircle, 
  AlertTriangle, 
  Mail, 
  Send, 
  Check, 
  Scale, 
  FileText,
  Search,
  ChevronRight,
  Layers,
  Award,
  Compass,
  FileCheck2,
  Lock,
  Eye,
  Info
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeChapterId, setActiveChapterId] = useState<string>('preambula');
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('Düzəliş / Fakt Xətası');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1200);
  };

  const filteredGlossary = ABOUT_EXTENDED_SECTIONS.darkpediaGlossary.filter(item => 
    item.term.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(glossaryQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans animate-fadeIn text-[#202020] dark:text-[#E0E0E0]">
      {/* Header Banner */}
      <header className="text-center space-y-4 border-b border-[#D0D0D0] dark:border-[#333] pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F5] dark:bg-[#1C1C20] border border-[#D0D0D0] dark:border-[#333] text-xs text-[#8B0000] dark:text-[#ff8080] font-mono font-bold">
          <Scale className="w-4 h-4" />
          <span>Metodologiya, Nizamnamə və Tədqiqat Korpusu</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111] dark:text-white tracking-tight">
          DARKPEDIA Ensiklopediyası Haqqında
        </h1>
        <p className="text-sm sm:text-base text-[#666] dark:text-[#aaa] font-serif max-w-3xl mx-auto leading-relaxed italic">
          Bəşəriyyət tarixinin ən qaranlıq, izah olunmamış və narahatedici hadisələrini sənədli, tərəfsiz və elmi şübhəçiliklə toplayan açıq akademik onlayn ensiklopediya.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#777] dark:text-[#888] pt-2">
          <span>Sənəd: DARKPEDIA-NİZ-2026</span>
          <span>•</span>
          <span>Həcm: 10,000+ sözlük elmi kompendium</span>
          <span>•</span>
          <span>Status: Rəsmi Redaksiya Nizamnaməsi</span>
        </div>
      </header>

      {/* Main Grid: Left TOC & Quick Navigation, Right Detailed Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Navigation */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-3 shadow-xs">
            <h3 className="font-serif font-bold text-sm text-[#111] dark:text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8B0000]" />
              <span>Nizamnamə Fəsilləri</span>
            </h3>
            <nav className="space-y-1 text-xs">
              {ABOUT_COMPENDIUM.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setActiveChapterId(ch.id);
                    const el = document.getElementById(ch.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg font-serif transition-colors flex items-center justify-between cursor-pointer ${
                    activeChapterId === ch.id
                      ? 'bg-[#8B0000] text-white font-semibold'
                      : 'hover:bg-[#F5F5F5] dark:hover:bg-[#202024] text-[#555] dark:text-[#aaa]'
                  }`}
                >
                  <span className="truncate">
                    {ch.chapterNumber}. {ch.title}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                </button>
              ))}
              <div className="pt-2 border-t border-[#E5E5E5] dark:border-[#2a2a30]">
                <button
                  onClick={() => {
                    const el = document.getElementById('forensik-protokol');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg font-serif hover:bg-[#F5F5F5] dark:hover:bg-[#202024] text-[#555] dark:text-[#aaa] flex items-center justify-between cursor-pointer"
                >
                  <span>Forensik Protokollar</span>
                  <FileCheck2 className="w-3.5 h-3.5 opacity-70" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('ensiklopedik-luget');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg font-serif hover:bg-[#F5F5F5] dark:hover:bg-[#202024] text-[#555] dark:text-[#aaa] flex items-center justify-between cursor-pointer"
                >
                  <span>Ensiklopedik Qlossari</span>
                  <HelpCircle className="w-3.5 h-3.5 opacity-70" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('etik-statut');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg font-serif hover:bg-[#F5F5F5] dark:hover:bg-[#202024] text-[#555] dark:text-[#aaa] flex items-center justify-between cursor-pointer"
                >
                  <span>Etik Statut Maddələri</span>
                  <Scale className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </nav>
          </div>

          {/* Fact Status Summary Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-3">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#111] dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>3-Pilləli Verifikasiya</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-800/40 text-emerald-300">
                <span className="font-bold block">Təsdiqlənmiş Fakt:</span>
                <span className="text-[11px] opacity-90">Məhkəmə, patologiya və arxiv sənədləri ilə 100% sübut olunmuşlar.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-amber-300">
                <span className="font-bold block">Elmi Nəzəriyyə:</span>
                <span className="text-[11px] opacity-90">Elmi qanunlara söykənən, lakin qəti sübutu çatışmayan hipotezlər.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-800/40 text-rose-300">
                <span className="font-bold block">Təsdiqlənməmiş İddia:</span>
                <span className="text-[11px] opacity-90">Şahid rəvayətləri və ya folklor xarakterli miflər.</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="lg:col-span-8 space-y-12">
          {/* Fəsillər */}
          {ABOUT_COMPENDIUM.map((ch) => (
            <section
              key={ch.id}
              id={ch.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-6 shadow-xs scroll-mt-24"
            >
              <div className="space-y-2 border-b border-[#E5E5E5] dark:border-[#2a2a30] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B0000] dark:text-[#ff8080] font-bold">
                  <span>FƏSİL {ch.chapterNumber}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#111] dark:text-white">
                  {ch.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#777] dark:text-[#aaa] font-serif italic">
                  {ch.subtitle}
                </p>
              </div>

              <div className="font-serif text-sm sm:text-base leading-relaxed text-[#333] dark:text-[#ccc] space-y-4 whitespace-pre-line">
                {ch.content}
              </div>

              {ch.keyPrinciples && ch.keyPrinciples.length > 0 && (
                <div className="p-4 rounded-xl bg-[#F9F9F9] dark:bg-[#121316] border border-[#E5E5E5] dark:border-[#2a2a30] space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B0000] dark:text-[#ff8080]">
                    Əsas Prinsiplər və Meyarlar:
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm font-serif text-[#444] dark:text-[#bbb]">
                    {ch.keyPrinciples.map((p, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              )}

              {ch.subsections && ch.subsections.length > 0 && (
                <div className="space-y-4 pt-2">
                  {ch.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#111] dark:text-white">
                        {sub.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm font-serif text-[#444] dark:text-[#bbb] leading-relaxed">
                        {sub.text}
                      </p>
                      {sub.bulletPoints && (
                        <ul className="list-disc list-inside space-y-1 text-xs font-serif text-[#555] dark:text-[#aaa] pl-2">
                          {sub.bulletPoints.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Epistemologiya İnşası */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-4 shadow-xs">
            <h2 className="text-2xl font-serif font-bold text-[#111] dark:text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#8B0000]" />
              <span>Epistemoloji Əsaslar və Tənqidi Şübhəçilik</span>
            </h2>
            <div className="font-serif text-xs sm:text-sm leading-relaxed text-[#444] dark:text-[#bbb] space-y-3 whitespace-pre-line">
              {ABOUT_EXTENDED_SECTIONS.historicalEpistemologyEssay}
            </div>
          </section>

          {/* Forensik Protokollar */}
          <section id="forensik-protokol" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-6 shadow-xs scroll-mt-24">
            <div className="space-y-1 border-b border-[#E5E5E5] dark:border-[#2a2a30] pb-4">
              <h2 className="text-2xl font-serif font-bold text-[#111] dark:text-white flex items-center gap-2">
                <FileCheck2 className="w-6 h-6 text-[#8B0000]" />
                <span>Məhkəmə-Tibbi və Forensik Tədqiqat Protokolları</span>
              </h2>
              <p className="text-xs text-[#777] dark:text-[#aaa] font-serif">
                DARKPEDIA tərəfindən cinayət və anomaliyaların qiymətləndirilməsində tətbiq edilən 5 mərhələli standart.
              </p>
            </div>

            <div className="space-y-4">
              {ABOUT_EXTENDED_SECTIONS.forensicProtocols.map((proto) => (
                <div key={proto.stepNumber} className="p-4 sm:p-5 rounded-xl bg-[#F9F9F9] dark:bg-[#121316] border border-[#E5E5E5] dark:border-[#2a2a30] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#111] dark:text-white">
                      {proto.stepNumber}. {proto.name}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#202024] border border-[#D0D0D0] dark:border-[#333] text-[#8B0000]">
                      Protokol #{proto.stepNumber}
                    </span>
                  </div>
                  <p className="text-xs font-serif text-[#444] dark:text-[#bbb] leading-relaxed">
                    <strong>Məqsəd:</strong> {proto.objective}
                  </p>
                  <p className="text-xs font-serif text-[#444] dark:text-[#bbb] leading-relaxed">
                    <strong>Metodologiya:</strong> {proto.methodology}
                  </p>
                  <p className="text-[11px] font-serif text-rose-800 dark:text-rose-300 leading-relaxed bg-rose-50 dark:bg-rose-950/20 p-2 rounded border border-rose-200 dark:border-rose-900/40">
                    <strong>Xəta Riski / Tarixi Dərs:</strong> {proto.riskOfError}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ensiklopedik Qlossari */}
          <section id="ensiklopedik-luget" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-6 shadow-xs scroll-mt-24">
            <div className="space-y-3 border-b border-[#E5E5E5] dark:border-[#2a2a30] pb-4">
              <h2 className="text-2xl font-serif font-bold text-[#111] dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#8B0000]" />
                <span>Ensiklopedik Qlossari və Əsas Elmi Terminlər</span>
              </h2>
              <p className="text-xs text-[#777] dark:text-[#aaa] font-serif">
                Məqalələrimizdə tez-tez rast gəlinən epistemoloji, psixoloji və kriminoloji anlayışların tərifləri.
              </p>
              {/* Glossary Search */}
              <div className="relative max-w-md pt-1">
                <Search className="w-4 h-4 text-[#777] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Termin və ya anlayış axtar..."
                  value={glossaryQuery}
                  onChange={(e) => setGlossaryQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#F8F8F8] dark:bg-[#121316] border border-[#D0D0D0] dark:border-[#333] text-xs text-[#111] dark:text-white focus:outline-none focus:border-[#8B0000]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, gIdx) => (
                <div key={gIdx} className="p-4 rounded-xl bg-[#F9F9F9] dark:bg-[#121316] border border-[#E5E5E5] dark:border-[#2a2a30] space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#111] dark:text-white">
                      {item.term}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAEAEA] dark:bg-[#202024] text-[#666] dark:text-[#aaa]">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs font-serif text-[#444] dark:text-[#bbb] leading-relaxed">
                    {item.definition}
                  </p>
                  <p className="text-[11px] font-serif text-[#777] dark:text-[#999] italic border-t border-[#E5E5E5] dark:border-[#25252a] pt-1">
                    Kontekst: {item.scientificContext}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Etik Statut Maddələri */}
          <section id="etik-statut" className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-6 shadow-xs scroll-mt-24">
            <div className="space-y-1 border-b border-[#E5E5E5] dark:border-[#2a2a30] pb-4">
              <h2 className="text-2xl font-serif font-bold text-[#111] dark:text-white flex items-center gap-2">
                <Scale className="w-6 h-6 text-[#8B0000]" />
                <span>DARKPEDIA Redaksiya Etik Statutunun 5 Maddəsi</span>
              </h2>
            </div>

            <div className="space-y-3">
              {ABOUT_EXTENDED_SECTIONS.ethicalStatuteArticles.map((stat, sIdx) => (
                <div key={sIdx} className="p-4 rounded-xl bg-[#F9F9F9] dark:bg-[#121316] border border-[#E5E5E5] dark:border-[#2a2a30] flex flex-col sm:flex-row sm:items-start gap-3">
                  <span className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-[#8B0000] text-white shrink-0 self-start">
                    {stat.num}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#111] dark:text-white">
                      {stat.title}
                    </h4>
                    <p className="text-xs font-serif text-[#444] dark:text-[#bbb] leading-relaxed">
                      {stat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Redaksiya Əlaqə və Düzəliş Bildirişi */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#18181c] border border-[#D0D0D0] dark:border-[#333] space-y-6 shadow-xs">
            <div className="space-y-1 border-b border-[#E5E5E5] dark:border-[#2a2a30] pb-4">
              <h2 className="text-2xl font-serif font-bold text-[#111] dark:text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#8B0000]" />
                <span>Redaksiya ilə Əlaqə və Fakt Düzəlişi Bildir</span>
              </h2>
              <p className="text-xs text-[#777] dark:text-[#aaa] font-serif">
                Arxivlərimizdə qeyri-dəqiqlik aşkar etmisinizsə və ya yeni rəsmi sənəd təqdim etmək istəyirsinizsə, redaksiya heyətimizə yazın.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-center space-y-2">
                <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-serif font-bold text-emerald-300 text-lg">
                  Müraciətiniz Uğurla Qeydə Alındı
                </h4>
                <p className="text-xs text-[#ccc] font-serif max-w-md mx-auto">
                  Arxiv ekspertlərimiz 48 saat ərzində təqdim etdiyiniz sənəd və mənbələri yoxlayacaq və müvafiq düzəlişi məqaləyə daxil edəcəkdir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#111] dark:text-white">Adınız və Soyadınız:</label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Məs: Rəşad Əliyev"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#F8F8F8] dark:bg-[#121316] border border-[#D0D0D0] dark:border-[#333] text-[#111] dark:text-white focus:outline-none focus:border-[#8B0000]"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-[#111] dark:text-white">E-poçt Ünvanınız:</label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#F8F8F8] dark:bg-[#121316] border border-[#D0D0D0] dark:border-[#333] text-[#111] dark:text-white focus:outline-none focus:border-[#8B0000]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#111] dark:text-white">Müraciətin Kateqoriyası:</label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#F8F8F8] dark:bg-[#121316] border border-[#D0D0D0] dark:border-[#333] text-[#111] dark:text-white focus:outline-none focus:border-[#8B0000]"
                  >
                    <option value="Düzəliş / Fakt Xətası">Düzəliş / Fakt Xətası (Məhkəmə və ya Patologiya)</option>
                    <option value="Yeni Məqalə və ya Arxiv Təklifi">Yeni Məqalə və ya Arxiv Təklifi</option>
                    <option value="Mənbə və Biblioqrafiya Əlavəsi">Mənbə və Biblioqrafiya Əlavəsi</option>
                    <option value="Hüquqi və Müəllif Hüquqları Müraciəti">Hüquqi və Müəllif Hüquqları Müraciəti</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#111] dark:text-white">Düzəliş Təsviri və İlkin Mənbə Linki / Sənədi:</label>
                  <textarea
                    rows={5}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Məqalənin adı, dəqiq abzas, aşkar edilmiş faktiki uyğunsuzluq və istinad edilən dövlət arxivi və ya elmi məqalənin adı..."
                    className="w-full px-3.5 py-2 rounded-lg bg-[#F8F8F8] dark:bg-[#121316] border border-[#D0D0D0] dark:border-[#333] text-[#111] dark:text-white resize-none focus:outline-none focus:border-[#8B0000]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#8B0000] hover:bg-[#a00000] text-white font-semibold rounded-xl flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Düzəliş Müraciətini Təqdim Et</span>
                </button>
              </form>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};
