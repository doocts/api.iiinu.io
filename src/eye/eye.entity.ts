import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedEye } from '../breedEye/breedEye.entity';

@ObjectType()
export class Eye {
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

  @Field(() => [BreedEye], { nullable: true })
  breeds?: BreedEye[];
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
