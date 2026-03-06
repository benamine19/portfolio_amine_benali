'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createLightTheme from '@/app/lib/themes/lightTheme';
import createDarkTheme from '@/app/lib/themes/darkTheme';
import { useTheme } from '@/app/context/ThemeContext';

interface AppThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Application Theme Provider
 * Wraps the app with MUI ThemeProvider using the current theme mode from context
 */
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const { mode } = useTheme();

  // Create theme based on current mode
  const theme = mode === 'light' ? createLightTheme() : createDarkTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default AppThemeProvider;
