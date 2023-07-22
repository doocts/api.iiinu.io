import { BreedEntity } from './breed.entity';

describe('Breed', () => {
  it('should be defined', () => {
    expect(new BreedEntity()).toBeDefined();
  });
});
