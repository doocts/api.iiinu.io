import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CanadianKennelClubResolver } from 'src/modules/canadian-kennel-club/canadian-kennel-club.resolver';
import { CanadianKennelClubService } from 'src/modules/canadian-kennel-club/canadian-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [CanadianKennelClubResolver, CanadianKennelClubService],
})
export class CanadianKennelClubModule {}
