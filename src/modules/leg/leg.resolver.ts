import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { LegEntity, LegService } from 'src/modules/leg';
import { localizeEntity } from 'src/utils';

@Resolver(() => LegEntity)
export class LegResolver {
  constructor(
    @Inject(forwardRef(() => LegService))
    private readonly legService: LegService,
  ) {}

  @Query(() => [LegEntity], { name: 'legs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.legService.findAll(locale);
  }

  @Query(() => LegEntity, { name: 'leg' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.legService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() leg: LegEntity): string {
    return localizeEntity(leg, 'name', leg.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() leg: LegEntity): string {
    return localizeEntity(leg, 'description', leg.locale);
  }
}
