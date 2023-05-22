# Building stage
FROM node:14.17.6 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.21.1-alpine
COPY --from=builder /app/dist/phone-book-front /usr/share/nginx/html
