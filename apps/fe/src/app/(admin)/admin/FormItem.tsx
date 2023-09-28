import { cloneElement, PropsWithChildren } from 'react';
import { RegisterOptions, useController } from 'react-hook-form';
import { Grid, Typography } from '@mui/material';

import { useFormContext } from './Form';

export interface FormItemProps {
  type?: 'input' | 'select' | 'submit';
  label: string;
  name: string;
  rules?: RegisterOptions;
}

export default function FormItem({ type = 'input', label, name, rules, children }: PropsWithChildren<FormItemProps>) {
  const control = useFormContext((value) => value.control);
  const register = useFormContext((value) => value.register);
  const handleSubmit = useFormContext((value) => value.handleSubmit);
  const onSubmit = useFormContext((value) => value.onSubmit);
  const {
    fieldState: { error },
  } = useController<unknown>({ name, control });

  return (
    <Grid
      container
      alignItems="center"
      columnGap={2}
      marginBottom={2}
    >
      <Typography
        fontWeight={700}
        fontSize={16}
      >
        {label}
      </Typography>
      {type === 'submit'
        ? cloneElement(children as JSX.Element, {
            ...register(name, rules),
            onClick: handleSubmit(onSubmit),
          })
        : cloneElement(children as JSX.Element, {
            ...register(name, rules),
            helperText: error?.message,
          })}
    </Grid>
  );
}
