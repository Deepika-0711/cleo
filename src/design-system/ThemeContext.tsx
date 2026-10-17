import React, { useEffect, useState } from 'react';
import { ThemeContext } from './themeContextDef';
import type { ThemeMode } from './themeContextDef';

const THEME_STORAGE_KEY = 'cleo_theme_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'sunshine' || stored === 'moonlight') {
        return stored;
      }
    }
    return 'sunshine';
  });

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Ignore storage errors in restricted iframe/browser modes
    }
  };

  const toggleThemeMode = () => {
    setThemeMode(themeMode === 'sunshine' ? 'moonlight' : 'sunshine');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', themeMode);
      if (themeMode === 'moonlight') {
        document.documentElement.classList.add('theme-moonlight');
        document.documentElement.classList.remove('theme-sunshine');
      } else {
        document.documentElement.classList.add('theme-sunshine');
        document.documentElement.classList.remove('theme-moonlight');
      }
    }
  }, [themeMode]);

  const isMoonlight = themeMode === 'moonlight';

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode, setThemeMode, isMoonlight }}>
      {children}
    </ThemeContext.Provider>
  );
};
