import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ears = [
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
    nameEn: 'Bat Ears',
    nameJa: 'バットイヤー',
    slug: 'bat',
    descriptionJa:
      '耳が大きく広がって立っている状態。フレンチ・ブルドッグなどで見られます。',
    descriptionEn: '"These ears are large and stand fully erect',
  },
  {
    id: 2,
    nameEn: 'Butterfly Ears',
    nameJa: 'バタフライイヤー',
    slug: 'butterfly',
    descriptionJa:
      '長い毛と立ち耳が特徴的で、名前の由来は蝶のように見えるから。パピヨン犬種で見られます。',
    descriptionEn: '"These ears stand erect and have long hair',
  },
  {
    id: 3,
    nameEn: 'Button Ears',
    nameJa: 'ボタンイヤー',
    slug: 'button',
    descriptionJa:
      '耳が前方に折りたたまれ、耳の前部が目に向かっている状態。ジャック・ラッセル・テリアなどで見られます。',
    descriptionEn: '"These ears fold forward close to the head',
  },
  {
    id: 4,
    nameEn: 'Candle Flame Ears',
    nameJa: 'キャンドルフレームイヤー',
    slug: 'candle-flame',
    descriptionJa:
      '耳が上に向かって細くなり、先端がやや曲がっている状態。ヨークシャーテリアなどで見られます。',
    descriptionEn: '"These ears taper towards the top',
  },
  {
    id: 5,
    nameEn: 'Cropped Ears',
    nameJa: '切耳',
    slug: 'crapped',
    descriptionJa:
      '外科手術によって立つように改変された耳。一部の国ではこの行為は禁止されている。',
    descriptionEn: '"These ears have been surgically altered to stand upright',
  },
  {
    id: 6,
    nameEn: 'Drop or Pendant Ears',
    nameJa: '垂れ耳',
    slug: 'drop',
    descriptionJa:
      '耳が完全に垂れ下がり、頭の側面に平らに当たっている状態。バセット・ハウンドやビーグルなどで見られます。',
    descriptionEn: '"These ears hang down fully from the base of the ears',
  },
  {
    id: 7,
    nameEn: 'Folded Ears',
    nameJa: 'フォールドイヤー',
    slug: 'folded',
    descriptionJa:
      '耳が頭部の横に平らに折りたたまれている状態。シャー・ペイなどで見られます。',
    descriptionEn: '"These ears are folded flat against the head',
  },
  {
    id: 8,
    nameEn: 'Pendant Ears',
    nameJa: 'ペンダントイヤー',
    slug: 'pendant',
    descriptionJa:
      '長い垂れ耳が特徴で、通常、耳の長さが頭部よりも長い。ブラッドハウンドなどで見られます。',
    descriptionEn: '"These are long drop ears',
  },
  {
    id: 9,
    nameEn: 'Prick or Erect Ears',
    nameJa: '立ち耳',
    slug: 'prick',
    descriptionJa:
      '犬の耳が完全に立っている状態。シベリアン・ハスキーやジャーマン・シェパードなどで見られます。',
    descriptionEn: '"These ears stand fully upright',
  },
  {
    id: 10,
    nameEn: 'Rose Ears',
    nameJa: 'ローズイヤー',
    slug: 'rose',
    descriptionJa:
      '耳が後方に折りたたまれ、内耳が前方に向いている状態。エンGLISH・ブルドッグやグレーハウンドなどで見られます。',
    descriptionEn: '"These ears fold backwards',
  },
  {
    id: 11,
    nameEn: 'Semi-prick or Semi-erect Ears',
    nameJa: '半立ち耳',
    slug: 'semi-prick',
    descriptionJa:
      '耳が部分的に立っていて、先端が折り曲がっている状態。ボーダーコリーなどで見られます。',
    descriptionEn:
      'These ears stand partially upright with the tips folding over. Seen in breeds like the Border Collie.',
  },
  {
    id: 12,
    nameEn: 'Other',
    nameJa: 'その他',
    slug: 'other',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedEars() {
  for (const ear of ears) {
    const newEar = await prisma.ear.create({
      data: ear,
    });
    console.log(`Created new body: ${newEar.nameEn} (ID: ${newEar.id})`);
  }
}

export default seedEars;
