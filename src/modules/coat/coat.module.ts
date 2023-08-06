import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoatResolver } from 'src/modules/coat/coat.resolver';
import { CoatService } from 'src/modules/coat/coat.service';

@Module({
  imports: [PrismaModule],
  providers: [CoatResolver, CoatService],
})
export class CoatModule {}
