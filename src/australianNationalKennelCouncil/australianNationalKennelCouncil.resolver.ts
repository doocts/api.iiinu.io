import { Resolver, Query, Args } from '@nestjs/graphql';
import { AustralianNationalKennelCouncilService } from './australianNationalKennelCouncil.service';
import { AustralianNationalKennelCouncil } from './australianNationalKennelCouncil.entity';

@Resolver(() => AustralianNationalKennelCouncil)
export class AustralianNationalKennelCouncilResolver {
  constructor(
    private readonly ankcService: AustralianNationalKennelCouncilService,
  ) {}

  @Query(() => [AustralianNationalKennelCouncil], { name: 'allANKC' })
  findAll() {
    return this.ankcService.findAll();
  }

  @Query(() => AustralianNationalKennelCouncil, { name: 'ankc' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.ankcService.findOne(id);
  }
}
