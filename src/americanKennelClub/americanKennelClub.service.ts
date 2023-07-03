import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AmericanKennelClub } from './americanKennelClub.entity';

@Injectable()
export class AmericanKennelClubService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<AmericanKennelClub[]> {
    return this.prisma.americanKennelClub.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<AmericanKennelClub | null> {
    return this.prisma.americanKennelClub.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
