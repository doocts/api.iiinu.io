import { Test, TestingModule } from '@nestjs/testing';
import { EyeResolver } from 'src/modules/eye';

describe('EyeResolver', () => {
  let resolver: EyeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EyeResolver],
    }).compile();

    resolver = module.get<EyeResolver>(EyeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
