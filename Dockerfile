FROM node:20.15.0 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run format
RUN npm run build

# Étape 2 : Servir l'application avec un serveur nginx
FROM nginx:1.19.0
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
