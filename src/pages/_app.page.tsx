import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { AppLayout } from '@/components';
import { client } from '@/graphql/apollo';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ApolloProvider>
  );
}
