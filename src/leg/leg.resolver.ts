import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { LegService } from './leg.service';
import { Leg } from './leg.entity';

@Resolver(() => Leg)
export class LegResolver {
  constructor(private readonly legService: LegService) {}

  @Query(() => [Leg], { name: 'legs' })
  findAll() {
    return this.legService.findAll();
  }

  @Query(() => Leg, { name: 'leg' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.legService.findOne(id);
  }
}
