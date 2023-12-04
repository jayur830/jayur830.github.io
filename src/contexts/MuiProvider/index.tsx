import { PropsWithChildren } from 'react';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';

export interface MuiProviderProps {
  theme: Theme;
}

export default function MuiProvider({ children, theme }: PropsWithChildren<MuiProviderProps>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
