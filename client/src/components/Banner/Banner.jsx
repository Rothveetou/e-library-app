import BannerCard from "./BannerCard";

function Banner() {
  return (
    <div className="px-4 lg:px-24 my-40 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-3/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
          </h2>
          <p className="md:w-4/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:border-black transition-all ease-in duration-200 rounded mx-4">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 space-y-6">
        <BannerCard />
      </div>
    </div>
  );
}

export default Banner;
