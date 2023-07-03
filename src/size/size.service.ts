import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Size } from './size.entity';

@Injectable()
export class SizeService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Size[]> {
    return this.prisma.size.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Size | null> {
    return this.prisma.size.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
