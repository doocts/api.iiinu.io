import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { ColorEntity, ColorService } from 'src/modules/color';
import { BreedColorService } from 'src/modules/breed-color';
import { BreedConnection } from 'src/modules/breed';
import { localizeEntity, mapToBreedEntity } from 'src/utils';

@Resolver(() => ColorEntity)
export class ColorResolver {
  constructor(
    @Inject(forwardRef(() => ColorService))
    private readonly colorService: ColorService,
    @Inject(forwardRef(() => BreedColorService))
    private readonly breedColorService: BreedColorService,
  ) {}

  @Query(() => [ColorEntity], { name: 'colors' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.colorService.findAll(locale);
  }

  @Query(() => ColorEntity, { name: 'color' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.colorService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() color: ColorEntity): string {
    return localizeEntity(color, 'name', color.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() color: ColorEntity): string {
    return localizeEntity(color, 'description', color.locale);
  }

  @ResolveField(() => BreedConnection, { name: 'breeds' })
  async getBreedConnection(
    @Parent() color: ColorEntity,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<BreedConnection> {
    locale = locale || color.locale;
    const breedColors = await this.breedColorService.findByColorId(
      color.id,
      locale,
    );
    const edges = breedColors.map((bc: any) => {
      const node = mapToBreedEntity(bc.breed, locale);
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
