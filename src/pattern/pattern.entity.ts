import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedPattern } from '../breedPattern/breedPattern.entity';
import { BreedConnection } from '../breed/breed.entity';

@ObjectType()
export class Pattern {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedPattern], { nullable: true })
  breeds?: BreedPattern[];

  @Field(() => BreedConnection, { nullable: true })
  breedConnection?: BreedConnection;
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
