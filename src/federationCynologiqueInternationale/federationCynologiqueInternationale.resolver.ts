import { Resolver, Query, Args } from '@nestjs/graphql';
import { FederationCynologiqueInternationaleService } from './federationCynologiqueInternationale.service';
import { FederationCynologiqueInternationale } from './federationCynologiqueInternationale.entity';

@Resolver(() => FederationCynologiqueInternationale)
export class FederationCynologiqueInternationaleResolver {
  constructor(
    private readonly fciService: FederationCynologiqueInternationaleService,
  ) {}

  @Query(() => [FederationCynologiqueInternationale], { name: 'allFCI' })
  findAll() {
    return this.fciService.findAll();
  }

  @Query(() => FederationCynologiqueInternationale, { name: 'fci' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.fciService.findOne(id);
  }
}
