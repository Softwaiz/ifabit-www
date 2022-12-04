FROM node:alpine as base

RUN mkdir -p /app
WORKDIR /app

FROM base as deps

COPY package.json .
COPY yarn.lock .

RUN yarn

FROM deps as builder

WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/yarn.lock /app/yarn.lock
COPY --from=deps /app/package.json /app/package.json
COPY public /app/public
COPY src /app/src
RUN ls /app/src

RUN yarn build

FROM base  as runner

WORKDIR /app

COPY --from=builder /app/build /app/build
COPY package.json .

RUN yarn global add serve

ENV PORT=80
EXPOSE 80
CMD yarn run deploy