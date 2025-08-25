import type { PropsWithChildren, ReactNode } from 'react';

export default function Layout({ children, about, skills, projects }: PropsWithChildren<Record<'about' | 'skills' | 'projects', ReactNode>>) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full h-full px-8 py-20">
      {about}
      {skills}
      {projects}
      {children}
    </div>
  );
}
