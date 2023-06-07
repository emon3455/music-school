
import Lottie from "lottie-react";
import about from "../../../../public/about.json";

const About = () => {
    return (
        <div className="my-10  p-4 bg-gray-50">

            <h4 className="text-4xl font-extrabold text-violet-500 text-center">About US</h4>

            <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center mt-0 gap-5" >
                <div className="order-2 md:order-1" data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="1500">

                    <h2 className="text-4xl font-bold my-7">Music Scholling BD</h2>
                    <p className="font-medium text-gray-700 mb-5 text-justify">
                        Welcome to Music Schooling BD, a leading institution dedicated to providing exceptional music education in Bangladesh. We are committed to nurturing musical talent, fostering creativity, and promoting a deep appreciation for the art of music. Our school offers a comprehensive curriculum, highly skilled faculty, and state-of-the-art facilities to ensure a transformative learning experience for our students.
                    </p>

                </div>
                <div className="w-full h-96 order-1" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500">
                    <Lottie className="w-full h-full" animationData={about} loop={true} />
                </div>
            </div>

            <div className="my-5 rounded-xl shadow-2xl mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">

                <div className="p-2 border-b-2 md:border-r-2">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">11% more than last month</div>
                </div>

                <div className="p-2 border-b-2 md:border-r-2">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">1.5M</div>
                    <div className="stat-desc">12% more than last month</div>
                </div>

                <div className="p-2 border-b-2 md:border-r-2">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 200 (10%)</div>
                </div>

                <div className="p-2 border-b-2 md:border-r-2">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (5%)</div>
                </div>

            </div>
        </div>
    );
};

export default About;