import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { SizeEntity, SizeService } from '../size';
import { localizeEntity } from '../../utils';

@Resolver(() => SizeEntity)
export class SizeResolver {
  constructor(
    @Inject(forwardRef(() => SizeService))
    private readonly sizeService: SizeService,
  ) {}

  @Query(() => [SizeEntity], { name: 'sizes' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.sizeService.findAll(locale);
  }

  @Query(() => SizeEntity, { name: 'size' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.sizeService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() size: SizeEntity): string {
    return localizeEntity(size, 'name', size.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() size: SizeEntity): string {
    return localizeEntity(size, 'description', size.locale);
  }
}
