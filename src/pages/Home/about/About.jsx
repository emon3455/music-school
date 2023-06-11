
import Lottie from "lottie-react";
import about from "../../../../public/about.json";
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="my-10  p-4">

            <h4 className="text-4xl font-extrabold text-violet-500 text-center">About US</h4>

            <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center mt-0 gap-5" >
                <div className="order-2 md:order-1">

                    <Fade delay={1e3} cascade damping={1e-1} className="text-2xl lg:text-4xl font-bold text-orange-500 my-7">
                        Music Scholling BD
                    </Fade>

                    <p className="font-medium mb-5 text-justify">
                        Welcome to Music Schooling BD, a leading institution dedicated to providing exceptional music education in Bangladesh. We are committed to nurturing musical talent, fostering creativity, and promoting a deep appreciation for the art of music. Our school offers a comprehensive curriculum, highly skilled faculty, and state-of-the-art facilities to ensure a transformative learning experience for our students.
                    </p>                   

                </div>
                <div className="w-full h-96 order-1">
                    <Lottie className="w-full h-full" animationData={about} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default About;