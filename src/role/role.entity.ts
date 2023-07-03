import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';

@ObjectType()
export class Role {
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

  @Field({ nullable: true })
  parentId?: number;

  @Field(() => [Breed])
  breed: Breed[];
}
