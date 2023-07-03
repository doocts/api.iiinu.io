import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NewZealandKennelClub } from './newZealandKennelClub.entity';

@Injectable()
export class NewZealandKennelClubService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<NewZealandKennelClub[]> {
    return this.prisma.newZealandKennelClub.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<NewZealandKennelClub | null> {
    return this.prisma.newZealandKennelClub.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
