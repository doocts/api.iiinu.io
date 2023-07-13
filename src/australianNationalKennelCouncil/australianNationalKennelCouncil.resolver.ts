import {
  Args,
  Int,
  Parent,
  Query,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { AustralianNationalKennelCouncilService } from './australianNationalKennelCouncil.service';
import { AustralianNationalKennelCouncil } from './australianNationalKennelCouncil.entity';

@Resolver(() => AustralianNationalKennelCouncil)
export class AustralianNationalKennelCouncilResolver {
  constructor(
    private readonly australianNationalKennelCouncilService: AustralianNationalKennelCouncilService,
  ) {}

  @Query(() => [AustralianNationalKennelCouncil], {
    name: 'australianNationalKennelCouncils',
  })
  findAll(
    @Args('locale', { type: () => String, nullable: true }) locale: string,
  ) {
    return this.australianNationalKennelCouncilService.findAll(locale);
  }

  @Query(() => AustralianNationalKennelCouncil, {
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
    @Parent() australianNationalKennelCouncil: AustralianNationalKennelCouncil,
  ): string {
    return australianNationalKennelCouncil.locale === 'ja'
      ? australianNationalKennelCouncil.nameJa
      : australianNationalKennelCouncil.nameEn;
  }

  @ResolveField('description')
  getDescription(
    @Parent() australianNationalKennelCouncil: AustralianNationalKennelCouncil,
  ): string {
    return australianNationalKennelCouncil.locale === 'ja'
      ? australianNationalKennelCouncil.descriptionJa ?? ''
      : australianNationalKennelCouncil.descriptionEn ?? '';
  }
}
