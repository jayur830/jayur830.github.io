import { Test, TestingModule } from '@nestjs/testing';

import { ResumeResolver } from './resume.resolver';

describe('DrResourceResolver', () => {
  let resolver: ResumeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResumeResolver],
    }).compile();

    resolver = module.get<ResumeResolver>(ResumeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
    expect(resolver.Resume_get()).resolves.toBeDefined();
  });
});
