import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const RealtimeLayoutPage2 = Loadable(lazy(() => import('views/realtime-layout2')));
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <RealtimeLayoutPage2 />
    },
    {
      path: '/realtime-dashboard2',
      element: <RealtimeLayoutPage2 />
    }
  ]
};
export default MainRoutes;
