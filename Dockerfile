FROM node:20-bullseye AS build

WORKDIR /app

COPY package*.json ./

# Install build dependencies
RUN apt-get update && apt-get install -y build-essential

# Use pre-built Sharp package
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

RUN npm install --ignore-scripts puppeteer
RUN npm rebuild sharp

COPY . .

RUN npm run build

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
