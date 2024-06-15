import '@/styles/globals.scss';

import type { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';

import { fonts } from '@/assets/fonts';
import AlertProvider from '@/contexts/AlertProvider';
import ApolloProvider from '@/contexts/ApolloProvider';
import LoadingProvider from '@/contexts/LoadingProvider';
import MuiProvider from '@/contexts/MuiProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

export const metadata: Metadata = {
  title: '4년차 개발자 이재열입니다.',
  description: '이재열의 포트폴리오입니다.',
  keywords: [
    '4년차',
    '이재열',
    '포트폴리오',
    '개발자',
    '프론트엔드',
    '백엔드',
    'Github',
    'Page',
    'Next.js',
    'React',
    'Node.js',
    'GraphQL',
    'TypeScript',
    'Firebase',
    'Material-UI',
    'Apollo',
    'Day.js',
    'Jest',
    'Testing Library',
    'Prettier',
    'ESLint',
    'Github Actions',
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={fonts.className}>
        <ApolloProvider>
          <MuiProvider>
            <LoadingProvider>
              <AlertProvider>{children}</AlertProvider>
            </LoadingProvider>
          </MuiProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
