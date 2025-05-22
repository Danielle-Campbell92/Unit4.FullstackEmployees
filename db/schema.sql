DROP TABLE IF EXISTS employees;

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birthday DATE DEFAULT now() NOT NULL,
    salary INTEGER NOT NULL
);
