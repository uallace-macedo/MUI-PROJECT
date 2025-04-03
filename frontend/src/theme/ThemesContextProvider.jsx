import React from 'react';

import useColorTheme from './use-color-theme';
import { lightTheme } from './theme.js';
import { CssBaseline, ThemeProvider } from '@mui/material';

const ThemesContext = React.createContext({
  mode: 'light',
  toggleThemeMode: () => {},
  theme: lightTheme
});

const ThemesContextProvider = ({ children }) => {
  const {mode, toggleThemeMode, theme} = useColorTheme();

  const value = React.useMemo(() => ({
    mode, toggleThemeMode, theme
  }), [mode])

  return (
    <ThemesContext.Provider value={value}>
      <ThemeProvider theme={value.theme}>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

const useThemesContext = () => React.useContext(ThemesContext);
export { ThemesContext, ThemesContextProvider, useThemesContext };
