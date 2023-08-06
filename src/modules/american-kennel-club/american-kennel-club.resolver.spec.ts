import { Test, TestingModule } from '@nestjs/testing';
import { AmericanKennelClubResolver } from 'src/modules/american-kennel-club';

describe('AmericanKennelClubResolver', () => {
  let resolver: AmericanKennelClubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmericanKennelClubResolver],
    }).compile();

    resolver = module.get<AmericanKennelClubResolver>(
      AmericanKennelClubResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
