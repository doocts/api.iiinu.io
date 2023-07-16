import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { SizeEntity } from '../size';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class SizeService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<SizeEntity[]> {
    const sizeRecords = await this.prisma.size.findMany({
      include: { breeds: true },
    });

    return sizeRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<SizeEntity | null> {
    const sizeRecord = await this.prisma.size.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return sizeRecord ? this.mapToEntity(sizeRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): SizeEntity {
    const entity = new SizeEntity();

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
