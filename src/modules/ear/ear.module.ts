import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EarResolver } from 'src/modules/ear/ear.resolver';
import { EarService } from 'src/modules/ear/ear.service';

@Module({
  imports: [PrismaModule],
  providers: [EarResolver, EarService],
})
export class EarModule {}
