import { PrismaClient } from '@prisma/client';
import seedAmericanKennelClubs from './americanKennelClub';
import seedAustralianNationalKennelCouncils from './australianNationalKennelCouncil';
import seedBodies from './body';
import seedBreedColors from './breedColor';
import seedBreedEyes from './breedEye';
import seedBreedPatterns from './breedPattern';
import seedBreeds from './breed';
import seedCanadianKennelClubs from './canadianKennelClub';
import seedCoats from './coat';
import seedColors from './color';
import seedCountries from './country';
import seedEars from './ear';
import seedEyes from './eye';
import seedFederationCynologiqueInternationales from './federationCynologiqueInternationale';
import seedHeads from './head';
import seedLegs from './leg';
import seedNewZealandKennelClubs from './newZealandKennelClub';
import seedPatterns from './pattern';
import seedRoles from './role';
import seedSizes from './size';
import seedStatuses from './status';
import seedTails from './tail';
import seedTheKennelClubs from './theKennelClub';
import seedUnitedKennelClubs from './unitedKennelClub';

const prisma = new PrismaClient();

async function main() {
  await seedAmericanKennelClubs();
  await seedAustralianNationalKennelCouncils();
  await seedBodies();
  await seedCanadianKennelClubs();
  await seedCoats();
  await seedColors();
  await seedCountries();
  await seedEars();
  await seedEyes();
  await seedFederationCynologiqueInternationales();
  await seedHeads();
  await seedLegs();
  await seedNewZealandKennelClubs();
  await seedPatterns();
  await seedRoles();
  await seedSizes();
  await seedStatuses();
  await seedTails();
  await seedTheKennelClubs();
  await seedUnitedKennelClubs();
  await seedBreeds();
  await seedBreedColors();
  await seedBreedEyes();
  await seedBreedPatterns();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
