import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Eye } from './eye.entity';

@Injectable()
export class EyeService {
  constructor(private prisma: PrismaService) {}

  async findAll(locale: string): Promise<Eye[]> {
    const eyeRecords = await this.prisma.eye.findMany({
      include: { breeds: true },
    });

    return eyeRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<Eye | null> {
    const eyeRecord = await this.prisma.eye.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return eyeRecord ? this.mapToEntity(eyeRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): Eye {
    const entity = new Eye();

    entity.locale = locale;
    entity.id = record.id;
    entity.nameEn = record.nameEn;
    entity.nameJa = record.nameJa;
    entity.descriptionEn = record.descriptionEn ?? null;
    entity.descriptionJa = record.descriptionJa ?? null;
    entity.breeds = record.breeds ?? null;
    entity.breedConnection = record.breedConnection ?? null;

    return entity;
  }
}
