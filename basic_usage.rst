Docker Basic Usage
==================

**docker run**: 
The `docker run <https://docs.docker.com/engine/reference/run/>`_ method is a shotcurt of 4 other commands:

- `docker pull <https://docs.docker.com/engine/reference/commandline/pull//>`_.: Download an image from repository.
- `docker container create <https://docs.docker.com/engine/reference/commandline/container_create/>`_.: Create a new container.
- `docker container start <https://docs.docker.com/engine/reference/commandline/container_start/>`_.: Start a container.
- `docker container exec <https://docs.docker.com/engine/reference/commandline/container_exec/>`_.: Execute a command in a running container.

docker run:
-----------
Create and start a new container: 

.. code:: bash

  docker container run hello-world

Create a new debian container and check its bash version:

.. code:: bash

  docker run debian bash --version

Create a new debian container, then check its bash version, then remove it:

.. code:: bash

  docker run --rm debian bash --version

Create a new debian container with iterative and terminal flags

.. code:: bash

 docker container run -it debian bash

Create a new debian container with name flag

.. code:: bash

 docker container run --name mydeb -it debian bash

docker start:
-------------

Reuse an existing container with attach and iterative flags:

.. code:: bash

 docker container start -ai mydeb

docker container ps:
--------------------

Show all containers in execution:

.. code:: bash

  docker container ps

Show all containers:

.. code:: bash

  docker container ps -a

Mapping:
--------

**Map container port:**

Create a new container with nginx server, then map the container port 80 to a host operational system port 8080:

.. code:: bash

  docker container run -p 8080:80 nginx

to test it, open a new terminal and type:

.. code:: bash

  curl http://localhost:8080

**Map container directory:**

Create a new container with nginx server, then map a container directory to a host directory:

.. code:: bash

  docker container run -p 8080:80 -v /home/canattofilipe/dev/curso-docker/exercicio-volume/html/:/usr/share/nginx/html/ nginx


Managing container execution:
------------------------------

Create and execute a container in background/daemon mode:

.. code:: bash

     docker container run -d --name ex-daemon-basic -p 8080:80 -v /home/canattofilipe/dev/curso-docker/exercicio-volume/html/:/usr/share/nginx/html/ nginx


Stop a container in background/daemon mode:

.. code:: bash

     docker container stop ex-daemon-basic

Start an existing container in background/daemon mode:

.. code:: bash

     docker container start ex-daemon-basic

Restart an existing container in background/daemon mode:

.. code:: bash

     docker container restart ex-daemon-basic

Visualize a running container logs:

.. code:: bash

     docker container logs ex-daemon-basic

Inspect a running container:

.. code:: bash

     docker container inspect ex-daemon-basic

Execute a command in a running container:

.. code:: bash

     docker container exec ex-daemon-basic uname -or


Managing Images:
----------------------
List images:

.. code:: bash

     docker image ls

Remove Image:

.. code:: bash

     docker image rm <IMAGE_ID>

List volumes:
-------------

.. code:: bash

     docker volume ls