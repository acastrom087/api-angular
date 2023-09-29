# Etapa de compilación
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g @angular/cli
COPY . .
RUN ng build --configuration=production

# Etapa de producción
FROM nginx:1.21-alpine
COPY --from=build /app/dist/api /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




