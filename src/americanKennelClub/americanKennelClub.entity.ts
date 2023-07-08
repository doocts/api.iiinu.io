import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Breed } from '../breed/breed.entity';

@ObjectType()
export class AmericanKennelClub {
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

  @Field(() => [Breed])
  breed: Breed[];
}
