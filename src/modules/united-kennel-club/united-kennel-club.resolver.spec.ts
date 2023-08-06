import { Test, TestingModule } from '@nestjs/testing';
import { UnitedKennelClubResolver } from 'src/modules/united-kennel-club';

describe('UnitedKennelClubResolver', () => {
  let resolver: UnitedKennelClubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitedKennelClubResolver],
    }).compile();

    resolver = module.get<UnitedKennelClubResolver>(UnitedKennelClubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
