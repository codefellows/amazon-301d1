# Structured Query Language Cheat Sheet

## Working with Tables
#### Creating a new table
```sql
CREATE TABLE IF NOT EXISTS
users(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(256) NOT NULL,
  last_name VARCHAR(256) NOT NULL,
  ssn INTEGER NOT NULL,
  ninja_status BOOLEAN NOT NULL,
  biography TEXT NOT NULL
);
```

#### Deleting a table
```sql
DROP TABLE users;
```

## Working with Records
#### Reading all record from the DB
```sql
SELECT * FROM users;
```

#### Reading a specific record from the DB
```sql
SELECT * FROM users WHERE id=3;
```

#### Inserting a new record
```sql
INSERT INTO users(first_name, last_name, ssn, ninja_status, biography)
VALUES('Flibbity', 'Jibbit', 333-44-5555, TRUE, "By the time of the Meiji Restoration (1868), the tradition of the shinobi had become a topic of popular imagination and mystery in Japan. Ninja figured prominently in legend and folklore, where they were associated with legendary abilities such as invisibility, walking on water and control over the natural elements. As a consequence, their perception in popular culture is often based on such legend and folklore than on the spies of the Sengoku period.");
```

#### Updating an existing record
```sql
UPDATE users
SET
  first_name="Flibbity",
  last_name="Jibbit",
  ssn=333-44-5555,
  ninja_status=FALSE, -- We changed this value!!
  biography="By the time of the Meiji Restoration (1868), the tradition of the shinobi had become a topic of popular imagination and mystery in Japan. Ninja figured prominently in legend and folklore, where they were associated with legendary abilities such as invisibility, walking on water and control over the natural elements. As a consequence, their perception in popular culture is often based on such legend and folklore than on the spies of the Sengoku period."
WHERE id=3;
```

#### Deleting a record from the DB
```sql
DELETE FROM users WHERE id=3;
```
