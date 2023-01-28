// import package modules
import { PropsWithChildren, useMemo } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// Import global modules
import { Header } from '@/components';
import { Provider, useContext } from '@/contexts/Provider';
import { nest } from '@/utils';

// Import local modules

function AppLayout({ children }: PropsWithChildren) {
  const isDarkMode = useContext((value) => value.isDarkMode);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: "'Pretendard', sans-serif",
      },
    });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  );
}

export default nest(Provider, AppLayout);
