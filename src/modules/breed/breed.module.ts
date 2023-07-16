import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { BreedResolver } from './breed.resolver';
import { BreedService } from './breed.service';
import { BreedColorModule } from '../breed-color/breed-color.module';
import { BreedEyeModule } from '../breed-eye/breed-eye.module';
import { BreedPatternModule } from '../breed-pattern/breed-pattern.module';

@Module({
  imports: [BreedColorModule, BreedEyeModule, BreedPatternModule, PrismaModule],
  providers: [BreedResolver, BreedService],
})
export class BreedModule {}
