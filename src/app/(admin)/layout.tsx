'use client';

import { Logout } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import DarkModeSwitch from '@/components/DarkModeSwitch';
import Header from '@/components/Header';
import { adminNavigations } from '@/constants/navigation';
import useFirebase from '@/hooks/firebase/useFirebase';

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();

  const { auth } = useFirebase();

  return (
    <>
      <Header
        navigations={adminNavigations}
        extra={
          <Grid container justifyContent="flex-end" alignItems="center" gap={2}>
            <IconButton
              size="small"
              onClick={async () => {
                await signOut(auth);
                router.push('/login');
              }}
              sx={{ color: 'common.black' }}
            >
              <Logout />
            </IconButton>
            <DarkModeSwitch />
          </Grid>
        }
      />
      <Grid container justifyContent="center" minHeight="calc(100% - 48px)" padding={3}>
        {children}
      </Grid>
    </>
  );
}