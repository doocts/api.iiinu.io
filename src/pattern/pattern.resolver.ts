import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PatternService } from './pattern.service';
import { Pattern } from './pattern.entity';

@Resolver(() => Pattern)
export class PatternResolver {
  constructor(private readonly patternService: PatternService) {}

  @Query(() => [Pattern], { name: 'patterns' })
  findAll() {
    return this.patternService.findAll();
  }

  @Query(() => Pattern, { name: 'pattern' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patternService.findOne(id);
  }
}
