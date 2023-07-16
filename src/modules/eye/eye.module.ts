import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { EyeResolver } from './eye.resolver';
import { EyeService } from './eye.service';
import { BreedEyeModule } from '../breed-eye/breed-eye.module';

@Module({
  imports: [BreedEyeModule, PrismaModule],
  providers: [EyeResolver, EyeService],
})
export class EyeModule {}
