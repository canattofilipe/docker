Docker Basic Usage
==================

Commands
--------

**docker run**: 
The `docker run <https://docs.docker.com/engine/reference/run/>`_ method is a shotcurt of 4 other commands:

- `docker pull <https://docs.docker.com/engine/reference/commandline/pull//>`_.: Download an image from repository.
- `docker container create <https://docs.docker.com/engine/reference/commandline/container_create/>`_.: Create a new container.
- `docker container start <https://docs.docker.com/engine/reference/commandline/container_start/>`_.: Start a container.
- `docker container exec <https://docs.docker.com/engine/reference/commandline/container_exec/>`_.: Execute a command in a running container.

docker run:
-----------
**Start a new container:** 

.. code:: bash

  docker container run hello-world

**Create a new debian container and check its bash version:** 

.. code:: bash

  docker run debian bash --version

**Create a new debian container and, then check its bash version, then remove it:** 

.. code:: bash

  docker run --rm debian bash --version

**Create a new debian container with iterative and terminal flags** 

.. code:: bash

 docker container run -it debian bash

**Create a new debian container with name flag** 

.. code:: bash

 docker container run --name mydeb -it debian bash

docker start:
-------------

**Reusing a container with attach and iterative flags:**

.. code:: bash

 docker container start -ai mydeb

docker container ps:
--------------------

**Show all containers in execution:**

.. code:: bash

  docker container ps

**Show all containers:**

.. code:: bash

  docker container ps -a