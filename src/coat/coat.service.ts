import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Coat } from './coat.entity';

@Injectable()
export class CoatService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Coat[]> {
    return this.prisma.coat.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Coat | null> {
    return this.prisma.coat.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
