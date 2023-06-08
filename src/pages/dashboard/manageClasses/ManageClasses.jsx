/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClasses = () => {
    

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })



    return (
        <div className="w-full">
            <h2 className="text-4xl font-bold text-red-400 my-5 text-center">Manage Classes</h2>

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

                        

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClasses;