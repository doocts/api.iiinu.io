import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { BreedService } from './breed.service';
import { BreedColorService } from '../breedColor/breedColor.service';
import { BreedEyeService } from '../breedEye/breedEye.service';
import { BreedPatternService } from '../breedPattern/breedPattern.service';
import { Breed } from './breed.entity';
import { ColorConnection } from '../color/color.entity';
import { EyeConnection } from '../eye/eye.entity';
import { PatternConnection } from '../pattern/pattern.entity';

@Resolver(() => Breed)
export class BreedResolver {
  constructor(
    private readonly breedService: BreedService,
    private readonly breedColorService: BreedColorService,
    private readonly breedEyeService: BreedEyeService,
    private readonly breedPatternService: BreedPatternService,
  ) {}

  @Query(() => [Breed], { name: 'allBreed' })
  findAll() {
    return this.breedService.findAll();
  }

  @Query(() => Breed, { name: 'breed' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.breedService.findOne(id);
  }

  @ResolveField(() => ColorConnection, { name: 'colorConnection' })
  async getColorConnection(@Parent() breed: Breed): Promise<ColorConnection> {
    const breedColors = await this.breedColorService.findByBreedId(breed.id);
    const edges = breedColors.map((bc) => ({ node: bc.color, cursor: '' }));
    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }

  @ResolveField(() => EyeConnection, { name: 'eyeConnection' })
  async getEyeConnection(@Parent() breed: Breed): Promise<EyeConnection> {
    const breedEyes = await this.breedEyeService.findByBreedId(breed.id);
    const edges = breedEyes.map((bc) => ({ node: bc.eye, cursor: '' }));
    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }

  @ResolveField(() => PatternConnection, { name: 'patternConnection' })
  async getPatternConnection(
    @Parent() breed: Breed,
  ): Promise<PatternConnection> {
    const breedPatterns = await this.breedPatternService.findByBreedId(
      breed.id,
    );
    const edges = breedPatterns.map((bc) => ({ node: bc.pattern, cursor: '' }));
    const totalCount = edges.length;

    return {
      edges,
      totalCount,
    };
  }
}
