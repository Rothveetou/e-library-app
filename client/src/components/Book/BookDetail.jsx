import { useLoaderData } from "react-router-dom";

function BookDetail() {
  const { _id, bookTitle, imageURL } = useLoaderData();
  return (
    <div className="mt-20 px-4 lg:px-24">
      <img src={imageURL} alt={bookTitle} className="w-96" />
    </div>
  );
}

export default BookDetail;
