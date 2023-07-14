import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { Repository } from 'typeorm';

import { ResumeInfo } from '@/entities/resume_info/resume_info.entity';
import { ResumeVO } from '@/vo/resume.vo';

@Injectable()
export class ResumeService {
  constructor(@InjectRepository(ResumeInfo) private resumeInfoRepository: Repository<ResumeInfo>) {}

  async findOne(): Promise<ResumeVO> {
    const result = await this.resumeInfoRepository.find({});

    return {
      ...result[0],
      history: result[0].history
        .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
        .map((item) => ({
          ...item,
          carriers: item.carriers
            .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
            .reduce((result, carrier) => {
              const index = result.findIndex((d) => d.groupName === carrier.group);
              const defaultCarrierObj = {
                name: carrier.name,
                completed: !!carrier.endDate,
                startDate: carrier.startDate,
                endDate: carrier.endDate,
                techList: carrier.techList.split(','),
                description: carrier.description,
              };

              if (index !== -1) {
                return result.map((item, i) => {
                  if (index === i) {
                    return {
                      ...item,
                      list: [...item.list, defaultCarrierObj],
                    };
                  }
                  return item;
                });
              }
              return [
                ...result,
                {
                  groupName: carrier.group,
                  list: [defaultCarrierObj],
                },
              ];
            }, []),
        })),
    };
  }
}
