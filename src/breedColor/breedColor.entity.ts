import { Field, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';
import { Color } from '../color/color.entity';

@ObjectType()
export class BreedColor {
  @Field(() => Breed)
  breed: Breed;

  @Field()
  breedId: number;

  @Field(() => Color)
  color: Color;

  @Field()
  colorId: number;
}
