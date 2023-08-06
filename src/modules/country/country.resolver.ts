import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { CountryEntity, CountryService } from 'src/modules/country';
import { localizeEntity } from 'src/utils';

@Resolver(() => CountryEntity)
export class CountryResolver {
  constructor(
    @Inject(forwardRef(() => CountryService))
    private readonly countryService: CountryService,
  ) {}

  @Query(() => [CountryEntity], { name: 'countries' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.countryService.findAll(locale);
  }

  @Query(() => CountryEntity, { name: 'country' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.countryService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() country: CountryEntity): string {
    return localizeEntity(country, 'name', country.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() country: CountryEntity): string {
    return localizeEntity(country, 'description', country.locale);
  }
}
