'use client';

import { useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { Card, Divider, Grid, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import { omit } from 'lodash';

import { ResumeQuery } from '@/graphql/graphql';
import GET_RESUME_QUERY from '@/graphql/queries/getResume.gql';
import { useCommonState } from '@/store/common';

import CareerItemForm from './CareerItemForm';
import HistoryForm from './HistoryForm';
import ResumeInfoForm from './ResumeInfoForm';

export default function Admin() {
  const setLoading = useCommonState((state) => state.setLoading);

  const { data, loading } = useQuery<ResumeQuery>(GET_RESUME_QUERY);

  const resumeData = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.resume;
  }, [data]);

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

  return (
    <Grid
      container
      flexDirection="column"
      gap={4}
      maxWidth={1000}
    >
      <SectionCard>
        <ResumeInfoForm
          title={resumeData?.title || ''}
          github={resumeData?.github || ''}
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
            website={item.website || ''}
            description={item.description || ''}
          >
            <Divider />
            <Grid
              container
              flexDirection="column"
              gap={4}
              marginTop={3}
            >
              {item.careers.map((career, j) => (
                <Grid
                  key={j}
                  container
                  flexDirection="column"
                  gap={4}
                >
                  {career.list.map((subItem, k) => (
                    <CareerItemForm
                      key={k}
                      historyDetailId={subItem.careerId}
                      groupName={career.groupName}
                      startDate={dayjs(subItem.startDate)}
                      endDate={subItem.endDate ? dayjs(subItem.endDate) : null}
                      {...omit(subItem, '__typename', 'startDate', 'endDate')}
                    />
                  ))}
                </Grid>
              ))}
            </Grid>
          </HistoryForm>
        </SectionCard>
      ))}
    </Grid>
  );
}

const SectionCard = styled(Card)(({ theme }) => ({
  boxShadow: `0 0 10px 3px ${theme.palette.mode === 'light' ? grey['300'] : grey['A700']}`,
  padding: 20,
  transition: 'background-color 0.3s ease',
}));
