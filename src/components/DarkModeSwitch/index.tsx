import { styled, Switch } from '@mui/material';

import { useCommonState } from '@/store/common';

export default function DarkModeSwitch() {
  const setDarkMode = useCommonState((state) => state.setDarkMode);

  return <StyledSwitch onChange={() => setDarkMode()} />;
}

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 'fit-content',
  border: `2px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
  borderRadius: 999,
  marginRight: 10,
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
      backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
      boxShadow: 'none',
      transition: 'all 0.3s ease',
    },
    ['&.Mui-checked']: {
      transform: 'translateX(20px)',
    },
  },
}));
