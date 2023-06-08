/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
                        text: `${user.name} is Admin Now!`,
                    })
                }
            })
            .catch(er => console.log(er.message))
    }

    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                        text: `${user.name} is Instructor Now!`,
                    })
                }
            })
            .catch(er => console.log(er.message))
    }

    return (
        <div className="w-full">
            <h2 className="text-4xl font-bold text-red-400 my-5 text-center">Manage All Users</h2>

            <div className="overflow-x-auto w-full xl:w-4/5 mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((usr, indx) => <tr key={usr._id}>
                                <th>{indx + 1}</th>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                                <td>{usr.role}</td>
                                <td className="space-x-2 text-center">
                                    <button onClick={() => handleMakeAdmin(usr)} className="btn btn-primary btn-sm" disabled={usr.role == "admin" || usr.role == "instructor"}>Make Admin</button>
                                    <button onClick={() => handleMakeInstructor(usr)} className="btn btn-warning btn-sm" disabled={usr.role == "admin" || usr.role == "instructor"}>Make Instructor</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;