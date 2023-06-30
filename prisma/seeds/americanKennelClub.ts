import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const americanKennelClubs = [
  {
    id: 1,
    nameEn: 'Sporting Group',
    nameJa: 'Sporting Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Hound Group',
    nameJa: 'Hound Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Working Group',
    nameJa: 'Working Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Terrier Group',
    nameJa: 'Terrier Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Toy Group',
    nameJa: 'Toy Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Non-Sporting Group',
    nameJa: 'Non-Sporting Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 7,
    nameEn: 'Herding Group',
    nameJa: 'Herding Group',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 8,
    nameEn: 'Miscellaneous Class',
    nameJa: 'Miscellaneous Class',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 9,
    nameEn: 'Foundation Stock Service',
    nameJa: 'Foundation Stock Service',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedAmericanKennelClubs() {
  for (const americanKennelClub of americanKennelClubs) {
    const newAmericanKennelClub = await prisma.americanKennelClub.create({
      data: americanKennelClub,
    });
    console.log(
      `Created new club: ${newAmericanKennelClub.nameEn} (ID: ${newAmericanKennelClub.id})`,
    );
  }
}

export default seedAmericanKennelClubs;
