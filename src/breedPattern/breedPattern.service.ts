import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BreedPatternService {
  constructor(private readonly prisma: PrismaService) {}

  async findByBreedId(breedId: number) {
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

      return { ...breedPattern, pattern };
    });

    return Promise.all(patternPromises);
  }
}
