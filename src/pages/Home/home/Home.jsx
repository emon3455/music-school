import { Helmet } from "react-helmet-async";
import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import TopClasses from "../topClasses/TopClasses";
import TopInstructors from "../topInstructors.jsx/TopInstructors";
import Location from "../location/Location";
import TopStudents from "../topStudents/TopStudents";

const Home = () => {

    

    return (
        <div id="home">

            <Helmet>
                <title>Music Scholling | Home</title>
            </Helmet>

            <Banner/>

            <About/>

            <TopClasses/>

            <TopInstructors/>

            <TopStudents />

            <Location />
            
            <Contact />


        </div>
    );
};

export default Home;