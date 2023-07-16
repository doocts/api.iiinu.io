import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { HeadEntity, HeadService } from '../head';
import { localizeEntity } from '../../utils';

@Resolver(() => HeadEntity)
export class HeadResolver {
  constructor(
    @Inject(forwardRef(() => HeadService))
    private readonly headService: HeadService,
  ) {}

  @Query(() => [HeadEntity], { name: 'heads' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.headService.findAll(locale);
  }

  @Query(() => HeadEntity, { name: 'head' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.headService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() head: HeadEntity): string {
    return localizeEntity(head, 'name', head.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() head: HeadEntity): string {
    return localizeEntity(head, 'description', head.locale);
  }
}
