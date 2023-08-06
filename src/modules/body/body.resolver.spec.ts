import { Test, TestingModule } from '@nestjs/testing';
import { BodyResolver } from 'src/modules/body';

describe('BodyResolver', () => {
  let resolver: BodyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyResolver],
    }).compile();

    resolver = module.get<BodyResolver>(BodyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
