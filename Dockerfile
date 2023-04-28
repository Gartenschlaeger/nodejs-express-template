# build
FROM node:16-alpine AS build

WORKDIR /build

COPY . .

RUN npm i -g pnpm
RUN pnpm install && pnpm build
RUN pnpm install --prod

# generate production image
FROM node:16-alpine

WORKDIR /app

COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist .

ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["node", "main.js"]
