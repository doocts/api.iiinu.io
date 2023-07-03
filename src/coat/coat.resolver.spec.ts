import { Test, TestingModule } from '@nestjs/testing';
import { CoatResolver } from './coat.resolver';

describe('CoatResolver', () => {
  let resolver: CoatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoatResolver],
    }).compile();

    resolver = module.get<CoatResolver>(CoatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
