import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { CanadianKennelClubEntity } from '../canadian-kennel-club';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class CanadianKennelClubService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<CanadianKennelClubEntity[]> {
    const canadianKennelClubRecords =
      await this.prisma.canadianKennelClub.findMany({
        include: { breeds: true },
      });

    return canadianKennelClubRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<CanadianKennelClubEntity | null> {
    const canadianKennelClubRecord =
      await this.prisma.canadianKennelClub.findUnique({
        where: { id },
        include: { breeds: true },
      });

    return canadianKennelClubRecord
      ? this.mapToEntity(canadianKennelClubRecord, locale)
      : null;
  }

  private mapToEntity(record: any, locale: string): CanadianKennelClubEntity {
    const entity = new CanadianKennelClubEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
