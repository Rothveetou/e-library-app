import BookSlider from "./BookSlider";

function BookCards({ books, headline }) {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      <BookSlider books={books} />
    </div>
  );
}

export default BookCards;
