'use client';

import { CircularProgress, Grid, styled } from '@mui/material';

export default function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress color="inherit" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled(Grid)({
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff77',
  width: '100%',
  height: '100%',
});
