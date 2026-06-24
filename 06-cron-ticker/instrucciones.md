## creacion de imagen por medio de dockerfile
## subir imagen a dockerhub
## bajar y usar imagen de dockerfile
## test y pruebas automaticas de codigo
## crear imagen multiplataforma 
```
docker buildx build --platform  linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v8  -t antgovea/cron-ticker2:oso --push .

```
 