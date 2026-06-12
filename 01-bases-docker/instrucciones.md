Montar la imagen de MariaDB con el tag jammy, publicar en el puerto 3306 del contenedor con el puerto 3306 de nuestro equipo, colocarle el nombre al contenedor de world-db (--name world-db) y definir las siguientes variables de entorno:

MARIADB_USER=example-user
MARIADB_PASSWORD=user-password
MARIADB_ROOT_PASSWORD=root-secret-password
MARIADB_DATABASE=world-db
Conectarse usando Table Plus a la base de datos con las credenciales del usuario (NO EL ROOT)

Conectarse a la base de datos world-db

Ejecutar el query de creación de tablas e inserción proporcionado

Revisar que efectivamente tengamos la data