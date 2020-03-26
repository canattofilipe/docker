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

Setting up a container with network type none:
----------------------------------------------

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

Setting up a container with network type bridge:
------------------------------------------------

**Inspect informations about bridge default configurations:**

.. code:: bash

  docker network inspect bridge

**Test Conectivity between containers by ping:**

.. code:: bash

  # run container1
  docker container run -d --name container1 alpine sleep 1000
  # exec instruction at container1
  docker container exec -it container1 ifconfig

Result:

.. code:: bash

  eth0    Link encap:Ethernet  HWaddr 02:42:AC:11:00:02  
          inet addr:172.17.0.2  Bcast:172.17.255.255  Mask:255.255.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:43 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:6425 (6.2 KiB)  TX bytes:0 (0.0 B)

  lo      Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

.. code:: bash

  # run container2
  docker container run -d --name container2 alpine sleep 1000
  # exec instruction at container1
  docker container exec -it container2 ifconfig

Result:

.. code:: bash

  eth0    Link encap:Ethernet  HWaddr 02:42:AC:11:00:03  
          inet addr:172.17.0.3  Bcast:172.17.255.255  Mask:255.255.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:33 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:4872 (4.7 KiB)  TX bytes:0 (0.0 B)

  lo      Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

.. code:: bash

  # Test conectivy between container1 and container2
  docker container exec -it container1 ping 172.17.0.3

Result:

.. code:: bash

  PING 172.17.0.3 (172.17.0.3): 56 data bytes
  64 bytes from 172.17.0.3: seq=0 ttl=64 time=0.095 ms  
  64 bytes from 172.17.0.3: seq=1 ttl=64 time=0.150 ms
  64 bytes from 172.17.0.3: seq=2 ttl=64 time=0.178 ms