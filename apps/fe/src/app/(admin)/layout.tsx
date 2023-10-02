'use client';

import { PropsWithChildren, useCallback, useLayoutEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Logout } from '@mui/icons-material';
import { createTheme, Grid, IconButton, styled } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { DarkModeSwitch, Header } from '@/components';
import { adminNavigations } from '@/configs/navigation';
import { AlertProvider, MuiProvider } from '@/contexts';
import useFirebase from '@/hooks/firebase/useFirebase';
import { useCommonState } from '@/store/common';
import defaultTheme from '@/styles/theme';

import '@/styles/globals.scss';

export default function AdminLayout({ children }: PropsWithChildren) {
  const { auth } = useFirebase();
  const router = useRouter();
  const isDarkMode = useCommonState((state) => state.isDarkMode);

  /**
   * @description 로그인 상태 체크
   * user?.getIdToken()이 만료되어도 user는 살아있음
   */
  useLayoutEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      // 로그아웃 상태
      if (!user) {
        router.replace('/login');
      } else {
        // 로그인 상태
        const token = await user.getIdToken(true);
        console.log(token);
      }
    });
  }, [router]);

  const theme = useMemo(() => {
    return createTheme({
      ...defaultTheme,
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
    });
  }, [isDarkMode]);

  const onLogout = useCallback(async () => {
    await signOut(auth);
    router.push('/login');
  }, [router, auth]);

  return (
    <MuiProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AlertProvider>
          <Header
            navigations={adminNavigations}
            extra={
              <Grid
                container
                justifyContent="flex-end"
                alignItems="center"
                gap={2}
              >
                <SignOutButton onClick={onLogout}>
                  <Logout />
                </SignOutButton>
                <DarkModeSwitch />
              </Grid>
            }
          />
          <Grid
            container
            justifyContent="center"
            minHeight="calc(100% - 48px)"
            padding={3}
          >
            {children}
          </Grid>
        </AlertProvider>
      </LocalizationProvider>
    </MuiProvider>
  );
}

const SignOutButton = styled(IconButton)({
  fontSize: 16,
  color: 'black',
});
