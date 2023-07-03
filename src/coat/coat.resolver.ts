import { Resolver, Query, Args } from '@nestjs/graphql';
import { CoatService } from './coat.service';
import { Coat } from './coat.entity';

@Resolver(() => Coat)
export class CoatResolver {
  constructor(private readonly coatService: CoatService) {}

  @Query(() => [Coat], { name: 'allCoat' })
  findAll() {
    return this.coatService.findAll();
  }

  @Query(() => Coat, { name: 'coat' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.coatService.findOne(id);
  }
}
