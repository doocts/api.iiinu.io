import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { FederationCynologiqueInternationaleService } from './federationCynologiqueInternationale.service';
import { FederationCynologiqueInternationale } from './federationCynologiqueInternationale.entity';

@Resolver(() => FederationCynologiqueInternationale)
export class FederationCynologiqueInternationaleResolver {
  constructor(
    private readonly federationCynologiqueInternationaleService: FederationCynologiqueInternationaleService,
  ) {}

  @Query(() => [FederationCynologiqueInternationale], {
    name: 'federationCynologiqueInternationales',
  })
  findAll() {
    return this.federationCynologiqueInternationaleService.findAll();
  }

  @Query(() => FederationCynologiqueInternationale, {
    name: 'federationCynologiqueInternationale',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.federationCynologiqueInternationaleService.findOne(id);
  }
}
