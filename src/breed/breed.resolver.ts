import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
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

  @Query(() => [Breed], { name: 'breeds' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.breedService.findAll(locale);
  }

  @Query(() => Breed, { name: 'breed' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    const breed = await this.breedService.findOne(id, locale);
    breed.locale = locale;
    return breed;
  }

  @ResolveField(() => String, { name: 'name' })
  getName(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.nameJa : breed.nameEn;
  }

  @ResolveField(() => String, { name: 'description' })
  getDescription(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja'
      ? breed.descriptionJa ?? ''
      : breed.descriptionEn ?? '';
  }

  @ResolveField(() => String, { name: 'history' })
  getHistory(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.historyJa ?? '' : breed.historyEn ?? '';
  }

  @ResolveField(() => String, { name: 'features' })
  getFeatures(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.featuresJa ?? '' : breed.featuresEn ?? '';
  }

  @ResolveField(() => String, { name: 'traits' })
  getTraits(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.traitsJa ?? '' : breed.traitsEn ?? '';
  }

  @ResolveField(() => String, { name: 'health' })
  getHealth(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.healthJa ?? '' : breed.healthEn ?? '';
  }

  @ResolveField(() => String, { name: 'notes' })
  getNotes(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.notesJa ?? '' : breed.notesEn ?? '';
  }

  @ResolveField(() => String, { name: 'origin' })
  getOrigin(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): string {
    locale = breed.locale || 'en';
    return locale === 'ja' ? breed.originJa ?? '' : breed.originEn ?? '';
  }

  @ResolveField(() => ColorConnection, { name: 'colors' })
  async getColorConnection(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<ColorConnection> {
    locale = locale || breed.locale;
    const breedColors = await this.breedColorService.findByBreedId(
      breed.id,
      locale,
    );
    const edges = breedColors.map((bc: any) => {
      const edge = {
        node: {
          id: bc.color.id,
          nameEn: bc.color.nameEn,
          nameJa: bc.color.nameJa,
          name: locale === 'ja' ? bc.color.nameJa : bc.color.nameEn,
          slug: bc.color.slug,
          descriptionEn: bc.color.descriptionEn,
          descriptionJa: bc.color.descriptionJa,
          description:
            locale === 'ja' ? bc.color.descriptionJa : bc.color.descriptionEn,
        },
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

  @ResolveField(() => EyeConnection, { name: 'eyes' })
  async getEyeConnection(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<EyeConnection> {
    locale = locale || breed.locale;
    const breedEyes = await this.breedEyeService.findByBreedId(
      breed.id,
      locale,
    );
    const edges = breedEyes.map((be: any) => {
      const edge = {
        node: {
          id: be.eye.id,
          nameEn: be.eye.nameEn,
          nameJa: be.eye.nameJa,
          name: locale === 'ja' ? be.eye.nameJa : be.eye.nameEn,
          slug: be.eye.slug,
          descriptionEn: be.eye.descriptionEn,
          descriptionJa: be.eye.descriptionJa,
          description:
            locale === 'ja' ? be.eye.descriptionJa : be.eye.descriptionEn,
        },
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

  @ResolveField(() => PatternConnection, { name: 'patterns' })
  async getPatternConnection(
    @Parent() breed: Breed,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<PatternConnection> {
    locale = locale || breed.locale;
    const breedPatterns = await this.breedPatternService.findByBreedId(
      breed.id,
      locale,
    );
    const edges = breedPatterns.map((bp: any) => {
      const edge = {
        node: {
          id: bp.pattern.id,
          nameEn: bp.pattern.nameEn,
          nameJa: bp.pattern.nameJa,
          name: locale === 'ja' ? bp.pattern.nameJa : bp.pattern.nameEn,
          slug: bp.pattern.slug,
          descriptionEn: bp.pattern.descriptionEn,
          descriptionJa: bp.pattern.descriptionJa,
          description:
            locale === 'ja'
              ? bp.pattern.descriptionJa
              : bp.pattern.descriptionEn,
        },
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
