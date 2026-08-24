import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, Comment, CategoryId } from '../types';
import { ALL_ARTICLES } from '../data/articles';

interface ArticleContextType {
  articles: Article[];
  bookmarks: string[]; // slugs
  history: string[]; // slugs
  comments: Comment[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  recordView: (slug: string) => void;
  addComment: (articleId: string, author: string, text: string) => void;
  likeComment: (commentId: string) => void;
  reportComment: (commentId: string) => void;
  moderateComment: (commentId: string, status: 'approved' | 'rejected') => void;
  createArticle: (newArticle: Omit<Article, 'id' | 'views' | 'trendingScore'>) => void;
  updateArticle: (id: string, updated: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  getArticleBySlug: (slug: string) => Article | undefined;
  getArticlesByCategory: (categoryId: CategoryId) => Article[];
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c-1',
    articleId: 'art-001',
    author: 'Elşən Məmmədov (Arxeoloq)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    date: '2 saat əvvəl',
    text: 'Dyatlov hadisəsində EPFL-in 2021-ci il qar plitəsi modeli ən məntiqli fizikadır. Lakin bəzi alpinistlərin paltarlarındakı radiasiya hələ də qaranlıq qalır.',
    likes: 18,
    status: 'approved'
  },
  {
    id: 'c-2',
    articleId: 'art-001',
    author: 'Samirə Kərimli',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    date: 'Dünən',
    text: 'Məqalə çox obyektiv hazırlanıb, xüsusən faktlar və nəzəriyyələrin rənglərlə fərqləndirilməsi ensiklopediyanı çox etibarlı edir.',
    likes: 24,
    status: 'approved'
  },
  {
    id: 'c-3',
    articleId: 'art-021',
    author: 'Dr. Rauf Həsənov',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    date: '3 gün əvvəl',
    text: 'Yuxu iflici zamanı amiqdalanın həddindən artıq oyanması doğrudan da qorxu və yad varlıq illüziyasını qaçılmaz edir. Əla izah!',
    likes: 31,
    status: 'approved'
  }
];

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('darkpedia_custom_articles_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const customOnly = parsed.filter((a: Article) => a && a.id && a.id.startsWith('art-custom-'));
          return [...customOnly, ...ALL_ARTICLES];
        }
      }
    } catch {
      // ignore
    }
    return ALL_ARTICLES;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('darkpedia_bookmarks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [history, setHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('darkpedia_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const saved = localStorage.getItem('darkpedia_comments');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return INITIAL_COMMENTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('darkpedia_bookmarks', JSON.stringify(bookmarks));
    } catch {
      // ignore
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('darkpedia_history', JSON.stringify(history));
    } catch {
      // ignore
    }
  }, [history]);

  useEffect(() => {
    try {
      localStorage.setItem('darkpedia_comments', JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [comments]);

  const toggleBookmark = (slug: string) => {
    setBookmarks(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => bookmarks.includes(slug);

  const recordView = (slug: string) => {
    setHistory(prev => {
      const filtered = prev.filter(s => s !== slug);
      return [slug, ...filtered].slice(0, 30);
    });

    setArticles(prev => prev.map(art => {
      if (art.slug === slug) {
        return { ...art, views: art.views + 1 };
      }
      return art;
    }));
  };

  const addComment = (articleId: string, author: string, text: string) => {
    const newComment: Comment = {
      id: 'c-' + Date.now(),
      articleId,
      author: author.trim() || 'Anonim Oxucu',
      date: 'İndicə',
      text: text.trim(),
      likes: 0,
      status: 'approved'
    };
    setComments(prev => [newComment, ...prev]);
  };

  const likeComment = (commentId: string) => {
    setComments(prev => prev.map(c => c.id === commentId ? { ...c, likes: c.likes + 1 } : c));
  };

  const reportComment = (commentId: string) => {
    setComments(prev => prev.map(c => c.id === commentId ? { ...c, reports: (c.reports || 0) + 1 } : c));
  };

  const moderateComment = (commentId: string, status: 'approved' | 'rejected') => {
    setComments(prev => prev.map(c => c.id === commentId ? { ...c, status } : c));
  };

  const saveCustomArticles = (list: Article[]) => {
    try {
      const customOnly = list.filter(a => a.id.startsWith('art-custom-'));
      localStorage.setItem('darkpedia_custom_articles_v2', JSON.stringify(customOnly));
    } catch {
      // ignore
    }
  };

  const createArticle = (newArtData: Omit<Article, 'id' | 'views' | 'trendingScore'>) => {
    const newArticle: Article = {
      ...newArtData,
      id: 'art-custom-' + Date.now(),
      views: 1,
      trendingScore: 50
    };
    const updatedList = [newArticle, ...articles];
    setArticles(updatedList);
    saveCustomArticles(updatedList);
  };

  const updateArticle = (id: string, updated: Partial<Article>) => {
    const updatedList = articles.map(art => art.id === id ? { ...art, ...updated } : art);
    setArticles(updatedList);
    saveCustomArticles(updatedList);
  };

  const deleteArticle = (id: string) => {
    const updatedList = articles.filter(art => art.id !== id);
    setArticles(updatedList);
    saveCustomArticles(updatedList);
  };

  const getArticleBySlug = (slug: string) => {
    return articles.find(a => a.slug === slug);
  };

  const getArticlesByCategory = (categoryId: CategoryId) => {
    return articles.filter(a => a.category === categoryId);
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        bookmarks,
        history,
        comments,
        toggleBookmark,
        isBookmarked,
        recordView,
        addComment,
        likeComment,
        reportComment,
        moderateComment,
        createArticle,
        updateArticle,
        deleteArticle,
        getArticleBySlug,
        getArticlesByCategory
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};
