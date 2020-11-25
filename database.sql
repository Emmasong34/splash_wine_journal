
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



CREATE TABLE "wine" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user", 
    "winery" VARCHAR (100) NOT NULL,
    "variety" VARCHAR (100) NOT NULL,
    "name" VARCHAR (100) NOT NULL,
    "rating" VARCHAR(100) NOT NULL,
    "year" VARCHAR(100),
    "price" VARCHAR(100),
    "fruity" VARCHAR (20),
    "floral" VARCHAR (20),
    "nutty" VARCHAR (20),
    "earthy" VARCHAR (20),
    "herby" VARCHAR (20),
    "spicy" VARCHAR (20),
    "other" VARCHAR (20),
    "overall" VARCHAR (20),
    "notes" VARCHAR (500) 
);