import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { BreedEntity } from '../breed';
import {
  BREED_ENTITY_FIELD_MAP,
  BREED_INCLUDE_FIELDS,
  COMMON_ENTITY_FIELD_MAP,
} from '../../utils';

@Injectable()
export class BreedService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<BreedEntity[]> {
    const breedRecords = await this.prisma.breed.findMany({
      include: BREED_INCLUDE_FIELDS,
    });

    return breedRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<BreedEntity | null> {
    const breedRecord = await this.prisma.breed.findUnique({
      where: { id },
      include: BREED_INCLUDE_FIELDS,
    });

    return breedRecord ? this.mapToEntity(breedRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): BreedEntity {
    const entity = new BreedEntity();
    entity.locale = locale;

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    for (const entityField in BREED_ENTITY_FIELD_MAP) {
      const recordField = BREED_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    return entity;
  }
}
