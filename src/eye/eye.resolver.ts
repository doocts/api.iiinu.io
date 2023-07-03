import { Resolver, Query, Args } from '@nestjs/graphql';
import { EyeService } from './eye.service';
import { Eye } from './eye.entity';

@Resolver(() => Eye)
export class EyeResolver {
  constructor(private readonly eyeService: EyeService) {}

  @Query(() => [Eye], { name: 'allEye' })
  findAll() {
    return this.eyeService.findAll();
  }

  @Query(() => Eye, { name: 'eye' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.eyeService.findOne(id);
  }
}
