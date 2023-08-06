import { Test, TestingModule } from '@nestjs/testing';
import { TheKennelClubResolver } from 'src/modules/the-kennel-club';

describe('TheKennelClubResolver', () => {
  let resolver: TheKennelClubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheKennelClubResolver],
    }).compile();

    resolver = module.get<TheKennelClubResolver>(TheKennelClubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
