import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { CoatService } from './coat.service';
import { Coat } from './coat.entity';

@Resolver(() => Coat)
export class CoatResolver {
  constructor(private readonly coatService: CoatService) {}

  @Query(() => [Coat], { name: 'coats' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.coatService.findAll(locale);
  }

  @Query(() => Coat, { name: 'coat' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.coatService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() coat: Coat): string {
    return coat.locale === 'ja' ? coat.nameJa : coat.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() coat: Coat): string {
    return coat.locale === 'ja'
      ? coat.descriptionJa ?? ''
      : coat.descriptionEn ?? '';
  }
}
