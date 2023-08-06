import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AmericanKennelClubResolver } from 'src/modules/american-kennel-club/american-kennel-club.resolver';
import { AmericanKennelClubService } from 'src/modules/american-kennel-club/american-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [AmericanKennelClubResolver, AmericanKennelClubService],
})
export class AmericanKennelClubModule {}
