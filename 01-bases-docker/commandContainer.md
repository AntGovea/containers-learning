### creaar contenedor con variables de entorno y volumen

´´´
docker container run --name world-db -e MARIADB_USER=example-user -e MARIADB_PASSWORD=user-password -e MARIADB_ROOT_PASSWORD=root-secret-password -e MARIADB_DATABASE=world-db  --volume world-db:/var/lib/mysql  -dp 3306:3306 mariadb:jammy
´´´



### descargar imagen de php my admin 
´´
docker container run --name phpmyadmin -d -e  PMA_ARBITRARY=1 ^ -p 8080:80 phpmyadmin:5.2.0-apache 
´´