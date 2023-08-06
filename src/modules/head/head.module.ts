import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HeadResolver } from 'src/modules/head/head.resolver';
import { HeadService } from 'src/modules/head/head.service';

@Module({
  imports: [PrismaModule],
  providers: [HeadResolver, HeadService],
})
export class HeadModule {}
