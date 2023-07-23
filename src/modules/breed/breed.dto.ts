import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BreedFilter {
  @Field({ nullable: true })
  search: string;
}

@InputType()
export class BreedSortOrder {
  @Field({ nullable: true })
  sort: 'asc' | 'desc';
}
