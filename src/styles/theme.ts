import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

import { fonts } from '@/assets/fonts';

export const palette = createPalette({
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
});

export const theme = createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: 10,
        },
        sizeMedium: {
          fontSize: 14,
        },
        sizeLarge: {
          fontSize: 18,
        },
      },
    },
  },
  typography: {
    h1: { ...fonts.style, fontSize: 32 },
    h2: { ...fonts.style, fontSize: 30 },
    h3: { ...fonts.style, fontSize: 28 },
    h4: { ...fonts.style, fontSize: 24 },
    h5: { ...fonts.style, fontSize: 20 },
    h6: { ...fonts.style, fontSize: 18 },
    subtitle1: { ...fonts.style, fontSize: 16 },
    subtitle2: { ...fonts.style, fontSize: 15 },
    body1: { ...fonts.style, fontSize: 14 },
    body2: { ...fonts.style, fontSize: 12 },
    caption: { ...fonts.style, fontSize: 11 },
    button: { ...fonts.style, fontSize: 10 },
    overline: { ...fonts.style, fontSize: 9 },
    allVariants: fonts.style,
    fontFamily: fonts.style.fontFamily,
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
