import { Dayjs } from 'dayjs';

export type ResumeInfoFormData = {
  title: string;
  github: string;
};

export type ResumeCompanyInfoFormData = {
  companyName: string;
  isWorking: boolean;
  startDate?: Dayjs;
  endDate?: Dayjs;
  website?: string;
  description?: string;
};

export type ResumeHistoryDetailFormData = {};
