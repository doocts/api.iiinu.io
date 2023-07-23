import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { AmericanKennelClubEntity } from '../american-kennel-club';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class AmericanKennelClubService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<AmericanKennelClubEntity[]> {
    const americanKennelClubRecords =
      await this.prisma.americanKennelClub.findMany({
        include: { breeds: true },
      });

    return americanKennelClubRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<AmericanKennelClubEntity | null> {
    const americanKennelClubRecord =
      await this.prisma.americanKennelClub.findUnique({
        where: { id },
        include: { breeds: true },
      });

    return americanKennelClubRecord
      ? this.mapToEntity(americanKennelClubRecord, locale)
      : null;
  }

  private mapToEntity(record: any, locale: string): AmericanKennelClubEntity {
    const entity = new AmericanKennelClubEntity();

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
