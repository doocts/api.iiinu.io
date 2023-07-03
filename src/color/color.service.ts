import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Color } from './color.entity';

@Injectable()
export class ColorService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Color[]> {
    return this.prisma.color.findMany({
      include: { Breeds: true },
    });
  }

  findOne(id: number): Promise<Color | null> {
    return this.prisma.color.findUnique({
      where: { id },
      include: { Breeds: true },
    });
  }
}
