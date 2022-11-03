import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from '../themes';

interface IAppThemeContext {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppThemeContext = createContext({} as IAppThemeContext);

export const useAppThemeContext = () => useContext(AppThemeContext);

interface IAppThemeProvider {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <AppThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};