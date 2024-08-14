const express = require("express");
const mongoose = require("mongoose");
const app = express();
const book = require("./routes/books");
const cors = require("cors");
const user = require("./routes/users");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", book);
app.use("/auth", user);

mongoose
  .connect("mongodb://localhost/book")
  .then(() => console.log("Server is running"))
  .catch((error) => console.log("Failed to connect to the server", error));

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port ${port}`);
});
