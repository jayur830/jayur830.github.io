import type { PropsWithChildren, ReactNode } from 'react';

export default function Layout({ children, info, about, skills, projects }: PropsWithChildren<Record<'info' | 'about' | 'skills' | 'projects', ReactNode>>) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {info}
      {about}
      {skills}
      {projects}
      {children}
    </div>
  );
}
