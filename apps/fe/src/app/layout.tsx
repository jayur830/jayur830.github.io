import { PropsWithChildren } from 'react';

import { ThemeRegistry } from '@/contexts';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
