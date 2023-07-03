import { Resolver, Query, Args } from '@nestjs/graphql';
import { CanadianKennelClubService } from './canadianKennelClub.service';
import { CanadianKennelClub } from './canadianKennelClub.entity';

@Resolver(() => CanadianKennelClub)
export class CanadianKennelClubResolver {
  constructor(private readonly ckcService: CanadianKennelClubService) {}

  @Query(() => [CanadianKennelClub], { name: 'allCKC' })
  findAll() {
    return this.ckcService.findAll();
  }

  @Query(() => CanadianKennelClub, { name: 'ckc' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.ckcService.findOne(id);
  }
}
