FROM node:18-alpine as base

RUN mkdir /app
WORKDIR /app

COPY . ./
RUN yarn

FROM base as builder

RUN yarn
RUN yarn build

ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD yarn start