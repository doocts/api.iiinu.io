import { Resolver, Query, Args } from '@nestjs/graphql';
import { NewZealandKennelClubService } from './newZealandKennelClub.service';
import { NewZealandKennelClub } from './newZealandKennelClub.entity';

@Resolver(() => NewZealandKennelClub)
export class NewZealandKennelClubResolver {
  constructor(private readonly nzkcService: NewZealandKennelClubService) {}

  @Query(() => [NewZealandKennelClub], { name: 'allNZKC' })
  findAll() {
    return this.nzkcService.findAll();
  }

  @Query(() => NewZealandKennelClub, { name: 'nzkc' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.nzkcService.findOne(id);
  }
}
