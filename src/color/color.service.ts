import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Color } from './color.entity';

@Injectable()
export class ColorService {
  constructor(private prisma: PrismaService) {}

  async findAll(locale: string): Promise<Color[]> {
    const colorRecords = await this.prisma.color.findMany({
      include: { breeds: true },
    });

    return colorRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<Color | null> {
    const colorRecord = await this.prisma.color.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return colorRecord ? this.mapToEntity(colorRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): Color {
    const entity = new Color();

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
