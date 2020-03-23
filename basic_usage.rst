comandos:
docker: é um comando de help, mostra as opções de uso


https://docs.docker.com/engine/reference/run/
subindo um container: sudo docker container run hello-world
Essa comanda agrupa outros:
docker image pull-  faz download da imagem apartir do repo
docker container create - cria um container
docker container start - inicializa um container
docker container exec - executa um container

criando um comtainer debian e verificando a versao do bash:
sudo docker run debian bash --version

verifica o status dos container:
sudo docker container ps (mostra todos os containers em execucao)
sudo docker container ps -a (mostra todos os containers)

roda um container e depois remove do historico:
sudo docker run --rm debian bash --version

Cria um container usando as as flag -it (i = modo interativo, t = terminal)
sudo docker container run -it debian bash

Criando um container com nome:
sudo docker container run --name mydeb -it debian bash

Reutilizando um container:
docker container ls (lista os container ativos)
docker container ls -ai (lista todos os containers)
revivendo um container ja criado:
docker container start -ai mydeb (a = attack, i = interativo)









