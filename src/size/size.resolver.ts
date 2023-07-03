import { Resolver, Query, Args } from '@nestjs/graphql';
import { SizeService } from './size.service';
import { Size } from './size.entity';

@Resolver(() => Size)
export class SizeResolver {
  constructor(private readonly sizeService: SizeService) {}

  @Query(() => [Size], { name: 'allSize' })
  findAll() {
    return this.sizeService.findAll();
  }

  @Query(() => Size, { name: 'size' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.sizeService.findOne(id);
  }
}
