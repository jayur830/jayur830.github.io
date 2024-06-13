'use client';

import { CircularProgress, Grid } from '@mui/material';

import { useLoading } from '@/contexts/LoadingProvider';

export default function Loading() {
  const loading = useLoading();

  return loading ? (
    <Grid
      sx={{
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF77',
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress color="inherit" />
    </Grid>
  ) : (
    <></>
  );
}
