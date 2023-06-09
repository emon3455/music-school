/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import SendFeedBack from "./SendFeedBack";
import { Link } from "react-router-dom";

const ManageClasses = () => {

    const [classes, refetch] = useClasses();

    const handleApprovedClass = (cls) => {
        fetch(`http://localhost:5000/classes/approved/${cls._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Succussfully Done',
                        text: `${cls.name} is Approved!!`,
                    })
                }
            })
            .catch(er => console.log(er.message))
    }

    const handleDenyClass = (cls) => {
        fetch(`http://localhost:5000/classes/deny/${cls._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'warning',
                        title: 'Succussfully Done',
                        text: `${cls.name} is Deny!!`,
                    })
                }
            })
            .catch(err => console.log(err.message))
    }



    return (
        <div className="w-full">

            <h2 className="text-4xl font-bold text-red-400 my-5 text-center">Manage Classes</h2>

            <div className="overflow-x-auto w-full mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Ins. Name</th>
                            <th>Ins. Email</th>
                            <th>Available Sit</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            classes.map((cls, indx) => <tr key={cls._id}>
                                <th>{indx + 1}</th>
                                <td>{cls.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.instructorName}</td>
                                <td>{cls.instructorEmail}</td>
                                <td>{cls.availableSeats}</td>
                                <td>${cls.price}</td>
                                <td>{cls.status}</td>
                                <td className="space-x-2 text-center">
                                    <button onClick={() => handleApprovedClass(cls)} className="btn btn-primary btn-sm" disabled={cls.status == "approved" || cls.status == "deny"}>Approve</button>
                                    <button onClick={() => handleDenyClass(cls)} className="btn btn-warning btn-sm" disabled={cls.status == "approved" || cls.status == "deny"}>Deny</button>
                                    <Link to={`classes/${cls._id}`} className="btn btn-info btn-sm">Feedback</Link>
                                    
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClasses;