import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { NewZealandKennelClubEntity } from 'src/modules/new-zealand-kennel-club';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from 'src/utils';

@Injectable()
export class NewZealandKennelClubService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<NewZealandKennelClubEntity[]> {
    const newZealandKennelClubRecords =
      await this.prisma.newZealandKennelClub.findMany({
        include: { breeds: true },
      });

    return newZealandKennelClubRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<NewZealandKennelClubEntity | null> {
    const newZealandKennelClubRecord =
      await this.prisma.newZealandKennelClub.findUnique({
        where: { id },
        include: { breeds: true },
      });

    return newZealandKennelClubRecord
      ? this.mapToEntity(newZealandKennelClubRecord, locale)
      : null;
  }

  private mapToEntity(record: any, locale: string): NewZealandKennelClubEntity {
    const entity = new NewZealandKennelClubEntity();

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
