const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Book, validate } = require("../models/books");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/all-books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/upload-books", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let book = new Book({
    bookTitle: req.body.bookTitle,
    authorName: req.body.authorName,
    imageURL: req.body.imageURL,
    category: req.body.category,
    bookDescription: req.body.bookDescription,
    bookPdfURL: req.body.bookPdfURL,
  });
  book = await book.save();
  console.log(book);
  res.send(book);
});

router.put("/update-books/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const book = await Book.findByIdAndUpdate(
    new mongoose.Types.ObjectId(req.params.id),
    {
      bookTitle: req.body.bookTitle,
      authorName: req.body.authorName,
      imageURL: req.body.imageURL,
      category: req.body.category,
      bookDescription: req.body.bookDescription,
      bookPdfURL: req.body.bookPdfURL,
    },
    { new: true }
  );

  if (!book)
    return res.status(404).send("The book with the given ID was not found.");

  res.send(book);
});

router.delete("/delete/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(
    new mongoose.Types.ObjectId(req.params.id)
  );

  if (!book)
    return res.status(404).send("The book with the given ID was not found.");

  res.send(book);
});

router.get("/book/:id", async (req, res) => {
  const book = await Book.findById(new mongoose.Types.ObjectId(req.params.id));

  if (!book)
    return res.status(404).send("The book with the given ID was not found.");

  res.json(book); // Use only res.json() here
});

module.exports = router;
