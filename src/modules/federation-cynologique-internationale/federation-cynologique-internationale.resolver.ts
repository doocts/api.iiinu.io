import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import {
  FederationCynologiqueInternationaleEntity,
  FederationCynologiqueInternationaleService,
} from '../federation-cynologique-internationale';
import { localizeEntity } from '../../utils';

@Resolver(() => FederationCynologiqueInternationaleEntity)
export class FederationCynologiqueInternationaleResolver {
  constructor(
    @Inject(forwardRef(() => FederationCynologiqueInternationaleService))
    private readonly federationCynologiqueInternationaleService: FederationCynologiqueInternationaleService,
  ) {}

  @Query(() => [FederationCynologiqueInternationaleEntity], {
    name: 'federationCynologiqueInternationales',
  })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.federationCynologiqueInternationaleService.findAll(locale);
  }

  @Query(() => FederationCynologiqueInternationaleEntity, {
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
    federationCynologiqueInternationale: FederationCynologiqueInternationaleEntity,
  ): string {
    return localizeEntity(
      federationCynologiqueInternationale,
      'name',
      federationCynologiqueInternationale.locale,
    );
  }

  @ResolveField('description')
  getDescription(
    @Parent()
    federationCynologiqueInternationale: FederationCynologiqueInternationaleEntity,
  ): string {
    return localizeEntity(
      federationCynologiqueInternationale,
      'description',
      federationCynologiqueInternationale.locale,
    );
  }
}
