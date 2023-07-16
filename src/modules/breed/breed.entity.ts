import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ColorConnection } from '../color';
import { BreedColorEntity } from '../breed-color';
import { EyeConnection } from '../eye';
import { BreedEyeEntity } from '../breed-eye';
import { PatternConnection } from '../pattern';
import { BreedPatternEntity } from '../breed-pattern';
import { AmericanKennelClubEntity } from '../american-kennel-club';
import { AustralianNationalKennelCouncilEntity } from '../australian-national-kennel-council';
import { BodyEntity } from '../body';
import { CanadianKennelClubEntity } from '../canadian-kennel-club';
import { CoatEntity } from '../coat';
import { CountryEntity } from '../country';
import { EarEntity } from '../ear';
import { FederationCynologiqueInternationaleEntity } from '../federation-cynologique-internationale';
import { HeadEntity } from '../head';
import { LegEntity } from '../leg';
import { NewZealandKennelClubEntity } from '../new-zealand-kennel-club';
import { RoleEntity } from '../role';
import { SizeEntity } from '../size';
import { StatusEntity } from '../status';
import { TailEntity } from '../tail';
import { TheKennelClubEntity } from '../the-kennel-club';
import { UnitedKennelClubEntity } from '../united-kennel-club';

@ObjectType()
export class BreedEntity {
  locale?: string;

  @Field(() => Int)
  id: number;

  nameEn: string;
  nameJa: string;
  descriptionEn?: string;
  descriptionJa?: string;
  historyEn?: string;
  historyJa?: string;
  featuresJa?: string;
  featuresEn?: string;
  traitsJa?: string;
  traitsEn?: string;
  healthJa?: string;
  healthEn?: string;
  notesJa?: string;
  notesEn?: string;
  originJa?: string;
  originEn?: string;

  @Field({ nullable: true })
  kana?: string;

  @Field({ nullable: true })
  minHeight?: number;

  @Field({ nullable: true })
  maxHeight?: number;

  @Field({ nullable: true })
  minWeight?: number;

  @Field({ nullable: true })
  maxWeight?: number;

  @Field(() => AmericanKennelClubEntity, { nullable: true })
  americanKennelClub?: AmericanKennelClubEntity;

  @Field(() => AustralianNationalKennelCouncilEntity, { nullable: true })
  australianNationalKennelCouncil?: AustralianNationalKennelCouncilEntity;

  @Field(() => BodyEntity, { nullable: true })
  body?: BodyEntity;

  @Field(() => [BreedColorEntity], { nullable: true })
  colors?: BreedColorEntity[];

  @Field(() => ColorConnection, { nullable: true })
  colorConnection?: ColorConnection;

  @Field(() => [BreedEyeEntity], { nullable: true })
  eyes?: BreedEyeEntity[];

  @Field(() => EyeConnection, { nullable: true })
  eyeConnection?: EyeConnection;

  @Field(() => [BreedPatternEntity], { nullable: true })
  patterns?: BreedPatternEntity[];

  @Field(() => PatternConnection, { nullable: true })
  patternConnection?: PatternConnection;

  @Field(() => CanadianKennelClubEntity, { nullable: true })
  canadianKennelClub?: CanadianKennelClubEntity;

  @Field(() => CoatEntity, { nullable: true })
  coat?: CoatEntity;

  @Field(() => CountryEntity, { nullable: true })
  country?: CountryEntity;

  @Field(() => EarEntity, { nullable: true })
  ear?: EarEntity;

  @Field(() => FederationCynologiqueInternationaleEntity, { nullable: true })
  federationCynologiqueInternationale?: FederationCynologiqueInternationaleEntity;

  @Field(() => HeadEntity, { nullable: true })
  head?: HeadEntity;

  @Field(() => LegEntity, { nullable: true })
  leg?: LegEntity;

  @Field(() => NewZealandKennelClubEntity, { nullable: true })
  newZealandKennelClub?: NewZealandKennelClubEntity;

  @Field(() => RoleEntity, { nullable: true })
  role?: RoleEntity;

  @Field(() => SizeEntity, { nullable: true })
  size?: SizeEntity;

  @Field(() => StatusEntity, { nullable: true })
  status?: StatusEntity;

  @Field(() => TailEntity, { nullable: true })
  tail?: TailEntity;

  @Field(() => TheKennelClubEntity, { nullable: true })
  theKennelClub?: TheKennelClubEntity;

  @Field(() => UnitedKennelClubEntity, { nullable: true })
  unitedKennelClub?: UnitedKennelClubEntity;
}

@ObjectType()
export class BreedEdge {
  @Field(() => BreedEntity)
  node: BreedEntity;

  @Field(() => String)
  cursor: string;
}

@ObjectType()
export class BreedConnection {
  @Field(() => [BreedEdge])
  edges: BreedEdge[];

  @Field(() => Int)
  totalCount: number;
}
