import { Field, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from 'src/modules/breed';
import { EyeEntity } from 'src/modules/eye';

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
