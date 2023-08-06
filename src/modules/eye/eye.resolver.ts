import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';
import { EyeEntity, EyeService } from 'src/modules/eye';
import { BreedEyeService } from 'src/modules/breed-eye';
import { BreedConnection } from 'src/modules/breed';
import { localizeEntity, mapToBreedEntity } from 'src/utils';

@Resolver(() => EyeEntity)
export class EyeResolver {
  constructor(
    @Inject(forwardRef(() => EyeService))
    private readonly eyeService: EyeService,
    @Inject(forwardRef(() => BreedEyeService))
    private readonly breedEyeService: BreedEyeService,
  ) {}

  @Query(() => [EyeEntity], { name: 'eyes' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.eyeService.findAll(locale);
  }

  @Query(() => EyeEntity, { name: 'eye' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.eyeService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() eye: EyeEntity): string {
    return localizeEntity(eye, 'name', eye.locale);
  }

  @ResolveField('description')
  getDescription(@Parent() eye: EyeEntity): string {
    return localizeEntity(eye, 'description', eye.locale);
  }

  @ResolveField(() => BreedConnection, { name: 'breeds' })
  async getBreedConnection(
    @Parent() eye: EyeEntity,
    @Args('locale', { nullable: true }) locale: string,
  ): Promise<BreedConnection> {
    locale = locale || eye.locale;
    const breedEyes = await this.breedEyeService.findByEyeId(eye.id, locale);
    const edges = breedEyes.map((be: any) => {
      const node = mapToBreedEntity(be.breed, locale);
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
