import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const patterns = [
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
    nameEn: 'Bicolor',
    nameJa: 'バイカラー',
    slug: 'bicolor',
    descriptionJa: '体の2つの異なる色で構成されるパターン。',
    descriptionEn: 'Pattern consisting of two different colors on the body.',
  },
  {
    id: 2,
    nameEn: 'Brindle',
    nameJa: 'ブリンドル',
    slug: 'brindle',
    descriptionJa: '体にストライプ状の模様があるパターン。',
    descriptionEn: 'Pattern with stripes on the body.',
  },
  {
    id: 3,
    nameEn: 'Dapple',
    nameJa: 'ダップル',
    slug: 'dapple',
    descriptionJa:
      '色濃淡がバラバラで斑点のあるパターン。主にダックスフンドで見られる。',
    descriptionEn: '"Pattern with varying degrees of color and spots',
  },
  {
    id: 4,
    nameEn: 'Fleck',
    nameJa: 'フレック',
    slug: 'fleck',
    descriptionJa: '小さな斑点または斑があるパターン。',
    descriptionEn: 'Pattern with small spots or blotches.',
  },
  {
    id: 5,
    nameEn: 'Ghost Tan',
    nameJa: 'ゴーストタン',
    slug: 'ghost tan',
    descriptionJa: '基本色に対し薄い色の斑が規則正しく配置されたパターン。',
    descriptionEn:
      'Pattern with light-colored patches regularly placed against a basic color.',
  },
  {
    id: 6,
    nameEn: 'Grizzle',
    nameJa: 'グリズル',
    slug: 'grizzle',
    descriptionJa: '毛の先と根元で色が異なるパターン。',
    descriptionEn:
      'Pattern where the color of the hair tips is different from the roots.',
  },
  {
    id: 7,
    nameEn: 'Harlequin',
    nameJa: 'ハーレクイン',
    slug: 'harlequin',
    descriptionJa:
      '白地に大きな黒斑点のパターン。主にグレートデーンで見られる。',
    descriptionEn: '"Pattern of large black spots on a white background',
  },
  {
    id: 8,
    nameEn: 'Mask',
    nameJa: 'マスク',
    slug: 'mask',
    descriptionJa: '顔に他の部分と異なる色が現れるパターン。',
    descriptionEn:
      'Pattern where the face shows a color different from the rest of the body.',
  },
  {
    id: 9,
    nameEn: 'Merle',
    nameJa: 'メリル',
    slug: 'merle',
    descriptionJa: 'ダークコートにライトカラースポットが混じっているパターン。',
    descriptionEn: 'Pattern with light color spots mixed in a dark coat.',
  },
  {
    id: 10,
    nameEn: 'Parti',
    nameJa: 'パーティ',
    slug: 'parti',
    descriptionJa: '大部分が白色で一部が他の色のパターン。',
    descriptionEn: 'Pattern mostly white with some parts in another color.',
  },
  {
    id: 11,
    nameEn: 'Pinetar',
    nameJa: 'ピンタール',
    slug: 'pinetar',
    descriptionJa:
      '毛の根元が黒で、毛の先が別の色であるパターン。通常は金色、クリーム色、茶色、赤色など。',
    descriptionEn:
      '"Pattern where the fur base is black and the tips are a different color',
  },
  {
    id: 12,
    nameEn: 'Point',
    nameJa: 'ポイント',
    slug: 'point',
    descriptionJa: '耳、顔、足、尾が体の他の部分とは異なる色のパターン。',
    descriptionEn: '"Pattern where ears',
  },
  {
    id: 13,
    nameEn: 'Roan',
    nameJa: 'ローン',
    slug: 'roan',
    descriptionJa: '白毛と色毛が混在して全体的に薄い色合いを呈するパターン。',
    descriptionEn:
      'Mixed white and colored hairs that give an overall lighter appearance.',
  },
  {
    id: 14,
    nameEn: 'Sable',
    nameJa: 'セイブル',
    slug: 'sable',
    descriptionJa: '黒色の毛先に明るい毛の根元が混ざったパターン。',
    descriptionEn:
      'Pattern with a mix of light hair roots and black hair tips.',
  },
  {
    id: 15,
    nameEn: 'Saddle',
    nameJa: 'サドル',
    slug: 'saddle',
    descriptionJa:
      '背中部分が別の色で塗られているパターン。馬のサドルに似ている。',
    descriptionEn: '"Pattern where the back part is colored differently',
  },
  {
    id: 16,
    nameEn: 'Solid',
    nameJa: 'ソリッド',
    slug: 'solid',
    descriptionJa: '体全体が一色のパターン。',
    descriptionEn: 'Pattern where the entire body is a single color.',
  },
  {
    id: 17,
    nameEn: 'Spot',
    nameJa: 'スポット',
    slug: 'spot',
    descriptionJa: '一部の地色とは異なる色の斑点があるパターン。',
    descriptionEn:
      'Pattern with spots of a color different from some of the base color.',
  },
  {
    id: 18,
    nameEn: 'Tan',
    nameJa: 'タン',
    slug: 'tan',
    descriptionJa:
      '一部の体部分が黒や茶色といった異なる色で塗られたパターン。主に足、顔、胸部がタン色。',
    descriptionEn:
      '"Pattern where some parts of the body are colored differently',
  },
  {
    id: 19,
    nameEn: 'Tricolor',
    nameJa: 'トライカラー',
    slug: 'tricolor',
    descriptionJa: '主に黒、白、茶色の3色が混ざっているパターン。',
    descriptionEn: '"Pattern where three colors',
  },
  {
    id: 20,
    nameEn: 'Tuxedo',
    nameJa: 'タキシード',
    slug: 'tuxedo',
    descriptionJa: '体の大部分が黒で、顔、胸、足、腹部が白いパターン。',
    descriptionEn: '"Pattern mostly black with white face',
  },
  {
    id: 21,
    nameEn: 'Other',
    nameJa: 'その他',
    slug: 'other',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedPatterns() {
  for (const pattern of patterns) {
    const newPattern = await prisma.pattern.create({
      data: pattern,
    });
    console.log(
      `Created new body: ${newPattern.nameEn} (ID: ${newPattern.id})`,
    );
  }
}

export default seedPatterns;
