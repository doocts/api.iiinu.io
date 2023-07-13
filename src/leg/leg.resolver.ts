import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { LegService } from './leg.service';
import { Leg } from './leg.entity';

@Resolver(() => Leg)
export class LegResolver {
  constructor(private readonly legService: LegService) {}

  @Query(() => [Leg], { name: 'legs' })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.legService.findAll(locale);
  }

  @Query(() => Leg, { name: 'leg' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.legService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(@Parent() leg: Leg): string {
    return leg.locale === 'ja' ? leg.nameJa : leg.nameEn;
  }

  @ResolveField('description')
  getDescription(@Parent() leg: Leg): string {
    return leg.locale === 'ja'
      ? leg.descriptionJa ?? ''
      : leg.descriptionEn ?? '';
  }
}
