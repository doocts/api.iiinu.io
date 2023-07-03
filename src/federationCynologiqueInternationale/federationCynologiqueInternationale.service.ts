import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FederationCynologiqueInternationale } from './federationCynologiqueInternationale.entity';

@Injectable()
export class FederationCynologiqueInternationaleService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<FederationCynologiqueInternationale[]> {
    return this.prisma.federationCynologiqueInternationale.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<FederationCynologiqueInternationale | null> {
    return this.prisma.federationCynologiqueInternationale.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
