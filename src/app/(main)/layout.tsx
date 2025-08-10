import Stack from '@mui/material/Stack';
import type { PropsWithChildren } from 'react';

import Header from '@/components/layouts/Header';
import { appNavigations } from '@/constants/navigation';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header navigations={appNavigations} />
      <Stack paddingTop="60px">{children}</Stack>
    </>
  );
}
