'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      checked={theme === 'dark'}
      className="w-11 h-6"
      onCheckedChange={handleDarkMode}
      thumbProps={{ asChild: true }}
    >
      <div className="flex justify-center items-center size-[22px] bg-white rounded-full">
        {theme === 'dark' ? <MoonIcon className="size-3" /> : <SunIcon className="size-3" />}
      </div>
    </Switch>
  );
}
