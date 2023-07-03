import { Resolver, Query, Args } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role], { name: 'allRole' })
  findAll() {
    return this.roleService.findAll();
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.roleService.findOne(id);
  }
}
