import Banner from "../banner/Banner";
import TopClasses from "../topClasses/TopClasses";
import TopInstructors from "../topInstructors.jsx/TopInstructors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <TopClasses></TopClasses>

            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;