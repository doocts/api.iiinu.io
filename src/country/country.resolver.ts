import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => [Country], { name: 'countries' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.countryService.findAll(locale);
  }

  @Query(() => Country, { name: 'country' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.countryService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() country: Country): string {
    return country.locale === 'ja' ? country.nameJa : country.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() country: Country): string {
    return country.locale === 'ja'
      ? country.descriptionJa ?? ''
      : country.descriptionEn ?? '';
  }
}
