import { Field, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from 'src/modules/breed';
import { ColorEntity } from 'src/modules/color';

@ObjectType()
export class BreedColorEntity {
  @Field(() => BreedEntity)
  breed: BreedEntity;

  @Field()
  breedId: number;

  @Field(() => ColorEntity)
  color: ColorEntity;

  @Field()
  colorId: number;
}
