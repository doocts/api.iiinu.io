import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { TheKennelClubService } from './theKennelClub.service';
import { TheKennelClub } from './theKennelClub.entity';

@Resolver(() => TheKennelClub)
export class TheKennelClubResolver {
  constructor(private readonly theKennelClubService: TheKennelClubService) {}

  @Query(() => [TheKennelClub], { name: 'theKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.theKennelClubService.findAll(locale);
  }

  @Query(() => TheKennelClub, { name: 'theKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.theKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() theKennelClub: TheKennelClub): string {
    return theKennelClub.locale === 'ja'
      ? theKennelClub.nameJa
      : theKennelClub.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() theKennelClub: TheKennelClub): string {
    return theKennelClub.locale === 'ja'
      ? theKennelClub.descriptionJa ?? ''
      : theKennelClub.descriptionEn ?? '';
  }
}
