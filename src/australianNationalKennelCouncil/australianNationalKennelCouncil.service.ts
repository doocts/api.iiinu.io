import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AustralianNationalKennelCouncil } from './australianNationalKennelCouncil.entity';

@Injectable()
export class AustralianNationalKennelCouncilService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<AustralianNationalKennelCouncil[]> {
    return this.prisma.australianNationalKennelCouncil.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<AustralianNationalKennelCouncil | null> {
    return this.prisma.australianNationalKennelCouncil.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
