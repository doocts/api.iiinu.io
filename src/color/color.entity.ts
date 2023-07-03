import { Field, ObjectType, ID } from '@nestjs/graphql';
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
