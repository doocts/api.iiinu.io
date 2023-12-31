import { Test, TestingModule } from '@nestjs/testing';
import { TailResolver } from 'src/modules/tail';

describe('TailResolver', () => {
  let resolver: TailResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TailResolver],
    }).compile();

    resolver = module.get<TailResolver>(TailResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
