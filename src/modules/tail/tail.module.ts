import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TailResolver } from 'src/modules/tail/tail.resolver';
import { TailService } from 'src/modules/tail/tail.service';

@Module({
  imports: [PrismaModule],
  providers: [TailResolver, TailService],
})
export class TailModule {}
