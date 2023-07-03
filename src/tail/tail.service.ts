import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tail } from './tail.entity';

@Injectable()
export class TailService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Tail[]> {
    return this.prisma.tail.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Tail | null> {
    return this.prisma.tail.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
