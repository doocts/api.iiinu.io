import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { NewZealandKennelClubService } from './newZealandKennelClub.service';
import { NewZealandKennelClub } from './newZealandKennelClub.entity';

@Resolver(() => NewZealandKennelClub)
export class NewZealandKennelClubResolver {
  constructor(
    private readonly newZealandKennelClubService: NewZealandKennelClubService,
  ) {}

  @Query(() => [NewZealandKennelClub], { name: 'newZealandKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.newZealandKennelClubService.findAll(locale);
  }

  @Query(() => NewZealandKennelClub, { name: 'newZealandKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.newZealandKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() newZealandKennelClub: NewZealandKennelClub): string {
    return newZealandKennelClub.locale === 'ja'
      ? newZealandKennelClub.nameJa
      : newZealandKennelClub.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() newZealandKennelClub: NewZealandKennelClub): string {
    return newZealandKennelClub.locale === 'ja'
      ? newZealandKennelClub.descriptionJa ?? ''
      : newZealandKennelClub.descriptionEn ?? '';
  }
}
