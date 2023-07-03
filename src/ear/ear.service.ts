import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Ear } from './ear.entity';

@Injectable()
export class EarService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Ear[]> {
    return this.prisma.ear.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Ear | null> {
    return this.prisma.ear.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
