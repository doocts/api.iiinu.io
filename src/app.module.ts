import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { PrismaModule } from './prisma';
import { TheKennelClubModule } from './modules/the-kennel-club';
import { AmericanKennelClubModule } from './modules/american-kennel-club';
import { AustralianNationalKennelCouncilModule } from './modules/australian-national-kennel-council';
import { BreedColorModule } from './modules/breed-color';
import { BreedEyeModule } from './modules/breed-eye';
import { BreedPatternModule } from './modules/breed-pattern';
import { CanadianKennelClubModule } from './modules/canadian-kennel-club';
import { FederationCynologiqueInternationaleModule } from './modules/federation-cynologique-internationale';
import { NewZealandKennelClubModule } from './modules/new-zealand-kennel-club';
import { UnitedKennelClubModule } from './modules/united-kennel-club';
import { BodyModule } from './modules/body';
import { BreedModule } from './modules/breed';
import { CoatModule } from './modules/coat';
import { ColorModule } from './modules/color';
import { CountryModule } from './modules/country';
import { EarModule } from './modules/ear';
import { EyeModule } from './modules/eye';
import { HeadModule } from './modules/head';
import { LegModule } from './modules/leg';
import { PatternModule } from './modules/pattern';
import { RoleModule } from './modules/role';
import { SizeModule } from './modules/size';
import { StatusModule } from './modules/status';
import { TailModule } from './modules/tail';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    PrismaModule,
    TheKennelClubModule,
    AmericanKennelClubModule,
    AustralianNationalKennelCouncilModule,
    BreedColorModule,
    BreedEyeModule,
    BreedPatternModule,
    CanadianKennelClubModule,
    FederationCynologiqueInternationaleModule,
    NewZealandKennelClubModule,
    UnitedKennelClubModule,
    BodyModule,
    BreedModule,
    CoatModule,
    ColorModule,
    CountryModule,
    EarModule,
    EyeModule,
    HeadModule,
    LegModule,
    PatternModule,
    RoleModule,
    SizeModule,
    StatusModule,
    TailModule,
  ],
})
export class AppModule {}
