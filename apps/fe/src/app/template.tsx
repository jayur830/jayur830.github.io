'use client';

import { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';

import { Loading } from '@/components';
import client from '@/graphql/apollo';
import { useCommonState } from '@/store/common';

export default function AppTemplate({ children }: PropsWithChildren) {
  const loading = useCommonState((state) => state.loading);

  return (
    <ApolloProvider client={client}>
      {children}
      {loading ? <Loading /> : <></>}
    </ApolloProvider>
  );
}
