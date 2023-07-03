import { Resolver, Query, Args } from '@nestjs/graphql';
import { BodyService } from './body.service';
import { Body } from './body.entity';

@Resolver(() => Body)
export class BodyResolver {
  constructor(private readonly bodyService: BodyService) {}

  @Query(() => [Body], { name: 'allBody' })
  findAll() {
    return this.bodyService.findAll();
  }

  @Query(() => Body, { name: 'body' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.bodyService.findOne(id);
  }
}
