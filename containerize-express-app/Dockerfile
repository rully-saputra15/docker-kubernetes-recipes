FROM node:22

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

COPY src/index.js src/index.js

EXPOSE 3000
CMD ["pnpm", "start"]