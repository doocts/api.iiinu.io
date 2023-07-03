import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Country[]> {
    return this.prisma.country.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Country | null> {
    return this.prisma.country.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
