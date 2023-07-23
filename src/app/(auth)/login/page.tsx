'use client';

import { useCallback } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { Button, Grid, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

import { SignInMutation, SignInMutationVariables } from '@/graphql/graphql';
import SIGN_IN_MUTATION from '@/graphql/mutations/signIn.gql';
import useFirebase from '@/hooks/firebase/useFirebase';

import { loginButtonValues } from './values';

export default function Login() {
  const { authService } = useFirebase();

  const [signIn] = useMutation<SignInMutation, SignInMutationVariables>(SIGN_IN_MUTATION);

  const login = useCallback(
    async (key: string) => {
      switch (key) {
        case 'github':
          const { user } = await signInWithPopup(authService, new GithubAuthProvider());
          console.log(await user.getIdToken(), user.email);
          try {
            const { data } = await signIn({
              variables: { email: user.email || '' },
              context: {
                headers: {
                  authorization: `Bearer ${await user.getIdToken()}`,
                },
              },
            });
          } catch (error) {
            console.log('error:', JSON.stringify(error, null, 2));
          }
          break;
        case 'google':
          break;
        default:
          break;
      }
    },
    [signIn, authService]
  );

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
