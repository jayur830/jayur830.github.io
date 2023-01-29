FROM node:16-alpine as builder
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /usr/app
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/.env.production ./.env.production
EXPOSE 4000
ENTRYPOINT ["node", "dist/main"]