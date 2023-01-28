import { PropsWithChildren } from 'react';

import { AppLayout } from '@/components';

import '@/styles/globals.scss';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head />
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
