import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { TheKennelClubEntity, TheKennelClubService } from '../the-kennel-club';
import { localizeEntity } from '../../utils';

@Resolver(() => TheKennelClubEntity)
export class TheKennelClubResolver {
  constructor(
    @Inject(forwardRef(() => TheKennelClubService))
    private readonly theKennelClubService: TheKennelClubService,
  ) {}

  @Query(() => [TheKennelClubEntity], { name: 'theKennelClubs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.theKennelClubService.findAll(locale);
  }

  @Query(() => TheKennelClubEntity, { name: 'theKennelClub' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.theKennelClubService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() theKennelClub: TheKennelClubEntity): string {
    return localizeEntity(theKennelClub, 'name', theKennelClub.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() theKennelClub: TheKennelClubEntity): string {
    return localizeEntity(theKennelClub, 'description', theKennelClub.locale);
  }
}
