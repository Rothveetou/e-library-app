import Banner from "../components/Banner/Banner";
import FavoriteBook from "../components/Book/FavoriteBook";

function Home() {
  return (
    <div>
      <div className="h-screen">
        <Banner />
        <FavoriteBook />
      </div>
    </div>
  );
}

export default Home;
