import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreedEyeService } from 'src/modules/breed-eye/breed-eye.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [BreedEyeService],
  exports: [BreedEyeService],
})
export class BreedEyeModule {}
