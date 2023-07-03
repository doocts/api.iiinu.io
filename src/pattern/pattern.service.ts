import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pattern } from './pattern.entity';

@Injectable()
export class PatternService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Pattern[]> {
    return this.prisma.pattern.findMany({
      include: { Breeds: true },
    });
  }

  findOne(id: number): Promise<Pattern | null> {
    return this.prisma.pattern.findUnique({
      where: { id },
      include: { Breeds: true },
    });
  }
}
