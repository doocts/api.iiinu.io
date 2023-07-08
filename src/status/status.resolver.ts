import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { StatusService } from './status.service';
import { Status } from './status.entity';

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => [Status], { name: 'status' })
  findAll() {
    return this.statusService.findAll();
  }

  @Query(() => Status, { name: 'status' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.statusService.findOne(id);
  }
}
