
FROM node:18.12-alpine

WORKDIR /app/

COPY ./package.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate