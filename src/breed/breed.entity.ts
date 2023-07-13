import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ColorConnection } from '../color/color.entity';
import { BreedColor } from '../breedColor/breedColor.entity';
import { EyeConnection } from '../eye/eye.entity';
import { BreedEye } from '../breedEye/breedEye.entity';
import { PatternConnection } from '../pattern/pattern.entity';
import { BreedPattern } from '../breedPattern/breedPattern.entity';
import { AmericanKennelClub } from '../americanKennelClub/americanKennelClub.entity';
import { AustralianNationalKennelCouncil } from '../australianNationalKennelCouncil/australianNationalKennelCouncil.entity';
import { Body } from '../body/body.entity';
import { CanadianKennelClub } from '../canadianKennelClub/canadianKennelClub.entity';
import { Coat } from '../coat/coat.entity';
import { Country } from '../country/country.entity';
import { Ear } from '../ear/ear.entity';
import { FederationCynologiqueInternationale } from '../federationCynologiqueInternationale/federationCynologiqueInternationale.entity';
import { Head } from '../head/head.entity';
import { Leg } from '../leg/leg.entity';
import { NewZealandKennelClub } from '../newZealandKennelClub/newZealandKennelClub.entity';
import { Role } from '../role/role.entity';
import { Size } from '../size/size.entity';
import { Status } from '../status/status.entity';
import { Tail } from '../tail/tail.entity';
import { TheKennelClub } from '../theKennelClub/theKennelClub.entity';
import { UnitedKennelClub } from '../unitedKennelClub/unitedKennelClub.entity';

@ObjectType()
export class Breed {
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

  @Field(() => AmericanKennelClub, { nullable: true })
  americanKennelClub?: AmericanKennelClub;

  @Field(() => AustralianNationalKennelCouncil, { nullable: true })
  australianNationalKennelCouncil?: AustralianNationalKennelCouncil;

  @Field(() => Body, { nullable: true })
  body?: Body;

  @Field(() => [BreedColor], { nullable: true })
  colors?: BreedColor[];

  @Field(() => ColorConnection, { nullable: true })
  colorConnection?: ColorConnection;

  @Field(() => [BreedEye], { nullable: true })
  eyes?: BreedEye[];

  @Field(() => EyeConnection, { nullable: true })
  eyeConnection?: EyeConnection;

  @Field(() => [BreedPattern], { nullable: true })
  patterns?: BreedPattern[];

  @Field(() => PatternConnection, { nullable: true })
  patternConnection?: PatternConnection;

  @Field(() => CanadianKennelClub, { nullable: true })
  canadianKennelClub?: CanadianKennelClub;

  @Field(() => Coat, { nullable: true })
  coat?: Coat;

  @Field(() => Country, { nullable: true })
  country?: Country;

  @Field(() => Ear, { nullable: true })
  ear?: Ear;

  @Field(() => FederationCynologiqueInternationale, { nullable: true })
  federationCynologiqueInternationale?: FederationCynologiqueInternationale;

  @Field(() => Head, { nullable: true })
  head?: Head;

  @Field(() => Leg, { nullable: true })
  leg?: Leg;

  @Field(() => NewZealandKennelClub, { nullable: true })
  newZealandKennelClub?: NewZealandKennelClub;

  @Field(() => Role, { nullable: true })
  role?: Role;

  @Field(() => Size, { nullable: true })
  size?: Size;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field(() => Tail, { nullable: true })
  tail?: Tail;

  @Field(() => TheKennelClub, { nullable: true })
  theKennelClub?: TheKennelClub;

  @Field(() => UnitedKennelClub, { nullable: true })
  unitedKennelClub?: UnitedKennelClub;
}

@ObjectType()
export class BreedEdge {
  @Field(() => Breed)
  node: Breed;

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
