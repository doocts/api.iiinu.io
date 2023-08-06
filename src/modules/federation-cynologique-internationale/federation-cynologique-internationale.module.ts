import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FederationCynologiqueInternationaleResolver } from 'src/modules/federation-cynologique-internationale/federation-cynologique-internationale.resolver';
import { FederationCynologiqueInternationaleService } from 'src/modules/federation-cynologique-internationale/federation-cynologique-internationale.service';

@Module({
  imports: [PrismaModule],
  providers: [
    FederationCynologiqueInternationaleResolver,
    FederationCynologiqueInternationaleService,
  ],
})
export class FederationCynologiqueInternationaleModule {}
