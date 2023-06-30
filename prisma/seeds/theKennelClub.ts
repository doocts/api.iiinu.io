import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const theKennelClubs = [
  {
    id: 1,
    nameEn: 'Gundog',
    nameJa: 'Gundog',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Hound',
    nameJa: 'Hound',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Pastoral',
    nameJa: 'Pastoral',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Terrier',
    nameJa: 'Terrier',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Toy',
    nameJa: 'Toy',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Utility',
    nameJa: 'Utility',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 7,
    nameEn: 'Working',
    nameJa: 'Working',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedTheKennelClubs() {
  for (const theKennelClub of theKennelClubs) {
    const newTheKennelClub = await prisma.theKennelClub.create({
      data: theKennelClub,
    });
    console.log(
      `Created new body: ${newTheKennelClub.nameEn} (ID: ${newTheKennelClub.id})`,
    );
  }
}

export default seedTheKennelClubs;
