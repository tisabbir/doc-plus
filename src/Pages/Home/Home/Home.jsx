import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
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
        </div>
    );
};

export default Home;