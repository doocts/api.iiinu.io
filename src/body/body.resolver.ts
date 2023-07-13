import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { BodyService } from './body.service';
import { Body } from './body.entity';

@Resolver(() => Body)
export class BodyResolver {
  constructor(private readonly bodyService: BodyService) {}

  @Query(() => [Body], { name: 'bodies' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.bodyService.findAll(locale);
  }

  @Query(() => Body, { name: 'body' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.bodyService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() body: Body): string {
    return body.locale === 'ja' ? body.nameJa : body.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() body: Body): string {
    return body.locale === 'ja'
      ? body.descriptionJa ?? ''
      : body.descriptionEn ?? '';
  }
}
