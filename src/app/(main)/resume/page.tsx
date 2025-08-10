'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ResumeCard from '@/components/pages/resume/ResumeCard';
import { resume } from '@/constants/domain';

export default function Page() {
  return (
    <>
      <Grid display="flex" alignItems="flex-start" paddingX={{ xs: 2, md: 6 }} paddingTop={2} paddingBottom={4} gap={2}>
        <Typography fontSize={{ xs: 26, md: 36 }} fontWeight={700}>
          {resume.title}
        </Typography>
        {resume.github && (
          <IconButton href={resume.github} target="_blank">
            <GitHubIcon
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
        {(resume.companyList ?? []).map((item, i) => (
          <ResumeCard key={i} data={item} />
        ))}
      </Grid>
    </>
  );
}
