import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Eye } from './eye.entity';

@Injectable()
export class EyeService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Eye[]> {
    return this.prisma.eye.findMany({
      include: { Breeds: true },
    });
  }

  findOne(id: number): Promise<Eye | null> {
    return this.prisma.eye.findUnique({
      where: { id },
      include: { Breeds: true },
    });
  }
}
