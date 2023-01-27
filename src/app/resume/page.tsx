'use client';
// import package modules
import { Fragment, useCallback } from 'react';
import Image from 'next/image';
import { GitHub, Language, Schedule } from '@mui/icons-material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Card, Grid, IconButton, styled, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';

// Import global modules
import { LogoBadge } from '@/components';
import { nest } from '@/utils';

// Import local modules
import { Provider, useContext } from './Provider';

function Resume() {
  const theme = useTheme();
  const data = useContext((value) => value.data);

  const getTenure = useCallback((startDate: string, endDate?: string) => {
    const months = dayjs(endDate).endOf('month').diff(startDate, 'month') + 1;
    return months >= 12 ? (months % 12 === 0 ? `${months / 12}년` : `${Math.floor(months / 12)}년 ${months % 12}개월`) : `${months}개월`;
  }, []);

  return (
    <>
      <Grid
        display="flex"
        alignItems="center"
        paddingX={6}
        paddingTop={2}
        paddingBottom={4}
        gap={2}
      >
        <Typography
          fontSize={36}
          fontWeight={700}
        >
          {data.title}
        </Typography>
        {data.github && (
          <IconButton
            href={data.github}
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
        paddingX={6}
        paddingTop={2}
        paddingBottom={20}
      >
        {data.resumeList.map((resume, i) => (
          <StyledCard
            key={i}
            variant="outlined"
          >
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                display="flex"
                alignItems="flex-end"
                gap={3}
              >
                {resume.logo && (
                  <Image
                    {...resume.logo}
                    height={50}
                  />
                )}
                <Grid
                  display="flex"
                  alignItems="flex-end"
                  gap={1}
                >
                  <Typography
                    fontWeight={700}
                    fontSize={24}
                    letterSpacing={-1}
                  >
                    {resume.name}
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={20}
                    letterSpacing={-1}
                    color={theme.palette.mode === 'dark' ? grey['400'] : grey['700']}
                  >
                    {`(${resume.startDate} ~ ${resume.endDate ?? '재직 중'}, ${getTenure(resume.startDate, resume.endDate)})`}
                  </Typography>
                </Grid>
              </Grid>
              {resume.website && (
                <IconButton
                  href={resume.website}
                  target="_blank"
                >
                  <WebSiteIcon />
                </IconButton>
              )}
            </Grid>
            {resume.description && (
              <Grid paddingY={5}>
                <Typography
                  fontWeight={400}
                  fontSize={18}
                  letterSpacing={-1}
                >
                  {resume.description}
                </Typography>
              </Grid>
            )}
            {resume.carrierList.map((carrier, j) => (
              <Fragment key={j}>
                <Typography
                  fontWeight={700}
                  fontSize={22}
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
                      <StyledTimelineOppositeContent whiteSpace="pre-line">{`${item.startDate}\n~ ${item.endDate}\n(${dayjs(item.endDate).diff(
                        dayjs(item.startDate),
                        'month'
                      )}개월)`}</StyledTimelineOppositeContent>
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
                          fontSize={20}
                          letterSpacing={-1}
                        >
                          {item.name}
                        </Typography>
                        {item.techList && item.techList.length > 0 && (
                          <Grid
                            display="flex"
                            gap={1}
                            flexWrap="wrap"
                            marginTop={1}
                            marginBottom={3}
                          >
                            {item.techList.map((tech, l) => {
                              const Component = LogoBadge[tech];
                              return <Component key={l} />;
                            })}
                          </Grid>
                        )}
                        {item.description && (
                          <Typography
                            fontWeight={400}
                            fontSize={18}
                            letterSpacing={-0.5}
                          >
                            {item.description}
                          </Typography>
                        )}
                      </StyledTimelineContent>
                    </TimelineItem>
                  ))}
                </StyledTimeline>
              </Fragment>
            ))}
          </StyledCard>
        ))}
      </Grid>
    </>
  );
}

export default nest(Provider, Resume);

const StyledCard = styled(Card)(({ theme }) => ({
  width: 1000,
  borderColor: theme.palette.mode === 'dark' ? grey['700'] : grey['400'],
  borderRadius: 10,
  padding: 32,
  transition: 'background-color 0.3s ease',
}));

const GithubIcon = styled(GitHub)(({ theme }) => ({
  width: 40,
  height: 40,
  fill: theme.palette.mode === 'dark' ? 'white' : 'black',
}));

const WebSiteIcon = styled(Language)(({ theme }) => ({
  fill: theme.palette.mode === 'dark' ? grey['400'] : grey['900'],
}));

const StyledTimeline = styled(Timeline)({
  display: 'flex',
  justifyContent: 'flex-start',
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
  paddingTop: 0,
  paddingLeft: 0,
}));

const StyledTimelineContent = styled(TimelineContent)({
  paddingTop: 0,
  paddingBottom: 40,
});
