import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { CoatEntity, CoatService } from '../coat';
import { localizeEntity } from '../../utils';

@Resolver(() => CoatEntity)
export class CoatResolver {
  constructor(
    @Inject(forwardRef(() => CoatService))
    private readonly coatService: CoatService,
  ) {}

  @Query(() => [CoatEntity], { name: 'coats' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.coatService.findAll(locale);
  }

  @Query(() => CoatEntity, { name: 'coat' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.coatService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() coat: CoatEntity): string {
    return localizeEntity(coat, 'name', coat.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() coat: CoatEntity): string {
    return localizeEntity(coat, 'description', coat.locale);
  }
}
