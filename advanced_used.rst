Advanced Usage
==============

Build an image from a Dockerfile:
docker image build -t ex-simple-build ./primeiro_build

Start a container from just create image:
docker container run -p 80:80 ex-simple-build
