import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { omit } from 'lodash';
import { Repository } from 'typeorm';

import { CompanyLogo } from '@/entities/company_logo.entity';
import { ResumeHistory } from '@/entities/resume_history.entity';
import { ResumeInfo } from '@/entities/resume_info.entity';
import { ImageMetadataInput } from '@/vo/image-metadata.input';
import { ImageMetadata } from '@/vo/image-metadata.vo';
import { Resume } from '@/vo/resume.vo';
import { UpdateCompanyInput } from '@/vo/update-company.input';
import { UpdateCompanyPayload } from '@/vo/update-company.payload';
import { UpdateInfoInput } from '@/vo/update-info.input';
import { UpdateInfoPayload } from '@/vo/update-info.payload';

@Injectable()
export class ResumeService {
  private readonly logger = new Logger(ResumeService.name);

  constructor(
    @InjectRepository(ResumeInfo) private resumeInfoRepository: Repository<ResumeInfo>,
    @InjectRepository(ResumeHistory) private resumeHistoryRepository: Repository<ResumeHistory>,
    @InjectRepository(CompanyLogo) private companyLogoRepository: Repository<CompanyLogo>,
  ) {}

  async findOne(): Promise<Resume> {
    const [result] = await this.resumeInfoRepository.find({});

    return {
      ...result,
      history: result.history
        .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
        .map((item) => ({
          ...item,
          endDate: item.endDate || null,
          logo: {
            ...item.logo,
            logoId: `${item.logo.id}`,
          },
          companyId: `${item.id}`,
          careers: item.careers
            .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
            .reduce((result, career) => {
              const index = result.findIndex((d) => d.groupName === career.group);
              const defaultCareerObj = {
                careerId: career.id,
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

  async updateInfo(input: UpdateInfoInput): Promise<UpdateInfoPayload> {
    const resume = await this.resumeInfoRepository.findOneBy({ id: 1 });
    const result = await this.resumeInfoRepository.save({ ...resume, ...input } as ResumeInfo);
    return omit(result, 'id', 'history');
  }

  async updateCompanyInfo(input: UpdateCompanyInput): Promise<UpdateCompanyPayload> {
    const company = await this.resumeHistoryRepository.findOneBy({ id: +input.companyId });
    const result = await this.resumeHistoryRepository.save({ ...company, ...omit(input, 'companyId') } as ResumeHistory);
    return { ...omit(result, 'logo', 'careers'), companyId: result.id };
  }

  async updateCompanyLogo(input: ImageMetadataInput): Promise<ImageMetadata> {
    const logo = await this.companyLogoRepository.findOneBy({ id: +input.logoId });
    const result = await this.companyLogoRepository.save({ ...logo, ...omit(input, 'logoId') } as CompanyLogo);
    return { ...result, logoId: `${result.id}` };
  }
}
