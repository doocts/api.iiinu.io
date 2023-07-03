import { Resolver, Query, Args } from '@nestjs/graphql';
import { BreedService } from './breed.service';
import { Breed } from './breed.entity';

@Resolver(() => Breed)
export class BreedResolver {
  constructor(private readonly breedService: BreedService) {}

  @Query(() => [Breed], { name: 'allBreed' })
  findAll() {
    return this.breedService.findAll();
  }

  @Query(() => Breed, { name: 'breed' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.breedService.findOne(id);
  }
}
