import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const bodies = [
  {
    id: 0,
    nameEn: 'Unknown',
    slug: 'unknown',
    nameJa: '不明',
    descriptionJa: null,
    descriptionEn: null,
  },
  {
    id: 1,
    nameEn: 'Barrel-chested',
    slug: 'barrel',
    nameJa: 'バレル型',
    descriptionJa:
      '胴体が広く、胸部が強調されており、まるい形状を持つ犬種が該当する。',
    descriptionEn: 'Refers to dog breeds with a broad and barrel-shaped chest',
  },
  {
    id: 2,
    nameEn: 'Cobby build',
    slug: 'cobby',
    nameJa: 'コビー型',
    descriptionJa:
      '体が短く、脚が短くて太い、コンパクトな形状を持つ犬種が該当する。',
    descriptionEn: 'Refers to dog breeds with a short',
  },
  {
    id: 3,
    nameEn: 'Rectangular build',
    slug: 'rectangular',
    nameJa: '長方形型',
    descriptionJa:
      '体の長さが高さよりも長く、長方形の形状を持つ犬種が該当する。',
    descriptionEn:
      'Refers to dog breeds with a body length that is longer than their height',
  },
  {
    id: 4,
    nameEn: 'Slab-sided',
    slug: 'slab-side',
    nameJa: 'スラブサイド型',
    descriptionJa: '体が幅広く、胴体が平らで筋肉質な形状を持つ犬種が該当する。',
    descriptionEn: 'Refers to dog breeds with a wide-bodied',
  },
  {
    id: 5,
    nameEn: 'Square build',
    slug: 'square',
    nameJa: '正方形型',
    descriptionJa:
      '体の長さと高さがほぼ同じくらいで、四角い形状を持つ犬種が該当する。',
    descriptionEn:
      'Refers to dog breeds with a body length and height that are approximately the same',
  },
  {
    id: 6,
    nameEn: 'Other',
    slug: 'other',
    nameJa: 'その他',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedBodies() {
  for (const body of bodies) {
    const newBody = await prisma.body.create({
      data: body,
    });
    console.log(`Created new body: ${newBody.nameEn} (ID: ${newBody.id})`);
  }
}

export default seedBodies;
