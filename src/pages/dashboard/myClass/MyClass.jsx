/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyClass = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: myClasses = [] } = useQuery({

        queryKey: ['myClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myclasses/${user?.email}`)
            return res.data;
        },
    })

    return (
        <div>
            <Helmet>
                <title>Music Scholling | My Classes</title>
            </Helmet>

            <h2 className="text-4xl text-center font-extrabold text-red-500 mt-5">My Classes {myClasses.length}</h2>

            <div className="mt-5 overflow-x-auto w-full mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Available Sit</th>
                            <th>TotalStudents</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myClasses.map((cls, indx) => <tr key={cls._id}>
                                <th>{indx + 1}</th>
                                <td>{cls.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.availableSeats}</td>
                                <td>{cls.totalStudents}</td>
                                <td>${cls.price}</td>
                                <td>{ cls.status}</td>
                                <td className="space-x-2 text-center">
                                    <Link to={`singleClass/${cls._id}`} className="btn btn-warning btn-sm">Update</Link>
                                </td>
                                <td>{cls.status=="deny" && cls.feedback}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClass;