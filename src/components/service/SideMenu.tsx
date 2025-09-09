import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';

import { Button } from '../ui/button';

export default function SideMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-[99]">
        <DrawerHeader className="flex-row justify-between items-center">
          <DrawerTitle>
            Menu
          </DrawerTitle>
          <DrawerClose asChild>
            <Button size="icon" variant="ghost">
              <XIcon />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription className="flex flex-col gap-2 p-4">
          <Link href="/resume" passHref>
            <Button className="w-full" variant="ghost">이력서</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button className="w-full" variant="ghost">블로그</Button>
          </Link>
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
}
