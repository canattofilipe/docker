Concepts
=========

**Process:** Abstraction that represents a program in execution.

**Container:** Wrap a process/program, or set of process/programs that run isolately and share the computer host
resources, as kernel, binaries and libraries.

- A container should stores everything a program needs: code, tools and dependencies.
- A container should isolate the program in your enviroment and guarantee the same behavior in different enviroments as development and production.

**Docker:** Docker is a tool to manage containers.
Containerzation was no created by docker, it already existed in linux ecosystem, the docker just has enabled easy creation and manage of containers through dockerfile and interfaces as RESP API and CLI.

**Docker Images:** 

- It is a model to create containers.
- It can be stored in repositories as `Docker Hub <https://hub.docker.com/>`_.
- It uses AUFS (Advanced multi-layered unification filesystem)
- It is composed by layers.
- Each layer represents a change/commit.
- A layer can be called intermediary image.
- Only the last layer can be modified, it is created at container startup.
- Layers make images high reusable.
- It is possible build images from layers of other images.

**Docker Image Vs Docker Container:** Docker images can be compared as classes and docker containers as objects.

Why Don't use A Virtual Machine
-------------------------------

Image you need a isolated web service to retrieve information about your clients. This system was develop using Java 8, TomCat server and MySQL database.

**With Virtual Machine**: You install a new virtual machine, it will have its own operation system complete, with kernel, 
binaries, libraries and graphical interface, then you deploy your system with its dependencies (JDK 1.8, TomCat and MySQL). The amount of memory used isn't trivial and can get worse if multiples virtual machines are necessary.

**With Container**: You create a dockerfile describing you container, it will have you code and its dependencies (JDK 1.8, TomCat and MySQL), then you build container. The container will share host operacional system resources as kernel, binaries and libraries. The amount of memory used is trivial because expensive resources are being shared.