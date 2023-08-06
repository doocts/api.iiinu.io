import { Test, TestingModule } from '@nestjs/testing';
import { AustralianNationalKennelCouncilResolver } from 'src/modules/australian-national-kennel-council';

describe('BreedResolver', () => {
  let resolver: AustralianNationalKennelCouncilResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AustralianNationalKennelCouncilResolver],
    }).compile();

    resolver = module.get<AustralianNationalKennelCouncilResolver>(
      AustralianNationalKennelCouncilResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
