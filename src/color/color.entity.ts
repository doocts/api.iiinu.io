import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedColor } from '../breedColor/breedColor.entity';
import { BreedConnection } from '../breed/breed.entity';

@ObjectType()
export class Color {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedColor], { nullable: true })
  breeds?: BreedColor[];

  @Field(() => BreedConnection, { nullable: true })
  breedConnection?: BreedConnection;
}

@ObjectType()
export class ColorEdge {
  @Field(() => Color)
  node: Color;

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
