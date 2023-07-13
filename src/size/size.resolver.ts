import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { SizeService } from './size.service';
import { Size } from './size.entity';

@Resolver(() => Size)
export class SizeResolver {
  constructor(private readonly sizeService: SizeService) {}

  @Query(() => [Size], { name: 'sizes' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.sizeService.findAll(locale);
  }

  @Query(() => Size, { name: 'size' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.sizeService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() size: Size): string {
    return size.locale === 'ja' ? size.nameJa : size.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() size: Size): string {
    return size.locale === 'ja'
      ? size.descriptionJa ?? ''
      : size.descriptionEn ?? '';
  }
}
