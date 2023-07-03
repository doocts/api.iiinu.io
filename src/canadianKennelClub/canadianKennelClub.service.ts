import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CanadianKennelClub } from './canadianKennelClub.entity';

@Injectable()
export class CanadianKennelClubService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<CanadianKennelClub[]> {
    return this.prisma.canadianKennelClub.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<CanadianKennelClub | null> {
    return this.prisma.canadianKennelClub.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
