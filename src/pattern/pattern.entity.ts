import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedPattern } from '../breedPattern/breedPattern.entity';

@ObjectType()
export class Pattern {
  @Field(() => Int)
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

@ObjectType()
export class PatternEdge {
  @Field(() => Pattern)
  node: Pattern;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class PatternConnection {
  @Field(() => [PatternEdge])
  edges: PatternEdge[];

  @Field(() => Int)
  totalCount: number;
}
