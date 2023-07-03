import { Resolver, Query, Args } from '@nestjs/graphql';
import { Color } from './color.entity';
import { ColorService } from './color.service';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private colorService: ColorService) {}

  @Query(() => [Color], { name: 'allColor' })
  findAll() {
    return this.colorService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.colorService.findOne(id);
  }
}
