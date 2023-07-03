import { Resolver, Query, Args } from '@nestjs/graphql';
import { AmericanKennelClubService } from './americanKennelClub.service';
import { AmericanKennelClub } from './americanKennelClub.entity';

@Resolver(() => AmericanKennelClub)
export class AmericanKennelClubResolver {
  constructor(private readonly akcService: AmericanKennelClubService) {}

  @Query(() => [AmericanKennelClub], { name: 'allAKC' })
  findAll() {
    return this.akcService.findAll();
  }

  @Query(() => AmericanKennelClub, { name: 'akc' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.akcService.findOne(id);
  }
}
