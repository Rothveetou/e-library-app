import { Card } from "flowbite-react";

function BookCards({ book }) {
  return (
    <div>
      <Card className="max-w-sm">
        <img src={book.imageURL} alt={book.bookTitle} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {book.bookTitle}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {book.bookDescription}
        </p>

        <button className="bg-blue-700 font-semibold text-white py-2 rounded">
          Buy now
        </button>
      </Card>
    </div>
  );
}

export default BookCards;
