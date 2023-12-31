import { Test, TestingModule } from '@nestjs/testing';
import { CountryResolver } from 'src/modules/country';

describe('CountryResolver', () => {
  let resolver: CountryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryResolver],
    }).compile();

    resolver = module.get<CountryResolver>(CountryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
