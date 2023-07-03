import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Leg } from './leg.entity';

@Injectable()
export class LegService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Leg[]> {
    return this.prisma.leg.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Leg | null> {
    return this.prisma.leg.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
