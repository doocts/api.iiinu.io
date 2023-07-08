import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UnitedKennelClubService } from './unitedKennelClub.service';
import { UnitedKennelClub } from './unitedKennelClub.entity';

@Resolver(() => UnitedKennelClub)
export class UnitedKennelClubResolver {
  constructor(
    private readonly unitedKennelClubService: UnitedKennelClubService,
  ) {}

  @Query(() => [UnitedKennelClub], { name: 'unitedKennelClubs' })
  findAll() {
    return this.unitedKennelClubService.findAll();
  }

  @Query(() => UnitedKennelClub, { name: 'unitedKennelClub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unitedKennelClubService.findOne(id);
  }
}
