import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CompanyLogo } from '@/entities/company_logo.entity';
import { ResumeHistory } from '@/entities/resume_history.entity';
import { ResumeInfo } from '@/entities/resume_info.entity';

import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResumeService,
        {
          provide: getRepositoryToken(ResumeInfo),
          useValue: { find: jest.fn().mockResolvedValue([new ResumeInfo()]) },
        },
        {
          provide: getRepositoryToken(ResumeHistory),
          useValue: { find: jest.fn().mockResolvedValue([new ResumeHistory()]) },
        },
        {
          provide: getRepositoryToken(CompanyLogo),
          useValue: { find: jest.fn().mockResolvedValue([new CompanyLogo()]) },
        },
      ],
    }).compile();

    service = module.get<ResumeService>(ResumeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
