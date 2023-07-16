import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BreedEntity } from '../breed';

@ObjectType()
export class CanadianKennelClubEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;

  @Field(() => [BreedEntity], { nullable: true })
  breeds: BreedEntity[];
}
