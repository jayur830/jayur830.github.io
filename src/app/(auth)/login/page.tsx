'use client';

import { Button, Grid, Typography } from '@mui/material';
import { FirebaseError } from 'firebase/app';
import { GithubAuthProvider, GoogleAuthProvider, linkWithPopup, signInWithPopup, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { authExceptionValues } from '@/constants/auth';
import { loginButtonValues } from '@/constants/auth';
import { useAlert } from '@/contexts/AlertProvider';
import { AuthGuardType } from '@/enums/auth';
import useFirebase from '@/hooks/firebase/useFirebase';

export default function Page() {
  const router = useRouter();

  const { auth } = useFirebase();
  const { openAlert } = useAlert();

  const verifyAdmin = useCallback(
    async (user: User) => {
      const customClaims = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/claims`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${await user.getIdToken()}`,
        },
      }).then((response) => response.json());
      const admin: boolean | undefined = customClaims['gh-page']?.admin;

      if (admin) {
        router.push('/admin/resume');
      } else {
        openAlert({
          open: true,
          autoHideDuration: 7000,
          message: authExceptionValues[AuthGuardType.NotAdministrator],
        });
      }
    },
    [openAlert, router],
  );

  const login = useCallback(
    async (key: string) => {
      switch (key) {
        case 'github': {
          const provider = new GithubAuthProvider();
          try {
            const { user } = await signInWithPopup(auth, provider);
            await verifyAdmin(user);
          } catch (e) {
            const error = e as FirebaseError;
            /**
             * @description 하나의 계정에 다른 인증 제공업체 연결
             */
            if (error.code === 'auth/account-exists-with-different-credential' && auth.currentUser) {
              try {
                const { user } = await linkWithPopup(auth.currentUser, provider);
                await verifyAdmin(user);
              } catch (error) {
                console.log(error);
              }
            } else {
              throw error;
            }
          }
          break;
        }
        case 'google': {
          const provider = new GoogleAuthProvider();
          try {
            const { user } = await signInWithPopup(auth, provider);
            await verifyAdmin(user);
          } catch (e) {
            const error = e as FirebaseError;
            /**
             * @description 하나의 계정에 다른 인증 제공업체 연결
             */
            if (error.code === 'auth/account-exists-with-different-credential' && auth.currentUser) {
              try {
                const { user } = await linkWithPopup(auth.currentUser, provider);
                await verifyAdmin(user);
              } catch (error) {
                console.log(error);
              }
            } else {
              throw error;
            }
          }
          break;
        }
        default:
          break;
      }
    },
    [verifyAdmin, auth],
  );

  return (
    <Grid container justifyContent="center" alignItems="center" height="100%" padding="20px">
      <Grid
        container
        direction="column"
        gap={{ xs: 4, md: '14px' }}
        maxWidth={400}
        width="100%"
        border={(theme) => `1.5px solid ${theme.palette.grey['400']}`}
        borderRadius={{ xs: '10px', md: '20px' }}
        padding={{ xs: '20px', md: '36px' }}
      >
        {loginButtonValues.map(({ key, icon: Icon, buttonProps, label }) => (
          <Button
            key={key}
            background-color={buttonProps.backgroundColor}
            text-color={buttonProps.textColor}
            sx={{
              justifyContent: 'flex-start',
              gap: '14px',
              fontSize: 24,
              backgroundColor: buttonProps.backgroundColor,
              color: buttonProps.textColor,
              width: '100%',
              padding: { xs: '10px 14px', md: '16px 24px' },
              transition: 'opacity 0.2s',
              ':hover': {
                backgroundColor: buttonProps.backgroundColor,
                opacity: { xs: 1, md: 0.5 },
              },
            }}
            onClick={() => login(key)}
          >
            <Icon />
            <Typography variant="subtitle1" fontWeight="Bold" width="100%">
              {label}
            </Typography>
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}
