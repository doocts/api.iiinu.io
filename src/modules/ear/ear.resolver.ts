import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { EarEntity, EarService } from '../ear';
import { localizeEntity } from '../../utils';

@Resolver(() => EarEntity)
export class EarResolver {
  constructor(
    @Inject(forwardRef(() => EarService))
    private readonly earService: EarService,
  ) {}

  @Query(() => [EarEntity], { name: 'ears' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.earService.findAll(locale);
  }

  @Query(() => EarEntity, { name: 'ear' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.earService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() ear: EarEntity): string {
    return localizeEntity(ear, 'name', ear.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() ear: EarEntity): string {
    return localizeEntity(ear, 'description', ear.locale);
  }
}
