import { PropsWithChildren } from 'react';

import { ReactQueryProvider } from '@/contexts';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
