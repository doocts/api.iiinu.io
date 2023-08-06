import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BodyResolver } from 'src/modules/body/body.resolver';
import { BodyService } from 'src/modules/body/body.service';

@Module({
  imports: [PrismaModule],
  providers: [BodyResolver, BodyService],
})
export class BodyModule {}
