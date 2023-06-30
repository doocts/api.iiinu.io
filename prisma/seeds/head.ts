import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const heads = [
  {
    id: 0,
    nameEn: 'Unknown',
    nameJa: '不明',
    descriptionJa: null,
    descriptionEn: null,
    slug: 'unknown',
  },
  {
    id: 1,
    nameEn: 'Brachycephalic',
    nameJa: 'ブラキセファリック',
    descriptionJa:
      '頭が幅広く、顔が短くて平らな形状を持つ犬種が該当する。フレンチ・ブルドッグやボストン・テリアなどが含まれる。',
    descriptionEn:
      'Refers to dog breeds with a wide head, short muzzle, and flat face. Includes breeds like French Bulldogs and Boston Terriers.',
    slug: 'brachycephalic',
  },
  {
    id: 2,
    nameEn: 'Dolichocephalic',
    nameJa: 'ドリセファリック',
    descriptionJa:
      '頭が長く、狭くて細長い形状を持つ犬種が該当する。グレイハウンドやボルゾイなどのシップ・ドッグの一部が含まれる。',
    descriptionEn:
      'Refers to dog breeds with a long, narrow, and elongated head shape. Includes some sighthound breeds like Greyhounds and Borzois.',
    slug: 'dolichocephalic',
  },
  {
    id: 3,
    nameEn: 'Mesocephalic',
    nameJa: 'メソセファリック',
    descriptionJa:
      '頭の形状が中間的で、幅と長さがバランス良く調和している犬種が該当する。一般的な多くの犬種で見られる形状である。',
    descriptionEn:
      'Refers to dog breeds with a medium head shape where width and length are balanced and harmonious. This shape is seen in many common breeds.',
    slug: 'mesocephalic',
  },
  {
    id: 4,
    nameEn: 'Other',
    nameJa: 'その他',
    descriptionJa: null,
    descriptionEn: null,
    slug: 'other',
  },
];

async function seedHeads() {
  for (const head of heads) {
    const newHead = await prisma.head.create({
      data: head,
    });
    console.log(`Created new body: ${newHead.nameEn} (ID: ${newHead.id})`);
  }
}

export default seedHeads;
