import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CoatService } from './coat.service';
import { Coat } from './coat.entity';

@Resolver(() => Coat)
export class CoatResolver {
  constructor(private readonly coatService: CoatService) {}

  @Query(() => [Coat], { name: 'coats' })
  findAll() {
    return this.coatService.findAll();
  }

  @Query(() => Coat, { name: 'coat' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.coatService.findOne(id);
  }
}
