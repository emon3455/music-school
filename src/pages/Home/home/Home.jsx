import { Helmet } from "react-helmet-async";
import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import TopClasses from "../topClasses/TopClasses";
import TopInstructors from "../topInstructors.jsx/TopInstructors";
import Location from "../location/Location";

const Home = () => {

    

    return (
        <div>

            <Helmet>
                <title>Music Scholling | Home</title>
            </Helmet>

            <Banner></Banner>

            <About></About>

            <TopClasses></TopClasses>

            <TopInstructors></TopInstructors>

            <Location />
            
            <Contact></Contact>


        </div>
    );
};

export default Home;