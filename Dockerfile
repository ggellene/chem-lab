FROM node:6-alpine AS build

WORKDIR app
COPY . .

RUN npm i --log-level=error
RUN npm test

EXPOSE 8080
ENV NODE_ENV "testing"

CMD ["npm", "run", "dev"]
