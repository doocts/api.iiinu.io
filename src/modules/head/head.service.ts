import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { HeadEntity } from '../head';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class HeadService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<HeadEntity[]> {
    const headRecords = await this.prisma.head.findMany({
      include: { breeds: true },
    });

    return headRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<HeadEntity | null> {
    const headRecord = await this.prisma.head.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return headRecord ? this.mapToEntity(headRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): HeadEntity {
    const entity = new HeadEntity();

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
