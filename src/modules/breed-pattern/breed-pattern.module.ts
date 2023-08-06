import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreedPatternService } from 'src/modules/breed-pattern/breed-pattern.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [BreedPatternService],
  exports: [BreedPatternService],
})
export class BreedPatternModule {}
