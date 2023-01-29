// import package modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Import global modules
import { Resume, ResumeDocument } from '@/models/resume.schema';

// Import local modulessss

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>) {}

  async findOne(): Promise<any> {
    const result = await this.resumeModel.findOne().lean();
    return result;
  }
}
