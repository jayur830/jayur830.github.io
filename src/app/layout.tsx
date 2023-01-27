'use client';
import { ReactNode, useMemo } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from '@/components';
import { Provider, useContext } from '@/contexts/Provider';
import { nest } from '@/utils';

import '../styles/globals.scss';

function RootLayout({ children }: { children: ReactNode }) {
  const isDarkMode = useContext((value) => value.isDarkMode);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
    });
  }, [isDarkMode]);

  return (
    <html>
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default nest(Provider, RootLayout);
