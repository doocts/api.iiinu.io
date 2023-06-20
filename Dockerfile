FROM node:18-alpine3.16
WORKDIR /api

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

COPY . .
CMD ["yarn", "start"]
