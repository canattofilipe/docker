Network
=======

- Each container has its own IP
- By default the container are in the same network, but it can be changed
- The default docker network model is bridge, it uses it to acess  the host network.

Network Types:
--------------

- None: The container do not uses the network
- Bridge (default): Uses the host operational system network by bridge abstraction
- Host: Uses the host operational as it is
- Overlay (swarn): It is used in cluster context

