
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

                <SwiperSlide className="relative">
                    <img src={bnr3} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr2} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr4} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr5} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr6} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr2} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bnr4} />
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;