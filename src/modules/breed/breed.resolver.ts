import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { BreedService } from '../breed';
import { BreedColorService } from '../breed-color';
import { BreedEyeService } from '../breed-eye';
import { BreedPatternService } from '../breed-pattern';
import { BreedEntity } from '../breed';
import { ColorConnection } from '../color';
import { EyeConnection } from '../eye';
import { PatternConnection } from '../pattern';
import { localizeEntity, mapToEdge } from '../../utils';

@Resolver(() => BreedEntity)
export class BreedResolver {
  constructor(
    @Inject(forwardRef(() => BreedService))
    private readonly breedService: BreedService,
    @Inject(forwardRef(() => BreedColorService))
    private readonly breedColorService: BreedColorService,
    @Inject(forwardRef(() => BreedEyeService))
    private readonly breedEyeService: BreedEyeService,
    @Inject(forwardRef(() => BreedPatternService))
    private readonly breedPatternService: BreedPatternService,
  ) {}

  @Query(() => [BreedEntity], { name: 'breeds' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.breedService.findAll(locale);
  }

  @Query(() => BreedEntity, { name: 'breed' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    const breed = await this.breedService.findOne(id, locale);

    return breed;
  }

  @ResolveField('name')
  getName(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'name', breed.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'description', breed.locale);
  }

  @ResolveField('history')
  getHistory(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'history', breed.locale);
  }

  @ResolveField('features')
  getFeatures(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'features', breed.locale);
  }

  @ResolveField('traits')
  getTraits(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'traits', breed.locale);
  }

  @ResolveField('health')
  getHealth(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'health', breed.locale);
  }

  @ResolveField('notes')
  getNotes(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'notes', breed.locale);
  }

  @ResolveField('origin')
  getOrigin(@Parent() breed: BreedEntity): string {
    return localizeEntity(breed, 'origin', breed.locale);
  }

  @ResolveField(() => ColorConnection, { name: 'colors' })
  async getColorConnection(
    @Parent() breed: BreedEntity,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<ColorConnection> {
    locale = locale || breed.locale;
    const breedColors = await this.breedColorService.findByBreedId(
      breed.id,
      locale,
    );
    const edges = breedColors.map((bc: any) => mapToEdge(bc.color, locale));

    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }

  @ResolveField(() => EyeConnection, { name: 'eyes' })
  async getEyeConnection(
    @Parent() breed: BreedEntity,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<EyeConnection> {
    locale = locale || breed.locale;
    const breedEyes = await this.breedEyeService.findByBreedId(
      breed.id,
      locale,
    );
    const edges = breedEyes.map((be: any) => mapToEdge(be.eye, locale));

    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }

  @ResolveField(() => PatternConnection, { name: 'patterns' })
  async getPatternConnection(
    @Parent() breed: BreedEntity,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<PatternConnection> {
    locale = locale || breed.locale;
    const breedPatterns = await this.breedPatternService.findByBreedId(
      breed.id,
      locale,
    );
    const edges = breedPatterns.map((bp: any) => mapToEdge(bp.pattern, locale));

    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }
}
