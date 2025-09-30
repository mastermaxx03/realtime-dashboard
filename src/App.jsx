import { RouterProvider } from 'react-router-dom';

// routing
import router from 'routes';

// project imports

import ThemeCustomization from 'themes';
import { setupAutoRefresh } from 'utils/idleAndNavigationRefresh';

// auth provider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// offline lock hook (adds blur & disables app when offline)

// toast outside #root so it never blurs
import ToastOutsideRoot from 'ui/ToastOutsideRoot';

// ==============================|| APP ||============================== //

export default function App() {
  useOfflineLock();

  setupAutoRefresh(router);

  return (
    <ThemeCustomization>
      <MachineStatusProvider>
        <NavigationScroll>
          <RouterProvider router={router} />
          <ToastContainer autoClose={2500} />
        </NavigationScroll>

        <ToastOutsideRoot />
      </MachineStatusProvider>
    </ThemeCustomization>
  );
}
