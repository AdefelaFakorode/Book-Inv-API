const express = require("express"); //importing express module
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory API...");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});