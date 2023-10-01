import { createTheme } from '@mui/material';

import { fonts } from '@/assets/fonts';

const defaultTheme = createTheme({
  typography: {
    fontFamily: fonts.style.fontFamily,
  },
});

export default defaultTheme;
