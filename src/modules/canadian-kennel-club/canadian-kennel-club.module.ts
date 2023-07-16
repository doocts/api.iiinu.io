import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { CanadianKennelClubResolver } from './canadian-kennel-club.resolver';
import { CanadianKennelClubService } from './canadian-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [CanadianKennelClubResolver, CanadianKennelClubService],
})
export class CanadianKennelClubModule {}
