import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { BreedColorService } from './breed-color.service';

@Module({
  imports: [PrismaModule],
  providers: [BreedColorService],
  exports: [BreedColorService],
})
export class BreedColorModule {}
