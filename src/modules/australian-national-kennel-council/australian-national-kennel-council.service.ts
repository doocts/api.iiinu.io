import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { AustralianNationalKennelCouncilEntity } from 'src/modules/australian-national-kennel-council';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from 'src/utils';

@Injectable()
export class AustralianNationalKennelCouncilService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(
    locale: string,
  ): Promise<AustralianNationalKennelCouncilEntity[]> {
    const australianNationalKennelCouncilRecords =
      await this.prisma.australianNationalKennelCouncil.findMany({
        include: { breeds: true },
      });

    return australianNationalKennelCouncilRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<AustralianNationalKennelCouncilEntity | null> {
    const australianNationalKennelCouncilRecord =
      await this.prisma.australianNationalKennelCouncil.findUnique({
        where: { id },
        include: { breeds: true },
      });

    return australianNationalKennelCouncilRecord
      ? this.mapToEntity(australianNationalKennelCouncilRecord, locale)
      : null;
  }

  private mapToEntity(
    record: any,
    locale: string,
  ): AustralianNationalKennelCouncilEntity {
    const entity = new AustralianNationalKennelCouncilEntity();

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
