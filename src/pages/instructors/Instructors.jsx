import { useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/instructors")
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(er => console.log(er.message))
    }, [])

    return (
        <div className="p-2 my-5">
            <Helmet>
                <title>Music Scholling | Instructors</title>
            </Helmet>

            <Bounce className="text-4xl text-center my-5 text-violet-500 font-bold">Our Instructors !!!</Bounce>
            <hr />

            <div className="grid mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    instructors.map(teacher => <div key={teacher._id} className="card shadow-md shadow-sky-300/50  card-compact flex flex-col bg-base-100">

                        <figure><img src={teacher.image} alt="Shoes" /></figure>

                        <div className="card-body  justify-end">
                            <h2 className="card-title">{teacher.name}</h2>
                            <p>Mail: {teacher.email}</p>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructors;