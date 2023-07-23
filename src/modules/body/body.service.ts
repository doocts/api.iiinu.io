import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { BodyEntity } from '../body';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class BodyService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<BodyEntity[]> {
    const bodyRecords = await this.prisma.body.findMany({
      include: { breeds: true },
    });

    return bodyRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<BodyEntity | null> {
    const bodyRecord = await this.prisma.body.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return bodyRecord ? this.mapToEntity(bodyRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): BodyEntity {
    const entity = new BodyEntity();

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
