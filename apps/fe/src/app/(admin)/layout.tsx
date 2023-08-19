'use client';

import { PropsWithChildren, useCallback, useLayoutEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Logout } from '@mui/icons-material';
import { Button, createTheme, Grid, IconButton, styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { fonts } from '@/assets/fonts';
import { DarkModeSwitch, Header } from '@/components';
import { adminNavigations } from '@/configs/navigation';
import { MuiProvider } from '@/contexts';
import useFirebase from '@/hooks/firebase/useFirebase';
import { useCommonState } from '@/store/common';

import '@/styles/globals.scss';

export default function AdminLayout({ children }: PropsWithChildren) {
  const { authService } = useFirebase();
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
        /** @todo implement */
        console.log(await user.getIdToken());
      }
    });
  }, [router]);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: fonts.style.fontFamily,
      },
    });
  }, [isDarkMode]);

  const onLogout = useCallback(async () => {
    await signOut(authService);
    router.push('/login');
  }, [router, authService]);

  return (
    <MuiProvider theme={theme}>
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
    </MuiProvider>
  );
}

const SignOutButton = styled(IconButton)({
  fontSize: 16,
  color: 'black',
});
