import { Field, ObjectType, ID } from '@nestjs/graphql';
import { BreedPattern } from '../breedPattern/breedPattern.entity';

@ObjectType()
export class Pattern {
  @Field(() => ID)
  id: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedPattern], { nullable: true })
  breeds?: BreedPattern[];
}
