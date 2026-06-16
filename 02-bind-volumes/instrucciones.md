# docker container run --name nest-app -w /app  -p 80:3000  -v "$(pwd)":/app  node:16-alpine3.16 sh -C "yarn install && yarn start:dev"
# docker container run --name nest-app -w /app  -p 80:3000  "-v ${pwd}:/app"  node:16-alpine3.16 sh -C "yarn install && yarn start:dev"
# docker container run ^--name nest-app ^-w /app ^-p 80:3000 ^-v "%cd%":/app ^node:18-alpine3.16 ^sh -c "yarn install && yarn start:dev"
# docker container run --name nest-app -w /app -p 80:3000 -v %cd%:/app node:18.20.8-alpine sh -c "yarn install && yarn start:dev"
<!-- Poweshell -->
# docker container run --name nest-app -w /app -dp 80:3000 -v ${PWD}:/app node:18-alpine3.18 sh -c "yarn install && yarn start:dev"