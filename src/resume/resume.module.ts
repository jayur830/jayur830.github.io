// import package modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Import global modules
import { Resume, ResumeSchema } from '@/models/resume.schema';

// Import local modules
import { ResumeResolver } from './resume.resolver';
import { ResumeService } from './resume.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Resume.name,
        schema: ResumeSchema,
      },
    ]),
  ],
  providers: [ResumeResolver, ResumeService],
})
export class ResumeModule {}
