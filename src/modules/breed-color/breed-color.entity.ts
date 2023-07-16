import { Field, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from '../breed';
import { ColorEntity } from '../color';

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
