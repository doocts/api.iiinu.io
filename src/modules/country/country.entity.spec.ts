import { CountryEntity } from 'src/modules/country';

describe('Country', () => {
  it('should be defined', () => {
    expect(new CountryEntity()).toBeDefined();
  });
});
