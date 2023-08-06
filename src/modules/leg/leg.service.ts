import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { LegEntity } from 'src/modules/leg';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from 'src/utils';

@Injectable()
export class LegService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<LegEntity[]> {
    const legRecords = await this.prisma.leg.findMany({
      include: { breeds: true },
    });

    return legRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<LegEntity | null> {
    const legRecord = await this.prisma.leg.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return legRecord ? this.mapToEntity(legRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): LegEntity {
    const entity = new LegEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.slug = record.slug ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
