import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { TailEntity, TailService } from '../tail';
import { localizeEntity } from '../../utils';

@Resolver(() => TailEntity)
export class TailResolver {
  constructor(
    @Inject(forwardRef(() => TailService))
    private readonly tailService: TailService,
  ) {}

  @Query(() => [TailEntity], { name: 'tails' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.tailService.findAll(locale);
  }

  @Query(() => TailEntity, { name: 'tail' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.tailService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() tail: TailEntity): string {
    return localizeEntity(tail, 'name', tail.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() tail: TailEntity): string {
    return localizeEntity(tail, 'description', tail.locale);
  }
}
