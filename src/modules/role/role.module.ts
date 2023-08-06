import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoleResolver } from 'src/modules/role/role.resolver';
import { RoleService } from 'src/modules/role/role.service';

@Module({
  imports: [PrismaModule],
  providers: [RoleResolver, RoleService],
})
export class RoleModule {}
