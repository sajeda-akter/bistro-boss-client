import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Feature from "./Feature/Feature";
import Menu from "./Menu/Menu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner/>
            <Category/>
            <Menu/>
            <Feature/>
          <Testimonial/>

        </div>
    );
};

export default Home;