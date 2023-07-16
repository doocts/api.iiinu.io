import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { TheKennelClubResolver } from './the-kennel-club.resolver';
import { TheKennelClubService } from './the-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [TheKennelClubResolver, TheKennelClubService],
})
export class TheKennelClubModule {}
