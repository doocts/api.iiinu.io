import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { NewZealandKennelClubResolver } from './new-zealand-kennel-club.resolver';
import { NewZealandKennelClubService } from './new-zealand-kennel-club.service';

@Module({
  imports: [PrismaModule],
  providers: [NewZealandKennelClubResolver, NewZealandKennelClubService],
})
export class NewZealandKennelClubModule {}
