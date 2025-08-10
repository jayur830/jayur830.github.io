import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import Jayur830Img from '@/assets/images/icons/jayur830.png';

export default function NotFound() {
  return (
    <Grid position="fixed" container flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      <Grid container justifyContent="center" alignItems="center">
        <Typography fontWeight={700} fontSize={120} marginRight={1}>
          4
        </Typography>
        <Image src={Jayur830Img} alt="jayur830 logo" width={120} height={120} />
        <Typography fontWeight={700} fontSize={120} marginLeft={1}>
          4
        </Typography>
      </Grid>
      <Typography fontWeight={500} fontSize={18} letterSpacing={-1}>
        페이지를 찾을 수 없습니다.
      </Typography>
      <Link href="/">
        <Button
          sx={{
            backgroundColor: 'grey.800',
            marginTop: '30px',
            padding: '10px 20px',
            ':hover': {
              backgroundColor: 'grey.600',
            },
          }}
        >
          <Typography color="common.white">홈으로 가기</Typography>
        </Button>
      </Link>
    </Grid>
  );
}
