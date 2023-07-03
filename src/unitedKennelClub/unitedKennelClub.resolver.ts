import { Resolver, Query, Args } from '@nestjs/graphql';
import { UnitedKennelClubService } from './unitedKennelClub.service';
import { UnitedKennelClub } from './unitedKennelClub.entity';

@Resolver(() => UnitedKennelClub)
export class UnitedKennelClubResolver {
  constructor(private readonly ukcService: UnitedKennelClubService) {}

  @Query(() => [UnitedKennelClub], { name: 'allUKC' })
  findAll() {
    return this.ukcService.findAll();
  }

  @Query(() => UnitedKennelClub, { name: 'ukc' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.ukcService.findOne(id);
  }
}
