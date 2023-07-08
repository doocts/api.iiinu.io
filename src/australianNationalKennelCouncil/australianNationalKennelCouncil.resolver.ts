import { Args, Int, Query, Resolver } from '@nestjs/graphql';
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
  findAll() {
    return this.australianNationalKennelCouncilService.findAll();
  }

  @Query(() => AustralianNationalKennelCouncil, {
    name: 'australianNationalKennelCouncil',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.australianNationalKennelCouncilService.findOne(id);
  }
}
