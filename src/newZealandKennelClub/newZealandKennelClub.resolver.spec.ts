import { Test, TestingModule } from '@nestjs/testing';
import { NewZealandKennelClubResolver } from './newZealandKennelClub.resolver';

describe('NewZealandKennelClubResolver', () => {
  let resolver: NewZealandKennelClubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewZealandKennelClubResolver],
    }).compile();

    resolver = module.get<NewZealandKennelClubResolver>(
      NewZealandKennelClubResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
