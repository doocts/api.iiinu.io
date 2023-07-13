import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tail } from './tail.entity';
import { Breed } from '../breed/breed.entity';

@Injectable()
export class TailService {
  constructor(private prisma: PrismaService) {}

  async findAll(locale: string): Promise<Tail[]> {
    const tailRecords = await this.prisma.tail.findMany({
      include: { breeds: true },
    });

    return tailRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<Tail | null> {
    const tailRecord = await this.prisma.tail.findUnique({
      where: { id },
      include: { breeds: true },
    });

    return tailRecord ? this.mapToEntity(tailRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): Tail {
    const entity = new Tail();

    entity.locale = locale;
    entity.id = record.id;
    entity.nameEn = record.nameEn;
    entity.nameJa = record.nameJa;
    entity.descriptionEn = record.descriptionEn;
    entity.descriptionJa = record.descriptionJa;

    if (record.breeds) {
      entity.breeds = record.breeds.map((breedItem: any) => {
        const breedEntity = new Breed();

        breedEntity.locale = locale;
        breedEntity.id = breedItem.id;
        breedEntity.nameEn = breedItem.nameEn;
        breedEntity.nameJa = breedItem.nameJa;
        breedEntity.descriptionEn = breedItem.descriptionEn;
        breedEntity.descriptionJa = breedItem.descriptionJa;
        breedEntity.kana = breedItem.kana;
        breedEntity.minHeight = breedItem.minHeight;
        breedEntity.maxHeight = breedItem.maxHeight;
        breedEntity.minWeight = breedItem.minWeight;
        breedEntity.maxWeight = breedItem.maxWeight;
        breedEntity.americanKennelClub = breedItem.americanKennelClub;
        breedEntity.australianNationalKennelCouncil =
          breedItem.australianNationalKennelCouncil;
        breedEntity.colors = breedItem.colors;
        breedEntity.colorConnection = breedItem.colorConnection;
        breedEntity.eyes = breedItem.eyes;
        breedEntity.eyeConnection = breedItem.eyeConnection;
        breedEntity.patterns = breedItem.patterns;
        breedEntity.patternConnection = breedItem.patternConnection;
        breedEntity.canadianKennelClub = breedItem.canadianKennelClub;
        breedEntity.coat = breedItem.coat;
        breedEntity.country = breedItem.country;
        breedEntity.ear = breedItem.ear;
        breedEntity.federationCynologiqueInternationale =
          breedItem.federationCynologiqueInternationale;
        breedEntity.leg = breedItem.leg;
        breedEntity.newZealandKennelClub = breedItem.newZealandKennelClub;
        breedEntity.role = breedItem.role;
        breedEntity.size = breedItem.size;
        breedEntity.status = breedItem.status;
        breedEntity.tail = breedItem.tail;
        breedEntity.theKennelClub = breedItem.theKennelClub;
        breedEntity.unitedKennelClub = breedItem.unitedKennelClub;

        return breedEntity;
      });
    }

    return entity;
  }
}
