import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const breedEyes = [
  {
    breedId: 1,
    eyeId: 3,
  },
  {
    breedId: 2,
    eyeId: 1,
  },
  {
    breedId: 3,
    eyeId: 3,
  },
  {
    breedId: 4,
    eyeId: 3,
  },
  {
    breedId: 5,
    eyeId: 3,
  },
  {
    breedId: 6,
    eyeId: 3,
  },
  {
    breedId: 7,
    eyeId: 3,
  },
  {
    breedId: 8,
    eyeId: 1,
  },
  {
    breedId: 9,
    eyeId: 3,
  },
  {
    breedId: 10,
    eyeId: 1,
  },
  {
    breedId: 11,
    eyeId: 3,
  },
  {
    breedId: 12,
    eyeId: 3,
  },
  {
    breedId: 13,
    eyeId: 3,
  },
  {
    breedId: 14,
    eyeId: 3,
  },
  {
    breedId: 15,
    eyeId: 3,
  },
  {
    breedId: 16,
    eyeId: 3,
  },
  {
    breedId: 17,
    eyeId: 3,
  },
  {
    breedId: 18,
    eyeId: 3,
  },
  {
    breedId: 19,
    eyeId: 1,
  },
  {
    breedId: 20,
    eyeId: 3,
  },
  {
    breedId: 21,
    eyeId: 3,
  },
  {
    breedId: 22,
    eyeId: 3,
  },
  {
    breedId: 23,
    eyeId: 3,
  },
  {
    breedId: 24,
    eyeId: 3,
  },
  {
    breedId: 25,
    eyeId: 3,
  },
  {
    breedId: 26,
    eyeId: 3,
  },
  {
    breedId: 27,
    eyeId: 3,
  },
  {
    breedId: 28,
    eyeId: 6,
  },
  {
    breedId: 29,
    eyeId: 3,
  },
  {
    breedId: 30,
    eyeId: 3,
  },
  {
    breedId: 31,
    eyeId: 3,
  },
  {
    breedId: 32,
    eyeId: 6,
  },
  {
    breedId: 33,
    eyeId: 3,
  },
  {
    breedId: 34,
    eyeId: 3,
  },
  {
    breedId: 35,
    eyeId: 3,
  },
  {
    breedId: 36,
    eyeId: 3,
  },
  {
    breedId: 37,
    eyeId: 3,
  },
  {
    breedId: 38,
    eyeId: 3,
  },
  {
    breedId: 39,
    eyeId: 3,
  },
  {
    breedId: 40,
    eyeId: 3,
  },
  {
    breedId: 41,
    eyeId: 3,
  },
  {
    breedId: 42,
    eyeId: 3,
  },
  {
    breedId: 43,
    eyeId: 3,
  },
  {
    breedId: 44,
    eyeId: 3,
  },
  {
    breedId: 45,
    eyeId: 3,
  },
  {
    breedId: 46,
    eyeId: 3,
  },
  {
    breedId: 47,
    eyeId: 3,
  },
  {
    breedId: 48,
    eyeId: 3,
  },
  {
    breedId: 49,
    eyeId: 3,
  },
  {
    breedId: 50,
    eyeId: 3,
  },
  {
    breedId: 51,
    eyeId: 3,
  },
  {
    breedId: 52,
    eyeId: 3,
  },
  {
    breedId: 53,
    eyeId: 0,
  },
  {
    breedId: 54,
    eyeId: 3,
  },
  {
    breedId: 55,
    eyeId: 3,
  },
  {
    breedId: 56,
    eyeId: 3,
  },
  {
    breedId: 57,
    eyeId: 3,
  },
  {
    breedId: 58,
    eyeId: 3,
  },
  {
    breedId: 59,
    eyeId: 3,
  },
  {
    breedId: 60,
    eyeId: 3,
  },
  {
    breedId: 61,
    eyeId: 3,
  },
  {
    breedId: 62,
    eyeId: 3,
  },
  {
    breedId: 63,
    eyeId: 3,
  },
  {
    breedId: 64,
    eyeId: 3,
  },
  {
    breedId: 65,
    eyeId: 3,
  },
  {
    breedId: 66,
    eyeId: 3,
  },
  {
    breedId: 67,
    eyeId: 3,
  },
  {
    breedId: 68,
    eyeId: 3,
  },
  {
    breedId: 69,
    eyeId: 6,
  },
  {
    breedId: 70,
    eyeId: 3,
  },
  {
    breedId: 71,
    eyeId: 6,
  },
  {
    breedId: 72,
    eyeId: 6,
  },
  {
    breedId: 73,
    eyeId: 3,
  },
  {
    breedId: 74,
    eyeId: 6,
  },
  {
    breedId: 75,
    eyeId: 6,
  },
  {
    breedId: 76,
    eyeId: 6,
  },
  {
    breedId: 77,
    eyeId: 6,
  },
  {
    breedId: 78,
    eyeId: 6,
  },
  {
    breedId: 79,
    eyeId: 6,
  },
  {
    breedId: 80,
    eyeId: 6,
  },
  {
    breedId: 81,
    eyeId: 6,
  },
  {
    breedId: 82,
    eyeId: 6,
  },
  {
    breedId: 83,
    eyeId: 6,
  },
  {
    breedId: 84,
    eyeId: 6,
  },
  {
    breedId: 85,
    eyeId: 6,
  },
  {
    breedId: 86,
    eyeId: 6,
  },
  {
    breedId: 87,
    eyeId: 6,
  },
  {
    breedId: 88,
    eyeId: 6,
  },
  {
    breedId: 89,
    eyeId: 6,
  },
  {
    breedId: 90,
    eyeId: 3,
  },
  {
    breedId: 91,
    eyeId: 3,
  },
  {
    breedId: 92,
    eyeId: 3,
  },
  {
    breedId: 93,
    eyeId: 3,
  },
  {
    breedId: 94,
    eyeId: 3,
  },
  {
    breedId: 95,
    eyeId: 3,
  },
  {
    breedId: 96,
    eyeId: 3,
  },
  {
    breedId: 97,
    eyeId: 3,
  },
  {
    breedId: 98,
    eyeId: 3,
  },
  {
    breedId: 99,
    eyeId: 3,
  },
  {
    breedId: 100,
    eyeId: 3,
  },
  {
    breedId: 101,
    eyeId: 6,
  },
  {
    breedId: 102,
    eyeId: 6,
  },
  {
    breedId: 103,
    eyeId: 3,
  },
  {
    breedId: 104,
    eyeId: 6,
  },
  {
    breedId: 105,
    eyeId: 6,
  },
  {
    breedId: 106,
    eyeId: 6,
  },
  {
    breedId: 107,
    eyeId: 6,
  },
  {
    breedId: 108,
    eyeId: 6,
  },
  {
    breedId: 109,
    eyeId: 6,
  },
  {
    breedId: 110,
    eyeId: 3,
  },
  {
    breedId: 111,
    eyeId: 3,
  },
  {
    breedId: 112,
    eyeId: 3,
  },
  {
    breedId: 113,
    eyeId: 3,
  },
  {
    breedId: 114,
    eyeId: 3,
  },
  {
    breedId: 115,
    eyeId: 3,
  },
  {
    breedId: 116,
    eyeId: 3,
  },
  {
    breedId: 117,
    eyeId: 3,
  },
  {
    breedId: 118,
    eyeId: 3,
  },
  {
    breedId: 119,
    eyeId: 3,
  },
  {
    breedId: 120,
    eyeId: 3,
  },
  {
    breedId: 121,
    eyeId: 3,
  },
  {
    breedId: 122,
    eyeId: 3,
  },
  {
    breedId: 123,
    eyeId: 3,
  },
  {
    breedId: 124,
    eyeId: 3,
  },
  {
    breedId: 125,
    eyeId: 3,
  },
  {
    breedId: 126,
    eyeId: 3,
  },
  {
    breedId: 127,
    eyeId: 3,
  },
  {
    breedId: 128,
    eyeId: 3,
  },
  {
    breedId: 129,
    eyeId: 3,
  },
  {
    breedId: 130,
    eyeId: 3,
  },
  {
    breedId: 131,
    eyeId: 3,
  },
  {
    breedId: 132,
    eyeId: 3,
  },
  {
    breedId: 133,
    eyeId: 3,
  },
  {
    breedId: 134,
    eyeId: 3,
  },
  {
    breedId: 135,
    eyeId: 3,
  },
  {
    breedId: 136,
    eyeId: 3,
  },
  {
    breedId: 137,
    eyeId: 3,
  },
  {
    breedId: 138,
    eyeId: 6,
  },
  {
    breedId: 139,
    eyeId: 3,
  },
  {
    breedId: 140,
    eyeId: 3,
  },
  {
    breedId: 141,
    eyeId: 3,
  },
  {
    breedId: 142,
    eyeId: 3,
  },
  {
    breedId: 143,
    eyeId: 3,
  },
  {
    breedId: 144,
    eyeId: 3,
  },
  {
    breedId: 145,
    eyeId: 3,
  },
  {
    breedId: 146,
    eyeId: 3,
  },
  {
    breedId: 147,
    eyeId: 3,
  },
  {
    breedId: 148,
    eyeId: 3,
  },
  {
    breedId: 149,
    eyeId: 3,
  },
  {
    breedId: 150,
    eyeId: 3,
  },
  {
    breedId: 151,
    eyeId: 3,
  },
  {
    breedId: 152,
    eyeId: 3,
  },
  {
    breedId: 153,
    eyeId: 3,
  },
  {
    breedId: 154,
    eyeId: 3,
  },
  {
    breedId: 155,
    eyeId: 3,
  },
  {
    breedId: 156,
    eyeId: 3,
  },
  {
    breedId: 157,
    eyeId: 3,
  },
  {
    breedId: 158,
    eyeId: 3,
  },
  {
    breedId: 159,
    eyeId: 3,
  },
  {
    breedId: 160,
    eyeId: 3,
  },
  {
    breedId: 161,
    eyeId: 3,
  },
  {
    breedId: 162,
    eyeId: 3,
  },
  {
    breedId: 163,
    eyeId: 3,
  },
  {
    breedId: 164,
    eyeId: 3,
  },
  {
    breedId: 165,
    eyeId: 3,
  },
  {
    breedId: 166,
    eyeId: 3,
  },
  {
    breedId: 167,
    eyeId: 3,
  },
  {
    breedId: 168,
    eyeId: 3,
  },
  {
    breedId: 169,
    eyeId: 6,
  },
  {
    breedId: 170,
    eyeId: 3,
  },
  {
    breedId: 171,
    eyeId: 3,
  },
  {
    breedId: 172,
    eyeId: 3,
  },
  {
    breedId: 173,
    eyeId: 3,
  },
  {
    breedId: 174,
    eyeId: 3,
  },
  {
    breedId: 175,
    eyeId: 3,
  },
  {
    breedId: 176,
    eyeId: 6,
  },
  {
    breedId: 177,
    eyeId: 3,
  },
  {
    breedId: 178,
    eyeId: 3,
  },
  {
    breedId: 179,
    eyeId: 3,
  },
  {
    breedId: 180,
    eyeId: 3,
  },
  {
    breedId: 181,
    eyeId: 3,
  },
  {
    breedId: 182,
    eyeId: 3,
  },
  {
    breedId: 183,
    eyeId: 3,
  },
  {
    breedId: 184,
    eyeId: 3,
  },
  {
    breedId: 185,
    eyeId: 3,
  },
  {
    breedId: 186,
    eyeId: 3,
  },
  {
    breedId: 187,
    eyeId: 3,
  },
  {
    breedId: 188,
    eyeId: 3,
  },
  {
    breedId: 189,
    eyeId: 6,
  },
  {
    breedId: 190,
    eyeId: 3,
  },
  {
    breedId: 191,
    eyeId: 6,
  },
  {
    breedId: 192,
    eyeId: 3,
  },
  {
    breedId: 193,
    eyeId: 6,
  },
  {
    breedId: 194,
    eyeId: 3,
  },
  {
    breedId: 195,
    eyeId: 3,
  },
  {
    breedId: 196,
    eyeId: 3,
  },
  {
    breedId: 197,
    eyeId: 3,
  },
  {
    breedId: 198,
    eyeId: 3,
  },
  {
    breedId: 199,
    eyeId: 3,
  },
  {
    breedId: 200,
    eyeId: 3,
  },
  {
    breedId: 201,
    eyeId: 3,
  },
  {
    breedId: 202,
    eyeId: 3,
  },
  {
    breedId: 203,
    eyeId: 3,
  },
  {
    breedId: 204,
    eyeId: 3,
  },
  {
    breedId: 205,
    eyeId: 3,
  },
  {
    breedId: 206,
    eyeId: 3,
  },
  {
    breedId: 207,
    eyeId: 3,
  },
  {
    breedId: 208,
    eyeId: 3,
  },
  {
    breedId: 209,
    eyeId: 3,
  },
  {
    breedId: 210,
    eyeId: 3,
  },
  {
    breedId: 211,
    eyeId: 3,
  },
  {
    breedId: 212,
    eyeId: 3,
  },
  {
    breedId: 213,
    eyeId: 3,
  },
  {
    breedId: 214,
    eyeId: 3,
  },
  {
    breedId: 215,
    eyeId: 3,
  },
  {
    breedId: 216,
    eyeId: 3,
  },
  {
    breedId: 217,
    eyeId: 3,
  },
  {
    breedId: 218,
    eyeId: 3,
  },
  {
    breedId: 219,
    eyeId: 3,
  },
  {
    breedId: 220,
    eyeId: 3,
  },
  {
    breedId: 221,
    eyeId: 3,
  },
  {
    breedId: 222,
    eyeId: 3,
  },
  {
    breedId: 223,
    eyeId: 3,
  },
  {
    breedId: 224,
    eyeId: 3,
  },
  {
    breedId: 225,
    eyeId: 6,
  },
  {
    breedId: 226,
    eyeId: 6,
  },
  {
    breedId: 227,
    eyeId: 3,
  },
  {
    breedId: 228,
    eyeId: 6,
  },
  {
    breedId: 229,
    eyeId: 6,
  },
  {
    breedId: 230,
    eyeId: 3,
  },
  {
    breedId: 231,
    eyeId: 3,
  },
  {
    breedId: 232,
    eyeId: 3,
  },
  {
    breedId: 233,
    eyeId: 3,
  },
  {
    breedId: 234,
    eyeId: 6,
  },
  {
    breedId: 235,
    eyeId: 3,
  },
  {
    breedId: 236,
    eyeId: 3,
  },
  {
    breedId: 237,
    eyeId: 6,
  },
  {
    breedId: 238,
    eyeId: 6,
  },
  {
    breedId: 239,
    eyeId: 6,
  },
  {
    breedId: 240,
    eyeId: 6,
  },
  {
    breedId: 241,
    eyeId: 6,
  },
  {
    breedId: 242,
    eyeId: 6,
  },
  {
    breedId: 243,
    eyeId: 6,
  },
  {
    breedId: 244,
    eyeId: 3,
  },
  {
    breedId: 245,
    eyeId: 3,
  },
  {
    breedId: 246,
    eyeId: 3,
  },
  {
    breedId: 247,
    eyeId: 3,
  },
  {
    breedId: 248,
    eyeId: 3,
  },
  {
    breedId: 249,
    eyeId: 3,
  },
  {
    breedId: 250,
    eyeId: 3,
  },
  {
    breedId: 251,
    eyeId: 3,
  },
  {
    breedId: 252,
    eyeId: 3,
  },
  {
    breedId: 253,
    eyeId: 3,
  },
  {
    breedId: 254,
    eyeId: 3,
  },
  {
    breedId: 255,
    eyeId: 3,
  },
  {
    breedId: 256,
    eyeId: 3,
  },
  {
    breedId: 257,
    eyeId: 3,
  },
  {
    breedId: 258,
    eyeId: 3,
  },
  {
    breedId: 259,
    eyeId: 3,
  },
  {
    breedId: 260,
    eyeId: 3,
  },
  {
    breedId: 261,
    eyeId: 3,
  },
  {
    breedId: 262,
    eyeId: 3,
  },
  {
    breedId: 263,
    eyeId: 3,
  },
  {
    breedId: 264,
    eyeId: 3,
  },
  {
    breedId: 265,
    eyeId: 3,
  },
  {
    breedId: 266,
    eyeId: 3,
  },
  {
    breedId: 267,
    eyeId: 3,
  },
  {
    breedId: 268,
    eyeId: 3,
  },
  {
    breedId: 269,
    eyeId: 3,
  },
  {
    breedId: 270,
    eyeId: 3,
  },
  {
    breedId: 271,
    eyeId: 3,
  },
  {
    breedId: 272,
    eyeId: 3,
  },
  {
    breedId: 273,
    eyeId: 3,
  },
  {
    breedId: 274,
    eyeId: 3,
  },
  {
    breedId: 275,
    eyeId: 3,
  },
  {
    breedId: 276,
    eyeId: 3,
  },
  {
    breedId: 277,
    eyeId: 3,
  },
  {
    breedId: 278,
    eyeId: 3,
  },
  {
    breedId: 279,
    eyeId: 3,
  },
  {
    breedId: 280,
    eyeId: 3,
  },
  {
    breedId: 281,
    eyeId: 3,
  },
  {
    breedId: 282,
    eyeId: 3,
  },
  {
    breedId: 283,
    eyeId: 3,
  },
  {
    breedId: 284,
    eyeId: 3,
  },
  {
    breedId: 285,
    eyeId: 3,
  },
  {
    breedId: 286,
    eyeId: 3,
  },
  {
    breedId: 287,
    eyeId: 3,
  },
  {
    breedId: 288,
    eyeId: 3,
  },
  {
    breedId: 289,
    eyeId: 3,
  },
  {
    breedId: 290,
    eyeId: 3,
  },
  {
    breedId: 291,
    eyeId: 3,
  },
  {
    breedId: 292,
    eyeId: 3,
  },
  {
    breedId: 293,
    eyeId: 3,
  },
  {
    breedId: 294,
    eyeId: 3,
  },
  {
    breedId: 295,
    eyeId: 6,
  },
  {
    breedId: 296,
    eyeId: 6,
  },
  {
    breedId: 297,
    eyeId: 3,
  },
  {
    breedId: 298,
    eyeId: 3,
  },
  {
    breedId: 299,
    eyeId: 3,
  },
  {
    breedId: 300,
    eyeId: 3,
  },
  {
    breedId: 301,
    eyeId: 3,
  },
  {
    breedId: 302,
    eyeId: 3,
  },
  {
    breedId: 303,
    eyeId: 3,
  },
  {
    breedId: 304,
    eyeId: 3,
  },
  {
    breedId: 305,
    eyeId: 3,
  },
  {
    breedId: 306,
    eyeId: 3,
  },
  {
    breedId: 307,
    eyeId: 3,
  },
  {
    breedId: 308,
    eyeId: 3,
  },
  {
    breedId: 309,
    eyeId: 3,
  },
  {
    breedId: 310,
    eyeId: 3,
  },
  {
    breedId: 311,
    eyeId: 3,
  },
  {
    breedId: 312,
    eyeId: 3,
  },
  {
    breedId: 313,
    eyeId: 3,
  },
  {
    breedId: 314,
    eyeId: 3,
  },
  {
    breedId: 315,
    eyeId: 3,
  },
  {
    breedId: 316,
    eyeId: 3,
  },
  {
    breedId: 317,
    eyeId: 6,
  },
  {
    breedId: 318,
    eyeId: 3,
  },
  {
    breedId: 319,
    eyeId: 3,
  },
  {
    breedId: 320,
    eyeId: 6,
  },
  {
    breedId: 321,
    eyeId: 6,
  },
  {
    breedId: 322,
    eyeId: 3,
  },
  {
    breedId: 323,
    eyeId: 3,
  },
  {
    breedId: 324,
    eyeId: 3,
  },
  {
    breedId: 325,
    eyeId: 3,
  },
  {
    breedId: 326,
    eyeId: 3,
  },
  {
    breedId: 327,
    eyeId: 3,
  },
  {
    breedId: 328,
    eyeId: 3,
  },
  {
    breedId: 329,
    eyeId: 3,
  },
  {
    breedId: 330,
    eyeId: 3,
  },
  {
    breedId: 331,
    eyeId: 3,
  },
  {
    breedId: 332,
    eyeId: 3,
  },
  {
    breedId: 333,
    eyeId: 3,
  },
  {
    breedId: 334,
    eyeId: 3,
  },
  {
    breedId: 335,
    eyeId: 3,
  },
  {
    breedId: 336,
    eyeId: 3,
  },
  {
    breedId: 337,
    eyeId: 6,
  },
  {
    breedId: 338,
    eyeId: 6,
  },
  {
    breedId: 339,
    eyeId: 6,
  },
  {
    breedId: 340,
    eyeId: 6,
  },
  {
    breedId: 341,
    eyeId: 6,
  },
  {
    breedId: 342,
    eyeId: 3,
  },
  {
    breedId: 343,
    eyeId: 6,
  },
  {
    breedId: 344,
    eyeId: 6,
  },
  {
    breedId: 345,
    eyeId: 6,
  },
  {
    breedId: 346,
    eyeId: 6,
  },
  {
    breedId: 347,
    eyeId: 6,
  },
  {
    breedId: 348,
    eyeId: 6,
  },
  {
    breedId: 349,
    eyeId: 6,
  },
  {
    breedId: 350,
    eyeId: 6,
  },
  {
    breedId: 351,
    eyeId: 6,
  },
  {
    breedId: 352,
    eyeId: 6,
  },
  {
    breedId: 353,
    eyeId: 6,
  },
  {
    breedId: 354,
    eyeId: 6,
  },
  {
    breedId: 355,
    eyeId: 6,
  },
  {
    breedId: 356,
    eyeId: 6,
  },
  {
    breedId: 357,
    eyeId: 6,
  },
  {
    breedId: 358,
    eyeId: 6,
  },
  {
    breedId: 359,
    eyeId: 6,
  },
  {
    breedId: 360,
    eyeId: 6,
  },
  {
    breedId: 361,
    eyeId: 6,
  },
  {
    breedId: 362,
    eyeId: 6,
  },
  {
    breedId: 363,
    eyeId: 6,
  },
  {
    breedId: 364,
    eyeId: 3,
  },
  {
    breedId: 365,
    eyeId: 6,
  },
  {
    breedId: 366,
    eyeId: 6,
  },
  {
    breedId: 367,
    eyeId: 3,
  },
  {
    breedId: 368,
    eyeId: 6,
  },
  {
    breedId: 369,
    eyeId: 6,
  },
  {
    breedId: 370,
    eyeId: 6,
  },
  {
    breedId: 371,
    eyeId: 6,
  },
  {
    breedId: 372,
    eyeId: 6,
  },
  {
    breedId: 373,
    eyeId: 6,
  },
  {
    breedId: 374,
    eyeId: 3,
  },
  {
    breedId: 375,
    eyeId: 6,
  },
  {
    breedId: 376,
    eyeId: 6,
  },
  {
    breedId: 377,
    eyeId: 6,
  },
  {
    breedId: 378,
    eyeId: 6,
  },
  {
    breedId: 379,
    eyeId: 6,
  },
  {
    breedId: 380,
    eyeId: 6,
  },
  {
    breedId: 381,
    eyeId: 6,
  },
  {
    breedId: 382,
    eyeId: 3,
  },
  {
    breedId: 383,
    eyeId: 3,
  },
  {
    breedId: 384,
    eyeId: 6,
  },
  {
    breedId: 385,
    eyeId: 3,
  },
  {
    breedId: 386,
    eyeId: 3,
  },
  {
    breedId: 387,
    eyeId: 3,
  },
  {
    breedId: 388,
    eyeId: 3,
  },
  {
    breedId: 389,
    eyeId: 6,
  },
  {
    breedId: 390,
    eyeId: 3,
  },
  {
    breedId: 391,
    eyeId: 6,
  },
  {
    breedId: 392,
    eyeId: 6,
  },
  {
    breedId: 393,
    eyeId: 3,
  },
  {
    breedId: 394,
    eyeId: 1,
  },
  {
    breedId: 395,
    eyeId: 3,
  },
  {
    breedId: 396,
    eyeId: 6,
  },
  {
    breedId: 397,
    eyeId: 3,
  },
  {
    breedId: 398,
    eyeId: 3,
  },
  {
    breedId: 399,
    eyeId: 1,
  },
  {
    breedId: 400,
    eyeId: 1,
  },
  {
    breedId: 401,
    eyeId: 1,
  },
  {
    breedId: 402,
    eyeId: 1,
  },
  {
    breedId: 403,
    eyeId: 1,
  },
  {
    breedId: 404,
    eyeId: 1,
  },
  {
    breedId: 405,
    eyeId: 3,
  },
  {
    breedId: 406,
    eyeId: 3,
  },
  {
    breedId: 407,
    eyeId: 3,
  },
  {
    breedId: 408,
    eyeId: 3,
  },
  {
    breedId: 409,
    eyeId: 3,
  },
  {
    breedId: 410,
    eyeId: 3,
  },
  {
    breedId: 411,
    eyeId: 3,
  },
  {
    breedId: 412,
    eyeId: 3,
  },
  {
    breedId: 413,
    eyeId: 3,
  },
  {
    breedId: 414,
    eyeId: 3,
  },
  {
    breedId: 415,
    eyeId: 6,
  },
  {
    breedId: 416,
    eyeId: 3,
  },
  {
    breedId: 417,
    eyeId: 3,
  },
  {
    breedId: 418,
    eyeId: 3,
  },
  {
    breedId: 419,
    eyeId: 3,
  },
  {
    breedId: 420,
    eyeId: 3,
  },
  {
    breedId: 421,
    eyeId: 3,
  },
  {
    breedId: 422,
    eyeId: 3,
  },
  {
    breedId: 423,
    eyeId: 3,
  },
  {
    breedId: 424,
    eyeId: 3,
  },
  {
    breedId: 425,
    eyeId: 3,
  },
  {
    breedId: 426,
    eyeId: 3,
  },
  {
    breedId: 427,
    eyeId: 3,
  },
  {
    breedId: 428,
    eyeId: 3,
  },
  {
    breedId: 429,
    eyeId: 3,
  },
  {
    breedId: 430,
    eyeId: 3,
  },
  {
    breedId: 431,
    eyeId: 3,
  },
  {
    breedId: 432,
    eyeId: 3,
  },
  {
    breedId: 433,
    eyeId: 3,
  },
  {
    breedId: 434,
    eyeId: 3,
  },
  {
    breedId: 435,
    eyeId: 3,
  },
  {
    breedId: 436,
    eyeId: 3,
  },
  {
    breedId: 437,
    eyeId: 3,
  },
  {
    breedId: 438,
    eyeId: 6,
  },
  {
    breedId: 439,
    eyeId: 6,
  },
  {
    breedId: 440,
    eyeId: 6,
  },
  {
    breedId: 441,
    eyeId: 6,
  },
  {
    breedId: 442,
    eyeId: 3,
  },
  {
    breedId: 443,
    eyeId: 3,
  },
  {
    breedId: 444,
    eyeId: 6,
  },
  {
    breedId: 445,
    eyeId: 3,
  },
  {
    breedId: 446,
    eyeId: 6,
  },
  {
    breedId: 447,
    eyeId: 6,
  },
  {
    breedId: 448,
    eyeId: 3,
  },
  {
    breedId: 449,
    eyeId: 6,
  },
  {
    breedId: 450,
    eyeId: 3,
  },
  {
    breedId: 451,
    eyeId: 3,
  },
  {
    breedId: 452,
    eyeId: 6,
  },
  {
    breedId: 453,
    eyeId: 6,
  },
  {
    breedId: 454,
    eyeId: 3,
  },
  {
    breedId: 455,
    eyeId: 6,
  },
  {
    breedId: 456,
    eyeId: 3,
  },
  {
    breedId: 457,
    eyeId: 6,
  },
  {
    breedId: 458,
    eyeId: 3,
  },
  {
    breedId: 459,
    eyeId: 6,
  },
  {
    breedId: 460,
    eyeId: 6,
  },
  {
    breedId: 461,
    eyeId: 6,
  },
  {
    breedId: 462,
    eyeId: 6,
  },
  {
    breedId: 463,
    eyeId: 6,
  },
  {
    breedId: 464,
    eyeId: 6,
  },
  {
    breedId: 465,
    eyeId: 6,
  },
  {
    breedId: 466,
    eyeId: 6,
  },
  {
    breedId: 467,
    eyeId: 6,
  },
  {
    breedId: 468,
    eyeId: 3,
  },
  {
    breedId: 469,
    eyeId: 6,
  },
  {
    breedId: 470,
    eyeId: 6,
  },
  {
    breedId: 471,
    eyeId: 6,
  },
  {
    breedId: 472,
    eyeId: 6,
  },
  {
    breedId: 473,
    eyeId: 6,
  },
  {
    breedId: 474,
    eyeId: 6,
  },
  {
    breedId: 475,
    eyeId: 6,
  },
  {
    breedId: 476,
    eyeId: 6,
  },
  {
    breedId: 477,
    eyeId: 6,
  },
  {
    breedId: 478,
    eyeId: 6,
  },
  {
    breedId: 479,
    eyeId: 6,
  },
  {
    breedId: 480,
    eyeId: 6,
  },
  {
    breedId: 481,
    eyeId: 6,
  },
  {
    breedId: 482,
    eyeId: 6,
  },
  {
    breedId: 483,
    eyeId: 6,
  },
  {
    breedId: 484,
    eyeId: 6,
  },
  {
    breedId: 485,
    eyeId: 6,
  },
  {
    breedId: 486,
    eyeId: 6,
  },
  {
    breedId: 487,
    eyeId: 6,
  },
  {
    breedId: 488,
    eyeId: 6,
  },
  {
    breedId: 489,
    eyeId: 6,
  },
  {
    breedId: 490,
    eyeId: 6,
  },
  {
    breedId: 491,
    eyeId: 6,
  },
  {
    breedId: 492,
    eyeId: 6,
  },
  {
    breedId: 493,
    eyeId: 6,
  },
  {
    breedId: 494,
    eyeId: 6,
  },
  {
    breedId: 495,
    eyeId: 6,
  },
  {
    breedId: 496,
    eyeId: 6,
  },
  {
    breedId: 497,
    eyeId: 6,
  },
  {
    breedId: 498,
    eyeId: 6,
  },
  {
    breedId: 499,
    eyeId: 6,
  },
  {
    breedId: 500,
    eyeId: 6,
  },
  {
    breedId: 501,
    eyeId: 6,
  },
  {
    breedId: 502,
    eyeId: 3,
  },
  {
    breedId: 503,
    eyeId: 6,
  },
  {
    breedId: 504,
    eyeId: 3,
  },
  {
    breedId: 505,
    eyeId: 3,
  },
  {
    breedId: 506,
    eyeId: 3,
  },
  {
    breedId: 507,
    eyeId: 3,
  },
  {
    breedId: 508,
    eyeId: 3,
  },
  {
    breedId: 509,
    eyeId: 3,
  },
  {
    breedId: 510,
    eyeId: 3,
  },
  {
    breedId: 511,
    eyeId: 3,
  },
  {
    breedId: 512,
    eyeId: 3,
  },
  {
    breedId: 513,
    eyeId: 3,
  },
  {
    breedId: 514,
    eyeId: 3,
  },
  {
    breedId: 515,
    eyeId: 3,
  },
  {
    breedId: 516,
    eyeId: 3,
  },
  {
    breedId: 517,
    eyeId: 3,
  },
  {
    breedId: 518,
    eyeId: 3,
  },
  {
    breedId: 519,
    eyeId: 3,
  },
  {
    breedId: 520,
    eyeId: 3,
  },
  {
    breedId: 521,
    eyeId: 3,
  },
  {
    breedId: 522,
    eyeId: 3,
  },
  {
    breedId: 523,
    eyeId: 3,
  },
  {
    breedId: 524,
    eyeId: 3,
  },
  {
    breedId: 525,
    eyeId: 3,
  },
  {
    breedId: 526,
    eyeId: 3,
  },
  {
    breedId: 527,
    eyeId: 3,
  },
  {
    breedId: 528,
    eyeId: 3,
  },
  {
    breedId: 529,
    eyeId: 3,
  },
  {
    breedId: 530,
    eyeId: 3,
  },
  {
    breedId: 531,
    eyeId: 3,
  },
  {
    breedId: 532,
    eyeId: 3,
  },
  {
    breedId: 533,
    eyeId: 3,
  },
  {
    breedId: 534,
    eyeId: 3,
  },
  {
    breedId: 535,
    eyeId: 3,
  },
  {
    breedId: 536,
    eyeId: 3,
  },
  {
    breedId: 537,
    eyeId: 3,
  },
  {
    breedId: 538,
    eyeId: 3,
  },
  {
    breedId: 539,
    eyeId: 3,
  },
  {
    breedId: 540,
    eyeId: 3,
  },
  {
    breedId: 541,
    eyeId: 3,
  },
  {
    breedId: 542,
    eyeId: 3,
  },
  {
    breedId: 543,
    eyeId: 3,
  },
  {
    breedId: 544,
    eyeId: 3,
  },
  {
    breedId: 545,
    eyeId: 3,
  },
  {
    breedId: 546,
    eyeId: 3,
  },
  {
    breedId: 547,
    eyeId: 3,
  },
  {
    breedId: 548,
    eyeId: 3,
  },
  {
    breedId: 549,
    eyeId: 3,
  },
  {
    breedId: 550,
    eyeId: 3,
  },
  {
    breedId: 551,
    eyeId: 3,
  },
  {
    breedId: 552,
    eyeId: 6,
  },
  {
    breedId: 553,
    eyeId: 3,
  },
  {
    breedId: 554,
    eyeId: 3,
  },
  {
    breedId: 555,
    eyeId: 6,
  },
  {
    breedId: 556,
    eyeId: 6,
  },
  {
    breedId: 557,
    eyeId: 6,
  },
  {
    breedId: 558,
    eyeId: 6,
  },
  {
    breedId: 559,
    eyeId: 6,
  },
  {
    breedId: 560,
    eyeId: 6,
  },
  {
    breedId: 561,
    eyeId: 6,
  },
  {
    breedId: 562,
    eyeId: 6,
  },
  {
    breedId: 563,
    eyeId: 6,
  },
  {
    breedId: 564,
    eyeId: 6,
  },
  {
    breedId: 565,
    eyeId: 6,
  },
  {
    breedId: 566,
    eyeId: 6,
  },
  {
    breedId: 567,
    eyeId: 6,
  },
  {
    breedId: 568,
    eyeId: 6,
  },
  {
    breedId: 569,
    eyeId: 6,
  },
  {
    breedId: 570,
    eyeId: 6,
  },
  {
    breedId: 571,
    eyeId: 6,
  },
  {
    breedId: 572,
    eyeId: 6,
  },
  {
    breedId: 573,
    eyeId: 6,
  },
  {
    breedId: 574,
    eyeId: 6,
  },
  {
    breedId: 575,
    eyeId: 6,
  },
  {
    breedId: 576,
    eyeId: 6,
  },
  {
    breedId: 577,
    eyeId: 6,
  },
  {
    breedId: 578,
    eyeId: 6,
  },
  {
    breedId: 579,
    eyeId: 6,
  },
  {
    breedId: 580,
    eyeId: 3,
  },
  {
    breedId: 581,
    eyeId: 3,
  },
  {
    breedId: 582,
    eyeId: 3,
  },
  {
    breedId: 583,
    eyeId: 3,
  },
  {
    breedId: 584,
    eyeId: 3,
  },
  {
    breedId: 585,
    eyeId: 3,
  },
  {
    breedId: 586,
    eyeId: 3,
  },
  {
    breedId: 587,
    eyeId: 3,
  },
  {
    breedId: 588,
    eyeId: 3,
  },
  {
    breedId: 589,
    eyeId: 3,
  },
  {
    breedId: 590,
    eyeId: 3,
  },
  {
    breedId: 591,
    eyeId: 3,
  },
  {
    breedId: 592,
    eyeId: 3,
  },
  {
    breedId: 593,
    eyeId: 3,
  },
  {
    breedId: 594,
    eyeId: 3,
  },
  {
    breedId: 595,
    eyeId: 3,
  },
  {
    breedId: 596,
    eyeId: 3,
  },
  {
    breedId: 597,
    eyeId: 3,
  },
  {
    breedId: 598,
    eyeId: 3,
  },
  {
    breedId: 599,
    eyeId: 3,
  },
  {
    breedId: 600,
    eyeId: 6,
  },
  {
    breedId: 601,
    eyeId: 6,
  },
  {
    breedId: 602,
    eyeId: 3,
  },
  {
    breedId: 603,
    eyeId: 6,
  },
  {
    breedId: 604,
    eyeId: 6,
  },
  {
    breedId: 605,
    eyeId: 6,
  },
  {
    breedId: 606,
    eyeId: 6,
  },
  {
    breedId: 607,
    eyeId: 6,
  },
  {
    breedId: 608,
    eyeId: 3,
  },
  {
    breedId: 609,
    eyeId: 3,
  },
  {
    breedId: 610,
    eyeId: 3,
  },
  {
    breedId: 611,
    eyeId: 3,
  },
  {
    breedId: 612,
    eyeId: 3,
  },
  {
    breedId: 613,
    eyeId: 3,
  },
  {
    breedId: 614,
    eyeId: 3,
  },
  {
    breedId: 615,
    eyeId: 3,
  },
  {
    breedId: 616,
    eyeId: 3,
  },
  {
    breedId: 617,
    eyeId: 3,
  },
  {
    breedId: 618,
    eyeId: 3,
  },
  {
    breedId: 619,
    eyeId: 3,
  },
  {
    breedId: 620,
    eyeId: 3,
  },
  {
    breedId: 621,
    eyeId: 3,
  },
  {
    breedId: 622,
    eyeId: 3,
  },
  {
    breedId: 623,
    eyeId: 3,
  },
  {
    breedId: 624,
    eyeId: 6,
  },
  {
    breedId: 625,
    eyeId: 6,
  },
  {
    breedId: 626,
    eyeId: 6,
  },
  {
    breedId: 627,
    eyeId: 6,
  },
  {
    breedId: 628,
    eyeId: 3,
  },
  {
    breedId: 629,
    eyeId: 3,
  },
  {
    breedId: 630,
    eyeId: 3,
  },
  {
    breedId: 631,
    eyeId: 3,
  },
  {
    breedId: 632,
    eyeId: 3,
  },
  {
    breedId: 633,
    eyeId: 3,
  },
  {
    breedId: 634,
    eyeId: 3,
  },
  {
    breedId: 635,
    eyeId: 3,
  },
  {
    breedId: 636,
    eyeId: 3,
  },
  {
    breedId: 637,
    eyeId: 3,
  },
  {
    breedId: 638,
    eyeId: 3,
  },
  {
    breedId: 639,
    eyeId: 3,
  },
  {
    breedId: 640,
    eyeId: 3,
  },
  {
    breedId: 641,
    eyeId: 3,
  },
  {
    breedId: 642,
    eyeId: 3,
  },
  {
    breedId: 643,
    eyeId: 3,
  },
  {
    breedId: 644,
    eyeId: 3,
  },
  {
    breedId: 645,
    eyeId: 3,
  },
  {
    breedId: 646,
    eyeId: 3,
  },
  {
    breedId: 647,
    eyeId: 3,
  },
  {
    breedId: 648,
    eyeId: 3,
  },
  {
    breedId: 649,
    eyeId: 3,
  },
  {
    breedId: 650,
    eyeId: 3,
  },
  {
    breedId: 651,
    eyeId: 3,
  },
  {
    breedId: 652,
    eyeId: 3,
  },
  {
    breedId: 653,
    eyeId: 3,
  },
  {
    breedId: 654,
    eyeId: 3,
  },
  {
    breedId: 655,
    eyeId: 3,
  },
  {
    breedId: 656,
    eyeId: 3,
  },
  {
    breedId: 657,
    eyeId: 3,
  },
  {
    breedId: 658,
    eyeId: 6,
  },
  {
    breedId: 659,
    eyeId: 6,
  },
  {
    breedId: 660,
    eyeId: 3,
  },
  {
    breedId: 661,
    eyeId: 3,
  },
  {
    breedId: 662,
    eyeId: 3,
  },
  {
    breedId: 663,
    eyeId: 6,
  },
  {
    breedId: 664,
    eyeId: 3,
  },
  {
    breedId: 665,
    eyeId: 3,
  },
  {
    breedId: 666,
    eyeId: 6,
  },
  {
    breedId: 667,
    eyeId: 6,
  },
  {
    breedId: 668,
    eyeId: 6,
  },
  {
    breedId: 669,
    eyeId: 6,
  },
  {
    breedId: 670,
    eyeId: 6,
  },
  {
    breedId: 671,
    eyeId: 6,
  },
  {
    breedId: 672,
    eyeId: 6,
  },
  {
    breedId: 673,
    eyeId: 6,
  },
  {
    breedId: 674,
    eyeId: 6,
  },
  {
    breedId: 675,
    eyeId: 6,
  },
  {
    breedId: 676,
    eyeId: 6,
  },
  {
    breedId: 677,
    eyeId: 3,
  },
  {
    breedId: 678,
    eyeId: 6,
  },
  {
    breedId: 679,
    eyeId: 6,
  },
  {
    breedId: 680,
    eyeId: 6,
  },
  {
    breedId: 681,
    eyeId: 6,
  },
  {
    breedId: 682,
    eyeId: 6,
  },
  {
    breedId: 683,
    eyeId: 6,
  },
  {
    breedId: 684,
    eyeId: 6,
  },
  {
    breedId: 685,
    eyeId: 6,
  },
  {
    breedId: 686,
    eyeId: 6,
  },
  {
    breedId: 687,
    eyeId: 6,
  },
  {
    breedId: 688,
    eyeId: 6,
  },
  {
    breedId: 689,
    eyeId: 6,
  },
  {
    breedId: 690,
    eyeId: 6,
  },
  {
    breedId: 691,
    eyeId: 6,
  },
  {
    breedId: 692,
    eyeId: 3,
  },
  {
    breedId: 693,
    eyeId: 3,
  },
  {
    breedId: 694,
    eyeId: 3,
  },
  {
    breedId: 695,
    eyeId: 3,
  },
  {
    breedId: 696,
    eyeId: 3,
  },
  {
    breedId: 697,
    eyeId: 3,
  },
  {
    breedId: 698,
    eyeId: 3,
  },
  {
    breedId: 699,
    eyeId: 3,
  },
  {
    breedId: 700,
    eyeId: 3,
  },
  {
    breedId: 701,
    eyeId: 3,
  },
  {
    breedId: 702,
    eyeId: 3,
  },
  {
    breedId: 703,
    eyeId: 3,
  },
  {
    breedId: 704,
    eyeId: 3,
  },
  {
    breedId: 705,
    eyeId: 3,
  },
  {
    breedId: 706,
    eyeId: 3,
  },
  {
    breedId: 707,
    eyeId: 3,
  },
  {
    breedId: 708,
    eyeId: 3,
  },
  {
    breedId: 709,
    eyeId: 3,
  },
  {
    breedId: 710,
    eyeId: 3,
  },
  {
    breedId: 711,
    eyeId: 3,
  },
  {
    breedId: 712,
    eyeId: 3,
  },
  {
    breedId: 713,
    eyeId: 3,
  },
  {
    breedId: 714,
    eyeId: 3,
  },
  {
    breedId: 715,
    eyeId: 3,
  },
  {
    breedId: 716,
    eyeId: 3,
  },
  {
    breedId: 717,
    eyeId: 3,
  },
  {
    breedId: 718,
    eyeId: 3,
  },
  {
    breedId: 719,
    eyeId: 3,
  },
  {
    breedId: 720,
    eyeId: 3,
  },
  {
    breedId: 721,
    eyeId: 3,
  },
  {
    breedId: 722,
    eyeId: 3,
  },
  {
    breedId: 723,
    eyeId: 3,
  },
  {
    breedId: 724,
    eyeId: 3,
  },
  {
    breedId: 725,
    eyeId: 3,
  },
  {
    breedId: 726,
    eyeId: 3,
  },
  {
    breedId: 727,
    eyeId: 3,
  },
  {
    breedId: 728,
    eyeId: 3,
  },
  {
    breedId: 729,
    eyeId: 3,
  },
  {
    breedId: 730,
    eyeId: 3,
  },
  {
    breedId: 731,
    eyeId: 3,
  },
  {
    breedId: 732,
    eyeId: 3,
  },
  {
    breedId: 733,
    eyeId: 3,
  },
  {
    breedId: 734,
    eyeId: 3,
  },
  {
    breedId: 735,
    eyeId: 3,
  },
  {
    breedId: 736,
    eyeId: 3,
  },
  {
    breedId: 737,
    eyeId: 3,
  },
  {
    breedId: 738,
    eyeId: 3,
  },
  {
    breedId: 739,
    eyeId: 3,
  },
  {
    breedId: 740,
    eyeId: 3,
  },
  {
    breedId: 741,
    eyeId: 3,
  },
  {
    breedId: 742,
    eyeId: 3,
  },
  {
    breedId: 743,
    eyeId: 3,
  },
  {
    breedId: 744,
    eyeId: 3,
  },
  {
    breedId: 745,
    eyeId: 3,
  },
  {
    breedId: 746,
    eyeId: 3,
  },
  {
    breedId: 747,
    eyeId: 3,
  },
  {
    breedId: 748,
    eyeId: 3,
  },
  {
    breedId: 749,
    eyeId: 3,
  },
  {
    breedId: 750,
    eyeId: 3,
  },
  {
    breedId: 751,
    eyeId: 3,
  },
  {
    breedId: 752,
    eyeId: 3,
  },
  {
    breedId: 753,
    eyeId: 3,
  },
  {
    breedId: 754,
    eyeId: 3,
  },
  {
    breedId: 755,
    eyeId: 3,
  },
  {
    breedId: 756,
    eyeId: 3,
  },
  {
    breedId: 757,
    eyeId: 1,
  },
  {
    breedId: 758,
    eyeId: 3,
  },
  {
    breedId: 759,
    eyeId: 3,
  },
  {
    breedId: 760,
    eyeId: 3,
  },
  {
    breedId: 761,
    eyeId: 3,
  },
  {
    breedId: 762,
    eyeId: 3,
  },
  {
    breedId: 763,
    eyeId: 3,
  },
  {
    breedId: 764,
    eyeId: 3,
  },
  {
    breedId: 765,
    eyeId: 3,
  },
  {
    breedId: 766,
    eyeId: 3,
  },
  {
    breedId: 767,
    eyeId: 3,
  },
  {
    breedId: 768,
    eyeId: 3,
  },
  {
    breedId: 769,
    eyeId: 3,
  },
  {
    breedId: 770,
    eyeId: 3,
  },
  {
    breedId: 771,
    eyeId: 3,
  },
  {
    breedId: 772,
    eyeId: 3,
  },
  {
    breedId: 773,
    eyeId: 3,
  },
  {
    breedId: 774,
    eyeId: 3,
  },
  {
    breedId: 775,
    eyeId: 3,
  },
  {
    breedId: 776,
    eyeId: 3,
  },
  {
    breedId: 777,
    eyeId: 3,
  },
  {
    breedId: 778,
    eyeId: 3,
  },
  {
    breedId: 779,
    eyeId: 3,
  },
  {
    breedId: 780,
    eyeId: 6,
  },
  {
    breedId: 781,
    eyeId: 3,
  },
  {
    breedId: 782,
    eyeId: 3,
  },
  {
    breedId: 783,
    eyeId: 3,
  },
  {
    breedId: 784,
    eyeId: 3,
  },
  {
    breedId: 785,
    eyeId: 3,
  },
  {
    breedId: 786,
    eyeId: 3,
  },
  {
    breedId: 787,
    eyeId: 3,
  },
  {
    breedId: 788,
    eyeId: 3,
  },
  {
    breedId: 789,
    eyeId: 3,
  },
  {
    breedId: 790,
    eyeId: 3,
  },
  {
    breedId: 791,
    eyeId: 3,
  },
  {
    breedId: 792,
    eyeId: 3,
  },
  {
    breedId: 793,
    eyeId: 3,
  },
  {
    breedId: 794,
    eyeId: 3,
  },
  {
    breedId: 795,
    eyeId: 3,
  },
  {
    breedId: 796,
    eyeId: 3,
  },
  {
    breedId: 797,
    eyeId: 3,
  },
  {
    breedId: 798,
    eyeId: 3,
  },
  {
    breedId: 799,
    eyeId: 3,
  },
  {
    breedId: 800,
    eyeId: 3,
  },
  {
    breedId: 801,
    eyeId: 3,
  },
  {
    breedId: 802,
    eyeId: 3,
  },
  {
    breedId: 803,
    eyeId: 3,
  },
  {
    breedId: 804,
    eyeId: 3,
  },
  {
    breedId: 805,
    eyeId: 3,
  },
  {
    breedId: 806,
    eyeId: 3,
  },
  {
    breedId: 807,
    eyeId: 3,
  },
  {
    breedId: 808,
    eyeId: 3,
  },
  {
    breedId: 809,
    eyeId: 3,
  },
  {
    breedId: 810,
    eyeId: 3,
  },
  {
    breedId: 811,
    eyeId: 3,
  },
  {
    breedId: 812,
    eyeId: 3,
  },
  {
    breedId: 813,
    eyeId: 3,
  },
  {
    breedId: 814,
    eyeId: 3,
  },
  {
    breedId: 815,
    eyeId: 3,
  },
  {
    breedId: 816,
    eyeId: 3,
  },
  {
    breedId: 817,
    eyeId: 3,
  },
  {
    breedId: 818,
    eyeId: 3,
  },
  {
    breedId: 819,
    eyeId: 3,
  },
  {
    breedId: 820,
    eyeId: 3,
  },
  {
    breedId: 821,
    eyeId: 3,
  },
  {
    breedId: 822,
    eyeId: 3,
  },
  {
    breedId: 823,
    eyeId: 3,
  },
  {
    breedId: 824,
    eyeId: 3,
  },
  {
    breedId: 825,
    eyeId: 3,
  },
  {
    breedId: 826,
    eyeId: 3,
  },
  {
    breedId: 827,
    eyeId: 3,
  },
  {
    breedId: 828,
    eyeId: 3,
  },
  {
    breedId: 829,
    eyeId: 3,
  },
  {
    breedId: 830,
    eyeId: 3,
  },
  {
    breedId: 831,
    eyeId: 3,
  },
  {
    breedId: 832,
    eyeId: 3,
  },
  {
    breedId: 833,
    eyeId: 3,
  },
  {
    breedId: 834,
    eyeId: 3,
  },
  {
    breedId: 835,
    eyeId: 3,
  },
  {
    breedId: 836,
    eyeId: 3,
  },
  {
    breedId: 837,
    eyeId: 3,
  },
  {
    breedId: 838,
    eyeId: 3,
  },
  {
    breedId: 839,
    eyeId: 3,
  },
  {
    breedId: 840,
    eyeId: 3,
  },
  {
    breedId: 841,
    eyeId: 3,
  },
  {
    breedId: 842,
    eyeId: 3,
  },
  {
    breedId: 843,
    eyeId: 3,
  },
  {
    breedId: 844,
    eyeId: 3,
  },
  {
    breedId: 845,
    eyeId: 6,
  },
  {
    breedId: 846,
    eyeId: 3,
  },
  {
    breedId: 847,
    eyeId: 6,
  },
  {
    breedId: 848,
    eyeId: 3,
  },
  {
    breedId: 849,
    eyeId: 3,
  },
  {
    breedId: 850,
    eyeId: 3,
  },
  {
    breedId: 851,
    eyeId: 3,
  },
  {
    breedId: 852,
    eyeId: 3,
  },
  {
    breedId: 853,
    eyeId: 1,
  },
  {
    breedId: 854,
    eyeId: 6,
  },
  {
    breedId: 855,
    eyeId: 3,
  },
  {
    breedId: 856,
    eyeId: 3,
  },
  {
    breedId: 857,
    eyeId: 3,
  },
  {
    breedId: 858,
    eyeId: 3,
  },
  {
    breedId: 859,
    eyeId: 3,
  },
  {
    breedId: 860,
    eyeId: 3,
  },
  {
    breedId: 861,
    eyeId: 3,
  },
  {
    breedId: 862,
    eyeId: 3,
  },
  {
    breedId: 863,
    eyeId: 3,
  },
  {
    breedId: 864,
    eyeId: 3,
  },
  {
    breedId: 865,
    eyeId: 3,
  },
  {
    breedId: 866,
    eyeId: 3,
  },
  {
    breedId: 867,
    eyeId: 3,
  },
  {
    breedId: 868,
    eyeId: 3,
  },
  {
    breedId: 869,
    eyeId: 3,
  },
  {
    breedId: 870,
    eyeId: 3,
  },
  {
    breedId: 871,
    eyeId: 6,
  },
  {
    breedId: 872,
    eyeId: 3,
  },
  {
    breedId: 873,
    eyeId: 6,
  },
  {
    breedId: 874,
    eyeId: 6,
  },
  {
    breedId: 875,
    eyeId: 6,
  },
  {
    breedId: 876,
    eyeId: 3,
  },
  {
    breedId: 877,
    eyeId: 3,
  },
  {
    breedId: 878,
    eyeId: 3,
  },
  {
    breedId: 879,
    eyeId: 6,
  },
  {
    breedId: 880,
    eyeId: 3,
  },
  {
    breedId: 881,
    eyeId: 3,
  },
  {
    breedId: 882,
    eyeId: 6,
  },
  {
    breedId: 883,
    eyeId: 6,
  },
  {
    breedId: 884,
    eyeId: 3,
  },
  {
    breedId: 885,
    eyeId: 3,
  },
  {
    breedId: 886,
    eyeId: 3,
  },
];

async function seedBreedEyes() {
  for (const breedEye of breedEyes) {
    const newBreedEye = await prisma.breedEye.create({
      data: breedEye,
    });
    console.log(
      `Created new breedEye: breedId ${newBreedEye.breedId}, eyeId ${newBreedEye.eyeId}`,
    );
  }
}

export default seedBreedEyes;
