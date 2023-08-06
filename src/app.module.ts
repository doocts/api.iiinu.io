import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { CacheModule } from '@nestjs/cache-manager';
import { TheKennelClubModule } from 'src/modules/the-kennel-club';
import { AmericanKennelClubModule } from 'src/modules/american-kennel-club';
import { AustralianNationalKennelCouncilModule } from 'src/modules/australian-national-kennel-council';
import { BreedColorModule } from 'src/modules/breed-color';
import { BreedEyeModule } from 'src/modules/breed-eye';
import { BreedPatternModule } from 'src/modules/breed-pattern';
import { CanadianKennelClubModule } from 'src/modules/canadian-kennel-club';
import { FederationCynologiqueInternationaleModule } from 'src/modules/federation-cynologique-internationale';
import { NewZealandKennelClubModule } from 'src/modules/new-zealand-kennel-club';
import { UnitedKennelClubModule } from 'src/modules/united-kennel-club';
import { BodyModule } from 'src/modules/body';
import { BreedModule } from 'src/modules/breed';
import { CoatModule } from 'src/modules/coat';
import { ColorModule } from 'src/modules/color';
import { CountryModule } from 'src/modules/country';
import { EarModule } from 'src/modules/ear';
import { EyeModule } from 'src/modules/eye';
import { HeadModule } from 'src/modules/head';
import { LegModule } from 'src/modules/leg';
import { PatternModule } from 'src/modules/pattern';
import { RoleModule } from 'src/modules/role';
import { SizeModule } from 'src/modules/size';
import { StatusModule } from 'src/modules/status';
import { TailModule } from 'src/modules/tail';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
    }),
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
