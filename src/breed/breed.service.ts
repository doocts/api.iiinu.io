import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Breed } from './breed.entity';

@Injectable()
export class BreedService {
  constructor(private prisma: PrismaService) {}

  async findAll(locale: string): Promise<Breed[]> {
    const breedRecords = await this.prisma.breed.findMany({
      include: {
        americanKennelClub: true,
        australianNationalKennelCouncil: true,
        body: true,
        canadianKennelClub: true,
        coat: true,
        colors: true,
        country: true,
        ear: true,
        eyes: true,
        federationCynologiqueInternationale: true,
        head: true,
        leg: true,
        newZealandKennelClub: true,
        patterns: true,
        role: true,
        size: true,
        status: true,
        tail: true,
        theKennelClub: true,
        unitedKennelClub: true,
      },
    });

    return breedRecords.map((record: any) => this.mapToEntity(record, locale));
  }

  async findOne(id: number, locale: string): Promise<Breed | null> {
    const breedRecord = await this.prisma.breed.findUnique({
      where: { id },
      include: {
        americanKennelClub: true,
        australianNationalKennelCouncil: true,
        body: true,
        canadianKennelClub: true,
        coat: true,
        colors: true,
        country: true,
        ear: true,
        eyes: true,
        federationCynologiqueInternationale: true,
        head: true,
        leg: true,
        newZealandKennelClub: true,
        patterns: true,
        role: true,
        size: true,
        status: true,
        tail: true,
        theKennelClub: true,
        unitedKennelClub: true,
      },
    });

    return breedRecord ? this.mapToEntity(breedRecord, locale) : null;
  }

  private mapToEntity(record: any, locale: string): Breed {
    const entity = new Breed();

    entity.locale = locale;
    entity.id = record.id;
    entity.nameEn = record.nameEn;
    entity.nameJa = record.nameJa;
    entity.kana = record.kana;
    entity.minHeight = record.minHeight;
    entity.maxHeight = record.maxHeight;
    entity.minWeight = record.minWeight;
    entity.maxWeight = record.maxWeight;
    entity.descriptionEn = record.descriptionEn;
    entity.descriptionJa = record.descriptionJa;
    entity.historyEn = record.historyEn;
    entity.historyJa = record.historyJa;
    entity.featuresJa = record.featuresJa;
    entity.featuresEn = record.featuresEn;
    entity.traitsJa = record.traitsJa;
    entity.traitsEn = record.traitsEn;
    entity.healthJa = record.healthJa;
    entity.healthEn = record.healthEn;
    entity.notesJa = record.notesJa;
    entity.notesEn = record.notesEn;
    entity.originJa = record.originJa;
    entity.originEn = record.originEn;
    entity.americanKennelClub = record.americanKennelClub ?? null;
    entity.australianNationalKennelCouncil =
      record.australianNationalKennelCouncil ?? null;
    entity.body = record.body ?? null;
    entity.canadianKennelClub = record.canadianKennelClub ?? null;
    entity.coat = record.coat ?? null;
    entity.colors = record.colors ?? null;
    entity.colorConnection = record.colorConnection ?? null;
    entity.country = record.country ?? null;
    entity.ear = record.ear ?? null;
    entity.eyes = record.eyes ?? null;
    entity.eyeConnection = record.eyeConnection ?? null;
    entity.federationCynologiqueInternationale =
      record.federationCynologiqueInternationale ?? null;
    entity.head = record.head ?? null;
    entity.leg = record.leg ?? null;
    entity.newZealandKennelClub = record.newZealandKennelClub ?? null;
    entity.patterns = record.patterns ?? null;
    entity.patternConnection = record.patternConnection ?? null;
    entity.role = record.role ?? null;
    entity.size = record.size ?? null;
    entity.status = record.status ?? null;
    entity.tail = record.tail ?? null;
    entity.theKennelClub = record.theKennelClub ?? null;
    entity.unitedKennelClub = record.unitedKennelClub ?? null;

    return entity;
  }
}
