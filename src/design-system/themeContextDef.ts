import { createContext } from 'react';

export type ThemeMode = 'sunshine' | 'moonlight';

export interface ThemeContextType {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  isMoonlight: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
