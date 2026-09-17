# Stage 1: Build
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["/entrypoint.sh"]
