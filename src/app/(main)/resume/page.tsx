'use client';

import { useQuery } from '@apollo/client';
import { GitHub } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';

import ResumeCard from '@/components/ResumeCard';
import { useOnChangeLoading } from '@/contexts/LoadingProvider';
import { ResumeQuery, ResumeQueryVariables } from '@/graphql/graphql';
import GET_RESUME_QUERY from '@/graphql/queries/getResume.gql';

export default function Page() {
  const onChangeLoading = useOnChangeLoading();

  const { data, loading } = useQuery<ResumeQuery, ResumeQueryVariables>(GET_RESUME_QUERY, {
    variables: {
      userId: process.env.NEXT_PUBLIC_UID,
    },
  });

  const resumeData = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.resume;
  }, [data]);

  useEffect(() => {
    onChangeLoading(loading);
    return () => {
      onChangeLoading(false);
    };
  }, [onChangeLoading, loading]);

  return (
    <>
      <Grid display="flex" alignItems="flex-start" paddingX={{ xs: 2, md: 6 }} paddingTop={2} paddingBottom={4} gap={2}>
        <Typography fontSize={{ xs: 26, md: 36 }} fontWeight={700}>
          {resumeData?.title}
        </Typography>
        {resumeData?.github && (
          <IconButton href={resumeData?.github} target="_blank">
            <GitHub
              color="action"
              sx={(theme) => ({
                width: { xs: 25, md: 40 },
                height: { xs: 25, md: 40 },
                fill: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
              })}
            />
          </IconButton>
        )}
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="center" gap={6} paddingX={{ xs: 2, md: 6 }} paddingTop={2} paddingBottom={20}>
        {(resumeData?.companyList ?? []).map((item, i) => (
          <ResumeCard key={i} data={item} />
        ))}
      </Grid>
    </>
  );
}
