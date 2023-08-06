import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ColorResolver } from 'src/modules/color/color.resolver';
import { ColorService } from 'src/modules/color/color.service';
import { BreedColorModule } from 'src/modules/breed-color/breed-color.module';

@Module({
  imports: [BreedColorModule, PrismaModule],
  providers: [ColorResolver, ColorService],
})
export class ColorModule {}
