import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';

@Injectable()
export class BreedEyeService {
  constructor(private readonly prisma: PrismaService) {}

  async findByBreedId(breedId: number, locale: string) {
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

      const localizedEye = this.localizeEye(eye, locale);

      return { ...breedEye, eye: localizedEye };
    });

    return Promise.all(eyePromises);
  }

  async findByEyeId(eyeId: number, locale: string) {
    const breedEyes = await this.prisma.breedEye.findMany({
      where: {
        eyeId: eyeId,
      },
    });

    const breedPromises = breedEyes.map(async (breedEye) => {
      const breed = await this.prisma.breed.findUnique({
        where: {
          id: breedEye.breedId,
        },
      });

      const localizedBreed = this.localizeEye(breed, locale);

      return { ...breedEye, breed: localizedBreed };
    });

    return Promise.all(breedPromises);
  }

  private localizeEye(eye: any, locale: string) {
    if (locale === 'ja') {
      return {
        ...eye,
        name: eye.nameJa,
        description: eye.descriptionJa,
      };
    } else {
      return {
        ...eye,
        name: eye.nameEn,
        description: eye.descriptionEn,
      };
    }
  }
}
