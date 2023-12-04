import { ApolloClient, ApolloLink, DefaultContext, from, fromPromise, HttpLink, InMemoryCache, toPromise } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { onError } from '@apollo/client/link/error';

import { authService } from '@/configs/firebase';
import { AuthGuardType } from '@/enums';

if (process.env.NODE_ENV === 'development') {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

/**
 * @description API 요청 시 JWT 토큰 헤더 삽입
 */
const headersLink = new ApolloLink((operation, forward) => {
  if (authService.currentUser) {
    return fromPromise(
      authService.currentUser.getIdToken().then((accessToken) => {
        operation.setContext((context: DefaultContext) => ({
          ...context,
          headers: {
            ...context?.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        }));
        return toPromise(forward(operation));
      }),
    );
  }

  return forward(operation);
});

/**
 * @description Error handling
 * - `AUTHORIZATION_EXPIRED`: 토큰 만료, 자동으로 refresh 하여 재요청
 */
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    for (const graphQLError of graphQLErrors) {
      switch (graphQLError.extensions.code) {
        case AuthGuardType.AuthorizationExpired:
          if (authService.currentUser) {
            return fromPromise(
              authService.currentUser.getIdToken(true).then((accessToken) => {
                operation.setContext((context: DefaultContext) => ({
                  ...context,
                  headers: {
                    ...context?.headers,
                    Authorization: `Bearer ${accessToken}`,
                  },
                }));
                return toPromise(forward(operation));
              }),
            );
          }

          return forward(operation);
        default:
          console.error(graphQLError);
          break;
      }
    }
  }

  if (networkError) {
    console.error(networkError);
  }

  return forward(operation);
});

const apiLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });

const client = new ApolloClient({
  ssrMode: true,
  link: from([headersLink, errorLink, apiLink]),
  cache: new InMemoryCache(),
});

export default client;
