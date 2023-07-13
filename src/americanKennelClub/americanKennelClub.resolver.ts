import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { AmericanKennelClubService } from './americanKennelClub.service';
import { AmericanKennelClub } from './americanKennelClub.entity';

@Resolver(() => AmericanKennelClub)
export class AmericanKennelClubResolver {
  constructor(
    private readonly americanKennelClubService: AmericanKennelClubService,
  ) {}

  @Query(() => [AmericanKennelClub], { name: 'americanKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.americanKennelClubService.findAll(locale);
  }

  @Query(() => AmericanKennelClub, { name: 'americanKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.americanKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() americanKennelClub: AmericanKennelClub): string {
    return americanKennelClub.locale === 'ja'
      ? americanKennelClub.nameJa
      : americanKennelClub.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() americanKennelClub: AmericanKennelClub): string {
    return americanKennelClub.locale === 'ja'
      ? americanKennelClub.descriptionJa ?? ''
      : americanKennelClub.descriptionEn ?? '';
  }
}
