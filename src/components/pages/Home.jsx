import UseTitle from "../../hooks/useTitle";
import Banner from "../utilities/Banner";
import Category from "../utilities/Category";
import Gallery from "../utilities/Gallery";
import HotDeal from "../utilities/HotDeal";
import Newsletter from "../utilities/Newsletter";

const Home = () => {
  UseTitle("Home");

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-32">
      <Banner />
      <Gallery />
      <Category />
      <Newsletter />
      <HotDeal />
    </div>
  );
};

export default Home;
