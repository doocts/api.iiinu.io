import { Country } from './country.entity';

describe('Country', () => {
  it('should be defined', () => {
    expect(new Country()).toBeDefined();
  });
});
