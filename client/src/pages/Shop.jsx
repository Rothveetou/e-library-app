import React, { useEffect, useState } from "react";
import BookCards from "../components/Book/BookCards";
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => setBooks(data))
      .catch((err) =>
        console.error("There was a problem with the fetch operation", err)
      );
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center leading-snug mb-10 md:text-4xl lg:text-5xl">
        All Books are here
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <BookCards book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
