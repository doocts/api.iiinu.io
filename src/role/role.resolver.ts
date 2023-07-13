import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role], { name: 'roles' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.roleService.findAll(locale);
  }

  @Query(() => Role, { name: 'role' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.roleService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() role: Role): string {
    return role.locale === 'ja' ? role.nameJa : role.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() role: Role): string {
    return role.locale === 'ja'
      ? role.descriptionJa ?? ''
      : role.descriptionEn ?? '';
  }
}
