import { Test, TestingModule } from '@nestjs/testing';
import { EarResolver } from 'src/modules/ear';

describe('EarResolver', () => {
  let resolver: EarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EarResolver],
    }).compile();

    resolver = module.get<EarResolver>(EarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
