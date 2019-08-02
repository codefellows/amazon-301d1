# PostgreSQL Shell Cheat Sheet

## Starting the server
*You must do this every time you restart your machine*
```
$ brew services start postgres
```

## Creating a user-default database
```
$ createdb
<!-- This will create a new database with the same name as your user login -->
<!-- You only have to do this once -->

$ createdb twitter
<!-- This will create a new database called twitter, which can contain many individual tables -->
```

## Starting the postgres shell
```
$ psql

sjschmidt=# # this is your sql shell prompt
<!-- With no arguments, `psql` will start the shell at your user-default database -->

$ psql twitter

twitter=#
<!-- This will start the shell at our twitter database -->
```

## Quit the postgres shell
```
sjschmidt=# \q

$
```

## Basic shell navigation
#### List all of your databases
```
sjschmidt=# \l

List of databases
Name    |   Owner   | Encoding |   Collate   |    Ctype    |    Access privileges
-----------+-----------+----------+-------------+-------------+----------
movies    | sjschmidt | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
sjschmidt | sjschmidt | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
(2 rows)

```

#### Connect to a database
```
sjschmidt=# \c movies
You are now connected to database "movies" as user "sjschmidt".
movies=# \c sjschmidt
You are now connected to database "sjschmidt" as user "sjschmidt".
```

#### List all relations (tables) in the database
```
sjschmidt=# \dt

List of relations
Schema |   Name   | Type  |   Owner
--------+----------+-------+-----------
public | articles | table | sjschmidt
public | authors  | table | sjschmidt
(4 rows)
```

#### Display the schema configuration (column properties)
```
sjschmidt=# \d articles

Table "public.authors"
Column   |          Type          |       Modifiers
-----------+------------------------+-----------------------
author_id | integer                | not null default
author    | character varying(255) | not null
author_url | character varying(255) |
Indexes:
  "authors_pkey" PRIMARY KEY, btree (author_id)
```
