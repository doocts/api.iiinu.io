import { Resolver, Query, Args } from '@nestjs/graphql';
import { PatternService } from './pattern.service';
import { Pattern } from './pattern.entity';

@Resolver(() => Pattern)
export class PatternResolver {
  constructor(private readonly patternService: PatternService) {}

  @Query(() => [Pattern], { name: 'allPattern' })
  findAll() {
    return this.patternService.findAll();
  }

  @Query(() => Pattern, { name: 'pattern' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.patternService.findOne(id);
  }
}
