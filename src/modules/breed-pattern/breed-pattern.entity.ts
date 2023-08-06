import { Field, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from 'src/modules/breed';
import { PatternEntity } from 'src/modules/pattern';

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
