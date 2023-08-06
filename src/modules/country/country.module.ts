import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CountryResolver } from 'src/modules/country/country.resolver';
import { CountryService } from 'src/modules/country/country.service';

@Module({
  imports: [PrismaModule],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
