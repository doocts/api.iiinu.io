import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { BodyEntity, BodyService } from '../body';
import { localizeEntity } from '../../utils';

@Resolver(() => BodyEntity)
export class BodyResolver {
  constructor(
    @Inject(forwardRef(() => BodyService))
    private readonly bodyService: BodyService,
  ) {}

  @Query(() => [BodyEntity], { name: 'bodies' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.bodyService.findAll(locale);
  }

  @Query(() => BodyEntity, { name: 'body' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.bodyService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() body: BodyEntity): string {
    return localizeEntity(body, 'name', body.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() body: BodyEntity): string {
    return localizeEntity(body, 'description', body.locale);
  }
}
