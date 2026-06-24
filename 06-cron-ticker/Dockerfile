# Dependecias de desarrollo
FROM node:19-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Build y Tests
FROM node:19-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Dependencias de produccion
FROM  node:19-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Ejecutar la aplicacion
FROM  node:19-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY  app.js  ./
COPY  tasks ./tasks

# comando run de la imagen
CMD ["node","app.js"]




