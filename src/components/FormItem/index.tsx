import { Grid, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface FormItemProps {
  label: string;
}

export default function FormItem({ label, children }: PropsWithChildren<FormItemProps>) {
  return (
    <Grid container alignItems="center" columnGap={2} rowGap={1} marginBottom={2}>
      <Typography fontWeight={700} fontSize={16}>
        {label}
      </Typography>
      {children}
    </Grid>
  );
}
