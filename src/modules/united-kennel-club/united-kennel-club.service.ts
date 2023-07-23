import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { UnitedKennelClubEntity } from '../united-kennel-club';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class UnitedKennelClubService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<UnitedKennelClubEntity[]> {
    const unitedKennelClubRecords = await this.prisma.unitedKennelClub.findMany(
      {
        include: { breeds: true },
      },
    );

    return unitedKennelClubRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<UnitedKennelClubEntity | null> {
    const unitedKennelClubRecord =
      await this.prisma.unitedKennelClub.findUnique({
        where: { id },
        include: { breeds: true },
      });

    return unitedKennelClubRecord
      ? this.mapToEntity(unitedKennelClubRecord, locale)
      : null;
  }

  private mapToEntity(record: any, locale: string): UnitedKennelClubEntity {
    const entity = new UnitedKennelClubEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
