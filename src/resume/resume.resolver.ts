import { Query, Resolver } from '@nestjs/graphql';

import { ResumeVO } from '@/vo/resume.vo';

import { ResumeService } from './resume.service';

@Resolver(() => ResumeVO)
export class ResumeResolver {
  constructor(private readonly resumeService: ResumeService) {}

  @Query(() => ResumeVO)
  async Resume_get() {
    return this.resumeService.findOne();
  }
}
