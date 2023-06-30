import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const canadianKennelClubs = [
  {
    id: 1,
    nameEn: 'Sporting Dogs',
    nameJa: 'Sporting Dogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Hounds',
    nameJa: 'Hounds',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Working Dogs',
    nameJa: 'Working Dogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Terriers',
    nameJa: 'Terriers',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Toy Dogs',
    nameJa: 'Toy Dogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Non-Sporting Dogs',
    nameJa: 'Non-Sporting Dogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 7,
    nameEn: 'Herding Dogs',
    nameJa: 'Herding Dogs',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedCanadianKennelClubs() {
  for (const canadianKennelClub of canadianKennelClubs) {
    const newCanadianKennelClub = await prisma.canadianKennelClub.create({
      data: canadianKennelClub,
    });
    console.log(
      `Created new body: ${newCanadianKennelClub.nameEn} (ID: ${newCanadianKennelClub.id})`,
    );
  }
}

export default seedCanadianKennelClubs;
