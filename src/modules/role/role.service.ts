import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { RoleEntity } from '../role';
import { COMMON_ENTITY_FIELD_MAP, mapToBreedEntity } from '../../utils';

@Injectable()
export class RoleService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<RoleEntity[]> {
    const roleRecords = await this.prisma.role.findMany({
      include: { breeds: true },
    });

    return roleRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<RoleEntity | null> {
    const roleRecord = await this.prisma.role.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return roleRecord ? this.mapToEntity(roleRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): RoleEntity {
    const entity = new RoleEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

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
