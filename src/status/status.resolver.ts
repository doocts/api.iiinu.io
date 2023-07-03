import { Resolver, Query, Args } from '@nestjs/graphql';
import { StatusService } from './status.service';
import { Status } from './status.entity';

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => [Status], { name: 'allStatus' })
  findAll() {
    return this.statusService.findAll();
  }

  @Query(() => Status, { name: 'status' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.statusService.findOne(id);
  }
}
