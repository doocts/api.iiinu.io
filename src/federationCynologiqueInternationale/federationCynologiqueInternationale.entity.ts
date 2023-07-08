import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';

@ObjectType()
export class FederationCynologiqueInternationale {
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

  @Field({ nullable: true })
  parentId?: number;

  @Field(() => [Breed])
  breed: Breed[];
}
