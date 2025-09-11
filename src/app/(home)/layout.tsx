import type { PropsWithChildren, ReactNode } from 'react';

export default function Layout({ children, info, about, skills, careers }: PropsWithChildren<Record<'info' | 'about' | 'skills' | 'careers', ReactNode>>) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {info}
      {about}
      {skills}
      {careers}
      {children}
    </div>
  );
}
