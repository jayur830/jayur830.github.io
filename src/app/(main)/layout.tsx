import type { PropsWithChildren } from 'react';

import MainHeader from '@/components/service/MainHeader';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader
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
