'use client';

import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Button, Grid, styled, TextField } from '@mui/material';

import { FormItem } from '@/components';
import { useAlert } from '@/contexts/AlertProvider';
import { UpdateResumeMutation, UpdateResumeMutationVariables } from '@/graphql/graphql';
import UPDATE_RESUME_MUTATION from '@/graphql/mutations/updateResume.gql';
import { useCommonState } from '@/store/common';

import { ResumeInfoFormData } from '../types';

export type ResumeInfoFormProps = ResumeInfoFormData;

export default function ResumeInfoForm({ title, github }: ResumeInfoFormProps) {
  const setLoading = useCommonState((state) => state.setLoading);
  const { openAlert } = useAlert();

  const [updateResume, { loading }] = useMutation<UpdateResumeMutation, UpdateResumeMutationVariables>(UPDATE_RESUME_MUTATION, {
    onCompleted() {
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
      updateResume({ variables: { input } });
    },
    [updateResume],
  );

  useEffect(() => {
    setValue('title', title);
    setValue('github', github);
  }, [setValue, title, github]);

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

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
