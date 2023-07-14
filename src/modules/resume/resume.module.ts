import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResumeInfo } from '@/entities/resume_info/resume_info.entity';

import { ResumeResolver } from './resume.resolver';
import { ResumeService } from './resume.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResumeInfo])],
  providers: [ResumeResolver, ResumeService],
  exports: [ResumeResolver, ResumeService],
})
export class ResumeModule {}
