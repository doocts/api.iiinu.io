import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PatternResolver } from 'src/modules/pattern/pattern.resolver';
import { PatternService } from 'src/modules/pattern/pattern.service';
import { BreedPatternModule } from 'src/modules/breed-pattern/breed-pattern.module';

@Module({
  imports: [BreedPatternModule, PrismaModule],
  providers: [PatternResolver, PatternService],
})
export class PatternModule {}
