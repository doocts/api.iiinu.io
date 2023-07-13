import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { StatusService } from './status.service';
import { Status } from './status.entity';

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => [Status], { name: 'statuses' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.statusService.findAll(locale);
  }

  @Query(() => Status, { name: 'status' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.statusService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() status: Status): string {
    return status.locale === 'ja' ? status.nameJa : status.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() status: Status): string {
    return status.locale === 'ja'
      ? status.descriptionJa ?? ''
      : status.descriptionEn ?? '';
  }
}
