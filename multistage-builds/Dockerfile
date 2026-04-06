FROM node:22-alpine AS build

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json tsconfig.json

RUN npm install -g pnpm
RUN pnpm install
COPY src src

RUN pnpm build

FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json tsconfig.json

RUN npm install -g pnpm
RUN pnpm install --prod

FROM gcr.io/distroless/nodejs22

WORKDIR /app

COPY --from=deps /app/node_modules node_modules
COPY --from=build /app/dist dist

ENV PORT=4500

CMD ["dist/index.js"]

