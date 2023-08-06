import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LegResolver } from 'src/modules/leg/leg.resolver';
import { LegService } from 'src/modules/leg/leg.service';

@Module({
  imports: [PrismaModule],
  providers: [LegResolver, LegService],
})
export class LegModule {}
