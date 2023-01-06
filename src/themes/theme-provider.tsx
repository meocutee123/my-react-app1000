import React, { useState } from 'react';

import { themeCreator } from './base';
import { Theme, ThemeContextType } from '@react-types/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

type PROPS = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<PROPS> = ({ children }) => {
  const [theme, _setTheme] = useState<Theme>('light');
  const appTheme = themeCreator(theme);

  const setTheme = (theme: Theme): void => {
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
