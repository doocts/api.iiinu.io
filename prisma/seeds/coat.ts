import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const coats = [
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
    nameEn: 'Curly Coat',
    nameJa: 'カーリーコート',
    slug: 'curly',
    descriptionJa:
      'カーリーやウェービーな被毛を持つ犬。定期的なグルーミングが必要な場合がある。',
    descriptionEn:
      'Dogs with curly or wavy hair. Can require regular grooming.',
  },
  {
    id: 2,
    nameEn: 'Double Coat',
    nameJa: 'ダブルコート',
    slug: 'double',
    descriptionJa:
      '密な下毛と長い外毛を持つ犬。季節によっては大量に抜け毛が出ることがある。',
    descriptionEn:
      'Dogs with a dense undercoat and longer outer coat. Can be seasonal shedders.',
  },
  {
    id: 3,
    nameEn: 'Hairless',
    nameJa: 'ヘアレス',
    slug: 'hairless',
    descriptionJa:
      'ほとんど毛がない犬。アレルギーを持つ人に理想的な犬種が多い。',
    descriptionEn:
      'Dogs with virtually no hair or fur. Can be ideal for allergy sufferers.',
  },
  {
    id: 4,
    nameEn: 'Long Coat',
    nameJa: 'ロングコート',
    slug: 'long',
    descriptionJa:
      '長く、しばしば流れるような被毛を持つ犬。定期的なグルーミングが必要。',
    descriptionEn: '"Dogs with lengthy',
  },
  {
    id: 5,
    nameEn: 'Medium Coat',
    nameJa: 'ミディアムコート',
    slug: 'medium',
    descriptionJa:
      '中程度の長さの被毛を持つ犬。グルーミングの必要性はさまざま。',
    descriptionEn: 'Dogs with moderate-length fur. Grooming needs can vary.',
  },
  {
    id: 6,
    nameEn: 'Short Coat',
    nameJa: 'ショートコート',
    slug: 'short',
    descriptionJa:
      '短く、スリークな被毛を持つ犬。一般的に手入れが少なくて済む。',
    descriptionEn: '"Dogs with short',
  },
  {
    id: 7,
    nameEn: 'Silky Coat',
    nameJa: 'シルキーコート',
    slug: 'silky',
    descriptionJa:
      '滑らかで光沢のある被毛を持つ犬。定期的なグルーミングが必要な場合がある。',
    descriptionEn: '"Dogs with smooth',
  },
  {
    id: 8,
    nameEn: 'Smooth Coat',
    nameJa: 'スムースコート',
    slug: 'smooth',
    descriptionJa: '短く、皮膚に密着した毛を持つ犬。手入れが少なくて済む。',
    descriptionEn: '"Dogs with short',
  },
  {
    id: 9,
    nameEn: 'Wire Coat (Rough Coat)',
    nameJa: 'ワイヤーコート（ラフコート）',
    slug: 'wire',
    descriptionJa: '硬く、ざらついた被毛を持つ犬。独特な見た目を提供。',
    descriptionEn: '"Dogs with hard',
  },
  {
    id: 10,
    nameEn: 'Other',
    nameJa: 'その他',
    slug: 'other',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedCoats() {
  for (const coat of coats) {
    const newCoat = await prisma.coat.create({
      data: coat,
    });
    console.log(`Created new body: ${newCoat.nameEn} (ID: ${newCoat.id})`);
  }
}

export default seedCoats;
