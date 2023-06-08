import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/teachers")
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(er => console.log(er.message))
    }, [])

    return (
        <div className="p-2 my-5">
            <Helmet>
                <title>Music Scholling | Instructors</title>
            </Helmet>

            <h2 className="text-4xl text-center my-5 text-violet-500 font-bold">Our Instructors</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    instructors.map(teacher => <div key={teacher._id} className="card card-compact bg-base-100 shadow-xl">

                        <figure><img src={teacher.image} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">{teacher.name}</h2>
                            <p>Mail: {teacher.email}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-info font-bold" disabled={teacher.availableSeats == 0}>Select</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructors;