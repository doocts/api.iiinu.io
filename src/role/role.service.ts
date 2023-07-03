import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Role[]> {
    return this.prisma.role.findMany({
      include: { breed: true },
    });
  }

  findOne(id: number): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: { id },
      include: { breed: true },
    });
  }
}
