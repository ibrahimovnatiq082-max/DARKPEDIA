import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ArticleProvider } from './context/ArticleContext';
import { AdProvider } from './context/AdContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchBar } from './components/search/SearchBar';
import { HomeView } from './views/HomeView';
import { ArticleView } from './views/ArticleView';
import { CategoryView } from './views/CategoryView';

type ActiveView = 'home' | 'article' | 'category';

interface NavigationState {
  view: ActiveView;
  payload?: any;
}

const parseHashLocation = (): NavigationState => {
  try {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const decoded = decodeURIComponent(rawHash);
    if (decoded.startsWith('article/')) {
      const slug = decoded.replace('article/', '').trim();
      return { view: 'article', payload: slug };
    }
    if (decoded.startsWith('category/')) {
      const cat = decoded.replace('category/', '').trim();
      return { view: 'category', payload: cat };
    }
  } catch {
    // ignore
  }
  return { view: 'home' };
};

const MainApp: React.FC = () => {
  const [navState, setNavState] = useState<NavigationState>(() => parseHashLocation());
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setNavState(parseHashLocation());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string, payload?: any) => {
    const targetView = (view === 'article' || view === 'category') ? view : 'home';
    setNavState({ view: targetView, payload });

    try {
      if (targetView === 'article' && payload) {
        window.location.hash = `#/article/${encodeURIComponent(payload)}`;
      } else if (targetView === 'category' && payload) {
        window.location.hash = `#/category/${encodeURIComponent(payload)}`;
      } else {
        window.location.hash = '#/';
      }
    } catch {
      // ignore
    }

    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // ignore
    }
    setIsSearchOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-white dark:bg-[#121214] text-[#1a1a1a] dark:text-[#e4e4e7] transition-colors duration-150">
      {/* Top Header Navigation */}
      <Header
        onNavigate={handleNavigate}
        activeView={navState.view}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content with ErrorBoundary */}
      <main className="flex-1">
        <ErrorBoundary key={navState.view + (navState.payload || '')}>
          {navState.view === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          )}

          {navState.view === 'article' && (
            <ArticleView
              slug={navState.payload || ''}
              onNavigate={handleNavigate}
            />
          )}

          {navState.view === 'category' && (
            <CategoryView
              categoryId={navState.payload || 'all'}
              onNavigate={handleNavigate}
            />
          )}
        </ErrorBoundary>
      </main>

      {/* Global Search Overlay Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-fadeIn"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SearchBar
              onSelectArticle={(slug) => handleNavigate('article', slug)}
              onSelectCategory={(catId) => handleNavigate('category', catId)}
              onClose={() => setIsSearchOpen(false)}
              isModal={true}
            />
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <ArticleProvider>
            <AdProvider>
              <MainApp />
            </AdProvider>
          </ArticleProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
