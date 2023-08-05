'use client';

import { PropsWithChildren, useMemo } from 'react';
import { createTheme } from '@mui/material';

import { fonts } from '@/assets/fonts';
import { Header } from '@/components';
import { MuiProvider } from '@/contexts';
import { useCommonState } from '@/store/common';

import '@/styles/globals.scss';

export default function RootLayout({ children }: PropsWithChildren) {
  const isDarkMode = useCommonState((state) => state.isDarkMode);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: fonts.style.fontFamily,
      },
    });
  }, [isDarkMode]);

  return (
    <MuiProvider theme={theme}>
      <Header />
      {children}
    </MuiProvider>
  );
}
