import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { BodyService } from './body.service';
import { Body } from './body.entity';

@Resolver(() => Body)
export class BodyResolver {
  constructor(private readonly bodyService: BodyService) {}

  @Query(() => [Body], { name: 'bodies' })
  findAll() {
    return this.bodyService.findAll();
  }

  @Query(() => Body, { name: 'body' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bodyService.findOne(id);
  }
}
