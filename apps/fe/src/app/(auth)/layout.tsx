'use client';

import { PropsWithChildren } from 'react';
import { createTheme } from '@mui/material';

import { fonts } from '@/assets/fonts';
import { AlertProvider, MuiProvider } from '@/contexts';

import '@/styles/globals.scss';

const theme = createTheme({
  typography: {
    fontFamily: fonts.style.fontFamily,
  },
});

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <MuiProvider theme={theme}>
      <AlertProvider>{children}</AlertProvider>
    </MuiProvider>
  );
}
