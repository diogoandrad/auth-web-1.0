import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, AppThemeProvider, DrawerProvider } from './contexts';
import { Sidebar } from './layouts/Sidebar';
import { Login } from './layouts/Auth/Login';

const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <Login>
            <DrawerProvider>
              <Sidebar>
                <AppRoutes />
              </Sidebar>
            </DrawerProvider>
          </Login>
        </BrowserRouter>
      </AppThemeProvider>
    </AuthProvider>
  );
};

export default App;