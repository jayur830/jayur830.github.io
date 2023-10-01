'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Grid, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { pick } from 'lodash';
import { useMutation } from '@tanstack/react-query';
import { deleteUser, GithubAuthProvider, GoogleAuthProvider, linkWithPopup, signInWithPopup } from 'firebase/auth';
import request from 'graphql-request';

import { authExceptionValues } from '@/configs/auth';
import { useAlert } from '@/contexts/AlertProvider';
import { AuthGuardType } from '@/enums';
import { SignInMutation, SignInMutationVariables } from '@/graphql/graphql';
import SIGN_IN_MUTATION from '@/graphql/mutations/signIn.gql';
import useFirebase from '@/hooks/firebase/useFirebase';
import { useCommonState } from '@/store/common';

import { loginButtonValues } from './values';

export default function Login() {
  const router = useRouter();
  const { auth } = useFirebase();
  const { openAlert } = useAlert();
  const setLoading = useCommonState((state) => state.setLoading);

  const { mutate: signIn, isPending } = useMutation<SignInMutation, Error, SignInMutationVariables & { authorization: string }>({
    mutationKey: ['signIn'],
    mutationFn(variables) {
      return request(process.env.NEXT_PUBLIC_API_URL, SIGN_IN_MUTATION, pick(variables, 'email'), pick(variables, 'authorization'));
    },
    onSuccess(data) {
      const isLogged = data.signIn.isLogged;
      if (isLogged) {
        router.push('/admin');
      }
    },
    onError(error) {
      const errorCode = Object.keys(authExceptionValues).find((errorCode) => error.message.includes(errorCode)) as keyof typeof authExceptionValues;
      if (errorCode) {
        openAlert({
          open: true,
          autoHideDuration: 7000,
          message: authExceptionValues[errorCode],
        });

        /**
         * @description 관리자가 아닌 계정으로 Firebase OAuth 로그인 한 경우 해당 OAuth 계정 삭제
         */
        if (errorCode === AuthGuardType.NotAdministrator) {
          deleteUser(auth.currentUser);
        }
      }
    },
  });

  const login = useCallback(
    async (key: string) => {
      switch (key) {
        case 'github': {
          const provider = new GithubAuthProvider();
          try {
            const { user } = await signInWithPopup(auth, provider);
            await signIn({
              email: user.email || '',
              authorization: `Bearer ${await user.getIdToken()}`,
            });
          } catch (error) {
            /**
             * @description 하나의 계정에 다른 인증 제공업체 연결
             */
            if (error.code === 'auth/account-exists-with-different-credential') {
              try {
                const { user } = await linkWithPopup(auth.currentUser, provider);
                await signIn({
                  email: user.email || '',
                  authorization: `Bearer ${await user.getIdToken()}`,
                });
              } catch (error) {
                console.log(error);
              }
            }
          }
          break;
        }
        case 'google': {
          const provider = new GoogleAuthProvider();
          try {
            const { user } = await signInWithPopup(auth, provider);
            await signIn({
              email: user.email || '',
              authorization: `Bearer ${await user.getIdToken()}`,
            });
          } catch (error) {
            /**
             * @description 하나의 계정에 다른 인증 제공업체 연결
             */
            if (error.code === 'auth/account-exists-with-different-credential') {
              try {
                const { user } = await linkWithPopup(auth.currentUser, provider);
                await signIn({
                  email: user.email || '',
                  authorization: `Bearer ${await user.getIdToken()}`,
                });
              } catch (error) {
                console.log(error);
              }
            }
          }
          break;
        }
        default:
          break;
      }
    },
    [signIn, auth],
  );

  useEffect(() => {
    setLoading(isPending);
  }, [setLoading, isPending]);

  return (
    <Container>
      <Card>
        {loginButtonValues.map(({ key, icon: Icon, buttonProps, label }) => (
          <LoginButton
            key={key}
            background-color={buttonProps.backgroundColor}
            text-color={buttonProps.textColor}
            onClick={() => login(key)}
          >
            <Icon />
            <Typography
              fontWeight={700}
              fontSize={16}
              width="100%"
            >
              {label}
            </Typography>
          </LoginButton>
        ))}
      </Card>
    </Container>
  );
}

const Container = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: 20,
});

const Card = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  maxWidth: 400,
  width: '100%',
  border: `1.5px solid ${grey['400']}`,
  borderRadius: 20,
  padding: 36,
  [theme.breakpoints.down('sm')]: {
    gap: 14,
    borderRadius: 10,
    padding: 20,
  },
}));

const LoginButton = styled(Button)<{ 'background-color': string; 'text-color': string }>(({ theme, ...props }) => ({
  justifyContent: 'flex-start',
  gap: 14,
  fontSize: 24,
  backgroundColor: props['background-color'],
  color: props['text-color'],
  width: '100%',
  padding: '16px 24px',
  transition: 'opacity 0.2s',
  ':hover': {
    backgroundColor: props['background-color'],
    opacity: 0.5,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 14px',
    ':hover': {
      opacity: 1,
    },
  },
}));
