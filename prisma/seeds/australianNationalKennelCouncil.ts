import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const australianNationalKennelCouncils = [
  {
    id: 1,
    nameEn: 'Group 1 - Toys',
    nameJa: 'Group 1 - Toys',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Group 2 - Terriers',
    nameJa: 'Group 2 - Terriers',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Group 3 - Gundogs',
    nameJa: 'Group 3 - Gundogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Group 4 - Hounds',
    nameJa: 'Group 4 - Hounds',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Group 5 - Working Dogs',
    nameJa: 'Group 5 - Working Dogs',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Group 6 - Utility',
    nameJa: 'Group 6 - Utility',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 7,
    nameEn: 'Group 7 - Non Sporting',
    nameJa: 'Group 7 - Non Sporting',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedAustralianNationalKennelCouncils() {
  for (const australianNationalKennelCouncil of australianNationalKennelCouncils) {
    const newAustralianNationalKennelCouncil =
      await prisma.australianNationalKennelCouncil.create({
        data: australianNationalKennelCouncil,
      });
    console.log(
      `Created new body: ${newAustralianNationalKennelCouncil.nameEn} (ID: ${newAustralianNationalKennelCouncil.id})`,
    );
  }
}

export default seedAustralianNationalKennelCouncils;
