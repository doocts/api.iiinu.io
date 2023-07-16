import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { SizeResolver } from './size.resolver';
import { SizeService } from './size.service';

@Module({
  imports: [PrismaModule],
  providers: [SizeResolver, SizeService],
})
export class SizeModule {}
