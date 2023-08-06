import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { TailEntity } from 'src/modules/tail';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from 'src/utils';

@Injectable()
export class TailService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<TailEntity[]> {
    const tailRecords = await this.prisma.tail.findMany({
      include: { breeds: true },
    });

    return tailRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<TailEntity | null> {
    const tailRecord = await this.prisma.tail.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return tailRecord ? this.mapToEntity(tailRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): TailEntity {
    const entity = new TailEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.slug = record.slug ?? null;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) =>
        mapToBreedEntity(breedItem, locale),
      );
    }

    return entity;
  }
}
