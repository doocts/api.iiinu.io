import { Test, TestingModule } from '@nestjs/testing';
import { PatternResolver } from 'src/modules/pattern';

describe('PatternResolver', () => {
  let resolver: PatternResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatternResolver],
    }).compile();

    resolver = module.get<PatternResolver>(PatternResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
