import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UnitedKennelClub } from './unitedKennelClub.entity';

@Injectable()
export class UnitedKennelClubService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<UnitedKennelClub[]> {
    return this.prisma.unitedKennelClub.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<UnitedKennelClub | null> {
    return this.prisma.unitedKennelClub.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
