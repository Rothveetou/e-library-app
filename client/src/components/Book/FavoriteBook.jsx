import { useEffect, useState } from "react";
import BookCards from "./BookCards";

function FavoriteBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
}

export default FavoriteBook;
