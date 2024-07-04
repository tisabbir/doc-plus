import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Navbar from "../Navbar/Navbar";
import Offer from "../Offer/Offer";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <WhoWeAre />
      <Service />
      <Testimonial />
      <FAQ />
      <Offer />
    </div>
  );
};

export default Home;
