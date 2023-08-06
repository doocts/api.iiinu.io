import { Test, TestingModule } from '@nestjs/testing';
import { BreedResolver } from 'src/modules/breed';

describe('BreedResolver', () => {
  let resolver: BreedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedResolver],
    }).compile();

    resolver = module.get<BreedResolver>(BreedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
