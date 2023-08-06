import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EyeResolver } from 'src/modules/eye/eye.resolver';
import { EyeService } from 'src/modules/eye/eye.service';
import { BreedEyeModule } from 'src/modules/breed-eye/breed-eye.module';

@Module({
  imports: [BreedEyeModule, PrismaModule],
  providers: [EyeResolver, EyeService],
})
export class EyeModule {}
