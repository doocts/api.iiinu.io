import { BreedEntity } from 'src/modules/breed';

describe('Breed', () => {
  it('should be defined', () => {
    expect(new BreedEntity()).toBeDefined();
  });
});
