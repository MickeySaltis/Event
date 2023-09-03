# La première étape
# Construire les fichiers statiques de React
FROM node:20-alpine as build
# FROM node:13.12.0-alpine as build


WORKDIR /app/frontend
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --silent
COPY ./frontend/ ./
RUN npm run build

# La deuxième étape
# Copier les fichiers statiques de React et démarrer nginx
# Copie le produit final de la 1ere étape (fichiers statique) sans les fichier de dépendance (node_modules)
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]