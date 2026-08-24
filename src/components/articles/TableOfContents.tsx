import React, { useEffect, useState } from 'react';
import { TableOfContentsItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <nav className="bg-[#F8F8F8] dark:bg-[#1c1c20] border border-[#E0E0E0] dark:border-[#333] p-4 rounded mb-6 font-sans text-xs">
      <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 text-[#8B0000] dark:text-[#ff6b6b]">
        {t.tableOfContents}
      </h4>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-1 text-xs transition-colors truncate ${
                  isActive
                    ? 'text-[#8B0000] dark:text-[#ff8080] font-bold underline underline-offset-2'
                    : 'text-[#333] dark:text-[#CCC] hover:text-[#8B0000] dark:hover:text-[#ff8080] hover:underline underline-offset-2'
                }`}
              >
                <span className="text-[#888] mr-1.5 font-mono">{idx + 1}.</span>
                <span>{item.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

