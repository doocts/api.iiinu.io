import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { StatusResolver } from './status.resolver';
import { StatusService } from './status.service';

@Module({
  imports: [PrismaModule],
  providers: [StatusResolver, StatusService],
})
export class StatusModule {}
