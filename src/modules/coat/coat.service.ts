import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { CoatEntity } from 'src/modules/coat';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from 'src/utils';

@Injectable()
export class CoatService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<CoatEntity[]> {
    const coatRecords = await this.prisma.coat.findMany({
      include: { breeds: true },
    });

    return coatRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<CoatEntity | null> {
    const coatRecord = await this.prisma.coat.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return coatRecord ? this.mapToEntity(coatRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): CoatEntity {
    const entity = new CoatEntity();

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
