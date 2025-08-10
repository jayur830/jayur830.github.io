import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const data = {
  email: 'jayur830@naver.com',
  githubUser: 'jayur830',
  blog: 'https://www.notion.so/Frontend-e558b19631644f8b94ff66983cf5b25b?pvs=4',
};

export default function About() {
  return (
    <Grid container justifyContent="center" height="calc(100vh - 60px)">
      <Grid container direction="column" justifyContent="center" alignItems="center" maxWidth={1440}>
        <Typography variant="h1" fontSize={{ xs: 32, md: 48 }} color="common.white" marginBottom={5}>
          About
        </Typography>
        <Stack gap={1}>
          <Typography variant="h4" fontSize={{ xs: 16, md: 24 }} fontWeight={100} color="common.white">
            EMAIL: {data.email}
          </Typography>
          <Typography variant="h4" fontSize={{ xs: 16, md: 24 }} fontWeight={100} color="common.white">
            GITHUB:{' '}
            <Link href={`https://github.com/${data.githubUser}`} target="_blank">
              https://github.com/{data.githubUser}
            </Link>
          </Typography>
          <Typography variant="h4" fontSize={{ xs: 16, md: 24 }} fontWeight={100} color="common.white">
            BLOG:{' '}
            <IconButton LinkComponent={Link} href={data.blog} sx={{ padding: 0 }}>
              <OpenInNewIcon fontSize="small" htmlColor="white" />
            </IconButton>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
