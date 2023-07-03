import { Resolver, Query, Args } from '@nestjs/graphql';
import { TheKennelClubService } from './theKennelClub.service';
import { TheKennelClub } from './theKennelClub.entity';

@Resolver(() => TheKennelClub)
export class TheKennelClubResolver {
  constructor(private readonly rkcService: TheKennelClubService) {}

  @Query(() => [TheKennelClub], { name: 'allRKC' })
  findAll() {
    return this.rkcService.findAll();
  }

  @Query(() => TheKennelClub, { name: 'rkc' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.rkcService.findOne(id);
  }
}
