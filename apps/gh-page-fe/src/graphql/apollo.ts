import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });

const client = new ApolloClient({
  connectToDevTools: process.env.NODE_ENV !== 'production',
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache({}).restore({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

export { client };
