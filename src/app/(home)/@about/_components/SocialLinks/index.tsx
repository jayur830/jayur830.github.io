'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import GithubIcon from '@/assets/images/github-icon.svg';
import LinkedinIcon from '@/assets/images/linkedin-icon.svg';

export type SocialLinkType = 'github' | 'linkedin' | 'email';

export interface SocialLinksProps {
  className?: string;
  items: {
    type: SocialLinkType;
    href: string;
  }[];
}

export default function SocialLinks({ className, items }: SocialLinksProps) {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex justify-center items-center gap-8 transition-all duration-700 ease-out ${
      showIcons ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-2.5'
    } ${className || ''}`}
    >
      {items.map(({ type, href }) => {
        switch (type) {
          case 'github':
            return (
              <Link href={href} key={`${type}-${href}`}>
                <Image alt={type} className="dark:invert" src={GithubIcon} width={28} />
              </Link>
            );
          case 'linkedin':
            return (
              <Link href={href} key={`${type}-${href}`}>
                <Image alt={type} className="dark:invert" src={LinkedinIcon} width={28} />
              </Link>
            );
          case 'email':
            return (
              <Link href={href} key={`${type}-${href}`}>
                <Mail size={28} />
              </Link>
            );
        }
      })}
    </div>
  );
}
