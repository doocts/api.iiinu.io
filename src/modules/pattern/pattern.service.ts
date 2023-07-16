import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { PatternEntity } from '../pattern';
import { COMMON_ENTITY_FIELD_MAP } from '../../utils';

@Injectable()
export class PatternService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<PatternEntity[]> {
    const patternRecords = await this.prisma.pattern.findMany({
      include: { breeds: true },
    });

    return patternRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(id: number, locale: string): Promise<PatternEntity | null> {
    const patternRecord = await this.prisma.pattern.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return patternRecord ? this.mapToEntity(patternRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): PatternEntity {
    const entity = new PatternEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.breeds = record.breeds ?? null;
    entity.breedConnection = record.breedConnection ?? null;

    return entity;
  }
}
