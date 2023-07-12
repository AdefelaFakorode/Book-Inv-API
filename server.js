const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();
const { query } = require("./database");

// middleware
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`Request: ${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory API...");
});

// get list of all books
app.get("/books", async (req, res) => {
  try {
    const allBooks = await query("SELECT * FROM books");
    res.status(200).json(allBooks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get a specific book
app.get("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  try {
    const book = await query("SELECT * FROM books WHERE id = $1", [bookId]);
    if (book.rows.length > 0) {
      res.status(200).json(book.rows[0]);
    } else {
      res.status(404).json({ message: "Book not found, sorry!" });
    }
  } catch (error) {
    console.error("Something went wrong...", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// create a new book
app.post("/books", async (req, res) => {
  const { title, author, isbn, availability } = req.body;
  try {
    const newBook = await query(
      `INSERT INTO books (title, author, isbn, availability) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, author, isbn, availability]
    );
    res.status(201).json(newBook.rows[0]);
  } catch (error) {
    console.error("Something went wrong...", error);
    res.status(500).json({ error: "Internal Server Error..." });
  }
});

// update a book
app.patch("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, availability } = req.body;
  try {
    const bookUpdated = await query(
      `UPDATE books SET title = $1, author = $2, isbn = $3, availability = $4 WHERE id = $5 RETURNING *`,
      [title, author, isbn, availability, id]
    );
    res.json(bookUpdated.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error...");
  }
});

// delete a book
app.delete("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  try {
    const deleteOp = await query("DELETE FROM books WHERE id = $1", [
      bookId,
    ]);
    if (deleteOp.rowCount > 0) {
      res.status(200).send({ message: "Book deleted successfully..." });
    } else {
      res.status(404).send({ message: "Book not found..." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error...");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
