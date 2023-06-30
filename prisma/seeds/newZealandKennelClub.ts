import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const newZealandKennelClubs = [
  {
    id: 1,
    nameEn: 'Toys',
    nameJa: 'Toys',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Terriers',
    nameJa: 'Terriers',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Gundogs',
    nameJa: 'Gundogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Hounds',
    nameJa: 'Hounds',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Working',
    nameJa: 'Working',
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
    nameEn: 'Non Sporting',
    nameJa: 'Non Sporting',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedNewZealandKennelClubs() {
  for (const newZealandKennelClub of newZealandKennelClubs) {
    const newNewZealandKennelClub = await prisma.newZealandKennelClub.create({
      data: newZealandKennelClub,
    });
    console.log(
      `Created new body: ${newNewZealandKennelClub.nameEn} (ID: ${newNewZealandKennelClub.id})`,
    );
  }
}

export default seedNewZealandKennelClubs;
