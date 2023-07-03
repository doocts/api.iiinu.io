import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Breed } from './breed.entity';

@Injectable()
export class BreedService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Breed[]> {
    return this.prisma.breed.findMany();
  }

  findOne(id: number): Promise<Breed | null> {
    return this.prisma.breed.findUnique({
      where: { id },
    });
  }
}
