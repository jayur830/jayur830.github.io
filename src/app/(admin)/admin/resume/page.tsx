'use client';

import { PropsWithChildren, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { Card, Divider, Grid, styled, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';

import { ResumeQuery, ResumeQueryVariables } from '@/graphql/graphql';
import GET_RESUME_QUERY from '@/graphql/queries/getResume.gql';
import { useCommonState } from '@/store/common';

import CareerItemForm from './CareerItemForm';
import HistoryForm from './HistoryForm';
import ResumeInfoForm from './ResumeInfoForm';

export default function Admin() {
  const theme = useTheme();

  const setLoading = useCommonState((state) => state.setLoading);

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
    setLoading(loading);
  }, [setLoading, loading]);

  return (
    <Grid
      container
      flexDirection="column"
      gap={4}
      maxWidth={1000}
    >
      <SectionCard mode={theme.palette.mode}>
        <ResumeInfoForm
          title={resumeData?.title || ''}
          github={resumeData?.github || ''}
        />
      </SectionCard>
      <Divider />
      {(resumeData?.companyList || []).map((item, i) => (
        <SectionCard
          key={i}
          mode={theme.palette.mode}
        >
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
              {item.projectList.map((project, j) => (
                <Grid
                  key={j}
                  container
                  flexDirection="column"
                  gap={4}
                >
                  {project.list.map((subItem, k) => (
                    <CareerItemForm
                      key={k}
                      companyId={item.companyId}
                      projectId={subItem.projectId}
                      groupName={project.groupName}
                      name={subItem.title}
                      startDate={dayjs(subItem.startDate)}
                      endDate={subItem.endDate ? dayjs(subItem.endDate) : null}
                      techList={subItem.techList}
                      description={subItem.description}
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

const SectionCard = ({ children, mode }: PropsWithChildren<{ mode: 'light' | 'dark' }>) => (
  <Card
    sx={{
      boxShadow: `0 0 10px 3px ${mode === 'light' ? grey['300'] : grey['A700']}`,
      padding: '20px',
      transition: 'background-color 0.3s ease',
    }}
  >
    {children}
  </Card>
);
