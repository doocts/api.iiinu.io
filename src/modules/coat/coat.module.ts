import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { CoatResolver } from './coat.resolver';
import { CoatService } from './coat.service';

@Module({
  imports: [PrismaModule],
  providers: [CoatResolver, CoatService],
})
export class CoatModule {}
