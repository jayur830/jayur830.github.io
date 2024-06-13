'use client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { theme } from '@/styles/theme';

const darkModeContext = createContext<boolean>(false);
const onChangeDarkModeContext = createContext<(isDarkMode: boolean) => void>(() => {});

export function useDarkModeContext() {
  return {
    isDarkMode: useContext(darkModeContext),
    onChangeDarkMode: useContext(onChangeDarkModeContext),
  };
}

export function useDarkMode() {
  return useContext(darkModeContext);
}

export function useOnChangeDarkMode() {
  return useContext(onChangeDarkModeContext);
}

export default function MuiProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <darkModeContext.Provider value={isDarkMode}>
      <onChangeDarkModeContext.Provider value={setIsDarkMode}>
        <ThemeProvider theme={createTheme({ ...theme, palette: { mode: isDarkMode ? 'dark' : 'light' } })}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
        </ThemeProvider>
      </onChangeDarkModeContext.Provider>
    </darkModeContext.Provider>
  );
}
