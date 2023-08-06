import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SizeResolver } from 'src/modules/size/size.resolver';
import { SizeService } from 'src/modules/size/size.service';

@Module({
  imports: [PrismaModule],
  providers: [SizeResolver, SizeService],
})
export class SizeModule {}
