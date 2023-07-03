import { Resolver, Query, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => [Country], { name: 'allCountry' })
  findAll() {
    return this.countryService.findAll();
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.countryService.findOne(id);
  }
}
