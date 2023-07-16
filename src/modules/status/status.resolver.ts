import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { StatusEntity, StatusService } from '../status';
import { localizeEntity } from '../../utils';

@Resolver(() => StatusEntity)
export class StatusResolver {
  constructor(
    @Inject(forwardRef(() => StatusService))
    private readonly statusService: StatusService,
  ) {}

  @Query(() => [StatusEntity], { name: 'statuses' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.statusService.findAll(locale);
  }

  @Query(() => StatusEntity, { name: 'status' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.statusService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() status: StatusEntity): string {
    return localizeEntity(status, 'name', status.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() status: StatusEntity): string {
    return localizeEntity(status, 'description', status.locale);
  }
}
