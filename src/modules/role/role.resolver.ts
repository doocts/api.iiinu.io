import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { RoleEntity, RoleService } from '../role';
import { localizeEntity } from '../../utils';

@Resolver(() => RoleEntity)
export class RoleResolver {
  constructor(
    @Inject(forwardRef(() => RoleService))
    private readonly roleService: RoleService,
  ) {}

  @Query(() => [RoleEntity], { name: 'roles' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.roleService.findAll(locale);
  }

  @Query(() => RoleEntity, { name: 'role' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.roleService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() role: RoleEntity): string {
    return localizeEntity(role, 'name', role.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() role: RoleEntity): string {
    return localizeEntity(role, 'description', role.locale);
  }
}
