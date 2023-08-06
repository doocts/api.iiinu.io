import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreedColorService } from 'src/modules/breed-color/breed-color.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [BreedColorService],
  exports: [BreedColorService],
})
export class BreedColorModule {}
