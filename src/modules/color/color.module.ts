import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { ColorResolver } from './color.resolver';
import { ColorService } from './color.service';
import { BreedColorModule } from '../breed-color/breed-color.module';

@Module({
  imports: [BreedColorModule, PrismaModule],
  providers: [ColorResolver, ColorService],
})
export class ColorModule {}
