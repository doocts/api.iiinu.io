import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BreedColorService {
  constructor(private readonly prisma: PrismaService) {}

  async findByBreedId(breedId: number) {
    const breedColors = await this.prisma.breedColor.findMany({
      where: {
        breedId: breedId,
      },
    });

    const colorPromises = breedColors.map(async (breedColor) => {
      const color = await this.prisma.color.findUnique({
        where: {
          id: breedColor.colorId,
        },
      });

      return { ...breedColor, color };
    });

    return Promise.all(colorPromises);
  }
}
