import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { HeadResolver } from './head.resolver';
import { HeadService } from './head.service';

@Module({
  imports: [PrismaModule],
  providers: [HeadResolver, HeadService],
})
export class HeadModule {}
