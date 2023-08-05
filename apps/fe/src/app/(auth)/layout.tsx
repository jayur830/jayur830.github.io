'use client';

import { PropsWithChildren } from 'react';
import { createTheme } from '@mui/material';

import { fonts } from '@/assets/fonts';
import { MuiProvider } from '@/contexts';

import '@/styles/globals.scss';

const theme = createTheme({
  typography: {
    fontFamily: fonts.style.fontFamily,
  },
});

export default function RootLayout({ children }: PropsWithChildren) {
  return <MuiProvider theme={theme}>{children}</MuiProvider>;
}
