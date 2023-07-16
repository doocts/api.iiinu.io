import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { AmericanKennelClubResolver } from './american-kennel-club.resolver';
import { AmericanKennelClubService } from './american-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [AmericanKennelClubResolver, AmericanKennelClubService],
})
export class AmericanKennelClubModule {}
