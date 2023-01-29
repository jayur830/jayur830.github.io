FROM node:16-alpine as builder
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine
WORKDIR /usr/app
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/dist ./dist
ENTRYPOINT ["node", "dist/main"]