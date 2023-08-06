import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TheKennelClubResolver } from 'src/modules/the-kennel-club/the-kennel-club.resolver';
import { TheKennelClubService } from 'src/modules/the-kennel-club/the-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [TheKennelClubResolver, TheKennelClubService],
})
export class TheKennelClubModule {}
