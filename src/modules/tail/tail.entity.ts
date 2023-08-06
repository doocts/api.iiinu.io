import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from 'src/modules/breed';

@ObjectType()
export class TailEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field(() => [BreedEntity], { nullable: true })
  breeds: BreedEntity[];
}
