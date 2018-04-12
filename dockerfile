FROM node:alpine

WORKDIR /api

RUN apk update

COPY . .

CMD [ "node", "./index.js" ]