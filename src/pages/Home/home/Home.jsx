import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import TopClasses from "../topClasses/TopClasses";
import TopInstructors from "../topInstructors.jsx/TopInstructors";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>

            <About></About>

            <TopClasses></TopClasses>

            <TopInstructors></TopInstructors>

            <Contact></Contact>

        </div>
    );
};

export default Home;