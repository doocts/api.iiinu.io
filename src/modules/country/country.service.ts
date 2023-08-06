import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { CountryEntity } from 'src/modules/country';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from 'src/utils';

@Injectable()
export class CountryService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<CountryEntity[]> {
    const countryRecords = await this.prisma.country.findMany({
      include: { breeds: true },
    });

    return countryRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(id: number, locale: string): Promise<CountryEntity | null> {
    const countryRecord = await this.prisma.country.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return countryRecord ? this.mapToEntity(countryRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): CountryEntity {
    const entity = new CountryEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.slug = record.slug ?? null;
    entity.parentId = record.parentId ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
