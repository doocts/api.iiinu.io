import { Field, ObjectType, ID } from '@nestjs/graphql';
import { BreedEye } from '../breedEye/breedEye.entity';

@ObjectType()
export class Eye {
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

  @Field(() => [BreedEye], { nullable: true })
  breeds?: BreedEye[];
}
