import { ComponentType, lazy, LazyExoticComponent, Suspense } from 'react';
import Fallback from '@components/ui/fallback';
import {
  Navigate,
  RouteObject,
} from 'react-router-dom';
import Operator from '@layouts/operator';

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

//Status
const NotFound = Loader(lazy(() => import('@features/404')));
const Error = Loader(lazy(() => import('@features/500')));
const Maintaince = Loader(lazy(() => import('@features/maintainece')));
const Comming = Loader(lazy(() => import('@features/comming')));

const routes: RouteObject[] = [
  {
    path: '',
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
