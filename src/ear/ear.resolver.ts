import { Resolver, Query, Args } from '@nestjs/graphql';
import { EarService } from './ear.service';
import { Ear } from './ear.entity';

@Resolver(() => Ear)
export class EarResolver {
  constructor(private readonly earService: EarService) {}

  @Query(() => [Ear], { name: 'allEar' })
  findAll() {
    return this.earService.findAll();
  }

  @Query(() => Ear, { name: 'ear' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.earService.findOne(id);
  }
}
