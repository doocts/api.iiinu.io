import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
