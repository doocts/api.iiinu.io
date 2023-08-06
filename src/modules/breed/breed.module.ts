import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreedResolver } from 'src/modules/breed/breed.resolver';
import { BreedService } from 'src/modules/breed/breed.service';
import { BreedColorModule } from 'src/modules/breed-color/breed-color.module';
import { BreedEyeModule } from 'src/modules/breed-eye/breed-eye.module';
import { BreedPatternModule } from 'src/modules/breed-pattern/breed-pattern.module';

@Module({
  imports: [BreedColorModule, BreedEyeModule, BreedPatternModule, PrismaModule],
  providers: [BreedResolver, BreedService],
})
export class BreedModule {}
