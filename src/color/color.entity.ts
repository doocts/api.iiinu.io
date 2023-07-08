import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import { BreedColor } from '../breedColor/breedColor.entity';

@ObjectType()
export class Color {
  @Field(() => ID)
  id: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  descriptionEn: string;

  @Field({ nullable: true })
  descriptionJa: string;

  @Field()
  slug: string;

  @Field(() => [BreedColor], { nullable: true })
  breeds?: BreedColor[];
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
