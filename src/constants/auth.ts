import { GitHub as GitHubIcon, Google as GoogleIcon } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

import { AuthGuardType } from '@/enums/auth';
import { palette } from '@/styles/theme';

export const authExceptionValues = {
  [AuthGuardType.Unauthorization]: '토큰이 필요합니다.',
  [AuthGuardType.InvalidToken]: '토큰이 올바른 형식이 아닙니다.',
  [AuthGuardType.NotAdministrator]: '관리자가 아닙니다.',
  [AuthGuardType.AuthorizationExpired]: '토큰이 만료되었습니다.',
};

export const loginButtonValues = [
  {
    key: 'github',
    icon: GitHubIcon,
    label: 'Github 로그인',
    buttonProps: {
      backgroundColor: palette.grey['900'],
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
