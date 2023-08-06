import { Test, TestingModule } from '@nestjs/testing';
import { StatusResolver } from 'src/modules/status';

describe('StatusResolver', () => {
  let resolver: StatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusResolver],
    }).compile();

    resolver = module.get<StatusResolver>(StatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
