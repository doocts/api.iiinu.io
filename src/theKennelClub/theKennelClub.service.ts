import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TheKennelClub } from './theKennelClub.entity';

@Injectable()
export class TheKennelClubService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<TheKennelClub[]> {
    return this.prisma.theKennelClub.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<TheKennelClub | null> {
    return this.prisma.theKennelClub.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
