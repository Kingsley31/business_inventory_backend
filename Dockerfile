FROM node:18.17.1-bullseye

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .
RUN pnpm run build
CMD ["pnpm", "start:prod"]
