import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';

@Injectable()
export class BreedPatternService {
  constructor(private readonly prisma: PrismaService) {}

  async findByBreedId(breedId: number, locale: string) {
    const breedPatterns = await this.prisma.breedPattern.findMany({
      where: {
        breedId: breedId,
      },
    });

    const patternPromises = breedPatterns.map(async (breedPattern) => {
      const pattern = await this.prisma.pattern.findUnique({
        where: {
          id: breedPattern.patternId,
        },
      });

      const localizedPattern = this.localizePattern(pattern, locale);

      return { ...breedPattern, pattern: localizedPattern };
    });

    return Promise.all(patternPromises);
  }

  async findByPatternId(patternId: number, locale: string) {
    const breedPatterns = await this.prisma.breedPattern.findMany({
      where: {
        patternId: patternId,
      },
    });

    const breedPromises = breedPatterns.map(async (breedPattern) => {
      const breed = await this.prisma.breed.findUnique({
        where: {
          id: breedPattern.breedId,
        },
      });

      const localizedBreed = this.localizePattern(breed, locale);

      return { ...breedPattern, breed: localizedBreed };
    });

    return Promise.all(breedPromises);
  }

  private localizePattern(pattern: any, locale: string) {
    if (locale === 'ja') {
      return {
        ...pattern,
        name: pattern.nameJa,
        description: pattern.descriptionJa,
      };
    } else {
      return {
        ...pattern,
        name: pattern.nameEn,
        description: pattern.descriptionEn,
      };
    }
  }
}
