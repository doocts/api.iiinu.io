import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { TailService } from './tail.service';
import { Tail } from './tail.entity';

@Resolver(() => Tail)
export class TailResolver {
  constructor(private readonly tailService: TailService) {}

  @Query(() => [Tail], { name: 'tails' })
  findAll() {
    return this.tailService.findAll();
  }

  @Query(() => Tail, { name: 'tail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tailService.findOne(id);
  }
}
