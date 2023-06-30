import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const colors = [
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
    nameJa: 'ブラック',
    slug: 'black',
    descriptionJa:
      '犬の被毛が黒全体となる色。一部の品種では、黒の被毛は毛先まで深く色づいています。',
    descriptionEn: null,
  },
  {
    id: 2,
    nameEn: 'Blue',
    nameJa: 'ブルー',
    slug: 'blue',
    descriptionJa:
      '実際には青ではなく、淡い灰色から深い鼠色までの範囲を指します。',
    descriptionEn: null,
  },
  {
    id: 3,
    nameEn: 'Brown (Chocolate)',
    nameJa: 'ブラウン（チョコレート）',
    slug: 'brown',
    descriptionJa:
      '茶色の被毛で、その色合いは淡いキャラメル色から深いチョコレート色までさまざまです。',
    descriptionEn: null,
  },
  {
    id: 4,
    nameEn: 'Cream',
    nameJa: 'クリーム',
    slug: 'cream',
    descriptionJa:
      '薄い黄色から淡い茶色に近い色で、ホワイトよりも色味がついているものの、それほど濃くない色。',
    descriptionEn: null,
  },
  {
    id: 5,
    nameEn: 'Fawn',
    nameJa: 'フォーン',
    slug: 'fawn',
    descriptionJa:
      '淡黄色から淡茶色、淡い赤褐色を指す。これらの色は一般的にかなり淡い。',
    descriptionEn: null,
  },
  {
    id: 6,
    nameEn: 'Gold',
    nameJa: 'ゴールド',
    slug: 'gold',
    descriptionJa: '黄金色の毛色で、イエローよりも色が濃い傾向があります。',
    descriptionEn: null,
  },
  {
    id: 7,
    nameEn: 'Silver (Grey)',
    nameJa: 'グレー（シルバー）',
    slug: 'silver',
    descriptionJa: 'シルバーや灰色の毛色は、ブルーよりも明るい色を指します。',
    descriptionEn: null,
  },
  {
    id: 8,
    nameEn: 'Red',
    nameJa: 'レッド',
    slug: 'red',
    descriptionJa:
      '赤または赤褐色の被毛を指し、色は淡いシナモン色から深い銅色まで変化します。',
    descriptionEn: null,
  },
  {
    id: 9,
    nameEn: 'Tan',
    nameJa: 'タン',
    slug: 'tan',
    descriptionJa:
      '黄褐色の被毛を指し、その色合いは淡いから濃いまでさまざまです。',
    descriptionEn: null,
  },
  {
    id: 10,
    nameEn: 'White',
    nameJa: 'ホワイト',
    slug: 'white',
    descriptionJa:
      '犬の被毛が白全体となる色。完全に白い犬もいれば、部分的に白い犬もいます。',
    descriptionEn: null,
  },
  {
    id: 11,
    nameEn: 'Yellow',
    nameJa: 'イエロー',
    slug: 'yellow',
    descriptionJa:
      '黄色の被毛で、その色合いは淡いクリーム色から濃いゴールド色までさまざまです。',
    descriptionEn: null,
  },
  {
    id: 12,
    nameEn: 'Other',
    nameJa: 'その他',
    slug: 'other',
    descriptionJa: 'その他の被毛の色。',
    descriptionEn: null,
  },
];

async function seedColors() {
  for (const color of colors) {
    const newColor = await prisma.color.create({
      data: color,
    });
    console.log(`Created new body: ${newColor.nameEn} (ID: ${newColor.id})`);
  }
}

export default seedColors;
