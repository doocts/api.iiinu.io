import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sizes = [
  {
    id: 0,
    nameEn: 'Unknown',
    nameJa: '不明',
    slug: 'unknown',
    descriptionEn: null,
    descriptionJa: null,
  },
  {
    id: 1,
    nameEn: 'Giant Breeds',
    nameJa: '超大型犬',
    slug: 'giant',
    descriptionEn: null,
    descriptionJa: null,
  },
  {
    id: 2,
    nameEn: 'Large Breeds',
    nameJa: '大型犬',
    slug: 'large',
    descriptionEn: null,
    descriptionJa: null,
  },
  {
    id: 3,
    nameEn: 'Medium Breeds',
    nameJa: '中型犬',
    slug: 'medium',
    descriptionEn: null,
    descriptionJa: null,
  },
  {
    id: 4,
    nameEn: 'Small Breeds',
    nameJa: '小型犬',
    slug: 'small',
    descriptionEn: null,
    descriptionJa: null,
  },
  {
    id: 5,
    nameEn: 'Toy Breeds',
    nameJa: '超小型犬',
    slug: 'toy',
    descriptionEn: null,
    descriptionJa: null,
  },
];

async function seedSizes() {
  for (const size of sizes) {
    const newSize = await prisma.size.create({
      data: size,
    });
    console.log(`Created new body: ${newSize.nameEn} (ID: ${newSize.id})`);
  }
}

export default seedSizes;
