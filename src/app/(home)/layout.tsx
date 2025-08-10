import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import Header from '@/components/layouts/Header';
import { appNavigations } from '@/constants/navigation';
import { PropsWithSegment } from '@/types/common';

export default function Layout({ children, about, tech, project, contribution, career }: PropsWithSegment<'about' | 'tech' | 'project' | 'contribution' | 'career'>) {
  return (
    <>
      <Header navigations={appNavigations} />
      <Grid
        paddingTop="60px"
        sx={{
          '> .MuiGrid-root:nth-of-type(odd)': {
            bgcolor: 'common.black',
          },
        }}
      >
        {about}
        {/* {tech} */}
        <Grid container direction="column" gap={1} paddingY={2}>
          {/* {project} */}
        </Grid>
        <Divider />
        <Grid container direction="column" gap={1} paddingY={2}>
          {/* {contribution} */}
        </Grid>
        <Divider />
        <Grid container direction="column" gap={2} paddingY={2}>
          {/* {career} */}
        </Grid>
      </Grid>
      {children}
    </>
  );
}
