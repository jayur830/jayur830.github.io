'use client';

import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Grid, styled, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';

import { FormItem } from '@/components';
import { useAlert } from '@/contexts/AlertProvider';
import { UpdateInfoMutation, UpdateInfoMutationVariables } from '@/graphql/graphql';
import UPDATE_INFO_MUTATION from '@/graphql/mutations/updateInfo.gql';
import { useAuthState } from '@/store/auth';
import { useCommonState } from '@/store/common';

import { ResumeInfoFormData } from '../types';

export type ResumeInfoFormProps = ResumeInfoFormData;

export default function ResumeInfoForm({ title, github }: ResumeInfoFormProps) {
  const authorization = useAuthState((state) => state.authorization);
  const setLoading = useCommonState((state) => state.setLoading);
  const { openAlert } = useAlert();

  const { mutate, isPending } = useMutation<UpdateInfoMutation, Error, UpdateInfoMutationVariables>({
    mutationKey: ['updateInfo'],
    mutationFn(variables) {
      return request(process.env.NEXT_PUBLIC_API_URL, UPDATE_INFO_MUTATION, variables, { authorization });
    },
    onSuccess() {
      openAlert({
        open: true,
        autoHideDuration: 7000,
        message: '이력서 기본 정보가 수정되었습니다.',
      });
    },
    onError(error) {
      openAlert({
        open: true,
        autoHideDuration: 7000,
        message: error.message,
      });
    },
  });

  const { control, setValue, handleSubmit } = useForm<ResumeInfoFormData>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      github: '',
    },
  });

  const onSubmit = useCallback(
    (input: ResumeInfoFormData) => {
      mutate({ input });
    },
    [mutate],
  );

  useEffect(() => {
    setValue('title', title);
    setValue('github', github);
  }, [setValue, title, github]);

  useEffect(() => {
    setLoading(isPending);
  }, [setLoading, isPending]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="제목">
        <Controller
          control={control}
          name="title"
          rules={{
            required: {
              value: true,
              message: '제목은 필수입니다.',
            },
          }}
          render={({ field }) => (
            <TextField
              variant="standard"
              placeholder="제목을 입력하세요."
              fullWidth
              {...field}
            />
          )}
        />
      </FormItem>
      <FormItem label="Github">
        <Controller
          control={control}
          name="github"
          rules={{
            required: {
              value: true,
              message: 'Github 주소는 필수입니다.',
            },
          }}
          render={({ field }) => (
            <GithubInput
              variant="standard"
              placeholder="본인의 Github 주소를 입력하세요."
              {...field}
            />
          )}
        />
      </FormItem>
      <Grid
        container
        justifyContent="flex-end"
        paddingTop={2}
      >
        <Button
          variant="outlined"
          type="submit"
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
}

const GithubInput = styled(TextField)({
  maxWidth: 600,
  width: '100%',
});
