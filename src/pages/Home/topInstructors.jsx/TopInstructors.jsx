import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const TopInstructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("https://music-school-server.onrender.com/instructors")
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(er => console.log(er.message))
    }, [])

    return (
        <div className="p-2 my-5">

            <h2 className="text-xl lg:text-4xl text-center my-5 text-violet-500 font-extrabold">Our Top Instructors</h2>

            <Marquee direction="right">
                <div className="grid grid-cols-6 gap-5 p-4">
                    {
                        instructors.slice(0, 6).map(teacher => <div key={teacher._id} className="card card-compact bg-base-100 shadow-lg shadow-orange-300/50">

                            <figure><img src={teacher.image} alt="instructor" className="w-60 mx-auto" /></figure>

                            <div className="card-body">
                                <h2 className="card-title">{teacher.name}</h2>
                            </div>

                        </div>)
                    }
                </div>
            </Marquee>



        </div>
    );
};

export default TopInstructors;