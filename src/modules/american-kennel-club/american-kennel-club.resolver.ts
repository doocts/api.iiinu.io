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
  AmericanKennelClubEntity,
  AmericanKennelClubService,
} from '../american-kennel-club';
import { localizeEntity } from '../../utils';

@Resolver(() => AmericanKennelClubEntity)
export class AmericanKennelClubResolver {
  constructor(
    @Inject(forwardRef(() => AmericanKennelClubService))
    private readonly americanKennelClubService: AmericanKennelClubService,
  ) {}

  @Query(() => [AmericanKennelClubEntity], { name: 'americanKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.americanKennelClubService.findAll(locale);
  }

  @Query(() => AmericanKennelClubEntity, { name: 'americanKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.americanKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() americanKennelClub: AmericanKennelClubEntity): string {
    return localizeEntity(
      americanKennelClub,
      'name',
      americanKennelClub.locale,
    );
  }

  @ResolveField('description')
  getDescription(
    @Parent() americanKennelClub: AmericanKennelClubEntity,
  ): string {
    return localizeEntity(
      americanKennelClub,
      'description',
      americanKennelClub.locale,
    );
  }
}
