FROM node:22

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

ENV PORT=4500
ENV APP_NAME="My Awesome Application"

CMD ["pnpm", "start"]