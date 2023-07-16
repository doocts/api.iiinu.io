import { Test, TestingModule } from '@nestjs/testing';
import { HeadResolver } from './head.resolver';

describe('HeadResolver', () => {
  let resolver: HeadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeadResolver],
    }).compile();

    resolver = module.get<HeadResolver>(HeadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
