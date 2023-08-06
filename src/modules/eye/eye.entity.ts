import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedEyeEntity } from 'src/modules/breed-eye';
import { BreedConnection } from 'src/modules/breed';

@ObjectType()
export class EyeEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedEyeEntity], { nullable: true })
  breeds?: BreedEyeEntity[];

  @Field(() => BreedConnection, { nullable: true })
  breedConnection?: BreedConnection;
}

@ObjectType()
export class EyeEdge {
  @Field(() => EyeEntity)
  node: EyeEntity;

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
