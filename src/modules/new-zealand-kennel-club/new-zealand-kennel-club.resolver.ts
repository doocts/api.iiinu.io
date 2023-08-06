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
  NewZealandKennelClubEntity,
  NewZealandKennelClubService,
} from 'src/modules/new-zealand-kennel-club';
import { localizeEntity } from 'src/utils';

@Resolver(() => NewZealandKennelClubEntity)
export class NewZealandKennelClubResolver {
  constructor(
    @Inject(forwardRef(() => NewZealandKennelClubService))
    private readonly newZealandKennelClubService: NewZealandKennelClubService,
  ) {}

  @Query(() => [NewZealandKennelClubEntity], { name: 'newZealandKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.newZealandKennelClubService.findAll(locale);
  }

  @Query(() => NewZealandKennelClubEntity, { name: 'newZealandKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.newZealandKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() newZealandKennelClub: NewZealandKennelClubEntity): string {
    return localizeEntity(
      newZealandKennelClub,
      'name',
      newZealandKennelClub.locale,
    );
  }

  @ResolveField('description')
  getDescription(
    @Parent() newZealandKennelClub: NewZealandKennelClubEntity,
  ): string {
    return localizeEntity(
      newZealandKennelClub,
      'description',
      newZealandKennelClub.locale,
    );
  }
}
