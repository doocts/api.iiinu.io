import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';

@ObjectType()
export class Size {
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

  @Field(() => [Breed])
  breed: Breed[];
}
