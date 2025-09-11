import type { PropsWithChildren, ReactNode } from 'react';

import Header from '@/components/service/Header';

export default function Layout({ children, info, about, skills, careers }: PropsWithChildren<Record<'info' | 'about' | 'skills' | 'careers', ReactNode>>) {
  return (
    <>
      <Header
        menuItems={[
          {
            label: 'About',
            href: '#about',
          },
          {
            label: 'Skills',
            href: '#skills',
          },
          {
            label: 'Careers',
            href: '#careers',
          },
        ]}
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
      <div className="flex flex-col justify-center items-center w-full h-full">
        {info}
        {about}
        {skills}
        {careers}
        {children}
      </div>
    </>
  );
}
