'use client';

import { Language, Schedule } from '@mui/icons-material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Card, Grid, IconButton, Theme, Typography, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import { ResumeQuery } from '@/graphql/graphql';

import logoBadge from '../LogoBadge';

function getTenure(startDate: string, endDate?: string | null) {
  const months =
    dayjs(endDate ?? undefined)
      .endOf('month')
      .diff(startDate, 'month') + 1;
  return months >= 12 ? (months % 12 === 0 ? `${months / 12}년` : `${Math.floor(months / 12)}년 ${months % 12}개월`) : `${months}개월`;
}

export interface ResumeCardProps {
  data: NonNullable<ResumeQuery['resume']['companyList']>[number];
}

export default function ResumeCard({ data }: ResumeCardProps) {
  const sm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        width: '100%',
        maxWidth: 1000,
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey['700'] : theme.palette.grey['400'],
        borderRadius: '10px',
        padding: { xs: 2, md: 4 },
        transition: 'background-color 0.3s ease',
      })}
    >
      <Grid display="flex" justifyContent="space-between" alignItems="center">
        <Grid display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'flex-end' }} gap={3}>
          {data.logo && <Image {...data.logo} height={sm ? 30 : 50} alt={`${data.companyName} logo`} style={{ width: 'auto' }} />}
          <Grid display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'flex-end' }} gap={{ xs: 0, md: 1 }}>
            <Typography fontWeight={700} fontSize={{ xs: 18, md: 24 }} letterSpacing={-1}>
              {data.companyName}
            </Typography>
            <Typography fontWeight={700} fontSize={{ xs: 14, md: 20 }} letterSpacing={-1} color={(theme) => (theme.palette.mode === 'dark' ? theme.palette.grey['400'] : theme.palette.grey['700'])}>
              {`(${data.startDate} ~ ${data.endDate ?? '재직 중'}, ${getTenure(data.startDate, data.endDate)})`}
            </Typography>
          </Grid>
        </Grid>
        {data.website && (
          <IconButton href={data.website} target="_blank">
            <Language
              sx={(theme) => ({
                fill: theme.palette.mode === 'dark' ? theme.palette.grey['400'] : theme.palette.grey['900'],
              })}
            />
          </IconButton>
        )}
      </Grid>
      {data.description && (
        <Grid paddingY={{ xs: 3, md: 5 }}>
          <Typography fontWeight={400} fontSize={{ xs: 13, md: 18 }} letterSpacing={-1}>
            {data.description}
          </Typography>
        </Grid>
      )}
      {data.projectList.map((project, j) => (
        <Fragment key={j}>
          <Typography fontWeight={700} fontSize={{ xs: 18, md: 22 }} letterSpacing={-1}>
            {project.groupName}
          </Typography>
          <Timeline
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              paddingLeft: 0,
              paddingRight: 0,
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {project.list.map((item, k) => (
              <TimelineItem key={k}>
                <TimelineOppositeContent
                  whiteSpace="pre-line"
                  sx={(theme) => ({
                    display: { xs: 'none', md: 'block' },
                    fontSize: { xs: 12, md: 14 },
                    color: theme.palette.mode === 'dark' ? theme.palette.grey['300'] : theme.palette.grey['700'],
                    flex: { xs: 0.25, md: 0.1 },
                    minWidth: 75,
                    paddingTop: 0,
                    paddingLeft: 0,
                  })}
                >
                  {item.endDate
                    ? `${item.startDate}\n~ ${item.endDate}\n(${dayjs(item.endDate).diff(dayjs(item.startDate), 'month')}개월)`
                    : `${item.startDate} ~\n(${dayjs().diff(dayjs(item.startDate), 'month')}개월)`}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {item.endDate ? (
                    <TimelineDot
                      variant="outlined"
                      color="primary"
                      sx={{
                        width: 14,
                        height: 14,
                        margin: '2px 6px',
                      }}
                    />
                  ) : (
                    <TimelineDot
                      variant="outlined"
                      sx={{
                        width: 24,
                        height: 24,
                        border: 'none',
                        margin: '0 1px',
                        padding: 0,
                      }}
                    >
                      <Schedule />
                    </TimelineDot>
                  )}
                  {k < project.list.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent
                  whiteSpace="pre-line"
                  sx={{
                    paddingTop: 0,
                    paddingBottom: 5,
                  }}
                >
                  <Typography fontWeight={700} fontSize={{ xs: 16, md: 20 }} letterSpacing={-1}>
                    {item.title}
                  </Typography>
                  <Typography
                    display={{ xs: 'block', md: 'none' }}
                    sx={(theme) => ({
                      color: theme.palette.mode === 'dark' ? theme.palette.grey['300'] : theme.palette.grey['700'],
                      fontSize: 12,
                      margin: '2px 0 14px',
                    })}
                  >
                    {`${item.startDate} ~ ${item.endDate} (${dayjs(item.endDate).diff(dayjs(item.startDate), 'month')}개월)`}
                  </Typography>
                  {item.techList && item.techList.length > 0 && (
                    <Grid display="flex" gap={1} flexWrap="wrap" marginTop={1} marginBottom={3}>
                      {item.techList.map((tech, l) => {
                        const Component = logoBadge[tech];
                        return <Component key={l} />;
                      })}
                    </Grid>
                  )}
                  {item.description && <ReactMarkdown className="markdown">{item.description}</ReactMarkdown>}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Fragment>
      ))}
    </Card>
  );
}
