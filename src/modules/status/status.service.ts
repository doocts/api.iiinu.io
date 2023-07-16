import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { StatusEntity } from '../status';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class StatusService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<StatusEntity[]> {
    const statusRecords = await this.prisma.status.findMany({
      include: { breeds: true },
    });

    return statusRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<StatusEntity | null> {
    const statusRecord = await this.prisma.status.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return statusRecord ? this.mapToEntity(statusRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): StatusEntity {
    const entity = new StatusEntity();

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
