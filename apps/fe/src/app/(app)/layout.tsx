'use client';

import { PropsWithChildren, useMemo } from 'react';
import { createTheme } from '@mui/material';

import { fonts } from '@/assets/fonts';
import { DarkModeSwitch, Header } from '@/components';
import { appNavigations } from '@/configs/navigation';
import { MuiProvider } from '@/contexts';
import { useCommonState } from '@/store/common';

import '@/styles/globals.scss';

export default function AppLayout({ children }: PropsWithChildren) {
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
      <Header
        navigations={appNavigations}
        extra={<DarkModeSwitch />}
      />
      {children}
    </MuiProvider>
  );
}
