import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { EarService } from './ear.service';
import { Ear } from './ear.entity';

@Resolver(() => Ear)
export class EarResolver {
  constructor(private readonly earService: EarService) {}

  @Query(() => [Ear], { name: 'ears' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.earService.findAll(locale);
  }

  @Query(() => Ear, { name: 'ear' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.earService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() ear: Ear): string {
    return ear.locale === 'ja' ? ear.nameJa : ear.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() ear: Ear): string {
    return ear.locale === 'ja'
      ? ear.descriptionJa ?? ''
      : ear.descriptionEn ?? '';
  }
}
