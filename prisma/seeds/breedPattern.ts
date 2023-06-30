import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const breedPatterns = [
  {
    breedId: 1,
    patternId: 21,
  },
  {
    breedId: 2,
    patternId: 16,
  },
  {
    breedId: 3,
    patternId: 21,
  },
  {
    breedId: 4,
    patternId: 21,
  },
  {
    breedId: 5,
    patternId: 21,
  },
  {
    breedId: 6,
    patternId: 21,
  },
  {
    breedId: 7,
    patternId: 21,
  },
  {
    breedId: 8,
    patternId: 16,
  },
  {
    breedId: 9,
    patternId: 21,
  },
  {
    breedId: 10,
    patternId: 16,
  },
  {
    breedId: 11,
    patternId: 16,
  },
  {
    breedId: 11,
    patternId: 18,
  },
  {
    breedId: 11,
    patternId: 19,
  },
  {
    breedId: 12,
    patternId: 21,
  },
  {
    breedId: 13,
    patternId: 16,
  },
  {
    breedId: 13,
    patternId: 14,
  },
  {
    breedId: 13,
    patternId: 18,
  },
  {
    breedId: 14,
    patternId: 21,
  },
  {
    breedId: 15,
    patternId: 16,
  },
  {
    breedId: 15,
    patternId: 18,
  },
  {
    breedId: 15,
    patternId: 19,
  },
  {
    breedId: 16,
    patternId: 19,
  },
  {
    breedId: 16,
    patternId: 16,
  },
  {
    breedId: 17,
    patternId: 16,
  },
  {
    breedId: 17,
    patternId: 18,
  },
  {
    breedId: 17,
    patternId: 19,
  },
  {
    breedId: 18,
    patternId: 16,
  },
  {
    breedId: 18,
    patternId: 18,
  },
  {
    breedId: 18,
    patternId: 19,
  },
  {
    breedId: 19,
    patternId: 16,
  },
  {
    breedId: 20,
    patternId: 19,
  },
  {
    breedId: 20,
    patternId: 16,
  },
  {
    breedId: 21,
    patternId: 16,
  },
  {
    breedId: 21,
    patternId: 18,
  },
  {
    breedId: 21,
    patternId: 19,
  },
  {
    breedId: 22,
    patternId: 16,
  },
  {
    breedId: 22,
    patternId: 18,
  },
  {
    breedId: 22,
    patternId: 19,
  },
  {
    breedId: 23,
    patternId: 16,
  },
  {
    breedId: 23,
    patternId: 18,
  },
  {
    breedId: 23,
    patternId: 19,
  },
  {
    breedId: 24,
    patternId: 16,
  },
  {
    breedId: 24,
    patternId: 18,
  },
  {
    breedId: 24,
    patternId: 19,
  },
  {
    breedId: 25,
    patternId: 16,
  },
  {
    breedId: 25,
    patternId: 18,
  },
  {
    breedId: 25,
    patternId: 19,
  },
  {
    breedId: 26,
    patternId: 16,
  },
  {
    breedId: 26,
    patternId: 18,
  },
  {
    breedId: 26,
    patternId: 19,
  },
  {
    breedId: 27,
    patternId: 21,
  },
  {
    breedId: 28,
    patternId: 16,
  },
  {
    breedId: 28,
    patternId: 18,
  },
  {
    breedId: 28,
    patternId: 20,
  },
  {
    breedId: 29,
    patternId: 16,
  },
  {
    breedId: 29,
    patternId: 18,
  },
  {
    breedId: 29,
    patternId: 19,
  },
  {
    breedId: 30,
    patternId: 16,
  },
  {
    breedId: 30,
    patternId: 18,
  },
  {
    breedId: 30,
    patternId: 19,
  },
  {
    breedId: 31,
    patternId: 16,
  },
  {
    breedId: 31,
    patternId: 18,
  },
  {
    breedId: 31,
    patternId: 19,
  },
  {
    breedId: 32,
    patternId: 16,
  },
  {
    breedId: 32,
    patternId: 18,
  },
  {
    breedId: 32,
    patternId: 20,
  },
  {
    breedId: 33,
    patternId: 16,
  },
  {
    breedId: 33,
    patternId: 18,
  },
  {
    breedId: 33,
    patternId: 19,
  },
  {
    breedId: 34,
    patternId: 16,
  },
  {
    breedId: 34,
    patternId: 18,
  },
  {
    breedId: 34,
    patternId: 19,
  },
  {
    breedId: 35,
    patternId: 16,
  },
  {
    breedId: 35,
    patternId: 18,
  },
  {
    breedId: 35,
    patternId: 19,
  },
  {
    breedId: 36,
    patternId: 16,
  },
  {
    breedId: 36,
    patternId: 18,
  },
  {
    breedId: 36,
    patternId: 19,
  },
  {
    breedId: 37,
    patternId: 16,
  },
  {
    breedId: 37,
    patternId: 18,
  },
  {
    breedId: 37,
    patternId: 19,
  },
  {
    breedId: 38,
    patternId: 16,
  },
  {
    breedId: 38,
    patternId: 18,
  },
  {
    breedId: 38,
    patternId: 19,
  },
  {
    breedId: 39,
    patternId: 16,
  },
  {
    breedId: 39,
    patternId: 18,
  },
  {
    breedId: 39,
    patternId: 19,
  },
  {
    breedId: 40,
    patternId: 16,
  },
  {
    breedId: 40,
    patternId: 18,
  },
  {
    breedId: 40,
    patternId: 19,
  },
  {
    breedId: 41,
    patternId: 16,
  },
  {
    breedId: 41,
    patternId: 18,
  },
  {
    breedId: 41,
    patternId: 19,
  },
  {
    breedId: 42,
    patternId: 16,
  },
  {
    breedId: 42,
    patternId: 18,
  },
  {
    breedId: 42,
    patternId: 19,
  },
  {
    breedId: 43,
    patternId: 21,
  },
  {
    breedId: 44,
    patternId: 16,
  },
  {
    breedId: 44,
    patternId: 18,
  },
  {
    breedId: 44,
    patternId: 19,
  },
  {
    breedId: 45,
    patternId: 16,
  },
  {
    breedId: 45,
    patternId: 18,
  },
  {
    breedId: 45,
    patternId: 19,
  },
  {
    breedId: 46,
    patternId: 16,
  },
  {
    breedId: 46,
    patternId: 18,
  },
  {
    breedId: 46,
    patternId: 19,
  },
  {
    breedId: 47,
    patternId: 16,
  },
  {
    breedId: 47,
    patternId: 18,
  },
  {
    breedId: 47,
    patternId: 19,
  },
  {
    breedId: 48,
    patternId: 21,
  },
  {
    breedId: 49,
    patternId: 16,
  },
  {
    breedId: 49,
    patternId: 18,
  },
  {
    breedId: 50,
    patternId: 16,
  },
  {
    breedId: 50,
    patternId: 18,
  },
  {
    breedId: 50,
    patternId: 19,
  },
  {
    breedId: 51,
    patternId: 16,
  },
  {
    breedId: 51,
    patternId: 18,
  },
  {
    breedId: 51,
    patternId: 19,
  },
  {
    breedId: 52,
    patternId: 16,
  },
  {
    breedId: 52,
    patternId: 18,
  },
  {
    breedId: 52,
    patternId: 19,
  },
  {
    breedId: 53,
    patternId: 0,
  },
  {
    breedId: 54,
    patternId: 16,
  },
  {
    breedId: 54,
    patternId: 18,
  },
  {
    breedId: 54,
    patternId: 19,
  },
  {
    breedId: 55,
    patternId: 16,
  },
  {
    breedId: 55,
    patternId: 18,
  },
  {
    breedId: 55,
    patternId: 19,
  },
  {
    breedId: 56,
    patternId: 19,
  },
  {
    breedId: 56,
    patternId: 16,
  },
  {
    breedId: 57,
    patternId: 16,
  },
  {
    breedId: 57,
    patternId: 18,
  },
  {
    breedId: 57,
    patternId: 19,
  },
  {
    breedId: 58,
    patternId: 16,
  },
  {
    breedId: 58,
    patternId: 18,
  },
  {
    breedId: 59,
    patternId: 16,
  },
  {
    breedId: 59,
    patternId: 18,
  },
  {
    breedId: 59,
    patternId: 19,
  },
  {
    breedId: 60,
    patternId: 16,
  },
  {
    breedId: 60,
    patternId: 18,
  },
  {
    breedId: 60,
    patternId: 19,
  },
  {
    breedId: 61,
    patternId: 16,
  },
  {
    breedId: 61,
    patternId: 18,
  },
  {
    breedId: 61,
    patternId: 19,
  },
  {
    breedId: 62,
    patternId: 16,
  },
  {
    breedId: 62,
    patternId: 17,
  },
  {
    breedId: 62,
    patternId: 18,
  },
  {
    breedId: 63,
    patternId: 16,
  },
  {
    breedId: 63,
    patternId: 18,
  },
  {
    breedId: 63,
    patternId: 19,
  },
  {
    breedId: 64,
    patternId: 16,
  },
  {
    breedId: 64,
    patternId: 17,
  },
  {
    breedId: 64,
    patternId: 18,
  },
  {
    breedId: 65,
    patternId: 16,
  },
  {
    breedId: 65,
    patternId: 18,
  },
  {
    breedId: 66,
    patternId: 16,
  },
  {
    breedId: 66,
    patternId: 18,
  },
  {
    breedId: 66,
    patternId: 19,
  },
  {
    breedId: 67,
    patternId: 16,
  },
  {
    breedId: 67,
    patternId: 18,
  },
  {
    breedId: 68,
    patternId: 16,
  },
  {
    breedId: 68,
    patternId: 18,
  },
  {
    breedId: 68,
    patternId: 19,
  },
  {
    breedId: 69,
    patternId: 21,
  },
  {
    breedId: 70,
    patternId: 21,
  },
  {
    breedId: 71,
    patternId: 21,
  },
  {
    breedId: 72,
    patternId: 21,
  },
  {
    breedId: 73,
    patternId: 16,
  },
  {
    breedId: 73,
    patternId: 18,
  },
  {
    breedId: 73,
    patternId: 19,
  },
  {
    breedId: 73,
    patternId: 20,
  },
  {
    breedId: 74,
    patternId: 21,
  },
  {
    breedId: 75,
    patternId: 21,
  },
  {
    breedId: 76,
    patternId: 21,
  },
  {
    breedId: 77,
    patternId: 21,
  },
  {
    breedId: 78,
    patternId: 21,
  },
  {
    breedId: 79,
    patternId: 21,
  },
  {
    breedId: 80,
    patternId: 21,
  },
  {
    breedId: 81,
    patternId: 21,
  },
  {
    breedId: 82,
    patternId: 21,
  },
  {
    breedId: 83,
    patternId: 21,
  },
  {
    breedId: 84,
    patternId: 21,
  },
  {
    breedId: 85,
    patternId: 21,
  },
  {
    breedId: 86,
    patternId: 21,
  },
  {
    breedId: 87,
    patternId: 21,
  },
  {
    breedId: 88,
    patternId: 21,
  },
  {
    breedId: 89,
    patternId: 21,
  },
  {
    breedId: 90,
    patternId: 16,
  },
  {
    breedId: 90,
    patternId: 18,
  },
  {
    breedId: 90,
    patternId: 19,
  },
  {
    breedId: 90,
    patternId: 20,
  },
  {
    breedId: 91,
    patternId: 16,
  },
  {
    breedId: 91,
    patternId: 18,
  },
  {
    breedId: 91,
    patternId: 19,
  },
  {
    breedId: 91,
    patternId: 20,
  },
  {
    breedId: 92,
    patternId: 16,
  },
  {
    breedId: 92,
    patternId: 18,
  },
  {
    breedId: 92,
    patternId: 19,
  },
  {
    breedId: 92,
    patternId: 20,
  },
  {
    breedId: 93,
    patternId: 16,
  },
  {
    breedId: 93,
    patternId: 18,
  },
  {
    breedId: 93,
    patternId: 19,
  },
  {
    breedId: 93,
    patternId: 20,
  },
  {
    breedId: 94,
    patternId: 16,
  },
  {
    breedId: 94,
    patternId: 18,
  },
  {
    breedId: 94,
    patternId: 19,
  },
  {
    breedId: 94,
    patternId: 20,
  },
  {
    breedId: 95,
    patternId: 16,
  },
  {
    breedId: 95,
    patternId: 18,
  },
  {
    breedId: 95,
    patternId: 19,
  },
  {
    breedId: 95,
    patternId: 20,
  },
  {
    breedId: 96,
    patternId: 16,
  },
  {
    breedId: 96,
    patternId: 18,
  },
  {
    breedId: 96,
    patternId: 19,
  },
  {
    breedId: 96,
    patternId: 20,
  },
  {
    breedId: 97,
    patternId: 16,
  },
  {
    breedId: 97,
    patternId: 18,
  },
  {
    breedId: 97,
    patternId: 19,
  },
  {
    breedId: 97,
    patternId: 20,
  },
  {
    breedId: 98,
    patternId: 16,
  },
  {
    breedId: 98,
    patternId: 18,
  },
  {
    breedId: 98,
    patternId: 19,
  },
  {
    breedId: 98,
    patternId: 20,
  },
  {
    breedId: 99,
    patternId: 16,
  },
  {
    breedId: 99,
    patternId: 18,
  },
  {
    breedId: 99,
    patternId: 19,
  },
  {
    breedId: 99,
    patternId: 20,
  },
  {
    breedId: 100,
    patternId: 16,
  },
  {
    breedId: 100,
    patternId: 18,
  },
  {
    breedId: 100,
    patternId: 19,
  },
  {
    breedId: 100,
    patternId: 20,
  },
  {
    breedId: 101,
    patternId: 21,
  },
  {
    breedId: 102,
    patternId: 21,
  },
  {
    breedId: 103,
    patternId: 16,
  },
  {
    breedId: 103,
    patternId: 18,
  },
  {
    breedId: 103,
    patternId: 19,
  },
  {
    breedId: 103,
    patternId: 20,
  },
  {
    breedId: 104,
    patternId: 21,
  },
  {
    breedId: 105,
    patternId: 21,
  },
  {
    breedId: 106,
    patternId: 21,
  },
  {
    breedId: 107,
    patternId: 21,
  },
  {
    breedId: 108,
    patternId: 21,
  },
  {
    breedId: 109,
    patternId: 21,
  },
  {
    breedId: 110,
    patternId: 16,
  },
  {
    breedId: 110,
    patternId: 18,
  },
  {
    breedId: 110,
    patternId: 19,
  },
  {
    breedId: 110,
    patternId: 20,
  },
  {
    breedId: 111,
    patternId: 16,
  },
  {
    breedId: 111,
    patternId: 18,
  },
  {
    breedId: 111,
    patternId: 19,
  },
  {
    breedId: 111,
    patternId: 20,
  },
  {
    breedId: 112,
    patternId: 16,
  },
  {
    breedId: 112,
    patternId: 18,
  },
  {
    breedId: 112,
    patternId: 19,
  },
  {
    breedId: 112,
    patternId: 20,
  },
  {
    breedId: 113,
    patternId: 16,
  },
  {
    breedId: 113,
    patternId: 18,
  },
  {
    breedId: 113,
    patternId: 19,
  },
  {
    breedId: 113,
    patternId: 20,
  },
  {
    breedId: 114,
    patternId: 16,
  },
  {
    breedId: 114,
    patternId: 18,
  },
  {
    breedId: 114,
    patternId: 19,
  },
  {
    breedId: 114,
    patternId: 20,
  },
  {
    breedId: 115,
    patternId: 16,
  },
  {
    breedId: 115,
    patternId: 18,
  },
  {
    breedId: 115,
    patternId: 19,
  },
  {
    breedId: 115,
    patternId: 20,
  },
  {
    breedId: 116,
    patternId: 16,
  },
  {
    breedId: 116,
    patternId: 18,
  },
  {
    breedId: 116,
    patternId: 19,
  },
  {
    breedId: 116,
    patternId: 20,
  },
  {
    breedId: 117,
    patternId: 16,
  },
  {
    breedId: 117,
    patternId: 18,
  },
  {
    breedId: 117,
    patternId: 19,
  },
  {
    breedId: 117,
    patternId: 20,
  },
  {
    breedId: 118,
    patternId: 16,
  },
  {
    breedId: 118,
    patternId: 18,
  },
  {
    breedId: 118,
    patternId: 19,
  },
  {
    breedId: 118,
    patternId: 20,
  },
  {
    breedId: 119,
    patternId: 16,
  },
  {
    breedId: 119,
    patternId: 18,
  },
  {
    breedId: 119,
    patternId: 19,
  },
  {
    breedId: 119,
    patternId: 20,
  },
  {
    breedId: 120,
    patternId: 16,
  },
  {
    breedId: 120,
    patternId: 18,
  },
  {
    breedId: 120,
    patternId: 19,
  },
  {
    breedId: 120,
    patternId: 20,
  },
  {
    breedId: 121,
    patternId: 16,
  },
  {
    breedId: 121,
    patternId: 18,
  },
  {
    breedId: 121,
    patternId: 19,
  },
  {
    breedId: 121,
    patternId: 20,
  },
  {
    breedId: 122,
    patternId: 16,
  },
  {
    breedId: 122,
    patternId: 18,
  },
  {
    breedId: 122,
    patternId: 19,
  },
  {
    breedId: 122,
    patternId: 20,
  },
  {
    breedId: 123,
    patternId: 16,
  },
  {
    breedId: 123,
    patternId: 18,
  },
  {
    breedId: 123,
    patternId: 19,
  },
  {
    breedId: 123,
    patternId: 20,
  },
  {
    breedId: 124,
    patternId: 16,
  },
  {
    breedId: 124,
    patternId: 18,
  },
  {
    breedId: 124,
    patternId: 19,
  },
  {
    breedId: 124,
    patternId: 20,
  },
  {
    breedId: 125,
    patternId: 16,
  },
  {
    breedId: 125,
    patternId: 18,
  },
  {
    breedId: 125,
    patternId: 19,
  },
  {
    breedId: 125,
    patternId: 20,
  },
  {
    breedId: 126,
    patternId: 16,
  },
  {
    breedId: 126,
    patternId: 18,
  },
  {
    breedId: 126,
    patternId: 19,
  },
  {
    breedId: 126,
    patternId: 20,
  },
  {
    breedId: 127,
    patternId: 16,
  },
  {
    breedId: 127,
    patternId: 18,
  },
  {
    breedId: 127,
    patternId: 19,
  },
  {
    breedId: 127,
    patternId: 20,
  },
  {
    breedId: 128,
    patternId: 16,
  },
  {
    breedId: 128,
    patternId: 18,
  },
  {
    breedId: 128,
    patternId: 19,
  },
  {
    breedId: 128,
    patternId: 20,
  },
  {
    breedId: 129,
    patternId: 16,
  },
  {
    breedId: 129,
    patternId: 18,
  },
  {
    breedId: 129,
    patternId: 19,
  },
  {
    breedId: 129,
    patternId: 20,
  },
  {
    breedId: 130,
    patternId: 16,
  },
  {
    breedId: 130,
    patternId: 18,
  },
  {
    breedId: 130,
    patternId: 19,
  },
  {
    breedId: 130,
    patternId: 20,
  },
  {
    breedId: 131,
    patternId: 16,
  },
  {
    breedId: 131,
    patternId: 18,
  },
  {
    breedId: 131,
    patternId: 19,
  },
  {
    breedId: 131,
    patternId: 20,
  },
  {
    breedId: 132,
    patternId: 16,
  },
  {
    breedId: 132,
    patternId: 18,
  },
  {
    breedId: 132,
    patternId: 19,
  },
  {
    breedId: 132,
    patternId: 20,
  },
  {
    breedId: 133,
    patternId: 16,
  },
  {
    breedId: 133,
    patternId: 18,
  },
  {
    breedId: 133,
    patternId: 19,
  },
  {
    breedId: 133,
    patternId: 20,
  },
  {
    breedId: 134,
    patternId: 16,
  },
  {
    breedId: 134,
    patternId: 18,
  },
  {
    breedId: 134,
    patternId: 19,
  },
  {
    breedId: 134,
    patternId: 20,
  },
  {
    breedId: 135,
    patternId: 16,
  },
  {
    breedId: 135,
    patternId: 18,
  },
  {
    breedId: 135,
    patternId: 19,
  },
  {
    breedId: 135,
    patternId: 20,
  },
  {
    breedId: 136,
    patternId: 16,
  },
  {
    breedId: 136,
    patternId: 18,
  },
  {
    breedId: 136,
    patternId: 19,
  },
  {
    breedId: 136,
    patternId: 20,
  },
  {
    breedId: 137,
    patternId: 16,
  },
  {
    breedId: 137,
    patternId: 18,
  },
  {
    breedId: 137,
    patternId: 19,
  },
  {
    breedId: 137,
    patternId: 20,
  },
  {
    breedId: 138,
    patternId: 21,
  },
  {
    breedId: 139,
    patternId: 16,
  },
  {
    breedId: 139,
    patternId: 18,
  },
  {
    breedId: 139,
    patternId: 19,
  },
  {
    breedId: 139,
    patternId: 20,
  },
  {
    breedId: 140,
    patternId: 16,
  },
  {
    breedId: 140,
    patternId: 18,
  },
  {
    breedId: 140,
    patternId: 19,
  },
  {
    breedId: 140,
    patternId: 20,
  },
  {
    breedId: 141,
    patternId: 16,
  },
  {
    breedId: 141,
    patternId: 18,
  },
  {
    breedId: 141,
    patternId: 19,
  },
  {
    breedId: 141,
    patternId: 20,
  },
  {
    breedId: 142,
    patternId: 16,
  },
  {
    breedId: 142,
    patternId: 18,
  },
  {
    breedId: 142,
    patternId: 19,
  },
  {
    breedId: 142,
    patternId: 20,
  },
  {
    breedId: 143,
    patternId: 16,
  },
  {
    breedId: 143,
    patternId: 18,
  },
  {
    breedId: 143,
    patternId: 19,
  },
  {
    breedId: 144,
    patternId: 16,
  },
  {
    breedId: 144,
    patternId: 18,
  },
  {
    breedId: 144,
    patternId: 19,
  },
  {
    breedId: 144,
    patternId: 20,
  },
  {
    breedId: 145,
    patternId: 16,
  },
  {
    breedId: 145,
    patternId: 18,
  },
  {
    breedId: 145,
    patternId: 19,
  },
  {
    breedId: 146,
    patternId: 16,
  },
  {
    breedId: 146,
    patternId: 18,
  },
  {
    breedId: 146,
    patternId: 19,
  },
  {
    breedId: 147,
    patternId: 16,
  },
  {
    breedId: 147,
    patternId: 18,
  },
  {
    breedId: 147,
    patternId: 19,
  },
  {
    breedId: 147,
    patternId: 20,
  },
  {
    breedId: 148,
    patternId: 16,
  },
  {
    breedId: 148,
    patternId: 18,
  },
  {
    breedId: 148,
    patternId: 19,
  },
  {
    breedId: 148,
    patternId: 20,
  },
  {
    breedId: 149,
    patternId: 16,
  },
  {
    breedId: 149,
    patternId: 18,
  },
  {
    breedId: 149,
    patternId: 19,
  },
  {
    breedId: 149,
    patternId: 20,
  },
  {
    breedId: 150,
    patternId: 16,
  },
  {
    breedId: 150,
    patternId: 18,
  },
  {
    breedId: 150,
    patternId: 19,
  },
  {
    breedId: 150,
    patternId: 20,
  },
  {
    breedId: 151,
    patternId: 16,
  },
  {
    breedId: 151,
    patternId: 18,
  },
  {
    breedId: 151,
    patternId: 19,
  },
  {
    breedId: 151,
    patternId: 20,
  },
  {
    breedId: 152,
    patternId: 16,
  },
  {
    breedId: 152,
    patternId: 18,
  },
  {
    breedId: 152,
    patternId: 19,
  },
  {
    breedId: 152,
    patternId: 20,
  },
  {
    breedId: 153,
    patternId: 16,
  },
  {
    breedId: 153,
    patternId: 18,
  },
  {
    breedId: 153,
    patternId: 19,
  },
  {
    breedId: 153,
    patternId: 20,
  },
  {
    breedId: 154,
    patternId: 16,
  },
  {
    breedId: 154,
    patternId: 18,
  },
  {
    breedId: 154,
    patternId: 19,
  },
  {
    breedId: 154,
    patternId: 20,
  },
  {
    breedId: 155,
    patternId: 16,
  },
  {
    breedId: 155,
    patternId: 18,
  },
  {
    breedId: 155,
    patternId: 19,
  },
  {
    breedId: 155,
    patternId: 20,
  },
  {
    breedId: 156,
    patternId: 16,
  },
  {
    breedId: 156,
    patternId: 18,
  },
  {
    breedId: 156,
    patternId: 19,
  },
  {
    breedId: 156,
    patternId: 20,
  },
  {
    breedId: 157,
    patternId: 16,
  },
  {
    breedId: 157,
    patternId: 18,
  },
  {
    breedId: 157,
    patternId: 19,
  },
  {
    breedId: 158,
    patternId: 16,
  },
  {
    breedId: 158,
    patternId: 18,
  },
  {
    breedId: 158,
    patternId: 19,
  },
  {
    breedId: 158,
    patternId: 20,
  },
  {
    breedId: 159,
    patternId: 16,
  },
  {
    breedId: 159,
    patternId: 18,
  },
  {
    breedId: 159,
    patternId: 19,
  },
  {
    breedId: 159,
    patternId: 20,
  },
  {
    breedId: 160,
    patternId: 16,
  },
  {
    breedId: 160,
    patternId: 18,
  },
  {
    breedId: 160,
    patternId: 19,
  },
  {
    breedId: 160,
    patternId: 20,
  },
  {
    breedId: 161,
    patternId: 16,
  },
  {
    breedId: 161,
    patternId: 18,
  },
  {
    breedId: 161,
    patternId: 19,
  },
  {
    breedId: 161,
    patternId: 20,
  },
  {
    breedId: 162,
    patternId: 16,
  },
  {
    breedId: 162,
    patternId: 18,
  },
  {
    breedId: 162,
    patternId: 19,
  },
  {
    breedId: 162,
    patternId: 20,
  },
  {
    breedId: 163,
    patternId: 16,
  },
  {
    breedId: 163,
    patternId: 18,
  },
  {
    breedId: 163,
    patternId: 19,
  },
  {
    breedId: 163,
    patternId: 20,
  },
  {
    breedId: 164,
    patternId: 16,
  },
  {
    breedId: 164,
    patternId: 18,
  },
  {
    breedId: 164,
    patternId: 19,
  },
  {
    breedId: 164,
    patternId: 20,
  },
  {
    breedId: 165,
    patternId: 16,
  },
  {
    breedId: 165,
    patternId: 18,
  },
  {
    breedId: 165,
    patternId: 19,
  },
  {
    breedId: 165,
    patternId: 20,
  },
  {
    breedId: 166,
    patternId: 16,
  },
  {
    breedId: 166,
    patternId: 18,
  },
  {
    breedId: 166,
    patternId: 19,
  },
  {
    breedId: 166,
    patternId: 20,
  },
  {
    breedId: 167,
    patternId: 16,
  },
  {
    breedId: 167,
    patternId: 18,
  },
  {
    breedId: 167,
    patternId: 19,
  },
  {
    breedId: 168,
    patternId: 16,
  },
  {
    breedId: 168,
    patternId: 18,
  },
  {
    breedId: 168,
    patternId: 19,
  },
  {
    breedId: 168,
    patternId: 20,
  },
  {
    breedId: 169,
    patternId: 21,
  },
  {
    breedId: 170,
    patternId: 16,
  },
  {
    breedId: 170,
    patternId: 18,
  },
  {
    breedId: 171,
    patternId: 16,
  },
  {
    breedId: 171,
    patternId: 18,
  },
  {
    breedId: 172,
    patternId: 16,
  },
  {
    breedId: 172,
    patternId: 18,
  },
  {
    breedId: 173,
    patternId: 16,
  },
  {
    breedId: 173,
    patternId: 18,
  },
  {
    breedId: 174,
    patternId: 16,
  },
  {
    breedId: 174,
    patternId: 18,
  },
  {
    breedId: 175,
    patternId: 16,
  },
  {
    breedId: 175,
    patternId: 18,
  },
  {
    breedId: 176,
    patternId: 21,
  },
  {
    breedId: 177,
    patternId: 16,
  },
  {
    breedId: 177,
    patternId: 18,
  },
  {
    breedId: 178,
    patternId: 16,
  },
  {
    breedId: 178,
    patternId: 18,
  },
  {
    breedId: 179,
    patternId: 16,
  },
  {
    breedId: 179,
    patternId: 18,
  },
  {
    breedId: 179,
    patternId: 19,
  },
  {
    breedId: 179,
    patternId: 20,
  },
  {
    breedId: 180,
    patternId: 16,
  },
  {
    breedId: 180,
    patternId: 18,
  },
  {
    breedId: 181,
    patternId: 16,
  },
  {
    breedId: 181,
    patternId: 18,
  },
  {
    breedId: 182,
    patternId: 16,
  },
  {
    breedId: 182,
    patternId: 18,
  },
  {
    breedId: 183,
    patternId: 16,
  },
  {
    breedId: 183,
    patternId: 18,
  },
  {
    breedId: 184,
    patternId: 16,
  },
  {
    breedId: 184,
    patternId: 18,
  },
  {
    breedId: 185,
    patternId: 16,
  },
  {
    breedId: 185,
    patternId: 18,
  },
  {
    breedId: 186,
    patternId: 16,
  },
  {
    breedId: 186,
    patternId: 18,
  },
  {
    breedId: 187,
    patternId: 16,
  },
  {
    breedId: 187,
    patternId: 18,
  },
  {
    breedId: 188,
    patternId: 16,
  },
  {
    breedId: 188,
    patternId: 18,
  },
  {
    breedId: 189,
    patternId: 21,
  },
  {
    breedId: 190,
    patternId: 16,
  },
  {
    breedId: 190,
    patternId: 18,
  },
  {
    breedId: 191,
    patternId: 21,
  },
  {
    breedId: 192,
    patternId: 16,
  },
  {
    breedId: 192,
    patternId: 18,
  },
  {
    breedId: 192,
    patternId: 19,
  },
  {
    breedId: 193,
    patternId: 21,
  },
  {
    breedId: 194,
    patternId: 16,
  },
  {
    breedId: 194,
    patternId: 18,
  },
  {
    breedId: 194,
    patternId: 19,
  },
  {
    breedId: 195,
    patternId: 16,
  },
  {
    breedId: 195,
    patternId: 18,
  },
  {
    breedId: 195,
    patternId: 19,
  },
  {
    breedId: 196,
    patternId: 16,
  },
  {
    breedId: 196,
    patternId: 18,
  },
  {
    breedId: 196,
    patternId: 19,
  },
  {
    breedId: 197,
    patternId: 16,
  },
  {
    breedId: 197,
    patternId: 18,
  },
  {
    breedId: 197,
    patternId: 19,
  },
  {
    breedId: 198,
    patternId: 16,
  },
  {
    breedId: 198,
    patternId: 18,
  },
  {
    breedId: 198,
    patternId: 19,
  },
  {
    breedId: 199,
    patternId: 16,
  },
  {
    breedId: 199,
    patternId: 18,
  },
  {
    breedId: 199,
    patternId: 19,
  },
  {
    breedId: 200,
    patternId: 16,
  },
  {
    breedId: 200,
    patternId: 18,
  },
  {
    breedId: 200,
    patternId: 19,
  },
  {
    breedId: 201,
    patternId: 16,
  },
  {
    breedId: 201,
    patternId: 18,
  },
  {
    breedId: 201,
    patternId: 19,
  },
  {
    breedId: 202,
    patternId: 16,
  },
  {
    breedId: 202,
    patternId: 18,
  },
  {
    breedId: 202,
    patternId: 19,
  },
  {
    breedId: 203,
    patternId: 16,
  },
  {
    breedId: 203,
    patternId: 18,
  },
  {
    breedId: 203,
    patternId: 19,
  },
  {
    breedId: 204,
    patternId: 16,
  },
  {
    breedId: 204,
    patternId: 18,
  },
  {
    breedId: 204,
    patternId: 19,
  },
  {
    breedId: 205,
    patternId: 16,
  },
  {
    breedId: 205,
    patternId: 18,
  },
  {
    breedId: 205,
    patternId: 19,
  },
  {
    breedId: 206,
    patternId: 16,
  },
  {
    breedId: 206,
    patternId: 18,
  },
  {
    breedId: 206,
    patternId: 19,
  },
  {
    breedId: 207,
    patternId: 16,
  },
  {
    breedId: 207,
    patternId: 18,
  },
  {
    breedId: 207,
    patternId: 19,
  },
  {
    breedId: 208,
    patternId: 16,
  },
  {
    breedId: 208,
    patternId: 18,
  },
  {
    breedId: 208,
    patternId: 19,
  },
  {
    breedId: 209,
    patternId: 16,
  },
  {
    breedId: 209,
    patternId: 18,
  },
  {
    breedId: 209,
    patternId: 19,
  },
  {
    breedId: 210,
    patternId: 16,
  },
  {
    breedId: 210,
    patternId: 14,
  },
  {
    breedId: 210,
    patternId: 18,
  },
  {
    breedId: 211,
    patternId: 16,
  },
  {
    breedId: 211,
    patternId: 18,
  },
  {
    breedId: 211,
    patternId: 19,
  },
  {
    breedId: 212,
    patternId: 16,
  },
  {
    breedId: 212,
    patternId: 18,
  },
  {
    breedId: 212,
    patternId: 19,
  },
  {
    breedId: 213,
    patternId: 16,
  },
  {
    breedId: 213,
    patternId: 18,
  },
  {
    breedId: 213,
    patternId: 19,
  },
  {
    breedId: 214,
    patternId: 16,
  },
  {
    breedId: 214,
    patternId: 18,
  },
  {
    breedId: 214,
    patternId: 19,
  },
  {
    breedId: 215,
    patternId: 16,
  },
  {
    breedId: 215,
    patternId: 18,
  },
  {
    breedId: 215,
    patternId: 19,
  },
  {
    breedId: 216,
    patternId: 16,
  },
  {
    breedId: 216,
    patternId: 18,
  },
  {
    breedId: 216,
    patternId: 19,
  },
  {
    breedId: 217,
    patternId: 16,
  },
  {
    breedId: 217,
    patternId: 18,
  },
  {
    breedId: 217,
    patternId: 19,
  },
  {
    breedId: 218,
    patternId: 16,
  },
  {
    breedId: 218,
    patternId: 18,
  },
  {
    breedId: 219,
    patternId: 16,
  },
  {
    breedId: 219,
    patternId: 18,
  },
  {
    breedId: 219,
    patternId: 19,
  },
  {
    breedId: 220,
    patternId: 16,
  },
  {
    breedId: 220,
    patternId: 18,
  },
  {
    breedId: 220,
    patternId: 19,
  },
  {
    breedId: 221,
    patternId: 16,
  },
  {
    breedId: 221,
    patternId: 18,
  },
  {
    breedId: 221,
    patternId: 19,
  },
  {
    breedId: 222,
    patternId: 16,
  },
  {
    breedId: 222,
    patternId: 18,
  },
  {
    breedId: 222,
    patternId: 19,
  },
  {
    breedId: 223,
    patternId: 16,
  },
  {
    breedId: 223,
    patternId: 18,
  },
  {
    breedId: 223,
    patternId: 19,
  },
  {
    breedId: 224,
    patternId: 16,
  },
  {
    breedId: 224,
    patternId: 18,
  },
  {
    breedId: 224,
    patternId: 19,
  },
  {
    breedId: 225,
    patternId: 21,
  },
  {
    breedId: 226,
    patternId: 21,
  },
  {
    breedId: 227,
    patternId: 16,
  },
  {
    breedId: 227,
    patternId: 18,
  },
  {
    breedId: 227,
    patternId: 19,
  },
  {
    breedId: 228,
    patternId: 21,
  },
  {
    breedId: 229,
    patternId: 21,
  },
  {
    breedId: 230,
    patternId: 16,
  },
  {
    breedId: 230,
    patternId: 18,
  },
  {
    breedId: 230,
    patternId: 19,
  },
  {
    breedId: 231,
    patternId: 16,
  },
  {
    breedId: 231,
    patternId: 18,
  },
  {
    breedId: 231,
    patternId: 19,
  },
  {
    breedId: 232,
    patternId: 16,
  },
  {
    breedId: 232,
    patternId: 18,
  },
  {
    breedId: 232,
    patternId: 19,
  },
  {
    breedId: 233,
    patternId: 16,
  },
  {
    breedId: 233,
    patternId: 18,
  },
  {
    breedId: 234,
    patternId: 21,
  },
  {
    breedId: 235,
    patternId: 16,
  },
  {
    breedId: 235,
    patternId: 18,
  },
  {
    breedId: 235,
    patternId: 19,
  },
  {
    breedId: 236,
    patternId: 16,
  },
  {
    breedId: 236,
    patternId: 18,
  },
  {
    breedId: 236,
    patternId: 19,
  },
  {
    breedId: 237,
    patternId: 21,
  },
  {
    breedId: 238,
    patternId: 21,
  },
  {
    breedId: 239,
    patternId: 21,
  },
  {
    breedId: 240,
    patternId: 21,
  },
  {
    breedId: 241,
    patternId: 21,
  },
  {
    breedId: 242,
    patternId: 21,
  },
  {
    breedId: 243,
    patternId: 21,
  },
  {
    breedId: 244,
    patternId: 16,
  },
  {
    breedId: 244,
    patternId: 18,
  },
  {
    breedId: 245,
    patternId: 16,
  },
  {
    breedId: 245,
    patternId: 18,
  },
  {
    breedId: 246,
    patternId: 16,
  },
  {
    breedId: 246,
    patternId: 18,
  },
  {
    breedId: 247,
    patternId: 16,
  },
  {
    breedId: 247,
    patternId: 18,
  },
  {
    breedId: 247,
    patternId: 19,
  },
  {
    breedId: 248,
    patternId: 16,
  },
  {
    breedId: 248,
    patternId: 18,
  },
  {
    breedId: 249,
    patternId: 16,
  },
  {
    breedId: 249,
    patternId: 18,
  },
  {
    breedId: 249,
    patternId: 19,
  },
  {
    breedId: 250,
    patternId: 16,
  },
  {
    breedId: 250,
    patternId: 18,
  },
  {
    breedId: 250,
    patternId: 19,
  },
  {
    breedId: 251,
    patternId: 16,
  },
  {
    breedId: 251,
    patternId: 14,
  },
  {
    breedId: 251,
    patternId: 18,
  },
  {
    breedId: 252,
    patternId: 16,
  },
  {
    breedId: 252,
    patternId: 18,
  },
  {
    breedId: 252,
    patternId: 19,
  },
  {
    breedId: 253,
    patternId: 16,
  },
  {
    breedId: 253,
    patternId: 18,
  },
  {
    breedId: 253,
    patternId: 19,
  },
  {
    breedId: 254,
    patternId: 16,
  },
  {
    breedId: 254,
    patternId: 18,
  },
  {
    breedId: 254,
    patternId: 19,
  },
  {
    breedId: 255,
    patternId: 16,
  },
  {
    breedId: 255,
    patternId: 18,
  },
  {
    breedId: 255,
    patternId: 19,
  },
  {
    breedId: 256,
    patternId: 16,
  },
  {
    breedId: 256,
    patternId: 18,
  },
  {
    breedId: 256,
    patternId: 19,
  },
  {
    breedId: 257,
    patternId: 16,
  },
  {
    breedId: 257,
    patternId: 18,
  },
  {
    breedId: 257,
    patternId: 19,
  },
  {
    breedId: 258,
    patternId: 16,
  },
  {
    breedId: 258,
    patternId: 18,
  },
  {
    breedId: 258,
    patternId: 19,
  },
  {
    breedId: 259,
    patternId: 16,
  },
  {
    breedId: 259,
    patternId: 18,
  },
  {
    breedId: 259,
    patternId: 19,
  },
  {
    breedId: 260,
    patternId: 16,
  },
  {
    breedId: 260,
    patternId: 18,
  },
  {
    breedId: 260,
    patternId: 19,
  },
  {
    breedId: 261,
    patternId: 16,
  },
  {
    breedId: 261,
    patternId: 18,
  },
  {
    breedId: 261,
    patternId: 19,
  },
  {
    breedId: 262,
    patternId: 16,
  },
  {
    breedId: 262,
    patternId: 18,
  },
  {
    breedId: 262,
    patternId: 19,
  },
  {
    breedId: 263,
    patternId: 16,
  },
  {
    breedId: 263,
    patternId: 18,
  },
  {
    breedId: 263,
    patternId: 19,
  },
  {
    breedId: 264,
    patternId: 16,
  },
  {
    breedId: 264,
    patternId: 18,
  },
  {
    breedId: 264,
    patternId: 19,
  },
  {
    breedId: 265,
    patternId: 16,
  },
  {
    breedId: 265,
    patternId: 18,
  },
  {
    breedId: 265,
    patternId: 19,
  },
  {
    breedId: 266,
    patternId: 16,
  },
  {
    breedId: 266,
    patternId: 18,
  },
  {
    breedId: 267,
    patternId: 16,
  },
  {
    breedId: 267,
    patternId: 18,
  },
  {
    breedId: 267,
    patternId: 19,
  },
  {
    breedId: 268,
    patternId: 16,
  },
  {
    breedId: 268,
    patternId: 18,
  },
  {
    breedId: 268,
    patternId: 19,
  },
  {
    breedId: 269,
    patternId: 16,
  },
  {
    breedId: 269,
    patternId: 18,
  },
  {
    breedId: 269,
    patternId: 19,
  },
  {
    breedId: 270,
    patternId: 16,
  },
  {
    breedId: 270,
    patternId: 18,
  },
  {
    breedId: 270,
    patternId: 19,
  },
  {
    breedId: 271,
    patternId: 16,
  },
  {
    breedId: 271,
    patternId: 18,
  },
  {
    breedId: 271,
    patternId: 19,
  },
  {
    breedId: 272,
    patternId: 16,
  },
  {
    breedId: 272,
    patternId: 18,
  },
  {
    breedId: 272,
    patternId: 19,
  },
  {
    breedId: 273,
    patternId: 16,
  },
  {
    breedId: 273,
    patternId: 18,
  },
  {
    breedId: 273,
    patternId: 19,
  },
  {
    breedId: 274,
    patternId: 16,
  },
  {
    breedId: 274,
    patternId: 18,
  },
  {
    breedId: 274,
    patternId: 19,
  },
  {
    breedId: 275,
    patternId: 16,
  },
  {
    breedId: 275,
    patternId: 18,
  },
  {
    breedId: 275,
    patternId: 19,
  },
  {
    breedId: 276,
    patternId: 16,
  },
  {
    breedId: 276,
    patternId: 18,
  },
  {
    breedId: 276,
    patternId: 19,
  },
  {
    breedId: 277,
    patternId: 16,
  },
  {
    breedId: 277,
    patternId: 18,
  },
  {
    breedId: 277,
    patternId: 19,
  },
  {
    breedId: 278,
    patternId: 16,
  },
  {
    breedId: 278,
    patternId: 18,
  },
  {
    breedId: 278,
    patternId: 19,
  },
  {
    breedId: 279,
    patternId: 16,
  },
  {
    breedId: 279,
    patternId: 18,
  },
  {
    breedId: 279,
    patternId: 19,
  },
  {
    breedId: 280,
    patternId: 16,
  },
  {
    breedId: 280,
    patternId: 18,
  },
  {
    breedId: 280,
    patternId: 19,
  },
  {
    breedId: 281,
    patternId: 16,
  },
  {
    breedId: 281,
    patternId: 18,
  },
  {
    breedId: 281,
    patternId: 19,
  },
  {
    breedId: 282,
    patternId: 16,
  },
  {
    breedId: 282,
    patternId: 18,
  },
  {
    breedId: 282,
    patternId: 19,
  },
  {
    breedId: 283,
    patternId: 16,
  },
  {
    breedId: 283,
    patternId: 18,
  },
  {
    breedId: 283,
    patternId: 19,
  },
  {
    breedId: 284,
    patternId: 16,
  },
  {
    breedId: 284,
    patternId: 18,
  },
  {
    breedId: 284,
    patternId: 19,
  },
  {
    breedId: 285,
    patternId: 16,
  },
  {
    breedId: 285,
    patternId: 18,
  },
  {
    breedId: 285,
    patternId: 19,
  },
  {
    breedId: 286,
    patternId: 16,
  },
  {
    breedId: 286,
    patternId: 18,
  },
  {
    breedId: 286,
    patternId: 19,
  },
  {
    breedId: 287,
    patternId: 16,
  },
  {
    breedId: 287,
    patternId: 18,
  },
  {
    breedId: 287,
    patternId: 19,
  },
  {
    breedId: 288,
    patternId: 16,
  },
  {
    breedId: 288,
    patternId: 18,
  },
  {
    breedId: 288,
    patternId: 19,
  },
  {
    breedId: 289,
    patternId: 16,
  },
  {
    breedId: 289,
    patternId: 18,
  },
  {
    breedId: 289,
    patternId: 19,
  },
  {
    breedId: 290,
    patternId: 16,
  },
  {
    breedId: 290,
    patternId: 18,
  },
  {
    breedId: 290,
    patternId: 19,
  },
  {
    breedId: 291,
    patternId: 16,
  },
  {
    breedId: 291,
    patternId: 18,
  },
  {
    breedId: 291,
    patternId: 19,
  },
  {
    breedId: 292,
    patternId: 16,
  },
  {
    breedId: 292,
    patternId: 18,
  },
  {
    breedId: 292,
    patternId: 19,
  },
  {
    breedId: 293,
    patternId: 16,
  },
  {
    breedId: 293,
    patternId: 18,
  },
  {
    breedId: 293,
    patternId: 19,
  },
  {
    breedId: 294,
    patternId: 16,
  },
  {
    breedId: 294,
    patternId: 18,
  },
  {
    breedId: 294,
    patternId: 19,
  },
  {
    breedId: 295,
    patternId: 21,
  },
  {
    breedId: 296,
    patternId: 21,
  },
  {
    breedId: 297,
    patternId: 16,
  },
  {
    breedId: 297,
    patternId: 18,
  },
  {
    breedId: 297,
    patternId: 19,
  },
  {
    breedId: 297,
    patternId: 20,
  },
  {
    breedId: 298,
    patternId: 16,
  },
  {
    breedId: 298,
    patternId: 18,
  },
  {
    breedId: 298,
    patternId: 19,
  },
  {
    breedId: 298,
    patternId: 20,
  },
  {
    breedId: 299,
    patternId: 16,
  },
  {
    breedId: 299,
    patternId: 18,
  },
  {
    breedId: 299,
    patternId: 19,
  },
  {
    breedId: 299,
    patternId: 20,
  },
  {
    breedId: 300,
    patternId: 16,
  },
  {
    breedId: 300,
    patternId: 18,
  },
  {
    breedId: 300,
    patternId: 19,
  },
  {
    breedId: 300,
    patternId: 20,
  },
  {
    breedId: 301,
    patternId: 16,
  },
  {
    breedId: 301,
    patternId: 18,
  },
  {
    breedId: 301,
    patternId: 19,
  },
  {
    breedId: 301,
    patternId: 20,
  },
  {
    breedId: 302,
    patternId: 16,
  },
  {
    breedId: 302,
    patternId: 18,
  },
  {
    breedId: 302,
    patternId: 19,
  },
  {
    breedId: 302,
    patternId: 20,
  },
  {
    breedId: 303,
    patternId: 16,
  },
  {
    breedId: 303,
    patternId: 18,
  },
  {
    breedId: 303,
    patternId: 19,
  },
  {
    breedId: 303,
    patternId: 20,
  },
  {
    breedId: 304,
    patternId: 16,
  },
  {
    breedId: 304,
    patternId: 18,
  },
  {
    breedId: 304,
    patternId: 19,
  },
  {
    breedId: 304,
    patternId: 20,
  },
  {
    breedId: 305,
    patternId: 16,
  },
  {
    breedId: 305,
    patternId: 18,
  },
  {
    breedId: 305,
    patternId: 19,
  },
  {
    breedId: 305,
    patternId: 20,
  },
  {
    breedId: 306,
    patternId: 16,
  },
  {
    breedId: 306,
    patternId: 18,
  },
  {
    breedId: 306,
    patternId: 19,
  },
  {
    breedId: 306,
    patternId: 20,
  },
  {
    breedId: 307,
    patternId: 16,
  },
  {
    breedId: 307,
    patternId: 18,
  },
  {
    breedId: 307,
    patternId: 19,
  },
  {
    breedId: 307,
    patternId: 20,
  },
  {
    breedId: 308,
    patternId: 16,
  },
  {
    breedId: 308,
    patternId: 18,
  },
  {
    breedId: 308,
    patternId: 19,
  },
  {
    breedId: 308,
    patternId: 20,
  },
  {
    breedId: 309,
    patternId: 16,
  },
  {
    breedId: 309,
    patternId: 18,
  },
  {
    breedId: 309,
    patternId: 19,
  },
  {
    breedId: 309,
    patternId: 20,
  },
  {
    breedId: 310,
    patternId: 16,
  },
  {
    breedId: 310,
    patternId: 18,
  },
  {
    breedId: 310,
    patternId: 19,
  },
  {
    breedId: 310,
    patternId: 20,
  },
  {
    breedId: 311,
    patternId: 16,
  },
  {
    breedId: 311,
    patternId: 18,
  },
  {
    breedId: 311,
    patternId: 19,
  },
  {
    breedId: 311,
    patternId: 20,
  },
  {
    breedId: 312,
    patternId: 16,
  },
  {
    breedId: 312,
    patternId: 18,
  },
  {
    breedId: 312,
    patternId: 19,
  },
  {
    breedId: 312,
    patternId: 20,
  },
  {
    breedId: 313,
    patternId: 16,
  },
  {
    breedId: 313,
    patternId: 18,
  },
  {
    breedId: 313,
    patternId: 19,
  },
  {
    breedId: 313,
    patternId: 20,
  },
  {
    breedId: 314,
    patternId: 16,
  },
  {
    breedId: 314,
    patternId: 18,
  },
  {
    breedId: 315,
    patternId: 16,
  },
  {
    breedId: 315,
    patternId: 18,
  },
  {
    breedId: 316,
    patternId: 16,
  },
  {
    breedId: 316,
    patternId: 18,
  },
  {
    breedId: 316,
    patternId: 19,
  },
  {
    breedId: 317,
    patternId: 21,
  },
  {
    breedId: 318,
    patternId: 16,
  },
  {
    breedId: 318,
    patternId: 18,
  },
  {
    breedId: 319,
    patternId: 16,
  },
  {
    breedId: 319,
    patternId: 18,
  },
  {
    breedId: 320,
    patternId: 21,
  },
  {
    breedId: 321,
    patternId: 21,
  },
  {
    breedId: 322,
    patternId: 16,
  },
  {
    breedId: 322,
    patternId: 18,
  },
  {
    breedId: 322,
    patternId: 19,
  },
  {
    breedId: 323,
    patternId: 16,
  },
  {
    breedId: 323,
    patternId: 18,
  },
  {
    breedId: 323,
    patternId: 19,
  },
  {
    breedId: 324,
    patternId: 16,
  },
  {
    breedId: 324,
    patternId: 18,
  },
  {
    breedId: 324,
    patternId: 19,
  },
  {
    breedId: 325,
    patternId: 16,
  },
  {
    breedId: 325,
    patternId: 18,
  },
  {
    breedId: 325,
    patternId: 19,
  },
  {
    breedId: 326,
    patternId: 16,
  },
  {
    breedId: 326,
    patternId: 18,
  },
  {
    breedId: 326,
    patternId: 19,
  },
  {
    breedId: 327,
    patternId: 16,
  },
  {
    breedId: 327,
    patternId: 18,
  },
  {
    breedId: 327,
    patternId: 19,
  },
  {
    breedId: 328,
    patternId: 16,
  },
  {
    breedId: 328,
    patternId: 18,
  },
  {
    breedId: 328,
    patternId: 19,
  },
  {
    breedId: 329,
    patternId: 16,
  },
  {
    breedId: 329,
    patternId: 18,
  },
  {
    breedId: 329,
    patternId: 19,
  },
  {
    breedId: 330,
    patternId: 16,
  },
  {
    breedId: 330,
    patternId: 18,
  },
  {
    breedId: 330,
    patternId: 19,
  },
  {
    breedId: 331,
    patternId: 16,
  },
  {
    breedId: 331,
    patternId: 18,
  },
  {
    breedId: 331,
    patternId: 19,
  },
  {
    breedId: 332,
    patternId: 16,
  },
  {
    breedId: 332,
    patternId: 18,
  },
  {
    breedId: 332,
    patternId: 19,
  },
  {
    breedId: 333,
    patternId: 16,
  },
  {
    breedId: 333,
    patternId: 18,
  },
  {
    breedId: 333,
    patternId: 19,
  },
  {
    breedId: 334,
    patternId: 16,
  },
  {
    breedId: 334,
    patternId: 18,
  },
  {
    breedId: 334,
    patternId: 19,
  },
  {
    breedId: 335,
    patternId: 16,
  },
  {
    breedId: 335,
    patternId: 18,
  },
  {
    breedId: 335,
    patternId: 19,
  },
  {
    breedId: 336,
    patternId: 16,
  },
  {
    breedId: 336,
    patternId: 18,
  },
  {
    breedId: 336,
    patternId: 19,
  },
  {
    breedId: 337,
    patternId: 21,
  },
  {
    breedId: 338,
    patternId: 21,
  },
  {
    breedId: 339,
    patternId: 21,
  },
  {
    breedId: 340,
    patternId: 21,
  },
  {
    breedId: 341,
    patternId: 21,
  },
  {
    breedId: 342,
    patternId: 16,
  },
  {
    breedId: 342,
    patternId: 18,
  },
  {
    breedId: 342,
    patternId: 19,
  },
  {
    breedId: 343,
    patternId: 21,
  },
  {
    breedId: 344,
    patternId: 21,
  },
  {
    breedId: 345,
    patternId: 21,
  },
  {
    breedId: 346,
    patternId: 21,
  },
  {
    breedId: 347,
    patternId: 21,
  },
  {
    breedId: 348,
    patternId: 21,
  },
  {
    breedId: 349,
    patternId: 21,
  },
  {
    breedId: 350,
    patternId: 21,
  },
  {
    breedId: 351,
    patternId: 21,
  },
  {
    breedId: 352,
    patternId: 21,
  },
  {
    breedId: 353,
    patternId: 21,
  },
  {
    breedId: 354,
    patternId: 21,
  },
  {
    breedId: 355,
    patternId: 21,
  },
  {
    breedId: 356,
    patternId: 21,
  },
  {
    breedId: 357,
    patternId: 21,
  },
  {
    breedId: 358,
    patternId: 21,
  },
  {
    breedId: 359,
    patternId: 21,
  },
  {
    breedId: 360,
    patternId: 21,
  },
  {
    breedId: 361,
    patternId: 21,
  },
  {
    breedId: 362,
    patternId: 21,
  },
  {
    breedId: 363,
    patternId: 21,
  },
  {
    breedId: 364,
    patternId: 16,
  },
  {
    breedId: 364,
    patternId: 18,
  },
  {
    breedId: 364,
    patternId: 19,
  },
  {
    breedId: 364,
    patternId: 20,
  },
  {
    breedId: 365,
    patternId: 21,
  },
  {
    breedId: 366,
    patternId: 21,
  },
  {
    breedId: 367,
    patternId: 16,
  },
  {
    breedId: 367,
    patternId: 18,
  },
  {
    breedId: 367,
    patternId: 19,
  },
  {
    breedId: 368,
    patternId: 21,
  },
  {
    breedId: 369,
    patternId: 21,
  },
  {
    breedId: 370,
    patternId: 21,
  },
  {
    breedId: 371,
    patternId: 21,
  },
  {
    breedId: 372,
    patternId: 21,
  },
  {
    breedId: 373,
    patternId: 21,
  },
  {
    breedId: 374,
    patternId: 16,
  },
  {
    breedId: 374,
    patternId: 18,
  },
  {
    breedId: 374,
    patternId: 19,
  },
  {
    breedId: 374,
    patternId: 20,
  },
  {
    breedId: 375,
    patternId: 21,
  },
  {
    breedId: 376,
    patternId: 21,
  },
  {
    breedId: 377,
    patternId: 21,
  },
  {
    breedId: 378,
    patternId: 21,
  },
  {
    breedId: 379,
    patternId: 21,
  },
  {
    breedId: 380,
    patternId: 21,
  },
  {
    breedId: 381,
    patternId: 21,
  },
  {
    breedId: 382,
    patternId: 16,
  },
  {
    breedId: 382,
    patternId: 18,
  },
  {
    breedId: 382,
    patternId: 19,
  },
  {
    breedId: 382,
    patternId: 20,
  },
  {
    breedId: 383,
    patternId: 16,
  },
  {
    breedId: 383,
    patternId: 14,
  },
  {
    breedId: 383,
    patternId: 18,
  },
  {
    breedId: 384,
    patternId: 21,
  },
  {
    breedId: 385,
    patternId: 16,
  },
  {
    breedId: 385,
    patternId: 14,
  },
  {
    breedId: 385,
    patternId: 18,
  },
  {
    breedId: 386,
    patternId: 16,
  },
  {
    breedId: 386,
    patternId: 18,
  },
  {
    breedId: 386,
    patternId: 19,
  },
  {
    breedId: 387,
    patternId: 16,
  },
  {
    breedId: 387,
    patternId: 18,
  },
  {
    breedId: 387,
    patternId: 19,
  },
  {
    breedId: 387,
    patternId: 20,
  },
  {
    breedId: 388,
    patternId: 16,
  },
  {
    breedId: 388,
    patternId: 18,
  },
  {
    breedId: 388,
    patternId: 19,
  },
  {
    breedId: 388,
    patternId: 20,
  },
  {
    breedId: 389,
    patternId: 21,
  },
  {
    breedId: 390,
    patternId: 16,
  },
  {
    breedId: 390,
    patternId: 14,
  },
  {
    breedId: 390,
    patternId: 18,
  },
  {
    breedId: 391,
    patternId: 21,
  },
  {
    breedId: 392,
    patternId: 21,
  },
  {
    breedId: 393,
    patternId: 16,
  },
  {
    breedId: 393,
    patternId: 18,
  },
  {
    breedId: 393,
    patternId: 19,
  },
  {
    breedId: 394,
    patternId: 16,
  },
  {
    breedId: 395,
    patternId: 16,
  },
  {
    breedId: 395,
    patternId: 18,
  },
  {
    breedId: 395,
    patternId: 19,
  },
  {
    breedId: 396,
    patternId: 21,
  },
  {
    breedId: 397,
    patternId: 16,
  },
  {
    breedId: 397,
    patternId: 18,
  },
  {
    breedId: 397,
    patternId: 19,
  },
  {
    breedId: 398,
    patternId: 16,
  },
  {
    breedId: 398,
    patternId: 18,
  },
  {
    breedId: 398,
    patternId: 19,
  },
  {
    breedId: 399,
    patternId: 16,
  },
  {
    breedId: 400,
    patternId: 16,
  },
  {
    breedId: 401,
    patternId: 16,
  },
  {
    breedId: 402,
    patternId: 16,
  },
  {
    breedId: 403,
    patternId: 16,
  },
  {
    breedId: 404,
    patternId: 16,
  },
  {
    breedId: 405,
    patternId: 16,
  },
  {
    breedId: 405,
    patternId: 18,
  },
  {
    breedId: 405,
    patternId: 19,
  },
  {
    breedId: 406,
    patternId: 16,
  },
  {
    breedId: 406,
    patternId: 18,
  },
  {
    breedId: 406,
    patternId: 19,
  },
  {
    breedId: 407,
    patternId: 16,
  },
  {
    breedId: 407,
    patternId: 18,
  },
  {
    breedId: 407,
    patternId: 19,
  },
  {
    breedId: 408,
    patternId: 16,
  },
  {
    breedId: 408,
    patternId: 18,
  },
  {
    breedId: 408,
    patternId: 19,
  },
  {
    breedId: 409,
    patternId: 16,
  },
  {
    breedId: 409,
    patternId: 18,
  },
  {
    breedId: 409,
    patternId: 19,
  },
  {
    breedId: 410,
    patternId: 16,
  },
  {
    breedId: 410,
    patternId: 14,
  },
  {
    breedId: 410,
    patternId: 18,
  },
  {
    breedId: 411,
    patternId: 16,
  },
  {
    breedId: 411,
    patternId: 18,
  },
  {
    breedId: 411,
    patternId: 19,
  },
  {
    breedId: 412,
    patternId: 16,
  },
  {
    breedId: 412,
    patternId: 18,
  },
  {
    breedId: 412,
    patternId: 19,
  },
  {
    breedId: 413,
    patternId: 16,
  },
  {
    breedId: 413,
    patternId: 18,
  },
  {
    breedId: 413,
    patternId: 19,
  },
  {
    breedId: 414,
    patternId: 16,
  },
  {
    breedId: 414,
    patternId: 18,
  },
  {
    breedId: 414,
    patternId: 19,
  },
  {
    breedId: 415,
    patternId: 21,
  },
  {
    breedId: 416,
    patternId: 16,
  },
  {
    breedId: 416,
    patternId: 14,
  },
  {
    breedId: 416,
    patternId: 18,
  },
  {
    breedId: 417,
    patternId: 16,
  },
  {
    breedId: 417,
    patternId: 14,
  },
  {
    breedId: 417,
    patternId: 18,
  },
  {
    breedId: 418,
    patternId: 16,
  },
  {
    breedId: 418,
    patternId: 14,
  },
  {
    breedId: 418,
    patternId: 18,
  },
  {
    breedId: 419,
    patternId: 16,
  },
  {
    breedId: 419,
    patternId: 14,
  },
  {
    breedId: 419,
    patternId: 18,
  },
  {
    breedId: 420,
    patternId: 16,
  },
  {
    breedId: 420,
    patternId: 18,
  },
  {
    breedId: 420,
    patternId: 19,
  },
  {
    breedId: 421,
    patternId: 16,
  },
  {
    breedId: 421,
    patternId: 18,
  },
  {
    breedId: 421,
    patternId: 19,
  },
  {
    breedId: 422,
    patternId: 16,
  },
  {
    breedId: 422,
    patternId: 18,
  },
  {
    breedId: 423,
    patternId: 16,
  },
  {
    breedId: 423,
    patternId: 14,
  },
  {
    breedId: 423,
    patternId: 18,
  },
  {
    breedId: 424,
    patternId: 16,
  },
  {
    breedId: 424,
    patternId: 18,
  },
  {
    breedId: 425,
    patternId: 16,
  },
  {
    breedId: 425,
    patternId: 18,
  },
  {
    breedId: 426,
    patternId: 16,
  },
  {
    breedId: 426,
    patternId: 18,
  },
  {
    breedId: 427,
    patternId: 16,
  },
  {
    breedId: 427,
    patternId: 18,
  },
  {
    breedId: 428,
    patternId: 16,
  },
  {
    breedId: 428,
    patternId: 18,
  },
  {
    breedId: 429,
    patternId: 16,
  },
  {
    breedId: 429,
    patternId: 14,
  },
  {
    breedId: 429,
    patternId: 18,
  },
  {
    breedId: 430,
    patternId: 16,
  },
  {
    breedId: 430,
    patternId: 18,
  },
  {
    breedId: 431,
    patternId: 16,
  },
  {
    breedId: 431,
    patternId: 18,
  },
  {
    breedId: 432,
    patternId: 16,
  },
  {
    breedId: 432,
    patternId: 18,
  },
  {
    breedId: 433,
    patternId: 16,
  },
  {
    breedId: 433,
    patternId: 18,
  },
  {
    breedId: 434,
    patternId: 16,
  },
  {
    breedId: 434,
    patternId: 18,
  },
  {
    breedId: 435,
    patternId: 16,
  },
  {
    breedId: 435,
    patternId: 18,
  },
  {
    breedId: 436,
    patternId: 16,
  },
  {
    breedId: 436,
    patternId: 14,
  },
  {
    breedId: 436,
    patternId: 18,
  },
  {
    breedId: 437,
    patternId: 16,
  },
  {
    breedId: 437,
    patternId: 18,
  },
  {
    breedId: 438,
    patternId: 21,
  },
  {
    breedId: 439,
    patternId: 21,
  },
  {
    breedId: 440,
    patternId: 21,
  },
  {
    breedId: 441,
    patternId: 21,
  },
  {
    breedId: 442,
    patternId: 16,
  },
  {
    breedId: 442,
    patternId: 18,
  },
  {
    breedId: 443,
    patternId: 16,
  },
  {
    breedId: 443,
    patternId: 18,
  },
  {
    breedId: 444,
    patternId: 16,
  },
  {
    breedId: 444,
    patternId: 14,
  },
  {
    breedId: 444,
    patternId: 15,
  },
  {
    breedId: 444,
    patternId: 18,
  },
  {
    breedId: 444,
    patternId: 19,
  },
  {
    breedId: 445,
    patternId: 16,
  },
  {
    breedId: 445,
    patternId: 18,
  },
  {
    breedId: 446,
    patternId: 16,
  },
  {
    breedId: 446,
    patternId: 19,
  },
  {
    breedId: 447,
    patternId: 21,
  },
  {
    breedId: 448,
    patternId: 16,
  },
  {
    breedId: 448,
    patternId: 14,
  },
  {
    breedId: 448,
    patternId: 18,
  },
  {
    breedId: 449,
    patternId: 21,
  },
  {
    breedId: 450,
    patternId: 16,
  },
  {
    breedId: 450,
    patternId: 18,
  },
  {
    breedId: 450,
    patternId: 19,
  },
  {
    breedId: 451,
    patternId: 16,
  },
  {
    breedId: 451,
    patternId: 18,
  },
  {
    breedId: 451,
    patternId: 19,
  },
  {
    breedId: 452,
    patternId: 21,
  },
  {
    breedId: 453,
    patternId: 21,
  },
  {
    breedId: 454,
    patternId: 16,
  },
  {
    breedId: 454,
    patternId: 14,
  },
  {
    breedId: 454,
    patternId: 18,
  },
  {
    breedId: 455,
    patternId: 21,
  },
  {
    breedId: 456,
    patternId: 16,
  },
  {
    breedId: 456,
    patternId: 14,
  },
  {
    breedId: 456,
    patternId: 18,
  },
  {
    breedId: 457,
    patternId: 21,
  },
  {
    breedId: 458,
    patternId: 16,
  },
  {
    breedId: 458,
    patternId: 14,
  },
  {
    breedId: 458,
    patternId: 18,
  },
  {
    breedId: 459,
    patternId: 21,
  },
  {
    breedId: 460,
    patternId: 21,
  },
  {
    breedId: 461,
    patternId: 21,
  },
  {
    breedId: 462,
    patternId: 21,
  },
  {
    breedId: 463,
    patternId: 21,
  },
  {
    breedId: 464,
    patternId: 21,
  },
  {
    breedId: 465,
    patternId: 21,
  },
  {
    breedId: 466,
    patternId: 21,
  },
  {
    breedId: 467,
    patternId: 21,
  },
  {
    breedId: 468,
    patternId: 16,
  },
  {
    breedId: 468,
    patternId: 18,
  },
  {
    breedId: 469,
    patternId: 21,
  },
  {
    breedId: 470,
    patternId: 21,
  },
  {
    breedId: 471,
    patternId: 21,
  },
  {
    breedId: 472,
    patternId: 21,
  },
  {
    breedId: 473,
    patternId: 21,
  },
  {
    breedId: 474,
    patternId: 21,
  },
  {
    breedId: 475,
    patternId: 21,
  },
  {
    breedId: 476,
    patternId: 21,
  },
  {
    breedId: 477,
    patternId: 21,
  },
  {
    breedId: 478,
    patternId: 21,
  },
  {
    breedId: 479,
    patternId: 21,
  },
  {
    breedId: 480,
    patternId: 21,
  },
  {
    breedId: 481,
    patternId: 21,
  },
  {
    breedId: 482,
    patternId: 21,
  },
  {
    breedId: 483,
    patternId: 21,
  },
  {
    breedId: 484,
    patternId: 21,
  },
  {
    breedId: 485,
    patternId: 21,
  },
  {
    breedId: 486,
    patternId: 21,
  },
  {
    breedId: 487,
    patternId: 21,
  },
  {
    breedId: 488,
    patternId: 21,
  },
  {
    breedId: 489,
    patternId: 21,
  },
  {
    breedId: 490,
    patternId: 21,
  },
  {
    breedId: 491,
    patternId: 21,
  },
  {
    breedId: 492,
    patternId: 21,
  },
  {
    breedId: 493,
    patternId: 21,
  },
  {
    breedId: 494,
    patternId: 21,
  },
  {
    breedId: 495,
    patternId: 21,
  },
  {
    breedId: 496,
    patternId: 21,
  },
  {
    breedId: 497,
    patternId: 21,
  },
  {
    breedId: 498,
    patternId: 21,
  },
  {
    breedId: 499,
    patternId: 21,
  },
  {
    breedId: 500,
    patternId: 21,
  },
  {
    breedId: 501,
    patternId: 21,
  },
  {
    breedId: 502,
    patternId: 16,
  },
  {
    breedId: 502,
    patternId: 18,
  },
  {
    breedId: 502,
    patternId: 21,
  },
  {
    breedId: 503,
    patternId: 21,
  },
  {
    breedId: 504,
    patternId: 16,
  },
  {
    breedId: 504,
    patternId: 18,
  },
  {
    breedId: 504,
    patternId: 21,
  },
  {
    breedId: 505,
    patternId: 16,
  },
  {
    breedId: 505,
    patternId: 18,
  },
  {
    breedId: 505,
    patternId: 21,
  },
  {
    breedId: 506,
    patternId: 16,
  },
  {
    breedId: 506,
    patternId: 18,
  },
  {
    breedId: 506,
    patternId: 21,
  },
  {
    breedId: 507,
    patternId: 16,
  },
  {
    breedId: 507,
    patternId: 18,
  },
  {
    breedId: 507,
    patternId: 21,
  },
  {
    breedId: 508,
    patternId: 16,
  },
  {
    breedId: 508,
    patternId: 18,
  },
  {
    breedId: 508,
    patternId: 21,
  },
  {
    breedId: 509,
    patternId: 16,
  },
  {
    breedId: 509,
    patternId: 18,
  },
  {
    breedId: 509,
    patternId: 21,
  },
  {
    breedId: 510,
    patternId: 16,
  },
  {
    breedId: 510,
    patternId: 18,
  },
  {
    breedId: 510,
    patternId: 21,
  },
  {
    breedId: 511,
    patternId: 16,
  },
  {
    breedId: 511,
    patternId: 18,
  },
  {
    breedId: 511,
    patternId: 21,
  },
  {
    breedId: 512,
    patternId: 16,
  },
  {
    breedId: 512,
    patternId: 18,
  },
  {
    breedId: 512,
    patternId: 19,
  },
  {
    breedId: 513,
    patternId: 16,
  },
  {
    breedId: 513,
    patternId: 18,
  },
  {
    breedId: 513,
    patternId: 21,
  },
  {
    breedId: 514,
    patternId: 16,
  },
  {
    breedId: 514,
    patternId: 18,
  },
  {
    breedId: 514,
    patternId: 21,
  },
  {
    breedId: 515,
    patternId: 16,
  },
  {
    breedId: 515,
    patternId: 18,
  },
  {
    breedId: 515,
    patternId: 21,
  },
  {
    breedId: 516,
    patternId: 16,
  },
  {
    breedId: 516,
    patternId: 18,
  },
  {
    breedId: 516,
    patternId: 21,
  },
  {
    breedId: 517,
    patternId: 16,
  },
  {
    breedId: 517,
    patternId: 18,
  },
  {
    breedId: 517,
    patternId: 21,
  },
  {
    breedId: 518,
    patternId: 16,
  },
  {
    breedId: 518,
    patternId: 18,
  },
  {
    breedId: 518,
    patternId: 21,
  },
  {
    breedId: 519,
    patternId: 16,
  },
  {
    breedId: 519,
    patternId: 18,
  },
  {
    breedId: 519,
    patternId: 21,
  },
  {
    breedId: 520,
    patternId: 16,
  },
  {
    breedId: 520,
    patternId: 18,
  },
  {
    breedId: 520,
    patternId: 21,
  },
  {
    breedId: 521,
    patternId: 16,
  },
  {
    breedId: 521,
    patternId: 18,
  },
  {
    breedId: 521,
    patternId: 21,
  },
  {
    breedId: 522,
    patternId: 16,
  },
  {
    breedId: 522,
    patternId: 18,
  },
  {
    breedId: 522,
    patternId: 21,
  },
  {
    breedId: 523,
    patternId: 16,
  },
  {
    breedId: 523,
    patternId: 14,
  },
  {
    breedId: 523,
    patternId: 18,
  },
  {
    breedId: 524,
    patternId: 16,
  },
  {
    breedId: 524,
    patternId: 18,
  },
  {
    breedId: 524,
    patternId: 21,
  },
  {
    breedId: 525,
    patternId: 16,
  },
  {
    breedId: 525,
    patternId: 18,
  },
  {
    breedId: 525,
    patternId: 21,
  },
  {
    breedId: 526,
    patternId: 16,
  },
  {
    breedId: 526,
    patternId: 18,
  },
  {
    breedId: 526,
    patternId: 21,
  },
  {
    breedId: 527,
    patternId: 16,
  },
  {
    breedId: 527,
    patternId: 18,
  },
  {
    breedId: 527,
    patternId: 21,
  },
  {
    breedId: 528,
    patternId: 16,
  },
  {
    breedId: 528,
    patternId: 18,
  },
  {
    breedId: 528,
    patternId: 21,
  },
  {
    breedId: 529,
    patternId: 16,
  },
  {
    breedId: 529,
    patternId: 18,
  },
  {
    breedId: 529,
    patternId: 21,
  },
  {
    breedId: 530,
    patternId: 16,
  },
  {
    breedId: 530,
    patternId: 18,
  },
  {
    breedId: 530,
    patternId: 21,
  },
  {
    breedId: 531,
    patternId: 16,
  },
  {
    breedId: 531,
    patternId: 18,
  },
  {
    breedId: 531,
    patternId: 21,
  },
  {
    breedId: 532,
    patternId: 16,
  },
  {
    breedId: 532,
    patternId: 18,
  },
  {
    breedId: 532,
    patternId: 21,
  },
  {
    breedId: 533,
    patternId: 16,
  },
  {
    breedId: 533,
    patternId: 18,
  },
  {
    breedId: 533,
    patternId: 21,
  },
  {
    breedId: 534,
    patternId: 16,
  },
  {
    breedId: 534,
    patternId: 18,
  },
  {
    breedId: 534,
    patternId: 21,
  },
  {
    breedId: 535,
    patternId: 16,
  },
  {
    breedId: 535,
    patternId: 18,
  },
  {
    breedId: 535,
    patternId: 21,
  },
  {
    breedId: 536,
    patternId: 16,
  },
  {
    breedId: 536,
    patternId: 18,
  },
  {
    breedId: 536,
    patternId: 21,
  },
  {
    breedId: 537,
    patternId: 16,
  },
  {
    breedId: 537,
    patternId: 18,
  },
  {
    breedId: 537,
    patternId: 21,
  },
  {
    breedId: 538,
    patternId: 16,
  },
  {
    breedId: 538,
    patternId: 18,
  },
  {
    breedId: 538,
    patternId: 21,
  },
  {
    breedId: 539,
    patternId: 16,
  },
  {
    breedId: 539,
    patternId: 18,
  },
  {
    breedId: 539,
    patternId: 21,
  },
  {
    breedId: 540,
    patternId: 16,
  },
  {
    breedId: 540,
    patternId: 18,
  },
  {
    breedId: 540,
    patternId: 21,
  },
  {
    breedId: 541,
    patternId: 16,
  },
  {
    breedId: 541,
    patternId: 18,
  },
  {
    breedId: 541,
    patternId: 21,
  },
  {
    breedId: 542,
    patternId: 16,
  },
  {
    breedId: 542,
    patternId: 18,
  },
  {
    breedId: 542,
    patternId: 21,
  },
  {
    breedId: 543,
    patternId: 16,
  },
  {
    breedId: 543,
    patternId: 18,
  },
  {
    breedId: 543,
    patternId: 21,
  },
  {
    breedId: 544,
    patternId: 16,
  },
  {
    breedId: 544,
    patternId: 18,
  },
  {
    breedId: 544,
    patternId: 21,
  },
  {
    breedId: 545,
    patternId: 16,
  },
  {
    breedId: 545,
    patternId: 18,
  },
  {
    breedId: 546,
    patternId: 16,
  },
  {
    breedId: 546,
    patternId: 18,
  },
  {
    breedId: 546,
    patternId: 21,
  },
  {
    breedId: 547,
    patternId: 16,
  },
  {
    breedId: 547,
    patternId: 18,
  },
  {
    breedId: 547,
    patternId: 21,
  },
  {
    breedId: 548,
    patternId: 16,
  },
  {
    breedId: 548,
    patternId: 18,
  },
  {
    breedId: 548,
    patternId: 21,
  },
  {
    breedId: 549,
    patternId: 16,
  },
  {
    breedId: 549,
    patternId: 18,
  },
  {
    breedId: 549,
    patternId: 21,
  },
  {
    breedId: 550,
    patternId: 16,
  },
  {
    breedId: 550,
    patternId: 18,
  },
  {
    breedId: 550,
    patternId: 21,
  },
  {
    breedId: 551,
    patternId: 16,
  },
  {
    breedId: 551,
    patternId: 18,
  },
  {
    breedId: 551,
    patternId: 21,
  },
  {
    breedId: 552,
    patternId: 21,
  },
  {
    breedId: 553,
    patternId: 16,
  },
  {
    breedId: 553,
    patternId: 18,
  },
  {
    breedId: 553,
    patternId: 19,
  },
  {
    breedId: 554,
    patternId: 16,
  },
  {
    breedId: 554,
    patternId: 18,
  },
  {
    breedId: 554,
    patternId: 21,
  },
  {
    breedId: 555,
    patternId: 21,
  },
  {
    breedId: 556,
    patternId: 21,
  },
  {
    breedId: 557,
    patternId: 21,
  },
  {
    breedId: 558,
    patternId: 21,
  },
  {
    breedId: 559,
    patternId: 21,
  },
  {
    breedId: 560,
    patternId: 21,
  },
  {
    breedId: 561,
    patternId: 21,
  },
  {
    breedId: 562,
    patternId: 21,
  },
  {
    breedId: 563,
    patternId: 21,
  },
  {
    breedId: 564,
    patternId: 21,
  },
  {
    breedId: 565,
    patternId: 21,
  },
  {
    breedId: 566,
    patternId: 21,
  },
  {
    breedId: 567,
    patternId: 21,
  },
  {
    breedId: 568,
    patternId: 21,
  },
  {
    breedId: 569,
    patternId: 21,
  },
  {
    breedId: 570,
    patternId: 21,
  },
  {
    breedId: 571,
    patternId: 21,
  },
  {
    breedId: 572,
    patternId: 21,
  },
  {
    breedId: 573,
    patternId: 21,
  },
  {
    breedId: 574,
    patternId: 21,
  },
  {
    breedId: 575,
    patternId: 21,
  },
  {
    breedId: 576,
    patternId: 21,
  },
  {
    breedId: 577,
    patternId: 21,
  },
  {
    breedId: 578,
    patternId: 21,
  },
  {
    breedId: 579,
    patternId: 21,
  },
  {
    breedId: 580,
    patternId: 16,
  },
  {
    breedId: 580,
    patternId: 18,
  },
  {
    breedId: 581,
    patternId: 16,
  },
  {
    breedId: 581,
    patternId: 14,
  },
  {
    breedId: 581,
    patternId: 18,
  },
  {
    breedId: 582,
    patternId: 16,
  },
  {
    breedId: 582,
    patternId: 18,
  },
  {
    breedId: 583,
    patternId: 16,
  },
  {
    breedId: 583,
    patternId: 18,
  },
  {
    breedId: 584,
    patternId: 16,
  },
  {
    breedId: 584,
    patternId: 18,
  },
  {
    breedId: 585,
    patternId: 16,
  },
  {
    breedId: 585,
    patternId: 18,
  },
  {
    breedId: 586,
    patternId: 16,
  },
  {
    breedId: 586,
    patternId: 18,
  },
  {
    breedId: 587,
    patternId: 16,
  },
  {
    breedId: 587,
    patternId: 18,
  },
  {
    breedId: 588,
    patternId: 16,
  },
  {
    breedId: 588,
    patternId: 18,
  },
  {
    breedId: 589,
    patternId: 16,
  },
  {
    breedId: 589,
    patternId: 18,
  },
  {
    breedId: 590,
    patternId: 16,
  },
  {
    breedId: 590,
    patternId: 18,
  },
  {
    breedId: 591,
    patternId: 16,
  },
  {
    breedId: 591,
    patternId: 18,
  },
  {
    breedId: 592,
    patternId: 16,
  },
  {
    breedId: 592,
    patternId: 18,
  },
  {
    breedId: 593,
    patternId: 16,
  },
  {
    breedId: 593,
    patternId: 18,
  },
  {
    breedId: 594,
    patternId: 16,
  },
  {
    breedId: 594,
    patternId: 18,
  },
  {
    breedId: 594,
    patternId: 19,
  },
  {
    breedId: 594,
    patternId: 20,
  },
  {
    breedId: 595,
    patternId: 16,
  },
  {
    breedId: 595,
    patternId: 18,
  },
  {
    breedId: 596,
    patternId: 16,
  },
  {
    breedId: 596,
    patternId: 18,
  },
  {
    breedId: 597,
    patternId: 16,
  },
  {
    breedId: 597,
    patternId: 18,
  },
  {
    breedId: 598,
    patternId: 16,
  },
  {
    breedId: 598,
    patternId: 18,
  },
  {
    breedId: 599,
    patternId: 16,
  },
  {
    breedId: 599,
    patternId: 18,
  },
  {
    breedId: 600,
    patternId: 21,
  },
  {
    breedId: 601,
    patternId: 21,
  },
  {
    breedId: 602,
    patternId: 16,
  },
  {
    breedId: 602,
    patternId: 14,
  },
  {
    breedId: 602,
    patternId: 18,
  },
  {
    breedId: 603,
    patternId: 21,
  },
  {
    breedId: 604,
    patternId: 21,
  },
  {
    breedId: 605,
    patternId: 21,
  },
  {
    breedId: 606,
    patternId: 21,
  },
  {
    breedId: 607,
    patternId: 21,
  },
  {
    breedId: 608,
    patternId: 16,
  },
  {
    breedId: 608,
    patternId: 18,
  },
  {
    breedId: 608,
    patternId: 19,
  },
  {
    breedId: 608,
    patternId: 20,
  },
  {
    breedId: 609,
    patternId: 16,
  },
  {
    breedId: 609,
    patternId: 18,
  },
  {
    breedId: 609,
    patternId: 19,
  },
  {
    breedId: 609,
    patternId: 20,
  },
  {
    breedId: 610,
    patternId: 16,
  },
  {
    breedId: 610,
    patternId: 18,
  },
  {
    breedId: 610,
    patternId: 19,
  },
  {
    breedId: 610,
    patternId: 20,
  },
  {
    breedId: 611,
    patternId: 16,
  },
  {
    breedId: 611,
    patternId: 18,
  },
  {
    breedId: 612,
    patternId: 16,
  },
  {
    breedId: 612,
    patternId: 18,
  },
  {
    breedId: 612,
    patternId: 19,
  },
  {
    breedId: 612,
    patternId: 20,
  },
  {
    breedId: 613,
    patternId: 16,
  },
  {
    breedId: 613,
    patternId: 18,
  },
  {
    breedId: 613,
    patternId: 19,
  },
  {
    breedId: 613,
    patternId: 20,
  },
  {
    breedId: 614,
    patternId: 16,
  },
  {
    breedId: 614,
    patternId: 18,
  },
  {
    breedId: 614,
    patternId: 19,
  },
  {
    breedId: 614,
    patternId: 20,
  },
  {
    breedId: 615,
    patternId: 16,
  },
  {
    breedId: 615,
    patternId: 18,
  },
  {
    breedId: 615,
    patternId: 19,
  },
  {
    breedId: 615,
    patternId: 20,
  },
  {
    breedId: 616,
    patternId: 16,
  },
  {
    breedId: 616,
    patternId: 18,
  },
  {
    breedId: 616,
    patternId: 19,
  },
  {
    breedId: 616,
    patternId: 20,
  },
  {
    breedId: 617,
    patternId: 16,
  },
  {
    breedId: 617,
    patternId: 18,
  },
  {
    breedId: 617,
    patternId: 19,
  },
  {
    breedId: 617,
    patternId: 20,
  },
  {
    breedId: 618,
    patternId: 16,
  },
  {
    breedId: 618,
    patternId: 18,
  },
  {
    breedId: 618,
    patternId: 19,
  },
  {
    breedId: 618,
    patternId: 20,
  },
  {
    breedId: 619,
    patternId: 16,
  },
  {
    breedId: 619,
    patternId: 18,
  },
  {
    breedId: 619,
    patternId: 19,
  },
  {
    breedId: 619,
    patternId: 20,
  },
  {
    breedId: 620,
    patternId: 16,
  },
  {
    breedId: 620,
    patternId: 18,
  },
  {
    breedId: 620,
    patternId: 19,
  },
  {
    breedId: 620,
    patternId: 20,
  },
  {
    breedId: 621,
    patternId: 16,
  },
  {
    breedId: 621,
    patternId: 18,
  },
  {
    breedId: 621,
    patternId: 19,
  },
  {
    breedId: 621,
    patternId: 20,
  },
  {
    breedId: 622,
    patternId: 16,
  },
  {
    breedId: 622,
    patternId: 18,
  },
  {
    breedId: 622,
    patternId: 19,
  },
  {
    breedId: 622,
    patternId: 20,
  },
  {
    breedId: 623,
    patternId: 16,
  },
  {
    breedId: 623,
    patternId: 18,
  },
  {
    breedId: 623,
    patternId: 19,
  },
  {
    breedId: 623,
    patternId: 20,
  },
  {
    breedId: 624,
    patternId: 21,
  },
  {
    breedId: 625,
    patternId: 21,
  },
  {
    breedId: 626,
    patternId: 21,
  },
  {
    breedId: 627,
    patternId: 21,
  },
  {
    breedId: 628,
    patternId: 16,
  },
  {
    breedId: 628,
    patternId: 18,
  },
  {
    breedId: 628,
    patternId: 19,
  },
  {
    breedId: 628,
    patternId: 20,
  },
  {
    breedId: 629,
    patternId: 16,
  },
  {
    breedId: 629,
    patternId: 18,
  },
  {
    breedId: 629,
    patternId: 19,
  },
  {
    breedId: 629,
    patternId: 20,
  },
  {
    breedId: 630,
    patternId: 16,
  },
  {
    breedId: 630,
    patternId: 18,
  },
  {
    breedId: 630,
    patternId: 19,
  },
  {
    breedId: 630,
    patternId: 20,
  },
  {
    breedId: 631,
    patternId: 16,
  },
  {
    breedId: 631,
    patternId: 18,
  },
  {
    breedId: 631,
    patternId: 19,
  },
  {
    breedId: 631,
    patternId: 20,
  },
  {
    breedId: 632,
    patternId: 16,
  },
  {
    breedId: 632,
    patternId: 18,
  },
  {
    breedId: 632,
    patternId: 19,
  },
  {
    breedId: 632,
    patternId: 20,
  },
  {
    breedId: 633,
    patternId: 16,
  },
  {
    breedId: 633,
    patternId: 18,
  },
  {
    breedId: 633,
    patternId: 19,
  },
  {
    breedId: 633,
    patternId: 20,
  },
  {
    breedId: 634,
    patternId: 16,
  },
  {
    breedId: 634,
    patternId: 18,
  },
  {
    breedId: 634,
    patternId: 19,
  },
  {
    breedId: 635,
    patternId: 16,
  },
  {
    breedId: 635,
    patternId: 18,
  },
  {
    breedId: 635,
    patternId: 21,
  },
  {
    breedId: 636,
    patternId: 16,
  },
  {
    breedId: 636,
    patternId: 18,
  },
  {
    breedId: 636,
    patternId: 19,
  },
  {
    breedId: 636,
    patternId: 20,
  },
  {
    breedId: 637,
    patternId: 16,
  },
  {
    breedId: 637,
    patternId: 18,
  },
  {
    breedId: 637,
    patternId: 19,
  },
  {
    breedId: 637,
    patternId: 20,
  },
  {
    breedId: 638,
    patternId: 16,
  },
  {
    breedId: 638,
    patternId: 18,
  },
  {
    breedId: 638,
    patternId: 19,
  },
  {
    breedId: 639,
    patternId: 16,
  },
  {
    breedId: 639,
    patternId: 18,
  },
  {
    breedId: 639,
    patternId: 19,
  },
  {
    breedId: 639,
    patternId: 20,
  },
  {
    breedId: 640,
    patternId: 16,
  },
  {
    breedId: 640,
    patternId: 18,
  },
  {
    breedId: 640,
    patternId: 19,
  },
  {
    breedId: 641,
    patternId: 16,
  },
  {
    breedId: 641,
    patternId: 18,
  },
  {
    breedId: 641,
    patternId: 19,
  },
  {
    breedId: 641,
    patternId: 20,
  },
  {
    breedId: 642,
    patternId: 16,
  },
  {
    breedId: 642,
    patternId: 18,
  },
  {
    breedId: 642,
    patternId: 19,
  },
  {
    breedId: 642,
    patternId: 20,
  },
  {
    breedId: 643,
    patternId: 16,
  },
  {
    breedId: 643,
    patternId: 18,
  },
  {
    breedId: 643,
    patternId: 19,
  },
  {
    breedId: 643,
    patternId: 20,
  },
  {
    breedId: 644,
    patternId: 16,
  },
  {
    breedId: 644,
    patternId: 18,
  },
  {
    breedId: 644,
    patternId: 21,
  },
  {
    breedId: 645,
    patternId: 16,
  },
  {
    breedId: 645,
    patternId: 18,
  },
  {
    breedId: 645,
    patternId: 19,
  },
  {
    breedId: 645,
    patternId: 20,
  },
  {
    breedId: 646,
    patternId: 16,
  },
  {
    breedId: 646,
    patternId: 18,
  },
  {
    breedId: 646,
    patternId: 19,
  },
  {
    breedId: 646,
    patternId: 20,
  },
  {
    breedId: 647,
    patternId: 16,
  },
  {
    breedId: 647,
    patternId: 18,
  },
  {
    breedId: 647,
    patternId: 19,
  },
  {
    breedId: 647,
    patternId: 20,
  },
  {
    breedId: 648,
    patternId: 16,
  },
  {
    breedId: 648,
    patternId: 18,
  },
  {
    breedId: 648,
    patternId: 19,
  },
  {
    breedId: 648,
    patternId: 20,
  },
  {
    breedId: 649,
    patternId: 16,
  },
  {
    breedId: 649,
    patternId: 18,
  },
  {
    breedId: 649,
    patternId: 19,
  },
  {
    breedId: 649,
    patternId: 20,
  },
  {
    breedId: 650,
    patternId: 16,
  },
  {
    breedId: 650,
    patternId: 18,
  },
  {
    breedId: 650,
    patternId: 19,
  },
  {
    breedId: 650,
    patternId: 20,
  },
  {
    breedId: 651,
    patternId: 16,
  },
  {
    breedId: 651,
    patternId: 18,
  },
  {
    breedId: 651,
    patternId: 19,
  },
  {
    breedId: 651,
    patternId: 20,
  },
  {
    breedId: 652,
    patternId: 16,
  },
  {
    breedId: 652,
    patternId: 18,
  },
  {
    breedId: 652,
    patternId: 19,
  },
  {
    breedId: 653,
    patternId: 16,
  },
  {
    breedId: 653,
    patternId: 18,
  },
  {
    breedId: 653,
    patternId: 19,
  },
  {
    breedId: 653,
    patternId: 20,
  },
  {
    breedId: 654,
    patternId: 16,
  },
  {
    breedId: 654,
    patternId: 18,
  },
  {
    breedId: 654,
    patternId: 19,
  },
  {
    breedId: 654,
    patternId: 20,
  },
  {
    breedId: 655,
    patternId: 16,
  },
  {
    breedId: 655,
    patternId: 18,
  },
  {
    breedId: 655,
    patternId: 19,
  },
  {
    breedId: 655,
    patternId: 20,
  },
  {
    breedId: 656,
    patternId: 16,
  },
  {
    breedId: 656,
    patternId: 18,
  },
  {
    breedId: 656,
    patternId: 19,
  },
  {
    breedId: 656,
    patternId: 20,
  },
  {
    breedId: 657,
    patternId: 16,
  },
  {
    breedId: 657,
    patternId: 18,
  },
  {
    breedId: 657,
    patternId: 19,
  },
  {
    breedId: 657,
    patternId: 20,
  },
  {
    breedId: 658,
    patternId: 21,
  },
  {
    breedId: 659,
    patternId: 21,
  },
  {
    breedId: 660,
    patternId: 16,
  },
  {
    breedId: 660,
    patternId: 18,
  },
  {
    breedId: 660,
    patternId: 19,
  },
  {
    breedId: 660,
    patternId: 20,
  },
  {
    breedId: 661,
    patternId: 16,
  },
  {
    breedId: 661,
    patternId: 18,
  },
  {
    breedId: 661,
    patternId: 19,
  },
  {
    breedId: 661,
    patternId: 20,
  },
  {
    breedId: 662,
    patternId: 16,
  },
  {
    breedId: 662,
    patternId: 14,
  },
  {
    breedId: 662,
    patternId: 18,
  },
  {
    breedId: 663,
    patternId: 21,
  },
  {
    breedId: 664,
    patternId: 16,
  },
  {
    breedId: 664,
    patternId: 18,
  },
  {
    breedId: 664,
    patternId: 19,
  },
  {
    breedId: 664,
    patternId: 20,
  },
  {
    breedId: 665,
    patternId: 16,
  },
  {
    breedId: 665,
    patternId: 18,
  },
  {
    breedId: 665,
    patternId: 19,
  },
  {
    breedId: 665,
    patternId: 20,
  },
  {
    breedId: 666,
    patternId: 21,
  },
  {
    breedId: 667,
    patternId: 21,
  },
  {
    breedId: 668,
    patternId: 21,
  },
  {
    breedId: 669,
    patternId: 21,
  },
  {
    breedId: 670,
    patternId: 21,
  },
  {
    breedId: 671,
    patternId: 21,
  },
  {
    breedId: 672,
    patternId: 21,
  },
  {
    breedId: 673,
    patternId: 21,
  },
  {
    breedId: 674,
    patternId: 21,
  },
  {
    breedId: 675,
    patternId: 21,
  },
  {
    breedId: 676,
    patternId: 21,
  },
  {
    breedId: 677,
    patternId: 16,
  },
  {
    breedId: 677,
    patternId: 18,
  },
  {
    breedId: 677,
    patternId: 21,
  },
  {
    breedId: 678,
    patternId: 21,
  },
  {
    breedId: 679,
    patternId: 21,
  },
  {
    breedId: 680,
    patternId: 21,
  },
  {
    breedId: 681,
    patternId: 21,
  },
  {
    breedId: 682,
    patternId: 21,
  },
  {
    breedId: 683,
    patternId: 21,
  },
  {
    breedId: 684,
    patternId: 21,
  },
  {
    breedId: 685,
    patternId: 21,
  },
  {
    breedId: 686,
    patternId: 21,
  },
  {
    breedId: 687,
    patternId: 21,
  },
  {
    breedId: 688,
    patternId: 21,
  },
  {
    breedId: 689,
    patternId: 21,
  },
  {
    breedId: 690,
    patternId: 21,
  },
  {
    breedId: 691,
    patternId: 21,
  },
  {
    breedId: 692,
    patternId: 16,
  },
  {
    breedId: 692,
    patternId: 18,
  },
  {
    breedId: 692,
    patternId: 19,
  },
  {
    breedId: 693,
    patternId: 16,
  },
  {
    breedId: 693,
    patternId: 18,
  },
  {
    breedId: 693,
    patternId: 19,
  },
  {
    breedId: 694,
    patternId: 16,
  },
  {
    breedId: 694,
    patternId: 18,
  },
  {
    breedId: 694,
    patternId: 19,
  },
  {
    breedId: 695,
    patternId: 16,
  },
  {
    breedId: 695,
    patternId: 18,
  },
  {
    breedId: 695,
    patternId: 19,
  },
  {
    breedId: 696,
    patternId: 16,
  },
  {
    breedId: 696,
    patternId: 18,
  },
  {
    breedId: 696,
    patternId: 19,
  },
  {
    breedId: 697,
    patternId: 16,
  },
  {
    breedId: 697,
    patternId: 14,
  },
  {
    breedId: 697,
    patternId: 18,
  },
  {
    breedId: 698,
    patternId: 16,
  },
  {
    breedId: 698,
    patternId: 18,
  },
  {
    breedId: 698,
    patternId: 19,
  },
  {
    breedId: 699,
    patternId: 16,
  },
  {
    breedId: 699,
    patternId: 18,
  },
  {
    breedId: 699,
    patternId: 19,
  },
  {
    breedId: 700,
    patternId: 16,
  },
  {
    breedId: 700,
    patternId: 18,
  },
  {
    breedId: 700,
    patternId: 19,
  },
  {
    breedId: 701,
    patternId: 16,
  },
  {
    breedId: 701,
    patternId: 18,
  },
  {
    breedId: 701,
    patternId: 19,
  },
  {
    breedId: 702,
    patternId: 16,
  },
  {
    breedId: 702,
    patternId: 14,
  },
  {
    breedId: 702,
    patternId: 18,
  },
  {
    breedId: 703,
    patternId: 16,
  },
  {
    breedId: 703,
    patternId: 18,
  },
  {
    breedId: 703,
    patternId: 19,
  },
  {
    breedId: 704,
    patternId: 16,
  },
  {
    breedId: 704,
    patternId: 18,
  },
  {
    breedId: 704,
    patternId: 19,
  },
  {
    breedId: 705,
    patternId: 16,
  },
  {
    breedId: 705,
    patternId: 18,
  },
  {
    breedId: 705,
    patternId: 19,
  },
  {
    breedId: 706,
    patternId: 16,
  },
  {
    breedId: 706,
    patternId: 18,
  },
  {
    breedId: 706,
    patternId: 19,
  },
  {
    breedId: 707,
    patternId: 16,
  },
  {
    breedId: 707,
    patternId: 18,
  },
  {
    breedId: 707,
    patternId: 19,
  },
  {
    breedId: 708,
    patternId: 16,
  },
  {
    breedId: 708,
    patternId: 18,
  },
  {
    breedId: 708,
    patternId: 19,
  },
  {
    breedId: 709,
    patternId: 16,
  },
  {
    breedId: 709,
    patternId: 18,
  },
  {
    breedId: 709,
    patternId: 19,
  },
  {
    breedId: 710,
    patternId: 16,
  },
  {
    breedId: 710,
    patternId: 18,
  },
  {
    breedId: 710,
    patternId: 19,
  },
  {
    breedId: 711,
    patternId: 16,
  },
  {
    breedId: 711,
    patternId: 18,
  },
  {
    breedId: 711,
    patternId: 19,
  },
  {
    breedId: 712,
    patternId: 16,
  },
  {
    breedId: 712,
    patternId: 18,
  },
  {
    breedId: 712,
    patternId: 19,
  },
  {
    breedId: 713,
    patternId: 16,
  },
  {
    breedId: 713,
    patternId: 18,
  },
  {
    breedId: 713,
    patternId: 19,
  },
  {
    breedId: 714,
    patternId: 16,
  },
  {
    breedId: 714,
    patternId: 18,
  },
  {
    breedId: 714,
    patternId: 19,
  },
  {
    breedId: 715,
    patternId: 16,
  },
  {
    breedId: 715,
    patternId: 18,
  },
  {
    breedId: 715,
    patternId: 19,
  },
  {
    breedId: 716,
    patternId: 16,
  },
  {
    breedId: 716,
    patternId: 18,
  },
  {
    breedId: 716,
    patternId: 19,
  },
  {
    breedId: 717,
    patternId: 16,
  },
  {
    breedId: 717,
    patternId: 18,
  },
  {
    breedId: 717,
    patternId: 19,
  },
  {
    breedId: 718,
    patternId: 16,
  },
  {
    breedId: 718,
    patternId: 18,
  },
  {
    breedId: 718,
    patternId: 19,
  },
  {
    breedId: 719,
    patternId: 16,
  },
  {
    breedId: 719,
    patternId: 18,
  },
  {
    breedId: 719,
    patternId: 19,
  },
  {
    breedId: 720,
    patternId: 16,
  },
  {
    breedId: 720,
    patternId: 18,
  },
  {
    breedId: 720,
    patternId: 19,
  },
  {
    breedId: 721,
    patternId: 16,
  },
  {
    breedId: 721,
    patternId: 18,
  },
  {
    breedId: 721,
    patternId: 19,
  },
  {
    breedId: 722,
    patternId: 16,
  },
  {
    breedId: 722,
    patternId: 18,
  },
  {
    breedId: 722,
    patternId: 19,
  },
  {
    breedId: 723,
    patternId: 16,
  },
  {
    breedId: 723,
    patternId: 18,
  },
  {
    breedId: 723,
    patternId: 19,
  },
  {
    breedId: 724,
    patternId: 16,
  },
  {
    breedId: 724,
    patternId: 18,
  },
  {
    breedId: 724,
    patternId: 19,
  },
  {
    breedId: 725,
    patternId: 16,
  },
  {
    breedId: 725,
    patternId: 18,
  },
  {
    breedId: 725,
    patternId: 19,
  },
  {
    breedId: 726,
    patternId: 16,
  },
  {
    breedId: 726,
    patternId: 18,
  },
  {
    breedId: 726,
    patternId: 19,
  },
  {
    breedId: 727,
    patternId: 16,
  },
  {
    breedId: 727,
    patternId: 18,
  },
  {
    breedId: 727,
    patternId: 19,
  },
  {
    breedId: 728,
    patternId: 16,
  },
  {
    breedId: 728,
    patternId: 18,
  },
  {
    breedId: 728,
    patternId: 19,
  },
  {
    breedId: 729,
    patternId: 16,
  },
  {
    breedId: 729,
    patternId: 18,
  },
  {
    breedId: 729,
    patternId: 19,
  },
  {
    breedId: 730,
    patternId: 16,
  },
  {
    breedId: 730,
    patternId: 14,
  },
  {
    breedId: 730,
    patternId: 18,
  },
  {
    breedId: 731,
    patternId: 16,
  },
  {
    breedId: 731,
    patternId: 18,
  },
  {
    breedId: 731,
    patternId: 19,
  },
  {
    breedId: 732,
    patternId: 16,
  },
  {
    breedId: 732,
    patternId: 18,
  },
  {
    breedId: 732,
    patternId: 19,
  },
  {
    breedId: 733,
    patternId: 16,
  },
  {
    breedId: 733,
    patternId: 14,
  },
  {
    breedId: 733,
    patternId: 18,
  },
  {
    breedId: 734,
    patternId: 16,
  },
  {
    breedId: 734,
    patternId: 18,
  },
  {
    breedId: 734,
    patternId: 19,
  },
  {
    breedId: 735,
    patternId: 16,
  },
  {
    breedId: 735,
    patternId: 18,
  },
  {
    breedId: 735,
    patternId: 19,
  },
  {
    breedId: 736,
    patternId: 16,
  },
  {
    breedId: 736,
    patternId: 18,
  },
  {
    breedId: 736,
    patternId: 19,
  },
  {
    breedId: 737,
    patternId: 16,
  },
  {
    breedId: 737,
    patternId: 18,
  },
  {
    breedId: 737,
    patternId: 19,
  },
  {
    breedId: 738,
    patternId: 16,
  },
  {
    breedId: 738,
    patternId: 18,
  },
  {
    breedId: 738,
    patternId: 19,
  },
  {
    breedId: 739,
    patternId: 16,
  },
  {
    breedId: 739,
    patternId: 18,
  },
  {
    breedId: 739,
    patternId: 19,
  },
  {
    breedId: 740,
    patternId: 16,
  },
  {
    breedId: 740,
    patternId: 18,
  },
  {
    breedId: 740,
    patternId: 19,
  },
  {
    breedId: 741,
    patternId: 16,
  },
  {
    breedId: 741,
    patternId: 18,
  },
  {
    breedId: 741,
    patternId: 19,
  },
  {
    breedId: 742,
    patternId: 16,
  },
  {
    breedId: 742,
    patternId: 18,
  },
  {
    breedId: 742,
    patternId: 19,
  },
  {
    breedId: 743,
    patternId: 16,
  },
  {
    breedId: 743,
    patternId: 18,
  },
  {
    breedId: 743,
    patternId: 19,
  },
  {
    breedId: 744,
    patternId: 16,
  },
  {
    breedId: 744,
    patternId: 18,
  },
  {
    breedId: 744,
    patternId: 19,
  },
  {
    breedId: 745,
    patternId: 16,
  },
  {
    breedId: 745,
    patternId: 18,
  },
  {
    breedId: 745,
    patternId: 19,
  },
  {
    breedId: 746,
    patternId: 16,
  },
  {
    breedId: 746,
    patternId: 18,
  },
  {
    breedId: 746,
    patternId: 19,
  },
  {
    breedId: 747,
    patternId: 16,
  },
  {
    breedId: 747,
    patternId: 18,
  },
  {
    breedId: 747,
    patternId: 19,
  },
  {
    breedId: 748,
    patternId: 16,
  },
  {
    breedId: 748,
    patternId: 18,
  },
  {
    breedId: 748,
    patternId: 19,
  },
  {
    breedId: 749,
    patternId: 16,
  },
  {
    breedId: 749,
    patternId: 18,
  },
  {
    breedId: 749,
    patternId: 19,
  },
  {
    breedId: 749,
    patternId: 20,
  },
  {
    breedId: 750,
    patternId: 16,
  },
  {
    breedId: 750,
    patternId: 18,
  },
  {
    breedId: 750,
    patternId: 19,
  },
  {
    breedId: 751,
    patternId: 16,
  },
  {
    breedId: 751,
    patternId: 18,
  },
  {
    breedId: 751,
    patternId: 19,
  },
  {
    breedId: 752,
    patternId: 16,
  },
  {
    breedId: 752,
    patternId: 18,
  },
  {
    breedId: 752,
    patternId: 19,
  },
  {
    breedId: 753,
    patternId: 16,
  },
  {
    breedId: 753,
    patternId: 18,
  },
  {
    breedId: 753,
    patternId: 19,
  },
  {
    breedId: 754,
    patternId: 16,
  },
  {
    breedId: 754,
    patternId: 18,
  },
  {
    breedId: 754,
    patternId: 19,
  },
  {
    breedId: 755,
    patternId: 16,
  },
  {
    breedId: 755,
    patternId: 18,
  },
  {
    breedId: 755,
    patternId: 19,
  },
  {
    breedId: 756,
    patternId: 16,
  },
  {
    breedId: 756,
    patternId: 18,
  },
  {
    breedId: 756,
    patternId: 19,
  },
  {
    breedId: 757,
    patternId: 16,
  },
  {
    breedId: 758,
    patternId: 16,
  },
  {
    breedId: 758,
    patternId: 18,
  },
  {
    breedId: 758,
    patternId: 19,
  },
  {
    breedId: 759,
    patternId: 16,
  },
  {
    breedId: 759,
    patternId: 18,
  },
  {
    breedId: 759,
    patternId: 19,
  },
  {
    breedId: 760,
    patternId: 16,
  },
  {
    breedId: 760,
    patternId: 18,
  },
  {
    breedId: 760,
    patternId: 19,
  },
  {
    breedId: 761,
    patternId: 16,
  },
  {
    breedId: 761,
    patternId: 18,
  },
  {
    breedId: 761,
    patternId: 19,
  },
  {
    breedId: 762,
    patternId: 16,
  },
  {
    breedId: 762,
    patternId: 18,
  },
  {
    breedId: 762,
    patternId: 19,
  },
  {
    breedId: 763,
    patternId: 16,
  },
  {
    breedId: 763,
    patternId: 18,
  },
  {
    breedId: 763,
    patternId: 19,
  },
  {
    breedId: 764,
    patternId: 16,
  },
  {
    breedId: 764,
    patternId: 18,
  },
  {
    breedId: 764,
    patternId: 19,
  },
  {
    breedId: 765,
    patternId: 16,
  },
  {
    breedId: 765,
    patternId: 18,
  },
  {
    breedId: 765,
    patternId: 19,
  },
  {
    breedId: 766,
    patternId: 16,
  },
  {
    breedId: 766,
    patternId: 18,
  },
  {
    breedId: 766,
    patternId: 19,
  },
  {
    breedId: 767,
    patternId: 16,
  },
  {
    breedId: 767,
    patternId: 18,
  },
  {
    breedId: 767,
    patternId: 19,
  },
  {
    breedId: 768,
    patternId: 16,
  },
  {
    breedId: 768,
    patternId: 18,
  },
  {
    breedId: 768,
    patternId: 19,
  },
  {
    breedId: 769,
    patternId: 16,
  },
  {
    breedId: 769,
    patternId: 18,
  },
  {
    breedId: 769,
    patternId: 19,
  },
  {
    breedId: 770,
    patternId: 16,
  },
  {
    breedId: 770,
    patternId: 18,
  },
  {
    breedId: 770,
    patternId: 19,
  },
  {
    breedId: 771,
    patternId: 16,
  },
  {
    breedId: 771,
    patternId: 18,
  },
  {
    breedId: 771,
    patternId: 19,
  },
  {
    breedId: 772,
    patternId: 16,
  },
  {
    breedId: 772,
    patternId: 18,
  },
  {
    breedId: 772,
    patternId: 19,
  },
  {
    breedId: 773,
    patternId: 16,
  },
  {
    breedId: 773,
    patternId: 18,
  },
  {
    breedId: 773,
    patternId: 19,
  },
  {
    breedId: 774,
    patternId: 16,
  },
  {
    breedId: 774,
    patternId: 18,
  },
  {
    breedId: 774,
    patternId: 19,
  },
  {
    breedId: 775,
    patternId: 16,
  },
  {
    breedId: 775,
    patternId: 18,
  },
  {
    breedId: 775,
    patternId: 19,
  },
  {
    breedId: 776,
    patternId: 16,
  },
  {
    breedId: 776,
    patternId: 18,
  },
  {
    breedId: 776,
    patternId: 19,
  },
  {
    breedId: 777,
    patternId: 16,
  },
  {
    breedId: 777,
    patternId: 18,
  },
  {
    breedId: 777,
    patternId: 19,
  },
  {
    breedId: 778,
    patternId: 16,
  },
  {
    breedId: 778,
    patternId: 18,
  },
  {
    breedId: 778,
    patternId: 19,
  },
  {
    breedId: 779,
    patternId: 16,
  },
  {
    breedId: 779,
    patternId: 18,
  },
  {
    breedId: 779,
    patternId: 19,
  },
  {
    breedId: 780,
    patternId: 21,
  },
  {
    breedId: 781,
    patternId: 16,
  },
  {
    breedId: 781,
    patternId: 18,
  },
  {
    breedId: 781,
    patternId: 19,
  },
  {
    breedId: 782,
    patternId: 16,
  },
  {
    breedId: 782,
    patternId: 18,
  },
  {
    breedId: 782,
    patternId: 19,
  },
  {
    breedId: 783,
    patternId: 16,
  },
  {
    breedId: 783,
    patternId: 18,
  },
  {
    breedId: 783,
    patternId: 19,
  },
  {
    breedId: 784,
    patternId: 16,
  },
  {
    breedId: 784,
    patternId: 18,
  },
  {
    breedId: 784,
    patternId: 19,
  },
  {
    breedId: 785,
    patternId: 16,
  },
  {
    breedId: 785,
    patternId: 18,
  },
  {
    breedId: 785,
    patternId: 19,
  },
  {
    breedId: 786,
    patternId: 16,
  },
  {
    breedId: 786,
    patternId: 18,
  },
  {
    breedId: 786,
    patternId: 19,
  },
  {
    breedId: 787,
    patternId: 16,
  },
  {
    breedId: 787,
    patternId: 18,
  },
  {
    breedId: 787,
    patternId: 19,
  },
  {
    breedId: 788,
    patternId: 16,
  },
  {
    breedId: 788,
    patternId: 18,
  },
  {
    breedId: 788,
    patternId: 19,
  },
  {
    breedId: 789,
    patternId: 16,
  },
  {
    breedId: 789,
    patternId: 18,
  },
  {
    breedId: 789,
    patternId: 19,
  },
  {
    breedId: 790,
    patternId: 16,
  },
  {
    breedId: 790,
    patternId: 18,
  },
  {
    breedId: 790,
    patternId: 19,
  },
  {
    breedId: 791,
    patternId: 16,
  },
  {
    breedId: 791,
    patternId: 14,
  },
  {
    breedId: 791,
    patternId: 18,
  },
  {
    breedId: 792,
    patternId: 16,
  },
  {
    breedId: 792,
    patternId: 18,
  },
  {
    breedId: 792,
    patternId: 19,
  },
  {
    breedId: 793,
    patternId: 16,
  },
  {
    breedId: 793,
    patternId: 18,
  },
  {
    breedId: 793,
    patternId: 19,
  },
  {
    breedId: 794,
    patternId: 16,
  },
  {
    breedId: 794,
    patternId: 18,
  },
  {
    breedId: 794,
    patternId: 19,
  },
  {
    breedId: 795,
    patternId: 16,
  },
  {
    breedId: 795,
    patternId: 18,
  },
  {
    breedId: 795,
    patternId: 19,
  },
  {
    breedId: 796,
    patternId: 16,
  },
  {
    breedId: 796,
    patternId: 18,
  },
  {
    breedId: 796,
    patternId: 19,
  },
  {
    breedId: 797,
    patternId: 16,
  },
  {
    breedId: 797,
    patternId: 18,
  },
  {
    breedId: 797,
    patternId: 19,
  },
  {
    breedId: 798,
    patternId: 16,
  },
  {
    breedId: 798,
    patternId: 18,
  },
  {
    breedId: 798,
    patternId: 19,
  },
  {
    breedId: 799,
    patternId: 16,
  },
  {
    breedId: 799,
    patternId: 18,
  },
  {
    breedId: 799,
    patternId: 19,
  },
  {
    breedId: 800,
    patternId: 16,
  },
  {
    breedId: 800,
    patternId: 18,
  },
  {
    breedId: 800,
    patternId: 19,
  },
  {
    breedId: 801,
    patternId: 16,
  },
  {
    breedId: 801,
    patternId: 18,
  },
  {
    breedId: 801,
    patternId: 19,
  },
  {
    breedId: 801,
    patternId: 20,
  },
  {
    breedId: 802,
    patternId: 16,
  },
  {
    breedId: 802,
    patternId: 18,
  },
  {
    breedId: 802,
    patternId: 19,
  },
  {
    breedId: 803,
    patternId: 16,
  },
  {
    breedId: 803,
    patternId: 18,
  },
  {
    breedId: 803,
    patternId: 19,
  },
  {
    breedId: 804,
    patternId: 16,
  },
  {
    breedId: 804,
    patternId: 18,
  },
  {
    breedId: 804,
    patternId: 19,
  },
  {
    breedId: 805,
    patternId: 16,
  },
  {
    breedId: 805,
    patternId: 18,
  },
  {
    breedId: 805,
    patternId: 19,
  },
  {
    breedId: 806,
    patternId: 16,
  },
  {
    breedId: 806,
    patternId: 18,
  },
  {
    breedId: 806,
    patternId: 19,
  },
  {
    breedId: 807,
    patternId: 16,
  },
  {
    breedId: 807,
    patternId: 18,
  },
  {
    breedId: 807,
    patternId: 19,
  },
  {
    breedId: 808,
    patternId: 16,
  },
  {
    breedId: 808,
    patternId: 18,
  },
  {
    breedId: 808,
    patternId: 19,
  },
  {
    breedId: 809,
    patternId: 16,
  },
  {
    breedId: 809,
    patternId: 18,
  },
  {
    breedId: 809,
    patternId: 19,
  },
  {
    breedId: 810,
    patternId: 16,
  },
  {
    breedId: 810,
    patternId: 18,
  },
  {
    breedId: 810,
    patternId: 19,
  },
  {
    breedId: 811,
    patternId: 16,
  },
  {
    breedId: 811,
    patternId: 18,
  },
  {
    breedId: 811,
    patternId: 19,
  },
  {
    breedId: 812,
    patternId: 16,
  },
  {
    breedId: 812,
    patternId: 18,
  },
  {
    breedId: 812,
    patternId: 19,
  },
  {
    breedId: 813,
    patternId: 16,
  },
  {
    breedId: 813,
    patternId: 18,
  },
  {
    breedId: 813,
    patternId: 19,
  },
  {
    breedId: 814,
    patternId: 16,
  },
  {
    breedId: 814,
    patternId: 18,
  },
  {
    breedId: 814,
    patternId: 19,
  },
  {
    breedId: 815,
    patternId: 16,
  },
  {
    breedId: 815,
    patternId: 18,
  },
  {
    breedId: 815,
    patternId: 19,
  },
  {
    breedId: 816,
    patternId: 16,
  },
  {
    breedId: 816,
    patternId: 18,
  },
  {
    breedId: 816,
    patternId: 19,
  },
  {
    breedId: 817,
    patternId: 16,
  },
  {
    breedId: 817,
    patternId: 18,
  },
  {
    breedId: 817,
    patternId: 19,
  },
  {
    breedId: 818,
    patternId: 16,
  },
  {
    breedId: 818,
    patternId: 14,
  },
  {
    breedId: 818,
    patternId: 18,
  },
  {
    breedId: 819,
    patternId: 16,
  },
  {
    breedId: 819,
    patternId: 18,
  },
  {
    breedId: 819,
    patternId: 19,
  },
  {
    breedId: 820,
    patternId: 16,
  },
  {
    breedId: 820,
    patternId: 18,
  },
  {
    breedId: 820,
    patternId: 19,
  },
  {
    breedId: 821,
    patternId: 16,
  },
  {
    breedId: 821,
    patternId: 18,
  },
  {
    breedId: 821,
    patternId: 21,
  },
  {
    breedId: 822,
    patternId: 16,
  },
  {
    breedId: 822,
    patternId: 18,
  },
  {
    breedId: 822,
    patternId: 19,
  },
  {
    breedId: 823,
    patternId: 16,
  },
  {
    breedId: 823,
    patternId: 18,
  },
  {
    breedId: 823,
    patternId: 19,
  },
  {
    breedId: 824,
    patternId: 16,
  },
  {
    breedId: 824,
    patternId: 18,
  },
  {
    breedId: 824,
    patternId: 19,
  },
  {
    breedId: 825,
    patternId: 16,
  },
  {
    breedId: 825,
    patternId: 18,
  },
  {
    breedId: 825,
    patternId: 19,
  },
  {
    breedId: 826,
    patternId: 16,
  },
  {
    breedId: 826,
    patternId: 18,
  },
  {
    breedId: 826,
    patternId: 19,
  },
  {
    breedId: 827,
    patternId: 16,
  },
  {
    breedId: 827,
    patternId: 18,
  },
  {
    breedId: 827,
    patternId: 19,
  },
  {
    breedId: 828,
    patternId: 16,
  },
  {
    breedId: 828,
    patternId: 18,
  },
  {
    breedId: 828,
    patternId: 19,
  },
  {
    breedId: 829,
    patternId: 16,
  },
  {
    breedId: 829,
    patternId: 18,
  },
  {
    breedId: 829,
    patternId: 19,
  },
  {
    breedId: 830,
    patternId: 16,
  },
  {
    breedId: 830,
    patternId: 18,
  },
  {
    breedId: 830,
    patternId: 19,
  },
  {
    breedId: 831,
    patternId: 16,
  },
  {
    breedId: 831,
    patternId: 18,
  },
  {
    breedId: 831,
    patternId: 19,
  },
  {
    breedId: 832,
    patternId: 16,
  },
  {
    breedId: 832,
    patternId: 18,
  },
  {
    breedId: 832,
    patternId: 19,
  },
  {
    breedId: 833,
    patternId: 16,
  },
  {
    breedId: 833,
    patternId: 18,
  },
  {
    breedId: 833,
    patternId: 19,
  },
  {
    breedId: 834,
    patternId: 16,
  },
  {
    breedId: 834,
    patternId: 18,
  },
  {
    breedId: 834,
    patternId: 19,
  },
  {
    breedId: 835,
    patternId: 16,
  },
  {
    breedId: 835,
    patternId: 18,
  },
  {
    breedId: 835,
    patternId: 19,
  },
  {
    breedId: 836,
    patternId: 16,
  },
  {
    breedId: 836,
    patternId: 18,
  },
  {
    breedId: 836,
    patternId: 19,
  },
  {
    breedId: 837,
    patternId: 16,
  },
  {
    breedId: 837,
    patternId: 14,
  },
  {
    breedId: 837,
    patternId: 18,
  },
  {
    breedId: 838,
    patternId: 16,
  },
  {
    breedId: 838,
    patternId: 18,
  },
  {
    breedId: 838,
    patternId: 19,
  },
  {
    breedId: 839,
    patternId: 16,
  },
  {
    breedId: 839,
    patternId: 18,
  },
  {
    breedId: 839,
    patternId: 19,
  },
  {
    breedId: 840,
    patternId: 16,
  },
  {
    breedId: 840,
    patternId: 18,
  },
  {
    breedId: 840,
    patternId: 19,
  },
  {
    breedId: 841,
    patternId: 16,
  },
  {
    breedId: 841,
    patternId: 18,
  },
  {
    breedId: 841,
    patternId: 19,
  },
  {
    breedId: 842,
    patternId: 16,
  },
  {
    breedId: 842,
    patternId: 18,
  },
  {
    breedId: 842,
    patternId: 19,
  },
  {
    breedId: 843,
    patternId: 16,
  },
  {
    breedId: 843,
    patternId: 18,
  },
  {
    breedId: 843,
    patternId: 19,
  },
  {
    breedId: 844,
    patternId: 16,
  },
  {
    breedId: 844,
    patternId: 18,
  },
  {
    breedId: 844,
    patternId: 19,
  },
  {
    breedId: 845,
    patternId: 21,
  },
  {
    breedId: 846,
    patternId: 16,
  },
  {
    breedId: 846,
    patternId: 18,
  },
  {
    breedId: 846,
    patternId: 19,
  },
  {
    breedId: 847,
    patternId: 21,
  },
  {
    breedId: 848,
    patternId: 16,
  },
  {
    breedId: 848,
    patternId: 18,
  },
  {
    breedId: 848,
    patternId: 19,
  },
  {
    breedId: 849,
    patternId: 16,
  },
  {
    breedId: 849,
    patternId: 18,
  },
  {
    breedId: 849,
    patternId: 19,
  },
  {
    breedId: 850,
    patternId: 16,
  },
  {
    breedId: 850,
    patternId: 18,
  },
  {
    breedId: 850,
    patternId: 19,
  },
  {
    breedId: 851,
    patternId: 16,
  },
  {
    breedId: 851,
    patternId: 18,
  },
  {
    breedId: 851,
    patternId: 19,
  },
  {
    breedId: 852,
    patternId: 16,
  },
  {
    breedId: 852,
    patternId: 18,
  },
  {
    breedId: 852,
    patternId: 19,
  },
  {
    breedId: 853,
    patternId: 16,
  },
  {
    breedId: 854,
    patternId: 21,
  },
  {
    breedId: 855,
    patternId: 16,
  },
  {
    breedId: 855,
    patternId: 18,
  },
  {
    breedId: 855,
    patternId: 19,
  },
  {
    breedId: 856,
    patternId: 16,
  },
  {
    breedId: 856,
    patternId: 18,
  },
  {
    breedId: 856,
    patternId: 19,
  },
  {
    breedId: 857,
    patternId: 16,
  },
  {
    breedId: 857,
    patternId: 18,
  },
  {
    breedId: 857,
    patternId: 19,
  },
  {
    breedId: 858,
    patternId: 16,
  },
  {
    breedId: 858,
    patternId: 18,
  },
  {
    breedId: 858,
    patternId: 19,
  },
  {
    breedId: 859,
    patternId: 16,
  },
  {
    breedId: 859,
    patternId: 18,
  },
  {
    breedId: 859,
    patternId: 19,
  },
  {
    breedId: 860,
    patternId: 16,
  },
  {
    breedId: 860,
    patternId: 18,
  },
  {
    breedId: 860,
    patternId: 19,
  },
  {
    breedId: 861,
    patternId: 16,
  },
  {
    breedId: 861,
    patternId: 18,
  },
  {
    breedId: 861,
    patternId: 19,
  },
  {
    breedId: 862,
    patternId: 16,
  },
  {
    breedId: 862,
    patternId: 18,
  },
  {
    breedId: 862,
    patternId: 19,
  },
  {
    breedId: 863,
    patternId: 16,
  },
  {
    breedId: 863,
    patternId: 18,
  },
  {
    breedId: 863,
    patternId: 19,
  },
  {
    breedId: 864,
    patternId: 16,
  },
  {
    breedId: 864,
    patternId: 18,
  },
  {
    breedId: 864,
    patternId: 19,
  },
  {
    breedId: 865,
    patternId: 16,
  },
  {
    breedId: 865,
    patternId: 18,
  },
  {
    breedId: 865,
    patternId: 19,
  },
  {
    breedId: 866,
    patternId: 16,
  },
  {
    breedId: 866,
    patternId: 18,
  },
  {
    breedId: 866,
    patternId: 19,
  },
  {
    breedId: 867,
    patternId: 16,
  },
  {
    breedId: 867,
    patternId: 18,
  },
  {
    breedId: 867,
    patternId: 19,
  },
  {
    breedId: 868,
    patternId: 16,
  },
  {
    breedId: 868,
    patternId: 18,
  },
  {
    breedId: 868,
    patternId: 19,
  },
  {
    breedId: 869,
    patternId: 16,
  },
  {
    breedId: 869,
    patternId: 18,
  },
  {
    breedId: 869,
    patternId: 19,
  },
  {
    breedId: 870,
    patternId: 16,
  },
  {
    breedId: 870,
    patternId: 18,
  },
  {
    breedId: 870,
    patternId: 19,
  },
  {
    breedId: 871,
    patternId: 16,
  },
  {
    breedId: 871,
    patternId: 20,
  },
  {
    breedId: 872,
    patternId: 16,
  },
  {
    breedId: 872,
    patternId: 18,
  },
  {
    breedId: 872,
    patternId: 21,
  },
  {
    breedId: 873,
    patternId: 21,
  },
  {
    breedId: 874,
    patternId: 21,
  },
  {
    breedId: 875,
    patternId: 21,
  },
  {
    breedId: 876,
    patternId: 16,
  },
  {
    breedId: 876,
    patternId: 18,
  },
  {
    breedId: 876,
    patternId: 19,
  },
  {
    breedId: 877,
    patternId: 16,
  },
  {
    breedId: 877,
    patternId: 14,
  },
  {
    breedId: 877,
    patternId: 18,
  },
  {
    breedId: 878,
    patternId: 16,
  },
  {
    breedId: 878,
    patternId: 18,
  },
  {
    breedId: 878,
    patternId: 19,
  },
  {
    breedId: 879,
    patternId: 21,
  },
  {
    breedId: 880,
    patternId: 16,
  },
  {
    breedId: 880,
    patternId: 14,
  },
  {
    breedId: 880,
    patternId: 18,
  },
  {
    breedId: 881,
    patternId: 16,
  },
  {
    breedId: 881,
    patternId: 18,
  },
  {
    breedId: 881,
    patternId: 21,
  },
  {
    breedId: 882,
    patternId: 21,
  },
  {
    breedId: 883,
    patternId: 21,
  },
  {
    breedId: 884,
    patternId: 16,
  },
  {
    breedId: 884,
    patternId: 18,
  },
  {
    breedId: 884,
    patternId: 19,
  },
  {
    breedId: 885,
    patternId: 16,
  },
  {
    breedId: 885,
    patternId: 14,
  },
  {
    breedId: 885,
    patternId: 18,
  },
  {
    breedId: 886,
    patternId: 16,
  },
  {
    breedId: 886,
    patternId: 18,
  },
  {
    breedId: 886,
    patternId: 19,
  },
];

async function seedBreedPatterns() {
  for (const breedPattern of breedPatterns) {
    const newsBreedPattern = await prisma.breedPattern.create({
      data: breedPattern,
    });
    console.log(
      `Created new breedPattern: breedId ${newsBreedPattern.breedId}, patternId ${newsBreedPattern.patternId}`,
    );
  }
}

export default seedBreedPatterns;
