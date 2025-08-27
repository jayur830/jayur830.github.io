'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';

export default function DarkModeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <Switch
      checked={isDarkMode}
      className="w-11 h-6"
      onCheckedChange={handleDarkMode}
      thumbProps={{ asChild: true }}
    >
      <div className="flex justify-center items-center size-[22px] bg-white rounded-full">
        {isDarkMode ? <MoonIcon className="size-3" /> : <SunIcon className="size-3" />}
      </div>
    </Switch>
  );
}
