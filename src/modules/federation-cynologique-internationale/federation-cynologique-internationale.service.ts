import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { FederationCynologiqueInternationaleEntity } from '../federation-cynologique-internationale';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class FederationCynologiqueInternationaleService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(
    locale: string,
  ): Promise<FederationCynologiqueInternationaleEntity[]> {
    const federationCynologiqueInternationaleRecords =
      await this.prisma.federationCynologiqueInternationale.findMany({
        include: { breeds: true },
      });

    return federationCynologiqueInternationaleRecords.map((record: any) =>
      this.mapToEntity(record, locale),
    );
  }

  async findOne(
    id: number,
    locale: string,
  ): Promise<FederationCynologiqueInternationaleEntity | null> {
    const federationCynologiqueInternationaleRecord =
      await this.prisma.federationCynologiqueInternationale.findUnique({
        where: { id },
        include: { breeds: true },
      });

    return federationCynologiqueInternationaleRecord
      ? this.mapToEntity(federationCynologiqueInternationaleRecord, locale)
      : null;
  }

  private mapToEntity(
    record: any,
    locale: string,
  ): FederationCynologiqueInternationaleEntity {
    const entity = new FederationCynologiqueInternationaleEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.parentId = record.parentId ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
