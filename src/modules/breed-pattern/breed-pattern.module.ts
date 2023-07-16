import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { BreedPatternService } from './breed-pattern.service';

@Module({
  imports: [PrismaModule],
  providers: [BreedPatternService],
  exports: [BreedPatternService],
})
export class BreedPatternModule {}
