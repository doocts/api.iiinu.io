import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { TailResolver } from './tail.resolver';
import { TailService } from './tail.service';

@Module({
  imports: [PrismaModule],
  providers: [TailResolver, TailService],
})
export class TailModule {}
