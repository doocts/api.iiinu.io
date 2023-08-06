import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AustralianNationalKennelCouncilResolver } from 'src/modules/australian-national-kennel-council/australian-national-kennel-council.resolver';
import { AustralianNationalKennelCouncilService } from 'src/modules/australian-national-kennel-council/australian-national-kennel-council.service';

@Module({
  imports: [PrismaModule],
  providers: [
    AustralianNationalKennelCouncilResolver,
    AustralianNationalKennelCouncilService,
  ],
})
export class AustralianNationalKennelCouncilModule {}
