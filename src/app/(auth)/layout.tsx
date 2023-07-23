'use client';

import { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { fonts } from '@/assets/fonts';
import { client } from '@/graphql/apollo';

import '@/styles/globals.scss';

const theme = createTheme({
  typography: {
    fontFamily: fonts.style.fontFamily,
  },
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
