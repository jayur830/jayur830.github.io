FROM node:16-alpine as base
RUN npm i -g pnpm turbo

FROM base
WORKDIR /usr/app
COPY ./apps/be ./apps/be
COPY ./packages ./packages
COPY ./.npmrc ./.npmrc
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY ./turbo.json ./turbo.json
RUN pnpm i
RUN turbo run build --filter be
ENTRYPOINT ["turbo", "run", "prod", "--filter", "be"]