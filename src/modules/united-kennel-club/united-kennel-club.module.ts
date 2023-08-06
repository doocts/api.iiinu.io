import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UnitedKennelClubResolver } from 'src/modules/united-kennel-club/united-kennel-club.resolver';
import { UnitedKennelClubService } from 'src/modules/united-kennel-club/united-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [UnitedKennelClubResolver, UnitedKennelClubService],
})
export class UnitedKennelClubModule {}
