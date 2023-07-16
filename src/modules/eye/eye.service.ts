import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { EyeEntity } from '../eye';
import { COMMON_ENTITY_FIELD_MAP } from '../../utils';

@Injectable()
export class EyeService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private prisma: PrismaService,
  ) {}

  async findAll(locale: string): Promise<EyeEntity[]> {
    const eyeRecords = await this.prisma.eye.findMany({
      include: { breeds: true },
    });

    return eyeRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<EyeEntity | null> {
    const eyeRecord = await this.prisma.eye.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return eyeRecord ? this.mapToEntity(eyeRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): EyeEntity {
    const entity = new EyeEntity();

    for (const entityField in COMMON_ENTITY_FIELD_MAP) {
      const recordField = COMMON_ENTITY_FIELD_MAP[entityField];
      entity[entityField] = record[recordField];
    }

    entity.locale = locale;
    entity.breeds = record.breeds ?? null;
    entity.breedConnection = record.breedConnection ?? null;

    return entity;
  }
}
