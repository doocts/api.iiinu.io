import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { TheKennelClubService } from './theKennelClub.service';
import { TheKennelClub } from './theKennelClub.entity';

@Resolver(() => TheKennelClub)
export class TheKennelClubResolver {
  constructor(private readonly theKennelClubService: TheKennelClubService) {}

  @Query(() => [TheKennelClub], { name: 'theKennelClubs' })
  findAll() {
    return this.theKennelClubService.findAll();
  }

  @Query(() => TheKennelClub, { name: 'theKennelClub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.theKennelClubService.findOne(id);
  }
}
