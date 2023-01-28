import { StaticImageData } from 'next/image';

import { LogoBadge } from '@/components';

export interface CarrierItem {
  name: string;
  completed: boolean;
  startDate: string;
  endDate: string;
  techList: (keyof typeof LogoBadge)[];
  description: string;
}

export interface ResumeItem {
  name: string;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  startDate: string;
  endDate?: string;
  website?: string;
  description?: string;
  carrierList: {
    groupName?: string;
    list: CarrierItem[];
  }[];
}

export interface Resume {
  title: string;
  github?: string;
  resumeList: ResumeItem[];
}
