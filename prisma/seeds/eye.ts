import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const eyes = [
  {
    id: 0,
    nameEn: 'Unknown',
    nameJa: '不明',
    slug: 'unknown',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 1,
    nameEn: 'Black',
    nameJa: '黒',
    slug: 'black',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Blue',
    nameJa: '青',
    slug: 'blue',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Brown',
    nameJa: '茶',
    slug: 'brown',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Green',
    nameJa: '緑',
    slug: 'green',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Grey',
    nameJa: 'グレー',
    slug: 'grey',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Other',
    nameJa: 'その他',
    slug: 'other',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedEyes() {
  for (const eye of eyes) {
    const newEye = await prisma.eye.create({
      data: eye,
    });
    console.log(`Created new body: ${newEye.nameEn} (ID: ${newEye.id})`);
  }
}

export default seedEyes;
