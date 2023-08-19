'use client';

import { useMemo } from 'react';
import { GitHub } from '@mui/icons-material';
import { Grid, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { ResumeCard } from '@/components';
import { ResumeQuery } from '@/graphql/graphql';
import GET_RESUME_QUERY from '@/graphql/queries/getResume.gql';

export default function Resume() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const { data } = useQuery<ResumeQuery>({
    queryKey: ['resume'],
    queryFn() {
      return request(process.env.NEXT_PUBLIC_API_URL, GET_RESUME_QUERY);
    },
  });

  const resumeData = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.resume;
  }, [data]);

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
        {(resumeData?.history ?? []).map((item, i) => (
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
