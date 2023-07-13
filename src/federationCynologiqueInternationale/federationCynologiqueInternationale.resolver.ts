import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
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
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.federationCynologiqueInternationaleService.findAll(locale);
  }

  @Query(() => FederationCynologiqueInternationale, {
    name: 'federationCynologiqueInternationale',
  })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.federationCynologiqueInternationaleService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(
    @Parent()
    federationCynologiqueInternationale: FederationCynologiqueInternationale,
  ): string {
    return federationCynologiqueInternationale.locale === 'ja'
      ? federationCynologiqueInternationale.nameJa
      : federationCynologiqueInternationale.nameEn;
  }

  @ResolveField('description')
  getDescription(
    @Parent()
    federationCynologiqueInternationale: FederationCynologiqueInternationale,
  ): string {
    return federationCynologiqueInternationale.locale === 'ja'
      ? federationCynologiqueInternationale.descriptionJa ?? ''
      : federationCynologiqueInternationale.descriptionEn ?? '';
  }
}
