'use client';

import { PropsWithChildren, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { fonts } from '@/assets/fonts';
import { Header } from '@/components';
import { client } from '@/graphql/apollo';
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
