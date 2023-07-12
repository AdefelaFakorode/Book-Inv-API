Assignment: Building a Book Inventory Management API

Objective: Create a Book Inventory Management API using Node.js, Express.js, and PostgreSQL to perform CRUD operations on book data.

Instructions:

Set up a Node.js project with Express.js and PostgreSQL.

Initialize a new Node.js project using npm or yarn.
Install the necessary dependencies such as Express.js and the PostgreSQL library (pg).
Set up a basic Express.js server.
Create a PostgreSQL database and set up the necessary tables.

Using the psql command-line utility or a database management tool like DBeaver or pgAdmin, create a new PostgreSQL database for the book inventory management.
Design the necessary tables to store book data. For example, you can have a table named books with columns such as id, title, author, genre, and quantity. Be mindful of the data types and constraints when creating the tables.
Implement the API endpoints to perform CRUD operations on books.

Set up the necessary Express.js routes and handlers to handle CRUD operations.
Create a route to retrieve all books from the database (GET /books).
Create a route to retrieve a specific book by ID from the database (GET /books/:id).
Create a route to add a new book to the database (POST /books).
Create a route to update a book by ID in the database (PATCH /books/:id).
Create a route to delete a book by ID from the database (DELETE /books/:id).
Use SQL queries to interact with the PostgreSQL database and perform the necessary CRUD operations.
Test the API endpoints using Postman.

Use Postman or any API testing tool to send requests to the API endpoints. (add screenshots in the repo README of your sucessful API calls)
Test each endpoint (GET, POST, PATCH, DELETE) with different scenarios to ensure they function correctly.
Verify that the API endpoints are correctly interacting with the PostgreSQL database and returning the expected results.


Deliverable:

A Node.js and Express.js application with the PostgreSQL database connection established.
The "books" table created in the PostgreSQL database.
CRUD routes implemented for the bookstore inventory API.
Successful test results from Postman, including valid request responses.
