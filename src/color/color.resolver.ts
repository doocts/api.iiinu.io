import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { ColorService } from './color.service';
import { BreedColorService } from '../breedColor/breedColor.service';
import { Color } from './color.entity';
import { BreedConnection } from '../breed/breed.entity';

@Resolver(() => Color)
export class ColorResolver {
  constructor(
    private readonly colorService: ColorService,
    private readonly breedColorService: BreedColorService,
  ) {}

  @Query(() => [Color], { name: 'colors' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.colorService.findAll(locale);
  }

  @Query(() => Color, { name: 'color' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.colorService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() color: Color): string {
    return color.locale === 'ja' ? color.nameJa : color.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() color: Color): string {
    return color.locale === 'ja'
      ? color.descriptionJa ?? ''
      : color.descriptionEn ?? '';
  }

  @ResolveField(() => BreedConnection, { name: 'breeds' })
  async getBreedConnection(
    @Parent() color: Color,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<BreedConnection> {
    locale = locale || color.locale;
    const breedColors = await this.breedColorService.findByColorId(
      color.id,
      locale,
    );
    const edges = breedColors.map((bc: any) => {
      const edge = {
        node: {
          id: bc.breed.id,
          nameEn: bc.breed.nameEn,
          nameJa: bc.breed.nameJa,
          name: locale === 'ja' ? bc.breed.nameEn : bc.breed.nameJa,
          descriptionEn: bc.breed.descriptionEn,
          descriptionJa: bc.breed.descriptionJa,
          description:
            locale === 'ja' ? bc.breed.descriptionJa : bc.breed.descriptionEn,
          historyEn: bc.breed.historyEn,
          historyJa: bc.breed.historyJa,
          history: locale === 'ja' ? bc.breed.historyJa : bc.breed.historyEn,
          featuresEn: bc.breed.featuresEn,
          featuresJa: bc.breed.featuresJa,
          features: locale === 'ja' ? bc.breed.featuresJa : bc.breed.featuresEn,
          traitsEn: bc.breed.traitsEn,
          traitsJa: bc.breed.traitsJa,
          traits: locale === 'ja' ? bc.breed.traitsJa : bc.breed.traitsEn,
          healthEn: bc.breed.healthEn,
          healthJa: bc.breed.historyJa,
          health: locale === 'ja' ? bc.breed.healthJa : bc.breed.healthEn,
          notesEn: bc.breed.historyEn,
          notesJa: bc.breed.notesJa,
          notes: locale === 'ja' ? bc.breed.notesJa : bc.breed.notesEn,
          originEn: bc.breed.originEn,
          originJa: bc.breed.originJa,
          origin: locale === 'ja' ? bc.breed.originJa : bc.breed.originEn,
          kana: bc.breed.kana,
          minHeight: bc.breed.minHeight,
          maxHeight: bc.breed.maxHeight,
          minWeight: bc.breed.minWeight,
          maxWeight: bc.breed.maxWeight,
          americanKennelClub: bc.breed.americanKennelClub,
          australianNationalKennelCouncil:
            bc.breed.australianNationalKennelCouncil,
          colors: bc.breed.colors,
          colorConnection: bc.breed.colorConnection,
          eyes: bc.breed.eyes,
          eyeConnection: bc.breed.eyeConnection,
          patterns: bc.breed.patterns,
          patternConnection: bc.breed.patternConnection,
          canadianKennelClub: bc.breed.canadianKennelClub,
          coat: bc.breed.coat,
          country: bc.breed.country,
          ear: bc.breed.ear,
          federationCynologiqueInternationale:
            bc.breed.federationCynologiqueInternationale,
          leg: bc.breed.leg,
          newZealandKennelClub: bc.breed.newZealandKennelClub,
          role: bc.breed.role,
          size: bc.breed.size,
          status: bc.breed.status,
          tail: bc.breed.tail,
          theKennelClub: bc.breed.theKennelClub,
          unitedKennelClub: bc.breed.unitedKennelClub,
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
