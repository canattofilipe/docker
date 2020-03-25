Advanced Usage
==============

Build an image from a Dockerfile, then start it as a container:

.. code:: bash

  docker image build -t ex-simple-build ./primeiro_build
  docker container run -p 80:80 ex-simple-build

Build an image passing arguments:

.. code:: bash

  docker image build --build-arg S3_BUCKET=myapp -t ex-build-args ./build_com_args
  docker container run ex-build-args bash -c 'echo $S3_BUCKET'

Filter informations with docker inspect:

.. code:: bash

  docker image inspect --format="{{index .Config.Labels \"maintener\"}}" ex-build-args

Build an image usign copy instruction:

.. code:: bash

  docker image build -t ex-build-copy ./build_com_copy/
  curl http://localhost:80

Build and run a container with a http python server:

.. code:: bash

  docker image build -t ex-build-dev ./build-dev/
  docker container run -it -v /home/canattofilipe/dev/github/docker/build_dev/:/app -p 80:8000 --name python-server ex-build-dev

Build and run a container to read logs from other container volume:

.. code:: bash

  docker container run -it --volumes-from=python-server debian  tail -f /log/http-server.log
