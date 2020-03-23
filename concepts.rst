Concepts
=========

| **Process:** Abstraction that represents a program in execution.
| **Container:** Wrap a process/program, or set of process/programs that run isolately and share the computer host 
resources, as kernel, binaries and libraries.

| A container should stores everything a program needs: code, tools and dependencies.
| A container should isolate the program in your enviroment and guarantee the same behavior in different enviroments
as development and production.

| **Docker:** Docker is a tool to manage containers. Containerzation was no created by docker, it already existed in linux ecosystem,
the docker just has enabled easy creation and manage of container through dockerfile and interfaces as RESP API and CLI.

| **Imagens Docker:** 
| Um modelo para se criar containers.
| Podem ser armazenadas em repositorios, por exemplo o docker hub.
| É composto por camadas/layers.
| Cada camada representa uma ou mais mudanças no sistema de arquivos.
| Uma camada também é chamada de imagem intermediaria.
| Apenas a ultima camada pode ser alterada depois da inicialização do container.
| Usa o AUFS (Advanced multi-layered unification filesystem)
| O beneficio das camadas é permitir o reuso
| É possivel compor imagens apartir de camadas de outras imagens.

| **Porque não usar uma VM:** O ganho que sem tem ao usar docker ao invés de uma VM é a economia de recursos
computacionais, uma VM terá seu pŕoprio sistema operacional completo, com kernel, bibliotecas e softwares padrões (por exemplo o gedit, nano, interface gráfica ...).
Colocar tudo isso em memoria é pagar um custo alto. Quando se usa docker se isola ambientes de uma maneira mais eficiente colocando
dentro do container apenas oque faz sentido, imagine que seu container precisa conter um web-service que devolve informações de clientes, o container 
precisaria apenas de um distribuição linux Ubuntu, TomCat, o respectivo .jar e um banco de dados. Isso já seria o suficiente para isolar um ambiente e garantir que ele funcione em qualquer outro sistema operacional baseado em Linux.
