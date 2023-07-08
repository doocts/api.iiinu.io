import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { NewZealandKennelClubService } from './newZealandKennelClub.service';
import { NewZealandKennelClub } from './newZealandKennelClub.entity';

@Resolver(() => NewZealandKennelClub)
export class NewZealandKennelClubResolver {
  constructor(
    private readonly newZealandKennelclubService: NewZealandKennelClubService,
  ) {}

  @Query(() => [NewZealandKennelClub], { name: 'newZealandKennelclubs' })
  findAll() {
    return this.newZealandKennelclubService.findAll();
  }

  @Query(() => NewZealandKennelClub, { name: 'newZealandKennelclub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.newZealandKennelclubService.findOne(id);
  }
}
