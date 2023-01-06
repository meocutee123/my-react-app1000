import React from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { ThemeProvider } from '@themes/theme-provider';
import { CssBaseline } from '@mui/material';

export default function App() {
  const routeElements = useRoutes(routes);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {routeElements}
        </LocalizationProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
