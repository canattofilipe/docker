Postgres container:
-------------------

List all databases:

.. code:: bash

  docker-compose exec db psql -U postgres -c '\l'
  
Run a check script:

.. code:: bash

  docker-compose exec db psql -U postgres -f ./scripts/check.sql
  
  Scale:

.. code:: bash

  docker-compose up --scale worker=3
  
 Log Scaled Container:

.. code:: bash

  docker-compose logs -f -t worker
