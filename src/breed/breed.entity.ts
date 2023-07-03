import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BreedColor } from '../breedColor/breedColor.entity';
import { BreedEye } from '../breedEye/breedEye.entity';
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
  @Field(() => ID)
  id: number;

  @Field()
  nameEn: string;

  @Field()
  nameJa: string;

  @Field({ nullable: true })
  kana?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  descriptionJa?: string;

  @Field({ nullable: true })
  historyEn?: string;

  @Field({ nullable: true })
  historyJa?: string;

  @Field({ nullable: true })
  featuresJa?: string;

  @Field({ nullable: true })
  featuresEn?: string;

  @Field({ nullable: true })
  traitsJa?: string;

  @Field({ nullable: true })
  traitsEn?: string;

  @Field({ nullable: true })
  healthJa?: string;

  @Field({ nullable: true })
  healthEn?: string;

  @Field({ nullable: true })
  notesJa?: string;

  @Field({ nullable: true })
  notesEn?: string;

  @Field({ nullable: true })
  originJa?: string;

  @Field({ nullable: true })
  originEn?: string;

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

  @Field(() => [BreedEye], { nullable: true })
  eyes?: BreedEye[];

  @Field(() => [BreedPattern], { nullable: true })
  patterns?: BreedPattern[];

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
