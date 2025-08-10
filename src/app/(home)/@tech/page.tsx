'use client';

import { Box, Grid, Typography } from '@mui/material';

import { skillList } from '@/constants/domain';

import SkillCanvas from './SkillCanvas';

export default function Tech() {
  const skills = [...new Set(skillList.map(({ list }) => list.filter(({ score }) => score > 0)).flat())];
  const pcLogos = skills.map((logo) => {
    return {
      src: logo.logoUrl,
      width: 33.33333 * logo.score,
    };
  });
  const mobileLogos = skills.map((logo) => {
    return {
      src: logo.logoUrl,
      width: 20 * logo.score,
    };
  });

  return (
    <Grid container justifyContent="center" alignItems="center" height="calc(100vh - 60px)">
      <Grid container direction="column" justifyContent="center" alignItems="center" maxWidth={1440}>
        <Typography variant="h1" fontSize={{ xs: 32, md: 48 }} marginBottom={5}>
          Tech
        </Typography>
        <Box display={{ xs: 'none', md: 'block' }}>
          <SkillCanvas logos={pcLogos} style={{ borderRadius: 20, boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.1)' }} />
        </Box>
        <Box display={{ xs: 'block', md: 'none' }}>
          <SkillCanvas logos={mobileLogos} aspectRatio={9 / 16} style={{ borderRadius: 20, boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.1)' }} />
        </Box>
      </Grid>
    </Grid>
  );
}
