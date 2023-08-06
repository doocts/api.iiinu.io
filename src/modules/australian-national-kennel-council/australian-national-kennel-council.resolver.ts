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
  AustralianNationalKennelCouncilEntity,
  AustralianNationalKennelCouncilService,
} from 'src/modules/australian-national-kennel-council';

@Resolver(() => AustralianNationalKennelCouncilEntity)
export class AustralianNationalKennelCouncilResolver {
  constructor(
    @Inject(forwardRef(() => AustralianNationalKennelCouncilService))
    private readonly australianNationalKennelCouncilService: AustralianNationalKennelCouncilService,
  ) {}

  @Query(() => [AustralianNationalKennelCouncilEntity], {
    name: 'australianNationalKennelCouncils',
  })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.australianNationalKennelCouncilService.findAll(locale);
  }

  @Query(() => AustralianNationalKennelCouncilEntity, {
    name: 'australianNationalKennelCouncil',
  })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.australianNationalKennelCouncilService.findOne(id, locale);
  }

  @ResolveField('name')
  getName(
    @Parent()
    australianNationalKennelCouncil: AustralianNationalKennelCouncilEntity,
  ): string {
    return australianNationalKennelCouncil.locale === 'ja'
      ? australianNationalKennelCouncil.nameJa
      : australianNationalKennelCouncil.nameEn;
  }

  @ResolveField('description')
  getDescription(
    @Parent()
    australianNationalKennelCouncil: AustralianNationalKennelCouncilEntity,
  ): string {
    return australianNationalKennelCouncil.locale === 'ja'
      ? australianNationalKennelCouncil.descriptionJa ?? ''
      : australianNationalKennelCouncil.descriptionEn ?? '';
  }
}
