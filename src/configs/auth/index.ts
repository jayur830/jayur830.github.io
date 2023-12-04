import { AuthGuardType } from '@/enums';

export const authExceptionValues = {
  [AuthGuardType.Unauthorization]: '토큰이 필요합니다.',
  [AuthGuardType.InvalidToken]: '토큰이 올바른 형식이 아닙니다.',
  [AuthGuardType.NotAdministrator]: '관리자가 아닙니다.',
  [AuthGuardType.AuthorizationExpired]: '토큰이 만료되었습니다.',
};
