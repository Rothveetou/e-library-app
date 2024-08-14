const mongoose = require("mongoose");
const Joi = require("joi");

const bookSchema = new mongoose.Schema({
  bookTitle: { type: String, minlength: 5, maxlength: 255, required: true },
  authorName: { type: String, minlength: 5, maxlength: 255, required: true },
  imageURL: { type: String, minlength: 5, maxlength: 255, required: true },
  category: { type: String, minlength: 5, maxlength: 255, required: true },
  bookDescription: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true,
  },
  bookPdfURL: { type: String, minlength: 5, maxlength: 255, required: true },
});

const Book = mongoose.model("books-data", bookSchema);
function validateBook(book) {
  const schema = Joi.object({
    bookTitle: Joi.string().min(5).max(255).required(),
    authorName: Joi.string().min(5).max(255).required(),
    imageURL: Joi.string().min(5).max(255).required(),
    category: Joi.string().min(5).max(255).required(),
    bookDescription: Joi.string().min(5).max(255).required(),
    bookPdfURL: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(book);
}

exports.Book = Book;
exports.validate = validateBook;
