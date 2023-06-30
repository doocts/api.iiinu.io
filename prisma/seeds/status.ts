import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const statuses = [
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
    nameEn: 'Extinct',
    nameJa: '絶滅',
    slug: 'extinct',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Existent',
    nameJa: '生存',
    slug: 'existent',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Endangered',
    nameJa: '絶滅危惧',
    slug: 'endangered',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Rare',
    nameJa: '希少',
    slug: 'rare',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Unidentified',
    nameJa: '未確認',
    slug: 'unidentified',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedStatuses() {
  for (const status of statuses) {
    const newStatus = await prisma.status.create({
      data: status,
    });
    console.log(`Created new body: ${newStatus.nameEn} (ID: ${newStatus.id})`);
  }
}

export default seedStatuses;
