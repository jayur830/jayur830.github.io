import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';

import DarkModeSwitch from '@/components/layouts/DarkModeSwitch';
import Header from '@/components/layouts/Header';
import { appNavigations } from '@/constants/navigation';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header navigations={appNavigations} extra={<DarkModeSwitch />} />
      <Grid paddingTop="60px" paddingBottom="100px">
        {children}
      </Grid>
    </>
  );
}
