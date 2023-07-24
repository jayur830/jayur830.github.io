FROM node:16-alpine as base
RUN npm i -g pnpm

FROM base as builder
WORKDIR /usr/app
COPY . .
RUN pnpm i
RUN pnpm build

FROM node:16-alpine
WORKDIR /usr/app
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/dist ./dist
ENTRYPOINT ["node", "dist/src/main"]