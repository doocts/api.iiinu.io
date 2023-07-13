import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { UnitedKennelClubService } from './unitedKennelClub.service';
import { UnitedKennelClub } from './unitedKennelClub.entity';

@Resolver(() => UnitedKennelClub)
export class UnitedKennelClubResolver {
  constructor(
    private readonly unitedKennelClubService: UnitedKennelClubService,
  ) {}

  @Query(() => [UnitedKennelClub], { name: 'unitedKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.unitedKennelClubService.findAll(locale);
  }

  @Query(() => UnitedKennelClub, { name: 'unitedKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.unitedKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() unitedKennelClub: UnitedKennelClub): string {
    return unitedKennelClub.locale === 'ja'
      ? unitedKennelClub.nameJa
      : unitedKennelClub.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() unitedKennelClub: UnitedKennelClub): string {
    return unitedKennelClub.locale === 'ja'
      ? unitedKennelClub.descriptionJa ?? ''
      : unitedKennelClub.descriptionEn ?? '';
  }
}
