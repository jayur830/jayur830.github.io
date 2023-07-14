import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
          careers: item.careers
            .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
            .reduce((result, career) => {
              const index = result.findIndex((d) => d.groupName === career.group);
              const defaultCareerObj = {
                name: career.name,
                completed: !!career.endDate,
                startDate: career.startDate,
                endDate: career.endDate,
                techList: career.techList.split(','),
                description: career.description,
              };

              if (index !== -1) {
                return result.map((item, i) => {
                  if (index === i) {
                    return {
                      ...item,
                      list: [...item.list, defaultCareerObj],
                    };
                  }
                  return item;
                });
              }
              return [
                ...result,
                {
                  groupName: career.group,
                  list: [defaultCareerObj],
                },
              ];
            }, []),
        })),
    };
  }
}
