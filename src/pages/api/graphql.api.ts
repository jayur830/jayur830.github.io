import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';

import resolvers from '@/graphql/resolvers';
import typeDefs from '@/graphql/typedefs.gql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [process.env.NODE_ENV === 'production' ? ApolloServerPluginLandingPageDisabled() : ApolloServerPluginLandingPageGraphQLPlayground({ settings: { 'schema.polling.enable': false } })],
});

const serverStart = server.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  await serverStart;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}
