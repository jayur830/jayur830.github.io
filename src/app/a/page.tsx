'use client';
// import package modules
import { Grid } from '@mui/material';

// Import global modules
// Import local modules
import { LogoBadge } from '@/components';

export default function APage() {
  return (
    <Grid
      display="flex"
      columnGap={1}
    >
      <Grid>전체</Grid>
      <Grid>전체</Grid>
      <Grid>전체</Grid>
      <LogoBadge.React />
      <LogoBadge.ReactNative />
      <LogoBadge.Sass />
      <LogoBadge.Vue />
      <LogoBadge.Java />
      <LogoBadge.Python />
      <LogoBadge.Docker />
      <LogoBadge.MySQL />
      <LogoBadge.Spring />
      <LogoBadge.SpringBoot />
      <LogoBadge.NextJS />
      <LogoBadge.ApolloClient />
      <LogoBadge.PostgreSQL />
      <LogoBadge.Oracle />
      <LogoBadge.MongoDB />
      <LogoBadge.Yarn />
      <LogoBadge.Vite />
      <LogoBadge.AntDesign />
      <LogoBadge.Storybook />
      <LogoBadge.MUi />
      <LogoBadge.Redux />
    </Grid>
  );
}
