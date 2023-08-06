import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import {
  CanadianKennelClubEntity,
  CanadianKennelClubService,
} from 'src/modules/canadian-kennel-club';
import { localizeEntity } from 'src/utils';

@Resolver(() => CanadianKennelClubEntity)
export class CanadianKennelClubResolver {
  constructor(
    @Inject(forwardRef(() => CanadianKennelClubService))
    private readonly canadianKennelClubService: CanadianKennelClubService,
  ) {}

  @Query(() => [CanadianKennelClubEntity], { name: 'canadianKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.canadianKennelClubService.findAll(locale);
  }

  @Query(() => CanadianKennelClubEntity, { name: 'canadianKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.canadianKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() canadianKennelClub: CanadianKennelClubEntity): string {
    return localizeEntity(
      canadianKennelClub,
      'name',
      canadianKennelClub.locale,
    );
  }

  @ResolveField('description')
  getDescription(
    @Parent() canadianKennelClub: CanadianKennelClubEntity,
  ): string {
    return localizeEntity(
      canadianKennelClub,
      'description',
      canadianKennelClub.locale,
    );
  }
}
