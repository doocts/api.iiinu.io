import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedPatternEntity } from 'src/modules/breed-pattern';
import { BreedConnection } from 'src/modules/breed';

@ObjectType()
export class PatternEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedPatternEntity], { nullable: true })
  breeds?: BreedPatternEntity[];

  @Field(() => BreedConnection, { nullable: true })
  breedConnection?: BreedConnection;
}

@ObjectType()
export class PatternEdge {
  @Field(() => PatternEntity)
  node: PatternEntity;

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
