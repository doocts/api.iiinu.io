import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Color } from './color.entity';
import { ColorService } from './color.service';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private colorService: ColorService) {}

  @Query(() => [Color], { name: 'colors' })
  findAll() {
    return this.colorService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.findOne(id);
  }
}
