import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CanadianKennelClubService } from './canadianKennelClub.service';
import { CanadianKennelClub } from './canadianKennelClub.entity';

@Resolver(() => CanadianKennelClub)
export class CanadianKennelClubResolver {
  constructor(
    private readonly canadianKennelClubService: CanadianKennelClubService,
  ) {}

  @Query(() => [CanadianKennelClub], { name: 'canadianKennelClubs' })
  findAll() {
    return this.canadianKennelClubService.findAll();
  }

  @Query(() => CanadianKennelClub, { name: 'canadianKennelClub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.canadianKennelClubService.findOne(id);
  }
}
