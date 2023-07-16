import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { PatternResolver } from './pattern.resolver';
import { PatternService } from './pattern.service';
import { BreedPatternModule } from '../breed-pattern';

@Module({
  imports: [BreedPatternModule, PrismaModule],
  providers: [PatternResolver, PatternService],
})
export class PatternModule {}
