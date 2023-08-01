declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const svg: FC<SVGProps<SVGSVGElement>>;
  export default svg;
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID: string;
    NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_SECRET: string;
    NEXT_PUBLIC_FIREBASE_API_KEY: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_FIREBASE_APP_ID: string;
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
    NEXT_PUBLIC_GTM_ID: string;

    API_URL: string;
    GITHUB_OAUTH_CLIENT_ID: string;
    GITHUB_OAUTH_CLIENT_SECRET: string;
    FIREBASE_API_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: string;
    FIREBASE_APP_ID: string;
    FIREBASE_MEASUREMENT_ID: string;
    GTM_ID: string;
  }
}
