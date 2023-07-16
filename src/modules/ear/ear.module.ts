import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { EarResolver } from './ear.resolver';
import { EarService } from './ear.service';

@Module({
  imports: [PrismaModule],
  providers: [EarResolver, EarService],
})
export class EarModule {}
