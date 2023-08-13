-- Drop the 'kickgame' database if it already exists
DROP DATABASE IF EXISTS kickgame;
-- Create a new database named 'kickgame'
CREATE DATABASE kickgame;

-- Connect to the 'kickgame' database
\c kickgame

-- Drop the 'kicks' table if it already exists
DROP TABLE IF EXISTS kicks;

-- Create a new table named 'kicks'
CREATE TABLE kicks (
    -- Define an auto-incrementing primary key column 'id'
    id SERIAL PRIMARY KEY,
    -- Define a 'name' column with text data type that cannot be null
    name TEXT NOT NULL,
    -- Define a 'brand' column with text data type that cannot be null
    brand TEXT NOT NULL,
    -- Define a 'price' column with a numeric data type with 5 total digits and 2 decimal places
    price NUMERIC(5, 2),
    -- Define a 'release_date' column with a date data type
    release_date DATE
);
