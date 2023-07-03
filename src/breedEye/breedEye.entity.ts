import { Field, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';
import { Eye } from '../eye/eye.entity';

@ObjectType()
export class BreedEye {
  @Field(() => Breed)
  breed: Breed;

  @Field()
  breedId: number;

  @Field(() => Eye)
  eye: Eye;

  @Field()
  eyeId: number;
}
