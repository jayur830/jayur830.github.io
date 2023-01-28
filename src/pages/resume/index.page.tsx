'use client';
// import package modules
import { GitHub } from '@mui/icons-material';
import { Grid, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';

// Import global modules
import { ResumeCard } from '@/components';
import { nest } from '@/utils';

// Import local modules
import { Provider, useContext } from './Provider';

function Resume() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const resumeData = useContext((value) => value.resumeData);

  return (
    <>
      <Grid
        display="flex"
        alignItems="center"
        paddingX={sm ? 2 : 6}
        paddingTop={2}
        paddingBottom={4}
        gap={2}
      >
        <Typography
          fontSize={sm ? 26 : 36}
          fontWeight={700}
        >
          {resumeData?.title}
        </Typography>
        {resumeData?.github && (
          <IconButton
            href={resumeData?.github}
            target="_blank"
          >
            <GithubIcon />
          </IconButton>
        )}
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={6}
        paddingX={sm ? 2 : 6}
        paddingTop={2}
        paddingBottom={20}
      >
        {(resumeData?.resumeList ?? []).map((resume, i) => (
          <ResumeCard
            key={i}
            data={resume}
          />
        ))}
      </Grid>
    </>
  );
}

export default nest(Provider, Resume);

const GithubIcon = styled(GitHub)(({ theme }) => ({
  width: 40,
  height: 40,
  fill: theme.palette.mode === 'dark' ? 'white' : 'black',
  [theme.breakpoints.down('sm')]: {
    width: 25,
    height: 25,
  },
}));
