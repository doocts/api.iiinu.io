import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { PatternEntity } from '../pattern';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

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
    entity.slug = record.slug ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breed: any) =>
        mapToBreedEntity(breed, locale),
      );
    }

    if (record.breedConnection) {
      entity.breedConnection = {
        totalCount: record.breedConnection.totalCount,
        edges: record.breedConnection.edges.map((edge: any) => {
          return {
            ...edge,
            node: mapToBreedEntity(edge.node, locale),
          };
        }),
      };
    }

    return entity;
  }
}
