FROM node:16-alpine as builder
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build

FROM node:16-alpine
# ENV NODE_ENV=development
# ENV PORT=4000
# ENV MONGO_URL=mongodb+srv://jayur830:wlfkfgksek95+@cluster0.fqivw.mongodb.net/gh-page?retryWrites=true&w=majority
WORKDIR /usr/app
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/dist ./dist
# EXPOSE 4000
ENTRYPOINT ["node", "dist/main"]