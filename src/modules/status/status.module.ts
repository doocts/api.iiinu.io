import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StatusResolver } from 'src/modules/status/status.resolver';
import { StatusService } from 'src/modules/status/status.service';

@Module({
  imports: [PrismaModule],
  providers: [StatusResolver, StatusService],
})
export class StatusModule {}
