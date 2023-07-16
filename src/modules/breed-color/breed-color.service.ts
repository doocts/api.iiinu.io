import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';

@Injectable()
export class BreedColorService {
  constructor(private readonly prisma: PrismaService) {}

  async findByBreedId(breedId: number, locale: string) {
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

      const localizedColor = this.localizeColor(color, locale);

      return { ...breedColor, color: localizedColor };
    });

    return Promise.all(colorPromises);
  }

  async findByColorId(colorId: number, locale: string) {
    const breedColors = await this.prisma.breedColor.findMany({
      where: {
        colorId: colorId,
      },
    });

    const breedPromises = breedColors.map(async (breedColor) => {
      const breed = await this.prisma.breed.findUnique({
        where: {
          id: breedColor.breedId,
        },
      });

      const localizedBreed = this.localizeBreed(breed, locale);

      return { ...breedColor, breed: localizedBreed };
    });

    return Promise.all(breedPromises);
  }

  private localizeBreed(breed: any, locale: string) {
    if (locale === 'ja') {
      return {
        ...breed,
        name: breed.nameJa,
        description: breed.descriptionJa,
      };
    } else {
      return {
        ...breed,
        name: breed.nameEn,
        description: breed.descriptionEn,
      };
    }
  }

  private localizeColor(color: any, locale: string) {
    if (locale === 'ja') {
      return {
        ...color,
        name: color.nameJa,
        description: color.descriptionJa,
      };
    } else {
      return {
        ...color,
        name: color.nameEn,
        description: color.descriptionEn,
      };
    }
  }
}
