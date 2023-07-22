import { CountryEntity } from './country.entity';

describe('Country', () => {
  it('should be defined', () => {
    expect(new CountryEntity()).toBeDefined();
  });
});
