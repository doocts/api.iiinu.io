import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { EarService } from './ear.service';
import { Ear } from './ear.entity';

@Resolver(() => Ear)
export class EarResolver {
  constructor(private readonly earService: EarService) {}

  @Query(() => [Ear], { name: 'ears' })
  findAll() {
    return this.earService.findAll();
  }

  @Query(() => Ear, { name: 'ear' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.earService.findOne(id);
  }
}
