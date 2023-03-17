import { ComponentType, lazy, LazyExoticComponent, Suspense } from 'react';
import Fallback from '@components/ui/fallback';
import {
  Navigate,
  RouteObject,
} from 'react-router-dom';
import Operator from '@layouts/operator';
import Calendar from '@features/calendar';

const appInitializer = async () =>
  new Promise<string>((resolve) =>
    setTimeout(() => {
      console.log(
        '%cApp configurations initiated!',
        'color: green; font-weight: bold;'
      );
      resolve('done');
    }, 1000)
  );

const Loader =
  (Component: LazyExoticComponent<ComponentType<any>>) => (props: any) =>
    (
      <Suspense fallback={<Fallback />}>
        <Component {...props} />
      </Suspense>
    );

//Pages
const Home = Loader(lazy(() => import('@features/home')));
const Profile = Loader(lazy(() => import('@features/profile')));
const Pokemon = Loader(lazy(() => import('@features/pokemon')));
const Editor = Loader(lazy(() => import('@features/editor')));

//Status
const NotFound = Loader(lazy(() => import('@features/404')));
const Error = Loader(lazy(() => import('@features/500')));
const Maintaince = Loader(lazy(() => import('@features/maintenance')));
const Comming = Loader(lazy(() => import('@features/comming')));

const routes: RouteObject[] = [
  {
    element: <Operator />,
    
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Navigate to='/' replace />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'pokemon',
        element: <Pokemon />,
      },
      {
        path: 'error',
        element: <Error/>
      }
    ],
  },
  {
    path: '/editor',
    element: <Editor />
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
