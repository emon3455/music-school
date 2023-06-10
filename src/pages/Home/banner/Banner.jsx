
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import bnr1 from "../../../assets/banner/bnr1.jpg"
import bnr2 from "../../../assets/banner/bnr2.jpg"
import bnr3 from "../../../assets/banner/bnr3.jpg"
import bnr4 from "../../../assets/banner/bnr4.jpg"
import bnr5 from "../../../assets/banner/bnr5.jpg"
import bnr6 from "../../../assets/banner/bnr6.jpg"

import "./banner.css";

const Banner = () => {
    return (
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide >
                    <div className="relative">
                        <img className="" src={bnr3} />
                        <h2 className="text-white text-center lg:text-2xl top-0 bg-opacity-30 h-full w-full absolute bg-gray-900">Suitable Places for Music</h2>            
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative">
                        <img className="" src={bnr1} />
                        <h2 className="text-white text-center lg:text-2xl top-0 bg-opacity-50 h-full w-full absolute bg-gray-900">Extra Cares For Childrens</h2>            
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative">
                        <img className="" src={bnr2} />
                        <h2 className="text-white text-center lg:text-2xl top-0 bg-opacity-50 h-full w-full absolute bg-gray-900">Avaialble All Music Instruments</h2>            
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative">
                        <img className="" src={bnr4} />
                        <h2 className="text-white text-center lg:text-2xl top-0 bg-opacity-50 h-full w-full absolute bg-gray-900">Special Lessons</h2>            
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative">
                        <img className="" src={bnr5} />
                        <h2 className="text-white text-center lg:text-2xl top-0 bg-opacity-50 h-full w-full absolute bg-gray-900">We Can provide Musician Home Tutors</h2>            
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative">
                        <img className="" src={bnr6} />
                        <h2 className="text-white text-center lg:text-2xl top-0 bg-opacity-50 h-full w-full absolute bg-gray-900">Music Writing Lessons</h2>            
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;