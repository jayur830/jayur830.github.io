import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { omit, pick } from 'lodash';
import { DataSource, Repository } from 'typeorm';

import { Transactional } from '@/decorators/transactional/transactional.decorator';
import { CompanyLogo } from '@/entities/company_logo.entity';
import { ResumeHistory } from '@/entities/resume_history.entity';
import { ResumeHistoryDetail } from '@/entities/resume_history_detail.entity';
import { ResumeInfo } from '@/entities/resume_info.entity';
import { ImageMetadataInput } from '@/vo/image-metadata.input';
import { ImageMetadata } from '@/vo/image-metadata.vo';
import { Resume } from '@/vo/resume.vo';
import { UpdateCompanyInput } from '@/vo/update-company.input';
import { UpdateCompanyPayload } from '@/vo/update-company.payload';
import { UpdateHistoryDetailInput } from '@/vo/update-history-detail.input';
import { UpdateHistoryDetailPayload } from '@/vo/update-history-detail.payload';
import { UpdateInfoInput } from '@/vo/update-info.input';
import { UpdateInfoPayload } from '@/vo/update-info.payload';

@Injectable()
export class ResumeService {
  private readonly logger = new Logger(ResumeService.name);

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(ResumeInfo) private readonly resumeInfoRepository: Repository<ResumeInfo>,
    @InjectRepository(ResumeHistory) private readonly resumeHistoryRepository: Repository<ResumeHistory>,
    @InjectRepository(ResumeHistoryDetail) private readonly resumeHistoryDetailRepository: Repository<ResumeHistoryDetail>,
    @InjectRepository(CompanyLogo) private readonly companyLogoRepository: Repository<CompanyLogo>,
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

  // @Transactional()
  async updateInfo(input: UpdateInfoInput): Promise<UpdateInfoPayload> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const repository = queryRunner.manager.withRepository(this.resumeInfoRepository);
      const queryBuilder = repository.createQueryBuilder();
      await queryBuilder.update().set(input).where('id = :id', { id: 1 }).execute();
      const result = await queryBuilder.where('id = :id', { id: 1 }).getOne();
      await queryRunner.commitTransaction();
      return pick(result, 'title', 'github');
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async updateHistoryDetail(input: UpdateHistoryDetailInput): Promise<UpdateHistoryDetailPayload> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const repository = queryRunner.manager.withRepository(this.resumeHistoryDetailRepository);
      const queryBuilder = repository.createQueryBuilder();
      await queryBuilder.update().set(omit(input, 'historyDetailId')).where('id = :id', { id: input.historyDetailId }).execute();
      const result = await queryBuilder.where('id = :id', { id: input.historyDetailId }).getOne();
      await queryRunner.commitTransaction();
      return {
        ...omit(result, 'id'),
        historyDetailId: result.id,
      };
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async updateCompanyInfo(input: UpdateCompanyInput): Promise<UpdateCompanyPayload> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const repository = queryRunner.manager.withRepository(this.resumeHistoryRepository);
      const queryBuilder = repository.createQueryBuilder('r');
      await queryBuilder.update().set(omit(input, 'companyId')).where('id = :id', { id: input.companyId }).execute();
      const result = await queryBuilder
        .innerJoinAndSelect('r.logo', 'l')
        .where('r.id = :id', { id: +(input.companyId || '0') })
        .getOne();
      await queryRunner.commitTransaction();
      return {
        ...result,
        companyId: input.companyId,
        logo: {
          ...result.logo,
          logoId: `${result.logo.id || 0}`,
        },
      };
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async updateCompanyLogo(input: ImageMetadataInput): Promise<ImageMetadata> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const repository = queryRunner.manager.withRepository(this.companyLogoRepository);
      await repository.createQueryBuilder().update().set(omit(input, 'logoId')).where('id = :id', { id: input.logoId }).execute();
      const result = await repository.findOneBy({ id: +(input.logoId || '0') });
      const returnValue = { ...omit(result, 'id'), logoId: `${result.id}` };
      await queryRunner.commitTransaction();
      return returnValue;
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
