import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { TailService } from './tail.service';
import { Tail } from './tail.entity';

@Resolver(() => Tail)
export class TailResolver {
  constructor(private readonly tailService: TailService) {}

  @Query(() => [Tail], { name: 'tails' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.tailService.findAll(locale);
  }

  @Query(() => Tail, { name: 'tail' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.tailService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() tail: Tail): string {
    return tail.locale === 'ja' ? tail.nameJa : tail.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() tail: Tail): string {
    return tail.locale === 'ja'
      ? tail.descriptionJa ?? ''
      : tail.descriptionEn ?? '';
  }
}
