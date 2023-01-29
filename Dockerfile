FROM node:16-alpine as builder
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine
ENV NODE_ENV=development
ENV PORT=4000
WORKDIR /usr/app
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/dist ./dist
EXPOSE 4000
ENTRYPOINT ["node", "dist/main"]