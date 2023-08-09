DROP DATABASE IF EXISTS kickgame;
CREATE DATABASE kickgame;

\c kickgame

DROP TABLE IF EXISTS kicks;

CREATE TABLE kicks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    price NUMERIC(5, 2),
    release_date DATE
);

