/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructor";

const Classes = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructors();

    const [classes] = useClasses();
    const approvedClass = classes.filter(cls => cls.status === "approved");

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToSelectedClass = (cls) => {

        if (user && user?.email) {

            const { _id, name, image, instructorEmail, instructorName, availableSeats, price, totalStudents } = cls;
            const addedClass = {
                classId: _id,
                name,
                image,
                instructorEmail,
                instructorName,
                price: parseFloat(price),
                studentName: user.displayName,
                studentEmail: user.email
            }

            fetch("https://music-school-server-rho.vercel.app/selectedClass", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Succussfully Done',
                            text: `Class Selected Successfully!`,
                        })
                    }
                })
                .catch(er => console.log(er.message))
        }
        else {
            Swal.fire({
                title: 'Please Log in To Select Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/signin", { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="p-2 my-5">
            <Helmet>
                <title>Music Scholling | Classes</title>
            </Helmet>

            <Bounce className="text-4xl text-center my-5 text-violet-500 font-bold">Our Classes!!!</Bounce>
            <hr />

            <div className="grid mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    approvedClass.map(classItem => <div key={classItem._id} className={`card shadow-md shadow-yellow-300/50 card-compact flex flex-col ${classItem.availableSeats === 0 ? "bg-red-200" : "bg-base-100"} shadow-2xl`}>

                        <figure><img src={classItem.image} alt="classes" /></figure>

                        <div className="card-body w-full  justify-end">
                            <h2 className="card-title">{classItem.name}</h2>

                            <div className="grid grid-cols-2 text-lg">
                                <p>Teacher: {classItem.instructorName}</p>
                                <p>Cost: {classItem.price}</p>
                                <p>Total Student: {classItem.totalStudents}</p>
                                <p>Available Sits: {classItem.availableSeats}</p>
                            </div>

                            <div className="card-actions justify-end">
                                <button onClick={() => handleAddToSelectedClass(classItem)} className="btn btn-info font-bold" disabled={classItem.availableSeats == 0 || isAdmin || isInstructor}>Select</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Classes;