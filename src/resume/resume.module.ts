// import package modules
import { Module } from '@nestjs/common';

// Import global modules
// Import local modules
import { ResumeResolver } from './resume.resolver';

@Module({
  providers: [ResumeResolver],
})
export class ResumeModule {}
