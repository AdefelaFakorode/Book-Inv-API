const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const createTableQuery = ` 
CREATE TABLE IF NOT EXISTS bookinv (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  author VARCHAR(50) NOT NULL,
  isbn VARCHAR(50) NOT NULL,
  availability VARCHAR(50) NOT NULL
);
`;

const createTable = async () => {
  try {
    await pool.query(createTableQuery);
    console.log("Table was created successfully...");
  } catch (err) {
    console.error("Error executing query...", err.stack);
  }
};

createTable();

module.exports = {
  query: (text, params, callback) => {
    console.log("QUERY:", text, params || "");
    return pool.query(text, params, callback);
  },
};