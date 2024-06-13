'use client';

import { ApolloProvider as Provider } from '@apollo/client';
import { PropsWithChildren } from 'react';

import client from '@/graphql/apollo';

export default function ApolloProvider({ children }: PropsWithChildren) {
  return <Provider client={client}>{children}</Provider>;
}
