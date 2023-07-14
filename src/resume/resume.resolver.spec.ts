import { Test, TestingModule } from '@nestjs/testing';

import { ResumeModule } from './resume.module';
import { ResumeResolver } from './resume.resolver';
import { ResumeService } from './resume.service';

describe('ResumeResolver', () => {
  let resolver: ResumeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ResumeModule],
      providers: [ResumeResolver],
    }).compile();

    resolver = module.get<ResumeResolver>(ResumeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(resolver.Resume_get()).resolves.toBeDefined();
  });
});
