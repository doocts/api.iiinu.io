FROM node:18-alpine3.16
WORKDIR /api

RUN yarn global add @nestjs/cli
