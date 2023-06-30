import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tails = [
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
    nameEn: 'Bloom Tail',
    nameJa: 'ブルーム・テール',
    slug: 'bloom',
    descriptionJa:
      '花開いた花の形をした尾の形状。尾が広がり、花のような形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a blooming flower. Seen in dog breeds with a tail that spreads out and resembles a blooming flower.',
  },
  {
    id: 2,
    nameEn: 'Bobtail',
    nameJa: 'ボビーテール',
    slug: 'bob',
    descriptionJa:
      '短く切れた尾または先端のない尾の形状。自然に短い尾を持つ犬種が該当する。',
    descriptionEn:
      'Tail that is naturally short or tailless. Seen in dog breeds with naturally short or no tails.',
  },
  {
    id: 3,
    nameEn: 'Brush Tail',
    nameJa: 'ブラッシュ・テール',
    slug: 'brush',
    descriptionJa:
      '毛の豊かな尾の形状。毛が豊かでフサフサした尾を持つ犬種が該当する。',
    descriptionEn:
      'Tail that is thick and bushy with abundant hair. Seen in dog breeds with a tail that is full and fluffy.',
  },
  {
    id: 4,
    nameEn: 'Crank Tail',
    nameJa: 'クランク・テール',
    slug: 'crank',
    descriptionJa:
      'クランクのような形状を持つ尾。尾がクランクのような形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a crank. Seen in dog breeds with a tail that forms a crank-like shape.',
  },
  {
    id: 5,
    nameEn: 'Curled Tail',
    nameJa: 'カールド・テール',
    slug: 'curl',
    descriptionJa: '曲がった形状を持つ尾。尾が曲がっている犬種が該当する。',
    descriptionEn:
      'Tail that has a curved shape. Seen in dog breeds with a tail that is curved.',
  },
  {
    id: 6,
    nameEn: 'Curly Tail or Corkscrew Tail',
    nameJa: '巻尾',
    slug: 'curly',
    descriptionJa: '巻いた形状を持つ尾。しっぽが巻いている犬種が該当する。',
    descriptionEn:
      'Tail with a curled or corkscrew shape. Seen in dog breeds with curly or coiled tails.',
  },
  {
    id: 7,
    nameEn: 'Docked Tail',
    nameJa: 'ドックド・テール',
    slug: 'dock',
    descriptionJa:
      '手術によって短く切断された尾の状態を指す。一部または全体が取り除かれる場合があり、犬種や地域によって異なる。',
    descriptionEn:
      '"Refers to the state of a tail that has been surgically shortened or removed. Part or all of the tail may be removed',
  },
  {
    id: 8,
    nameEn: 'Double Curled Tail',
    nameJa: 'ダブル・カールド・テール',
    slug: 'bouble',
    descriptionJa:
      '二重に曲がった形状を持つ尾。尾が二重に曲がっている犬種が該当する。',
    descriptionEn:
      'Tail that has a double curved shape. Seen in dog breeds with a tail that is double curved.',
  },
  {
    id: 9,
    nameEn: 'Drop Tail',
    nameJa: '垂れ尾',
    slug: 'drop',
    descriptionJa:
      '下向きに垂れ下がった尾の形状。尾が下向きに垂れている犬種が該当する。',
    descriptionEn:
      'Tail that hangs down in a downward direction. Seen in dog breeds with a tail that hangs down.',
  },
  {
    id: 10,
    nameEn: 'Fan Tail',
    nameJa: 'ファンテール',
    slug: 'fan',
    descriptionJa:
      '扇の形をした尾の形状。尾が広がって扇のような形状を持つ犬種が該当する。',
    descriptionEn: '"Tail that has a shape resembling a fan',
  },
  {
    id: 11,
    nameEn: 'Flagpole Tail',
    nameJa: 'フラッグポール・テール',
    slug: 'flagpole',
    descriptionJa:
      '旗竿のような形状を持つ尾。尾がまっすぐで直立した形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a flagpole. Seen in dog breeds with a tail that is straight and stands upright.',
  },
  {
    id: 12,
    nameEn: 'Gay Tail',
    nameJa: 'ゲイルテール',
    slug: 'gay',
    descriptionJa:
      '自然に立ち上がった尾の形状。尾が直立している犬種が該当する。',
    descriptionEn:
      'Tail that stands upright naturally. Seen in dog breeds with a naturally erect tail.',
  },
  {
    id: 13,
    nameEn: 'Hook Tail',
    nameJa: 'フック・テール',
    slug: 'hook',
    descriptionJa:
      'フックのような形状を持つ尾。尾が曲がってフックの形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a hook. Seen in dog breeds with a tail that is curved like a hook.',
  },
  {
    id: 14,
    nameEn: 'Key Tail',
    nameJa: '鍵尾',
    slug: 'key',
    descriptionJa:
      '鍵の形をした尾の形状。尾が鍵のような形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a key. Seen in dog breeds with a tail that has a key-like shape.',
  },
  {
    id: 15,
    nameEn: 'Kink Tail',
    nameJa: 'キンク・テール',
    slug: 'kink',
    descriptionJa: '曲がった形状を持つ尾。尾が曲がっている犬種が該当する。',
    descriptionEn:
      'Tail that has a bent or kinked shape. Seen in dog breeds with a tail that is bent or kinked.',
  },
  {
    id: 16,
    nameEn: 'Otter Tail',
    nameJa: 'オタータイル',
    slug: 'otter',
    descriptionJa: 'カワウソの尾の形状。太くて広がった尾を持つ犬種が該当する。',
    descriptionEn: '"Tail that resembles the tail of an otter',
  },
  {
    id: 17,
    nameEn: 'Pot Hook Tail',
    nameJa: 'ポットフック・テール',
    slug: 'pot',
    descriptionJa:
      'ポットフックのような形状を持つ尾。尾がポットフックの形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a pot hook. Seen in dog breeds with a tail that forms a pot hook-like shape.',
  },
  {
    id: 18,
    nameEn: 'Pump handle Tail',
    nameJa: 'パンピークテール',
    slug: 'pump',
    descriptionJa:
      'ポンプハンドルのような形状を持つ尾。尾がポンプハンドルのように曲がっている犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a pump handle. Seen in dog breeds with a tail that is curved like a pump handle.',
  },
  {
    id: 19,
    nameEn: 'Raised Tail',
    nameJa: '立ち尾',
    slug: 'rais',
    descriptionJa: '尾が立ち上がっている形状。尾が直立している犬種が該当する。',
    descriptionEn:
      'Tail that stands erect. Seen in dog breeds with a tail that stands upright.',
  },
  {
    id: 20,
    nameEn: 'Rat Tail',
    nameJa: 'ラットテール',
    slug: 'rat',
    descriptionJa:
      'ネズミの尾の形状。細長くて骨が感じられる尾を持つ犬種が該当する。',
    descriptionEn: '"Tail that resembles the tail of a rat',
  },
  {
    id: 21,
    nameEn: 'Ring Tail',
    nameJa: 'リング・テール',
    slug: 'ring',
    descriptionJa:
      '輪の形をした尾の形状。尾が輪のような形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that has a shape resembling a ring. Seen in dog breeds with a tail that forms a ring-like shape.',
  },
  {
    id: 22,
    nameEn: 'Saber Tail',
    nameJa: '剣尾',
    slug: 'saber',
    descriptionJa: '剣の形をした尾の形状。細く伸びた形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail with a thin and elongated shape resembling a saber. Seen in dog breeds with a slender and elongated tail shape.',
  },
  {
    id: 23,
    nameEn: 'Screw Tail',
    nameJa: 'スクリューテール',
    slug: 'screw',
    descriptionJa:
      '螺旋状に巻かれた尾の形状。尾が螺旋状に巻かれている犬種が該当する。',
    descriptionEn:
      'Tail that is tightly curled or coiled in a spiral shape. Seen in dog breeds with a tail that is tightly twisted or coiled.',
  },
  {
    id: 24,
    nameEn: 'Sickle Tail',
    nameJa: '鎌尾',
    slug: 'sickle',
    descriptionJa: '鎌の形をした尾の形状。曲がった形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail with a sickle-shaped curve. Seen in dog breeds with a curved tail shape.',
  },
  {
    id: 25,
    nameEn: 'Squirrel Tail',
    nameJa: 'スクワーラル・テール',
    slug: 'squirrel',
    descriptionJa:
      'リスの尾の形状。尾がリスの尾のような形状を持つ犬種が該当する。',
    descriptionEn:
      'Tail that resembles the tail of a squirrel. Seen in dog breeds with a tail that resembles the tail of a squirrel.',
  },
  {
    id: 26,
    nameEn: 'Stern Tail',
    nameJa: 'スターン・テール',
    slug: 'stem',
    descriptionJa:
      '尾が後ろ向きにカーブしている形状。尾が後ろに曲がっている犬種が該当する。',
    descriptionEn:
      'Tail that curves backward. Seen in dog breeds with a tail that curves backward.',
  },
  {
    id: 27,
    nameEn: 'Straight Tail',
    nameJa: '直尾',
    slug: 'straight',
    descriptionJa:
      'まっすぐな尾の形状。自然にまっすぐに伸びた尾を持つ犬種が該当する。',
    descriptionEn:
      'Straight tail that extends naturally in a straight line. Seen in dog breeds with naturally straight tails.',
  },
  {
    id: 28,
    nameEn: 'Whip Tail',
    nameJa: 'ホイップテール',
    slug: 'whip',
    descriptionJa:
      'ムチのような形状を持つ尾。尾が細長く伸びている犬種が該当する。',
    descriptionEn:
      'Tail that has a long and whip-like shape. Seen in dog breeds with a long and slender tail.',
  },
  {
    id: 29,
    nameEn: 'Other',
    nameJa: 'その他',
    slug: 'other',
    descriptionJa: null,
    descriptionEn: null,
  },
];

async function seedTails() {
  for (const tail of tails) {
    const newTail = await prisma.tail.create({
      data: tail,
    });
    console.log(`Created new body: ${newTail.nameEn} (ID: ${newTail.id})`);
  }
}

export default seedTails;
