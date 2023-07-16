import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { LegResolver } from './leg.resolver';
import { LegService } from './leg.service';

@Module({
  imports: [PrismaModule],
  providers: [LegResolver, LegService],
})
export class LegModule {}
