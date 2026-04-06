FROM node:22-alpine AS build

WORKDIR /app 
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN npm install -g pnpm
RUN pnpm install

COPY . .
COPY public public

RUN pnpm run build

FROM nginx:1.27.0 

COPY --from=build /app/dist /usr/share/nginx/html