'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';

import { Button } from '../ui/button';

export interface SideMenuProps {
  title: string;
  menuItems: {
    label: string;
    href: string;
  }[];
}

export default function SideMenu({ title, menuItems }: SideMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="left" onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-[99]">
        <DrawerHeader className="flex-row justify-between items-center">
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
            }}
          >
            <DrawerTitle>
              {title}
            </DrawerTitle>
          </Link>
          <DrawerClose asChild>
            <Button size="icon" variant="ghost">
              <XIcon />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription className="flex flex-col gap-2 p-4">
          {menuItems.map(({ label, href }) => (
            <Link href={href} key={href} passHref>
              <Button
                className="w-full"
                onClick={() => {
                  setOpen(false);
                }}
                variant="ghost"
              >
                {label}
              </Button>
            </Link>
          ))}
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
}
