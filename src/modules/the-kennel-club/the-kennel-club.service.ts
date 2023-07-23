import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { TheKennelClubEntity } from '../the-kennel-club';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class TheKennelClubService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<TheKennelClubEntity[]> {
    const theKennelClubRecords = await this.prisma.theKennelClub.findMany({
      include: { breeds: true },
    });

    return theKennelClubRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<TheKennelClubEntity | null> {
    const theKennelClubRecord = await this.prisma.theKennelClub.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return theKennelClubRecord
      ? this.mapToEntity(theKennelClubRecord, locale)
      : null;
  }

  private mapToEntity(record: any, locale: string): TheKennelClubEntity {
    const entity = new TheKennelClubEntity();

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
