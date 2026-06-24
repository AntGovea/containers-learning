# /app /usr /lib
FROM --platform=$BUILDPLATFORM node:19-alpine3.16 
# FROM - node:19-alpine3.16 
ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log
# cd /app
WORKDIR /app

# dest /app
COPY package.json ./

# instalar dependencias
COPY . .

RUN npm install


RUN npm run test

# eliminar dependecias y directortios no necesarios en producción
RUN rm -rf tests && rm -rf node_modules

# Unicamente las dependencias de produccion
RUN npm install --prod 

# Comando run de la imagen
CMD ["node","app.js"]



