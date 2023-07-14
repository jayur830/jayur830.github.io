// import package modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import global modules
import { CompanyLogo } from '@/entities/company_logo/company_logo.entity';
import { ResumeHistory } from '@/entities/resume_history/resume_history.entity';
import { ResumeHistoryDetail } from '@/entities/resume_history_detail/resume_history_detail.entity';
import { ResumeInfo } from '@/entities/resume_info/resume_info.entity';

// Import local modules
import { ResumeResolver } from './resume.resolver';
import { ResumeService } from './resume.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResumeInfo, ResumeHistory, ResumeHistoryDetail, CompanyLogo])],
  providers: [ResumeResolver, ResumeService],
  exports: [ResumeService],
})
export class ResumeModule {}
