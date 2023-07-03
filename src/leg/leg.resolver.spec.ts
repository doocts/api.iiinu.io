import { Test, TestingModule } from '@nestjs/testing';
import { LegResolver } from './leg.resolver';

describe('LegResolver', () => {
  let resolver: LegResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegResolver],
    }).compile();

    resolver = module.get<LegResolver>(LegResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
