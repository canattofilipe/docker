Postgres container:
-------------------

List all databases:

.. code:: bash

  docker-compose exec db psql -U postgres -c '\l'
  
Run a check script:

.. code:: bash

  docker-compose exec db psql -U postgres -f ./scripts/check.sql
