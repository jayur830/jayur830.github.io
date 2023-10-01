'use client';

import { useEffect, useMemo } from 'react';
import { Card, Divider, Grid, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { ResumeQuery } from '@/graphql/graphql';
import GET_RESUME_QUERY from '@/graphql/queries/getResume.gql';
import { useCommonState } from '@/store/common';

import HistoryForm from './HistoryForm';
import ResumeInfoForm from './ResumeInfoForm';

export default function Admin() {
  const setLoading = useCommonState((state) => state.setLoading);

  const { data, isLoading } = useQuery<ResumeQuery>({
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

  useEffect(() => {
    setLoading(isLoading);
  }, [setLoading, isLoading]);

  return (
    <Grid
      container
      flexDirection="column"
      gap={4}
      maxWidth={1000}
    >
      <SectionCard>
        <ResumeInfoForm
          title={resumeData.title}
          github={resumeData.github || ''}
        />
      </SectionCard>
      <Divider />
      {(resumeData?.history || []).map((item, i) => (
        <SectionCard key={i}>
          <HistoryForm
            companyId={item.companyId}
            companyName={item.companyName}
            startDate={dayjs(item.startDate)}
            endDate={item.endDate ? dayjs(item.endDate) : undefined}
            website={item.website}
            description={item.description}
          >
            <SectionCard>abc</SectionCard>
          </HistoryForm>
        </SectionCard>
      ))}
    </Grid>
  );
}

const SectionCard = styled(Card)({
  boxShadow: `0 0 10px 3px ${grey['300']}`,
  padding: 20,
  transition: 'background-color 0.3s ease',
});
