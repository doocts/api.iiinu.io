import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { BreedEntity } from 'src/modules/breed';
import {
  BREED_ENTITY_FIELD_MAP,
  BREED_INCLUDE_FIELDS,
  COMMON_ENTITY_FIELD_MAP,
} from 'src/utils';

@Injectable()
export class BreedService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(
    locale: string,
    sort: string,
    filter: string,
  ): Promise<BreedEntity[]> {
    const sortField = locale === 'ja' ? 'kana' : 'nameEn';
    const sortClause = { [sortField]: sort };
    const whereClause = filter
      ? {
          OR: [
            { nameEn: { contains: filter } },
            { nameJa: { contains: filter } },
            { descriptionEn: { contains: filter } },
            { descriptionJa: { contains: filter } },
          ],
        }
      : undefined;
    const breedRecords = await this.prisma.breed.findMany({
      orderBy: sortClause,
      where: whereClause,
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

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    for (const entityField in BREED_ENTITY_FIELD_MAP) {
      const recordField = BREED_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;

    return entity;
  }
}
