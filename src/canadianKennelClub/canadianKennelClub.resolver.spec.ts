import { Test, TestingModule } from '@nestjs/testing';
import { CanadianKennelClubResolver } from './canadianKennelClub.resolver';

describe('CanadianKennelClubResolver', () => {
  let resolver: CanadianKennelClubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanadianKennelClubResolver],
    }).compile();

    resolver = module.get<CanadianKennelClubResolver>(
      CanadianKennelClubResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
