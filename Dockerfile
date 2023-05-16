FROM node:16 as builder

WORKDIR /vite

COPY package*.json ./
RUN npm ci


COPY *config.*js ./
COPY *config*.json ./
COPY src ./src
COPY *.html ./
COPY public ./public

RUN npm run build

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder vite/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]