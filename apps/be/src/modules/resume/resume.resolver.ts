import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthGuard } from '@/guards/auth.guard';
import { ImageMetadataInput } from '@/vo/image-metadata.input';
import { ImageMetadata } from '@/vo/image-metadata.vo';
import { Resume } from '@/vo/resume.vo';
import { UpdateCompanyInput } from '@/vo/update-company.input';
import { UpdateCompanyPayload } from '@/vo/update-company.payload';
import { UpdateHistoryDetailInput as UpdateHistoryDetailInput } from '@/vo/update-history-detail.input';
import { UpdateHistoryDetailPayload as UpdateHistoryDetailPayload } from '@/vo/update-history-detail.payload';
import { UpdateInfoInput } from '@/vo/update-info.input';
import { UpdateInfoPayload } from '@/vo/update-info.payload';

import { ResumeService } from './resume.service';

@Resolver()
export class ResumeResolver {
  constructor(private readonly resumeService: ResumeService) {}

  @Query(() => Resume, { description: '이력서' })
  async Resume_get() {
    return this.resumeService.findOne();
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UpdateInfoPayload, { description: '이력서 제목, Github 주소 수정' })
  async Resume_updateInfo(@Args({ name: 'input', type: () => UpdateInfoInput }) input: UpdateInfoInput) {
    return this.resumeService.updateInfo(input);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UpdateCompanyPayload, { description: '이력서 내 회사 정보 수정' })
  async Resume_updateCompanyInfo(@Args({ name: 'input', type: () => UpdateCompanyInput }) input: UpdateCompanyInput) {
    return this.resumeService.updateCompanyInfo(input);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => ImageMetadata, { description: '이력서 내 회사 로고 메타데이터 수정' })
  async Resume_updateCompanyLogo(@Args({ name: 'input', type: () => ImageMetadataInput }) input: ImageMetadataInput) {
    return this.resumeService.updateCompanyLogo(input);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UpdateHistoryDetailPayload, { description: '이력 서 내 경력 상세 정보 수정' })
  async Resume_updateHistoryDetail(@Args({ name: 'input', type: () => UpdateHistoryDetailInput }) input: UpdateHistoryDetailInput) {
    return this.resumeService.updateHistoryDetail(input);
  }
}
