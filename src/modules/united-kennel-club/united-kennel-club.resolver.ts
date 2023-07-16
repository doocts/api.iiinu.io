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
  UnitedKennelClubEntity,
  UnitedKennelClubService,
} from '../united-kennel-club';
import { localizeEntity } from '../../utils';

@Resolver(() => UnitedKennelClubEntity)
export class UnitedKennelClubResolver {
  constructor(
    @Inject(forwardRef(() => UnitedKennelClubService))
    private readonly unitedKennelClubService: UnitedKennelClubService,
  ) {}

  @Query(() => [UnitedKennelClubEntity], { name: 'unitedKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.unitedKennelClubService.findAll(locale);
  }

  @Query(() => UnitedKennelClubEntity, { name: 'unitedKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.unitedKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() unitedKennelClub: UnitedKennelClubEntity): string {
    return localizeEntity(unitedKennelClub, 'name', unitedKennelClub.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() unitedKennelClub: UnitedKennelClubEntity): string {
    return localizeEntity(
      unitedKennelClub,
      'description',
      unitedKennelClub.locale,
    );
  }
}
