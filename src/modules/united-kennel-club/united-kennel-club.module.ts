import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { UnitedKennelClubResolver } from './united-kennel-club.resolver';
import { UnitedKennelClubService } from './united-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [UnitedKennelClubResolver, UnitedKennelClubService],
})
export class UnitedKennelClubModule {}
