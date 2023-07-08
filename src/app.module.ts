import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { PrismaService } from './prisma/prisma.service';
import { AmericanKennelClubService } from './americanKennelClub/americanKennelClub.service';
import { AmericanKennelClubResolver } from './americanKennelClub/americanKennelClub.resolver';
import { AustralianNationalKennelCouncilService } from './australianNationalKennelCouncil/australianNationalKennelCouncil.service';
import { AustralianNationalKennelCouncilResolver } from './australianNationalKennelCouncil/australianNationalKennelCouncil.resolver';
import { BodyService } from './body/body.service';
import { BodyResolver } from './body/body.resolver';
import { BreedService } from './breed/breed.service';
import { BreedResolver } from './breed/breed.resolver';
import { BreedColorService } from './breedColor/breedColor.service';
import { BreedEyeService } from './breedEye/breedEye.service';
import { BreedPatternService } from './breedPattern/breedPattern.service';
import { CanadianKennelClubService } from './canadianKennelClub/canadianKennelClub.service';
import { CanadianKennelClubResolver } from './canadianKennelClub/canadianKennelClub.resolver';
import { CoatService } from './coat/coat.service';
import { CoatResolver } from './coat/coat.resolver';
import { ColorService } from './color/color.service';
import { ColorResolver } from './color/color.resolver';
import { CountryService } from './country/country.service';
import { CountryResolver } from './country/country.resolver';
import { EarService } from './ear/ear.service';
import { EarResolver } from './ear/ear.resolver';
import { EyeService } from './eye/eye.service';
import { EyeResolver } from './eye/eye.resolver';
import { FederationCynologiqueInternationaleService } from './federationCynologiqueInternationale/federationCynologiqueInternationale.service';
import { FederationCynologiqueInternationaleResolver } from './federationCynologiqueInternationale/federationCynologiqueInternationale.resolver';
import { HeadService } from './head/head.service';
import { HeadResolver } from './head/head.resolver';
import { LegService } from './leg/leg.service';
import { LegResolver } from './leg/leg.resolver';
import { NewZealandKennelClubService } from './newZealandKennelClub/newZealandKennelClub.service';
import { NewZealandKennelClubResolver } from './newZealandKennelClub/newZealandKennelClub.resolver';
import { PatternService } from './pattern/pattern.service';
import { PatternResolver } from './pattern/pattern.resolver';
import { RoleService } from './role/role.service';
import { RoleResolver } from './role/role.resolver';
import { SizeService } from './size/size.service';
import { SizeResolver } from './size/size.resolver';
import { StatusService } from './status/status.service';
import { StatusResolver } from './status/status.resolver';
import { TailService } from './tail/tail.service';
import { TailResolver } from './tail/tail.resolver';
import { TheKennelClubService } from './theKennelClub/theKennelClub.service';
import { TheKennelClubResolver } from './theKennelClub/theKennelClub.resolver';
import { UnitedKennelClubService } from './unitedKennelClub/unitedKennelClub.service';
import { UnitedKennelClubResolver } from './unitedKennelClub/unitedKennelClub.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
  ],
  providers: [
    PrismaService,
    AmericanKennelClubService,
    AmericanKennelClubResolver,
    AustralianNationalKennelCouncilService,
    AustralianNationalKennelCouncilResolver,
    BodyService,
    BodyResolver,
    BreedService,
    BreedResolver,
    BreedColorService,
    BreedPatternService,
    BreedEyeService,
    CanadianKennelClubService,
    CanadianKennelClubResolver,
    CoatService,
    CoatResolver,
    ColorService,
    ColorResolver,
    CountryService,
    CountryResolver,
    EarService,
    EarResolver,
    EyeService,
    EyeResolver,
    FederationCynologiqueInternationaleService,
    FederationCynologiqueInternationaleResolver,
    HeadService,
    HeadResolver,
    LegService,
    LegResolver,
    NewZealandKennelClubService,
    NewZealandKennelClubResolver,
    PatternService,
    PatternResolver,
    RoleService,
    RoleResolver,
    SizeService,
    SizeResolver,
    StatusService,
    StatusResolver,
    TailService,
    TailResolver,
    TheKennelClubService,
    TheKennelClubResolver,
    UnitedKennelClubService,
    UnitedKennelClubResolver,
  ],
})
export class AppModule {}
