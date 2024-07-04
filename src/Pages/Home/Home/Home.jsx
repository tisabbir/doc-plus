import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import WhoWeAre from "../WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner />
            <WhoWeAre />
        </div>
    );
};

export default Home;