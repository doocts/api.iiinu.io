import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const unitedKennelClubs = [
  {
    id: 1,
    nameEn: 'Companion Dog',
    nameJa: 'Companion Dog',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Guardian Dog',
    nameJa: 'Guardian Dog',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Gun Dog',
    nameJa: 'Gun Dog',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Herding Dog',
    nameJa: 'Herding Dog',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Northern Breed',
    nameJa: 'Northern Breed',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Scenthound',
    nameJa: 'Scenthound',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 7,
    nameEn: 'Sighthound and Pariah',
    nameJa: 'Sighthound and Pariah',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 8,
    nameEn: 'Terrier',
    nameJa: 'Terrier',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedUnitedKennelClubs() {
  for (const unitedKennelClub of unitedKennelClubs) {
    const newUnitedKennelClub = await prisma.unitedKennelClub.create({
      data: unitedKennelClub,
    });
    console.log(
      `Created new body: ${newUnitedKennelClub.nameEn} (ID: ${newUnitedKennelClub.id})`,
    );
  }
}

export default seedUnitedKennelClubs;
