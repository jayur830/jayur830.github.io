import { GitHub as GitHubIcon, Google as GoogleIcon } from '@mui/icons-material';
import { blue, grey } from '@mui/material/colors';

export const loginButtonValues = [
  {
    key: 'github',
    icon: GitHubIcon,
    label: 'Github 로그인',
    buttonProps: {
      backgroundColor: grey['900'],
      textColor: 'white',
    },
  },
  {
    key: 'google',
    icon: GoogleIcon,
    label: 'Google 로그인',
    buttonProps: {
      backgroundColor: blue['700'],
      textColor: 'white',
    },
  },
];
