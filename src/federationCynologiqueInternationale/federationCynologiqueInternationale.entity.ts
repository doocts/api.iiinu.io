import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';

@ObjectType()
export class FederationCynologiqueInternationale {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field({ nullable: true })
  parentId?: number;

  @Field(() => [Breed], { nullable: true })
  breeds: Breed[];
}
