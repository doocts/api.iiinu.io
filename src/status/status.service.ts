import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Status[]> {
    return this.prisma.status.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Status | null> {
    return this.prisma.status.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
