import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from 'src/modules/breed';

@ObjectType()
export class CountryEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  parentId?: number;

  @Field(() => [BreedEntity], { nullable: true })
  breeds: BreedEntity[];
}
