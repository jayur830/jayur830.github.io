'use client';

import { PropsWithChildren } from 'react';

import { AlertProvider, MuiProvider } from '@/contexts';
import defaultTheme from '@/styles/theme';

import '@/styles/globals.scss';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <MuiProvider theme={defaultTheme}>
      <AlertProvider>{children}</AlertProvider>
    </MuiProvider>
  );
}
