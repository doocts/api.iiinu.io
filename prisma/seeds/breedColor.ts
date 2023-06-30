import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const breedColors = [
  {
    breedId: 1,
    colorId: 12,
  },
  {
    breedId: 2,
    colorId: 1,
  },
  {
    breedId: 2,
    colorId: 2,
  },
  {
    breedId: 3,
    colorId: 12,
  },
  {
    breedId: 4,
    colorId: 12,
  },
  {
    breedId: 5,
    colorId: 12,
  },
  {
    breedId: 6,
    colorId: 12,
  },
  {
    breedId: 7,
    colorId: 12,
  },
  {
    breedId: 8,
    colorId: 1,
  },
  {
    breedId: 8,
    colorId: 2,
  },
  {
    breedId: 9,
    colorId: 12,
  },
  {
    breedId: 10,
    colorId: 1,
  },
  {
    breedId: 10,
    colorId: 2,
  },
  {
    breedId: 11,
    colorId: 4,
  },
  {
    breedId: 11,
    colorId: 5,
  },
  {
    breedId: 11,
    colorId: 7,
  },
  {
    breedId: 11,
    colorId: 8,
  },
  {
    breedId: 11,
    colorId: 9,
  },
  {
    breedId: 11,
    colorId: 10,
  },
  {
    breedId: 11,
    colorId: 11,
  },
  {
    breedId: 12,
    colorId: 12,
  },
  {
    breedId: 13,
    colorId: 1,
  },
  {
    breedId: 13,
    colorId: 3,
  },
  {
    breedId: 13,
    colorId: 5,
  },
  {
    breedId: 13,
    colorId: 7,
  },
  {
    breedId: 13,
    colorId: 8,
  },
  {
    breedId: 13,
    colorId: 9,
  },
  {
    breedId: 13,
    colorId: 10,
  },
  {
    breedId: 13,
    colorId: 11,
  },
  {
    breedId: 14,
    colorId: 12,
  },
  {
    breedId: 15,
    colorId: 1,
  },
  {
    breedId: 15,
    colorId: 3,
  },
  {
    breedId: 15,
    colorId: 5,
  },
  {
    breedId: 15,
    colorId: 7,
  },
  {
    breedId: 15,
    colorId: 8,
  },
  {
    breedId: 15,
    colorId: 9,
  },
  {
    breedId: 15,
    colorId: 10,
  },
  {
    breedId: 15,
    colorId: 11,
  },
  {
    breedId: 16,
    colorId: 1,
  },
  {
    breedId: 16,
    colorId: 2,
  },
  {
    breedId: 16,
    colorId: 3,
  },
  {
    breedId: 16,
    colorId: 5,
  },
  {
    breedId: 16,
    colorId: 7,
  },
  {
    breedId: 16,
    colorId: 8,
  },
  {
    breedId: 16,
    colorId: 9,
  },
  {
    breedId: 17,
    colorId: 1,
  },
  {
    breedId: 17,
    colorId: 3,
  },
  {
    breedId: 17,
    colorId: 5,
  },
  {
    breedId: 17,
    colorId: 7,
  },
  {
    breedId: 17,
    colorId: 8,
  },
  {
    breedId: 17,
    colorId: 9,
  },
  {
    breedId: 17,
    colorId: 10,
  },
  {
    breedId: 17,
    colorId: 11,
  },
  {
    breedId: 18,
    colorId: 1,
  },
  {
    breedId: 18,
    colorId: 3,
  },
  {
    breedId: 18,
    colorId: 5,
  },
  {
    breedId: 18,
    colorId: 7,
  },
  {
    breedId: 18,
    colorId: 8,
  },
  {
    breedId: 18,
    colorId: 9,
  },
  {
    breedId: 18,
    colorId: 10,
  },
  {
    breedId: 18,
    colorId: 11,
  },
  {
    breedId: 19,
    colorId: 1,
  },
  {
    breedId: 19,
    colorId: 2,
  },
  {
    breedId: 20,
    colorId: 1,
  },
  {
    breedId: 20,
    colorId: 2,
  },
  {
    breedId: 20,
    colorId: 3,
  },
  {
    breedId: 20,
    colorId: 5,
  },
  {
    breedId: 20,
    colorId: 7,
  },
  {
    breedId: 20,
    colorId: 8,
  },
  {
    breedId: 20,
    colorId: 9,
  },
  {
    breedId: 21,
    colorId: 1,
  },
  {
    breedId: 21,
    colorId: 3,
  },
  {
    breedId: 21,
    colorId: 5,
  },
  {
    breedId: 21,
    colorId: 7,
  },
  {
    breedId: 21,
    colorId: 8,
  },
  {
    breedId: 21,
    colorId: 9,
  },
  {
    breedId: 21,
    colorId: 10,
  },
  {
    breedId: 21,
    colorId: 11,
  },
  {
    breedId: 22,
    colorId: 4,
  },
  {
    breedId: 22,
    colorId: 5,
  },
  {
    breedId: 22,
    colorId: 7,
  },
  {
    breedId: 22,
    colorId: 8,
  },
  {
    breedId: 22,
    colorId: 9,
  },
  {
    breedId: 22,
    colorId: 10,
  },
  {
    breedId: 22,
    colorId: 11,
  },
  {
    breedId: 23,
    colorId: 4,
  },
  {
    breedId: 23,
    colorId: 5,
  },
  {
    breedId: 23,
    colorId: 7,
  },
  {
    breedId: 23,
    colorId: 8,
  },
  {
    breedId: 23,
    colorId: 9,
  },
  {
    breedId: 23,
    colorId: 10,
  },
  {
    breedId: 23,
    colorId: 11,
  },
  {
    breedId: 24,
    colorId: 4,
  },
  {
    breedId: 24,
    colorId: 5,
  },
  {
    breedId: 24,
    colorId: 7,
  },
  {
    breedId: 24,
    colorId: 8,
  },
  {
    breedId: 24,
    colorId: 9,
  },
  {
    breedId: 24,
    colorId: 10,
  },
  {
    breedId: 24,
    colorId: 11,
  },
  {
    breedId: 25,
    colorId: 1,
  },
  {
    breedId: 25,
    colorId: 3,
  },
  {
    breedId: 25,
    colorId: 5,
  },
  {
    breedId: 25,
    colorId: 7,
  },
  {
    breedId: 25,
    colorId: 8,
  },
  {
    breedId: 25,
    colorId: 9,
  },
  {
    breedId: 25,
    colorId: 10,
  },
  {
    breedId: 25,
    colorId: 11,
  },
  {
    breedId: 26,
    colorId: 1,
  },
  {
    breedId: 26,
    colorId: 3,
  },
  {
    breedId: 26,
    colorId: 5,
  },
  {
    breedId: 26,
    colorId: 7,
  },
  {
    breedId: 26,
    colorId: 8,
  },
  {
    breedId: 26,
    colorId: 9,
  },
  {
    breedId: 26,
    colorId: 10,
  },
  {
    breedId: 26,
    colorId: 11,
  },
  {
    breedId: 27,
    colorId: 12,
  },
  {
    breedId: 28,
    colorId: 1,
  },
  {
    breedId: 28,
    colorId: 2,
  },
  {
    breedId: 28,
    colorId: 3,
  },
  {
    breedId: 28,
    colorId: 4,
  },
  {
    breedId: 28,
    colorId: 5,
  },
  {
    breedId: 28,
    colorId: 6,
  },
  {
    breedId: 28,
    colorId: 7,
  },
  {
    breedId: 28,
    colorId: 8,
  },
  {
    breedId: 28,
    colorId: 9,
  },
  {
    breedId: 28,
    colorId: 10,
  },
  {
    breedId: 29,
    colorId: 1,
  },
  {
    breedId: 29,
    colorId: 3,
  },
  {
    breedId: 29,
    colorId: 5,
  },
  {
    breedId: 29,
    colorId: 7,
  },
  {
    breedId: 29,
    colorId: 8,
  },
  {
    breedId: 29,
    colorId: 9,
  },
  {
    breedId: 29,
    colorId: 10,
  },
  {
    breedId: 29,
    colorId: 11,
  },
  {
    breedId: 30,
    colorId: 1,
  },
  {
    breedId: 30,
    colorId: 3,
  },
  {
    breedId: 30,
    colorId: 5,
  },
  {
    breedId: 30,
    colorId: 7,
  },
  {
    breedId: 30,
    colorId: 8,
  },
  {
    breedId: 30,
    colorId: 9,
  },
  {
    breedId: 30,
    colorId: 10,
  },
  {
    breedId: 30,
    colorId: 11,
  },
  {
    breedId: 31,
    colorId: 1,
  },
  {
    breedId: 31,
    colorId: 3,
  },
  {
    breedId: 31,
    colorId: 5,
  },
  {
    breedId: 31,
    colorId: 7,
  },
  {
    breedId: 31,
    colorId: 8,
  },
  {
    breedId: 31,
    colorId: 9,
  },
  {
    breedId: 31,
    colorId: 10,
  },
  {
    breedId: 31,
    colorId: 11,
  },
  {
    breedId: 32,
    colorId: 1,
  },
  {
    breedId: 32,
    colorId: 2,
  },
  {
    breedId: 32,
    colorId: 3,
  },
  {
    breedId: 32,
    colorId: 4,
  },
  {
    breedId: 32,
    colorId: 5,
  },
  {
    breedId: 32,
    colorId: 6,
  },
  {
    breedId: 32,
    colorId: 7,
  },
  {
    breedId: 32,
    colorId: 8,
  },
  {
    breedId: 32,
    colorId: 9,
  },
  {
    breedId: 32,
    colorId: 10,
  },
  {
    breedId: 33,
    colorId: 1,
  },
  {
    breedId: 33,
    colorId: 3,
  },
  {
    breedId: 33,
    colorId: 5,
  },
  {
    breedId: 33,
    colorId: 7,
  },
  {
    breedId: 33,
    colorId: 8,
  },
  {
    breedId: 33,
    colorId: 9,
  },
  {
    breedId: 33,
    colorId: 10,
  },
  {
    breedId: 33,
    colorId: 11,
  },
  {
    breedId: 34,
    colorId: 1,
  },
  {
    breedId: 34,
    colorId: 3,
  },
  {
    breedId: 34,
    colorId: 5,
  },
  {
    breedId: 34,
    colorId: 7,
  },
  {
    breedId: 34,
    colorId: 8,
  },
  {
    breedId: 34,
    colorId: 9,
  },
  {
    breedId: 34,
    colorId: 10,
  },
  {
    breedId: 34,
    colorId: 11,
  },
  {
    breedId: 35,
    colorId: 1,
  },
  {
    breedId: 35,
    colorId: 3,
  },
  {
    breedId: 35,
    colorId: 5,
  },
  {
    breedId: 35,
    colorId: 7,
  },
  {
    breedId: 35,
    colorId: 8,
  },
  {
    breedId: 35,
    colorId: 9,
  },
  {
    breedId: 35,
    colorId: 10,
  },
  {
    breedId: 35,
    colorId: 11,
  },
  {
    breedId: 36,
    colorId: 1,
  },
  {
    breedId: 36,
    colorId: 3,
  },
  {
    breedId: 36,
    colorId: 5,
  },
  {
    breedId: 36,
    colorId: 7,
  },
  {
    breedId: 36,
    colorId: 8,
  },
  {
    breedId: 36,
    colorId: 9,
  },
  {
    breedId: 36,
    colorId: 10,
  },
  {
    breedId: 36,
    colorId: 11,
  },
  {
    breedId: 37,
    colorId: 1,
  },
  {
    breedId: 37,
    colorId: 3,
  },
  {
    breedId: 37,
    colorId: 5,
  },
  {
    breedId: 37,
    colorId: 7,
  },
  {
    breedId: 37,
    colorId: 8,
  },
  {
    breedId: 37,
    colorId: 9,
  },
  {
    breedId: 37,
    colorId: 10,
  },
  {
    breedId: 37,
    colorId: 11,
  },
  {
    breedId: 38,
    colorId: 1,
  },
  {
    breedId: 38,
    colorId: 3,
  },
  {
    breedId: 38,
    colorId: 5,
  },
  {
    breedId: 38,
    colorId: 7,
  },
  {
    breedId: 38,
    colorId: 8,
  },
  {
    breedId: 38,
    colorId: 9,
  },
  {
    breedId: 38,
    colorId: 10,
  },
  {
    breedId: 38,
    colorId: 11,
  },
  {
    breedId: 39,
    colorId: 1,
  },
  {
    breedId: 39,
    colorId: 3,
  },
  {
    breedId: 39,
    colorId: 5,
  },
  {
    breedId: 39,
    colorId: 7,
  },
  {
    breedId: 39,
    colorId: 8,
  },
  {
    breedId: 39,
    colorId: 9,
  },
  {
    breedId: 39,
    colorId: 10,
  },
  {
    breedId: 39,
    colorId: 11,
  },
  {
    breedId: 40,
    colorId: 1,
  },
  {
    breedId: 40,
    colorId: 3,
  },
  {
    breedId: 40,
    colorId: 5,
  },
  {
    breedId: 40,
    colorId: 7,
  },
  {
    breedId: 40,
    colorId: 8,
  },
  {
    breedId: 40,
    colorId: 9,
  },
  {
    breedId: 40,
    colorId: 10,
  },
  {
    breedId: 40,
    colorId: 11,
  },
  {
    breedId: 41,
    colorId: 1,
  },
  {
    breedId: 41,
    colorId: 3,
  },
  {
    breedId: 41,
    colorId: 5,
  },
  {
    breedId: 41,
    colorId: 7,
  },
  {
    breedId: 41,
    colorId: 8,
  },
  {
    breedId: 41,
    colorId: 9,
  },
  {
    breedId: 41,
    colorId: 10,
  },
  {
    breedId: 41,
    colorId: 11,
  },
  {
    breedId: 42,
    colorId: 1,
  },
  {
    breedId: 42,
    colorId: 3,
  },
  {
    breedId: 42,
    colorId: 5,
  },
  {
    breedId: 42,
    colorId: 7,
  },
  {
    breedId: 42,
    colorId: 8,
  },
  {
    breedId: 42,
    colorId: 9,
  },
  {
    breedId: 42,
    colorId: 10,
  },
  {
    breedId: 42,
    colorId: 11,
  },
  {
    breedId: 43,
    colorId: 12,
  },
  {
    breedId: 44,
    colorId: 4,
  },
  {
    breedId: 44,
    colorId: 5,
  },
  {
    breedId: 44,
    colorId: 7,
  },
  {
    breedId: 44,
    colorId: 8,
  },
  {
    breedId: 44,
    colorId: 9,
  },
  {
    breedId: 44,
    colorId: 10,
  },
  {
    breedId: 44,
    colorId: 11,
  },
  {
    breedId: 45,
    colorId: 4,
  },
  {
    breedId: 45,
    colorId: 5,
  },
  {
    breedId: 45,
    colorId: 7,
  },
  {
    breedId: 45,
    colorId: 8,
  },
  {
    breedId: 45,
    colorId: 9,
  },
  {
    breedId: 45,
    colorId: 10,
  },
  {
    breedId: 45,
    colorId: 11,
  },
  {
    breedId: 46,
    colorId: 4,
  },
  {
    breedId: 46,
    colorId: 5,
  },
  {
    breedId: 46,
    colorId: 7,
  },
  {
    breedId: 46,
    colorId: 8,
  },
  {
    breedId: 46,
    colorId: 9,
  },
  {
    breedId: 46,
    colorId: 10,
  },
  {
    breedId: 46,
    colorId: 11,
  },
  {
    breedId: 47,
    colorId: 4,
  },
  {
    breedId: 47,
    colorId: 5,
  },
  {
    breedId: 47,
    colorId: 7,
  },
  {
    breedId: 47,
    colorId: 8,
  },
  {
    breedId: 47,
    colorId: 9,
  },
  {
    breedId: 47,
    colorId: 10,
  },
  {
    breedId: 47,
    colorId: 11,
  },
  {
    breedId: 48,
    colorId: 12,
  },
  {
    breedId: 49,
    colorId: 1,
  },
  {
    breedId: 49,
    colorId: 2,
  },
  {
    breedId: 49,
    colorId: 3,
  },
  {
    breedId: 49,
    colorId: 4,
  },
  {
    breedId: 49,
    colorId: 5,
  },
  {
    breedId: 49,
    colorId: 6,
  },
  {
    breedId: 49,
    colorId: 7,
  },
  {
    breedId: 49,
    colorId: 8,
  },
  {
    breedId: 49,
    colorId: 9,
  },
  {
    breedId: 50,
    colorId: 1,
  },
  {
    breedId: 50,
    colorId: 3,
  },
  {
    breedId: 50,
    colorId: 5,
  },
  {
    breedId: 50,
    colorId: 7,
  },
  {
    breedId: 50,
    colorId: 8,
  },
  {
    breedId: 50,
    colorId: 9,
  },
  {
    breedId: 50,
    colorId: 10,
  },
  {
    breedId: 50,
    colorId: 11,
  },
  {
    breedId: 51,
    colorId: 1,
  },
  {
    breedId: 51,
    colorId: 3,
  },
  {
    breedId: 51,
    colorId: 5,
  },
  {
    breedId: 51,
    colorId: 7,
  },
  {
    breedId: 51,
    colorId: 8,
  },
  {
    breedId: 51,
    colorId: 9,
  },
  {
    breedId: 51,
    colorId: 10,
  },
  {
    breedId: 51,
    colorId: 11,
  },
  {
    breedId: 52,
    colorId: 1,
  },
  {
    breedId: 52,
    colorId: 3,
  },
  {
    breedId: 52,
    colorId: 5,
  },
  {
    breedId: 52,
    colorId: 7,
  },
  {
    breedId: 52,
    colorId: 8,
  },
  {
    breedId: 52,
    colorId: 9,
  },
  {
    breedId: 52,
    colorId: 10,
  },
  {
    breedId: 52,
    colorId: 11,
  },
  {
    breedId: 53,
    colorId: 0,
  },
  {
    breedId: 54,
    colorId: 4,
  },
  {
    breedId: 54,
    colorId: 5,
  },
  {
    breedId: 54,
    colorId: 7,
  },
  {
    breedId: 54,
    colorId: 8,
  },
  {
    breedId: 54,
    colorId: 9,
  },
  {
    breedId: 54,
    colorId: 10,
  },
  {
    breedId: 54,
    colorId: 11,
  },
  {
    breedId: 55,
    colorId: 4,
  },
  {
    breedId: 55,
    colorId: 5,
  },
  {
    breedId: 55,
    colorId: 7,
  },
  {
    breedId: 55,
    colorId: 8,
  },
  {
    breedId: 55,
    colorId: 9,
  },
  {
    breedId: 55,
    colorId: 10,
  },
  {
    breedId: 55,
    colorId: 11,
  },
  {
    breedId: 56,
    colorId: 1,
  },
  {
    breedId: 56,
    colorId: 2,
  },
  {
    breedId: 56,
    colorId: 3,
  },
  {
    breedId: 56,
    colorId: 5,
  },
  {
    breedId: 56,
    colorId: 7,
  },
  {
    breedId: 56,
    colorId: 8,
  },
  {
    breedId: 56,
    colorId: 9,
  },
  {
    breedId: 57,
    colorId: 4,
  },
  {
    breedId: 57,
    colorId: 5,
  },
  {
    breedId: 57,
    colorId: 7,
  },
  {
    breedId: 57,
    colorId: 8,
  },
  {
    breedId: 57,
    colorId: 9,
  },
  {
    breedId: 57,
    colorId: 10,
  },
  {
    breedId: 57,
    colorId: 11,
  },
  {
    breedId: 58,
    colorId: 1,
  },
  {
    breedId: 58,
    colorId: 3,
  },
  {
    breedId: 58,
    colorId: 7,
  },
  {
    breedId: 58,
    colorId: 8,
  },
  {
    breedId: 58,
    colorId: 9,
  },
  {
    breedId: 59,
    colorId: 1,
  },
  {
    breedId: 59,
    colorId: 2,
  },
  {
    breedId: 59,
    colorId: 3,
  },
  {
    breedId: 59,
    colorId: 4,
  },
  {
    breedId: 59,
    colorId: 5,
  },
  {
    breedId: 59,
    colorId: 7,
  },
  {
    breedId: 59,
    colorId: 8,
  },
  {
    breedId: 59,
    colorId: 9,
  },
  {
    breedId: 60,
    colorId: 1,
  },
  {
    breedId: 60,
    colorId: 2,
  },
  {
    breedId: 60,
    colorId: 3,
  },
  {
    breedId: 60,
    colorId: 4,
  },
  {
    breedId: 60,
    colorId: 5,
  },
  {
    breedId: 60,
    colorId: 7,
  },
  {
    breedId: 60,
    colorId: 8,
  },
  {
    breedId: 60,
    colorId: 9,
  },
  {
    breedId: 61,
    colorId: 4,
  },
  {
    breedId: 61,
    colorId: 5,
  },
  {
    breedId: 61,
    colorId: 7,
  },
  {
    breedId: 61,
    colorId: 8,
  },
  {
    breedId: 61,
    colorId: 9,
  },
  {
    breedId: 61,
    colorId: 10,
  },
  {
    breedId: 61,
    colorId: 11,
  },
  {
    breedId: 62,
    colorId: 1,
  },
  {
    breedId: 62,
    colorId: 2,
  },
  {
    breedId: 62,
    colorId: 3,
  },
  {
    breedId: 62,
    colorId: 5,
  },
  {
    breedId: 62,
    colorId: 7,
  },
  {
    breedId: 62,
    colorId: 8,
  },
  {
    breedId: 62,
    colorId: 9,
  },
  {
    breedId: 63,
    colorId: 1,
  },
  {
    breedId: 63,
    colorId: 2,
  },
  {
    breedId: 63,
    colorId: 3,
  },
  {
    breedId: 63,
    colorId: 4,
  },
  {
    breedId: 63,
    colorId: 5,
  },
  {
    breedId: 63,
    colorId: 7,
  },
  {
    breedId: 63,
    colorId: 8,
  },
  {
    breedId: 63,
    colorId: 9,
  },
  {
    breedId: 64,
    colorId: 1,
  },
  {
    breedId: 64,
    colorId: 2,
  },
  {
    breedId: 64,
    colorId: 3,
  },
  {
    breedId: 64,
    colorId: 5,
  },
  {
    breedId: 64,
    colorId: 7,
  },
  {
    breedId: 64,
    colorId: 8,
  },
  {
    breedId: 64,
    colorId: 9,
  },
  {
    breedId: 65,
    colorId: 1,
  },
  {
    breedId: 65,
    colorId: 2,
  },
  {
    breedId: 65,
    colorId: 3,
  },
  {
    breedId: 65,
    colorId: 4,
  },
  {
    breedId: 65,
    colorId: 5,
  },
  {
    breedId: 65,
    colorId: 6,
  },
  {
    breedId: 65,
    colorId: 7,
  },
  {
    breedId: 65,
    colorId: 8,
  },
  {
    breedId: 65,
    colorId: 9,
  },
  {
    breedId: 66,
    colorId: 1,
  },
  {
    breedId: 66,
    colorId: 2,
  },
  {
    breedId: 66,
    colorId: 3,
  },
  {
    breedId: 66,
    colorId: 4,
  },
  {
    breedId: 66,
    colorId: 5,
  },
  {
    breedId: 66,
    colorId: 7,
  },
  {
    breedId: 66,
    colorId: 8,
  },
  {
    breedId: 66,
    colorId: 9,
  },
  {
    breedId: 67,
    colorId: 1,
  },
  {
    breedId: 67,
    colorId: 3,
  },
  {
    breedId: 67,
    colorId: 7,
  },
  {
    breedId: 67,
    colorId: 8,
  },
  {
    breedId: 67,
    colorId: 9,
  },
  {
    breedId: 68,
    colorId: 1,
  },
  {
    breedId: 68,
    colorId: 2,
  },
  {
    breedId: 68,
    colorId: 3,
  },
  {
    breedId: 68,
    colorId: 4,
  },
  {
    breedId: 68,
    colorId: 5,
  },
  {
    breedId: 68,
    colorId: 7,
  },
  {
    breedId: 68,
    colorId: 8,
  },
  {
    breedId: 68,
    colorId: 9,
  },
  {
    breedId: 69,
    colorId: 12,
  },
  {
    breedId: 70,
    colorId: 12,
  },
  {
    breedId: 71,
    colorId: 12,
  },
  {
    breedId: 72,
    colorId: 12,
  },
  {
    breedId: 73,
    colorId: 1,
  },
  {
    breedId: 73,
    colorId: 2,
  },
  {
    breedId: 73,
    colorId: 3,
  },
  {
    breedId: 73,
    colorId: 4,
  },
  {
    breedId: 73,
    colorId: 5,
  },
  {
    breedId: 73,
    colorId: 6,
  },
  {
    breedId: 73,
    colorId: 7,
  },
  {
    breedId: 73,
    colorId: 8,
  },
  {
    breedId: 73,
    colorId: 9,
  },
  {
    breedId: 73,
    colorId: 10,
  },
  {
    breedId: 74,
    colorId: 12,
  },
  {
    breedId: 75,
    colorId: 12,
  },
  {
    breedId: 76,
    colorId: 12,
  },
  {
    breedId: 77,
    colorId: 12,
  },
  {
    breedId: 78,
    colorId: 12,
  },
  {
    breedId: 79,
    colorId: 12,
  },
  {
    breedId: 80,
    colorId: 12,
  },
  {
    breedId: 81,
    colorId: 12,
  },
  {
    breedId: 82,
    colorId: 12,
  },
  {
    breedId: 83,
    colorId: 12,
  },
  {
    breedId: 84,
    colorId: 12,
  },
  {
    breedId: 85,
    colorId: 12,
  },
  {
    breedId: 86,
    colorId: 12,
  },
  {
    breedId: 87,
    colorId: 12,
  },
  {
    breedId: 88,
    colorId: 12,
  },
  {
    breedId: 89,
    colorId: 12,
  },
  {
    breedId: 90,
    colorId: 1,
  },
  {
    breedId: 90,
    colorId: 2,
  },
  {
    breedId: 90,
    colorId: 3,
  },
  {
    breedId: 90,
    colorId: 4,
  },
  {
    breedId: 90,
    colorId: 5,
  },
  {
    breedId: 90,
    colorId: 6,
  },
  {
    breedId: 90,
    colorId: 7,
  },
  {
    breedId: 90,
    colorId: 8,
  },
  {
    breedId: 90,
    colorId: 9,
  },
  {
    breedId: 90,
    colorId: 10,
  },
  {
    breedId: 91,
    colorId: 1,
  },
  {
    breedId: 91,
    colorId: 2,
  },
  {
    breedId: 91,
    colorId: 3,
  },
  {
    breedId: 91,
    colorId: 4,
  },
  {
    breedId: 91,
    colorId: 5,
  },
  {
    breedId: 91,
    colorId: 6,
  },
  {
    breedId: 91,
    colorId: 7,
  },
  {
    breedId: 91,
    colorId: 8,
  },
  {
    breedId: 91,
    colorId: 9,
  },
  {
    breedId: 91,
    colorId: 10,
  },
  {
    breedId: 92,
    colorId: 1,
  },
  {
    breedId: 92,
    colorId: 2,
  },
  {
    breedId: 92,
    colorId: 3,
  },
  {
    breedId: 92,
    colorId: 4,
  },
  {
    breedId: 92,
    colorId: 5,
  },
  {
    breedId: 92,
    colorId: 6,
  },
  {
    breedId: 92,
    colorId: 7,
  },
  {
    breedId: 92,
    colorId: 8,
  },
  {
    breedId: 92,
    colorId: 9,
  },
  {
    breedId: 92,
    colorId: 10,
  },
  {
    breedId: 93,
    colorId: 1,
  },
  {
    breedId: 93,
    colorId: 2,
  },
  {
    breedId: 93,
    colorId: 3,
  },
  {
    breedId: 93,
    colorId: 4,
  },
  {
    breedId: 93,
    colorId: 5,
  },
  {
    breedId: 93,
    colorId: 6,
  },
  {
    breedId: 93,
    colorId: 7,
  },
  {
    breedId: 93,
    colorId: 8,
  },
  {
    breedId: 93,
    colorId: 9,
  },
  {
    breedId: 93,
    colorId: 10,
  },
  {
    breedId: 94,
    colorId: 1,
  },
  {
    breedId: 94,
    colorId: 2,
  },
  {
    breedId: 94,
    colorId: 3,
  },
  {
    breedId: 94,
    colorId: 4,
  },
  {
    breedId: 94,
    colorId: 5,
  },
  {
    breedId: 94,
    colorId: 6,
  },
  {
    breedId: 94,
    colorId: 7,
  },
  {
    breedId: 94,
    colorId: 8,
  },
  {
    breedId: 94,
    colorId: 9,
  },
  {
    breedId: 94,
    colorId: 10,
  },
  {
    breedId: 95,
    colorId: 1,
  },
  {
    breedId: 95,
    colorId: 2,
  },
  {
    breedId: 95,
    colorId: 3,
  },
  {
    breedId: 95,
    colorId: 4,
  },
  {
    breedId: 95,
    colorId: 5,
  },
  {
    breedId: 95,
    colorId: 6,
  },
  {
    breedId: 95,
    colorId: 7,
  },
  {
    breedId: 95,
    colorId: 8,
  },
  {
    breedId: 95,
    colorId: 9,
  },
  {
    breedId: 95,
    colorId: 10,
  },
  {
    breedId: 96,
    colorId: 1,
  },
  {
    breedId: 96,
    colorId: 2,
  },
  {
    breedId: 96,
    colorId: 3,
  },
  {
    breedId: 96,
    colorId: 4,
  },
  {
    breedId: 96,
    colorId: 5,
  },
  {
    breedId: 96,
    colorId: 6,
  },
  {
    breedId: 96,
    colorId: 7,
  },
  {
    breedId: 96,
    colorId: 8,
  },
  {
    breedId: 96,
    colorId: 9,
  },
  {
    breedId: 96,
    colorId: 10,
  },
  {
    breedId: 97,
    colorId: 1,
  },
  {
    breedId: 97,
    colorId: 2,
  },
  {
    breedId: 97,
    colorId: 3,
  },
  {
    breedId: 97,
    colorId: 4,
  },
  {
    breedId: 97,
    colorId: 5,
  },
  {
    breedId: 97,
    colorId: 6,
  },
  {
    breedId: 97,
    colorId: 7,
  },
  {
    breedId: 97,
    colorId: 8,
  },
  {
    breedId: 97,
    colorId: 9,
  },
  {
    breedId: 97,
    colorId: 10,
  },
  {
    breedId: 98,
    colorId: 1,
  },
  {
    breedId: 98,
    colorId: 2,
  },
  {
    breedId: 98,
    colorId: 3,
  },
  {
    breedId: 98,
    colorId: 4,
  },
  {
    breedId: 98,
    colorId: 5,
  },
  {
    breedId: 98,
    colorId: 6,
  },
  {
    breedId: 98,
    colorId: 7,
  },
  {
    breedId: 98,
    colorId: 8,
  },
  {
    breedId: 98,
    colorId: 9,
  },
  {
    breedId: 98,
    colorId: 10,
  },
  {
    breedId: 99,
    colorId: 1,
  },
  {
    breedId: 99,
    colorId: 2,
  },
  {
    breedId: 99,
    colorId: 3,
  },
  {
    breedId: 99,
    colorId: 4,
  },
  {
    breedId: 99,
    colorId: 5,
  },
  {
    breedId: 99,
    colorId: 6,
  },
  {
    breedId: 99,
    colorId: 7,
  },
  {
    breedId: 99,
    colorId: 8,
  },
  {
    breedId: 99,
    colorId: 9,
  },
  {
    breedId: 99,
    colorId: 10,
  },
  {
    breedId: 100,
    colorId: 1,
  },
  {
    breedId: 100,
    colorId: 2,
  },
  {
    breedId: 100,
    colorId: 3,
  },
  {
    breedId: 100,
    colorId: 4,
  },
  {
    breedId: 100,
    colorId: 5,
  },
  {
    breedId: 100,
    colorId: 6,
  },
  {
    breedId: 100,
    colorId: 7,
  },
  {
    breedId: 100,
    colorId: 8,
  },
  {
    breedId: 100,
    colorId: 9,
  },
  {
    breedId: 100,
    colorId: 10,
  },
  {
    breedId: 101,
    colorId: 12,
  },
  {
    breedId: 102,
    colorId: 12,
  },
  {
    breedId: 103,
    colorId: 1,
  },
  {
    breedId: 103,
    colorId: 2,
  },
  {
    breedId: 103,
    colorId: 3,
  },
  {
    breedId: 103,
    colorId: 4,
  },
  {
    breedId: 103,
    colorId: 5,
  },
  {
    breedId: 103,
    colorId: 6,
  },
  {
    breedId: 103,
    colorId: 7,
  },
  {
    breedId: 103,
    colorId: 8,
  },
  {
    breedId: 103,
    colorId: 9,
  },
  {
    breedId: 103,
    colorId: 10,
  },
  {
    breedId: 104,
    colorId: 12,
  },
  {
    breedId: 105,
    colorId: 12,
  },
  {
    breedId: 106,
    colorId: 12,
  },
  {
    breedId: 107,
    colorId: 12,
  },
  {
    breedId: 108,
    colorId: 12,
  },
  {
    breedId: 109,
    colorId: 12,
  },
  {
    breedId: 110,
    colorId: 1,
  },
  {
    breedId: 110,
    colorId: 2,
  },
  {
    breedId: 110,
    colorId: 3,
  },
  {
    breedId: 110,
    colorId: 4,
  },
  {
    breedId: 110,
    colorId: 5,
  },
  {
    breedId: 110,
    colorId: 6,
  },
  {
    breedId: 110,
    colorId: 7,
  },
  {
    breedId: 110,
    colorId: 8,
  },
  {
    breedId: 110,
    colorId: 9,
  },
  {
    breedId: 110,
    colorId: 10,
  },
  {
    breedId: 111,
    colorId: 1,
  },
  {
    breedId: 111,
    colorId: 2,
  },
  {
    breedId: 111,
    colorId: 3,
  },
  {
    breedId: 111,
    colorId: 4,
  },
  {
    breedId: 111,
    colorId: 5,
  },
  {
    breedId: 111,
    colorId: 6,
  },
  {
    breedId: 111,
    colorId: 7,
  },
  {
    breedId: 111,
    colorId: 8,
  },
  {
    breedId: 111,
    colorId: 9,
  },
  {
    breedId: 111,
    colorId: 10,
  },
  {
    breedId: 112,
    colorId: 1,
  },
  {
    breedId: 112,
    colorId: 2,
  },
  {
    breedId: 112,
    colorId: 3,
  },
  {
    breedId: 112,
    colorId: 4,
  },
  {
    breedId: 112,
    colorId: 5,
  },
  {
    breedId: 112,
    colorId: 6,
  },
  {
    breedId: 112,
    colorId: 7,
  },
  {
    breedId: 112,
    colorId: 8,
  },
  {
    breedId: 112,
    colorId: 9,
  },
  {
    breedId: 112,
    colorId: 10,
  },
  {
    breedId: 113,
    colorId: 1,
  },
  {
    breedId: 113,
    colorId: 2,
  },
  {
    breedId: 113,
    colorId: 3,
  },
  {
    breedId: 113,
    colorId: 4,
  },
  {
    breedId: 113,
    colorId: 5,
  },
  {
    breedId: 113,
    colorId: 6,
  },
  {
    breedId: 113,
    colorId: 7,
  },
  {
    breedId: 113,
    colorId: 8,
  },
  {
    breedId: 113,
    colorId: 9,
  },
  {
    breedId: 113,
    colorId: 10,
  },
  {
    breedId: 114,
    colorId: 1,
  },
  {
    breedId: 114,
    colorId: 2,
  },
  {
    breedId: 114,
    colorId: 3,
  },
  {
    breedId: 114,
    colorId: 4,
  },
  {
    breedId: 114,
    colorId: 5,
  },
  {
    breedId: 114,
    colorId: 6,
  },
  {
    breedId: 114,
    colorId: 7,
  },
  {
    breedId: 114,
    colorId: 8,
  },
  {
    breedId: 114,
    colorId: 9,
  },
  {
    breedId: 114,
    colorId: 10,
  },
  {
    breedId: 115,
    colorId: 1,
  },
  {
    breedId: 115,
    colorId: 2,
  },
  {
    breedId: 115,
    colorId: 3,
  },
  {
    breedId: 115,
    colorId: 4,
  },
  {
    breedId: 115,
    colorId: 5,
  },
  {
    breedId: 115,
    colorId: 6,
  },
  {
    breedId: 115,
    colorId: 7,
  },
  {
    breedId: 115,
    colorId: 8,
  },
  {
    breedId: 115,
    colorId: 9,
  },
  {
    breedId: 115,
    colorId: 10,
  },
  {
    breedId: 116,
    colorId: 1,
  },
  {
    breedId: 116,
    colorId: 2,
  },
  {
    breedId: 116,
    colorId: 3,
  },
  {
    breedId: 116,
    colorId: 4,
  },
  {
    breedId: 116,
    colorId: 5,
  },
  {
    breedId: 116,
    colorId: 6,
  },
  {
    breedId: 116,
    colorId: 7,
  },
  {
    breedId: 116,
    colorId: 8,
  },
  {
    breedId: 116,
    colorId: 9,
  },
  {
    breedId: 116,
    colorId: 10,
  },
  {
    breedId: 117,
    colorId: 1,
  },
  {
    breedId: 117,
    colorId: 2,
  },
  {
    breedId: 117,
    colorId: 3,
  },
  {
    breedId: 117,
    colorId: 4,
  },
  {
    breedId: 117,
    colorId: 5,
  },
  {
    breedId: 117,
    colorId: 6,
  },
  {
    breedId: 117,
    colorId: 7,
  },
  {
    breedId: 117,
    colorId: 8,
  },
  {
    breedId: 117,
    colorId: 9,
  },
  {
    breedId: 117,
    colorId: 10,
  },
  {
    breedId: 118,
    colorId: 1,
  },
  {
    breedId: 118,
    colorId: 2,
  },
  {
    breedId: 118,
    colorId: 3,
  },
  {
    breedId: 118,
    colorId: 4,
  },
  {
    breedId: 118,
    colorId: 5,
  },
  {
    breedId: 118,
    colorId: 6,
  },
  {
    breedId: 118,
    colorId: 7,
  },
  {
    breedId: 118,
    colorId: 8,
  },
  {
    breedId: 118,
    colorId: 9,
  },
  {
    breedId: 118,
    colorId: 10,
  },
  {
    breedId: 119,
    colorId: 1,
  },
  {
    breedId: 119,
    colorId: 2,
  },
  {
    breedId: 119,
    colorId: 3,
  },
  {
    breedId: 119,
    colorId: 4,
  },
  {
    breedId: 119,
    colorId: 5,
  },
  {
    breedId: 119,
    colorId: 6,
  },
  {
    breedId: 119,
    colorId: 7,
  },
  {
    breedId: 119,
    colorId: 8,
  },
  {
    breedId: 119,
    colorId: 9,
  },
  {
    breedId: 119,
    colorId: 10,
  },
  {
    breedId: 120,
    colorId: 1,
  },
  {
    breedId: 120,
    colorId: 2,
  },
  {
    breedId: 120,
    colorId: 3,
  },
  {
    breedId: 120,
    colorId: 4,
  },
  {
    breedId: 120,
    colorId: 5,
  },
  {
    breedId: 120,
    colorId: 6,
  },
  {
    breedId: 120,
    colorId: 7,
  },
  {
    breedId: 120,
    colorId: 8,
  },
  {
    breedId: 120,
    colorId: 9,
  },
  {
    breedId: 120,
    colorId: 10,
  },
  {
    breedId: 121,
    colorId: 1,
  },
  {
    breedId: 121,
    colorId: 2,
  },
  {
    breedId: 121,
    colorId: 3,
  },
  {
    breedId: 121,
    colorId: 4,
  },
  {
    breedId: 121,
    colorId: 5,
  },
  {
    breedId: 121,
    colorId: 6,
  },
  {
    breedId: 121,
    colorId: 7,
  },
  {
    breedId: 121,
    colorId: 8,
  },
  {
    breedId: 121,
    colorId: 9,
  },
  {
    breedId: 121,
    colorId: 10,
  },
  {
    breedId: 122,
    colorId: 1,
  },
  {
    breedId: 122,
    colorId: 2,
  },
  {
    breedId: 122,
    colorId: 3,
  },
  {
    breedId: 122,
    colorId: 4,
  },
  {
    breedId: 122,
    colorId: 5,
  },
  {
    breedId: 122,
    colorId: 6,
  },
  {
    breedId: 122,
    colorId: 7,
  },
  {
    breedId: 122,
    colorId: 8,
  },
  {
    breedId: 122,
    colorId: 9,
  },
  {
    breedId: 122,
    colorId: 10,
  },
  {
    breedId: 123,
    colorId: 1,
  },
  {
    breedId: 123,
    colorId: 2,
  },
  {
    breedId: 123,
    colorId: 3,
  },
  {
    breedId: 123,
    colorId: 4,
  },
  {
    breedId: 123,
    colorId: 5,
  },
  {
    breedId: 123,
    colorId: 6,
  },
  {
    breedId: 123,
    colorId: 7,
  },
  {
    breedId: 123,
    colorId: 8,
  },
  {
    breedId: 123,
    colorId: 9,
  },
  {
    breedId: 123,
    colorId: 10,
  },
  {
    breedId: 124,
    colorId: 1,
  },
  {
    breedId: 124,
    colorId: 2,
  },
  {
    breedId: 124,
    colorId: 3,
  },
  {
    breedId: 124,
    colorId: 4,
  },
  {
    breedId: 124,
    colorId: 5,
  },
  {
    breedId: 124,
    colorId: 6,
  },
  {
    breedId: 124,
    colorId: 7,
  },
  {
    breedId: 124,
    colorId: 8,
  },
  {
    breedId: 124,
    colorId: 9,
  },
  {
    breedId: 124,
    colorId: 10,
  },
  {
    breedId: 125,
    colorId: 1,
  },
  {
    breedId: 125,
    colorId: 2,
  },
  {
    breedId: 125,
    colorId: 3,
  },
  {
    breedId: 125,
    colorId: 4,
  },
  {
    breedId: 125,
    colorId: 5,
  },
  {
    breedId: 125,
    colorId: 6,
  },
  {
    breedId: 125,
    colorId: 7,
  },
  {
    breedId: 125,
    colorId: 8,
  },
  {
    breedId: 125,
    colorId: 9,
  },
  {
    breedId: 125,
    colorId: 10,
  },
  {
    breedId: 126,
    colorId: 1,
  },
  {
    breedId: 126,
    colorId: 2,
  },
  {
    breedId: 126,
    colorId: 3,
  },
  {
    breedId: 126,
    colorId: 4,
  },
  {
    breedId: 126,
    colorId: 5,
  },
  {
    breedId: 126,
    colorId: 6,
  },
  {
    breedId: 126,
    colorId: 7,
  },
  {
    breedId: 126,
    colorId: 8,
  },
  {
    breedId: 126,
    colorId: 9,
  },
  {
    breedId: 126,
    colorId: 10,
  },
  {
    breedId: 127,
    colorId: 1,
  },
  {
    breedId: 127,
    colorId: 2,
  },
  {
    breedId: 127,
    colorId: 3,
  },
  {
    breedId: 127,
    colorId: 4,
  },
  {
    breedId: 127,
    colorId: 5,
  },
  {
    breedId: 127,
    colorId: 6,
  },
  {
    breedId: 127,
    colorId: 7,
  },
  {
    breedId: 127,
    colorId: 8,
  },
  {
    breedId: 127,
    colorId: 9,
  },
  {
    breedId: 127,
    colorId: 10,
  },
  {
    breedId: 128,
    colorId: 1,
  },
  {
    breedId: 128,
    colorId: 2,
  },
  {
    breedId: 128,
    colorId: 3,
  },
  {
    breedId: 128,
    colorId: 4,
  },
  {
    breedId: 128,
    colorId: 5,
  },
  {
    breedId: 128,
    colorId: 6,
  },
  {
    breedId: 128,
    colorId: 7,
  },
  {
    breedId: 128,
    colorId: 8,
  },
  {
    breedId: 128,
    colorId: 9,
  },
  {
    breedId: 128,
    colorId: 10,
  },
  {
    breedId: 129,
    colorId: 1,
  },
  {
    breedId: 129,
    colorId: 2,
  },
  {
    breedId: 129,
    colorId: 3,
  },
  {
    breedId: 129,
    colorId: 4,
  },
  {
    breedId: 129,
    colorId: 5,
  },
  {
    breedId: 129,
    colorId: 6,
  },
  {
    breedId: 129,
    colorId: 7,
  },
  {
    breedId: 129,
    colorId: 8,
  },
  {
    breedId: 129,
    colorId: 9,
  },
  {
    breedId: 129,
    colorId: 10,
  },
  {
    breedId: 130,
    colorId: 1,
  },
  {
    breedId: 130,
    colorId: 2,
  },
  {
    breedId: 130,
    colorId: 3,
  },
  {
    breedId: 130,
    colorId: 4,
  },
  {
    breedId: 130,
    colorId: 5,
  },
  {
    breedId: 130,
    colorId: 6,
  },
  {
    breedId: 130,
    colorId: 7,
  },
  {
    breedId: 130,
    colorId: 8,
  },
  {
    breedId: 130,
    colorId: 9,
  },
  {
    breedId: 130,
    colorId: 10,
  },
  {
    breedId: 131,
    colorId: 1,
  },
  {
    breedId: 131,
    colorId: 2,
  },
  {
    breedId: 131,
    colorId: 3,
  },
  {
    breedId: 131,
    colorId: 4,
  },
  {
    breedId: 131,
    colorId: 5,
  },
  {
    breedId: 131,
    colorId: 6,
  },
  {
    breedId: 131,
    colorId: 7,
  },
  {
    breedId: 131,
    colorId: 8,
  },
  {
    breedId: 131,
    colorId: 9,
  },
  {
    breedId: 131,
    colorId: 10,
  },
  {
    breedId: 132,
    colorId: 1,
  },
  {
    breedId: 132,
    colorId: 2,
  },
  {
    breedId: 132,
    colorId: 3,
  },
  {
    breedId: 132,
    colorId: 4,
  },
  {
    breedId: 132,
    colorId: 5,
  },
  {
    breedId: 132,
    colorId: 6,
  },
  {
    breedId: 132,
    colorId: 7,
  },
  {
    breedId: 132,
    colorId: 8,
  },
  {
    breedId: 132,
    colorId: 9,
  },
  {
    breedId: 132,
    colorId: 10,
  },
  {
    breedId: 133,
    colorId: 1,
  },
  {
    breedId: 133,
    colorId: 2,
  },
  {
    breedId: 133,
    colorId: 3,
  },
  {
    breedId: 133,
    colorId: 4,
  },
  {
    breedId: 133,
    colorId: 5,
  },
  {
    breedId: 133,
    colorId: 6,
  },
  {
    breedId: 133,
    colorId: 7,
  },
  {
    breedId: 133,
    colorId: 8,
  },
  {
    breedId: 133,
    colorId: 9,
  },
  {
    breedId: 133,
    colorId: 10,
  },
  {
    breedId: 134,
    colorId: 1,
  },
  {
    breedId: 134,
    colorId: 2,
  },
  {
    breedId: 134,
    colorId: 3,
  },
  {
    breedId: 134,
    colorId: 4,
  },
  {
    breedId: 134,
    colorId: 5,
  },
  {
    breedId: 134,
    colorId: 6,
  },
  {
    breedId: 134,
    colorId: 7,
  },
  {
    breedId: 134,
    colorId: 8,
  },
  {
    breedId: 134,
    colorId: 9,
  },
  {
    breedId: 134,
    colorId: 10,
  },
  {
    breedId: 135,
    colorId: 1,
  },
  {
    breedId: 135,
    colorId: 2,
  },
  {
    breedId: 135,
    colorId: 3,
  },
  {
    breedId: 135,
    colorId: 4,
  },
  {
    breedId: 135,
    colorId: 5,
  },
  {
    breedId: 135,
    colorId: 6,
  },
  {
    breedId: 135,
    colorId: 7,
  },
  {
    breedId: 135,
    colorId: 8,
  },
  {
    breedId: 135,
    colorId: 9,
  },
  {
    breedId: 135,
    colorId: 10,
  },
  {
    breedId: 136,
    colorId: 1,
  },
  {
    breedId: 136,
    colorId: 2,
  },
  {
    breedId: 136,
    colorId: 3,
  },
  {
    breedId: 136,
    colorId: 4,
  },
  {
    breedId: 136,
    colorId: 5,
  },
  {
    breedId: 136,
    colorId: 6,
  },
  {
    breedId: 136,
    colorId: 7,
  },
  {
    breedId: 136,
    colorId: 8,
  },
  {
    breedId: 136,
    colorId: 9,
  },
  {
    breedId: 136,
    colorId: 10,
  },
  {
    breedId: 137,
    colorId: 1,
  },
  {
    breedId: 137,
    colorId: 2,
  },
  {
    breedId: 137,
    colorId: 3,
  },
  {
    breedId: 137,
    colorId: 4,
  },
  {
    breedId: 137,
    colorId: 5,
  },
  {
    breedId: 137,
    colorId: 6,
  },
  {
    breedId: 137,
    colorId: 7,
  },
  {
    breedId: 137,
    colorId: 8,
  },
  {
    breedId: 137,
    colorId: 9,
  },
  {
    breedId: 137,
    colorId: 10,
  },
  {
    breedId: 138,
    colorId: 12,
  },
  {
    breedId: 139,
    colorId: 1,
  },
  {
    breedId: 139,
    colorId: 2,
  },
  {
    breedId: 139,
    colorId: 3,
  },
  {
    breedId: 139,
    colorId: 4,
  },
  {
    breedId: 139,
    colorId: 5,
  },
  {
    breedId: 139,
    colorId: 6,
  },
  {
    breedId: 139,
    colorId: 7,
  },
  {
    breedId: 139,
    colorId: 8,
  },
  {
    breedId: 139,
    colorId: 9,
  },
  {
    breedId: 139,
    colorId: 10,
  },
  {
    breedId: 140,
    colorId: 1,
  },
  {
    breedId: 140,
    colorId: 2,
  },
  {
    breedId: 140,
    colorId: 3,
  },
  {
    breedId: 140,
    colorId: 4,
  },
  {
    breedId: 140,
    colorId: 5,
  },
  {
    breedId: 140,
    colorId: 6,
  },
  {
    breedId: 140,
    colorId: 7,
  },
  {
    breedId: 140,
    colorId: 8,
  },
  {
    breedId: 140,
    colorId: 9,
  },
  {
    breedId: 140,
    colorId: 10,
  },
  {
    breedId: 141,
    colorId: 1,
  },
  {
    breedId: 141,
    colorId: 2,
  },
  {
    breedId: 141,
    colorId: 3,
  },
  {
    breedId: 141,
    colorId: 4,
  },
  {
    breedId: 141,
    colorId: 5,
  },
  {
    breedId: 141,
    colorId: 6,
  },
  {
    breedId: 141,
    colorId: 7,
  },
  {
    breedId: 141,
    colorId: 8,
  },
  {
    breedId: 141,
    colorId: 9,
  },
  {
    breedId: 141,
    colorId: 10,
  },
  {
    breedId: 142,
    colorId: 1,
  },
  {
    breedId: 142,
    colorId: 2,
  },
  {
    breedId: 142,
    colorId: 3,
  },
  {
    breedId: 142,
    colorId: 4,
  },
  {
    breedId: 142,
    colorId: 5,
  },
  {
    breedId: 142,
    colorId: 6,
  },
  {
    breedId: 142,
    colorId: 7,
  },
  {
    breedId: 142,
    colorId: 8,
  },
  {
    breedId: 142,
    colorId: 9,
  },
  {
    breedId: 142,
    colorId: 10,
  },
  {
    breedId: 143,
    colorId: 4,
  },
  {
    breedId: 143,
    colorId: 5,
  },
  {
    breedId: 143,
    colorId: 7,
  },
  {
    breedId: 143,
    colorId: 8,
  },
  {
    breedId: 143,
    colorId: 9,
  },
  {
    breedId: 143,
    colorId: 10,
  },
  {
    breedId: 143,
    colorId: 11,
  },
  {
    breedId: 144,
    colorId: 1,
  },
  {
    breedId: 144,
    colorId: 2,
  },
  {
    breedId: 144,
    colorId: 3,
  },
  {
    breedId: 144,
    colorId: 4,
  },
  {
    breedId: 144,
    colorId: 5,
  },
  {
    breedId: 144,
    colorId: 6,
  },
  {
    breedId: 144,
    colorId: 7,
  },
  {
    breedId: 144,
    colorId: 8,
  },
  {
    breedId: 144,
    colorId: 9,
  },
  {
    breedId: 144,
    colorId: 10,
  },
  {
    breedId: 145,
    colorId: 12,
  },
  {
    breedId: 146,
    colorId: 12,
  },
  {
    breedId: 147,
    colorId: 1,
  },
  {
    breedId: 147,
    colorId: 2,
  },
  {
    breedId: 147,
    colorId: 3,
  },
  {
    breedId: 147,
    colorId: 4,
  },
  {
    breedId: 147,
    colorId: 5,
  },
  {
    breedId: 147,
    colorId: 6,
  },
  {
    breedId: 147,
    colorId: 7,
  },
  {
    breedId: 147,
    colorId: 8,
  },
  {
    breedId: 147,
    colorId: 9,
  },
  {
    breedId: 147,
    colorId: 10,
  },
  {
    breedId: 148,
    colorId: 1,
  },
  {
    breedId: 148,
    colorId: 2,
  },
  {
    breedId: 148,
    colorId: 3,
  },
  {
    breedId: 148,
    colorId: 4,
  },
  {
    breedId: 148,
    colorId: 5,
  },
  {
    breedId: 148,
    colorId: 6,
  },
  {
    breedId: 148,
    colorId: 7,
  },
  {
    breedId: 148,
    colorId: 8,
  },
  {
    breedId: 148,
    colorId: 9,
  },
  {
    breedId: 148,
    colorId: 10,
  },
  {
    breedId: 149,
    colorId: 1,
  },
  {
    breedId: 149,
    colorId: 2,
  },
  {
    breedId: 149,
    colorId: 3,
  },
  {
    breedId: 149,
    colorId: 4,
  },
  {
    breedId: 149,
    colorId: 5,
  },
  {
    breedId: 149,
    colorId: 6,
  },
  {
    breedId: 149,
    colorId: 7,
  },
  {
    breedId: 149,
    colorId: 8,
  },
  {
    breedId: 149,
    colorId: 9,
  },
  {
    breedId: 149,
    colorId: 10,
  },
  {
    breedId: 150,
    colorId: 1,
  },
  {
    breedId: 150,
    colorId: 2,
  },
  {
    breedId: 150,
    colorId: 3,
  },
  {
    breedId: 150,
    colorId: 4,
  },
  {
    breedId: 150,
    colorId: 5,
  },
  {
    breedId: 150,
    colorId: 6,
  },
  {
    breedId: 150,
    colorId: 7,
  },
  {
    breedId: 150,
    colorId: 8,
  },
  {
    breedId: 150,
    colorId: 9,
  },
  {
    breedId: 150,
    colorId: 10,
  },
  {
    breedId: 151,
    colorId: 1,
  },
  {
    breedId: 151,
    colorId: 2,
  },
  {
    breedId: 151,
    colorId: 3,
  },
  {
    breedId: 151,
    colorId: 4,
  },
  {
    breedId: 151,
    colorId: 5,
  },
  {
    breedId: 151,
    colorId: 6,
  },
  {
    breedId: 151,
    colorId: 7,
  },
  {
    breedId: 151,
    colorId: 8,
  },
  {
    breedId: 151,
    colorId: 9,
  },
  {
    breedId: 151,
    colorId: 10,
  },
  {
    breedId: 152,
    colorId: 1,
  },
  {
    breedId: 152,
    colorId: 2,
  },
  {
    breedId: 152,
    colorId: 3,
  },
  {
    breedId: 152,
    colorId: 4,
  },
  {
    breedId: 152,
    colorId: 5,
  },
  {
    breedId: 152,
    colorId: 6,
  },
  {
    breedId: 152,
    colorId: 7,
  },
  {
    breedId: 152,
    colorId: 8,
  },
  {
    breedId: 152,
    colorId: 9,
  },
  {
    breedId: 152,
    colorId: 10,
  },
  {
    breedId: 153,
    colorId: 1,
  },
  {
    breedId: 153,
    colorId: 2,
  },
  {
    breedId: 153,
    colorId: 3,
  },
  {
    breedId: 153,
    colorId: 4,
  },
  {
    breedId: 153,
    colorId: 5,
  },
  {
    breedId: 153,
    colorId: 6,
  },
  {
    breedId: 153,
    colorId: 7,
  },
  {
    breedId: 153,
    colorId: 8,
  },
  {
    breedId: 153,
    colorId: 9,
  },
  {
    breedId: 153,
    colorId: 10,
  },
  {
    breedId: 154,
    colorId: 1,
  },
  {
    breedId: 154,
    colorId: 2,
  },
  {
    breedId: 154,
    colorId: 3,
  },
  {
    breedId: 154,
    colorId: 4,
  },
  {
    breedId: 154,
    colorId: 5,
  },
  {
    breedId: 154,
    colorId: 6,
  },
  {
    breedId: 154,
    colorId: 7,
  },
  {
    breedId: 154,
    colorId: 8,
  },
  {
    breedId: 154,
    colorId: 9,
  },
  {
    breedId: 154,
    colorId: 10,
  },
  {
    breedId: 155,
    colorId: 1,
  },
  {
    breedId: 155,
    colorId: 2,
  },
  {
    breedId: 155,
    colorId: 3,
  },
  {
    breedId: 155,
    colorId: 4,
  },
  {
    breedId: 155,
    colorId: 5,
  },
  {
    breedId: 155,
    colorId: 6,
  },
  {
    breedId: 155,
    colorId: 7,
  },
  {
    breedId: 155,
    colorId: 8,
  },
  {
    breedId: 155,
    colorId: 9,
  },
  {
    breedId: 155,
    colorId: 10,
  },
  {
    breedId: 156,
    colorId: 1,
  },
  {
    breedId: 156,
    colorId: 2,
  },
  {
    breedId: 156,
    colorId: 3,
  },
  {
    breedId: 156,
    colorId: 4,
  },
  {
    breedId: 156,
    colorId: 5,
  },
  {
    breedId: 156,
    colorId: 6,
  },
  {
    breedId: 156,
    colorId: 7,
  },
  {
    breedId: 156,
    colorId: 8,
  },
  {
    breedId: 156,
    colorId: 9,
  },
  {
    breedId: 156,
    colorId: 10,
  },
  {
    breedId: 157,
    colorId: 12,
  },
  {
    breedId: 158,
    colorId: 1,
  },
  {
    breedId: 158,
    colorId: 2,
  },
  {
    breedId: 158,
    colorId: 3,
  },
  {
    breedId: 158,
    colorId: 4,
  },
  {
    breedId: 158,
    colorId: 5,
  },
  {
    breedId: 158,
    colorId: 6,
  },
  {
    breedId: 158,
    colorId: 7,
  },
  {
    breedId: 158,
    colorId: 8,
  },
  {
    breedId: 158,
    colorId: 9,
  },
  {
    breedId: 158,
    colorId: 10,
  },
  {
    breedId: 159,
    colorId: 1,
  },
  {
    breedId: 159,
    colorId: 2,
  },
  {
    breedId: 159,
    colorId: 3,
  },
  {
    breedId: 159,
    colorId: 4,
  },
  {
    breedId: 159,
    colorId: 5,
  },
  {
    breedId: 159,
    colorId: 6,
  },
  {
    breedId: 159,
    colorId: 7,
  },
  {
    breedId: 159,
    colorId: 8,
  },
  {
    breedId: 159,
    colorId: 9,
  },
  {
    breedId: 159,
    colorId: 10,
  },
  {
    breedId: 160,
    colorId: 1,
  },
  {
    breedId: 160,
    colorId: 2,
  },
  {
    breedId: 160,
    colorId: 3,
  },
  {
    breedId: 160,
    colorId: 4,
  },
  {
    breedId: 160,
    colorId: 5,
  },
  {
    breedId: 160,
    colorId: 6,
  },
  {
    breedId: 160,
    colorId: 7,
  },
  {
    breedId: 160,
    colorId: 8,
  },
  {
    breedId: 160,
    colorId: 9,
  },
  {
    breedId: 160,
    colorId: 10,
  },
  {
    breedId: 161,
    colorId: 1,
  },
  {
    breedId: 161,
    colorId: 2,
  },
  {
    breedId: 161,
    colorId: 3,
  },
  {
    breedId: 161,
    colorId: 4,
  },
  {
    breedId: 161,
    colorId: 5,
  },
  {
    breedId: 161,
    colorId: 6,
  },
  {
    breedId: 161,
    colorId: 7,
  },
  {
    breedId: 161,
    colorId: 8,
  },
  {
    breedId: 161,
    colorId: 9,
  },
  {
    breedId: 161,
    colorId: 10,
  },
  {
    breedId: 162,
    colorId: 1,
  },
  {
    breedId: 162,
    colorId: 2,
  },
  {
    breedId: 162,
    colorId: 3,
  },
  {
    breedId: 162,
    colorId: 4,
  },
  {
    breedId: 162,
    colorId: 5,
  },
  {
    breedId: 162,
    colorId: 6,
  },
  {
    breedId: 162,
    colorId: 7,
  },
  {
    breedId: 162,
    colorId: 8,
  },
  {
    breedId: 162,
    colorId: 9,
  },
  {
    breedId: 162,
    colorId: 10,
  },
  {
    breedId: 163,
    colorId: 1,
  },
  {
    breedId: 163,
    colorId: 2,
  },
  {
    breedId: 163,
    colorId: 3,
  },
  {
    breedId: 163,
    colorId: 4,
  },
  {
    breedId: 163,
    colorId: 5,
  },
  {
    breedId: 163,
    colorId: 6,
  },
  {
    breedId: 163,
    colorId: 7,
  },
  {
    breedId: 163,
    colorId: 8,
  },
  {
    breedId: 163,
    colorId: 9,
  },
  {
    breedId: 163,
    colorId: 10,
  },
  {
    breedId: 164,
    colorId: 1,
  },
  {
    breedId: 164,
    colorId: 2,
  },
  {
    breedId: 164,
    colorId: 3,
  },
  {
    breedId: 164,
    colorId: 4,
  },
  {
    breedId: 164,
    colorId: 5,
  },
  {
    breedId: 164,
    colorId: 6,
  },
  {
    breedId: 164,
    colorId: 7,
  },
  {
    breedId: 164,
    colorId: 8,
  },
  {
    breedId: 164,
    colorId: 9,
  },
  {
    breedId: 164,
    colorId: 10,
  },
  {
    breedId: 165,
    colorId: 1,
  },
  {
    breedId: 165,
    colorId: 2,
  },
  {
    breedId: 165,
    colorId: 3,
  },
  {
    breedId: 165,
    colorId: 4,
  },
  {
    breedId: 165,
    colorId: 5,
  },
  {
    breedId: 165,
    colorId: 6,
  },
  {
    breedId: 165,
    colorId: 7,
  },
  {
    breedId: 165,
    colorId: 8,
  },
  {
    breedId: 165,
    colorId: 9,
  },
  {
    breedId: 165,
    colorId: 10,
  },
  {
    breedId: 166,
    colorId: 1,
  },
  {
    breedId: 166,
    colorId: 2,
  },
  {
    breedId: 166,
    colorId: 3,
  },
  {
    breedId: 166,
    colorId: 4,
  },
  {
    breedId: 166,
    colorId: 5,
  },
  {
    breedId: 166,
    colorId: 6,
  },
  {
    breedId: 166,
    colorId: 7,
  },
  {
    breedId: 166,
    colorId: 8,
  },
  {
    breedId: 166,
    colorId: 9,
  },
  {
    breedId: 166,
    colorId: 10,
  },
  {
    breedId: 167,
    colorId: 12,
  },
  {
    breedId: 168,
    colorId: 1,
  },
  {
    breedId: 168,
    colorId: 2,
  },
  {
    breedId: 168,
    colorId: 3,
  },
  {
    breedId: 168,
    colorId: 4,
  },
  {
    breedId: 168,
    colorId: 5,
  },
  {
    breedId: 168,
    colorId: 6,
  },
  {
    breedId: 168,
    colorId: 7,
  },
  {
    breedId: 168,
    colorId: 8,
  },
  {
    breedId: 168,
    colorId: 9,
  },
  {
    breedId: 168,
    colorId: 10,
  },
  {
    breedId: 169,
    colorId: 12,
  },
  {
    breedId: 170,
    colorId: 1,
  },
  {
    breedId: 170,
    colorId: 3,
  },
  {
    breedId: 170,
    colorId: 7,
  },
  {
    breedId: 170,
    colorId: 8,
  },
  {
    breedId: 170,
    colorId: 9,
  },
  {
    breedId: 171,
    colorId: 1,
  },
  {
    breedId: 171,
    colorId: 3,
  },
  {
    breedId: 171,
    colorId: 7,
  },
  {
    breedId: 171,
    colorId: 8,
  },
  {
    breedId: 171,
    colorId: 9,
  },
  {
    breedId: 172,
    colorId: 1,
  },
  {
    breedId: 172,
    colorId: 3,
  },
  {
    breedId: 172,
    colorId: 7,
  },
  {
    breedId: 172,
    colorId: 8,
  },
  {
    breedId: 172,
    colorId: 9,
  },
  {
    breedId: 173,
    colorId: 1,
  },
  {
    breedId: 173,
    colorId: 3,
  },
  {
    breedId: 173,
    colorId: 7,
  },
  {
    breedId: 173,
    colorId: 8,
  },
  {
    breedId: 173,
    colorId: 9,
  },
  {
    breedId: 174,
    colorId: 1,
  },
  {
    breedId: 174,
    colorId: 3,
  },
  {
    breedId: 174,
    colorId: 7,
  },
  {
    breedId: 174,
    colorId: 8,
  },
  {
    breedId: 174,
    colorId: 9,
  },
  {
    breedId: 175,
    colorId: 1,
  },
  {
    breedId: 175,
    colorId: 3,
  },
  {
    breedId: 175,
    colorId: 7,
  },
  {
    breedId: 175,
    colorId: 8,
  },
  {
    breedId: 175,
    colorId: 9,
  },
  {
    breedId: 176,
    colorId: 12,
  },
  {
    breedId: 177,
    colorId: 1,
  },
  {
    breedId: 177,
    colorId: 3,
  },
  {
    breedId: 177,
    colorId: 7,
  },
  {
    breedId: 177,
    colorId: 8,
  },
  {
    breedId: 177,
    colorId: 9,
  },
  {
    breedId: 178,
    colorId: 1,
  },
  {
    breedId: 178,
    colorId: 3,
  },
  {
    breedId: 178,
    colorId: 7,
  },
  {
    breedId: 178,
    colorId: 8,
  },
  {
    breedId: 178,
    colorId: 9,
  },
  {
    breedId: 179,
    colorId: 1,
  },
  {
    breedId: 179,
    colorId: 2,
  },
  {
    breedId: 179,
    colorId: 3,
  },
  {
    breedId: 179,
    colorId: 4,
  },
  {
    breedId: 179,
    colorId: 5,
  },
  {
    breedId: 179,
    colorId: 6,
  },
  {
    breedId: 179,
    colorId: 7,
  },
  {
    breedId: 179,
    colorId: 8,
  },
  {
    breedId: 179,
    colorId: 9,
  },
  {
    breedId: 179,
    colorId: 10,
  },
  {
    breedId: 180,
    colorId: 1,
  },
  {
    breedId: 180,
    colorId: 3,
  },
  {
    breedId: 180,
    colorId: 7,
  },
  {
    breedId: 180,
    colorId: 8,
  },
  {
    breedId: 180,
    colorId: 9,
  },
  {
    breedId: 181,
    colorId: 1,
  },
  {
    breedId: 181,
    colorId: 3,
  },
  {
    breedId: 181,
    colorId: 7,
  },
  {
    breedId: 181,
    colorId: 8,
  },
  {
    breedId: 181,
    colorId: 9,
  },
  {
    breedId: 182,
    colorId: 1,
  },
  {
    breedId: 182,
    colorId: 3,
  },
  {
    breedId: 182,
    colorId: 7,
  },
  {
    breedId: 182,
    colorId: 8,
  },
  {
    breedId: 182,
    colorId: 9,
  },
  {
    breedId: 183,
    colorId: 1,
  },
  {
    breedId: 183,
    colorId: 3,
  },
  {
    breedId: 183,
    colorId: 7,
  },
  {
    breedId: 183,
    colorId: 8,
  },
  {
    breedId: 183,
    colorId: 9,
  },
  {
    breedId: 184,
    colorId: 1,
  },
  {
    breedId: 184,
    colorId: 3,
  },
  {
    breedId: 184,
    colorId: 7,
  },
  {
    breedId: 184,
    colorId: 8,
  },
  {
    breedId: 184,
    colorId: 9,
  },
  {
    breedId: 185,
    colorId: 1,
  },
  {
    breedId: 185,
    colorId: 3,
  },
  {
    breedId: 185,
    colorId: 7,
  },
  {
    breedId: 185,
    colorId: 8,
  },
  {
    breedId: 185,
    colorId: 9,
  },
  {
    breedId: 186,
    colorId: 1,
  },
  {
    breedId: 186,
    colorId: 3,
  },
  {
    breedId: 186,
    colorId: 7,
  },
  {
    breedId: 186,
    colorId: 8,
  },
  {
    breedId: 186,
    colorId: 9,
  },
  {
    breedId: 187,
    colorId: 1,
  },
  {
    breedId: 187,
    colorId: 3,
  },
  {
    breedId: 187,
    colorId: 7,
  },
  {
    breedId: 187,
    colorId: 8,
  },
  {
    breedId: 187,
    colorId: 9,
  },
  {
    breedId: 188,
    colorId: 1,
  },
  {
    breedId: 188,
    colorId: 3,
  },
  {
    breedId: 188,
    colorId: 7,
  },
  {
    breedId: 188,
    colorId: 8,
  },
  {
    breedId: 188,
    colorId: 9,
  },
  {
    breedId: 189,
    colorId: 12,
  },
  {
    breedId: 190,
    colorId: 1,
  },
  {
    breedId: 190,
    colorId: 3,
  },
  {
    breedId: 190,
    colorId: 7,
  },
  {
    breedId: 190,
    colorId: 8,
  },
  {
    breedId: 190,
    colorId: 9,
  },
  {
    breedId: 191,
    colorId: 12,
  },
  {
    breedId: 192,
    colorId: 12,
  },
  {
    breedId: 193,
    colorId: 12,
  },
  {
    breedId: 194,
    colorId: 12,
  },
  {
    breedId: 195,
    colorId: 12,
  },
  {
    breedId: 196,
    colorId: 12,
  },
  {
    breedId: 197,
    colorId: 12,
  },
  {
    breedId: 198,
    colorId: 12,
  },
  {
    breedId: 199,
    colorId: 12,
  },
  {
    breedId: 200,
    colorId: 12,
  },
  {
    breedId: 201,
    colorId: 12,
  },
  {
    breedId: 202,
    colorId: 12,
  },
  {
    breedId: 203,
    colorId: 12,
  },
  {
    breedId: 204,
    colorId: 12,
  },
  {
    breedId: 205,
    colorId: 12,
  },
  {
    breedId: 206,
    colorId: 12,
  },
  {
    breedId: 207,
    colorId: 12,
  },
  {
    breedId: 208,
    colorId: 12,
  },
  {
    breedId: 209,
    colorId: 12,
  },
  {
    breedId: 210,
    colorId: 1,
  },
  {
    breedId: 210,
    colorId: 3,
  },
  {
    breedId: 210,
    colorId: 5,
  },
  {
    breedId: 210,
    colorId: 7,
  },
  {
    breedId: 210,
    colorId: 8,
  },
  {
    breedId: 210,
    colorId: 9,
  },
  {
    breedId: 210,
    colorId: 10,
  },
  {
    breedId: 210,
    colorId: 11,
  },
  {
    breedId: 211,
    colorId: 12,
  },
  {
    breedId: 212,
    colorId: 12,
  },
  {
    breedId: 213,
    colorId: 12,
  },
  {
    breedId: 214,
    colorId: 12,
  },
  {
    breedId: 215,
    colorId: 12,
  },
  {
    breedId: 216,
    colorId: 12,
  },
  {
    breedId: 217,
    colorId: 12,
  },
  {
    breedId: 218,
    colorId: 1,
  },
  {
    breedId: 218,
    colorId: 3,
  },
  {
    breedId: 218,
    colorId: 7,
  },
  {
    breedId: 218,
    colorId: 8,
  },
  {
    breedId: 218,
    colorId: 9,
  },
  {
    breedId: 219,
    colorId: 12,
  },
  {
    breedId: 220,
    colorId: 12,
  },
  {
    breedId: 221,
    colorId: 12,
  },
  {
    breedId: 222,
    colorId: 12,
  },
  {
    breedId: 223,
    colorId: 12,
  },
  {
    breedId: 224,
    colorId: 12,
  },
  {
    breedId: 225,
    colorId: 12,
  },
  {
    breedId: 226,
    colorId: 12,
  },
  {
    breedId: 227,
    colorId: 12,
  },
  {
    breedId: 228,
    colorId: 12,
  },
  {
    breedId: 229,
    colorId: 12,
  },
  {
    breedId: 230,
    colorId: 12,
  },
  {
    breedId: 231,
    colorId: 12,
  },
  {
    breedId: 232,
    colorId: 12,
  },
  {
    breedId: 233,
    colorId: 1,
  },
  {
    breedId: 233,
    colorId: 3,
  },
  {
    breedId: 233,
    colorId: 7,
  },
  {
    breedId: 233,
    colorId: 8,
  },
  {
    breedId: 233,
    colorId: 9,
  },
  {
    breedId: 234,
    colorId: 12,
  },
  {
    breedId: 235,
    colorId: 12,
  },
  {
    breedId: 236,
    colorId: 12,
  },
  {
    breedId: 237,
    colorId: 12,
  },
  {
    breedId: 238,
    colorId: 12,
  },
  {
    breedId: 239,
    colorId: 12,
  },
  {
    breedId: 240,
    colorId: 12,
  },
  {
    breedId: 241,
    colorId: 12,
  },
  {
    breedId: 242,
    colorId: 12,
  },
  {
    breedId: 243,
    colorId: 12,
  },
  {
    breedId: 244,
    colorId: 1,
  },
  {
    breedId: 244,
    colorId: 3,
  },
  {
    breedId: 244,
    colorId: 7,
  },
  {
    breedId: 244,
    colorId: 8,
  },
  {
    breedId: 244,
    colorId: 9,
  },
  {
    breedId: 245,
    colorId: 1,
  },
  {
    breedId: 245,
    colorId: 3,
  },
  {
    breedId: 245,
    colorId: 7,
  },
  {
    breedId: 245,
    colorId: 8,
  },
  {
    breedId: 245,
    colorId: 9,
  },
  {
    breedId: 246,
    colorId: 1,
  },
  {
    breedId: 246,
    colorId: 3,
  },
  {
    breedId: 246,
    colorId: 7,
  },
  {
    breedId: 246,
    colorId: 8,
  },
  {
    breedId: 246,
    colorId: 9,
  },
  {
    breedId: 247,
    colorId: 12,
  },
  {
    breedId: 248,
    colorId: 1,
  },
  {
    breedId: 248,
    colorId: 3,
  },
  {
    breedId: 248,
    colorId: 7,
  },
  {
    breedId: 248,
    colorId: 8,
  },
  {
    breedId: 248,
    colorId: 9,
  },
  {
    breedId: 249,
    colorId: 12,
  },
  {
    breedId: 250,
    colorId: 12,
  },
  {
    breedId: 251,
    colorId: 1,
  },
  {
    breedId: 251,
    colorId: 3,
  },
  {
    breedId: 251,
    colorId: 5,
  },
  {
    breedId: 251,
    colorId: 7,
  },
  {
    breedId: 251,
    colorId: 8,
  },
  {
    breedId: 251,
    colorId: 9,
  },
  {
    breedId: 251,
    colorId: 10,
  },
  {
    breedId: 251,
    colorId: 11,
  },
  {
    breedId: 252,
    colorId: 12,
  },
  {
    breedId: 253,
    colorId: 12,
  },
  {
    breedId: 254,
    colorId: 12,
  },
  {
    breedId: 255,
    colorId: 12,
  },
  {
    breedId: 256,
    colorId: 12,
  },
  {
    breedId: 257,
    colorId: 12,
  },
  {
    breedId: 258,
    colorId: 12,
  },
  {
    breedId: 259,
    colorId: 12,
  },
  {
    breedId: 260,
    colorId: 12,
  },
  {
    breedId: 261,
    colorId: 12,
  },
  {
    breedId: 262,
    colorId: 12,
  },
  {
    breedId: 263,
    colorId: 12,
  },
  {
    breedId: 264,
    colorId: 12,
  },
  {
    breedId: 265,
    colorId: 12,
  },
  {
    breedId: 266,
    colorId: 1,
  },
  {
    breedId: 266,
    colorId: 3,
  },
  {
    breedId: 266,
    colorId: 7,
  },
  {
    breedId: 266,
    colorId: 8,
  },
  {
    breedId: 266,
    colorId: 9,
  },
  {
    breedId: 267,
    colorId: 12,
  },
  {
    breedId: 268,
    colorId: 12,
  },
  {
    breedId: 269,
    colorId: 12,
  },
  {
    breedId: 270,
    colorId: 12,
  },
  {
    breedId: 271,
    colorId: 12,
  },
  {
    breedId: 272,
    colorId: 12,
  },
  {
    breedId: 273,
    colorId: 12,
  },
  {
    breedId: 274,
    colorId: 12,
  },
  {
    breedId: 275,
    colorId: 12,
  },
  {
    breedId: 276,
    colorId: 12,
  },
  {
    breedId: 277,
    colorId: 4,
  },
  {
    breedId: 277,
    colorId: 5,
  },
  {
    breedId: 277,
    colorId: 7,
  },
  {
    breedId: 277,
    colorId: 8,
  },
  {
    breedId: 277,
    colorId: 9,
  },
  {
    breedId: 277,
    colorId: 10,
  },
  {
    breedId: 277,
    colorId: 11,
  },
  {
    breedId: 278,
    colorId: 4,
  },
  {
    breedId: 278,
    colorId: 5,
  },
  {
    breedId: 278,
    colorId: 7,
  },
  {
    breedId: 278,
    colorId: 8,
  },
  {
    breedId: 278,
    colorId: 9,
  },
  {
    breedId: 278,
    colorId: 10,
  },
  {
    breedId: 278,
    colorId: 11,
  },
  {
    breedId: 279,
    colorId: 4,
  },
  {
    breedId: 279,
    colorId: 5,
  },
  {
    breedId: 279,
    colorId: 7,
  },
  {
    breedId: 279,
    colorId: 8,
  },
  {
    breedId: 279,
    colorId: 9,
  },
  {
    breedId: 279,
    colorId: 10,
  },
  {
    breedId: 279,
    colorId: 11,
  },
  {
    breedId: 280,
    colorId: 4,
  },
  {
    breedId: 280,
    colorId: 5,
  },
  {
    breedId: 280,
    colorId: 7,
  },
  {
    breedId: 280,
    colorId: 8,
  },
  {
    breedId: 280,
    colorId: 9,
  },
  {
    breedId: 280,
    colorId: 10,
  },
  {
    breedId: 280,
    colorId: 11,
  },
  {
    breedId: 281,
    colorId: 4,
  },
  {
    breedId: 281,
    colorId: 5,
  },
  {
    breedId: 281,
    colorId: 7,
  },
  {
    breedId: 281,
    colorId: 8,
  },
  {
    breedId: 281,
    colorId: 9,
  },
  {
    breedId: 281,
    colorId: 10,
  },
  {
    breedId: 281,
    colorId: 11,
  },
  {
    breedId: 282,
    colorId: 4,
  },
  {
    breedId: 282,
    colorId: 5,
  },
  {
    breedId: 282,
    colorId: 7,
  },
  {
    breedId: 282,
    colorId: 8,
  },
  {
    breedId: 282,
    colorId: 9,
  },
  {
    breedId: 282,
    colorId: 10,
  },
  {
    breedId: 282,
    colorId: 11,
  },
  {
    breedId: 283,
    colorId: 4,
  },
  {
    breedId: 283,
    colorId: 5,
  },
  {
    breedId: 283,
    colorId: 7,
  },
  {
    breedId: 283,
    colorId: 8,
  },
  {
    breedId: 283,
    colorId: 9,
  },
  {
    breedId: 283,
    colorId: 10,
  },
  {
    breedId: 283,
    colorId: 11,
  },
  {
    breedId: 284,
    colorId: 4,
  },
  {
    breedId: 284,
    colorId: 5,
  },
  {
    breedId: 284,
    colorId: 7,
  },
  {
    breedId: 284,
    colorId: 8,
  },
  {
    breedId: 284,
    colorId: 9,
  },
  {
    breedId: 284,
    colorId: 10,
  },
  {
    breedId: 284,
    colorId: 11,
  },
  {
    breedId: 285,
    colorId: 4,
  },
  {
    breedId: 285,
    colorId: 5,
  },
  {
    breedId: 285,
    colorId: 7,
  },
  {
    breedId: 285,
    colorId: 8,
  },
  {
    breedId: 285,
    colorId: 9,
  },
  {
    breedId: 285,
    colorId: 10,
  },
  {
    breedId: 285,
    colorId: 11,
  },
  {
    breedId: 286,
    colorId: 4,
  },
  {
    breedId: 286,
    colorId: 5,
  },
  {
    breedId: 286,
    colorId: 7,
  },
  {
    breedId: 286,
    colorId: 8,
  },
  {
    breedId: 286,
    colorId: 9,
  },
  {
    breedId: 286,
    colorId: 10,
  },
  {
    breedId: 286,
    colorId: 11,
  },
  {
    breedId: 287,
    colorId: 4,
  },
  {
    breedId: 287,
    colorId: 5,
  },
  {
    breedId: 287,
    colorId: 7,
  },
  {
    breedId: 287,
    colorId: 8,
  },
  {
    breedId: 287,
    colorId: 9,
  },
  {
    breedId: 287,
    colorId: 10,
  },
  {
    breedId: 287,
    colorId: 11,
  },
  {
    breedId: 288,
    colorId: 4,
  },
  {
    breedId: 288,
    colorId: 5,
  },
  {
    breedId: 288,
    colorId: 7,
  },
  {
    breedId: 288,
    colorId: 8,
  },
  {
    breedId: 288,
    colorId: 9,
  },
  {
    breedId: 288,
    colorId: 10,
  },
  {
    breedId: 288,
    colorId: 11,
  },
  {
    breedId: 289,
    colorId: 4,
  },
  {
    breedId: 289,
    colorId: 5,
  },
  {
    breedId: 289,
    colorId: 7,
  },
  {
    breedId: 289,
    colorId: 8,
  },
  {
    breedId: 289,
    colorId: 9,
  },
  {
    breedId: 289,
    colorId: 10,
  },
  {
    breedId: 289,
    colorId: 11,
  },
  {
    breedId: 290,
    colorId: 4,
  },
  {
    breedId: 290,
    colorId: 5,
  },
  {
    breedId: 290,
    colorId: 7,
  },
  {
    breedId: 290,
    colorId: 8,
  },
  {
    breedId: 290,
    colorId: 9,
  },
  {
    breedId: 290,
    colorId: 10,
  },
  {
    breedId: 290,
    colorId: 11,
  },
  {
    breedId: 291,
    colorId: 4,
  },
  {
    breedId: 291,
    colorId: 5,
  },
  {
    breedId: 291,
    colorId: 7,
  },
  {
    breedId: 291,
    colorId: 8,
  },
  {
    breedId: 291,
    colorId: 9,
  },
  {
    breedId: 291,
    colorId: 10,
  },
  {
    breedId: 291,
    colorId: 11,
  },
  {
    breedId: 292,
    colorId: 4,
  },
  {
    breedId: 292,
    colorId: 5,
  },
  {
    breedId: 292,
    colorId: 7,
  },
  {
    breedId: 292,
    colorId: 8,
  },
  {
    breedId: 292,
    colorId: 9,
  },
  {
    breedId: 292,
    colorId: 10,
  },
  {
    breedId: 292,
    colorId: 11,
  },
  {
    breedId: 293,
    colorId: 4,
  },
  {
    breedId: 293,
    colorId: 5,
  },
  {
    breedId: 293,
    colorId: 7,
  },
  {
    breedId: 293,
    colorId: 8,
  },
  {
    breedId: 293,
    colorId: 9,
  },
  {
    breedId: 293,
    colorId: 10,
  },
  {
    breedId: 293,
    colorId: 11,
  },
  {
    breedId: 294,
    colorId: 4,
  },
  {
    breedId: 294,
    colorId: 5,
  },
  {
    breedId: 294,
    colorId: 7,
  },
  {
    breedId: 294,
    colorId: 8,
  },
  {
    breedId: 294,
    colorId: 9,
  },
  {
    breedId: 294,
    colorId: 10,
  },
  {
    breedId: 294,
    colorId: 11,
  },
  {
    breedId: 295,
    colorId: 12,
  },
  {
    breedId: 296,
    colorId: 12,
  },
  {
    breedId: 297,
    colorId: 1,
  },
  {
    breedId: 297,
    colorId: 2,
  },
  {
    breedId: 297,
    colorId: 3,
  },
  {
    breedId: 297,
    colorId: 4,
  },
  {
    breedId: 297,
    colorId: 5,
  },
  {
    breedId: 297,
    colorId: 6,
  },
  {
    breedId: 297,
    colorId: 7,
  },
  {
    breedId: 297,
    colorId: 8,
  },
  {
    breedId: 297,
    colorId: 9,
  },
  {
    breedId: 297,
    colorId: 10,
  },
  {
    breedId: 298,
    colorId: 1,
  },
  {
    breedId: 298,
    colorId: 2,
  },
  {
    breedId: 298,
    colorId: 3,
  },
  {
    breedId: 298,
    colorId: 4,
  },
  {
    breedId: 298,
    colorId: 5,
  },
  {
    breedId: 298,
    colorId: 6,
  },
  {
    breedId: 298,
    colorId: 7,
  },
  {
    breedId: 298,
    colorId: 8,
  },
  {
    breedId: 298,
    colorId: 9,
  },
  {
    breedId: 298,
    colorId: 10,
  },
  {
    breedId: 299,
    colorId: 1,
  },
  {
    breedId: 299,
    colorId: 2,
  },
  {
    breedId: 299,
    colorId: 3,
  },
  {
    breedId: 299,
    colorId: 4,
  },
  {
    breedId: 299,
    colorId: 5,
  },
  {
    breedId: 299,
    colorId: 6,
  },
  {
    breedId: 299,
    colorId: 7,
  },
  {
    breedId: 299,
    colorId: 8,
  },
  {
    breedId: 299,
    colorId: 9,
  },
  {
    breedId: 299,
    colorId: 10,
  },
  {
    breedId: 300,
    colorId: 1,
  },
  {
    breedId: 300,
    colorId: 2,
  },
  {
    breedId: 300,
    colorId: 3,
  },
  {
    breedId: 300,
    colorId: 4,
  },
  {
    breedId: 300,
    colorId: 5,
  },
  {
    breedId: 300,
    colorId: 6,
  },
  {
    breedId: 300,
    colorId: 7,
  },
  {
    breedId: 300,
    colorId: 8,
  },
  {
    breedId: 300,
    colorId: 9,
  },
  {
    breedId: 300,
    colorId: 10,
  },
  {
    breedId: 301,
    colorId: 1,
  },
  {
    breedId: 301,
    colorId: 2,
  },
  {
    breedId: 301,
    colorId: 3,
  },
  {
    breedId: 301,
    colorId: 4,
  },
  {
    breedId: 301,
    colorId: 5,
  },
  {
    breedId: 301,
    colorId: 6,
  },
  {
    breedId: 301,
    colorId: 7,
  },
  {
    breedId: 301,
    colorId: 8,
  },
  {
    breedId: 301,
    colorId: 9,
  },
  {
    breedId: 301,
    colorId: 10,
  },
  {
    breedId: 302,
    colorId: 1,
  },
  {
    breedId: 302,
    colorId: 2,
  },
  {
    breedId: 302,
    colorId: 3,
  },
  {
    breedId: 302,
    colorId: 4,
  },
  {
    breedId: 302,
    colorId: 5,
  },
  {
    breedId: 302,
    colorId: 6,
  },
  {
    breedId: 302,
    colorId: 7,
  },
  {
    breedId: 302,
    colorId: 8,
  },
  {
    breedId: 302,
    colorId: 9,
  },
  {
    breedId: 302,
    colorId: 10,
  },
  {
    breedId: 303,
    colorId: 1,
  },
  {
    breedId: 303,
    colorId: 2,
  },
  {
    breedId: 303,
    colorId: 3,
  },
  {
    breedId: 303,
    colorId: 4,
  },
  {
    breedId: 303,
    colorId: 5,
  },
  {
    breedId: 303,
    colorId: 6,
  },
  {
    breedId: 303,
    colorId: 7,
  },
  {
    breedId: 303,
    colorId: 8,
  },
  {
    breedId: 303,
    colorId: 9,
  },
  {
    breedId: 303,
    colorId: 10,
  },
  {
    breedId: 304,
    colorId: 1,
  },
  {
    breedId: 304,
    colorId: 2,
  },
  {
    breedId: 304,
    colorId: 3,
  },
  {
    breedId: 304,
    colorId: 4,
  },
  {
    breedId: 304,
    colorId: 5,
  },
  {
    breedId: 304,
    colorId: 6,
  },
  {
    breedId: 304,
    colorId: 7,
  },
  {
    breedId: 304,
    colorId: 8,
  },
  {
    breedId: 304,
    colorId: 9,
  },
  {
    breedId: 304,
    colorId: 10,
  },
  {
    breedId: 305,
    colorId: 1,
  },
  {
    breedId: 305,
    colorId: 2,
  },
  {
    breedId: 305,
    colorId: 3,
  },
  {
    breedId: 305,
    colorId: 4,
  },
  {
    breedId: 305,
    colorId: 5,
  },
  {
    breedId: 305,
    colorId: 6,
  },
  {
    breedId: 305,
    colorId: 7,
  },
  {
    breedId: 305,
    colorId: 8,
  },
  {
    breedId: 305,
    colorId: 9,
  },
  {
    breedId: 305,
    colorId: 10,
  },
  {
    breedId: 306,
    colorId: 1,
  },
  {
    breedId: 306,
    colorId: 2,
  },
  {
    breedId: 306,
    colorId: 3,
  },
  {
    breedId: 306,
    colorId: 4,
  },
  {
    breedId: 306,
    colorId: 5,
  },
  {
    breedId: 306,
    colorId: 6,
  },
  {
    breedId: 306,
    colorId: 7,
  },
  {
    breedId: 306,
    colorId: 8,
  },
  {
    breedId: 306,
    colorId: 9,
  },
  {
    breedId: 306,
    colorId: 10,
  },
  {
    breedId: 307,
    colorId: 1,
  },
  {
    breedId: 307,
    colorId: 2,
  },
  {
    breedId: 307,
    colorId: 3,
  },
  {
    breedId: 307,
    colorId: 4,
  },
  {
    breedId: 307,
    colorId: 5,
  },
  {
    breedId: 307,
    colorId: 6,
  },
  {
    breedId: 307,
    colorId: 7,
  },
  {
    breedId: 307,
    colorId: 8,
  },
  {
    breedId: 307,
    colorId: 9,
  },
  {
    breedId: 307,
    colorId: 10,
  },
  {
    breedId: 308,
    colorId: 1,
  },
  {
    breedId: 308,
    colorId: 2,
  },
  {
    breedId: 308,
    colorId: 3,
  },
  {
    breedId: 308,
    colorId: 4,
  },
  {
    breedId: 308,
    colorId: 5,
  },
  {
    breedId: 308,
    colorId: 6,
  },
  {
    breedId: 308,
    colorId: 7,
  },
  {
    breedId: 308,
    colorId: 8,
  },
  {
    breedId: 308,
    colorId: 9,
  },
  {
    breedId: 308,
    colorId: 10,
  },
  {
    breedId: 309,
    colorId: 1,
  },
  {
    breedId: 309,
    colorId: 2,
  },
  {
    breedId: 309,
    colorId: 3,
  },
  {
    breedId: 309,
    colorId: 4,
  },
  {
    breedId: 309,
    colorId: 5,
  },
  {
    breedId: 309,
    colorId: 6,
  },
  {
    breedId: 309,
    colorId: 7,
  },
  {
    breedId: 309,
    colorId: 8,
  },
  {
    breedId: 309,
    colorId: 9,
  },
  {
    breedId: 309,
    colorId: 10,
  },
  {
    breedId: 310,
    colorId: 1,
  },
  {
    breedId: 310,
    colorId: 2,
  },
  {
    breedId: 310,
    colorId: 3,
  },
  {
    breedId: 310,
    colorId: 4,
  },
  {
    breedId: 310,
    colorId: 5,
  },
  {
    breedId: 310,
    colorId: 6,
  },
  {
    breedId: 310,
    colorId: 7,
  },
  {
    breedId: 310,
    colorId: 8,
  },
  {
    breedId: 310,
    colorId: 9,
  },
  {
    breedId: 310,
    colorId: 10,
  },
  {
    breedId: 311,
    colorId: 1,
  },
  {
    breedId: 311,
    colorId: 2,
  },
  {
    breedId: 311,
    colorId: 3,
  },
  {
    breedId: 311,
    colorId: 4,
  },
  {
    breedId: 311,
    colorId: 5,
  },
  {
    breedId: 311,
    colorId: 6,
  },
  {
    breedId: 311,
    colorId: 7,
  },
  {
    breedId: 311,
    colorId: 8,
  },
  {
    breedId: 311,
    colorId: 9,
  },
  {
    breedId: 311,
    colorId: 10,
  },
  {
    breedId: 312,
    colorId: 1,
  },
  {
    breedId: 312,
    colorId: 2,
  },
  {
    breedId: 312,
    colorId: 3,
  },
  {
    breedId: 312,
    colorId: 4,
  },
  {
    breedId: 312,
    colorId: 5,
  },
  {
    breedId: 312,
    colorId: 6,
  },
  {
    breedId: 312,
    colorId: 7,
  },
  {
    breedId: 312,
    colorId: 8,
  },
  {
    breedId: 312,
    colorId: 9,
  },
  {
    breedId: 312,
    colorId: 10,
  },
  {
    breedId: 313,
    colorId: 1,
  },
  {
    breedId: 313,
    colorId: 2,
  },
  {
    breedId: 313,
    colorId: 3,
  },
  {
    breedId: 313,
    colorId: 4,
  },
  {
    breedId: 313,
    colorId: 5,
  },
  {
    breedId: 313,
    colorId: 6,
  },
  {
    breedId: 313,
    colorId: 7,
  },
  {
    breedId: 313,
    colorId: 8,
  },
  {
    breedId: 313,
    colorId: 9,
  },
  {
    breedId: 313,
    colorId: 10,
  },
  {
    breedId: 314,
    colorId: 1,
  },
  {
    breedId: 314,
    colorId: 3,
  },
  {
    breedId: 314,
    colorId: 7,
  },
  {
    breedId: 314,
    colorId: 8,
  },
  {
    breedId: 314,
    colorId: 9,
  },
  {
    breedId: 315,
    colorId: 1,
  },
  {
    breedId: 315,
    colorId: 3,
  },
  {
    breedId: 315,
    colorId: 7,
  },
  {
    breedId: 315,
    colorId: 8,
  },
  {
    breedId: 315,
    colorId: 9,
  },
  {
    breedId: 316,
    colorId: 12,
  },
  {
    breedId: 317,
    colorId: 12,
  },
  {
    breedId: 318,
    colorId: 1,
  },
  {
    breedId: 318,
    colorId: 3,
  },
  {
    breedId: 318,
    colorId: 7,
  },
  {
    breedId: 318,
    colorId: 8,
  },
  {
    breedId: 318,
    colorId: 9,
  },
  {
    breedId: 319,
    colorId: 1,
  },
  {
    breedId: 319,
    colorId: 3,
  },
  {
    breedId: 319,
    colorId: 7,
  },
  {
    breedId: 319,
    colorId: 8,
  },
  {
    breedId: 319,
    colorId: 9,
  },
  {
    breedId: 320,
    colorId: 12,
  },
  {
    breedId: 321,
    colorId: 12,
  },
  {
    breedId: 322,
    colorId: 12,
  },
  {
    breedId: 323,
    colorId: 12,
  },
  {
    breedId: 324,
    colorId: 12,
  },
  {
    breedId: 325,
    colorId: 12,
  },
  {
    breedId: 326,
    colorId: 12,
  },
  {
    breedId: 327,
    colorId: 12,
  },
  {
    breedId: 328,
    colorId: 12,
  },
  {
    breedId: 329,
    colorId: 12,
  },
  {
    breedId: 330,
    colorId: 12,
  },
  {
    breedId: 331,
    colorId: 12,
  },
  {
    breedId: 332,
    colorId: 12,
  },
  {
    breedId: 333,
    colorId: 12,
  },
  {
    breedId: 334,
    colorId: 12,
  },
  {
    breedId: 335,
    colorId: 12,
  },
  {
    breedId: 336,
    colorId: 12,
  },
  {
    breedId: 337,
    colorId: 12,
  },
  {
    breedId: 338,
    colorId: 12,
  },
  {
    breedId: 339,
    colorId: 12,
  },
  {
    breedId: 340,
    colorId: 12,
  },
  {
    breedId: 341,
    colorId: 12,
  },
  {
    breedId: 342,
    colorId: 12,
  },
  {
    breedId: 343,
    colorId: 12,
  },
  {
    breedId: 344,
    colorId: 12,
  },
  {
    breedId: 345,
    colorId: 12,
  },
  {
    breedId: 346,
    colorId: 12,
  },
  {
    breedId: 347,
    colorId: 12,
  },
  {
    breedId: 348,
    colorId: 12,
  },
  {
    breedId: 349,
    colorId: 12,
  },
  {
    breedId: 350,
    colorId: 12,
  },
  {
    breedId: 351,
    colorId: 12,
  },
  {
    breedId: 352,
    colorId: 12,
  },
  {
    breedId: 353,
    colorId: 12,
  },
  {
    breedId: 354,
    colorId: 12,
  },
  {
    breedId: 355,
    colorId: 12,
  },
  {
    breedId: 356,
    colorId: 12,
  },
  {
    breedId: 357,
    colorId: 12,
  },
  {
    breedId: 358,
    colorId: 12,
  },
  {
    breedId: 359,
    colorId: 12,
  },
  {
    breedId: 360,
    colorId: 12,
  },
  {
    breedId: 361,
    colorId: 12,
  },
  {
    breedId: 362,
    colorId: 12,
  },
  {
    breedId: 363,
    colorId: 12,
  },
  {
    breedId: 364,
    colorId: 1,
  },
  {
    breedId: 364,
    colorId: 2,
  },
  {
    breedId: 364,
    colorId: 3,
  },
  {
    breedId: 364,
    colorId: 4,
  },
  {
    breedId: 364,
    colorId: 5,
  },
  {
    breedId: 364,
    colorId: 6,
  },
  {
    breedId: 364,
    colorId: 7,
  },
  {
    breedId: 364,
    colorId: 8,
  },
  {
    breedId: 364,
    colorId: 9,
  },
  {
    breedId: 364,
    colorId: 10,
  },
  {
    breedId: 365,
    colorId: 12,
  },
  {
    breedId: 366,
    colorId: 12,
  },
  {
    breedId: 367,
    colorId: 12,
  },
  {
    breedId: 368,
    colorId: 12,
  },
  {
    breedId: 369,
    colorId: 12,
  },
  {
    breedId: 370,
    colorId: 12,
  },
  {
    breedId: 371,
    colorId: 12,
  },
  {
    breedId: 372,
    colorId: 12,
  },
  {
    breedId: 373,
    colorId: 12,
  },
  {
    breedId: 374,
    colorId: 1,
  },
  {
    breedId: 374,
    colorId: 2,
  },
  {
    breedId: 374,
    colorId: 3,
  },
  {
    breedId: 374,
    colorId: 4,
  },
  {
    breedId: 374,
    colorId: 5,
  },
  {
    breedId: 374,
    colorId: 6,
  },
  {
    breedId: 374,
    colorId: 7,
  },
  {
    breedId: 374,
    colorId: 8,
  },
  {
    breedId: 374,
    colorId: 9,
  },
  {
    breedId: 374,
    colorId: 10,
  },
  {
    breedId: 375,
    colorId: 12,
  },
  {
    breedId: 376,
    colorId: 12,
  },
  {
    breedId: 377,
    colorId: 12,
  },
  {
    breedId: 378,
    colorId: 12,
  },
  {
    breedId: 379,
    colorId: 12,
  },
  {
    breedId: 380,
    colorId: 12,
  },
  {
    breedId: 381,
    colorId: 12,
  },
  {
    breedId: 382,
    colorId: 1,
  },
  {
    breedId: 382,
    colorId: 2,
  },
  {
    breedId: 382,
    colorId: 3,
  },
  {
    breedId: 382,
    colorId: 4,
  },
  {
    breedId: 382,
    colorId: 5,
  },
  {
    breedId: 382,
    colorId: 6,
  },
  {
    breedId: 382,
    colorId: 7,
  },
  {
    breedId: 382,
    colorId: 8,
  },
  {
    breedId: 382,
    colorId: 9,
  },
  {
    breedId: 382,
    colorId: 10,
  },
  {
    breedId: 383,
    colorId: 1,
  },
  {
    breedId: 383,
    colorId: 3,
  },
  {
    breedId: 383,
    colorId: 5,
  },
  {
    breedId: 383,
    colorId: 7,
  },
  {
    breedId: 383,
    colorId: 8,
  },
  {
    breedId: 383,
    colorId: 9,
  },
  {
    breedId: 383,
    colorId: 10,
  },
  {
    breedId: 383,
    colorId: 11,
  },
  {
    breedId: 384,
    colorId: 12,
  },
  {
    breedId: 385,
    colorId: 1,
  },
  {
    breedId: 385,
    colorId: 3,
  },
  {
    breedId: 385,
    colorId: 5,
  },
  {
    breedId: 385,
    colorId: 7,
  },
  {
    breedId: 385,
    colorId: 8,
  },
  {
    breedId: 385,
    colorId: 9,
  },
  {
    breedId: 385,
    colorId: 10,
  },
  {
    breedId: 385,
    colorId: 11,
  },
  {
    breedId: 386,
    colorId: 12,
  },
  {
    breedId: 387,
    colorId: 1,
  },
  {
    breedId: 387,
    colorId: 2,
  },
  {
    breedId: 387,
    colorId: 3,
  },
  {
    breedId: 387,
    colorId: 4,
  },
  {
    breedId: 387,
    colorId: 5,
  },
  {
    breedId: 387,
    colorId: 6,
  },
  {
    breedId: 387,
    colorId: 7,
  },
  {
    breedId: 387,
    colorId: 8,
  },
  {
    breedId: 387,
    colorId: 9,
  },
  {
    breedId: 387,
    colorId: 10,
  },
  {
    breedId: 388,
    colorId: 1,
  },
  {
    breedId: 388,
    colorId: 2,
  },
  {
    breedId: 388,
    colorId: 3,
  },
  {
    breedId: 388,
    colorId: 4,
  },
  {
    breedId: 388,
    colorId: 5,
  },
  {
    breedId: 388,
    colorId: 6,
  },
  {
    breedId: 388,
    colorId: 7,
  },
  {
    breedId: 388,
    colorId: 8,
  },
  {
    breedId: 388,
    colorId: 9,
  },
  {
    breedId: 388,
    colorId: 10,
  },
  {
    breedId: 389,
    colorId: 12,
  },
  {
    breedId: 390,
    colorId: 1,
  },
  {
    breedId: 390,
    colorId: 3,
  },
  {
    breedId: 390,
    colorId: 5,
  },
  {
    breedId: 390,
    colorId: 7,
  },
  {
    breedId: 390,
    colorId: 8,
  },
  {
    breedId: 390,
    colorId: 9,
  },
  {
    breedId: 390,
    colorId: 10,
  },
  {
    breedId: 390,
    colorId: 11,
  },
  {
    breedId: 391,
    colorId: 12,
  },
  {
    breedId: 392,
    colorId: 12,
  },
  {
    breedId: 393,
    colorId: 4,
  },
  {
    breedId: 393,
    colorId: 5,
  },
  {
    breedId: 393,
    colorId: 7,
  },
  {
    breedId: 393,
    colorId: 8,
  },
  {
    breedId: 393,
    colorId: 9,
  },
  {
    breedId: 393,
    colorId: 10,
  },
  {
    breedId: 393,
    colorId: 11,
  },
  {
    breedId: 394,
    colorId: 1,
  },
  {
    breedId: 394,
    colorId: 2,
  },
  {
    breedId: 395,
    colorId: 4,
  },
  {
    breedId: 395,
    colorId: 5,
  },
  {
    breedId: 395,
    colorId: 7,
  },
  {
    breedId: 395,
    colorId: 8,
  },
  {
    breedId: 395,
    colorId: 9,
  },
  {
    breedId: 395,
    colorId: 10,
  },
  {
    breedId: 395,
    colorId: 11,
  },
  {
    breedId: 396,
    colorId: 12,
  },
  {
    breedId: 397,
    colorId: 4,
  },
  {
    breedId: 397,
    colorId: 5,
  },
  {
    breedId: 397,
    colorId: 7,
  },
  {
    breedId: 397,
    colorId: 8,
  },
  {
    breedId: 397,
    colorId: 9,
  },
  {
    breedId: 397,
    colorId: 10,
  },
  {
    breedId: 397,
    colorId: 11,
  },
  {
    breedId: 398,
    colorId: 4,
  },
  {
    breedId: 398,
    colorId: 5,
  },
  {
    breedId: 398,
    colorId: 7,
  },
  {
    breedId: 398,
    colorId: 8,
  },
  {
    breedId: 398,
    colorId: 9,
  },
  {
    breedId: 398,
    colorId: 10,
  },
  {
    breedId: 398,
    colorId: 11,
  },
  {
    breedId: 399,
    colorId: 1,
  },
  {
    breedId: 399,
    colorId: 2,
  },
  {
    breedId: 400,
    colorId: 1,
  },
  {
    breedId: 400,
    colorId: 2,
  },
  {
    breedId: 401,
    colorId: 1,
  },
  {
    breedId: 401,
    colorId: 2,
  },
  {
    breedId: 402,
    colorId: 1,
  },
  {
    breedId: 402,
    colorId: 2,
  },
  {
    breedId: 403,
    colorId: 1,
  },
  {
    breedId: 403,
    colorId: 2,
  },
  {
    breedId: 404,
    colorId: 1,
  },
  {
    breedId: 404,
    colorId: 2,
  },
  {
    breedId: 405,
    colorId: 4,
  },
  {
    breedId: 405,
    colorId: 5,
  },
  {
    breedId: 405,
    colorId: 7,
  },
  {
    breedId: 405,
    colorId: 8,
  },
  {
    breedId: 405,
    colorId: 9,
  },
  {
    breedId: 405,
    colorId: 10,
  },
  {
    breedId: 405,
    colorId: 11,
  },
  {
    breedId: 406,
    colorId: 4,
  },
  {
    breedId: 406,
    colorId: 5,
  },
  {
    breedId: 406,
    colorId: 7,
  },
  {
    breedId: 406,
    colorId: 8,
  },
  {
    breedId: 406,
    colorId: 9,
  },
  {
    breedId: 406,
    colorId: 10,
  },
  {
    breedId: 406,
    colorId: 11,
  },
  {
    breedId: 407,
    colorId: 4,
  },
  {
    breedId: 407,
    colorId: 5,
  },
  {
    breedId: 407,
    colorId: 7,
  },
  {
    breedId: 407,
    colorId: 8,
  },
  {
    breedId: 407,
    colorId: 9,
  },
  {
    breedId: 407,
    colorId: 10,
  },
  {
    breedId: 407,
    colorId: 11,
  },
  {
    breedId: 408,
    colorId: 4,
  },
  {
    breedId: 408,
    colorId: 5,
  },
  {
    breedId: 408,
    colorId: 7,
  },
  {
    breedId: 408,
    colorId: 8,
  },
  {
    breedId: 408,
    colorId: 9,
  },
  {
    breedId: 408,
    colorId: 10,
  },
  {
    breedId: 408,
    colorId: 11,
  },
  {
    breedId: 409,
    colorId: 4,
  },
  {
    breedId: 409,
    colorId: 5,
  },
  {
    breedId: 409,
    colorId: 7,
  },
  {
    breedId: 409,
    colorId: 8,
  },
  {
    breedId: 409,
    colorId: 9,
  },
  {
    breedId: 409,
    colorId: 10,
  },
  {
    breedId: 409,
    colorId: 11,
  },
  {
    breedId: 410,
    colorId: 1,
  },
  {
    breedId: 410,
    colorId: 3,
  },
  {
    breedId: 410,
    colorId: 5,
  },
  {
    breedId: 410,
    colorId: 7,
  },
  {
    breedId: 410,
    colorId: 8,
  },
  {
    breedId: 410,
    colorId: 9,
  },
  {
    breedId: 410,
    colorId: 10,
  },
  {
    breedId: 410,
    colorId: 11,
  },
  {
    breedId: 411,
    colorId: 4,
  },
  {
    breedId: 411,
    colorId: 5,
  },
  {
    breedId: 411,
    colorId: 7,
  },
  {
    breedId: 411,
    colorId: 8,
  },
  {
    breedId: 411,
    colorId: 9,
  },
  {
    breedId: 411,
    colorId: 10,
  },
  {
    breedId: 411,
    colorId: 11,
  },
  {
    breedId: 412,
    colorId: 4,
  },
  {
    breedId: 412,
    colorId: 5,
  },
  {
    breedId: 412,
    colorId: 7,
  },
  {
    breedId: 412,
    colorId: 8,
  },
  {
    breedId: 412,
    colorId: 9,
  },
  {
    breedId: 412,
    colorId: 10,
  },
  {
    breedId: 412,
    colorId: 11,
  },
  {
    breedId: 413,
    colorId: 12,
  },
  {
    breedId: 414,
    colorId: 12,
  },
  {
    breedId: 415,
    colorId: 12,
  },
  {
    breedId: 416,
    colorId: 1,
  },
  {
    breedId: 416,
    colorId: 3,
  },
  {
    breedId: 416,
    colorId: 5,
  },
  {
    breedId: 416,
    colorId: 7,
  },
  {
    breedId: 416,
    colorId: 8,
  },
  {
    breedId: 416,
    colorId: 9,
  },
  {
    breedId: 416,
    colorId: 10,
  },
  {
    breedId: 416,
    colorId: 11,
  },
  {
    breedId: 417,
    colorId: 1,
  },
  {
    breedId: 417,
    colorId: 3,
  },
  {
    breedId: 417,
    colorId: 5,
  },
  {
    breedId: 417,
    colorId: 7,
  },
  {
    breedId: 417,
    colorId: 8,
  },
  {
    breedId: 417,
    colorId: 9,
  },
  {
    breedId: 417,
    colorId: 10,
  },
  {
    breedId: 417,
    colorId: 11,
  },
  {
    breedId: 418,
    colorId: 1,
  },
  {
    breedId: 418,
    colorId: 3,
  },
  {
    breedId: 418,
    colorId: 5,
  },
  {
    breedId: 418,
    colorId: 7,
  },
  {
    breedId: 418,
    colorId: 8,
  },
  {
    breedId: 418,
    colorId: 9,
  },
  {
    breedId: 418,
    colorId: 10,
  },
  {
    breedId: 418,
    colorId: 11,
  },
  {
    breedId: 419,
    colorId: 1,
  },
  {
    breedId: 419,
    colorId: 3,
  },
  {
    breedId: 419,
    colorId: 5,
  },
  {
    breedId: 419,
    colorId: 7,
  },
  {
    breedId: 419,
    colorId: 8,
  },
  {
    breedId: 419,
    colorId: 9,
  },
  {
    breedId: 419,
    colorId: 10,
  },
  {
    breedId: 419,
    colorId: 11,
  },
  {
    breedId: 420,
    colorId: 12,
  },
  {
    breedId: 421,
    colorId: 12,
  },
  {
    breedId: 422,
    colorId: 1,
  },
  {
    breedId: 422,
    colorId: 3,
  },
  {
    breedId: 422,
    colorId: 7,
  },
  {
    breedId: 422,
    colorId: 8,
  },
  {
    breedId: 422,
    colorId: 9,
  },
  {
    breedId: 423,
    colorId: 1,
  },
  {
    breedId: 423,
    colorId: 3,
  },
  {
    breedId: 423,
    colorId: 5,
  },
  {
    breedId: 423,
    colorId: 7,
  },
  {
    breedId: 423,
    colorId: 8,
  },
  {
    breedId: 423,
    colorId: 9,
  },
  {
    breedId: 423,
    colorId: 10,
  },
  {
    breedId: 423,
    colorId: 11,
  },
  {
    breedId: 424,
    colorId: 1,
  },
  {
    breedId: 424,
    colorId: 3,
  },
  {
    breedId: 424,
    colorId: 7,
  },
  {
    breedId: 424,
    colorId: 8,
  },
  {
    breedId: 424,
    colorId: 9,
  },
  {
    breedId: 425,
    colorId: 1,
  },
  {
    breedId: 425,
    colorId: 3,
  },
  {
    breedId: 425,
    colorId: 7,
  },
  {
    breedId: 425,
    colorId: 8,
  },
  {
    breedId: 425,
    colorId: 9,
  },
  {
    breedId: 426,
    colorId: 1,
  },
  {
    breedId: 426,
    colorId: 3,
  },
  {
    breedId: 426,
    colorId: 7,
  },
  {
    breedId: 426,
    colorId: 8,
  },
  {
    breedId: 426,
    colorId: 9,
  },
  {
    breedId: 427,
    colorId: 1,
  },
  {
    breedId: 427,
    colorId: 3,
  },
  {
    breedId: 427,
    colorId: 7,
  },
  {
    breedId: 427,
    colorId: 8,
  },
  {
    breedId: 427,
    colorId: 9,
  },
  {
    breedId: 428,
    colorId: 1,
  },
  {
    breedId: 428,
    colorId: 3,
  },
  {
    breedId: 428,
    colorId: 7,
  },
  {
    breedId: 428,
    colorId: 8,
  },
  {
    breedId: 428,
    colorId: 9,
  },
  {
    breedId: 429,
    colorId: 1,
  },
  {
    breedId: 429,
    colorId: 3,
  },
  {
    breedId: 429,
    colorId: 5,
  },
  {
    breedId: 429,
    colorId: 7,
  },
  {
    breedId: 429,
    colorId: 8,
  },
  {
    breedId: 429,
    colorId: 9,
  },
  {
    breedId: 429,
    colorId: 10,
  },
  {
    breedId: 429,
    colorId: 11,
  },
  {
    breedId: 430,
    colorId: 1,
  },
  {
    breedId: 430,
    colorId: 3,
  },
  {
    breedId: 430,
    colorId: 7,
  },
  {
    breedId: 430,
    colorId: 8,
  },
  {
    breedId: 430,
    colorId: 9,
  },
  {
    breedId: 431,
    colorId: 1,
  },
  {
    breedId: 431,
    colorId: 3,
  },
  {
    breedId: 431,
    colorId: 7,
  },
  {
    breedId: 431,
    colorId: 8,
  },
  {
    breedId: 431,
    colorId: 9,
  },
  {
    breedId: 432,
    colorId: 1,
  },
  {
    breedId: 432,
    colorId: 3,
  },
  {
    breedId: 432,
    colorId: 7,
  },
  {
    breedId: 432,
    colorId: 8,
  },
  {
    breedId: 432,
    colorId: 9,
  },
  {
    breedId: 433,
    colorId: 1,
  },
  {
    breedId: 433,
    colorId: 3,
  },
  {
    breedId: 433,
    colorId: 7,
  },
  {
    breedId: 433,
    colorId: 8,
  },
  {
    breedId: 433,
    colorId: 9,
  },
  {
    breedId: 434,
    colorId: 1,
  },
  {
    breedId: 434,
    colorId: 3,
  },
  {
    breedId: 434,
    colorId: 7,
  },
  {
    breedId: 434,
    colorId: 8,
  },
  {
    breedId: 434,
    colorId: 9,
  },
  {
    breedId: 435,
    colorId: 1,
  },
  {
    breedId: 435,
    colorId: 3,
  },
  {
    breedId: 435,
    colorId: 7,
  },
  {
    breedId: 435,
    colorId: 8,
  },
  {
    breedId: 435,
    colorId: 9,
  },
  {
    breedId: 436,
    colorId: 1,
  },
  {
    breedId: 436,
    colorId: 3,
  },
  {
    breedId: 436,
    colorId: 5,
  },
  {
    breedId: 436,
    colorId: 7,
  },
  {
    breedId: 436,
    colorId: 8,
  },
  {
    breedId: 436,
    colorId: 9,
  },
  {
    breedId: 436,
    colorId: 10,
  },
  {
    breedId: 436,
    colorId: 11,
  },
  {
    breedId: 437,
    colorId: 1,
  },
  {
    breedId: 437,
    colorId: 3,
  },
  {
    breedId: 437,
    colorId: 7,
  },
  {
    breedId: 437,
    colorId: 8,
  },
  {
    breedId: 437,
    colorId: 9,
  },
  {
    breedId: 438,
    colorId: 12,
  },
  {
    breedId: 439,
    colorId: 12,
  },
  {
    breedId: 440,
    colorId: 12,
  },
  {
    breedId: 441,
    colorId: 12,
  },
  {
    breedId: 442,
    colorId: 1,
  },
  {
    breedId: 442,
    colorId: 3,
  },
  {
    breedId: 442,
    colorId: 7,
  },
  {
    breedId: 442,
    colorId: 8,
  },
  {
    breedId: 442,
    colorId: 9,
  },
  {
    breedId: 443,
    colorId: 1,
  },
  {
    breedId: 443,
    colorId: 3,
  },
  {
    breedId: 443,
    colorId: 7,
  },
  {
    breedId: 443,
    colorId: 8,
  },
  {
    breedId: 443,
    colorId: 9,
  },
  {
    breedId: 444,
    colorId: 1,
  },
  {
    breedId: 444,
    colorId: 2,
  },
  {
    breedId: 444,
    colorId: 3,
  },
  {
    breedId: 444,
    colorId: 5,
  },
  {
    breedId: 444,
    colorId: 7,
  },
  {
    breedId: 444,
    colorId: 8,
  },
  {
    breedId: 444,
    colorId: 9,
  },
  {
    breedId: 444,
    colorId: 10,
  },
  {
    breedId: 445,
    colorId: 1,
  },
  {
    breedId: 445,
    colorId: 3,
  },
  {
    breedId: 445,
    colorId: 7,
  },
  {
    breedId: 445,
    colorId: 8,
  },
  {
    breedId: 445,
    colorId: 9,
  },
  {
    breedId: 446,
    colorId: 10,
  },
  {
    breedId: 447,
    colorId: 12,
  },
  {
    breedId: 448,
    colorId: 1,
  },
  {
    breedId: 448,
    colorId: 3,
  },
  {
    breedId: 448,
    colorId: 5,
  },
  {
    breedId: 448,
    colorId: 7,
  },
  {
    breedId: 448,
    colorId: 8,
  },
  {
    breedId: 448,
    colorId: 9,
  },
  {
    breedId: 448,
    colorId: 10,
  },
  {
    breedId: 448,
    colorId: 11,
  },
  {
    breedId: 449,
    colorId: 12,
  },
  {
    breedId: 450,
    colorId: 12,
  },
  {
    breedId: 451,
    colorId: 12,
  },
  {
    breedId: 452,
    colorId: 12,
  },
  {
    breedId: 453,
    colorId: 12,
  },
  {
    breedId: 454,
    colorId: 1,
  },
  {
    breedId: 454,
    colorId: 3,
  },
  {
    breedId: 454,
    colorId: 5,
  },
  {
    breedId: 454,
    colorId: 7,
  },
  {
    breedId: 454,
    colorId: 8,
  },
  {
    breedId: 454,
    colorId: 9,
  },
  {
    breedId: 454,
    colorId: 10,
  },
  {
    breedId: 454,
    colorId: 11,
  },
  {
    breedId: 455,
    colorId: 12,
  },
  {
    breedId: 456,
    colorId: 1,
  },
  {
    breedId: 456,
    colorId: 3,
  },
  {
    breedId: 456,
    colorId: 5,
  },
  {
    breedId: 456,
    colorId: 7,
  },
  {
    breedId: 456,
    colorId: 8,
  },
  {
    breedId: 456,
    colorId: 9,
  },
  {
    breedId: 456,
    colorId: 10,
  },
  {
    breedId: 456,
    colorId: 11,
  },
  {
    breedId: 457,
    colorId: 12,
  },
  {
    breedId: 458,
    colorId: 1,
  },
  {
    breedId: 458,
    colorId: 3,
  },
  {
    breedId: 458,
    colorId: 5,
  },
  {
    breedId: 458,
    colorId: 7,
  },
  {
    breedId: 458,
    colorId: 8,
  },
  {
    breedId: 458,
    colorId: 9,
  },
  {
    breedId: 458,
    colorId: 10,
  },
  {
    breedId: 458,
    colorId: 11,
  },
  {
    breedId: 459,
    colorId: 12,
  },
  {
    breedId: 460,
    colorId: 12,
  },
  {
    breedId: 461,
    colorId: 12,
  },
  {
    breedId: 462,
    colorId: 12,
  },
  {
    breedId: 463,
    colorId: 12,
  },
  {
    breedId: 464,
    colorId: 12,
  },
  {
    breedId: 465,
    colorId: 12,
  },
  {
    breedId: 466,
    colorId: 12,
  },
  {
    breedId: 467,
    colorId: 12,
  },
  {
    breedId: 468,
    colorId: 1,
  },
  {
    breedId: 468,
    colorId: 3,
  },
  {
    breedId: 468,
    colorId: 7,
  },
  {
    breedId: 468,
    colorId: 8,
  },
  {
    breedId: 468,
    colorId: 9,
  },
  {
    breedId: 469,
    colorId: 12,
  },
  {
    breedId: 470,
    colorId: 12,
  },
  {
    breedId: 471,
    colorId: 12,
  },
  {
    breedId: 472,
    colorId: 12,
  },
  {
    breedId: 473,
    colorId: 12,
  },
  {
    breedId: 474,
    colorId: 12,
  },
  {
    breedId: 475,
    colorId: 12,
  },
  {
    breedId: 476,
    colorId: 12,
  },
  {
    breedId: 477,
    colorId: 12,
  },
  {
    breedId: 478,
    colorId: 12,
  },
  {
    breedId: 479,
    colorId: 12,
  },
  {
    breedId: 480,
    colorId: 12,
  },
  {
    breedId: 481,
    colorId: 12,
  },
  {
    breedId: 482,
    colorId: 12,
  },
  {
    breedId: 483,
    colorId: 12,
  },
  {
    breedId: 484,
    colorId: 12,
  },
  {
    breedId: 485,
    colorId: 12,
  },
  {
    breedId: 486,
    colorId: 12,
  },
  {
    breedId: 487,
    colorId: 12,
  },
  {
    breedId: 488,
    colorId: 12,
  },
  {
    breedId: 489,
    colorId: 12,
  },
  {
    breedId: 490,
    colorId: 12,
  },
  {
    breedId: 491,
    colorId: 12,
  },
  {
    breedId: 492,
    colorId: 12,
  },
  {
    breedId: 493,
    colorId: 12,
  },
  {
    breedId: 494,
    colorId: 12,
  },
  {
    breedId: 495,
    colorId: 12,
  },
  {
    breedId: 496,
    colorId: 12,
  },
  {
    breedId: 497,
    colorId: 12,
  },
  {
    breedId: 498,
    colorId: 12,
  },
  {
    breedId: 499,
    colorId: 12,
  },
  {
    breedId: 500,
    colorId: 12,
  },
  {
    breedId: 501,
    colorId: 12,
  },
  {
    breedId: 502,
    colorId: 10,
  },
  {
    breedId: 503,
    colorId: 12,
  },
  {
    breedId: 504,
    colorId: 10,
  },
  {
    breedId: 505,
    colorId: 10,
  },
  {
    breedId: 506,
    colorId: 10,
  },
  {
    breedId: 507,
    colorId: 10,
  },
  {
    breedId: 508,
    colorId: 10,
  },
  {
    breedId: 509,
    colorId: 10,
  },
  {
    breedId: 510,
    colorId: 10,
  },
  {
    breedId: 511,
    colorId: 10,
  },
  {
    breedId: 512,
    colorId: 12,
  },
  {
    breedId: 513,
    colorId: 10,
  },
  {
    breedId: 514,
    colorId: 10,
  },
  {
    breedId: 515,
    colorId: 10,
  },
  {
    breedId: 516,
    colorId: 10,
  },
  {
    breedId: 517,
    colorId: 10,
  },
  {
    breedId: 518,
    colorId: 10,
  },
  {
    breedId: 519,
    colorId: 10,
  },
  {
    breedId: 520,
    colorId: 10,
  },
  {
    breedId: 521,
    colorId: 10,
  },
  {
    breedId: 522,
    colorId: 10,
  },
  {
    breedId: 523,
    colorId: 1,
  },
  {
    breedId: 523,
    colorId: 3,
  },
  {
    breedId: 523,
    colorId: 5,
  },
  {
    breedId: 523,
    colorId: 7,
  },
  {
    breedId: 523,
    colorId: 8,
  },
  {
    breedId: 523,
    colorId: 9,
  },
  {
    breedId: 523,
    colorId: 10,
  },
  {
    breedId: 523,
    colorId: 11,
  },
  {
    breedId: 524,
    colorId: 10,
  },
  {
    breedId: 525,
    colorId: 10,
  },
  {
    breedId: 526,
    colorId: 10,
  },
  {
    breedId: 527,
    colorId: 10,
  },
  {
    breedId: 528,
    colorId: 10,
  },
  {
    breedId: 529,
    colorId: 10,
  },
  {
    breedId: 530,
    colorId: 10,
  },
  {
    breedId: 531,
    colorId: 10,
  },
  {
    breedId: 532,
    colorId: 10,
  },
  {
    breedId: 533,
    colorId: 10,
  },
  {
    breedId: 534,
    colorId: 10,
  },
  {
    breedId: 535,
    colorId: 10,
  },
  {
    breedId: 536,
    colorId: 10,
  },
  {
    breedId: 537,
    colorId: 10,
  },
  {
    breedId: 538,
    colorId: 10,
  },
  {
    breedId: 539,
    colorId: 10,
  },
  {
    breedId: 540,
    colorId: 10,
  },
  {
    breedId: 541,
    colorId: 10,
  },
  {
    breedId: 542,
    colorId: 10,
  },
  {
    breedId: 543,
    colorId: 10,
  },
  {
    breedId: 544,
    colorId: 10,
  },
  {
    breedId: 545,
    colorId: 1,
  },
  {
    breedId: 545,
    colorId: 3,
  },
  {
    breedId: 545,
    colorId: 7,
  },
  {
    breedId: 545,
    colorId: 8,
  },
  {
    breedId: 545,
    colorId: 9,
  },
  {
    breedId: 546,
    colorId: 10,
  },
  {
    breedId: 547,
    colorId: 10,
  },
  {
    breedId: 548,
    colorId: 10,
  },
  {
    breedId: 549,
    colorId: 10,
  },
  {
    breedId: 550,
    colorId: 10,
  },
  {
    breedId: 551,
    colorId: 10,
  },
  {
    breedId: 552,
    colorId: 12,
  },
  {
    breedId: 553,
    colorId: 12,
  },
  {
    breedId: 554,
    colorId: 10,
  },
  {
    breedId: 555,
    colorId: 12,
  },
  {
    breedId: 556,
    colorId: 12,
  },
  {
    breedId: 557,
    colorId: 12,
  },
  {
    breedId: 558,
    colorId: 12,
  },
  {
    breedId: 559,
    colorId: 12,
  },
  {
    breedId: 560,
    colorId: 12,
  },
  {
    breedId: 561,
    colorId: 12,
  },
  {
    breedId: 562,
    colorId: 12,
  },
  {
    breedId: 563,
    colorId: 12,
  },
  {
    breedId: 564,
    colorId: 12,
  },
  {
    breedId: 565,
    colorId: 12,
  },
  {
    breedId: 566,
    colorId: 12,
  },
  {
    breedId: 567,
    colorId: 12,
  },
  {
    breedId: 568,
    colorId: 12,
  },
  {
    breedId: 569,
    colorId: 12,
  },
  {
    breedId: 570,
    colorId: 12,
  },
  {
    breedId: 571,
    colorId: 12,
  },
  {
    breedId: 572,
    colorId: 12,
  },
  {
    breedId: 573,
    colorId: 12,
  },
  {
    breedId: 574,
    colorId: 12,
  },
  {
    breedId: 575,
    colorId: 12,
  },
  {
    breedId: 576,
    colorId: 12,
  },
  {
    breedId: 577,
    colorId: 12,
  },
  {
    breedId: 578,
    colorId: 12,
  },
  {
    breedId: 579,
    colorId: 12,
  },
  {
    breedId: 580,
    colorId: 1,
  },
  {
    breedId: 580,
    colorId: 3,
  },
  {
    breedId: 580,
    colorId: 7,
  },
  {
    breedId: 580,
    colorId: 8,
  },
  {
    breedId: 580,
    colorId: 9,
  },
  {
    breedId: 581,
    colorId: 1,
  },
  {
    breedId: 581,
    colorId: 3,
  },
  {
    breedId: 581,
    colorId: 5,
  },
  {
    breedId: 581,
    colorId: 7,
  },
  {
    breedId: 581,
    colorId: 8,
  },
  {
    breedId: 581,
    colorId: 9,
  },
  {
    breedId: 581,
    colorId: 10,
  },
  {
    breedId: 581,
    colorId: 11,
  },
  {
    breedId: 582,
    colorId: 1,
  },
  {
    breedId: 582,
    colorId: 3,
  },
  {
    breedId: 582,
    colorId: 7,
  },
  {
    breedId: 582,
    colorId: 8,
  },
  {
    breedId: 582,
    colorId: 9,
  },
  {
    breedId: 583,
    colorId: 1,
  },
  {
    breedId: 583,
    colorId: 3,
  },
  {
    breedId: 583,
    colorId: 7,
  },
  {
    breedId: 583,
    colorId: 8,
  },
  {
    breedId: 583,
    colorId: 9,
  },
  {
    breedId: 584,
    colorId: 1,
  },
  {
    breedId: 584,
    colorId: 3,
  },
  {
    breedId: 584,
    colorId: 7,
  },
  {
    breedId: 584,
    colorId: 8,
  },
  {
    breedId: 584,
    colorId: 9,
  },
  {
    breedId: 585,
    colorId: 1,
  },
  {
    breedId: 585,
    colorId: 3,
  },
  {
    breedId: 585,
    colorId: 7,
  },
  {
    breedId: 585,
    colorId: 8,
  },
  {
    breedId: 585,
    colorId: 9,
  },
  {
    breedId: 586,
    colorId: 1,
  },
  {
    breedId: 586,
    colorId: 3,
  },
  {
    breedId: 586,
    colorId: 7,
  },
  {
    breedId: 586,
    colorId: 8,
  },
  {
    breedId: 586,
    colorId: 9,
  },
  {
    breedId: 587,
    colorId: 1,
  },
  {
    breedId: 587,
    colorId: 3,
  },
  {
    breedId: 587,
    colorId: 7,
  },
  {
    breedId: 587,
    colorId: 8,
  },
  {
    breedId: 587,
    colorId: 9,
  },
  {
    breedId: 588,
    colorId: 1,
  },
  {
    breedId: 588,
    colorId: 3,
  },
  {
    breedId: 588,
    colorId: 7,
  },
  {
    breedId: 588,
    colorId: 8,
  },
  {
    breedId: 588,
    colorId: 9,
  },
  {
    breedId: 589,
    colorId: 1,
  },
  {
    breedId: 589,
    colorId: 3,
  },
  {
    breedId: 589,
    colorId: 7,
  },
  {
    breedId: 589,
    colorId: 8,
  },
  {
    breedId: 589,
    colorId: 9,
  },
  {
    breedId: 590,
    colorId: 1,
  },
  {
    breedId: 590,
    colorId: 3,
  },
  {
    breedId: 590,
    colorId: 7,
  },
  {
    breedId: 590,
    colorId: 8,
  },
  {
    breedId: 590,
    colorId: 9,
  },
  {
    breedId: 591,
    colorId: 1,
  },
  {
    breedId: 591,
    colorId: 3,
  },
  {
    breedId: 591,
    colorId: 7,
  },
  {
    breedId: 591,
    colorId: 8,
  },
  {
    breedId: 591,
    colorId: 9,
  },
  {
    breedId: 592,
    colorId: 1,
  },
  {
    breedId: 592,
    colorId: 3,
  },
  {
    breedId: 592,
    colorId: 7,
  },
  {
    breedId: 592,
    colorId: 8,
  },
  {
    breedId: 592,
    colorId: 9,
  },
  {
    breedId: 593,
    colorId: 1,
  },
  {
    breedId: 593,
    colorId: 3,
  },
  {
    breedId: 593,
    colorId: 7,
  },
  {
    breedId: 593,
    colorId: 8,
  },
  {
    breedId: 593,
    colorId: 9,
  },
  {
    breedId: 594,
    colorId: 1,
  },
  {
    breedId: 594,
    colorId: 2,
  },
  {
    breedId: 594,
    colorId: 3,
  },
  {
    breedId: 594,
    colorId: 4,
  },
  {
    breedId: 594,
    colorId: 5,
  },
  {
    breedId: 594,
    colorId: 6,
  },
  {
    breedId: 594,
    colorId: 7,
  },
  {
    breedId: 594,
    colorId: 8,
  },
  {
    breedId: 594,
    colorId: 9,
  },
  {
    breedId: 594,
    colorId: 10,
  },
  {
    breedId: 595,
    colorId: 1,
  },
  {
    breedId: 595,
    colorId: 3,
  },
  {
    breedId: 595,
    colorId: 7,
  },
  {
    breedId: 595,
    colorId: 8,
  },
  {
    breedId: 595,
    colorId: 9,
  },
  {
    breedId: 596,
    colorId: 1,
  },
  {
    breedId: 596,
    colorId: 3,
  },
  {
    breedId: 596,
    colorId: 7,
  },
  {
    breedId: 596,
    colorId: 8,
  },
  {
    breedId: 596,
    colorId: 9,
  },
  {
    breedId: 597,
    colorId: 1,
  },
  {
    breedId: 597,
    colorId: 3,
  },
  {
    breedId: 597,
    colorId: 7,
  },
  {
    breedId: 597,
    colorId: 8,
  },
  {
    breedId: 597,
    colorId: 9,
  },
  {
    breedId: 598,
    colorId: 1,
  },
  {
    breedId: 598,
    colorId: 3,
  },
  {
    breedId: 598,
    colorId: 7,
  },
  {
    breedId: 598,
    colorId: 8,
  },
  {
    breedId: 598,
    colorId: 9,
  },
  {
    breedId: 599,
    colorId: 1,
  },
  {
    breedId: 599,
    colorId: 3,
  },
  {
    breedId: 599,
    colorId: 7,
  },
  {
    breedId: 599,
    colorId: 8,
  },
  {
    breedId: 599,
    colorId: 9,
  },
  {
    breedId: 600,
    colorId: 12,
  },
  {
    breedId: 601,
    colorId: 12,
  },
  {
    breedId: 602,
    colorId: 1,
  },
  {
    breedId: 602,
    colorId: 3,
  },
  {
    breedId: 602,
    colorId: 5,
  },
  {
    breedId: 602,
    colorId: 7,
  },
  {
    breedId: 602,
    colorId: 8,
  },
  {
    breedId: 602,
    colorId: 9,
  },
  {
    breedId: 602,
    colorId: 10,
  },
  {
    breedId: 602,
    colorId: 11,
  },
  {
    breedId: 603,
    colorId: 12,
  },
  {
    breedId: 604,
    colorId: 12,
  },
  {
    breedId: 605,
    colorId: 12,
  },
  {
    breedId: 606,
    colorId: 12,
  },
  {
    breedId: 607,
    colorId: 12,
  },
  {
    breedId: 608,
    colorId: 1,
  },
  {
    breedId: 608,
    colorId: 2,
  },
  {
    breedId: 608,
    colorId: 3,
  },
  {
    breedId: 608,
    colorId: 4,
  },
  {
    breedId: 608,
    colorId: 5,
  },
  {
    breedId: 608,
    colorId: 6,
  },
  {
    breedId: 608,
    colorId: 7,
  },
  {
    breedId: 608,
    colorId: 8,
  },
  {
    breedId: 608,
    colorId: 9,
  },
  {
    breedId: 608,
    colorId: 10,
  },
  {
    breedId: 609,
    colorId: 1,
  },
  {
    breedId: 609,
    colorId: 2,
  },
  {
    breedId: 609,
    colorId: 3,
  },
  {
    breedId: 609,
    colorId: 4,
  },
  {
    breedId: 609,
    colorId: 5,
  },
  {
    breedId: 609,
    colorId: 6,
  },
  {
    breedId: 609,
    colorId: 7,
  },
  {
    breedId: 609,
    colorId: 8,
  },
  {
    breedId: 609,
    colorId: 9,
  },
  {
    breedId: 609,
    colorId: 10,
  },
  {
    breedId: 610,
    colorId: 1,
  },
  {
    breedId: 610,
    colorId: 2,
  },
  {
    breedId: 610,
    colorId: 3,
  },
  {
    breedId: 610,
    colorId: 4,
  },
  {
    breedId: 610,
    colorId: 5,
  },
  {
    breedId: 610,
    colorId: 6,
  },
  {
    breedId: 610,
    colorId: 7,
  },
  {
    breedId: 610,
    colorId: 8,
  },
  {
    breedId: 610,
    colorId: 9,
  },
  {
    breedId: 610,
    colorId: 10,
  },
  {
    breedId: 611,
    colorId: 1,
  },
  {
    breedId: 611,
    colorId: 3,
  },
  {
    breedId: 611,
    colorId: 7,
  },
  {
    breedId: 611,
    colorId: 8,
  },
  {
    breedId: 611,
    colorId: 9,
  },
  {
    breedId: 612,
    colorId: 1,
  },
  {
    breedId: 612,
    colorId: 2,
  },
  {
    breedId: 612,
    colorId: 3,
  },
  {
    breedId: 612,
    colorId: 4,
  },
  {
    breedId: 612,
    colorId: 5,
  },
  {
    breedId: 612,
    colorId: 6,
  },
  {
    breedId: 612,
    colorId: 7,
  },
  {
    breedId: 612,
    colorId: 8,
  },
  {
    breedId: 612,
    colorId: 9,
  },
  {
    breedId: 612,
    colorId: 10,
  },
  {
    breedId: 613,
    colorId: 1,
  },
  {
    breedId: 613,
    colorId: 2,
  },
  {
    breedId: 613,
    colorId: 3,
  },
  {
    breedId: 613,
    colorId: 4,
  },
  {
    breedId: 613,
    colorId: 5,
  },
  {
    breedId: 613,
    colorId: 6,
  },
  {
    breedId: 613,
    colorId: 7,
  },
  {
    breedId: 613,
    colorId: 8,
  },
  {
    breedId: 613,
    colorId: 9,
  },
  {
    breedId: 613,
    colorId: 10,
  },
  {
    breedId: 614,
    colorId: 1,
  },
  {
    breedId: 614,
    colorId: 2,
  },
  {
    breedId: 614,
    colorId: 3,
  },
  {
    breedId: 614,
    colorId: 4,
  },
  {
    breedId: 614,
    colorId: 5,
  },
  {
    breedId: 614,
    colorId: 6,
  },
  {
    breedId: 614,
    colorId: 7,
  },
  {
    breedId: 614,
    colorId: 8,
  },
  {
    breedId: 614,
    colorId: 9,
  },
  {
    breedId: 614,
    colorId: 10,
  },
  {
    breedId: 615,
    colorId: 1,
  },
  {
    breedId: 615,
    colorId: 2,
  },
  {
    breedId: 615,
    colorId: 3,
  },
  {
    breedId: 615,
    colorId: 4,
  },
  {
    breedId: 615,
    colorId: 5,
  },
  {
    breedId: 615,
    colorId: 6,
  },
  {
    breedId: 615,
    colorId: 7,
  },
  {
    breedId: 615,
    colorId: 8,
  },
  {
    breedId: 615,
    colorId: 9,
  },
  {
    breedId: 615,
    colorId: 10,
  },
  {
    breedId: 616,
    colorId: 1,
  },
  {
    breedId: 616,
    colorId: 2,
  },
  {
    breedId: 616,
    colorId: 3,
  },
  {
    breedId: 616,
    colorId: 4,
  },
  {
    breedId: 616,
    colorId: 5,
  },
  {
    breedId: 616,
    colorId: 6,
  },
  {
    breedId: 616,
    colorId: 7,
  },
  {
    breedId: 616,
    colorId: 8,
  },
  {
    breedId: 616,
    colorId: 9,
  },
  {
    breedId: 616,
    colorId: 10,
  },
  {
    breedId: 617,
    colorId: 1,
  },
  {
    breedId: 617,
    colorId: 2,
  },
  {
    breedId: 617,
    colorId: 3,
  },
  {
    breedId: 617,
    colorId: 4,
  },
  {
    breedId: 617,
    colorId: 5,
  },
  {
    breedId: 617,
    colorId: 6,
  },
  {
    breedId: 617,
    colorId: 7,
  },
  {
    breedId: 617,
    colorId: 8,
  },
  {
    breedId: 617,
    colorId: 9,
  },
  {
    breedId: 617,
    colorId: 10,
  },
  {
    breedId: 618,
    colorId: 1,
  },
  {
    breedId: 618,
    colorId: 2,
  },
  {
    breedId: 618,
    colorId: 3,
  },
  {
    breedId: 618,
    colorId: 4,
  },
  {
    breedId: 618,
    colorId: 5,
  },
  {
    breedId: 618,
    colorId: 6,
  },
  {
    breedId: 618,
    colorId: 7,
  },
  {
    breedId: 618,
    colorId: 8,
  },
  {
    breedId: 618,
    colorId: 9,
  },
  {
    breedId: 618,
    colorId: 10,
  },
  {
    breedId: 619,
    colorId: 1,
  },
  {
    breedId: 619,
    colorId: 2,
  },
  {
    breedId: 619,
    colorId: 3,
  },
  {
    breedId: 619,
    colorId: 4,
  },
  {
    breedId: 619,
    colorId: 5,
  },
  {
    breedId: 619,
    colorId: 6,
  },
  {
    breedId: 619,
    colorId: 7,
  },
  {
    breedId: 619,
    colorId: 8,
  },
  {
    breedId: 619,
    colorId: 9,
  },
  {
    breedId: 619,
    colorId: 10,
  },
  {
    breedId: 620,
    colorId: 1,
  },
  {
    breedId: 620,
    colorId: 2,
  },
  {
    breedId: 620,
    colorId: 3,
  },
  {
    breedId: 620,
    colorId: 4,
  },
  {
    breedId: 620,
    colorId: 5,
  },
  {
    breedId: 620,
    colorId: 6,
  },
  {
    breedId: 620,
    colorId: 7,
  },
  {
    breedId: 620,
    colorId: 8,
  },
  {
    breedId: 620,
    colorId: 9,
  },
  {
    breedId: 620,
    colorId: 10,
  },
  {
    breedId: 621,
    colorId: 1,
  },
  {
    breedId: 621,
    colorId: 2,
  },
  {
    breedId: 621,
    colorId: 3,
  },
  {
    breedId: 621,
    colorId: 4,
  },
  {
    breedId: 621,
    colorId: 5,
  },
  {
    breedId: 621,
    colorId: 6,
  },
  {
    breedId: 621,
    colorId: 7,
  },
  {
    breedId: 621,
    colorId: 8,
  },
  {
    breedId: 621,
    colorId: 9,
  },
  {
    breedId: 621,
    colorId: 10,
  },
  {
    breedId: 622,
    colorId: 1,
  },
  {
    breedId: 622,
    colorId: 2,
  },
  {
    breedId: 622,
    colorId: 3,
  },
  {
    breedId: 622,
    colorId: 4,
  },
  {
    breedId: 622,
    colorId: 5,
  },
  {
    breedId: 622,
    colorId: 6,
  },
  {
    breedId: 622,
    colorId: 7,
  },
  {
    breedId: 622,
    colorId: 8,
  },
  {
    breedId: 622,
    colorId: 9,
  },
  {
    breedId: 622,
    colorId: 10,
  },
  {
    breedId: 623,
    colorId: 1,
  },
  {
    breedId: 623,
    colorId: 2,
  },
  {
    breedId: 623,
    colorId: 3,
  },
  {
    breedId: 623,
    colorId: 4,
  },
  {
    breedId: 623,
    colorId: 5,
  },
  {
    breedId: 623,
    colorId: 6,
  },
  {
    breedId: 623,
    colorId: 7,
  },
  {
    breedId: 623,
    colorId: 8,
  },
  {
    breedId: 623,
    colorId: 9,
  },
  {
    breedId: 623,
    colorId: 10,
  },
  {
    breedId: 624,
    colorId: 12,
  },
  {
    breedId: 625,
    colorId: 12,
  },
  {
    breedId: 626,
    colorId: 12,
  },
  {
    breedId: 627,
    colorId: 12,
  },
  {
    breedId: 628,
    colorId: 1,
  },
  {
    breedId: 628,
    colorId: 2,
  },
  {
    breedId: 628,
    colorId: 3,
  },
  {
    breedId: 628,
    colorId: 4,
  },
  {
    breedId: 628,
    colorId: 5,
  },
  {
    breedId: 628,
    colorId: 6,
  },
  {
    breedId: 628,
    colorId: 7,
  },
  {
    breedId: 628,
    colorId: 8,
  },
  {
    breedId: 628,
    colorId: 9,
  },
  {
    breedId: 628,
    colorId: 10,
  },
  {
    breedId: 629,
    colorId: 1,
  },
  {
    breedId: 629,
    colorId: 2,
  },
  {
    breedId: 629,
    colorId: 3,
  },
  {
    breedId: 629,
    colorId: 4,
  },
  {
    breedId: 629,
    colorId: 5,
  },
  {
    breedId: 629,
    colorId: 6,
  },
  {
    breedId: 629,
    colorId: 7,
  },
  {
    breedId: 629,
    colorId: 8,
  },
  {
    breedId: 629,
    colorId: 9,
  },
  {
    breedId: 629,
    colorId: 10,
  },
  {
    breedId: 630,
    colorId: 1,
  },
  {
    breedId: 630,
    colorId: 2,
  },
  {
    breedId: 630,
    colorId: 3,
  },
  {
    breedId: 630,
    colorId: 4,
  },
  {
    breedId: 630,
    colorId: 5,
  },
  {
    breedId: 630,
    colorId: 6,
  },
  {
    breedId: 630,
    colorId: 7,
  },
  {
    breedId: 630,
    colorId: 8,
  },
  {
    breedId: 630,
    colorId: 9,
  },
  {
    breedId: 630,
    colorId: 10,
  },
  {
    breedId: 631,
    colorId: 1,
  },
  {
    breedId: 631,
    colorId: 2,
  },
  {
    breedId: 631,
    colorId: 3,
  },
  {
    breedId: 631,
    colorId: 4,
  },
  {
    breedId: 631,
    colorId: 5,
  },
  {
    breedId: 631,
    colorId: 6,
  },
  {
    breedId: 631,
    colorId: 7,
  },
  {
    breedId: 631,
    colorId: 8,
  },
  {
    breedId: 631,
    colorId: 9,
  },
  {
    breedId: 631,
    colorId: 10,
  },
  {
    breedId: 632,
    colorId: 1,
  },
  {
    breedId: 632,
    colorId: 2,
  },
  {
    breedId: 632,
    colorId: 3,
  },
  {
    breedId: 632,
    colorId: 4,
  },
  {
    breedId: 632,
    colorId: 5,
  },
  {
    breedId: 632,
    colorId: 6,
  },
  {
    breedId: 632,
    colorId: 7,
  },
  {
    breedId: 632,
    colorId: 8,
  },
  {
    breedId: 632,
    colorId: 9,
  },
  {
    breedId: 632,
    colorId: 10,
  },
  {
    breedId: 633,
    colorId: 1,
  },
  {
    breedId: 633,
    colorId: 2,
  },
  {
    breedId: 633,
    colorId: 3,
  },
  {
    breedId: 633,
    colorId: 4,
  },
  {
    breedId: 633,
    colorId: 5,
  },
  {
    breedId: 633,
    colorId: 6,
  },
  {
    breedId: 633,
    colorId: 7,
  },
  {
    breedId: 633,
    colorId: 8,
  },
  {
    breedId: 633,
    colorId: 9,
  },
  {
    breedId: 633,
    colorId: 10,
  },
  {
    breedId: 634,
    colorId: 4,
  },
  {
    breedId: 634,
    colorId: 5,
  },
  {
    breedId: 634,
    colorId: 7,
  },
  {
    breedId: 634,
    colorId: 8,
  },
  {
    breedId: 634,
    colorId: 9,
  },
  {
    breedId: 634,
    colorId: 10,
  },
  {
    breedId: 634,
    colorId: 11,
  },
  {
    breedId: 635,
    colorId: 10,
  },
  {
    breedId: 636,
    colorId: 1,
  },
  {
    breedId: 636,
    colorId: 2,
  },
  {
    breedId: 636,
    colorId: 3,
  },
  {
    breedId: 636,
    colorId: 4,
  },
  {
    breedId: 636,
    colorId: 5,
  },
  {
    breedId: 636,
    colorId: 6,
  },
  {
    breedId: 636,
    colorId: 7,
  },
  {
    breedId: 636,
    colorId: 8,
  },
  {
    breedId: 636,
    colorId: 9,
  },
  {
    breedId: 636,
    colorId: 10,
  },
  {
    breedId: 637,
    colorId: 1,
  },
  {
    breedId: 637,
    colorId: 2,
  },
  {
    breedId: 637,
    colorId: 3,
  },
  {
    breedId: 637,
    colorId: 4,
  },
  {
    breedId: 637,
    colorId: 5,
  },
  {
    breedId: 637,
    colorId: 6,
  },
  {
    breedId: 637,
    colorId: 7,
  },
  {
    breedId: 637,
    colorId: 8,
  },
  {
    breedId: 637,
    colorId: 9,
  },
  {
    breedId: 637,
    colorId: 10,
  },
  {
    breedId: 638,
    colorId: 12,
  },
  {
    breedId: 639,
    colorId: 1,
  },
  {
    breedId: 639,
    colorId: 2,
  },
  {
    breedId: 639,
    colorId: 3,
  },
  {
    breedId: 639,
    colorId: 4,
  },
  {
    breedId: 639,
    colorId: 5,
  },
  {
    breedId: 639,
    colorId: 6,
  },
  {
    breedId: 639,
    colorId: 7,
  },
  {
    breedId: 639,
    colorId: 8,
  },
  {
    breedId: 639,
    colorId: 9,
  },
  {
    breedId: 639,
    colorId: 10,
  },
  {
    breedId: 640,
    colorId: 12,
  },
  {
    breedId: 641,
    colorId: 1,
  },
  {
    breedId: 641,
    colorId: 2,
  },
  {
    breedId: 641,
    colorId: 3,
  },
  {
    breedId: 641,
    colorId: 4,
  },
  {
    breedId: 641,
    colorId: 5,
  },
  {
    breedId: 641,
    colorId: 6,
  },
  {
    breedId: 641,
    colorId: 7,
  },
  {
    breedId: 641,
    colorId: 8,
  },
  {
    breedId: 641,
    colorId: 9,
  },
  {
    breedId: 641,
    colorId: 10,
  },
  {
    breedId: 642,
    colorId: 1,
  },
  {
    breedId: 642,
    colorId: 2,
  },
  {
    breedId: 642,
    colorId: 3,
  },
  {
    breedId: 642,
    colorId: 4,
  },
  {
    breedId: 642,
    colorId: 5,
  },
  {
    breedId: 642,
    colorId: 6,
  },
  {
    breedId: 642,
    colorId: 7,
  },
  {
    breedId: 642,
    colorId: 8,
  },
  {
    breedId: 642,
    colorId: 9,
  },
  {
    breedId: 642,
    colorId: 10,
  },
  {
    breedId: 643,
    colorId: 1,
  },
  {
    breedId: 643,
    colorId: 2,
  },
  {
    breedId: 643,
    colorId: 3,
  },
  {
    breedId: 643,
    colorId: 4,
  },
  {
    breedId: 643,
    colorId: 5,
  },
  {
    breedId: 643,
    colorId: 6,
  },
  {
    breedId: 643,
    colorId: 7,
  },
  {
    breedId: 643,
    colorId: 8,
  },
  {
    breedId: 643,
    colorId: 9,
  },
  {
    breedId: 643,
    colorId: 10,
  },
  {
    breedId: 644,
    colorId: 10,
  },
  {
    breedId: 645,
    colorId: 1,
  },
  {
    breedId: 645,
    colorId: 2,
  },
  {
    breedId: 645,
    colorId: 3,
  },
  {
    breedId: 645,
    colorId: 4,
  },
  {
    breedId: 645,
    colorId: 5,
  },
  {
    breedId: 645,
    colorId: 6,
  },
  {
    breedId: 645,
    colorId: 7,
  },
  {
    breedId: 645,
    colorId: 8,
  },
  {
    breedId: 645,
    colorId: 9,
  },
  {
    breedId: 645,
    colorId: 10,
  },
  {
    breedId: 646,
    colorId: 1,
  },
  {
    breedId: 646,
    colorId: 2,
  },
  {
    breedId: 646,
    colorId: 3,
  },
  {
    breedId: 646,
    colorId: 4,
  },
  {
    breedId: 646,
    colorId: 5,
  },
  {
    breedId: 646,
    colorId: 6,
  },
  {
    breedId: 646,
    colorId: 7,
  },
  {
    breedId: 646,
    colorId: 8,
  },
  {
    breedId: 646,
    colorId: 9,
  },
  {
    breedId: 646,
    colorId: 10,
  },
  {
    breedId: 647,
    colorId: 1,
  },
  {
    breedId: 647,
    colorId: 2,
  },
  {
    breedId: 647,
    colorId: 3,
  },
  {
    breedId: 647,
    colorId: 4,
  },
  {
    breedId: 647,
    colorId: 5,
  },
  {
    breedId: 647,
    colorId: 6,
  },
  {
    breedId: 647,
    colorId: 7,
  },
  {
    breedId: 647,
    colorId: 8,
  },
  {
    breedId: 647,
    colorId: 9,
  },
  {
    breedId: 647,
    colorId: 10,
  },
  {
    breedId: 648,
    colorId: 1,
  },
  {
    breedId: 648,
    colorId: 2,
  },
  {
    breedId: 648,
    colorId: 3,
  },
  {
    breedId: 648,
    colorId: 4,
  },
  {
    breedId: 648,
    colorId: 5,
  },
  {
    breedId: 648,
    colorId: 6,
  },
  {
    breedId: 648,
    colorId: 7,
  },
  {
    breedId: 648,
    colorId: 8,
  },
  {
    breedId: 648,
    colorId: 9,
  },
  {
    breedId: 648,
    colorId: 10,
  },
  {
    breedId: 649,
    colorId: 1,
  },
  {
    breedId: 649,
    colorId: 2,
  },
  {
    breedId: 649,
    colorId: 3,
  },
  {
    breedId: 649,
    colorId: 4,
  },
  {
    breedId: 649,
    colorId: 5,
  },
  {
    breedId: 649,
    colorId: 6,
  },
  {
    breedId: 649,
    colorId: 7,
  },
  {
    breedId: 649,
    colorId: 8,
  },
  {
    breedId: 649,
    colorId: 9,
  },
  {
    breedId: 649,
    colorId: 10,
  },
  {
    breedId: 650,
    colorId: 1,
  },
  {
    breedId: 650,
    colorId: 2,
  },
  {
    breedId: 650,
    colorId: 3,
  },
  {
    breedId: 650,
    colorId: 4,
  },
  {
    breedId: 650,
    colorId: 5,
  },
  {
    breedId: 650,
    colorId: 6,
  },
  {
    breedId: 650,
    colorId: 7,
  },
  {
    breedId: 650,
    colorId: 8,
  },
  {
    breedId: 650,
    colorId: 9,
  },
  {
    breedId: 650,
    colorId: 10,
  },
  {
    breedId: 651,
    colorId: 1,
  },
  {
    breedId: 651,
    colorId: 2,
  },
  {
    breedId: 651,
    colorId: 3,
  },
  {
    breedId: 651,
    colorId: 4,
  },
  {
    breedId: 651,
    colorId: 5,
  },
  {
    breedId: 651,
    colorId: 6,
  },
  {
    breedId: 651,
    colorId: 7,
  },
  {
    breedId: 651,
    colorId: 8,
  },
  {
    breedId: 651,
    colorId: 9,
  },
  {
    breedId: 651,
    colorId: 10,
  },
  {
    breedId: 652,
    colorId: 12,
  },
  {
    breedId: 653,
    colorId: 1,
  },
  {
    breedId: 653,
    colorId: 2,
  },
  {
    breedId: 653,
    colorId: 3,
  },
  {
    breedId: 653,
    colorId: 4,
  },
  {
    breedId: 653,
    colorId: 5,
  },
  {
    breedId: 653,
    colorId: 6,
  },
  {
    breedId: 653,
    colorId: 7,
  },
  {
    breedId: 653,
    colorId: 8,
  },
  {
    breedId: 653,
    colorId: 9,
  },
  {
    breedId: 653,
    colorId: 10,
  },
  {
    breedId: 654,
    colorId: 1,
  },
  {
    breedId: 654,
    colorId: 2,
  },
  {
    breedId: 654,
    colorId: 3,
  },
  {
    breedId: 654,
    colorId: 4,
  },
  {
    breedId: 654,
    colorId: 5,
  },
  {
    breedId: 654,
    colorId: 6,
  },
  {
    breedId: 654,
    colorId: 7,
  },
  {
    breedId: 654,
    colorId: 8,
  },
  {
    breedId: 654,
    colorId: 9,
  },
  {
    breedId: 654,
    colorId: 10,
  },
  {
    breedId: 655,
    colorId: 1,
  },
  {
    breedId: 655,
    colorId: 2,
  },
  {
    breedId: 655,
    colorId: 3,
  },
  {
    breedId: 655,
    colorId: 4,
  },
  {
    breedId: 655,
    colorId: 5,
  },
  {
    breedId: 655,
    colorId: 6,
  },
  {
    breedId: 655,
    colorId: 7,
  },
  {
    breedId: 655,
    colorId: 8,
  },
  {
    breedId: 655,
    colorId: 9,
  },
  {
    breedId: 655,
    colorId: 10,
  },
  {
    breedId: 656,
    colorId: 1,
  },
  {
    breedId: 656,
    colorId: 2,
  },
  {
    breedId: 656,
    colorId: 3,
  },
  {
    breedId: 656,
    colorId: 4,
  },
  {
    breedId: 656,
    colorId: 5,
  },
  {
    breedId: 656,
    colorId: 6,
  },
  {
    breedId: 656,
    colorId: 7,
  },
  {
    breedId: 656,
    colorId: 8,
  },
  {
    breedId: 656,
    colorId: 9,
  },
  {
    breedId: 656,
    colorId: 10,
  },
  {
    breedId: 657,
    colorId: 1,
  },
  {
    breedId: 657,
    colorId: 2,
  },
  {
    breedId: 657,
    colorId: 3,
  },
  {
    breedId: 657,
    colorId: 4,
  },
  {
    breedId: 657,
    colorId: 5,
  },
  {
    breedId: 657,
    colorId: 6,
  },
  {
    breedId: 657,
    colorId: 7,
  },
  {
    breedId: 657,
    colorId: 8,
  },
  {
    breedId: 657,
    colorId: 9,
  },
  {
    breedId: 657,
    colorId: 10,
  },
  {
    breedId: 658,
    colorId: 12,
  },
  {
    breedId: 659,
    colorId: 12,
  },
  {
    breedId: 660,
    colorId: 1,
  },
  {
    breedId: 660,
    colorId: 2,
  },
  {
    breedId: 660,
    colorId: 3,
  },
  {
    breedId: 660,
    colorId: 4,
  },
  {
    breedId: 660,
    colorId: 5,
  },
  {
    breedId: 660,
    colorId: 6,
  },
  {
    breedId: 660,
    colorId: 7,
  },
  {
    breedId: 660,
    colorId: 8,
  },
  {
    breedId: 660,
    colorId: 9,
  },
  {
    breedId: 660,
    colorId: 10,
  },
  {
    breedId: 661,
    colorId: 1,
  },
  {
    breedId: 661,
    colorId: 2,
  },
  {
    breedId: 661,
    colorId: 3,
  },
  {
    breedId: 661,
    colorId: 4,
  },
  {
    breedId: 661,
    colorId: 5,
  },
  {
    breedId: 661,
    colorId: 6,
  },
  {
    breedId: 661,
    colorId: 7,
  },
  {
    breedId: 661,
    colorId: 8,
  },
  {
    breedId: 661,
    colorId: 9,
  },
  {
    breedId: 661,
    colorId: 10,
  },
  {
    breedId: 662,
    colorId: 1,
  },
  {
    breedId: 662,
    colorId: 3,
  },
  {
    breedId: 662,
    colorId: 5,
  },
  {
    breedId: 662,
    colorId: 7,
  },
  {
    breedId: 662,
    colorId: 8,
  },
  {
    breedId: 662,
    colorId: 9,
  },
  {
    breedId: 662,
    colorId: 10,
  },
  {
    breedId: 662,
    colorId: 11,
  },
  {
    breedId: 663,
    colorId: 12,
  },
  {
    breedId: 664,
    colorId: 1,
  },
  {
    breedId: 664,
    colorId: 2,
  },
  {
    breedId: 664,
    colorId: 3,
  },
  {
    breedId: 664,
    colorId: 4,
  },
  {
    breedId: 664,
    colorId: 5,
  },
  {
    breedId: 664,
    colorId: 6,
  },
  {
    breedId: 664,
    colorId: 7,
  },
  {
    breedId: 664,
    colorId: 8,
  },
  {
    breedId: 664,
    colorId: 9,
  },
  {
    breedId: 664,
    colorId: 10,
  },
  {
    breedId: 665,
    colorId: 1,
  },
  {
    breedId: 665,
    colorId: 2,
  },
  {
    breedId: 665,
    colorId: 3,
  },
  {
    breedId: 665,
    colorId: 4,
  },
  {
    breedId: 665,
    colorId: 5,
  },
  {
    breedId: 665,
    colorId: 6,
  },
  {
    breedId: 665,
    colorId: 7,
  },
  {
    breedId: 665,
    colorId: 8,
  },
  {
    breedId: 665,
    colorId: 9,
  },
  {
    breedId: 665,
    colorId: 10,
  },
  {
    breedId: 666,
    colorId: 12,
  },
  {
    breedId: 667,
    colorId: 12,
  },
  {
    breedId: 668,
    colorId: 12,
  },
  {
    breedId: 669,
    colorId: 12,
  },
  {
    breedId: 670,
    colorId: 12,
  },
  {
    breedId: 671,
    colorId: 12,
  },
  {
    breedId: 672,
    colorId: 12,
  },
  {
    breedId: 673,
    colorId: 12,
  },
  {
    breedId: 674,
    colorId: 12,
  },
  {
    breedId: 675,
    colorId: 12,
  },
  {
    breedId: 676,
    colorId: 12,
  },
  {
    breedId: 677,
    colorId: 10,
  },
  {
    breedId: 678,
    colorId: 12,
  },
  {
    breedId: 679,
    colorId: 12,
  },
  {
    breedId: 680,
    colorId: 12,
  },
  {
    breedId: 681,
    colorId: 12,
  },
  {
    breedId: 682,
    colorId: 12,
  },
  {
    breedId: 683,
    colorId: 12,
  },
  {
    breedId: 684,
    colorId: 12,
  },
  {
    breedId: 685,
    colorId: 12,
  },
  {
    breedId: 686,
    colorId: 12,
  },
  {
    breedId: 687,
    colorId: 12,
  },
  {
    breedId: 688,
    colorId: 12,
  },
  {
    breedId: 689,
    colorId: 12,
  },
  {
    breedId: 690,
    colorId: 12,
  },
  {
    breedId: 691,
    colorId: 12,
  },
  {
    breedId: 692,
    colorId: 12,
  },
  {
    breedId: 693,
    colorId: 12,
  },
  {
    breedId: 694,
    colorId: 12,
  },
  {
    breedId: 695,
    colorId: 12,
  },
  {
    breedId: 696,
    colorId: 12,
  },
  {
    breedId: 697,
    colorId: 1,
  },
  {
    breedId: 697,
    colorId: 3,
  },
  {
    breedId: 697,
    colorId: 5,
  },
  {
    breedId: 697,
    colorId: 7,
  },
  {
    breedId: 697,
    colorId: 8,
  },
  {
    breedId: 697,
    colorId: 9,
  },
  {
    breedId: 697,
    colorId: 10,
  },
  {
    breedId: 697,
    colorId: 11,
  },
  {
    breedId: 698,
    colorId: 12,
  },
  {
    breedId: 699,
    colorId: 12,
  },
  {
    breedId: 700,
    colorId: 12,
  },
  {
    breedId: 701,
    colorId: 12,
  },
  {
    breedId: 702,
    colorId: 1,
  },
  {
    breedId: 702,
    colorId: 3,
  },
  {
    breedId: 702,
    colorId: 5,
  },
  {
    breedId: 702,
    colorId: 7,
  },
  {
    breedId: 702,
    colorId: 8,
  },
  {
    breedId: 702,
    colorId: 9,
  },
  {
    breedId: 702,
    colorId: 10,
  },
  {
    breedId: 702,
    colorId: 11,
  },
  {
    breedId: 703,
    colorId: 12,
  },
  {
    breedId: 704,
    colorId: 12,
  },
  {
    breedId: 705,
    colorId: 12,
  },
  {
    breedId: 706,
    colorId: 12,
  },
  {
    breedId: 707,
    colorId: 12,
  },
  {
    breedId: 708,
    colorId: 12,
  },
  {
    breedId: 709,
    colorId: 12,
  },
  {
    breedId: 710,
    colorId: 12,
  },
  {
    breedId: 711,
    colorId: 12,
  },
  {
    breedId: 712,
    colorId: 12,
  },
  {
    breedId: 713,
    colorId: 12,
  },
  {
    breedId: 714,
    colorId: 12,
  },
  {
    breedId: 715,
    colorId: 12,
  },
  {
    breedId: 716,
    colorId: 12,
  },
  {
    breedId: 717,
    colorId: 12,
  },
  {
    breedId: 718,
    colorId: 12,
  },
  {
    breedId: 719,
    colorId: 12,
  },
  {
    breedId: 720,
    colorId: 12,
  },
  {
    breedId: 721,
    colorId: 12,
  },
  {
    breedId: 722,
    colorId: 12,
  },
  {
    breedId: 723,
    colorId: 12,
  },
  {
    breedId: 724,
    colorId: 12,
  },
  {
    breedId: 725,
    colorId: 12,
  },
  {
    breedId: 726,
    colorId: 12,
  },
  {
    breedId: 727,
    colorId: 12,
  },
  {
    breedId: 728,
    colorId: 12,
  },
  {
    breedId: 729,
    colorId: 12,
  },
  {
    breedId: 730,
    colorId: 1,
  },
  {
    breedId: 730,
    colorId: 3,
  },
  {
    breedId: 730,
    colorId: 5,
  },
  {
    breedId: 730,
    colorId: 7,
  },
  {
    breedId: 730,
    colorId: 8,
  },
  {
    breedId: 730,
    colorId: 9,
  },
  {
    breedId: 730,
    colorId: 10,
  },
  {
    breedId: 730,
    colorId: 11,
  },
  {
    breedId: 731,
    colorId: 12,
  },
  {
    breedId: 732,
    colorId: 12,
  },
  {
    breedId: 733,
    colorId: 1,
  },
  {
    breedId: 733,
    colorId: 3,
  },
  {
    breedId: 733,
    colorId: 5,
  },
  {
    breedId: 733,
    colorId: 7,
  },
  {
    breedId: 733,
    colorId: 8,
  },
  {
    breedId: 733,
    colorId: 9,
  },
  {
    breedId: 733,
    colorId: 10,
  },
  {
    breedId: 733,
    colorId: 11,
  },
  {
    breedId: 734,
    colorId: 12,
  },
  {
    breedId: 735,
    colorId: 12,
  },
  {
    breedId: 736,
    colorId: 12,
  },
  {
    breedId: 737,
    colorId: 12,
  },
  {
    breedId: 738,
    colorId: 12,
  },
  {
    breedId: 739,
    colorId: 12,
  },
  {
    breedId: 740,
    colorId: 12,
  },
  {
    breedId: 741,
    colorId: 12,
  },
  {
    breedId: 742,
    colorId: 12,
  },
  {
    breedId: 743,
    colorId: 12,
  },
  {
    breedId: 744,
    colorId: 12,
  },
  {
    breedId: 745,
    colorId: 12,
  },
  {
    breedId: 746,
    colorId: 12,
  },
  {
    breedId: 747,
    colorId: 12,
  },
  {
    breedId: 748,
    colorId: 12,
  },
  {
    breedId: 749,
    colorId: 1,
  },
  {
    breedId: 749,
    colorId: 2,
  },
  {
    breedId: 749,
    colorId: 3,
  },
  {
    breedId: 749,
    colorId: 4,
  },
  {
    breedId: 749,
    colorId: 5,
  },
  {
    breedId: 749,
    colorId: 6,
  },
  {
    breedId: 749,
    colorId: 7,
  },
  {
    breedId: 749,
    colorId: 8,
  },
  {
    breedId: 749,
    colorId: 9,
  },
  {
    breedId: 749,
    colorId: 10,
  },
  {
    breedId: 750,
    colorId: 12,
  },
  {
    breedId: 751,
    colorId: 12,
  },
  {
    breedId: 752,
    colorId: 12,
  },
  {
    breedId: 753,
    colorId: 12,
  },
  {
    breedId: 754,
    colorId: 12,
  },
  {
    breedId: 755,
    colorId: 12,
  },
  {
    breedId: 756,
    colorId: 12,
  },
  {
    breedId: 757,
    colorId: 1,
  },
  {
    breedId: 757,
    colorId: 2,
  },
  {
    breedId: 758,
    colorId: 12,
  },
  {
    breedId: 759,
    colorId: 12,
  },
  {
    breedId: 760,
    colorId: 12,
  },
  {
    breedId: 761,
    colorId: 12,
  },
  {
    breedId: 762,
    colorId: 12,
  },
  {
    breedId: 763,
    colorId: 12,
  },
  {
    breedId: 764,
    colorId: 12,
  },
  {
    breedId: 765,
    colorId: 12,
  },
  {
    breedId: 766,
    colorId: 12,
  },
  {
    breedId: 767,
    colorId: 12,
  },
  {
    breedId: 768,
    colorId: 12,
  },
  {
    breedId: 769,
    colorId: 12,
  },
  {
    breedId: 770,
    colorId: 12,
  },
  {
    breedId: 771,
    colorId: 12,
  },
  {
    breedId: 772,
    colorId: 12,
  },
  {
    breedId: 773,
    colorId: 12,
  },
  {
    breedId: 774,
    colorId: 12,
  },
  {
    breedId: 775,
    colorId: 12,
  },
  {
    breedId: 776,
    colorId: 12,
  },
  {
    breedId: 777,
    colorId: 12,
  },
  {
    breedId: 778,
    colorId: 12,
  },
  {
    breedId: 779,
    colorId: 12,
  },
  {
    breedId: 780,
    colorId: 12,
  },
  {
    breedId: 781,
    colorId: 12,
  },
  {
    breedId: 782,
    colorId: 12,
  },
  {
    breedId: 783,
    colorId: 12,
  },
  {
    breedId: 784,
    colorId: 12,
  },
  {
    breedId: 785,
    colorId: 12,
  },
  {
    breedId: 786,
    colorId: 12,
  },
  {
    breedId: 787,
    colorId: 12,
  },
  {
    breedId: 788,
    colorId: 12,
  },
  {
    breedId: 789,
    colorId: 12,
  },
  {
    breedId: 790,
    colorId: 12,
  },
  {
    breedId: 791,
    colorId: 1,
  },
  {
    breedId: 791,
    colorId: 3,
  },
  {
    breedId: 791,
    colorId: 5,
  },
  {
    breedId: 791,
    colorId: 7,
  },
  {
    breedId: 791,
    colorId: 8,
  },
  {
    breedId: 791,
    colorId: 9,
  },
  {
    breedId: 791,
    colorId: 10,
  },
  {
    breedId: 791,
    colorId: 11,
  },
  {
    breedId: 792,
    colorId: 12,
  },
  {
    breedId: 793,
    colorId: 12,
  },
  {
    breedId: 794,
    colorId: 12,
  },
  {
    breedId: 795,
    colorId: 12,
  },
  {
    breedId: 796,
    colorId: 12,
  },
  {
    breedId: 797,
    colorId: 12,
  },
  {
    breedId: 798,
    colorId: 12,
  },
  {
    breedId: 799,
    colorId: 12,
  },
  {
    breedId: 800,
    colorId: 12,
  },
  {
    breedId: 801,
    colorId: 1,
  },
  {
    breedId: 801,
    colorId: 2,
  },
  {
    breedId: 801,
    colorId: 3,
  },
  {
    breedId: 801,
    colorId: 4,
  },
  {
    breedId: 801,
    colorId: 5,
  },
  {
    breedId: 801,
    colorId: 6,
  },
  {
    breedId: 801,
    colorId: 7,
  },
  {
    breedId: 801,
    colorId: 8,
  },
  {
    breedId: 801,
    colorId: 9,
  },
  {
    breedId: 801,
    colorId: 10,
  },
  {
    breedId: 802,
    colorId: 12,
  },
  {
    breedId: 803,
    colorId: 12,
  },
  {
    breedId: 804,
    colorId: 12,
  },
  {
    breedId: 805,
    colorId: 12,
  },
  {
    breedId: 806,
    colorId: 12,
  },
  {
    breedId: 807,
    colorId: 12,
  },
  {
    breedId: 808,
    colorId: 12,
  },
  {
    breedId: 809,
    colorId: 12,
  },
  {
    breedId: 810,
    colorId: 12,
  },
  {
    breedId: 811,
    colorId: 12,
  },
  {
    breedId: 812,
    colorId: 12,
  },
  {
    breedId: 813,
    colorId: 12,
  },
  {
    breedId: 814,
    colorId: 12,
  },
  {
    breedId: 815,
    colorId: 12,
  },
  {
    breedId: 816,
    colorId: 12,
  },
  {
    breedId: 817,
    colorId: 12,
  },
  {
    breedId: 818,
    colorId: 1,
  },
  {
    breedId: 818,
    colorId: 3,
  },
  {
    breedId: 818,
    colorId: 5,
  },
  {
    breedId: 818,
    colorId: 7,
  },
  {
    breedId: 818,
    colorId: 8,
  },
  {
    breedId: 818,
    colorId: 9,
  },
  {
    breedId: 818,
    colorId: 10,
  },
  {
    breedId: 818,
    colorId: 11,
  },
  {
    breedId: 819,
    colorId: 12,
  },
  {
    breedId: 820,
    colorId: 12,
  },
  {
    breedId: 821,
    colorId: 10,
  },
  {
    breedId: 822,
    colorId: 12,
  },
  {
    breedId: 823,
    colorId: 12,
  },
  {
    breedId: 824,
    colorId: 12,
  },
  {
    breedId: 825,
    colorId: 12,
  },
  {
    breedId: 826,
    colorId: 12,
  },
  {
    breedId: 827,
    colorId: 12,
  },
  {
    breedId: 828,
    colorId: 12,
  },
  {
    breedId: 829,
    colorId: 12,
  },
  {
    breedId: 830,
    colorId: 12,
  },
  {
    breedId: 831,
    colorId: 12,
  },
  {
    breedId: 832,
    colorId: 12,
  },
  {
    breedId: 833,
    colorId: 12,
  },
  {
    breedId: 834,
    colorId: 12,
  },
  {
    breedId: 835,
    colorId: 12,
  },
  {
    breedId: 836,
    colorId: 12,
  },
  {
    breedId: 837,
    colorId: 1,
  },
  {
    breedId: 837,
    colorId: 3,
  },
  {
    breedId: 837,
    colorId: 5,
  },
  {
    breedId: 837,
    colorId: 7,
  },
  {
    breedId: 837,
    colorId: 8,
  },
  {
    breedId: 837,
    colorId: 9,
  },
  {
    breedId: 837,
    colorId: 10,
  },
  {
    breedId: 837,
    colorId: 11,
  },
  {
    breedId: 838,
    colorId: 12,
  },
  {
    breedId: 839,
    colorId: 12,
  },
  {
    breedId: 840,
    colorId: 12,
  },
  {
    breedId: 841,
    colorId: 12,
  },
  {
    breedId: 842,
    colorId: 12,
  },
  {
    breedId: 843,
    colorId: 4,
  },
  {
    breedId: 843,
    colorId: 5,
  },
  {
    breedId: 843,
    colorId: 7,
  },
  {
    breedId: 843,
    colorId: 8,
  },
  {
    breedId: 843,
    colorId: 9,
  },
  {
    breedId: 843,
    colorId: 10,
  },
  {
    breedId: 843,
    colorId: 11,
  },
  {
    breedId: 844,
    colorId: 4,
  },
  {
    breedId: 844,
    colorId: 5,
  },
  {
    breedId: 844,
    colorId: 7,
  },
  {
    breedId: 844,
    colorId: 8,
  },
  {
    breedId: 844,
    colorId: 9,
  },
  {
    breedId: 844,
    colorId: 10,
  },
  {
    breedId: 844,
    colorId: 11,
  },
  {
    breedId: 845,
    colorId: 12,
  },
  {
    breedId: 846,
    colorId: 4,
  },
  {
    breedId: 846,
    colorId: 5,
  },
  {
    breedId: 846,
    colorId: 7,
  },
  {
    breedId: 846,
    colorId: 8,
  },
  {
    breedId: 846,
    colorId: 9,
  },
  {
    breedId: 846,
    colorId: 10,
  },
  {
    breedId: 846,
    colorId: 11,
  },
  {
    breedId: 847,
    colorId: 12,
  },
  {
    breedId: 848,
    colorId: 4,
  },
  {
    breedId: 848,
    colorId: 5,
  },
  {
    breedId: 848,
    colorId: 7,
  },
  {
    breedId: 848,
    colorId: 8,
  },
  {
    breedId: 848,
    colorId: 9,
  },
  {
    breedId: 848,
    colorId: 10,
  },
  {
    breedId: 848,
    colorId: 11,
  },
  {
    breedId: 849,
    colorId: 4,
  },
  {
    breedId: 849,
    colorId: 5,
  },
  {
    breedId: 849,
    colorId: 7,
  },
  {
    breedId: 849,
    colorId: 8,
  },
  {
    breedId: 849,
    colorId: 9,
  },
  {
    breedId: 849,
    colorId: 10,
  },
  {
    breedId: 849,
    colorId: 11,
  },
  {
    breedId: 850,
    colorId: 4,
  },
  {
    breedId: 850,
    colorId: 5,
  },
  {
    breedId: 850,
    colorId: 7,
  },
  {
    breedId: 850,
    colorId: 8,
  },
  {
    breedId: 850,
    colorId: 9,
  },
  {
    breedId: 850,
    colorId: 10,
  },
  {
    breedId: 850,
    colorId: 11,
  },
  {
    breedId: 851,
    colorId: 4,
  },
  {
    breedId: 851,
    colorId: 5,
  },
  {
    breedId: 851,
    colorId: 7,
  },
  {
    breedId: 851,
    colorId: 8,
  },
  {
    breedId: 851,
    colorId: 9,
  },
  {
    breedId: 851,
    colorId: 10,
  },
  {
    breedId: 851,
    colorId: 11,
  },
  {
    breedId: 852,
    colorId: 4,
  },
  {
    breedId: 852,
    colorId: 5,
  },
  {
    breedId: 852,
    colorId: 7,
  },
  {
    breedId: 852,
    colorId: 8,
  },
  {
    breedId: 852,
    colorId: 9,
  },
  {
    breedId: 852,
    colorId: 10,
  },
  {
    breedId: 852,
    colorId: 11,
  },
  {
    breedId: 853,
    colorId: 1,
  },
  {
    breedId: 853,
    colorId: 2,
  },
  {
    breedId: 854,
    colorId: 12,
  },
  {
    breedId: 855,
    colorId: 4,
  },
  {
    breedId: 855,
    colorId: 5,
  },
  {
    breedId: 855,
    colorId: 7,
  },
  {
    breedId: 855,
    colorId: 8,
  },
  {
    breedId: 855,
    colorId: 9,
  },
  {
    breedId: 855,
    colorId: 10,
  },
  {
    breedId: 855,
    colorId: 11,
  },
  {
    breedId: 856,
    colorId: 4,
  },
  {
    breedId: 856,
    colorId: 5,
  },
  {
    breedId: 856,
    colorId: 7,
  },
  {
    breedId: 856,
    colorId: 8,
  },
  {
    breedId: 856,
    colorId: 9,
  },
  {
    breedId: 856,
    colorId: 10,
  },
  {
    breedId: 856,
    colorId: 11,
  },
  {
    breedId: 857,
    colorId: 4,
  },
  {
    breedId: 857,
    colorId: 5,
  },
  {
    breedId: 857,
    colorId: 7,
  },
  {
    breedId: 857,
    colorId: 8,
  },
  {
    breedId: 857,
    colorId: 9,
  },
  {
    breedId: 857,
    colorId: 10,
  },
  {
    breedId: 857,
    colorId: 11,
  },
  {
    breedId: 858,
    colorId: 4,
  },
  {
    breedId: 858,
    colorId: 5,
  },
  {
    breedId: 858,
    colorId: 7,
  },
  {
    breedId: 858,
    colorId: 8,
  },
  {
    breedId: 858,
    colorId: 9,
  },
  {
    breedId: 858,
    colorId: 10,
  },
  {
    breedId: 858,
    colorId: 11,
  },
  {
    breedId: 859,
    colorId: 4,
  },
  {
    breedId: 859,
    colorId: 5,
  },
  {
    breedId: 859,
    colorId: 7,
  },
  {
    breedId: 859,
    colorId: 8,
  },
  {
    breedId: 859,
    colorId: 9,
  },
  {
    breedId: 859,
    colorId: 10,
  },
  {
    breedId: 859,
    colorId: 11,
  },
  {
    breedId: 860,
    colorId: 4,
  },
  {
    breedId: 860,
    colorId: 5,
  },
  {
    breedId: 860,
    colorId: 7,
  },
  {
    breedId: 860,
    colorId: 8,
  },
  {
    breedId: 860,
    colorId: 9,
  },
  {
    breedId: 860,
    colorId: 10,
  },
  {
    breedId: 860,
    colorId: 11,
  },
  {
    breedId: 861,
    colorId: 4,
  },
  {
    breedId: 861,
    colorId: 5,
  },
  {
    breedId: 861,
    colorId: 7,
  },
  {
    breedId: 861,
    colorId: 8,
  },
  {
    breedId: 861,
    colorId: 9,
  },
  {
    breedId: 861,
    colorId: 10,
  },
  {
    breedId: 861,
    colorId: 11,
  },
  {
    breedId: 862,
    colorId: 4,
  },
  {
    breedId: 862,
    colorId: 5,
  },
  {
    breedId: 862,
    colorId: 7,
  },
  {
    breedId: 862,
    colorId: 8,
  },
  {
    breedId: 862,
    colorId: 9,
  },
  {
    breedId: 862,
    colorId: 10,
  },
  {
    breedId: 862,
    colorId: 11,
  },
  {
    breedId: 863,
    colorId: 4,
  },
  {
    breedId: 863,
    colorId: 5,
  },
  {
    breedId: 863,
    colorId: 7,
  },
  {
    breedId: 863,
    colorId: 8,
  },
  {
    breedId: 863,
    colorId: 9,
  },
  {
    breedId: 863,
    colorId: 10,
  },
  {
    breedId: 863,
    colorId: 11,
  },
  {
    breedId: 864,
    colorId: 4,
  },
  {
    breedId: 864,
    colorId: 5,
  },
  {
    breedId: 864,
    colorId: 7,
  },
  {
    breedId: 864,
    colorId: 8,
  },
  {
    breedId: 864,
    colorId: 9,
  },
  {
    breedId: 864,
    colorId: 10,
  },
  {
    breedId: 864,
    colorId: 11,
  },
  {
    breedId: 865,
    colorId: 4,
  },
  {
    breedId: 865,
    colorId: 5,
  },
  {
    breedId: 865,
    colorId: 7,
  },
  {
    breedId: 865,
    colorId: 8,
  },
  {
    breedId: 865,
    colorId: 9,
  },
  {
    breedId: 865,
    colorId: 10,
  },
  {
    breedId: 865,
    colorId: 11,
  },
  {
    breedId: 866,
    colorId: 4,
  },
  {
    breedId: 866,
    colorId: 5,
  },
  {
    breedId: 866,
    colorId: 7,
  },
  {
    breedId: 866,
    colorId: 8,
  },
  {
    breedId: 866,
    colorId: 9,
  },
  {
    breedId: 866,
    colorId: 10,
  },
  {
    breedId: 866,
    colorId: 11,
  },
  {
    breedId: 867,
    colorId: 4,
  },
  {
    breedId: 867,
    colorId: 5,
  },
  {
    breedId: 867,
    colorId: 7,
  },
  {
    breedId: 867,
    colorId: 8,
  },
  {
    breedId: 867,
    colorId: 9,
  },
  {
    breedId: 867,
    colorId: 10,
  },
  {
    breedId: 867,
    colorId: 11,
  },
  {
    breedId: 868,
    colorId: 4,
  },
  {
    breedId: 868,
    colorId: 5,
  },
  {
    breedId: 868,
    colorId: 7,
  },
  {
    breedId: 868,
    colorId: 8,
  },
  {
    breedId: 868,
    colorId: 9,
  },
  {
    breedId: 868,
    colorId: 10,
  },
  {
    breedId: 868,
    colorId: 11,
  },
  {
    breedId: 869,
    colorId: 4,
  },
  {
    breedId: 869,
    colorId: 5,
  },
  {
    breedId: 869,
    colorId: 7,
  },
  {
    breedId: 869,
    colorId: 8,
  },
  {
    breedId: 869,
    colorId: 9,
  },
  {
    breedId: 869,
    colorId: 10,
  },
  {
    breedId: 869,
    colorId: 11,
  },
  {
    breedId: 870,
    colorId: 4,
  },
  {
    breedId: 870,
    colorId: 5,
  },
  {
    breedId: 870,
    colorId: 7,
  },
  {
    breedId: 870,
    colorId: 8,
  },
  {
    breedId: 870,
    colorId: 9,
  },
  {
    breedId: 870,
    colorId: 10,
  },
  {
    breedId: 870,
    colorId: 11,
  },
  {
    breedId: 871,
    colorId: 10,
  },
  {
    breedId: 872,
    colorId: 10,
  },
  {
    breedId: 873,
    colorId: 12,
  },
  {
    breedId: 874,
    colorId: 12,
  },
  {
    breedId: 875,
    colorId: 12,
  },
  {
    breedId: 876,
    colorId: 4,
  },
  {
    breedId: 876,
    colorId: 5,
  },
  {
    breedId: 876,
    colorId: 7,
  },
  {
    breedId: 876,
    colorId: 8,
  },
  {
    breedId: 876,
    colorId: 9,
  },
  {
    breedId: 876,
    colorId: 10,
  },
  {
    breedId: 876,
    colorId: 11,
  },
  {
    breedId: 877,
    colorId: 1,
  },
  {
    breedId: 877,
    colorId: 3,
  },
  {
    breedId: 877,
    colorId: 5,
  },
  {
    breedId: 877,
    colorId: 7,
  },
  {
    breedId: 877,
    colorId: 8,
  },
  {
    breedId: 877,
    colorId: 9,
  },
  {
    breedId: 877,
    colorId: 10,
  },
  {
    breedId: 877,
    colorId: 11,
  },
  {
    breedId: 878,
    colorId: 12,
  },
  {
    breedId: 879,
    colorId: 12,
  },
  {
    breedId: 880,
    colorId: 1,
  },
  {
    breedId: 880,
    colorId: 3,
  },
  {
    breedId: 880,
    colorId: 5,
  },
  {
    breedId: 880,
    colorId: 7,
  },
  {
    breedId: 880,
    colorId: 8,
  },
  {
    breedId: 880,
    colorId: 9,
  },
  {
    breedId: 880,
    colorId: 10,
  },
  {
    breedId: 880,
    colorId: 11,
  },
  {
    breedId: 881,
    colorId: 10,
  },
  {
    breedId: 882,
    colorId: 12,
  },
  {
    breedId: 883,
    colorId: 12,
  },
  {
    breedId: 884,
    colorId: 12,
  },
  {
    breedId: 885,
    colorId: 1,
  },
  {
    breedId: 885,
    colorId: 3,
  },
  {
    breedId: 885,
    colorId: 5,
  },
  {
    breedId: 885,
    colorId: 7,
  },
  {
    breedId: 885,
    colorId: 8,
  },
  {
    breedId: 885,
    colorId: 9,
  },
  {
    breedId: 885,
    colorId: 10,
  },
  {
    breedId: 885,
    colorId: 11,
  },
  {
    breedId: 886,
    colorId: 12,
  },
];

async function seedBreedColors() {
  for (const breedColor of breedColors) {
    const newBreedColor = await prisma.breedColor.create({
      data: breedColor,
    });
    console.log(`Created new breedColor: breedId ${newBreedColor.breedId}, colorId ${newBreedColor.colorId}`);
  }
}

export default seedBreedColors;
