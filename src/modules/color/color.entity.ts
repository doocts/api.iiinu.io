import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedColorEntity } from '../breed-color';
import { BreedConnection } from '../breed';

@ObjectType()
export class ColorEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedColorEntity], { nullable: true })
  breeds?: BreedColorEntity[];

  @Field(() => BreedConnection, { nullable: true })
  breedConnection?: BreedConnection;
}

@ObjectType()
export class ColorEdge {
  @Field(() => ColorEntity)
  node: ColorEntity;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class ColorConnection {
  @Field(() => [ColorEdge])
  edges: ColorEdge[];

  @Field(() => Int)
  totalCount: number;
}
