import { Field, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';
import { Pattern } from '../pattern/pattern.entity';

@ObjectType()
export class BreedPattern {
  @Field(() => Breed)
  breed: Breed;

  @Field()
  breedId: number;

  @Field(() => Pattern)
  pattern: Pattern;

  @Field()
  patternId: number;
}
