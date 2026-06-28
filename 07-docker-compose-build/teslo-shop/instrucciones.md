# utilizar docker compose usando parte del dockerfile
´´´
build:
      context: . //dideccion
      target: ${STAGE} //stage
      dockerfile: Dockerfile //de que archivo, puede ser otro docker file
´´´

# usar diferentes stage in docker compose
´´´
target: dev //el stage del dockerfile a utilizar
´´´
    
# hacer uso de diferentes docker compose dev y prod
(https://docs.docker.com/compose/how-tos/production/)example doc

´´´
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up
´´´
# crear una imagen que solo cree nuestro contenedor perzonlaizado y no la base de datos
´´´
docker compose -f docker-compose.prod.yml build app
´´´

# subir imagen de teslo-shop a dockerhub
´´´
docker push antgovea/teslo-shop:latest
´´´

