// import package modules
import { Query, Resolver } from '@nestjs/graphql';

import { Resume } from '@/models/resume.schema';

// Import global modules
// Import local modules
import { ResumeService } from './resume.service';

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private readonly resumeService: ResumeService) {}

  @Query(() => String)
  hello() {
    return 'hello';
  }

  @Query(() => Resume)
  async Resume_get() {
    return this.resumeService.findOne();
  }
}
