Concepts
=========

| **Process:** Abstraction that represents a program in execution.
| **Container:** Wrap a process/program, or set of process/programs that run isolately and share the computer host 
resources, as kernel, binaries and libraries.

- A container should stores everything a program needs: code, tools and dependencies.
- A container should isolate the program in your enviroment and guarantee the same behavior in different enviroments
as development and production.

| **Docker:** Docker is a tool to manage containers. 
Containerzation was no created by docker, it already existed in linux ecosystem, the docker just has enabled easy creation and manage of containers through dockerfile and interfaces as RESP API and CLI.


| **Docker Images:** 
- It is a model to create containers.
- It can be stored in repositories as `Docker Hub <https://hub.docker.com/>`_.
- It uses AUFS (Advanced multi-layered unification filesystem)
- It is composed by layers.
- Each layer represents a change/commit.
- A Layer can be called intermediary image.
- Only the last layer can be modified, it is created at container startup.
- Layers make images high reusable.
- It is possible build images from layers of other images.

| **Porque não usar uma VM:** O ganho que sem tem ao usar docker ao invés de uma VM é a economia de recursos
computacionais, uma VM terá seu pŕoprio sistema operacional completo, com kernel, bibliotecas e softwares padrões (por exemplo o gedit, nano, interface gráfica ...).
Colocar tudo isso em memoria é pagar um custo alto. Quando se usa docker se isola ambientes de uma maneira mais eficiente colocando
dentro do container apenas oque faz sentido, imagine que seu container precisa conter um web-service que devolve informações de clientes, o container 
precisaria apenas de um distribuição linux Ubuntu, TomCat, o respectivo .jar e um banco de dados. Isso já seria o suficiente para isolar um ambiente e garantir que ele funcione em qualquer outro sistema operacional baseado em Linux.
