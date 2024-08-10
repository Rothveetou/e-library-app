const express = require("express");
const mongoose = require("mongoose");
const app = express();
const book = require("./routes/books");
const cors = require("cors");
const { required } = require("joi");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/", book);

mongoose
  .connect("mongodb://localhost/book")
  .then(() => console.log("Server is running"))
  .catch((error) => console.log("Failed to connect to the server", error));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
