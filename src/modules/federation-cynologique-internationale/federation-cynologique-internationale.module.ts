import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma';
import { FederationCynologiqueInternationaleResolver } from './federation-cynologique-internationale.resolver';
import { FederationCynologiqueInternationaleService } from './federation-cynologique-internationale.service';

@Module({
  imports: [PrismaModule],
  providers: [
    FederationCynologiqueInternationaleResolver,
    FederationCynologiqueInternationaleService,
  ],
})
export class FederationCynologiqueInternationaleModule {}
