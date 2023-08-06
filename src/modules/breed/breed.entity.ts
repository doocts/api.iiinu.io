import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ColorConnection } from 'src/modules/color';
import { BreedColorEntity } from 'src/modules/breed-color';
import { EyeConnection } from 'src/modules/eye';
import { BreedEyeEntity } from 'src/modules/breed-eye';
import { PatternConnection } from 'src/modules/pattern';
import { BreedPatternEntity } from 'src/modules/breed-pattern';
import { AmericanKennelClubEntity } from 'src/modules/american-kennel-club';
import { AustralianNationalKennelCouncilEntity } from 'src/modules/australian-national-kennel-council';
import { BodyEntity } from 'src/modules/body';
import { CanadianKennelClubEntity } from 'src/modules/canadian-kennel-club';
import { CoatEntity } from 'src/modules/coat';
import { CountryEntity } from 'src/modules/country';
import { EarEntity } from 'src/modules/ear';
import { FederationCynologiqueInternationaleEntity } from 'src/modules/federation-cynologique-internationale';
import { HeadEntity } from 'src/modules/head';
import { LegEntity } from 'src/modules/leg';
import { NewZealandKennelClubEntity } from 'src/modules/new-zealand-kennel-club';
import { RoleEntity } from 'src/modules/role';
import { SizeEntity } from 'src/modules/size';
import { StatusEntity } from 'src/modules/status';
import { TailEntity } from 'src/modules/tail';
import { TheKennelClubEntity } from 'src/modules/the-kennel-club';
import { UnitedKennelClubEntity } from 'src/modules/united-kennel-club';

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
