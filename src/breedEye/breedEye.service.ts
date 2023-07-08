import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BreedEyeService {
  constructor(private readonly prisma: PrismaService) {}

  async findByBreedId(breedId: number) {
    const breedEyes = await this.prisma.breedEye.findMany({
      where: {
        breedId: breedId,
      },
    });

    const eyePromises = breedEyes.map(async (breedEye) => {
      const eye = await this.prisma.eye.findUnique({
        where: {
          id: breedEye.eyeId,
        },
      });

      return { ...breedEye, eye };
    });

    return Promise.all(eyePromises);
  }
}
