import type { PropsWithChildren } from 'react';

import Header from '@/components/service/Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header
        sideMenuItems={[
          {
            label: '이력서',
            href: '/resume',
          },
          {
            label: '블로그',
            href: '/blog',
          },
        ]}
        title="</>"
      />
      <div className="pt-[68px]">{children}</div>
    </>
  );
}
