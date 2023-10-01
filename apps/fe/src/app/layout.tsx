import { PropsWithChildren } from 'react';

import { ReactQueryProvider, ThemeRegistry } from '@/contexts';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ReactQueryProvider>
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
