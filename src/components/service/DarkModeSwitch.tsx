'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Switch } from '@/components/ui/switch';

export default function DarkModeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <Switch
        checked={false}
        className="w-11 h-6"
        disabled
        thumbProps={{ asChild: true }}
      >
        <div className="flex justify-center items-center size-[22px] bg-white rounded-full">
          <SunIcon className="size-3" />
        </div>
      </Switch>
    );
  }

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
