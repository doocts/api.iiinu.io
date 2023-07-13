import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { CanadianKennelClubService } from './canadianKennelClub.service';
import { CanadianKennelClub } from './canadianKennelClub.entity';

@Resolver(() => CanadianKennelClub)
export class CanadianKennelClubResolver {
  constructor(
    private readonly canadianKennelClubService: CanadianKennelClubService,
  ) {}

  @Query(() => [CanadianKennelClub], { name: 'canadianKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.canadianKennelClubService.findAll(locale);
  }

  @Query(() => CanadianKennelClub, { name: 'canadianKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.canadianKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() canadianKennelClub: CanadianKennelClub): string {
    return canadianKennelClub.locale === 'ja'
      ? canadianKennelClub.nameJa
      : canadianKennelClub.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() canadianKennelClub: CanadianKennelClub): string {
    return canadianKennelClub.locale === 'ja'
      ? canadianKennelClub.descriptionJa ?? ''
      : canadianKennelClub.descriptionEn ?? '';
  }
}
