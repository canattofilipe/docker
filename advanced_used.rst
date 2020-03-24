Advanced Usage
==============

Build an image from a Dockerfile, then start it as a container:
.. code:: bash

  docker image build -t ex-simple-build ./primeiro_build
  docker container run -p 80:80 ex-simple-build
