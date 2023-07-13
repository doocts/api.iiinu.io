import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedEye } from '../breedEye/breedEye.entity';
import { BreedConnection } from '../breed/breed.entity';

@ObjectType()
export class Eye {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedEye], { nullable: true })
  breeds?: BreedEye[];

  @Field(() => BreedConnection, { nullable: true })
  breedConnection?: BreedConnection;
}

@ObjectType()
export class EyeEdge {
  @Field(() => Eye)
  node: Eye;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class EyeConnection {
  @Field(() => [EyeEdge])
  edges: EyeEdge[];

  @Field(() => Int)
  totalCount: number;
}
