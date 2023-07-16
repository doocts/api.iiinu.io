import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { EarEntity } from '../ear';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class EarService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<EarEntity[]> {
    const earRecords = await this.prisma.ear.findMany({
      include: { breeds: true },
    });

    return earRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<EarEntity | null> {
    const earRecord = await this.prisma.ear.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return earRecord ? this.mapToEntity(earRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): EarEntity {
    const entity = new EarEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.slug = record.slug ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
