FROM node:10-alpine as buid-step

RUN mkdir -p /app

WORkDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#second step

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/zaito /usr/share/nginx/html
