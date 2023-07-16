import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { BodyResolver } from './body.resolver';
import { BodyService } from './body.service';

@Module({
  imports: [PrismaModule],
  providers: [BodyResolver, BodyService],
})
export class BodyModule {}
