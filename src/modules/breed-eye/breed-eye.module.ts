import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { BreedEyeService } from './breed-eye.service';

@Module({
  imports: [PrismaModule],
  providers: [BreedEyeService],
  exports: [BreedEyeService],
})
export class BreedEyeModule {}
