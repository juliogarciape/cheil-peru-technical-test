FROM node:22.6.0-bullseye

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY prisma ./prisma

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start:dev"]
