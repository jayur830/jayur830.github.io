import { Fragment, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Language, Schedule } from '@mui/icons-material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Card, Grid, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';

import { ResumeQuery } from '@/graphql/graphql';

import logoBadge from '../LogoBadge';

export interface ResumeCardProps {
  data: NonNullable<ResumeQuery['resume']['history']>[number];
}

export default function ResumeCard({ data }: ResumeCardProps) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const getTenure = useCallback((startDate: string, endDate?: string | null) => {
    const months =
      dayjs(endDate ?? undefined)
        .endOf('month')
        .diff(startDate, 'month') + 1;
    return months >= 12 ? (months % 12 === 0 ? `${months / 12}년` : `${Math.floor(months / 12)}년 ${months % 12}개월`) : `${months}개월`;
  }, []);

  return (
    <StyledCard variant="outlined">
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          display="flex"
          flexDirection={md ? 'column' : 'row'}
          alignItems={md ? 'flex-start' : 'flex-end'}
          gap={3}
        >
          {data.logo && (
            <Image
              {...data.logo}
              width={(data.logo.width * (sm ? 30 : 50)) / data.logo.height}
              height={sm ? 30 : 50}
            />
          )}
          <Grid
            display="flex"
            flexDirection={sm ? 'column' : 'row'}
            alignItems={sm ? 'flex-start' : 'flex-end'}
            gap={sm ? 0 : 1}
          >
            <Typography
              fontWeight={700}
              fontSize={sm ? 18 : 24}
              letterSpacing={-1}
            >
              {data.companyName}
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={sm ? 14 : 20}
              letterSpacing={-1}
              color={theme.palette.mode === 'dark' ? grey['400'] : grey['700']}
            >
              {`(${data.startDate} ~ ${data.endDate ?? '재직 중'}, ${getTenure(data.startDate, data.endDate)})`}
            </Typography>
          </Grid>
        </Grid>
        {data.website && (
          <IconButton
            href={data.website}
            target="_blank"
          >
            <WebSiteIcon />
          </IconButton>
        )}
      </Grid>
      {data.description && (
        <Grid paddingY={sm ? 3 : 5}>
          <Typography
            fontWeight={400}
            fontSize={sm ? 13 : 18}
            letterSpacing={-1}
          >
            {data.description}
          </Typography>
        </Grid>
      )}
      {data.careers.map((carrier, j) => (
        <Fragment key={j}>
          <Typography
            fontWeight={700}
            fontSize={sm ? 18 : 22}
            letterSpacing={-1}
          >
            {carrier.groupName}
          </Typography>
          <StyledTimeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {carrier.list.map((item, k) => (
              <TimelineItem key={k}>
                {!sm && (
                  <StyledTimelineOppositeContent whiteSpace="pre-line">{`${item.startDate}\n~ ${item.endDate}\n(${dayjs(item.endDate).diff(
                    dayjs(item.startDate),
                    'month'
                  )}개월)`}</StyledTimelineOppositeContent>
                )}
                <TimelineSeparator>
                  {item.completed ? (
                    <StyledTimelineDot
                      variant="outlined"
                      color="primary"
                    />
                  ) : (
                    <LoadingTimelineDot variant="outlined">
                      <Schedule />
                    </LoadingTimelineDot>
                  )}
                  {k < carrier.list.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <StyledTimelineContent whiteSpace="pre-line">
                  <Typography
                    fontWeight={700}
                    fontSize={sm ? 16 : 20}
                    letterSpacing={-1}
                  >
                    {item.name}
                  </Typography>
                  {sm && (
                    <StyledTimelineOppositeContentMobile>{`${item.startDate} ~ ${item.endDate} (${dayjs(item.endDate).diff(dayjs(item.startDate), 'month')}개월)`}</StyledTimelineOppositeContentMobile>
                  )}
                  {item.techList && item.techList.length > 0 && (
                    <Grid
                      display="flex"
                      gap={1}
                      flexWrap="wrap"
                      marginTop={1}
                      marginBottom={3}
                    >
                      {item.techList.map((tech, l) => {
                        const Component = logoBadge[tech];
                        return <Component key={l} />;
                      })}
                    </Grid>
                  )}
                  {/* {item.description && (
                    <Typography
                      fontWeight={400}
                      fontSize={sm ? 13 : 18}
                      letterSpacing={-0.5}
                    >
                      {item.description}
                    </Typography>
                  )} */}
                  {item.description && <ReactMarkdown className="markdown">{item.description}</ReactMarkdown>}
                </StyledTimelineContent>
              </TimelineItem>
            ))}
          </StyledTimeline>
        </Fragment>
      ))}
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 1000,
  borderColor: theme.palette.mode === 'dark' ? grey['700'] : grey['400'],
  borderRadius: 10,
  padding: 32,
  transition: 'background-color 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    padding: 16,
  },
}));

const WebSiteIcon = styled(Language)(({ theme }) => ({
  fill: theme.palette.mode === 'dark' ? grey['400'] : grey['900'],
}));

const StyledTimeline = styled(Timeline)({
  display: 'flex',
  justifyContent: 'flex-start',
  paddingLeft: 0,
  paddingRight: 0,
});

const StyledTimelineDot = styled(TimelineDot)({
  width: 14,
  height: 14,
  margin: '2px 6px',
});

const LoadingTimelineDot = styled(StyledTimelineDot)({
  width: 24,
  height: 24,
  border: 'none',
  margin: '0 1px',
  padding: 0,
});

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.mode === 'dark' ? grey['300'] : grey['700'],
  flex: 0.1,
  minWidth: 75,
  paddingTop: 0,
  paddingLeft: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    flex: 0.25,
  },
}));

const StyledTimelineOppositeContentMobile = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? grey['300'] : grey['700'],
  fontSize: 12,
  margin: '2px 0 14px',
}));

const StyledTimelineContent = styled(TimelineContent)({
  paddingTop: 0,
  paddingBottom: 40,
});
