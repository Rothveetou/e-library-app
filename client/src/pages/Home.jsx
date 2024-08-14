import Banner from "../components/Banner/Banner";
import PromoBanner from "../components/Banner/PromoBanner";
import BestSellingBook from "../components/Book/BestSellingBook";
import FavoriteBook from "../components/Book/FavoriteBook";
import OtherBooks from "../components/Book/OtherBooks";
import Review from "../components/Review/Review";

function Home() {
  return (
    <div className="w-screen mb-40 ">
      <Banner />
      <BestSellingBook />
      <FavoriteBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
}

export default Home;
