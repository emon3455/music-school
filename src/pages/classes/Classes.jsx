/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {

    const [classes, refetch] = useClasses();

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
                studentEmail: user.email,
                paymentStatus: "pending"
            }

            fetch("http://localhost:5000/selectedClass", {
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
                            text: `Class Selected Successfuully!`,
                        })

                        // const updatedClass = {
                        //     availableSeats: cls.availableSeats-1,
                        //     totalStudents: cls.totalStudents+1
                        // }

                        // fetch(`http://localhost:5000/classes/${cls?._id}`, {
                        //     method: "PATCH",
                        //     headers: {
                        //         "Content-Type": "application/json",
                        //     },
                        //     body: JSON.stringify(updatedClass)
                        // })
                        //     .then(res => res.json())
                        //     .then(data => {

                        //         if (data.modifiedCount > 0) {
                        //             refetch();
                        //             Swal.fire({
                        //                 icon: 'success',
                        //                 title: 'Succussfully Done',
                        //                 text: `Class Selected Successfuully!`,
                        //             })
                        //         }

                        //     })
                        //     .catch(err => console.log(err.message))
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

            <h2 className="text-4xl text-center my-5 text-violet-500 font-bold">Our Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    classes.map(classItem => <div key={classItem._id} className={`card card-compact ${classItem.availableSeats === 0 ? "bg-red-200" : "bg-base-100"} shadow-xl`}>

                        <figure><img src={classItem.image} alt="Shoes" /></figure>

                        <div className="card-body w-full">
                            <h2 className="card-title">{classItem.name}</h2>

                            <div className="grid grid-cols-2 text-lg">
                                <p>Teacher: {classItem.instructor}</p>
                                <p>Cost: {classItem.price}</p>
                                <p>Total Student: {classItem.totalStudents}</p>
                                <p>Available Sits: {classItem.availableSeats}</p>
                            </div>

                            <div className="flex justify-between w-full">
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleAddToSelectedClass(classItem)} className="btn btn-info font-bold" disabled={classItem.availableSeats == 0}>Select</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Classes;