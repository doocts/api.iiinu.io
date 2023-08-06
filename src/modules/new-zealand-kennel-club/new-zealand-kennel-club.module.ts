import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NewZealandKennelClubResolver } from 'src/modules/new-zealand-kennel-club/new-zealand-kennel-club.resolver';
import { NewZealandKennelClubService } from 'src/modules/new-zealand-kennel-club/new-zealand-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [NewZealandKennelClubResolver, NewZealandKennelClubService],
})
export class NewZealandKennelClubModule {}
