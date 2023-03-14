import '@lib/i18n';
import React from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider } from '@themes/theme-provider';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  const routeElements = useRoutes(routes);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <CssBaseline />
        {routeElements}
      </Provider>
    </ThemeProvider>
  );
}
