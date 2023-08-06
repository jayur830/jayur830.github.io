'use client';

import { GitHub } from '@mui/icons-material';
import { Grid, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';

import { ResumeCard } from '@/components';
import { ResumeQuery } from '@/graphql/graphql';

export interface ResumeClientProps {
  data: ResumeQuery['resume'];
}

export default function ResumeClient({ data }: ResumeClientProps) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid
        display="flex"
        alignItems="flex-start"
        paddingX={sm ? 2 : 6}
        paddingTop={2}
        paddingBottom={4}
        gap={2}
      >
        <Typography
          fontSize={sm ? 26 : 36}
          fontWeight={700}
        >
          {data?.title}
        </Typography>
        {data?.github && (
          <IconButton
            href={data?.github}
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
        {(data?.history ?? []).map((item, i) => (
          <ResumeCard
            key={i}
            data={item}
          />
        ))}
      </Grid>
    </>
  );
}

const GithubIcon = styled(GitHub)(({ theme }) => ({
  width: 40,
  height: 40,
  fill: theme.palette.mode === 'dark' ? 'white' : 'black',
  [theme.breakpoints.down('sm')]: {
    width: 25,
    height: 25,
  },
}));
