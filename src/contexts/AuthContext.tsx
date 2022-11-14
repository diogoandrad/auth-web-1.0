import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { isExpired } from 'react-jwt';
import { AuthService } from '../services/AuthService';

interface IAuthContext {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export const useAuthContext = () => useContext(AuthContext);

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>();
  const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'x-access-token';

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    if (isExpired(JSON.stringify(accessToken)))
      handleLogout();
    else if (accessToken)
      setAccessToken(accessToken);
    else
      setAccessToken(undefined);
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.login(email, password);
    if (result instanceof Error) {
      return result.message;
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, result.accessToken);
      setAccessToken(result.accessToken);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    setAccessToken(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};