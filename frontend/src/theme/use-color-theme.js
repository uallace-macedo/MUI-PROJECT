import React from 'react';
import { darkTheme, lightTheme } from './theme';

const useColorTheme = () => {
  const [mode, setMode] = React.useState('light');

  const theme = mode === 'light' ? lightTheme : darkTheme;

  const toggleThemeMode = () =>
    setMode(prev => prev === 'light' ? 'dark' : 'light');

  return {
    mode, toggleThemeMode, theme
  }
}

export default useColorTheme;
