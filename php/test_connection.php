<?php

var_dump(
    pg_connect("
        host=localhost
        port=5432
        dbname=postgres
        user=postgres
        password=200303
    ")
);

// Returns the PgSQL\Connection object if the connection is successful.
// Otherwise, returns false
?>