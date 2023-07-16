import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { PatternEntity, PatternService } from '../pattern';
import { BreedPatternService } from '../breed-pattern';
import { BreedConnection } from '../breed';
import { localizeEntity, mapToBreedEntity } from '../../utils';

@Resolver(() => PatternEntity)
export class PatternResolver {
  constructor(
    @Inject(forwardRef(() => PatternService))
    private readonly patternService: PatternService,
    @Inject(forwardRef(() => BreedPatternService))
    private readonly breedPatternService: BreedPatternService,
  ) {}

  @Query(() => [PatternEntity], { name: 'patterns' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.patternService.findAll(locale);
  }

  @Query(() => PatternEntity, { name: 'pattern' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.patternService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() pattern: PatternEntity): string {
    return localizeEntity(pattern, 'name', pattern.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() pattern: PatternEntity): string {
    return localizeEntity(pattern, 'description', pattern.locale);
  }

  @ResolveField(() => BreedConnection, { name: 'breeds' })
  async getBreedConnection(
    @Parent() pattern: PatternEntity,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<BreedConnection> {
    locale = locale || pattern.locale;
    const breedPatterns = await this.breedPatternService.findByPatternId(
      pattern.id,
      locale,
    );
    const edges = breedPatterns.map((bp: any) => {
      const node = mapToBreedEntity(bp.breed, locale);
      const edge = {
        node,
        cursor: '',
      };
      return edge;
    });

    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }
}
