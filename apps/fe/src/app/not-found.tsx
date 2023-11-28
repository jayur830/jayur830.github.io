'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, Grid, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Jayur830Img from '@/assets/images/icons/jayur830.png';

export default function NotFound() {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Grid
      position="fixed"
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          fontWeight={700}
          fontSize={120}
          marginRight={1}
        >
          4
        </Typography>
        <Image
          src={Jayur830Img}
          alt="jayur830 logo"
          width={120}
          height={120}
        />
        <Typography
          fontWeight={700}
          fontSize={120}
          marginLeft={1}
        >
          4
        </Typography>
      </Grid>
      <Typography
        fontWeight={500}
        fontSize={18}
        letterSpacing={-1}
      >
        페이지를 찾을 수 없습니다.
      </Typography>
      <BackButton onClick={goBack}>
        <Typography color="white">뒤로가기</Typography>
      </BackButton>
    </Grid>
  );
}

const BackButton = styled(Button)({
  backgroundColor: grey['800'],
  marginTop: 30,
  padding: '10px 20px',
  ':hover': {
    backgroundColor: grey['600'],
  },
});
