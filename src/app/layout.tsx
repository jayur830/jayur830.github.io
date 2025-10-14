import './globals.css';

import type {
  Metadata,
} from 'next';
import type { PropsWithChildren } from 'react';

import data from '@/assets/data/ko.json';
import { goormSansFont } from '@/assets/fonts';
import Footer from '@/components/service/Footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  ...data.metadata,
};

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={goormSansFont.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
