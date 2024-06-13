'use client';

import { Switch } from '@mui/material';

import { useDarkModeContext } from '@/contexts/MuiProvider';

export default function DarkModeSwitch() {
  const { isDarkMode, onChangeDarkMode } = useDarkModeContext();

  return (
    <Switch
      onChange={() => onChangeDarkMode(!isDarkMode)}
      sx={(theme) => ({
        width: 48,
        height: 'fit-content',
        border: `2px solid ${theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black}`,
        borderRadius: 999,
        marginRight: '10px',
        padding: 0,
        transition: 'all 0.3s ease',
        ['&&& .MuiSwitch-track']: {
          backgroundColor: 'transparent',
          height: 24,
          borderRadius: 999,
        },
        ['.MuiSwitch-switchBase']: {
          top: 2,
          left: 2,
          padding: 0,
          ['.MuiSwitch-thumb']: {
            backgroundColor: theme.palette.mode === 'dark' ? 'common.white' : 'common.black',
            boxShadow: 'none',
            transition: 'all 0.3s ease',
          },
          ['&.Mui-checked']: {
            transform: 'translateX(20px)',
          },
        },
      })}
    />
  );
}
