import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => [Country], { name: 'countries' })
  findAll() {
    return this.countryService.findAll();
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.countryService.findOne(id);
  }
}
