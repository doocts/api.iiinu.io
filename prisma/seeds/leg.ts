import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const legs = [
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
    nameEn: 'Long-legged',
    nameJa: '長い四肢',
    descriptionJa:
      '脚が長く、体に比べて長い脚を持つ犬種が該当する。グレイハウンドやサルーキなどのシップ・ドッグが含まれる。',
    descriptionEn:
      'Refers to dog breeds with long legs that are proportionally longer compared to their body. Includes sighthound breeds like Greyhounds and Salukis.',
    slug: 'long',
  },
  {
    id: 2,
    nameEn: 'Moderate-legged',
    nameJa: '中程度の四肢',
    descriptionJa:
      '脚の長さが体に適度に調和している犬種が該当する。一般的な多くの犬種で見られる形状である。',
    descriptionEn:
      'Refers to dog breeds with legs of moderate length that are in proportion to their body. This shape is commonly seen in many dog breeds.',
    slug: 'moderate',
  },
  {
    id: 3,
    nameEn: 'Short-legged',
    nameJa: '短い四肢',
    descriptionJa:
      '脚が短く、体に比べて短い脚を持つ犬種が該当する。ダックスフンドやコーギーなどの短足犬が含まれる。',
    descriptionEn:
      'Refers to dog breeds with short legs that are proportionally shorter compared to their body. Includes short-legged breeds like Dachshunds and Corgis.',
    slug: 'short',
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

async function seedLegs() {
  for (const leg of legs) {
    const newLeg = await prisma.leg.create({
      data: leg,
    });
    console.log(`Created new body: ${newLeg.nameEn} (ID: ${newLeg.id})`);
  }
}

export default seedLegs;
