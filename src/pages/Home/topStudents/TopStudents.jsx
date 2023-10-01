import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const TopStudents = () => {
    return (
        <main id="TStudent" className="my-10 p-2">

            <h2 className="text-xl lg:text-4xl text-center my-4 text-violet-500 font-extrabold">Top Students</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/XS9T9JC/emon.png" alt="top student" className="h-[500px] w-32" />
                    <h3 className="text-2xl font-semibold text-center text-white -mt-24 ">Emon</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="top student" className="h-[500px] w-32" />
                    <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Samia</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="top student" className="h-[500px] w-32" />
                    <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Shilpy</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="top student" className="h-[500px] w-32" />
                    <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">John</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="top student" className="h-[500px] w-32" />
                    <h3 className="text-3xl font-semibold text-center text-white -mt-24 ">Jony</h3>
                </SwiperSlide>



                <SwiperSlide>
                    <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="top student" className="h-[500px] w-32" />
                    <h3 className="text-3xl font-semibold text-center text-white -mt-24">Shovon</h3>
                </SwiperSlide>

            </Swiper>
        </main>
    );
};

export default TopStudents;