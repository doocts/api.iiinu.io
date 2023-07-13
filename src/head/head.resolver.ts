import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { HeadService } from './head.service';
import { Head } from './head.entity';

@Resolver(() => Head)
export class HeadResolver {
  constructor(private readonly headService: HeadService) {}

  @Query(() => [Head], { name: 'heads' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.headService.findAll(locale);
  }

  @Query(() => Head, { name: 'head' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.headService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() head: Head): string {
    return head.locale === 'ja' ? head.nameJa : head.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() head: Head): string {
    return head.locale === 'ja'
      ? head.descriptionJa ?? ''
      : head.descriptionEn ?? '';
  }
}
