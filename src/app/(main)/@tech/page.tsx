'use client';

import { useQuery } from '@apollo/client';
import { Box, Grid, Typography } from '@mui/material';

import type { SkillListQuery, SkillListQueryVariables } from '@/graphql/graphql';
import SKILL_LIST_QUERY from '@/graphql/queries/SKILL_LIST.gql';

import SkillCanvas from './SkillCanvas';

export default function Tech() {
  const { data: skillListData } = useQuery<SkillListQuery, SkillListQueryVariables>(SKILL_LIST_QUERY, {
    variables: { uid: process.env.NEXT_PUBLIC_UID },
  });

  const skills = skillListData ? [...new Set(skillListData.skillList.map(({ list }) => list.filter(({ score }) => score > 0)).flat())] : [];
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
