import { useEffect, useState } from "react";
import BookSliderCards from "./BookSliderCards";

function BestSellingBook() {
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
        setBooks(data.slice(0, 3));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <BookSliderCards books={books} headline="Best Seller Books" />
    </div>
  );
}

export default BestSellingBook;
