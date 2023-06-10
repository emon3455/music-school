/* eslint-disable no-unused-vars */
import useSelectedClass from "../../../hooks/useSelectedClass";

const MySelectedClass = () => {

    const [selectedClasses, refetch] = useSelectedClass();

    const handleDelete=(cls)=>{
        
    }

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center mt-5 text-red-500">My Selected Class</h2>

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
                            <th>Payment Status</th>
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
                                <td>{cls.paymentStatus}</td>
                                <td className="space-x-2 text-center">
                                    <button onClick={()=> handleDelete(cls)} className="btn btn-error btn-sm">Delete</button>
                                    <button className="btn btn-warning btn-sm">Pay</button>
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