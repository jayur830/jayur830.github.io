'use client';

import { PropsWithChildren, useCallback, useEffect } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { Button, Checkbox, Grid, styled, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { omit } from 'lodash';

import { FormItem } from '@/components';

import { ResumeCompanyInfoFormData } from '../types';

export interface HistoryFormProps extends Omit<ResumeCompanyInfoFormData, 'isWorking' | 'endDate'> {
  companyId: string;
  endDate?: Dayjs;
}

export default function HistoryForm({ companyId, companyName, startDate, endDate, website, description, children }: PropsWithChildren<HistoryFormProps>) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const { control, watch, setValue, handleSubmit } = useForm<ResumeCompanyInfoFormData>({
    mode: 'all',
    defaultValues: {
      companyName,
      isWorking: !endDate,
      startDate,
      endDate: {
        value: endDate,
        minDate: startDate,
      },
      website: website || '',
      description: description || '',
    },
  });

  const {
    field: { value: isWorking },
  } = useController<ResumeCompanyInfoFormData>({ name: 'isWorking', control });

  const onSubmit = useCallback(
    (data: ResumeCompanyInfoFormData) => {
      console.log({
        ...omit(data, 'isWorking'),
        companyId,
        startDate: data.startDate.format('YYYY-MM'),
        endDate: data.endDate ? data.endDate.value.format('YYYY-MM') : null,
      });
    },
    [companyId],
  );

  useEffect(() => {
    watch(['isWorking', 'startDate']);
    const subscriptions = watch((value, { name }) => {
      switch (name) {
        case 'isWorking':
          setValue(
            'endDate',
            value[name]
              ? undefined
              : {
                  value: dayjs(),
                  minDate: value.startDate as Dayjs,
                },
          );
          break;
        case 'startDate':
          if (value.endDate) {
            setValue('endDate', {
              value: value.endDate.value as Dayjs,
              minDate: value[name] as Dayjs,
            });
          }
          break;
        default:
          break;
      }
    });
    return () => {
      subscriptions.unsubscribe();
    };
  }, [setValue, watch]);

  return (
    <Grid
      container
      flexDirection="column"
      gap={1}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="회사명">
          <Controller
            control={control}
            name="companyName"
            rules={{
              required: {
                value: true,
                message: '회사명은 필수입니다.',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <CompanyNameInput
                variant="standard"
                placeholder="회사명을 입력해주세요."
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />
        </FormItem>
        <FormItem label="재직기간">
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            width="fit-content"
          >
            <Typography
              fontSize={14}
              letterSpacing={-0.3}
            >
              재직 중
            </Typography>
            <Controller
              control={control}
              name="isWorking"
              rules={{ required: false }}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>
          <Controller
            control={control}
            name="startDate"
            rules={{
              required: {
                value: true,
                message: '입사월을 입력해주세요.',
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <DatePicker
                format="YYYY.MM"
                openTo="month"
                views={['year', 'month']}
                value={value}
                onChange={onChange}
                slotProps={{
                  textField: {
                    error: !!error,
                    helperText: error?.message,
                  },
                }}
              />
            )}
          />
          {!isWorking && (
            <>
              <Typography>~</Typography>
              <Controller
                control={control}
                name="endDate"
                rules={{
                  required: {
                    value: true,
                    message: '퇴사월을 입력해주세요.',
                  },
                }}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <DatePicker
                    format="YYYY.MM"
                    openTo="month"
                    views={['year', 'month']}
                    minDate={value?.minDate}
                    value={value?.value}
                    onChange={(date) => onChange({ ...value, value: date })}
                    slotProps={{
                      textField: {
                        error: !!error,
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            </>
          )}
        </FormItem>
        <FormItem label="회사 홈페이지 URL">
          <Controller
            control={control}
            name="website"
            render={({ field }) => (
              <WebsiteInput
                variant="standard"
                placeholder="회사 홈페이지 URL을 입력해주세요. (선택사항)"
                fullWidth={sm}
                {...field}
              />
            )}
          />
        </FormItem>
        <FormItem label="설명">
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="회사에 대한 간단한 소개를 적어주세요."
                multiline
                fullWidth
                minRows={4}
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
      {children}
    </Grid>
  );
}

const CompanyNameInput = styled(TextField)({
  maxWidth: 400,
  width: '100%',
});

const WebsiteInput = styled(TextField)(({ fullWidth }) => ({
  flex: fullWidth ? undefined : 1,
}));