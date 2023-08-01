import { PropsWithChildren } from 'react';

import TagManager from 'react-gtm-module';

export default function RootLayout({ children }: PropsWithChildren) {
  TagManager.initialize({ gtmId: process.env.GTM_ID });
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
