FROM node:18-alpine3.16 AS builder
WORKDIR /api

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
RUN yarn install --frozen-lockfile

COPY . .

RUN npx prisma generate

ENV NODE_ENV=production
RUN yarn build

FROM node:18-alpine3.16
WORKDIR /api

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
RUN yarn install --prod --frozen-lockfile

COPY --from=builder /api/dist ./dist

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
