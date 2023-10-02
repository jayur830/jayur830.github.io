import { Dayjs } from 'dayjs';

import { TechLogo } from '@/graphql/graphql';

export type ResumeInfoFormData = {
  title: string;
  github: string;
};

export type ResumeCompanyInfoFormData = {
  companyName: string;
  isWorking: boolean;
  startDate?: Dayjs;
  endDate?: {
    value: Dayjs;
    minDate: Dayjs;
  };
  website?: string;
  description?: string;
};

export type ResumeHistoryDetailFormData = {
  groupName: string;
  name: string;
  isWorking: boolean;
  startDate: Dayjs;
  endDate: {
    value: Dayjs;
    minDate: Dayjs;
  };
  keyword: string;
  techList: TechLogo[];
  description: string;
};
