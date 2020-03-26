Network
=======

- Each container has its own IP.
- By default the container are in the same network, but it can be changed.
- The default docker network model is bridge, it uses it to acess  the host network.

Network Types:
--------------

- None: The container do not uses network.
- Bridge (default): Uses the host operational system network by bridge abstraction.
- Host: Uses the host operational as it is.
- Overlay (swarn): It is used in cluster context.

**Setting up a container with network type none:**

.. code:: bash

  docker container run --rm --net none alpine ash -c "ifconfig"

Result:

.. code:: bash

  lo      Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

