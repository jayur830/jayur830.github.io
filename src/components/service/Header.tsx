import Link from 'next/link';

import DarkModeSwitch from './DarkModeSwitch';
import SideMenu from './SideMenu';

export interface HeaderProps {
  title: string;
  sideMenuItems: {
    label: string;
    href: string;
  }[];
  menuItems: {
    label: string;
    href: string;
  }[];
}

export default function Header({
  title,
  sideMenuItems,
  menuItems,
}: HeaderProps) {
  return (
    <div className="fixed top-0 flex justify-between items-center w-full p-4 backdrop-blur-lg z-[99]">
      <div className="flex items-center gap-4">
        <SideMenu menuItems={sideMenuItems} title="</>" />
        <Link href="/">
          <h2 className="text-2xl font-bold">{title}</h2>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          {menuItems.map(({ label, href }) => (
            <Link href={href} key={href}>
              <h2 className="text-sm text-zinc-600 font-bold text-">{label}</h2>
            </Link>
          ))}
        </div>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
