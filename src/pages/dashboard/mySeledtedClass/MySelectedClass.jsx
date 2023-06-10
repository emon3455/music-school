/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MySelectedClass = () => {

    const [selectedClasses, refetch] = useSelectedClass();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/selectedClass/${id}`)
                .then(res=>{
                    console.log(res);
                    if(res.data.deletedCount === 1){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Selected has been deleted.',
                            'success'
                        )
                    }
                })

            }
          })  
    }

    return (
        <div>
            <Helmet>
                <title>Music Scholling | My Selected Class</title>
            </Helmet>
            <h2 className="text-4xl font-bold my-5 text-center">Your <span className="text-violet-600">Selected</span> Classes</h2>

            <div className="overflow-x-auto w-full mt-10 mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Ins. Name</th>
                            <th>Ins. Email</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectedClasses.map((cls, indx) => <tr key={cls._id}>
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
                                <td>${cls.price}</td>
                                <td className="space-x-2 text-center">
                                    <button onClick={()=> handleDelete(cls._id)} className="btn btn-error btn-sm"> Delete </button>
                                    <Link to={`${cls._id}`} className="btn btn-warning btn-sm">Pay</Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySelectedClass;