import { Route, Routes } from 'react-router-dom';
import { Home } from '@features/home';
import { Pokemon } from '@features/pokemon';
import { NotFound } from '@features/404';

import { ThemeProvider } from '@context/theme';
import { Template } from '@context/template';

function App() {
  return (
    <>
      <ThemeProvider>
        <Template>

        </Template>
      </ThemeProvider>f
    </>
  );
}

export default App;
