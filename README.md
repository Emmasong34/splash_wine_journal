# Project Name
Splash Wine Journal


# Description
Duration: two week sprint

This project is a full stack react/redux application that serves as an alternative to pen and paper notetaking for a user who is a novice wine taster. The guided flavor note format helps guide the user through the pallet exercise.


## Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Create database and table
Create a new database called `splash_wine_app` and create a `user` table and a `wine`:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

`CREATE TABLE "wine" (
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
    "notes" VARCHAR (500) `
);

# Installation 
1. Once the database is created, run npm install to install dependencies
2. Run npm run server in your terminal to start your server
3. Run npm run client in your terminal to start your client side

# Usage
1. User may log in or register an account
2. On the Wine List page, users are able to see an overview of the wines they have previously added
3. Users may choose to view full details or add a new wine
4. From the full details page, users may edit or delete wines to keep their Wine List up to date



