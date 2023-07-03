import { Resolver, Query, Args } from '@nestjs/graphql';
import { TailService } from './tail.service';
import { Tail } from './tail.entity';

@Resolver(() => Tail)
export class TailResolver {
  constructor(private readonly tailService: TailService) {}

  @Query(() => [Tail], { name: 'allTail' })
  findAll() {
    return this.tailService.findAll();
  }

  @Query(() => Tail, { name: 'tail' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.tailService.findOne(id);
  }
}
