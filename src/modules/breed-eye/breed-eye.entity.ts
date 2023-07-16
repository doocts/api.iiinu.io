import { Field, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from '../breed';
import { EyeEntity } from '../eye';

@ObjectType()
export class BreedEyeEntity {
  @Field(() => BreedEntity)
  breed: BreedEntity;

  @Field()
  breedId: number;

  @Field(() => EyeEntity)
  eye: EyeEntity;

  @Field()
  eyeId: number;
}
