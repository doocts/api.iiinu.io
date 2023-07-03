import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Body } from './body.entity';

@Injectable()
export class BodyService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Body[]> {
    return this.prisma.body.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Body | null> {
    return this.prisma.body.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
