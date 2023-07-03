import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Head } from './head.entity';

@Injectable()
export class HeadService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Head[]> {
    return this.prisma.head.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Head | null> {
    return this.prisma.head.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
