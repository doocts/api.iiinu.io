import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { ColorEntity } from '../color';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class ColorService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<ColorEntity[]> {
    const colorRecords = await this.prisma.color.findMany({
      include: { breeds: true },
    });

    return colorRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<ColorEntity | null> {
    const colorRecord = await this.prisma.color.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return colorRecord ? this.mapToEntity(colorRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): ColorEntity {
    const entity = new ColorEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.slug = record.slug ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breed: any) =>
        mapToBreedEntity(breed, locale),
      );
    }

    if (record.breedConnection) {
      entity.breedConnection = {
        totalCount: record.breedConnection.totalCount,
        edges: record.breedConnection.edges.map((edge: any) => {
          return {
            ...edge,
            node: mapToBreedEntity(edge.node, locale),
          };
        }),
      };
    }

    return entity;
  }
}
