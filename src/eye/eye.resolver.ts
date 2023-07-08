import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { EyeService } from './eye.service';
import { Eye } from './eye.entity';

@Resolver(() => Eye)
export class EyeResolver {
  constructor(private readonly eyeService: EyeService) {}

  @Query(() => [Eye], { name: 'eyes' })
  findAll() {
    return this.eyeService.findAll();
  }

  @Query(() => Eye, { name: 'eye' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eyeService.findOne(id);
  }
}
