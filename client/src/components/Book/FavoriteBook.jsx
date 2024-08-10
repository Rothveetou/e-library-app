import { Link } from "react-router-dom";

function FavoriteBook() {
  return (
    <div className="px-4 py-8 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2 sm:w-fit">
        <img
          src="./vite.svg"
          alt="Image"
          className="w-full md:w-10/12 rounded sm:w-screen"
        />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 loading-snug">
          Find Your Favorite<span className="text-blue-700"> Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4
           my-14"
        >
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="textbase">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">600+</h3>
            <p className="textbase">User Registered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1500+</h3>
            <p className="textbase">PDF Downloaded</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white py-2 px-5 font-semibold rounded hover:bg-black transition-all ease-in duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavoriteBook;
