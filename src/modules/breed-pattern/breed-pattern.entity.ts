import { Field, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from '../breed';
import { PatternEntity } from '../pattern';

@ObjectType()
export class BreedPatternEntity {
  @Field(() => BreedEntity)
  breed: BreedEntity;

  @Field()
  breedId: number;

  @Field(() => PatternEntity)
  pattern: PatternEntity;

  @Field()
  patternId: number;
}
