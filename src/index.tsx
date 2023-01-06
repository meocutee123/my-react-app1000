// import './style.scss';
import App from './app';

import ReactDOM from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import { NavigationProvider } from '@context/navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HelmetProvider>
    <NavigationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavigationProvider>
  </HelmetProvider>
);

serviceWorker.unregister();
