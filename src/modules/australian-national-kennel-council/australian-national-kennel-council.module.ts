import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { AustralianNationalKennelCouncilResolver } from './australian-national-kennel-council.resolver';
import { AustralianNationalKennelCouncilService } from './australian-national-kennel-council.service';

@Module({
  imports: [PrismaModule],
  providers: [
    AustralianNationalKennelCouncilResolver,
    AustralianNationalKennelCouncilService,
  ],
})
export class AustralianNationalKennelCouncilModule {}
