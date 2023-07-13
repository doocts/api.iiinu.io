import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pattern } from './pattern.entity';

@Injectable()
export class PatternService {
  constructor(private prisma: PrismaService) {}

  async findAll(locale: string): Promise<Pattern[]> {
    const patternRecords = await this.prisma.pattern.findMany({
      include: { breeds: true },
    });

    return patternRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(id: number, locale: string): Promise<Pattern | null> {
    const patternRecord = await this.prisma.pattern.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return patternRecord ? this.mapToEntity(patternRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): Pattern {
    const entity = new Pattern();

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
