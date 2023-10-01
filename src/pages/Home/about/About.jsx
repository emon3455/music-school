
import { Fade } from "react-awesome-reveal";
const About = () => {
    return (
        <div id="about" className="my-10  p-4">

            <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center mt-0 gap-5" >
                <div className="order-2 md:order-1">

                    <p className="text-red-600 font-bold">About Us</p>
                    <Fade delay={1e3} cascade damping={1e-1} className="text-xl lg:text-2xl font-bold text-violet-600 mb-7">
                        Music Scholling BD
                    </Fade>

                    <p className="mb-5 text-justify">
                        Welcome to Music Schooling BD, a leading institution dedicated to providing exceptional music education in Bangladesh. We are committed to nurturing musical talent, fostering creativity, and promoting a deep appreciation for the art of music. Our school offers a comprehensive curriculum, highly skilled faculty, and state-of-the-art facilities to ensure a transformative learning experience for our students.
                    </p>

                    <p className=" mb-5 text-justify">
                        <span className="font-semibold">Our Mission:</span> <br />
                        At the core of [Music School Name] is a simple yet profound mission: to provide exceptional music education that empowers individuals to reach their full musical potential. We strive to create a space where students of all ages and backgrounds can explore the world of music, develop their skills, and express themselves through the universal language of melody and rhythm.
                    </p>



                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:p-6 order-1">
                    {/* <Lottie className="w-full h-full" animationData={about} loop={true} /> */}
                    <img src="https://images.unsplash.com/photo-1504960868016-9a59a5172321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="about image" />
                    <img src="https://plus.unsplash.com/premium_photo-1682293779538-dc07a400e604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="about image" />
                    <img className="md:col-span-2 mx-auto md:w-1/2" src="https://images.unsplash.com/photo-1522642888367-8d98750c243c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="about image" />
                    <img src="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="about image" />
                    <img src="https://images.unsplash.com/photo-1638237389937-247901e0b29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="about image" />
                </div>
            </div>
        </div>

    );
};

export default About;