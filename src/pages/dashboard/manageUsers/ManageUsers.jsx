/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleMakeAdmin = (user) => {

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                
                if (res.data.modifiedCount > 0) {
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

        axiosSecure.patch(`/users/instructor/${user._id}`,user)
            .then(res => {
                console.log(res);
                if (res.data.result.modifiedCount > 0 && res.data.instructorResult.insertedId) {
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
            <Helmet>
                <title>Music Scholling | Manage Users</title>
            </Helmet>
            <h2 className="text-4xl font-bold my-5 text-center">Manage <span className="text-violet-600">All Users</span></h2>
            <hr />

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
                                    <button onClick={() => handleMakeAdmin(usr)} className="btn btn-primary btn-sm" disabled={usr.role == "admin"}>Make Admin</button>
                                    <button onClick={() => handleMakeInstructor(usr)} className="btn btn-warning btn-sm" disabled={usr.role == "instructor"}>Make Instructor</button>
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