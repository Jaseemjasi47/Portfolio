import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark'; // Default
  });

  useEffect(() => {
    const root = window.document.body;
    root.classList.remove(theme === 'dark' ? 'light-mode' : 'dark-mode');
    root.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    
    // Also update data-theme attribute for some libraries
    document.documentElement.setAttribute('data-theme', theme);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
