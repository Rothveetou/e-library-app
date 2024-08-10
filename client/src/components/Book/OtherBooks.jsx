import { useEffect, useState } from "react";

import BookCards from "./BookSliderCards";

function OtherBooks() {
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
        setBooks(data.slice(4, 12));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
}

export default OtherBooks;
