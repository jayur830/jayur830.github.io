'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { Button, Grid, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FirebaseError } from 'firebase/app';
import { deleteUser, GithubAuthProvider, GoogleAuthProvider, linkWithPopup, signInWithPopup } from 'firebase/auth';

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

  const [signIn, { loading }] = useMutation<SignInMutation, SignInMutationVariables>(SIGN_IN_MUTATION, {
    onCompleted(data) {
      if (data.signIn.isLogged) {
        router.push('/admin/resume');
      }
    },
    onError({ graphQLErrors: [graphQLError] }) {
      const errorCode = graphQLError.extensions.code as AuthGuardType;
      if (errorCode) {
        openAlert({
          open: true,
          autoHideDuration: 7000,
          message: authExceptionValues[errorCode],
        });
        /**
         * @description 관리자가 아닌 계정으로 Firebase OAuth 로그인 한 경우 해당 OAuth 계정 삭제
         */
        // if (errorCode === AuthGuardType.NotAdministrator && auth.currentUser) {
        //   deleteUser(auth.currentUser);
        // }
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
              variables: { email: user.email || '' },
            });
          } catch (e) {
            const error = e as FirebaseError;
            /**
             * @description 하나의 계정에 다른 인증 제공업체 연결
             */
            if (error.code === 'auth/account-exists-with-different-credential' && auth.currentUser) {
              try {
                const { user } = await linkWithPopup(auth.currentUser, provider);
                await signIn({
                  variables: { email: user.email || '' },
                });
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
            await signIn({
              variables: { email: user.email || '' },
            });
          } catch (e) {
            const error = e as FirebaseError;
            /**
             * @description 하나의 계정에 다른 인증 제공업체 연결
             */
            if (error.code === 'auth/account-exists-with-different-credential' && auth.currentUser) {
              try {
                const { user } = await linkWithPopup(auth.currentUser, provider);
                await signIn({
                  variables: { email: user.email || '' },
                });
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
    [signIn, auth],
  );

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

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
