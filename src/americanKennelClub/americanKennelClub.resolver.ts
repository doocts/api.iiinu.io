import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AmericanKennelClubService } from './americanKennelClub.service';
import { AmericanKennelClub } from './americanKennelClub.entity';

@Resolver(() => AmericanKennelClub)
export class AmericanKennelClubResolver {
  constructor(
    private readonly amerikanKennelClubService: AmericanKennelClubService,
  ) {}

  @Query(() => [AmericanKennelClub], { name: 'amerikanKennelClubs' })
  findAll() {
    return this.amerikanKennelClubService.findAll();
  }

  @Query(() => AmericanKennelClub, { name: 'amerikanKennelClub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.amerikanKennelClubService.findOne(id);
  }
}
