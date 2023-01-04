import * as React from 'react';
import { Theme, ThemeContextType } from '@react-types/theme';

type PROPS = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<PROPS> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('light');
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
