import { NotFound } from '@features/404';
import Contact from '@features/contact';
import { Home } from '@features/home';
import Services from '@features/services';
import Team from '@features/team';
import Where from '@features/where-we-work';
import App from '@layouts/app';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,

        children: [],
      },
      {
        path: '/contact',
        element: <Contact />,

        children: [],
      },
      {
        path: '/team',
        element: <Team />,

        children: [],
      },
      {
        path: '/where-we-work',
        element: <Where />,

        children: [],
      },
    ],
  },
]);
