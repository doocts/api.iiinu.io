import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { RoleResolver } from './role.resolver';
import { RoleService } from './role.service';

@Module({
  imports: [PrismaModule],
  providers: [RoleResolver, RoleService],
})
export class RoleModule {}
