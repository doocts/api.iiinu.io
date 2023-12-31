import { Test, TestingModule } from '@nestjs/testing';
import { FederationCynologiqueInternationaleResolver } from 'src/modules/federation-cynologique-internationale';

describe('FederationCynologiqueInternationaleResolver', () => {
  let resolver: FederationCynologiqueInternationaleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationCynologiqueInternationaleResolver],
    }).compile();

    resolver = module.get<FederationCynologiqueInternationaleResolver>(
      FederationCynologiqueInternationaleResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
